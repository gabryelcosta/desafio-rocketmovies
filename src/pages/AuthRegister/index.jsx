import { Container, Message } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function AuthRegister(){
  return(
    <Container>
      <Message>
        <h1>Cadastro efetuado com sucesso.</h1>
        <p>Você sera redirecionado automaticamente, caso não seja redirecionado clique no botão abaixo.</p>
        <Link to="/"><Button title="Home" /></Link>
      </Message>
    </Container>
  )
}