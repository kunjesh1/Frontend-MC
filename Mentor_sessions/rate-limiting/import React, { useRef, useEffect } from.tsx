import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const items = [
  { title: 'Item 1', description: 'Description for Item 1' },
  { title: 'Item 2', description: 'Description for Item 2' }
  // Add more items as needed
];

const ParallaxGrid = () => {
  useEffect(() => {
    const figures = document.querySelectorAll('.grid figure');
    const parallaxFactor = 0.1; // Adjust the factor as needed

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;

      figures.forEach((figure, index) => {
        const translateY = scrollTop * parallaxFactor * (index + 1);
        figure.style.transform = `translateY(${translateY}px)`;
      });
    });

    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  return (
    <main className="grid-rows-9 grid grid-cols-12 gap-4">
      <h3 className="font-calibri col-span-4 col-start-5 row-start-2 row-end-3 text-2xl">
        CSS Grid &amp; Parallax
      </h3>
      <p className="row-end-10 col-span-4 col-start-5 row-start-7">
        Holy moly some floating text!
      </p>
      <figure className="col-span-1 col-start-3 row-start-1 row-end-3">
        <img src="https://source.unsplash.com/random/800x800" alt="" />
      </figure>
      <figure className="col-span-2 col-start-2 row-start-4 row-end-7">
        <img src="https://source.unsplash.com/random/600x600" alt="" />
      </figure>
      <figure className="col-span-2 col-start-9 row-start-1 row-end-3">
        <img src="https://source.unsplash.com/random/900x900" alt="" />
      </figure>
      <figure className="row-end-9 col-span-2 col-start-1 row-start-7">
        <img src="https://source.unsplash.com/random/500x500" alt="" />
      </figure>
      <figure className="row-end-10 col-span-2 col-start-11 row-start-7">
        <img src="https://source.unsplash.com/random/700x700" alt="" />
      </figure>
      <figure className="col-span-1 col-start-11 row-start-4 row-end-5">
        <img src="https://source.unsplash.com/random/300x300" alt="" />
      </figure>
    </main>
  );
};

export default ParallaxGrid;

// const ParallaxGrid = () => {
//   const controls = useAnimation();

//   const columnVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const rowVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 }
//   };

//   const startAnimation = async () => {
//     await controls.start('visible');
//   };

//   return (
//     <motion.div
//       className="grid grid-cols-4 grid-rows-5 gap-4"
//       variants={columnVariants}
//       initial="hidden"
//       animate={controls}
//       onMouseEnter={startAnimation}
//     >
//       {Array.from({ length: 20 }, (_, index) => (
//         <motion.div
//           key={index}
//           className="rounded-md bg-blue-400 p-4"
//           variants={rowVariants}
//           initial="hidden"
//           animate={controls}
//           onMouseEnter={startAnimation}
//         >
//           {/* Content of each grid item */}
//           <h3>Item {index + 1}</h3>
//           <p>Description for Item {index + 1}</p>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };
