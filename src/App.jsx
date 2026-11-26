import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import Input from './components/Input/Input'
import Card from './components/Card/Card'
import Alert from './components/Alert/Alert'

function App() {
  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold">Mini Biblioteca UI</h1>

      <div className="flex gap-3">
        <Button variant="primary">Primário</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="danger">Perigo</Button>
      </div>

      <div className="flex gap-2">
        <Badge cor="blue">Novo</Badge>
        <Badge cor="green">Ativo</Badge>
        <Badge cor="red">Erro</Badge>
        <Badge cor="yellow">Pendente</Badge>
      </div>

      <Input label="Nome" placeholder="Digite seu nome" />

      <Card titulo="Exemplo" descricao="Card estilizado/feito com Tailwind" imagem="https://picsum.photos/400/200" />

      <Alert variant="success">Operação realizada com sucesso!!</Alert>
      <Alert variant="error">Algo deu errado.</Alert>
      <Alert variant="warning">Atenção a este aviso.</Alert>
    </div>
  )
}

export default App