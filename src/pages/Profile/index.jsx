import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Container, Form, Avatar } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/"><ButtonText icon={AiOutlineArrowLeft} title="Voltar" /></Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/gabryelcosta.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Old Password"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="New Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}