"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({image, title, text}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip(){
        if(!isAnimating){
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

  return (
    <div 
    onClick={handleFlip} 
    className="w-[450px] h-[280px] rounded-md mb-4 mx-4 cursor-pointer">
        <motion.div 
        className='flip-card-inner w-full h-full' 
        initial={false} 
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{duration: 0.3, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            {/* front of card */}
            <div 
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-purple-500 rounded-lg p-4'
            >
                <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-70'/>
                <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    Learn More &gt;
                </div>

            </div>

            {/* back of card */}
            <div 
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-black rounded-lg p-4'
            >
                <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-80 z-[-1]'/>
                <div className='flex flex-col gap-10 py-3 z-[30]'>
                    <h1 className='text-purple-700 text-2xl font-semibold'>
                        {title}
                    </h1>
                    <p className='text-white text-[15px]'>{text}</p>
                </div>

            </div>
                

        </motion.div>
        

    </div>
  )
}

export default ProjectCard
