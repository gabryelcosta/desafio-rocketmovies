import { Container, Form, Background, ToEnter } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <div className='inputs'>
          <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          />
          <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          />
        </div>
        <ToEnter to="/">
        <Button title="Entrar" />
        </ToEnter>
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}