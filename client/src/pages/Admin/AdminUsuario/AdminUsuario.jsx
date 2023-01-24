import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getInactiveUsers, getSubmissions, getUsers } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import AdminTab from './AdminTab/AdminTab';
import style from "./AdminUsuario.module.css";
import DeleteModal from './UserTable/DeleteModal/DeleteModal';
import ValidationModal from './UserTable/ValidationModal.jsx/ValidationModal';


export default function AdminUsuario() {

  const  {submissions, res, users} = useSelector( state => state.prueba.admin)
  const dispatch = useDispatch()
  
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userIdProvisory, setUserIdProvisory] = useState("");
  const [createAdminModal, setCreateAdminModal] = useState(true)

  /// ---------- START TOGGLES -----------
  
  // toggle to open/close APROVED/DECLINE SUBMISSION
  const toggleModal = () => {
    setModal(!modal)
    setUserIdProvisory("")
    dispatch(getUsers())
    dispatch(getSubmissions())
  }

  // toggle to open a close DELETE MODAL
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal)
    setUserIdProvisory("")
    dispatch(getUsers())
    dispatch(getInactiveUsers())
  }

  const toggleCreateAdminModal = () => {
    setCreateAdminModal(!createAdminModal)
    
  }

  /// ---------- END TOGGLES -----------

  const provisoryIdHandle = (userId) => {
    setUserIdProvisory(userId)
  }

  // Function to find the submission pending by userId
  const submissionPending = (userId) => {
    let submissionFinded = submissions.find( sbmsn => sbmsn.id_user === userId)
    return submissionFinded;
}

  // function to find the user to be delete 
  const findUser = (userId) => {
    let userToBeDelete = users.find( user => user.id === userId)
    return userToBeDelete;
  }

  // Functions Executions
  let submissionFinded = submissionPending(userIdProvisory)
  let userToBeDelete = findUser(userIdProvisory)


  useEffect(() => {
    dispatch(getUsers())
    dispatch(getSubmissions())
    dispatch(getInactiveUsers())
  }, [dispatch])

  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content_User}>
        <AdminTab 
        toggle={toggleModal} 
        provisoryIdHandle={provisoryIdHandle}
        deleteToggle={toggleDeleteModal}
        createAdminToggle={createAdminModal} 
        />
        {modal && <ValidationModal 
        toggle={toggleModal} 
        submissionFinded={submissionFinded}
        />}
        {deleteModal && <DeleteModal 
        toggle={toggleDeleteModal}
        userToBeDelete={userToBeDelete}
        />}
      </div>
    </div>
  </div>
  )
}
