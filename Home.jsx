import React, { useEffect, useState } from 'react';
import Create from './Create';
import { BsCircleFill } from 'react-icons/bs';
import axios from 'axios';

function Home() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from the backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getTodos'); // Corrected URL
        setTodos(response.data);
      } catch (err) {
        console.error("Error fetching todos:", err.message);
      }
    };

    fetchTodos(); // Initial fetch when component mounts
  }, []); // Empty dependency array to run only once

  // Handle edit action (placeholder for now)
  const handleEdit = (id) => {
    console.log(`Edit task with ID: ${id}`);
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div><h2>No Records</h2></div>
      ) : (
        todos.map((todo) => (
          <div className='task' key={todo._id}>
            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
              <BsCircleFill className='icon' />
              <p>{todo.task}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
