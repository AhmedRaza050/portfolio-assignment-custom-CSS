// import Image from "next/image";
// import Link from "next/link";
// import { FaVolleyballBall } from "react-icons/fa";

// function Hero() {
//     return (
//       <div>
        
//         {/* intro */}
//         <div style={{ display: "flex", justifyContent: "space-evenly",marginTop:"70px", }}>
//           <div>
            
//               {" "}
//               <i style={{ color: "#000000", fontFamily:"Edwardian Script ITC", fontSize:"65px" }}> I am </i> <br />
            
//             <button
//               style={{
//                 width: "480px",
//                 height: "50px",
//                 backgroundColor: "#9024B6",
//                 padding: "6px",
//                 borderRadius: "10px",
//                 border: "none",
//                 color: "#FFFFFF",
//                  fontFamily: 'Arial, sans-serif',
//                 letterSpacing: "3px",fontWeight:"bolder",fontSize: "37px",
//               }}
  
//             >
//               {" "}
//               AHMED RAZA
//             </button>
//             <h1 style={{ fontFamily: 'Arial, sans-serif', color:'#9024B6', fontSize:"59px", fontWeight:"bolder", letterSpacing:"2px", lineHeight:"15px"}}> FRONTEND </h1>
//             <h1 style={{ fontFamily: 'Arial, sans-serif', color:'#000000', fontSize:"59px", fontWeight:"bolder", letterSpacing:"2px", lineHeight:"15px",marginLeft:"70px"}}> DEVELOPER</h1>
//             <p style={{ color: "#000000", fontSize: "16px",  fontFamily: 'Arial, sans-serif' }}>
//               Building Modern UI Designs for Smooth, Engaging User Experiences{" "}
//               <br /> Where Style Meets Functionality.
//             </p>
//             <button
//               style={{
//                 width: "160px",
//                 height: "39px",
//                 backgroundColor: "#9024B6",
//                 padding: "6px",
//                 marginTop:"45px",
//                 borderRadius: "10px",
//                 border: "none",
//               }}
//             >
//               <Link
//                 href="/"
//                 style={{
//                   textDecoration: "none",
//                   color: "white",
//                   fontSize: "16px",
//                   fontFamily: 'Arial, sans-serif',
//                   fontWeight: "bolder",
//                   letterSpacing: "2px",
                  
//                 }}
//                 >
//                 HIRE ME
//               </Link>
//             </button>
//           </div>
//           {/* picture */}
//           <div style={{borderRadius:"50%"}}>
//           <Image src="/myimage.png" alt="myImage" width={400} height={400} style={{border:"2px solid black",borderTopLeftRadius:"50px",borderBottomRightRadius:"50px"}} />
//           </div>
//         </div>
        
//       </div>
//     );
//   }
  
//   export default Hero;
  
  "use client";
import Image from "next/image";
import Link from "next/link";
import { FaVolleyballBall } from "react-icons/fa";

function Hero() {
  return (
    <div style={{ padding: "20px", boxSizing: "border-box" }}>
      {/* intro */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "70px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "500px" }}>
          <i style={{ color: "#000000", fontFamily: "Edwardian Script ITC", fontSize: "65px" }}> I am </i>
          <br />
          <button
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "50px",
              backgroundColor: "#9024B6",
              padding: "6px",
              borderRadius: "10px",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "3px",
              fontWeight: "bolder",
              fontSize: "2rem",
            }}
          >
            AHMED RAZA
          </button>
          <h1
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#9024B6",
              fontSize: "3rem",
              fontWeight: "bolder",
              letterSpacing: "2px",
              lineHeight: "1.2",
            }}
          >
            FRONTEND
          </h1>
          <h1
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#000000",
              fontSize: "3rem",
              fontWeight: "bolder",
              letterSpacing: "2px",
              lineHeight: "1.2",
              marginLeft: "0",
            }}
          >
            DEVELOPER
          </h1>
          <p style={{ color: "#000000", fontSize: "1rem", fontFamily: "Arial, sans-serif", margin: "20px 0" }}>
            Building Modern UI Designs for Smooth, Engaging User Experiences{" "}
            <br /> Where Style Meets Functionality.
          </p>
          <button
            style={{
              width: "160px",
              height: "39px",
              backgroundColor: "#9024B6",
              padding: "6px",
              marginTop: "20px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1rem",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bolder",
                letterSpacing: "2px",
              }}
            >
              HIRE ME
            </Link>
          </button>
        </div>
        {/* picture */}
        <div style={{ borderRadius: "50%", marginTop: "20px" }}>
          <Image
            src="/myimage.png"
            alt="myImage"
            width={400}
            height={400}
            style={{
              border: "2px solid black",
              borderTopLeftRadius: "50px",
              borderBottomRightRadius: "50px",
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            text-align: center;
          }
          h1 {
            font-size: 2.5rem;
          }
          button {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem;
          }
          button {
            font-size: 1.25rem;
            width: 100%;
          }
          i {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
