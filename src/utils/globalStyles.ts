import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
  }
  
  div {
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  
  body, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: normal;
    font-family: MontserratRegular;
    color: #212121;
  }
  
  a {
    font-family: MontserratRegular;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
  }
  
  input {
    outline: none;
    border: none;
  }
`

export default GlobalStyle
