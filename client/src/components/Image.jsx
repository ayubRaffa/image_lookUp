import React from 'react'
import { useState } from 'react'

const Image = (props) => {
    const [isShown, setIsShown] = useState(false)

    return (
        <article /* onClick={()=>handleClick()} */>
            <img src={props.urls.regular} alt={props.user.name} loading="lazy" className='' />
            <div>
                <span className='text-gray-400'>user:</span>
                <span>{props.user.name}</span>
            </div>
        </article>
    )
}

export default Image