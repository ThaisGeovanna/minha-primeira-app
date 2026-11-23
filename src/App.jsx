import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Lista from './components/Lista/Lista'

function App() {
  const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite']

  return (
    <>
      <Header />

      <main style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
        <Card
          titulo="React"
          descricao="Biblioteca JavaScript para criar interfaces."
          imagem="https://placehold.co/250x150?text=React"
        />
        <Card
          titulo="Vite"
          descricao="Ferramenta de build rápida para projetos web."
          imagem="https://placehold.co/250x150?text=Vite"
        />
        <Card
          titulo="JSX"
          descricao="Sintaxe que mistura JavaScript e HTML."
          imagem="https://placehold.co/250x150?text=JSX"
        />
      </main>

      <section style={{ padding: '0 20px' }}>
        <h2>Tecnologias que estou estudando</h2>
        <Lista itens={tecnologias} />
      </section>

      <Footer />
    </>
  )
}

export default App