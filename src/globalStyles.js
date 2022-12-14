import { createGlobalStyle } from "styled-components";
import SayNext from './assets/fonts/SayNextDemoRegular.ttf';
const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "SayNext";
    src: url(${SayNext}) ;
}
:root {
  --font-family: "SayNext", sans-serif;

  --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
  --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
  
  --color-bg: #fff;
  --color-footer : #031B34;
  --color-blog: #042c54;
  --color-text: #81AFDD;
  --color-subtext: #FF8A71;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

.gradient__text {
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body {
  background: var(--color-bg);
}

a {
  color: unset;
  text-decoration: none;
}
.section__padding {
  padding: 10rem 12rem;
}


`

export default GlobalStyle