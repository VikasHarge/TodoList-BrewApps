import React, { useEffect } from 'react'
import styled from 'styled-components';

const TodoTable = ({todos}) => {

  return (
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
                        {
                            todos && todos.map((todo)=>(
                                <h1>{todos.todoText}</h1>
                            ))
                        }

                    </tbody>

                </StyledTable>
    </>
  )
}

const StyledTable = styled.table`
    margin : 0 auto;
    width: 80%;
    height: fit-content;
    border-radius: 0.6rem 0.6rem 0 0 ;
    padding: 0.5rem;
    border-collapse: collapse;
    display: table;
    background-color : #b2b2b2;
    thead {
        font-size: 15px;
        height: 25px;
        background-color: #b2b2b2;
        border-radius: 0.6rem 0.6rem 0 0 ;

        th{
            padding: 18px 12px;
            color: black;
            background-color : #b2b2b2;
            cursor: pointer;
        }
        th{
            &:first-child{
                border-radius: 0.6rem 0 0 0;
                width : 4rem;
            }
            &:last-child{
                border-radius: 0 0.6rem 0 0;
                width: 150px;
                text-align: center;
            }
        }
    }
    tbody{
        tr{
            vertical-align: middle;
            td{
                vertical-align: middle;
                padding: 14px 18px;
                border-top: 1px dashed rgba(90, 90, 90, 0.2);
                font-size: 12px;
            }
            td{
                &:nth-child(8){
                    text-align: center;
                }
            }
            td{
                &:nth-child(2){
                    width: max-content;
                }
            }
        }
    }

`

export default TodoTable