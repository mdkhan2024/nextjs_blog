 
 

// pages/index.js

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
 

const slides = [
  {
    images:    "/images/project1.png",
    text: 'Live Demo',
    description: 'Github Repo',
    demoLink : "https://coding-classroom.vercel.app/",
    githubLink : 'dsadad',

  
  },
  {
    images:  "/images/project2.png",
    text: 'Live Demo',
    description: 'Github Repo',
    demoLink : "https://codingclassroom1.netlify.app/",
    githubLink : 'dsadad',

 
  },
  {
    images: "/images/project3.png",
    text: 'Live Demo',
    description: 'Github Repo',
      demoLink : "https://react-portfolio-ui.netlify.app/",
      githubLink : 'dsadad',
 
  },
  {
    images:    "/images/project4.png",
    text: 'Live Demo',
    description: 'Github Repo',
    demoLink : "https://ihavelastchance-portfolio.netlify.app/",
    githubLink : 'dsadad',
 
  },
  {
    images:    "/images/project5.png",
    text: 'Live Demo',
    description: 'Github Repo',
    demoLink : "https://microsoft-corporation-lyf.netlify.app/",
    githubLink : 'dsadad',

 
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className='container'>
      {/* <div className='slider'> */}
       
       
        {/* <div className='slideContent'> */}
        <div className='buttonsDiv'> 
        <button onClick={prevSlide} className='navButton'>
          Previous
        </button>
        <Image
       className='slide'
        src={slides[currentSlide].images}
        width={500}
        height={300}
        alt={slides[currentSlide].text}
     
      />
        <button onClick={nextSlide} className='navButton'>
          Next
        </button>
        </div>

        
      {/* dsad */}
          <div className='textOverlay'>
            <Link href={slides[currentSlide].demoLink} className='projectView' target='_blank'>{slides[currentSlide].text}</Link>
            <Link href={slides[currentSlide].githubLink}  className='projectView' target='_blank'>{slides[currentSlide].description}</Link>
          </div>
          {/*  dsad */}

{/* dsadsadad */}
         
          {/* sadasdda */}
        {/* </div> */}
      
        
      {/* </div> */}
    </div>
  );
}
