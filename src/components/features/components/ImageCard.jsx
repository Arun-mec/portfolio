import React, { useEffect, useRef, useState } from 'react'

const ImageCard = ({
    image, content, title
}) => {

    const imgRef = useRef();
    const textRef = useRef();
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.style.transform = hovered ? 'scale(1.1)' : 'scale(1)';
            imgRef.current.style.transition = 'transform 0.3s ease';
        }

        if (textRef.current) {
            textRef.current.style.color= hovered ? '#834aee' : 'white';
        }

    }, [hovered])
    

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full bg-secondary cursor-pointer relative rounded-xl md:rounded-2xl overflow-hidden">
            <img
                ref={imgRef}
                src={image}
                alt=""
                className="w-full aspect-square object-cover rounded-xl md:rounded-2xl"/>
            <section
                className="absolute top-[70%] w-full h-[30%] flex flex-col items-start justify-center 
          p-2 md:p-4 gap-2 md:gap-4 bg-secondary rounded-b-xl md:rounded-b-2xl"
            >
                <span ref={textRef} className="text-xl md:text-2xl">{title}</span>
                <span className="text-sm md:text-md text-light">{content}</span>
      </section>
    </div>
    )
}

export default ImageCard