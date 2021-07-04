import React from 'react'
import Card from './Card'

export default props =>{
    const {nome, nota} = props
    return (
        <Card blue>
            <strong>2ª ATIVIDADE AVALIATIVA -REACT</strong>
         <p>{nome}       Nota: {nota} </p>
                          
        </Card>
    )
}

