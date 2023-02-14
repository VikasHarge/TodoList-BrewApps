import logo from './logo.svg';
import './App.css';
import ActionForm from './components/ActionForm';
import Nav from './components/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoTable from './components/TodoTable';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const todos = useSelector((state)=>state.todos)
  const [ displayTodos, setDisplayTodos] = useState([])
  



  return (
    <>
      <ToastContainer />
      <Nav/>
      <ActionForm />
    </>
  );
}

export default App;
