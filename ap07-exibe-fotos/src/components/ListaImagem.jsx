import React from 'react'
import Imagem from './Imagem'
const ListaImagem = ({photos, estiloDaImagem}) => {
  return (    
    photos.map((photo) => (
      <Imagem
        estiloDaImagem={estiloDaImagem}
        src={photo.src.small}
        alt={photo.alt}
        key={photo.id}/>
    ))  
  )
}

export default ListaImagem