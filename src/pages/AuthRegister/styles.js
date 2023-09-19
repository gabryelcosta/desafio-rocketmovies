import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  display: grid;
  grid-template-rows: 0 auto;
  grid-template-areas:
  'content'
  'message';
`


export const Message = styled.div `
  grid-area: message;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 300px;
    margin-top: 50px;
  }
`