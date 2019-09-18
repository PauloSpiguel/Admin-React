import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root{
    /*min-height: 100vh;*/
  }

  body{
    /*background: #7159c1;*/
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }

  #wapper{
    @media only screen and (max-width: 468px) {
      grid-template-columns: 50px calc(100% - 50px);
    }
    display: grid;
    grid-template-columns: 180px calc(100% - 180px);
    grid-template-rows: 100vh;
    grid-template-areas: "aside main"

  }
  #wapper-aside{
    grid-area: aside;


  }
  #wapper-main{
    grid-area: main;
    display: grid;
    grid-template-rows: 64px auto 50px;
    grid-template-areas: "header"
                         "main"
                         "footer";




  }

  `;
