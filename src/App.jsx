import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import './App.css';

function App() {

  const [modalOpen,setModalOpen]=useState(false)

  const [name,setName]=useState("")
  const [message,setMessage]=useState("")
  const [query,setQuary]=useState("")
  const [type,setType]=useState("")
  const [collectedData,setCollectedData]=useState([])

  const [alert,setAlert]=useState('')

  function addUser(){

    if(name===''){
      setAlert("fill the name field")
    }
    else if(message===''){
      setAlert("fill the message field")
    }
    else if(query===''){
      setAlert("fill the query field")
    }
    else if(type===''){
      setAlert("fill the type field")
    }
    else{
    let data={
      name:name,
      message:message,
      query:query,
      type:type
    }
    setCollectedData([...collectedData,data])

    setModalOpen(false)
    setName('')
    setMessage('')
    setQuary('')
    setType('')
    setAlert('')
  }}


  return (

    <>
    <div style={{backgroundColor:" rgba(145, 145, 145, 0.4)",height:"100vh"}}>
      <img id='img' src='https://www.spritle.com/assets/img/logo/logo.svg' alt='error'/>
      <table id='table'>
        <tr>
          <th>NAME</th>
          <th>MESSAGE</th>
          <th>QUERY</th>
          <th>TYPE</th>
        </tr>
        {collectedData && collectedData.length > 0 ? (
        collectedData.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.name}</td>
                <td>{i.message}</td>
                <td>{i.query}</td>
                <td>{i.type}</td>
              </tr>
            );
        })
        ) : (
          <tr>
            <td colSpan="4">No data</td>
          </tr>
        )}
      </table>
      <Button onClick={()=>{setModalOpen(true)}} style={{marginLeft:"45%",marginTop:"20px"}}>ADD USER</Button>
    <Modal title={"Enter the details below :"} open={modalOpen} onCancel={()=>{setModalOpen(false)}} onOk={()=>{setModalOpen(false)}}>
      <div>NAME :</div>
      <Input type='text' placeholder='enter a name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <div>MESSAGE :</div>
      <Input type='text' placeholder='enter a name' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
      <div>QUERY :</div>
      <Input type='text' placeholder='enter a name' value={query} onChange={(e)=>{setQuary(e.target.value)}}/>
      <div>TYPE :</div>
      <Input type='text' placeholder='enter a name' value={type} onChange={(e)=>{setType(e.target.value)}}/>
      <div style={{color:"red"}}>{alert}</div>
      <Button style={{marginLeft:"180px",fontWeight:"700",color:"royalblue",marginTop:"20px"}} onClick={()=>{addUser()}}>ADD USER</Button>
    </Modal>
    </div>
    </>
  );
}

export default App;