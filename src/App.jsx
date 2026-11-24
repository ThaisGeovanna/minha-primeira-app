import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Lista from './components/Lista/Lista'

function App() {
  const hobbies = ['[Pintura]', '[Música]', '[Filmes]', '[Leitura]']
  const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git e GitHub']

  return (
    <>
      <Header />

      <main style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card
          titulo="Sobre mim"
          descricao="Me chamo Thaís, moro em São Luís - MA e estou começando minha jornada no desenvolvimento web."
          imagem="https://placehold.co/250x150?text=Sobre+mim"
        />
        <Card
          titulo="Meus estudos"
          descricao="Atualmente estudo engenharia de software no Ceuma e estou aprendendo React."
          imagem="https://placehold.co/250x150?text=Estudos"
        />
        <Card
          titulo="Meus objetivos"
          descricao="Quero ganhar muito dinheiro e construir projetos que resolvam problemas reais."
          imagem="https://placehold.co/250x150?text=Objetivos"
        />
      </main>

      <section style={{ padding: '0 20px 20px' }}>
        <h2>Meus hobbies</h2>
        <Lista itens={hobbies} />

        <h2>Tecnologias que estou aprendendo</h2>
        <Lista itens={tecnologias} />
      </section>

      <Footer />
    </>
  )
}

export default App