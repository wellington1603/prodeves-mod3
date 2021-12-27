import React from "react";
import { useState } from "react";
import style from './galleryImg.module.scss'

const GalleryImg = ({images}) => {

    const [selected, setSelected] = useState(images[0])

    return(
        <div>
            <div className={style.container}>
                <img src={selected} alt="" className={style.img}/>
                <div className={style.imgContainer}>
                    {images.map((image, index) => (
                        <img 
                        style={{border: selected === image ? '2px solid black': ''}}
                        key={index} src={image} 
                        alt="" 
                        className={style.img} 
                        onClick={() => setSelected(image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryImg