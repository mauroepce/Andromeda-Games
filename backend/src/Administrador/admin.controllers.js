const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Admin } = require("../models/admin");
const { SECRET_PASSOWORD_ADMIN, SECRET } = process.env;

const createNewAdmin = async (req, res) => {
    const admin = req.body;
    try {
        const searchAdmin = await Admin.findOne({
            where: {
                mail: admin.acountAdmin,
            },
        });
        if (!searchAdmin || SECRET_PASSOWORD_ADMIN !== admin.secret_password) {
            return res.status(401).json({
                message:
                    "You do not have authorization to create an admin user",
            });
        }
        const newAdmin = searchAdmin === null ? false : true;
        if (newAdmin) {
            const passwordHash = await bcrypt.hash(admin.password, 10);
            await Admin.create({
                mail: admin.mail,
                password: passwordHash,
            });
        }
        res.status(200).json({ message: "administrador creado con exito" });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const adminLogin = async (req, res) => {
    const { mail, password } = req.body;

    try {
        if (!mail || !password) {
            return res.status(400).json({
                message: "Password or email is require",
            });
        }

        const searchAdmin = await Admin.findOne({
            where: {
                mail,
            },
        });
        if(!searchAdmin){
            return res.status(404).json({
                message: 'Admin not found'
            })
        }
        const passwordVerify = await bcrypt.compare(password, searchAdmin.password)
        if(!passwordVerify){
            return res.status(401).json('Invalid password or email')
        }

        const tokenForAdmin = {
            id: searchAdmin.id,
            mail,  
        };
        const token = jwt.sign(tokenForAdmin, SECRET);
        return res.status(200).json({
            id: searchAdmin.id,
            mail,
            token,
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
};



module.exports = { createNewAdmin, adminLogin };
