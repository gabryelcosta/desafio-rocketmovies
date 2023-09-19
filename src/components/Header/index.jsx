import { Container, Profile} from './styles'
import { FcSearch } from 'react-icons/fc'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function Header(){
  return(
    <Container>
        <Link to="/"><h1>RocketMovies</h1></Link>
      <Input placeholder="Pesquisar pelo título" icon={FcSearch}/>
      <Profile >
        <div>
          <Link to="/profile"><strong>Gabryel Costa</strong></Link>
          <Link to="/login"><span>Sair</span></Link>
        </div>
        <img src="https://github.com/gabryelcosta.png" alt="Foto do usuário"/>
      </Profile>
    </Container>
  )
}