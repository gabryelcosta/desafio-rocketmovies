import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Container, Content } from './styles'
import { Link } from 'react-router-dom'


import { TagMarcadores } from '../../components/TagMarcadores'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function NewMovies(){
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/">
            <ButtonText icon={AiOutlineArrowLeft}  title="voltar" />
          </Link>
          <h1>Novo Filme</h1>

          <div className="input">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <TextArea placeholder="Observações" />

          <h2>Marcadores</h2>
          <div className="marcadores">
            <TagMarcadores value="Ação"/>
            <TagMarcadores value="Terror"/>
            <TagMarcadores isNew placeholder="Nova Tag" />
          </div>

          <div className='buttons'>
            <Button title="Excluir Filme" />
            <Button title="Salvar alterações" />
          </div>
        </Content>
      </main>
    </Container>
  )
}