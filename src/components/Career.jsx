import React, { useEffect, useRef, useState } from 'react'
import { LuMoveLeft, LuMoveRight } from 'react-icons/lu'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const CareerCard = ({
    cardData
}) => {

        const [open, setOpen] = useState(false);
        const contentRef = useRef(null);
        const [maxHeight, setMaxHeight] = useState("0px");
    
        useEffect(() => {
            setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
        }, [open]);
    
        return (
            <div className="w-full flex-shrink-0 flex flex-col gap-1 md:gap-2 bg-secondary p-2 md:p-4 rounded" onClick={() => setOpen(!open)}>
                <section className="w-full flex flex-col md:gap-1">

                    <section className='flex flex-row items-center justify-between'>
                    <span className='text-sm md:text-md text-light font-semibold'>{cardData.type}</span>
                        <MdOutlineKeyboardArrowDown
                                className={`text-xl md:text-2xl transform transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""
                                    }`}
                            />  
                    </section>
                    
                    <span className='text-lg md:text-xl'>{cardData.instName}</span>
                    <span className='text-lg md:text-xl'>{cardData.title} <span className='text-md md:text-lg text-light'>{cardData.fromDate} - {cardData.toDate}</span></span>
                    <span className='text-xs md:text-sm text-white'>Technical skills : {cardData.skills}</span>
                    
                       
                </section>
                <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight }}
                >
                    <span className='text-xs md:text-sm text-light'>{cardData.content}</span>
                </div>
            </div>
        );
// [
//     return (
//         <section className='w-full flex-shrink-0 flex flex-col gap-1 md:gap-2 bg-secondary p-2 md:p-4 rounded'>
//             <span className='text-sm md:text-md text-light font-semibold'>{cardData.type}</span>
//             <span className='text-xl md:text-2xl'>{cardData.instName}</span>
//             <span className='text-lg md:text-xl'>{cardData.title} <span className='text-md md:text-lg text-light'>{cardData.fromDate} - {cardData.toDate}</span></span>
//             {
//                 cardData.content && <span className='text-xs md:text-sm text-light'>{cardData.content}</span>
//             }
//             {
//                 cardData.skills && <span className='text-xs md:text-sm text-white'>Technical skills : {cardData.skills}</span>
//             }
//         </section>
//     )]
}

const Career = () => {

    const careerItms = [
        {
            type : "Experience",
            title : "Software Engineer I",
            instName : "Nissan Digital India LLP",
            fromDate : "Sept 2022",
            toDate : "Present",
            content : "Full Stack Developer with hands-on experience in end-to-end application development and optimization across multiple projects. Currently contributing to the ROMDR project at Nissan, leveraging Aras Innovator to automate the engine control unit ROM proposal review process. Spearheaded the development of a COCA dashboard using JavaScript and enhanced key functionalities in both web and Windows Form applications. Took complete ownership of a .NET-based Utility Tool, achieving a 25% performance improvement and enhancing user experience. Also contributed to building a MERN stack internal tool for the Nissan Finance Team to support data-driven decisions. Recognized with a Standing Ovation award for outstanding contributions, known for adaptability, problem-solving, and a strong commitment to excellence.",
            skills : "Javascript, React.js, Node.js, Express.js, MongoDB, SQL, Html & CSS, TailwindCSS, Jira, BitBucket, Datastructures & Algorithms" 
        },
        {
            type : "Education",
            title : "Mechanical Engineering",
            instName : "National Institute of Technology, Calicut",
            fromDate : "June 2018",
            toDate : "May 2022",
            content : "Bachelor of Technology in Mechanical Engineering from NIT Calicut with a GPA of 7.86. Strong foundation in engineering principles, analytical thinking, and problem-solving",
            skills : "Javascript, Java, Datastructures & Algorithms, Frontend Development, Backend Development, AutoCAD Mechanical, Solidworks"
        },
        {
            type : "Internship",
            title : "Translator",
            instName : "PocketFM",
            fromDate : "Feb 2021",
            toDate : "Apr 2021",
            content : "During a 3-month internship at PocketFM, my primary responsibility was transcribing audio content in Malayalam, which was later used as input for AI language model training. This experience significantly improved my content development skills, particularly in transcription, and provided valuable exposure to AI-related projects",
            skills : "Content Development, Transcription"

        }
    ];

    const [current, setCurrent] = useState(0);
    const length = careerItms.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };



    return (
        <section id="about" className='smcontainer md:container
                flex flex-col items-start justify-start gap-1 md:gap-2'>
            <span className='text-2xl md:text-4xl font-semibold'>Chapters on my <span className='text-primary'>Career</span></span>


            <section className='w-full flex flex-col gap-2 md:gap-4'>
                <div className='flex flex-row gap-1 md:gap-2 justify-end'>
                    <button
                        onClick={prevSlide}
                        className="transform bg-primary hover:bg-inverse text-white p-2 rounded-full">
                        <LuMoveLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="transform bg-primary hover:bg-inverse text-white p-2 rounded-full">
                        <LuMoveRight />
                    </button>
                </div>
                <div className="w-full max-w-3xl mx-auto overflow-hidden flex flex-col gap-2 md:gap-4">
                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}>
                        {
                            careerItms.map((item, index) => {
                                return (
                                    <CareerCard cardData={item}/>
                                )
                            }
                        )}
                    </div>  
                </div>
            </section>

        </section>
    )
}

export default Career