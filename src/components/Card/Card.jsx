function Card({ titulo, descricao, imagem }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
      <img src={imagem} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{titulo}</h2>
        <p className="text-gray-600">{descricao}</p>
      </div>
    </div>
  )
}

export default Card