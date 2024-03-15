import { Header } from './components/header/header'
import './styles/home.scss'
export default function Home() {
  return (
    <main className='container'>
    <Header/>
      <div className="experience">
        <h3>Experiência</h3>
        <p>4 anos atuando como Desenvolvedor Software, em empresas como AYESA, ENGINEERING e MFDIGITALLAW.</p>
        <div className="experecience-time">

        </div>
        <div className="info">
          <h3>Indiomas</h3>
          <div className="leanguages-info">

            <span>EN - Inglês - Básico</span>
            <span>ES - Espanhol - Intermediário</span>
            <span>PT-BR - Português - Nativo</span>
          </div>
          <h3>Educação</h3>
          <div className="education-info">
            <span>Analise e Desenvolvimento de Sistema - Universidade Anhaguera</span>
          </div>

        </div>
        <div className="btns">
          <div className="sociais">

          </div>
          <button>Contato</button>
        </div>

      </div>
    </main>
  );
}
