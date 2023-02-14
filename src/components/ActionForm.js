import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  StyledBtn,
  StyledContainer,
  StyledInput,
} from "../utils/StyledContainer";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../reduxToolkit/feature/todoSlice";
import { toast } from "react-toastify";
import TodoTable from "./TodoTable";

const ActionForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const [searchBy, setSearchBy]= useState(null);
  const [searchQry, setSearchQry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoText === "") {
      toast.warn("todo value can't be empty");
      return;
    }

    let todoObj = {
      id: uuidv4(),
      todoText: todoText,
      createdAt: Date.now(),
      completed: false,
    };

    dispatch(addTodo(todoObj));
    setTodoText("");
  };

  useEffect(()=>{
    console.log(searchBy);
  },[searchBy])

  return (
    <StyledContainer>
      <ActionContainer>
        {true ? (
          <>
            <Form onSubmit={handleSubmit}>
              <label>Add ToDo to your List</label>
              <div className="input_Container">
                <StyledInput
                  width="70%"
                  type="text"
                  placeholder="Add task to do"
                  value={todoText || ""}
                  onChange={(e) => setTodoText(e.target.value)}
                ></StyledInput>
                <StyledBtn backgroundColor="#ffa500" type="submit">
                  ADD
                </StyledBtn>
              </div>
            </Form>
          </>
        ) : (
          <>
            <Form>
              <label>Update ToDo</label>
              <div className="input_Container">
                <StyledInput
                  width="80%"
                  placeholder="Update task"
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                ></StyledInput>
                <StyledBtn backgroundColor="#ffa500" type="submit">
                  UPDATE
                </StyledBtn>
              </div>
            </Form>
          </>
        )}
        <div className="search_todos" >
            <label htmlFor="search" >Search By</label>
            <select name="search" id="search" value={searchBy || ''} onChange={(e)=>setSearchBy(e.target.value)}  >
                <option value='' >select...</option>
                <option value='name'>Name</option>
                <option value='completed'>Completed</option>
                <option value='pendig'>Pending</option>
            </select>
            <div>
            {
                searchBy === 'name' ? <>
                <StyledInput 
                    width="70%" 
                    placeholder="Enter Task Name" 
                    height='1rem' 
                    value={searchQry}
                    onChange={(e)=>setSearchQry(e.target.value)}
                />
                </> : <></>
            }
            </div>
        </div>
      </ActionContainer>
      <TodoTable />
    </StyledContainer>
  );
};

const ActionContainer = styled.div`
  margin: 13vh auto 1rem;
  width: 60%;
  height: fit-content;
  background-color: #eaeaea;
  border-radius: 1rem;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
  transition: all 0.3s;
  label {
    font-size: 1rem;
    font-weight: 700;
    padding: 0 0.5rem 0.5rem;
  }
  .input_Container {
    display: flex;
    flex-direction: row;
    width: 60%;
    justify-content: center;
    align-items: center;
  }
  .search_todos {
    width: 100%;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    transition: all 0.3s;
    gap : 1rem;
    label {
        margin : 0.5rem 0 0 0;
        font-size : 0.8rem;
        font-weight : 700;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ActionForm;
