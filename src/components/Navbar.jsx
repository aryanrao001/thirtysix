import React, { useEffect, useRef } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const tagline = useRef(null);
  const line = useRef(null);
  const line2 = useRef(null);
  const agile = useRef(null);
  const agile2 = useRef(null);
  const agile3 = useRef(null);

  useEffect(() => {
    // ScrollTrigger animation for the "line" element
    gsap.fromTo(
      line.current, 
      {
        opacity: 0,
        y: 100, // Start below the normal position
      }, 
      {
        opacity: 1,
        y: 0, // Move to original position
        duration: 2,
        scrollTrigger: {
          trigger: line.current,
          start: "top 80%", // When the element reaches 80% from top of the viewport
          end: "top 30%", // When the element reaches 30% from the top
          scrub: true, // Smoothly animate with scrolling
        }
      }
    );

    gsap.fromTo(
        line2.current, 
        {
          opacity: 0,
          y: 100, // Start below the normal position
        }, 
        {
          opacity: 1,
          y: 0, // Move to original position
          duration: 2,
          scrollTrigger: {
            trigger: line2.current,
            start: "top 80%", // When the element reaches 80% from top of the viewport
            end: "top 30%", // When the element reaches 30% from the top
            scrub: true, // Smoothly animate with scrolling
          }
        }
    );

    const letters = agile.current.children; // Select each letter inside h1

    gsap.fromTo(
      letters,
      { y: 100, opacity: 0 }, // Start below & invisible
      {
        y: 0, opacity: 1,
        duration: 2,stagger:0.3, ease: "power3.out",
        scrollTrigger: {
          trigger: agile.current,
          start: "top 50%", // Starts when 80% of viewport
          end: "top 20%", // Ends when reaching 20%
          scrub: 1, // Smooth scroll effect
        },
      }
    );

    const letters2 = agile2.current.children;

    gsap.fromTo(
        letters2,
        { y: 100, opacity: 0 }, // Start below & invisible
        {
          y: 0, opacity: 1,
          duration: 2,stagger:0.3, ease: "power3.out",
          scrollTrigger: {
            trigger: agile.current,
            start: "top 50%", // Starts when 80% of viewport
            end: "top 20%", // Ends when reaching 20%
            scrub: 1, // Smooth scroll effect
          },
        }
      );

      const letters3 = agile3.current.children;

      gsap.fromTo(
        letters3,
        { y: 100, opacity: 0 }, // Start below & invisible
        {
          y: 0, opacity: 1,
          duration: 2,stagger:0.3, ease: "power3.out",
          scrollTrigger: {
            trigger: agile.current,
            start: "top 50%", // Starts when 80% of viewport
            end: "top 20%", // Ends when reaching 20%
            scrub: 1, // Smooth scroll effect
          },
        }
      );




    // gsap.fromTo(
    // agile.current, 
    // {
    //   opacity: 0,
    //   x: 10, // Start below the normal position
    // }, 
    // {
    //   stagger:0.2,
    //   opacity: 1,
    //   x: 0, // Move to original position
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: agile.current,
    //     start: "top 80%", // When the element reaches 80% from top of the viewport
    //     end: "top 30%", // When the element reaches 30% from the top
    //     scrub: true, // Smoothly animate with scrolling
    //   //   markers: true, // For debugging (optional)
    //   }
    // }
    // );

    


  }, []);

  return (
    <div className='text-black w-full h-screen ' >
      {/* Navbar Section */}
      <nav className='' >
        <div className='fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center h-13 border-b-gray-300 border-b-1 backdrop-blur-sm z-50 ' >
          <div className='w-[25%] text-xl ' >
            <h1>Thirtysixstudio</h1>
          </div>
          <div className='w-[20%] ' >
            <div className='flex rounded-4xl  ' >
              <div className='flex  rounded-4xl border-gray-300 border-2  ' >
                <MdDarkMode className='bg-black rounded-4xl w-10 h-5 p-0.5 text-white ' />
                <MdOutlineDarkMode className='h-5 w-10 p-0.5 ' />
              </div>
            </div>
          </div>
          <div className='flex w-[50%] text-sm ' >
            <h1 className='mx-9' >What we do </h1>
            <h1 className='mx-9' >Who we are </h1>
            <h1 className='mx-9' >How we give back </h1>
            <h1 className='mx-9' >Talk to Us</h1>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className='min-h-110 pt-9 w-full flex flex-col items-center justify-evenly relative'>
        <h1 className='w-[25%] mr-85 text-3xl' >At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h1>
        <p className='w-[25%] mr-85 font-light leading-5 ' >We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>
        <p className='font-light ' >Scroll</p>
      </div>

      <div className='h-110 flex items-end overflow-hidden ' >
        <h1 className='text-[30vh] ml-3' ref={tagline} >ThirtySixStudio</h1>
      </div>

      {/* Second Content Section */}
      <div className='flex justify-between w-full h-120 my-25'>
        <div className='w-[45%] flex justify-end'>
          <h1 className='text-2xl font-light ' >01 <span>-</span> WHAT WE DO </h1>
        </div>
        <div className='w-[45%] flex flex-col justify-between items-start'>
          <h1 className='w-[50%] text-3xl' >We aim to elevate digital production in the advertising space, bringing your ideas to life.</h1>
          <p className='text-[2vh] w-[55%] font-light ' >As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work. <br /><br /> Our commitment to innovation and simplicity ensures your journey with us is smooth and enjoyable.</p>
        </div>
      </div>

      {/* Third Content Section */}
      <div className='flex h-80 items-center justify-center' >
        <div className='w-[60%]'>
          <h1 className='text-2xl pb-5 trigger'>OUR SERVICES</h1><br />
          <h1 className='text-3xl line' ref={line} >We provide captivating design, interactive animations, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or help at a specific phase, we've got you covered.</h1>
        </div>
      </div>

      {/* Fourth Content Section  */}
      <div className='flex justify-between w-full h-80  mt-45'>
        <div className='w-[45%] flex justify-end'>
          <h1 className='text-2xl font-light ' >01 <span>-</span> WHO WE ARE </h1>
        </div>
        <div className='w-[45%] flex flex-col justify-between items-start'>
          <h1 className='w-[50%] text-3xl' >Our vision is to refine digital production while creating social impact and opportunity.</h1>
        </div>
      </div>

      {/* Fifth Content Section  */}
      <div>
        <div className='flex justify-between w-full border-t-2 border-gray-200  border-b-2 items-center' >
            <h1 className='w-[50%] text-[22vh] 'ref={agile} >
            <span className='overflow-hidden' >A</span>
            <span className='overflow-hidden' >g</span>
            <span className='overflow-hidden' >i</span>
            <span className='overflow-hidden' >l</span>
            <span className='overflow-hidden' >e</span>
            </h1>
            <div className='w-[50%]  flex justify-center ' >
                <p className='w-[60%] text-sm' >We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London. Paris, Johannesburg, NewYork, and beyond , we curate the right team for each project and get moving swiftly .</p>
            </div>
        </div>
        <div className='flex justify-between w-full border-t-2 border-gray-200  border-b-2 items-center' >
            <h1 className='w-[50%] text-[22vh] ' ref={agile2} > 
            <span>I</span>
            <span>n</span>
            <span>n</span>
            <span>o</span>
            <span>v</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>v</span>
            <span>e</span>
            </h1>
            <div className='w-[50%]  flex justify-center ' >
                <p className='w-[60%] text-sm ' >We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London. Paris, Johannesburg, NewYork, and beyond , we curate the right team for each project and get moving swiftly .</p>
            </div>
        </div>
        <div className='flex justify-between w-full border-t-2 border-gray-200  border-b-2 items-center' >
            <h1 className='w-[50%] text-[22vh] ' ref={agile3} >
            <span>C</span>
            <span>u</span>
            <span>l</span>
            <span>t</span>
            <span>u</span>
            <span>r</span>
            <span>e</span>
            <span>d</span>
            </h1>
            <div className='w-[50%]  flex justify-center' >
                <p className='w-[60%] text-sm ' >We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London. Paris, Johannesburg, NewYork, and beyond , we curate the right team for each project and get moving swiftly .</p>
            </div>
        </div>
      </div>   

      {/* Sixth Content Section */}
      <div>
        <div className='flex h-150 items-center justify-center' >
            <div className='w-[60%]'>
            <h1 className='text-2xl pb-5 trigger'>HOW WE GIVE BACK</h1><br />
            <h1 className='text-3xl line' ref={line2} >We provide captivating design, interactive animations, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or help at a specific phase, we've got you covered. <br /><br /> We provide captivating design, interactive animations, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or help at a specific phase, we've got you covered.</h1>
            
            </div>
        </div>
      </div>

      {/* Seventh Content Section */}
      <div className='flex justify-between w-full h-120 my-25'>
        <div className='w-[45%] flex justify-end'>
          <h1 className='text-2xl font-light ' >04 <span>-</span> TALK TO US </h1>
        </div>
        <div className='w-[45%] flex flex-col justify-between items-start'>
          <h1 className='w-[50%] text-3xl' >Thirtysixstudio is seeking talented collaborators.</h1>
          <p className='text-[2vh] w-[65%] font-light ' > if you are a multi-talented individual with exceptional communication skills, eager to elevate your digital craft together with us, we want to hear from you . <br /><br />We specifically welcome progressive people who value high-quality work and workplace well-being equallly. At Thirtysixstudio, we believe that one can only exist in the presence of the other.   </p>
        </div>
      </div>

      {/* Eight Content Section */}
      <div>
        <div className='list' >
            {/* <h1 className=' hoverover relative border-t-2 border-gray-200 h-13 items-center justify-center flex pl-0 text-xl ' ><span className='w-[50%]' >Project Managers</span></h1> */}
            <ul className='flex flex-col w-ful ' >
                <li className=' hoverover relative border-t-2 border-gray-200 h-13 items-center justify-center flex pl-0 text-xl ' ><span className='w-[50%]' >Project Managers</span></li>
                <li className=' hoverover relative border-t-2 border-gray-200 h-13 items-center justify-center flex pl-0 text-xl ' ><span className='w-[50%]' >Project Managers</span></li>
                <li className=' hoverover relative border-t-2 border-gray-200 h-13 items-center justify-center flex pl-0 text-xl ' ><span className='w-[50%]' >Project Managers</span></li>
                <li className=' hoverover relative border-t-2 border-gray-200 h-13 items-center justify-center flex pl-0 text-xl ' ><span className='w-[50%]' >Project Managers</span></li>
            </ul>
        </div>
      </div>

      {/* Footer  */}
      <div className=' h-150  flex flex-col justify-evenly ' > 
        <div className='flex justify-center items-center ' >
            <div className='flex justify-center w-[50%] ' >
                <h1 className='w-[10%] ' >Linkedin</h1>
                <h1>Instagram</h1>
            </div>
            <div className='w-[45%]' >
                <h1>hello@thirtysixstudio.com <br />Amsterdam and worldwide </h1>
            </div>
        </div>
        <div className='flex justify-center items-center ' >
            <div className='w-[42%] mr-15 flex justify-center' >All Rights Reserved <br />@2025. Thirtysixstudio </div>
            <div className='w-[40%]  ' ><span className='border-2 border-gray-300 rounded-4xl px-2 py-2' >Privacy Statment </span>  </div>
        </div>
        <div className='flex items-center justify-center' >
            <h6 className='w-[25%] text-xs ' >Thirtysixstudio is registered with the Dutch Chamber of Commerce under registration number KVK 90310152</h6>
            <h1 className='w-[30%] pl-20 text-4xl  ' >Thirtysixstudio</h1>
        </div>
      </div>

      

    </div>  
  )
}

export default Navbar;
