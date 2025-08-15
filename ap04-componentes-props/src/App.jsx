import Pedido from "./Pedido"
const App = () => <div>
  <i class="fa-solid fa-hippo fa-3x"></i>
  <div className="container border rounded my-2 p-3">
    <div className="row">
      <div className="col-sm-12 col-lg-6 col-xxl-4">
        <Pedido 
          data="22/05/2025" 
          icone="fa-hdd" 
          titulo="SSD" 
          descricao="SSD Kingston"/>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-4">
        <Pedido 
          data="23/02/2025" 
          icone="fa-book" 
          titulo="Pequeno principe" 
          descricao="Livro clássico"/>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-4">
        <Pedido 
          data="28/02/2025" 
          icone="fa-headphones" 
          titulo="Headphone" 
          descricao="Headphone Bluetooth"/>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-4">
        <Pedido 
          data="03/05/2025" 
          icone="fa-camera" 
          titulo="Câmera" 
          descricao="Câmera GoPro"/>
      </div>
    </div>
  </div>
</div>

export default App