import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Introduction = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
            
            <h1 className="mb-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">Hello, I&apos;m</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500"> Connor Austin</span>
            </h1>

            <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
                Welcome to my website!
            </p>

            <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
                As a passionate computer scientist with a keen interest in software engineering and cyber security, 
                I aim to showcase my journey, skills, and projects to you. With a degree in Computer Science under my belt, 
                I have delved deep into the realms of programming, problem-solving, and innovation.
            </p>

            <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
                Throughout my academic and professional career, I have perfected my skills in various programming languages, 
                algorithms, and software development methodologies. I am always seeking new challenges and pushing myself 
                to new boundaries. Whether it&apos;s developing robust web applications, creating efficient algorithms, 
                or architecting scalable systems, I am always eager to tackle new challenges head-on.
            </p>

            <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
                I am currently seeking opportunities in software engineering where I can use my skills to 
                make meaningful contributions to innovative projects. Please reach out if you think we can 
                collaborate or if you have any questions. Thank you for visiting, and I look forward to connecting 
                with you!
            </p>

            <div>
                <a href="/images/MyResume.pdf" download="Connor_Austin.pdf">
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500 via-blue-400 to-blue-500  hover:bg-slate-200 text-black mt-3">
                        <span className="block bg-white hover:bg-gradient-to-br rounded-full px-5 py-2">Download Resume</span>
                    </button>
                </a>

            </div>
        </div>
        <div className="col-span-4 place-self-top mt-4 lg:mt-8">
            <div className="w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative">
                <Image
                    src="/images/IMG_2684.jpg"
                    alt="profile-picture"
                    className="profile-picture absolute transform -translate-x-1/2 -translate-y-3/2 top-3/2 left-1/2"
                    width={350}
                    height={400}
                    
                />
            </div>
        </div>
    </div>
  )
}

export default Introduction