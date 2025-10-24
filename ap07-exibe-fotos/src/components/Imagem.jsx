import React from 'react'

const Imagem = ({src, alt, estiloDaImagem}) => {
  // console.log(id)
  return (
    <div className={estiloDaImagem}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem