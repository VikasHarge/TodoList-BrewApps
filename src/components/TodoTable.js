import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import {IoCheckmarkDoneCircleSharp} from 'react-icons/io5'
import { ErrorMsgContainer } from "../utils/StyledContainer";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../reduxToolkit/feature/todoSlice";

const TodoTable = ({ todos, handleEdit }) => {
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todos.length > 0 ? (
        <>
          <StyledTable>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Task Name</th>
                <th>Created at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos &&
                todos.map((todo, index) => (
                  <tr key={todo.id}>
                    <td>{index + 1}</td>
                    <td>{todo.todoText}</td>
                    <td>{new Date(todo.createdAt).toLocaleString()}</td>
                    <td>
                      <div className="action_icons">
                        <AiFillEdit onClick={() => handleEdit(todo)} />
                        <AiTwotoneDelete onClick={() => deleteTask(todo.id)} />
                        <IoCheckmarkDoneCircleSharp
                            style={todo.completed ? {color : "green"} : {}}
                            onClick={ ()=> dispatch(completeTodo({id : todo.id, completed : !todo.completed})) }
                         />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </StyledTable>
        </>
      ) : (
        <>
          <ErrorMsgContainer color="orange">
            <h1>No Task added yet, please add task</h1>
          </ErrorMsgContainer>
        </>
      )}
    </>
  );
};

const StyledTable = styled.table`
  margin: 0 auto;
  width: 80%;
  height: fit-content;
  border-radius: 0.6rem 0.6rem 0 0;
  padding: 0.5rem;
  border-collapse: collapse;
  display: table;
  thead {
    font-size: 15px;
    height: 25px;
    background-color: #b2b2b2;
    border-radius: 0.6rem 0.6rem 0 0;

    th {
      padding: 18px 12px;
      color: black;
      background-color: #b2b2b2;
      cursor: pointer;
      text-align: center;
      font-size : 1.1rem;
    }
    th {
      &:first-child {
        border-radius: 0.6rem 0 0 0;
        width: 4rem;
      }
      &:last-child {
        border-radius: 0 0.6rem 0 0;
        width: 150px;
      }
    }
  }
  tbody {
    background-color: #eaeaea;
    tr {
      vertical-align: middle;
      td {
        vertical-align: middle;
        text-align: center;
        padding: 14px 18px;
        border-top: 1px dashed rgba(90, 90, 90, 0.2);
        font-size: 14px;
        &:nth-child(2) {
          font-weight: 700;
          font-size : 1rem;
        }
      }
    }
  };
  .action_icons {
    height: 1.2rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    svg {
      cursor: pointer;
      &:hover {
        color: gray;
      }
    }

  }
  .completed_todo {
    color : green;
  };
  .notcompleted_todo{
    color : black;
  }
`;

export default TodoTable;
