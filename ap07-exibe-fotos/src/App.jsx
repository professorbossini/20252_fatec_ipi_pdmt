import Busca from "./components/Busca"

const App = () => {
  return (
    <div className='grid w-9 m-auto p-2 border-1 border-400 border-round'>
      <div>
        <i 
          className="pi pi-android"
          style={{fontSize: '2rem'}}></i>
      </div>
      <div className="col-12">
        Exibir uma lista de...
      </div>
      <div className="col-12">
        <Busca />
      </div>  
    </div>
  )
}
export default App