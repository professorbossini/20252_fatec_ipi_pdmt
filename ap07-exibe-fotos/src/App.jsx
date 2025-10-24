import React from "react"
import Busca from "./components/Busca"
// import { createClient } from 'pexels'
import pexelsClient from "./utils/pexelsClient"
import PexelsLogo from "./components/PexelsLogo"
import ListaImagem from "./components/ListaImagem"

export default class App extends React.Component {

  //declarar uma variável de estado e guardar o vetor photos nela. ela pode se chamar photos
  state = {
    photos: []
  }
  // pexelsClient = null

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo
      }
    })
    .then(result => {
      // console.log(result.data.photos)
      this.setState({photos: result.data.photos})
    })
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   })
  //   .then(result => this.setState({photos: result.photos}))
  // }

  componentDidMount(){
    // this.pexelsClient = createClient('')
  }

  render() {
    return (
      <div className='grid w-9 m-auto p-2 border-1 border-400 border-round-md'>
        <div className="col-12">
          <div className="flex">
            <PexelsLogo />
            <div className="ml-3">
              <i 
                className="pi pi-android"
                style={{fontSize: '2rem'}}></i>
            </div>
          </div>
        </div>
        <div className="col-12">
          Exibir uma lista de...
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagem 
              estiloDaImagem="col-12 sm:col-6 lg:col-4 xl:col-3" photos={this.state.photos}/>
          </div>
        </div>  
      </div>
    )
  }
}
