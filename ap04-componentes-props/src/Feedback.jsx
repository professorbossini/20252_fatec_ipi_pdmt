import React from 'react'

const Feedback = props => {
  return (
    <div className='d-flex justify-content-evenly'>
      <button 
        onClick={props.funcaoOK}
        className="btn btn-primary">
        {props.textoOK}
      </button>
      <button 
        className="btn btn-danger"
        onClick={props.funcaoNOK}>
        {props.textoNOK}
      </button>
    </div>
  )
}

export default Feedback