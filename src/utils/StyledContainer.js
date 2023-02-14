import styled from "styled-components";

export const StyledContainer = styled.div`
    width : 85%;
    height : ${(props)=>props.height || "max-content"};
    padding : 0.3rem 5rem;
    background-color : ${(props)=>props.color || "#ffff"};
    margin : 0 auto;
    transition : all 0.3s;
`

export const StyledInput = styled.input`
    width : ${(props)=>props.width || "100%"};
    height : ${(props)=>props.height || "1.5rem"};
    outline-style : none;
    border : none;
    border-bottom : ${(props)=>props.borderBottom || "2px dashed #ffcc6f"};
    border-radius: 0.3rem;
    padding : ${(props)=>props.padding || "6px 10px"};
    background-color : ${(props)=>props.backgroundColor || '#ffff'};
    transition : all 0.3s;
    &:focus{
        border-bottom-color : #ffa500;
        background-color : ${(props)=>props.backgroundColorFocus || "#ffff"};        
    }
`

export const StyledBtn = styled.button`
    padding : ${(props)=> props.padding || "6px 8px"};
    border-radius : ${(props)=>props.borderRadius || "0.5rem"};
    border : 2px solid ;
    border-color : ${(props)=>props.backgroundColor || "black"};
    background-color : ${(props)=>props.backgroundColor || "black"};
    color : ${(props)=>props.color || "#ffff"};
    font-size : ${(props)=>props.fontSize || "1rem"};
    font-weight : 700;
    transition : all 0.6s;
    margin : 0 0.3rem;
    transition : all 0.3s;
    cursor: pointer;
    &:hover{
        background-color : ${(props)=>props.color || "#ffff"};
        color : ${(props)=>props.backgroundColor || "black"};
        border-color : ${(props)=>props.backgroundColor || "#black"} !important;
    }
`

export const ErrorMsgContainer = styled.div`
    width : 100%;
    height : 30vh;
    display : flex;
    justify-content : center;
    align-items : center;
    h1{
        font-size : 1rem;
        padding : 0.5rem 1rem;
        border : 1px solid ;
        border-color : ${(props)=>(props.color || "red")};
        color : ${(props)=>props.color || "red"};
        border-radius : 6px;
    }
`