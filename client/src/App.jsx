
import React, { useState } from 'react'
import { useEffect } from 'react'
import api from './components/api'
import Image from './components/Image'
import './index.css'



let initialRender = true;
let timeout;
const App = () => {
    const [images, setImages] = useState(null)
    const [searchingImage, setsearchingImage] = useState('')

    // handel the searched query in the input field
    useEffect(() => {
        if (initialRender) {
            initialRender = false;
        } else {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                console.log(searchingImage);
                api(`/search/photos/${searchingImage}`).then(data => {
                    console.log('dataa', data.results)
                    setImages(data.results)
                }).catch((err) => console.log('err', err))
            }, 500);
        }

    }, [searchingImage])

    // fetch photos on loading
    useEffect(() => {
        api('./images').then(data => {
            setImages(data)
            console.log(data);
        })
    }, [])

    return (
        <div>


            <input type="search" value={searchingImage} onChange={(e) => setsearchingImage(e.target.value)} />
            {
                !images ? <h2>loading...</h2> :
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 ">
                        {images?.map((image) => (
                            <Image key={image.id} {...image} />
                        ))}
                    </div>

            }
        </div>
    )
}

export default App