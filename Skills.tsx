import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32' >
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl text-pink-400' >Skills I have worked on !</h2>
                <p className='text-gray-500 pt-2'>Hi, I'm Rida, a web developer passionate about creating clean, efficient, and visually engaging web applications. With a strong foundation in TypeScript, HTML, CSS, and Python, I build scalable solutions and enjoy staying current with modern tools like Tailwind CSS and Next.js.</p>


            </div>
            <div>
                <div className='grid grid-cols-2 text-gray-500 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="fade-down-right">TypeScript</h2>
                    <h2 data-aos="fade-down-right">HTML</h2>
                    <h2 data-aos="fade-down-right">CSS</h2>

                </div>
                <div className='space-y-2'>
                    <h2 data-aos="fade-down-right"> Python</h2>
                    <h2 data-aos="fade-down-right"> Next.js</h2>
                    <h2 data-aos="fade-down-right"> React.js</h2>

                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Skills
