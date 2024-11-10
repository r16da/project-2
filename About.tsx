import React from 'react';

const About = () => {
  return (
    <div id="about" className='pt-32 container mx-auto'>
      <div className='grid md:grid-cols-2 gap-10'>


        <div className='space-y-8' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h2 className='text-5xl font-bold text-pink-400'>About Me</h2>
          <p className='text-gray-600 text-lg'>
            Hello! I’m Rida, a recent school graduate with a newfound passion for programming and web development. Early this year, I began my coding journey through a government IT initiative, which opened my eyes to the exciting world of technology.
          </p>
          <p className='text-gray-600 text-lg'>
            Since then, I've been dedicated to building my skills in TypeScript, HTML, CSS, Tailwind CSS, and Python. I’m eager to continue learning, creating, and growing as a developer.
          </p>
        </div>


        <div className='space-y-8' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h3 className='text-2xl font-semibold text-pink-400'>Skills & Tools</h3>
          <ul className='list-disc list-inside text-gray-600 text-lg space-y-2'>
            <li>Basic Proficiency: HTML, CSS, Tailwind CSS</li>
            <li>Programming Languages: TypeScript, Python</li>
            <li>Frameworks: Learning Next.js, React</li>
            <li>Responsive Design & Mobile-First Principles</li>
            <li>Version Control: Familiar with Git & GitHub</li>
          </ul>

          <h3 className='text-2xl font-semibold text-pink-400' >My Learning Journey</h3>
          <p className='text-gray-600 text-lg'>
            Through the government initiative, I’ve completed foundational courses, hands-on projects, and exercises that have helped me gain real-world skills. Every project I undertake fuels my passion for programming and motivates me to keep learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

