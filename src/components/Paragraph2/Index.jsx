import img1 from '../../assets/images/review2.jpg'
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function Para2() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara2")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
           
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".textpara2 span", {opacity: .1})
        gsap.to(".textpara2 span", {
            scrollTrigger: {
                trigger: ".para2",
                start: "top 60%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,   
        })
    },[]);
  return (
    <div data-color="white" className="para2 section w-full flex items-center mt-32 px-8
    justify-center -translate-y-1/5 ">
        <div className="text sm:w-[80%] flex flex-col items-center sm:items-end justify-center ">
            <div className='hidden w-[40%] sm:flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara2 sm:w-[40%] text-purple-600 font-[Sansita] text-[2.4vh] sm:text-[3.5vh] font-medium text-center tracking-wide leading-[5vh] mb-10'> India International Disability Film Festival is a biennial event showcasing extraordinary films from around the world that focus on, feature, or are made by people with disabilities. The festival was initially curated by the late Mr. P.K. Nair, renowned film critic, consultant, and former Director of the National Film Archive of India (NFAI). AbilityFest promotes the philosophy of an inclusive society and emphasizes the importance of universal access, featuring captioned and audio-described films in accessible venues.</h3>
            <div className="pers w-[40%] flex flex-col items-center justify-center gap-2">
                <div className="image w-24 h-24 overflow-hidden rounded-full ">
                    <img src={img1} />
                </div>
                <h1 className='text-[2.8vh] sm:text-[3.8vh] font-medium'></h1>
                <h3 className='text-zinc-500 text-[2.4vh] whitespace-nowrap'></h3>
            </div>
        </div>  
    </div>
  )
}

export default Para2
