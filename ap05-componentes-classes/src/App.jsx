import React from 'react'
class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null
    }
  }

  icones = {
    'Primavera': 'tree-large',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowflake'
  }

  obterEstacao = (latitude, data) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estaNoSul = latitude < 0
    if(data >= d1 && data < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if(data >= d3 || data < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'

  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(
          position.coords.latitude,
          dataAtual
        )
        const icone = this.icones[estacao]
        //this.state.icone = icone
        this.setState({
          icone: icone
        })
      },
      (err) => {
        console.log(`Erro: ${err}`)        
      }
    )
  }

  componentDidMount(){
    this.obterLocalizacao()
  }

  render(){
    return(
      <div>
        <div><i className="fa-otter fa-solid"></i></div>
        <div><i className={`fa-solid fa-${this.state.icone}`}></i></div>
        <div>
          <p>Meu app</p>
        </div>
      </div>
    )
  }
}

export default App