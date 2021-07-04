import React from 'react'
import Card from './Card'


export default props =>{
    const {min, max} = props
    const  aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card  green>
            <div>
                <span>
                    <strong>Estarei de recesso {aleatorio} dias </strong>
                </span>
            </div>
            
        </Card>
    )
}

