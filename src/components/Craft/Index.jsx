
import Card from "../Card";
import Button from "../Button";
import {useRef, useEffect, useState} from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4, } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Craft() {

    // const [isMobile, setIsMobile] = useState(false);
    const container = useRef(null);
    const textRef = useRef();

    // useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth <= 768);
    //     };
    
    //     // Attach the event listener
    //     window.addEventListener("resize", handleResize);
    
    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    //   }, [isMobile]);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".texthead")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            if(e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;
        gsap.set('.texthead span', {display: 'inline-block'});
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".ltext",
            start: "top 100%",
            end: "bottom 50%",
            scrub: .5,
            
            }
        });
        tl.from('.texthead span', {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: .1, 

        }) 
    },[]);

    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                trigger: ".cards",
                start: "top 10%",
                scrub: 1,   
                }
            });
            tl.fromTo('.card', {
                y: 600,
                scale: .9,
            }, {
                y: 0,
                scale: 1.1,
                duration: .5,
                ease: Power4,
                transformOrigin: "bottom 50% -50",
            });
        })                           
    }, container );

   
  return (
    <div 
        data-color="cyan" 
        className="craft section w-full sm:flex gap-x-40 justify-between 
          items-center px-8 py-8 sm:px-10 relative "
    >
        <div className="ltext sm:sticky sm:top-[10%] left-0 sm:w-1/2 ">
            <p 
                className="ptag font-[Sansita] text-[2.6vh] sm:text-[2.9vh] 
                font-medium leading-[4.4vh] sm:leading-[4.2vh] "
            >
                Established in 1995, Ability Foundation is committed to fostering an inclusive society where individuals with disabilities are empowered to lead independent, fulfilling lives. The foundation champions the rights and dignity of persons with disabilities through its multifaceted programs, advocacy, and policy interventions. By focusing on education, employment, accessibility, and awareness, Ability Foundation works tirelessly to dismantle barriers and create equal opportunities for all. Guided by the belief that true empowerment comes from self-reliance, the foundation has been a beacon of change, encouraging societal inclusion and respect for diversity.
            </p>
            <h1 className="texthead font-[SansitaReg] text-[0.0vh] leading-[5vh] sm:text-[12vh] sm:leading-[11.5vh] mt-10 mb-10">Building a Barrier-Free Future​</h1>
            {/* button */}
            <Button  bgColor="bg-none" text="JOIN US" />
        </div>
        <div
            ref={container} 
            className="right cards sm:w-1/2  flex items-center justify-center">                
            <Card />
        </div>
    </div>
  )
}

export default Craft



