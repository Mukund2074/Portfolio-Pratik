import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';

export default function Experience() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    let works = ["UI/UX Design", "Graphic Design", "Web Design", "Application Design", "Responsive Design"];
    let tools = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "Coral Draw"];

    return (
        <section id='experience' className='max-w-[100dvw] min-h-screen overflow-hidden mt-16 p-4 md:p-0 border-t-[1px] md:border-t-0 flex flex-col justify-center items-center'>
            <h1 className=' mx-auto md:translate-y-[-4rem] gradient-text font-bold text-2xl md:text-4xl '>About My
                <ReactTyped className=' ml-2 ' strings={['Expertise', 'Skills']} typeSpeed={100} backDelay={500} backSpeed={100} loop />
            </h1>
            <section
                id="experience"
                ref={ref}
                className="px-6 md:px-12 md:mt-0 mt-8 flex flex-col md:flex-row gap-8 justify-center items-center"
            >

                <div className="w-[80%] md:w-[40%] grid grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? [-900, 30, 0] : -300,
                        }}
                        transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                    >
                        <img
                            src="/src/assets/figma.png"
                            alt="Design Tools"
                            className={`w-full pulse mx-auto max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px] 3xl:max-w-[200px] 3xl:max-h-[200px] h-auto rounded-xl`}
                        />
                    </motion.div>
                    <span></span>
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? [-900, 30, 0] : -300,
                        }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="/src/assets/adobe-illustrator.png"
                            alt="Design Tools"
                            className={`w-full pulse mx-auto max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px] 3xl:max-w-[200px] 3xl:max-h-[200px] h-auto rounded-xl`}
                        />
                    </motion.div>
                    <span></span>
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? [-900, 30, 0] : -300,
                        }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <img
                            src="/src/assets/adobe-xd.png"
                            alt="Design Tools"
                            className={`w-full pulse mx-auto max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px] 3xl:max-w-[200px] 3xl:max-h-[200px] h-auto rounded-xl`}
                        />
                    </motion.div>
                    <span></span>
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? [-900, 30, 0] : -300,
                        }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <img
                            src="/src/assets/adobe-photoshop.png"
                            alt="Design Tools"
                            className={`w-full pulse mx-auto max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px] 3xl:max-w-[200px] 3xl:max-h-[200px] h-auto rounded-xl`}
                        />
                    </motion.div>
                    <span></span>
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? [-900, 30, 0] : -300,
                        }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="/src/assets/corel-draw.png"
                            alt="Design Tools"
                            className={`w-full pulse mx-auto max-w-[80px] max-h-[80px] md:max-w-[150px] md:max-h-[150px] 3xl:max-w-[200px] 3xl:max-h-[200px] h-auto rounded-xl`}
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="w-full md:w-[50%] space-y-6"
                    initial={{ opacity: 0, x: 300 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? [300, -30, 0] : 300,
                    }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl text-center md:text-start font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D1B2] to-[#CD46C8]">
                        Crafting User-Centric Designs
                    </h2>

                    <p className="text-sm md:text-lg text-center md:text-start text-gray-300 font-medium leading-relaxed tracking-wide">
                        As a UI/UX designer, I focus on creating intuitive and visually stunning designs that enhance the user experience. My approach is based on understanding the user's needs and delivering a seamless, engaging interface.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? [900, -30, 0] : 300,
                        }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold gradient-text text-center md:text-start ">What I Do:</h3>
                        <ul className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-4 text-lg text-white">
                            {works.map((work) => (<li key={work} className="min-w-max px-4 py-2 text-xs md:text-sm lg:text-base xl:text-lg rounded-full border-[1px] border-transparent bg-gradient-to-r from-[#0ccfcb] to-[#cd46c8] bg-clip-padding">{work}</li>))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? [900, -30, 0] : 300,
                        }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <div>
                            <h3 className="text-xl md:text-2xl text-center md:text-start font-semibold gradient-text mt-8">Tools I Use:</h3>
                            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-4 text-lg text-gray-300 font-medium">
                                {tools.map((tool) => (<li key={tool} className="spb transition-all text-xs md:text-sm lg:text-base xl:text-lg duration-300 ease-in-out transform">{tool}</li>))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </section>
    );
}
