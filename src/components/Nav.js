import React from 'react'
import styled from 'styled-components'
import logo from '../media/logos/logo.jpeg'

const Nav = () => {
  return (
    <NavDiv>
        <div className='nav_title' > 
            <h1>TODO LIST </h1>
            <span>For</span>
            <img src={logo} />
        </div>
    </NavDiv>
  )
}

const NavDiv = styled.div`
  -webkit-box-shadow: -1px 4px 10px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 4px 10px -8px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 4px 10px -8px rgba(0, 0, 0, 0.75);

  position : fixed;
  top : 0;
  z-index : 9;
  width : 100%;
  height : 8vh;
  padding : 0.5rem 2rem;
  background-color: #b2b2b2;
  display : flex;
  flex-direction : row;
  justify-content : center;
  .nav_title{
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    gap : 1rem;
    img {
        height :90%;
        border-radius : 6px;
    }
  }
`

export default Nav