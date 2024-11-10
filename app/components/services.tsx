// import {  FaLaptopCode, } from 'react-icons/fa';
// import { GrCloudComputer } from "react-icons/gr";


// const Services = () => {
//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
//       {/* Section Heading */}
//       <p style={{ fontSize: '17px', fontWeight: 'bolder', marginBottom: '0.5rem',textAlign:"center" }}>MY SERVICES</p>
//       <h2 style={{ color: '#9024B6', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
//         The Services I Provide
//       </h2>
// <div >
      
      
//         <div style={{ display: 'flex',justifyContent:'center', gap: '3rem', alignItems: 'center',marginBottom:"50px"}}>
//         {/* card 1 */}
//         <div style={{
//           backgroundColor: '#D9D9D9',
//           padding: '1.5rem',
//           borderRadius: '10px',
//           height:"210px",
//           width:"420px",
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center'
//         }}>
         
//           <GrCloudComputer style={{fontSize:"100px"}}/>

          
//           <h3 style={{ color: '#9024B6', fontSize: '23px', marginBottom: '0.5rem' }}>WEB DEVELOPMENT</h3>
//           <p style={{ color: '#000000', fontSize: '14px' }}>
//           I am a skilled web developer offering innovative solutions that engage users. With a keen eye for detail and a passion for creating seamless user experiences, I bring ideas to life through code.          </p>
//         </div>

//         {/* {card 2} */}
//         <div style={{
//           backgroundColor: '#8E44AD',
//           color: 'white',
//           padding: '1.5rem',
//           height:"210px",
//           width:"420px",
//           borderRadius: '10px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center'
//         }}>
        
//           <FaLaptopCode style={{  fontSize: '100px' }} />
          
//           <h3 style={{ fontSize: "23px", marginBottom: '0.5rem' }}>FRONTEND DEVELOPMENT</h3>
//           <p style={{ fontSize: '14px' }}>
//           As a talented frontend developer, I specialize in building visually appealing and highly interactive user interfaces. With a focus on both design and performance .  </p>
        
//         </div>
//         </div>
// <div style={{ display: 'flex',justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
//         {/* card 3 */}
//         <div style={{
//           backgroundColor: '#D9D9D9',
//           padding: '1.5rem',height:"210px",
//           width:"420px",
//           borderRadius: '10px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center'
//         }}>
          
//           <FaLaptopCode  style={{fontSize:"100px"}}/>
          
//           <h3 style={{ color: '#9024B6', fontSize: "23px", marginBottom: '0.5rem' }}>GUI DEVELOPMENT</h3>
//           <p style={{ color: '#000000', fontSize: '14px' }}>
//           As a talented frontend developer, I specialize in building visually appealing and highly interactive user interfaces. With a focus on both design and performance .  </p>
//         </div>

//        {/* card 4 */}
//         <div style={{
//           backgroundColor: '#D9D9D9',
//           padding: '1.5rem',
//           borderRadius: '10px',
//           height:"210px",
//           width:"420px",
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center'
//         }}>
         
//           <GrCloudComputer style={{fontSize:"100px"}}/>

          
//           <h3 style={{ color: '#9024B6', fontSize: '23px', marginBottom: '0.5rem' }}>WEB DEVELOPMENT</h3>
//           <p style={{ color: '#000000', fontSize: '14px' }}>
//           I am a skilled web developer offering innovative solutions that engage users. With a keen eye for detail and a passion for creating seamless user experiences, I bring ideas to life through code.          </p>
//         </div>
//       </div>
//       </div>
//       </div>
    
//   );
// };

// export default Services;



"use client"
import { FaLaptopCode } from 'react-icons/fa';
import { GrCloudComputer } from "react-icons/gr";

const Services = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Section Heading */}
      <p style={{ fontSize: '17px', fontWeight: 'bolder', marginBottom: '0.5rem', textAlign: "center" }}>MY SERVICES</p>
      <h2 style={{ color: '#9024B6', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
        The Services I Provide
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
        {/* Card 1 */}
        <div style={{
          backgroundColor: '#D9D9D9',
          padding: '1.5rem',
          borderRadius: '10px',
          height: "210px",
          width: "420px",
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <GrCloudComputer style={{ fontSize: "100px", marginBottom: '1rem' }} />
          <h3 style={{ color: '#9024B6', fontSize: '23px', marginBottom: '0.5rem' }}>WEB DEVELOPMENT</h3>
          <p style={{ color: '#000000', fontSize: '14px' }}>
            I am a skilled web developer offering innovative solutions that engage users. I bring ideas to life through code.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{
          backgroundColor: '#8E44AD',
          color: 'white',
          padding: '1.5rem',
          height: "210px",
          width: "420px",
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FaLaptopCode style={{ fontSize: "100px", marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '23px', marginBottom: '0.5rem' }}>FRONTEND DEVELOPMENT</h3>
          <p style={{ fontSize: '14px' }}>
            As a frontend developer, I specialize in building visually appealing and highly interactive user interfaces.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{
          backgroundColor: '#D9D9D9',
          padding: '1.5rem',
          borderRadius: '10px',
          height: "210px",
          width: "420px",
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FaLaptopCode style={{ fontSize: "100px", marginBottom: '1rem' }} />
          <h3 style={{ color: '#9024B6', fontSize: '23px', marginBottom: '0.5rem' }}>GUI DEVELOPMENT</h3>
          <p style={{ color: '#000000', fontSize: '14px' }}>
            Specializing in visually appealing interfaces, I create highly interactive designs with a focus on performance.
          </p>
        </div>

        {/* Card 4 */}
        <div style={{
          backgroundColor: '#D9D9D9',
          padding: '1.5rem',
          borderRadius: '10px',
          height: "210px",
          width: "420px",
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <GrCloudComputer style={{ fontSize: "100px", marginBottom: '1rem' }} />
          <h3 style={{ color: '#9024B6', fontSize: '23px', marginBottom: '0.5rem' }}>WEB DEVELOPMENT</h3>
          <p style={{ color: '#000000', fontSize: '14px' }}>
            Offering innovative web solutions that engage users and bring seamless experiences to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
