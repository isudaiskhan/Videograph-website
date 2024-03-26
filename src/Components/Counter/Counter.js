import React, { useState, useEffect } from 'react';
import image1 from "../Assets/ci-1.png"
import image2 from "../Assets/ci-2.png"
import image3 from "../Assets/ci-3.png"
import image4 from "../Assets/ci-4.png"



const Counter = () => {
  const [experience, setExperience] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const durations = {
      years: 20, // 1 second
      clients: 10, // 2 seconds
      projects: 15, // 3 seconds
    };

    const resetExperience = () => {
      setExperience({
        years: 0,
        clients: 0,
        projects: 0,
      });
    };

    const intervals = Object.keys(experience).map(property => {
      return setInterval(() => {
        setExperience(prevExperience => ({
          ...prevExperience,
          [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 200 : property === 'clients' ? 400 : 250),
        }));
      }, durations[property]);
    });

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', resetExperience);

    // Cleanup: remove event listener and clear intervals
    return () => {
      document.removeEventListener('visibilitychange', resetExperience);
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <>
    <section className="py-36 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

         {/* Box 1 - Completed Projects */}
         <div className="bg-[#1a083d] p-8 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
         <img src={image1} className='mx-auto' />
            <h2 className="text-6xl text-white font-semibold mt-5">{experience.projects}</h2>
            <h2 className="text-2xl text-white font-semibold mt-5">Completed Projects</h2>
          </div>

           {/* Box 2 - Happy Clients */}
           <div className="bg-[#1a083d] p-8 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
           <img src={image2} className='mx-auto' />

            <h2 className="text-6xl text-white font-semibold mt-5">{experience.clients}</h2>
            <h2 className="text-2xl text-white font-semibold mt-5">Happy Clients</h2>
          </div>


          {/* Box 3 - Perspective Clients */}
          <div className="bg-[#1a083d] p-8 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
                   <img src={image3} className='mx-auto' />
            <h2 className="text-6xl text-white font-semibold mt-5">{experience.years}</h2>
            <h2 className="text-2xl text-white font-semibold mt-5">Perspective Clients</h2>
          </div>

         
          
        {/* Box 4 - Completed Projects */}

          <div className="bg-[#1a083d] p-8 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
          <img src={image4} className='mx-auto' />

            <h2 className="text-6xl text-white font-semibold mt-5">{experience.projects}</h2>
            <h2 className="text-2xl text-white font-semibold mt-5">Completed Projects</h2>
          </div>


        </div>
      </div>
    </section>


</>


  );
};

export default Counter;