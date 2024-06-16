
import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";


export default function UsersList() {
  const { state, dispatch } = useContext(AuthContext)
  const proxy_url = state.proxy_url;

  useEffect(() => {
    fetchData();
  }, []);

  if (!state.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const fetchData = async () => {
    try {
      const response = await fetch(proxy_url + 'users', {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      }); 

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      
      dispatch({
        type: "SET_USER_LIST",
        payload: { list: data }
      })

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Wrapper>
      <div className="container">
      <ul>{state.usersList.map(user =>
      <li key={user.id}>{user.id}: {user.name} ( {user.email} )</li>
    )}</ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial;
  button{
    all: unset;
    width: 100px;
    height: 35px;
    margin: 10px 10px 0 0;
    align-self: flex-end;
    background-color: #0041C2;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #0041C2;
    &:hover{
      background-color: #fff;
      color: #0041C2;
    }
  }
  >div{
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    .content{
      display: flex;
      flex-direction: column;
      padding: 20px 100px;    
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: auto;
  
      img{
        height: 150px;
        width: 150px;
        border-radius: 50%;
      }
  
      >span:nth-child(2){
        margin-top: 20px;
        font-weight: bold;
      }
  
      >span:not(:nth-child(2)){
        margin-top: 8px;
        font-size: 14px;
      }
  
    }
  }
}
`;