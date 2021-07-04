import './Card.css'
import React from 'react'

function getColor(props){
    if(props.pink) return "Pink"
    if(props.blue) return "Blue"
    if(props.green) return "Green"
    return ""
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header"> 
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}