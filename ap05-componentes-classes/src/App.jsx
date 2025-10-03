import React from 'react'
import Lontra from './Lontra'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'
class App extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   latitude: null,
    //   longitude: null,
    //   estacao: null,
    //   data: null,
    //   icone: null,
    //   mensagemDeErro: null
    // }
    console.log('constructor')
  }

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
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
    if (data >= d1 && data < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
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
          icone: icone,
          estacao: estacao,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          data: dataAtual

        })
      },
      (err) => {
        console.log(`Erro: ${err}`)
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
      }
    )
  }

  componentDidMount(){
    console.log(`componentDidMount`)
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-12'>
            <Lontra tamanho="fa-3x" />
            <Lontra tamanho="fa-3x" />
          </div>
        </div>
        <div className="row">
          <div className='col-sm-12'>
            {
              (!this.state.latitude && !this.state.mensagemDeErro) ?
                <Loading texto="oi"/>
              :
              this.state.mensagemDeErro ?
                // p.border.rounded.p-2.fs-1.text-center
                <p className="border rounded p-2 fs-1 text-center">
                  É preciso dar permissão para acesso à localização. Atualize a página e tente de novo, ajustando a configuração no seu navegador
                </p>

              :
              <EstacaoClimatica 
                icone={this.state.icone}
                estacao={this.state.estacao}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                data={this.state.data}
                mensagemDeErro={this.state.mensagemDeErro}
                obterLocalizacao={this.obterLocalizacao}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
{/* <p>E eu?</p>
  <div style={{fontSize: 32}}>
  <div style={{fontSize: 8}}>
  Estou usando o que eu defino
  </div>
  <div>
  Estou usando o que eu herdei
  </div>
</div> */}
// return <div style={{fontSize: '4em'}}>
//   Tenho 4em
//   <div>
//     Herdei 4em
//   </div>
//   <div style={{fontSize: '2em'}}>
//     Herdo 4em, porém defino 2em
//   </div>
//   <div style={{fontSize: '2rem'}}>
//     Eu defino 2rem
//   </div>
// </div>