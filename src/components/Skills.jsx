import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SkillCard = ({
    title, content
}) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }, [open]);

    return (
        <div className="bg-secondary rounded p-4 cursor-pointer gap-2 md:gap-4" onClick={() => setOpen(!open)}>
            <section className="w-full flex items-center justify-between">
                <span className="text-white text-lg md:text-xl">{title}</span>
                <MdOutlineKeyboardArrowDown
                    className={`text-xl md:text-2xl transform transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""
                        }`}
                />  
            </section>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight }}
            >
                <span className="text-light text-md md:text-lg block pt-2">{content}</span>
            </div>
        </div>
    );
}

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            content: "Javascript, Java, C#"
        },
        {
            title: "Frameworks/Libraries",
            content: "React.js, Node.js, Express.js, Next.js"
        },
        {
            title: "Database",
            content: "SQL, MongoDB"
        },
        {
            title: "Additional Tools",
            content: "TailwindCSS, Material UI, Firebase, AWS, GitHub, Jira"
        }]
    return (
        <motion.div
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
                className='w-full smcontainer md:container flex flex-col gap-2 md:gap-4 font-primary'>
                <span className='text-2xl md:text-4xl font-semibold'>Skills That Make 
                    <span className='text-primary'> It Happen</span></span>
                {
                    categories.map((category) => {
                        return (
                            <SkillCard title={category.title} content={category.content} />
                        )
                    })
                }
        </motion.div>
    )
}

export default Skills