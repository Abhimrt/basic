import React from 'react'
import { useNavigate } from 'react-router-dom'
import { button } from '../Data'


const Button = () => {
    const navigate = useNavigate();
    return (
        <div className='button grid'>
            {
                button.map((e, i) => (
                    <div className="box center" style={{ justifyContent: "left" }} key={i} onClick={()=>navigate(e.target)}>
                        <h2>{e.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Button