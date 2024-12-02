/**
 * @copyright 2024 Sandun Dissanayake
 * @license Apache-2.0
 */


import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sithija weerasooriya',
      imgSrc: '/images/people-1.jpg',
      
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Dahan Weerasooriya',
      imgSrc: '/images/people-2.jpg',
      
    },
   
   
    
    
  ];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger:'.scrub-slide',
        start:'-200% 80%',
        end:'400% 80%',
        scrub:true
        
      },
      x:'-1000'
    })
  })
  return (
    
    <section 
    id="review"
    className="section overflow-hidden"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                what our Customers say
            </h2>

            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content, name, imgSrc, company},key)=>(
                   <ReviewCard
                    key={key}
                    name={name}
                    imgSrc={imgSrc}
                    company={company}
                    content={content}
                   />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review