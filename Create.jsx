import React, { useState } from 'react'
import axios from 'axios'

const handleAdd = () => {
  axios.post('http://localhost:5000/add', { task })
    .then((result) => {
      console.log(result);
      setTask(''); // Clear input after adding
    })
    .catch((err) => console.log(err));
};


function Create() {
  const [task ,setTask]= useState()
  const handleAdd = () =>{
      axios.post('http://localhost:5000/add', {task:task})
      .then(result=> console.log(result))
      .catch(err => console.log(err))
  }
  return (
    <div className='create form'>
      <input type='text' id='' name='' placeholder='Enter task' onChange={(e) => setTask((e.target.value))}></input>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
