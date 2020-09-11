import styled, { createGlobalStyle } from 'styled-components';
import BGImage from '../assets/library-01.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.1rem;
    }

    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 1.5rem;
    margin: 50px;
  }

  h1 {
    color: #ffc385;
    font-size: 3.4rem;
    text-align: center;
    margin: 20px;
    padding: 14px 44px;
    border: 2px solid #ffc385;
    /* background: #ffc38526;
    text-shadow: 0 0 2px black; */
  }

  .start,
  .next {
    cursor: pointer;
    background: #ffffffcc;
    border: 2px solid gray;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    transition: 0.2s;
  }

  .start:hover,
  .next:hover {
    background: #eaeaea;
  }

  .start {
    max-width: 200px;
  }
`;
