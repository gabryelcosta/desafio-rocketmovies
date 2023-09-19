import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewMovie} from './styles';
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header';
import { Mymovies } from '../../components/Mymovies';

export function Home(){
  return(
    <Container>
      <Header />
      <header>
        <h1>Meus Filmes</h1>
        <NewMovie to="/new">
          <FiPlus/>Adicionar Filme
        </NewMovie>
      </header>
      <main>
        <Content>
          <Link to="/review/1">
          <Mymovies data={{
            title: 'Interestelar',
            grade: '5',
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...`,
            tags: [
              {id: '1', name:'Ficção Científica'},
              {id: '2', name:'Drama'},
              {id: '3', name:'Familia'},
          ]
          }}
          /></Link>
          <Mymovies data={{
            title: 'Velozes e Furiosos 10',
            grade: '4',
            description: `No décimo filme da série Velozes & Furiosos e último da nova trilogia (Velozes 8, 9 e 10), ao longo de muitas missões e contra probabilidades que pareciam impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos e superaram todos os inimigos em seu caminho. Agora, eles devem desafiar o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado na forma de Dante (Jason Momoa), para destruir o mundo de Toretto e destruir tudo - e todos - que ele ama...`,
            tags: [
              {id: '1', name:'Ficção Científica'},
              {id: '2', name:'Corrida'},
              {id: '3', name:'Carros'},
              {id: '4', name:'Ação'},
              {id: '5', name:'Guerra'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Tubarão - A Vingança',
            grade: '1',
            description: `Em Amity, o tubarão inicia a sua vingança começando pela morte de Sean, o filho mais novo de Ellen e Martin Brody. Mike é o único que sobrevive. Ellen, comovida com a morte do filho e sem o marido para a apoiar, vai para as Bahamas por convite de seu filho Michael e conhece um descontraído piloto de aviões. Porém, o terror das profundezas volta e Ellen precisa preparar-se para o confronto final.`,
            tags: [
              {id: '1', name:'Terror'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Próxima Parada: Apocalipse',
            grade: '2',
            description: `Em meio a um desastre, um homem decide cruzar o país com seu futuro sogro em busca da noiva grávida...`,
            tags: [
              {id: '1', name:'Ficção Científica'},
              {id: '2', name:'Drama'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Velocidade Máxima 2',
            grade: '3',
            description: `Annie Porter fica entusiasmada quando o namorado compra um pacote para um cruzeiro de férias. A viagem é uma oferta de paz para ela, que acabou de saber a verdade sobre a vida profissional de Alex. O casal mal sabe que há um plano para tomar o navio...`,
            tags: [
              {id: '1', name:'Ação'},
              {id: '2', name:'Suspense'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'O Paradoxo Cloverfield',
            grade: '0',
            description: `A tripulação de uma estação espacial testa um dispositivo que pode gerar energia ilimitada, mas que corre o risco de criar um terrível paradoxo, deixando-os em uma sombria realidade alternativa...`,
            tags: [
              {id: '1', name:'Ficção Científica'},
              {id: '2', name:'Drama'},
              {id: '3', name:'Suspense'},
              {id: '4', name:'Terror'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Oppenheimer',
            grade: '5',
            description: `Oppenheimer é um filme histórico de drama dirigido por Christopher Nolan e baseado no livro biográfico vencedor do Prêmio Pulitzer, Prometeu Americano: O Triunfo e a Tragédia de J. Robert Oppenheimer, escrito por Kai Bird e Martin J. Sherwin. Ambientado na Segunda Guerra Mundial, o longa acompanha a vida de J. Robert Oppenheimer (Cillian Murphy), físico teórico da Universidade da Califórnia e diretor do Laboratório de Los Alamos durante o Projeto Manhattan - que tinha a missão de projetar e construir as primeiras bombas atômicas...`,
            tags: [
              {id: '1', name:'Ficção Científica'},
              {id: '2', name:'Verídico'},
              {id: '3', name:'Ação'},
          ]
          }}
          />
        </Content>
      </main>
    </Container>
  )
}