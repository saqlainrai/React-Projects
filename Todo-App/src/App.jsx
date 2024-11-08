import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Take Breakfast', done: false },
    { text: 'Sleep at 10', done: true},
    { text: 'Run 30 min', done: false}
  ]);
  const [todo, setTodo] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (todo !== '') {
      setTodos([...todos, { text: todo, done: false}]);
      setTodo('');
    }
    else {
      alert("Please Enter a valid Task");
    }
  }
  function handleTodo(event) {
    setTodo(event.target.value);
  }
  function handleDeletion(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }
  function handleDone(index) {
    setTodos((prevTodos) => prevTodos.map((el, i) => index === i ? {...el, done: !el.done} : el))
  }

  return (
    <>
      <h1>Todo Tasks List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Task: ' value={todo} onChange={handleTodo} />
        <Button 
          type='submit' 
          variant='contained'
          className='addBtn'
          startIcon={<AddCircleIcon/>}
        >
          Add
        </Button>
      </form>
      
      {todos.map((todo, index) => (
        <div className='row' key={index}>
          <div className="content" style={{color: todo.done ? 'green' : 'red'}}>
            {todo.done ? <del>{todo.text}</del> : todo.text}
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleDone(index)}
          >
            { todo.done ? 'Activate' : 'Done' }
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDeletion(index)}
          >
            Delete
          </Button>
        </div>
      ))}
    </>
  )
}

export default App
