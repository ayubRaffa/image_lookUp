import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'


const Image = (props) => {
    const [isShown, setIsShown] = useState(false)



    return (

        <>
            {isShown &&
                <div className="fixed flex justify-center items-center z-10 top-0 left-0 right-0 bottom-0">
                    <div className="relative h-2/4 w-fit flex justify-center flex-col items-center">
                        <div className="absolute top-0 right-0">{IoIosCloseCircle}</div>
                        <img src={props.urls.regular} alt={props.user.name} loading="lazy" className=' h-full' />
                        <div className='flex justify-between'>
                            <span className='text-gray-400'>user:</span>
                            <span>{props.user.name}</span>
                        </div>
                    </div>
                </div>
            }
            <article onClick={() => setIsShown(isShown => !isShown)} >
                <img src={props.urls.regular} alt={props.user.name} loading="lazy" className='' />
                <div className='flex justify-between'>
                    <span className='text-gray-400'>user:</span>
                    <span>{props.user.name}</span>
                </div>

            </article>
        </>
    )

}

export default Image