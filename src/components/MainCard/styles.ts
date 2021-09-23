import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 300px;
  margin: 0 auto;
  background-color: #FBDFDB;
  border-radius: 30px;
  display: flex;
  margin-bottom: 50px;

  .containerText {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
  } 

  h2 {
    color: var(--text-title);
  }

  p { 
    color: var(--text-title);
  }

  img {
      margin: 0 auto;
      padding: 15px;
      height: 250px;
  }

`;