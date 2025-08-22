import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const pedidos = [
    {
      data: '21/08/2025',
      titulo: 'SSD',
      icone: 'fa-hdd',
      descricao: 'SSD Kingston'
    },
    {
      data: '22/08/2025',
      titulo: 'Concrete Maths',
      icone: 'fa-book',
      descricao: 'Livro do Donald Knuth'
    },
    {
      data: '21/08/2025',
      titulo: 'Heaphone',
      icone: 'fa-headphones',
      descricao: 'Headphone Bluetooth'
    },
    {
      data: '30/07/2025',
      titulo: 'Câmera',
      icone: 'fa-camera',
      descricao: 'Câmera GoPro'
    }
  ]
  const componenteFeedback = (
    <Feedback
      textoOK="Já chegou"
      textoNOK="Ainda não"
      funcaoOK={() => alert("Obrigado pelo feedback!")}
      funcaoNOK={() => alert("Vamos verificar")}
    />
  )
  return <div>
    {/* criar uma lista de hipopotamos e produzir cada jsx com a função map */}
    <div>
      <i class="fa-solid fa-hippo fa-3x"></i>
      <i class="fa-solid fa-hippo fa-flip-horizontal fa-2x"></i>
      <i class="fa-solid fa-hippo fa-md"></i>
      <i class="fa-solid fa-hippo fa-flip-horizontal fa-md"></i>
    </div>
    <div className="container border rounded my-2 p-3">
      <div className="row">
        {
          pedidos.map((pedido) => (
          <div className="col-sm-12 col-lg-6 col-xxl-4">
            <Cartao cabecalho={pedido.data}>
              <Pedido
                icone={pedido.icone}
                titulo={pedido.titulo}
                descricao={pedido.descricao}/>
              <div className="mt-3"></div>
              {componenteFeedback}
            </Cartao>
            <div className="mb-3"></div>
          </div>
          ))
        }
      </div>
    </div>
  </div>
}

export default App