import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useInView } from 'react-intersection-observer';

export default function Projects() {

    const { ref, inView } = useInView({
        // triggerOnce: true, // Ensures the animation only happens once when the section comes into view
        threshold: 0.2, // Triggers when 20% of the section is in view
    });

    // Create a state to track the index of the hovered image
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Handle mouse enter for a specific image (set the hovered index)
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    // Handle mouse leave (reset the hovered index)
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const projects = [
        { name: 'Sliding Animation Landing Page', img: 'src/assets/sliding-landing-page.png', link: 'https://www.behance.net/gallery/211203607/Sliding-Animation-Landing-Page' },
        { name: 'Plant Ecommerce Landing Page', img: 'src/assets/plant-eCommerce.png', link: 'https://www.behance.net/gallery/209740115/E-Commerce-Plant-Website' },
        { name: 'NIKE Shoes Landing Page', img: 'src/assets/Nike-shoes-landing-page.png', link: 'https://www.behance.net/gallery/209898825/Nike-Shoes-Landing-Page' },
        { name: 'Restaurant Menu Page', img: 'src/assets/food-landing-page.png', link: 'https://www.behance.net/gallery/210240191/Food-Animation-Landing-Page' },
        { name: 'Scrolling Animation Landing Page', img: 'src/assets/scrolling-animation.png', link: 'https://www.behance.net/gallery/209809155/Scrolling-Animation-Website' },
        { name: 'Food Delivery App', img: 'src/assets/food-delivery-app.png', link: 'https://www.behance.net/gallery/215547381/Food-Delivery-App' },
    ];

    return (
        <section ref={ref} id="projects" className="min-h-[100dvh] min-w-full border-t-[1px] md:border-t-0  mt-16 py-4 px-16">
            <h1 className=' mx-auto gradient-text font-bold text-2xl md:text-4xl text-center '>Solutions I've Built</h1>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center rounded-lg"
                        initial={{
                            y: index < 3 ? -100 : 100,
                            opacity: 0,
                        }}
                        animate={{
                            y: inView ? 0 : index < 3 ? -100 : 100, // Only animate when in view
                            opacity: inView ? 1 : 0, // Fade in when in view
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 25,
                            delay: inView ? index * 0.2 : 0,
                        }}
                    >
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img
                                src={project.img}
                                alt={project.name}
                                className={`w-auto h-auto min-w-[300px] sm:max-h-[400px] sm:max-w-[400px] 3xl:max-h-[600px] 3xl:max-w-[600px] object-cover rounded-t-lg  hover:scale-105 hover:transition-all hover:duration-500 hover:ease-in-out
                                    ${hoveredIndex === index ? 'spb-bold' : 'grad-border'} 
                                    ${index === 4 ? 'pl-4' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>
                        <h3 className="text-xs md:text-lg mt-4 font-semibold text-white">{project.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
