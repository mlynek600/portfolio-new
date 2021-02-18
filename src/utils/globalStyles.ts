import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    background-color: #F3F3F3;

    @media (orientation: portrait) {
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
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
    color: #283747;
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
