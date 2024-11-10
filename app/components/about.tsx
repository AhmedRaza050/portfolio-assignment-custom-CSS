

// import React from "react";
// import { MdOutlinePentagon } from "react-icons/md";

// function About() {
//   return (
//     <div style={{ display: "flex", marginTop: "100px", gap: "100px" }}>
//       {/* picture  */}
//       <div
//         style={{
//           marginLeft: "50px",
//           height: "500px",
//           width: "500px",
          
//           marginTop: "50px",
//           borderRadius:"10px"
//         }}
//       >
//         <img src="/myImage.png" alt="#" height={500} width={500} style={{borderTopRightRadius:"50px",borderBottomLeftRadius:"50px", border:"2px solid black"}} />
//       </div>
//       {/* text */}
//       <div>
//         <div style={{ marginRight: "50px" }}>
//           {/* Section Heading */}
//           <p
//             style={{
//               fontSize: "22px",
//                fontFamily: 'Arial, sans-serif',
//               fontWeight: "bolder",
//               marginBottom: "0.5rem",
//             }}
//           >
//             ABOUT ME
//           </p>
//           <h2
//             style={{
//               color: "#9024B6",
//               fontSize: "2.5rem",
//                fontFamily: 'Arial, sans-serif',
//               fontWeight: "bold",
//               lineHeight: "50px",
//             }}
//           >
//             Why You Hire Me
//           </h2>
//           <p
//             style={{
//               color: "#000000",
//               lineHeight: "1.6",
//               letterSpacing: "1.5px",
//                fontFamily: 'Arial, sans-serif',
//                fontWeight: "bold",
//               maxWidth: "600px",
//               marginBottom: "2rem",
//               fontSize: "17px",
//             }}
//           >
//             You Should Hire Me As A FRONTEND DEVELOPER Because I Have A Strong
//             Eye For Design and Deveoplment, A Deep Understanding Of User
//             Psychology, And A Track Record Of Creating Intuitive And Visually
//             Appealing Interfaces.
//           </p>

//           {/* Progress Bars */}
//           {[
//             { label: "HTML", progress: 90 },
//             { label: " CSS 3", progress: 75 },
//             { label: "TYPESCRIPT", progress: 81 },
//             { label: "NEXT JS", progress: 62 },
//           ].map((skill, index) => (
//             <div key={index} style={{ marginBottom: "1.5rem" }}>
//               <p
//                 style={{
//                   fontSize: "23px",
//                   fontWeight: "bold",
//                   marginBottom: "0.5rem",
//                 }}
//               >
//                 {skill.label}
//               </p>
//               <div
//                 style={{
//                   position: "relative",
//                   height: "8px",
//                   backgroundColor: "#D9D9D9",
//                   borderRadius: "4px",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     height: "8px",
//                     width: `${skill.progress}%`,
//                     backgroundColor: "#8E44AD",
//                     borderRadius: "4px 0 0 4px",
//                   }}
//                 ></div>
//                 <MdOutlinePentagon
//                   style={{
//                     position: "absolute",
//                     top: "-4px",
//                     right: `${100 - skill.progress}%`,
//                     height: "20px",
//                     width: "20px",
//                     fontWeight: "bold",
//                     backgroundColor: "#E0E0E0",
//                     color: "#8E44AD",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// ;
// export default About;



"use client"
import React from "react";
import { MdOutlinePentagon } from "react-icons/md";

function About() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "100px", gap: "50px" }}>
      {/* picture */}
      <div
        style={{
          height: "100%",
          maxWidth: "500px",
          marginTop: "50px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <img
          src="/myImage.png"
          alt="Profile Picture"
          height="100%"
          width="100%"
          style={{
            borderTopRightRadius: "50px",
            borderBottomLeftRadius: "50px",
            border: "2px solid black",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* text */}
      <div style={{ maxWidth: "600px", padding: "0 20px" }}>
        <div>
          {/* Section Heading */}
          <p
            style={{
              fontSize: "22px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bolder",
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            ABOUT ME
          </p>
          <h2
            style={{
              color: "#9024B6",
              fontSize: "2.5rem",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              lineHeight: "50px",
              textAlign: "center",
            }}
          >
            Why You Should Hire Me
          </h2>
          <p
            style={{
              color: "#000000",
              lineHeight: "1.6",
              letterSpacing: "1.5px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "1rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            You Should Hire Me As A FRONTEND DEVELOPER Because I Have A Strong
            Eye For Design and Development, A Deep Understanding Of User
            Psychology, And A Track Record Of Creating Intuitive And Visually
            Appealing Interfaces.
          </p>

          {/* Progress Bars */}
          {[
            { label: "HTML", progress: 90 },
            { label: "CSS 3", progress: 75 },
            { label: "TYPESCRIPT", progress: 81 },
            { label: "NEXT JS", progress: 62 },
          ].map((skill, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {skill.label}
              </p>
              <div
                style={{
                  position: "relative",
                  height: "8px",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "8px",
                    width: `${skill.progress}%`,
                    backgroundColor: "#8E44AD",
                    borderRadius: "4px 0 0 4px",
                  }}
                ></div>
                <MdOutlinePentagon
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: `${100 - skill.progress}%`,
                    height: "20px",
                    width: "20px",
                    fontWeight: "bold",
                    backgroundColor: "#E0E0E0",
                    color: "#8E44AD",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
            line-height: 1.4;
          }
          p {
            font-size: 1rem;
            line-height: 1.5;
          }
        }
        @media (max-width: 576px) {
          h2 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
