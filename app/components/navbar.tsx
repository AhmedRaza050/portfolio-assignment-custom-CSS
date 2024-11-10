// import Link from 'next/link'
// import React from 'react'
// import { FaVolleyballBall } from 'react-icons/fa'

// function Navbar() {
//   return (
//     <div><div
//     style={{
//       display: "flex",
//       justifyContent: "space-evenly",
//       alignItems: "center",
//       height: "80px",
//       width: "100%",
//     }}
//   >
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <div
//         style={{
//           height: "50px ",
//           width: "50px",
//           borderRadius: "50%",
//           backgroundColor: "#9024B6",
//            fontFamily: 'Arial, sans-serif',
//           textAlign: "right",
//           color: "#fff",
//           padding: "12px",
//         }}
//       >
//         <FaVolleyballBall style={{fontSize:"40px",marginTop:"5px", marginRight:"5px"}} />
//       </div>
//       <h3 style={{ color: "#9024B6" , fontFamily: 'Arial, sans-serif'}}>AhmedRaza</h3>
//     </div>
//     <ul
//       style={{
//         display: "flex",
//         listStyle: "none",
//         gap: "20px",
//         marginRight: "80px",
//         marginLeft: "80px",
//       }}
//     >
//       <li>
//         <Link
//           href="/"
//           style={{
//             textDecoration: "none",
//             color: "#000000",
//             fontSize: "16px",
//             fontFamily: 'Arial, sans-serif'
//           }}
//         >
//           HOME
//         </Link>
//       </li>
//       <li>
//         <Link
//           href="/about"
//           style={{
//             textDecoration: "none",
//             color: "#000000",
//             fontSize: "16px",
//              fontFamily: 'Arial, sans-serif'
//           }}
//         >
//           ABOUT ME
//         </Link>
//       </li>
//       <li>
//         <Link
//           href="/services"
//           style={{
//             textDecoration: "none",
//             color: "#000000",
//             fontSize: "16px",
//              fontFamily: 'Arial, sans-serif'
//           }}
//         >
//           MY SERVICES
//         </Link>
//       </li>
//       <li>
//         <Link
//           href="/portfolio"
//           style={{
//             textDecoration: "none",
//             color: "#000000",
//             fontSize: "16px",
//             fontFamily: 'Arial, sans-serif'
//           }}
//         >
//           PORTFOLIO
//         </Link>
//       </li>
//       <li>
//         <Link
//           href="/contactMe"
//           style={{
//             textDecoration: "none",
//             color: "#000000",
//             fontSize: "16px",
//             fontFamily: 'Arial, sans-serif'
//           }}
//         >
//           CONTACT ME
//         </Link>
//       </li>
//     </ul>
//     <button
//       style={{
//         width: "160px",
//         height: "33px",
//         backgroundColor: "#9024B6",
//         padding: "6px",
//         borderRadius: "10px",
//         border: "none",
//       }}
//     >
//       <Link
//         href="/"
//         style={{
//           textDecoration: "none",
//           color: "white",
//           fontSize: "16px",
//            fontFamily: 'Arial, sans-serif'
//         }}
//       >
//         DOWNLOAD CV
//       </Link>
//     </button>
//   </div></div>
//   )
// }

// export default Navbar



// responsive code 
"use client"
import Link from 'next/link'
import React from 'react'
import { FaVolleyballBall } from 'react-icons/fa'

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        width: "100%",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: "#9024B6",
            fontFamily: 'Arial, sans-serif',
            textAlign: "center",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaVolleyballBall style={{ fontSize: "30px" }} />
        </div>
        <h3 style={{ color: "#9024B6", fontFamily: 'Arial, sans-serif', marginLeft: "10px" }}>AhmedRaza</h3>
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: "0",
          padding: "0",
        }}
      >
        <li>
          <Link href="/" style={{ textDecoration: "none", color: "#000000", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" style={{ textDecoration: "none", color: "#000000", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link href="/services" style={{ textDecoration: "none", color: "#000000", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
            MY SERVICES
          </Link>
        </li>
        <li>
          <Link href="/portfolio" style={{ textDecoration: "none", color: "#000000", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href="/contactMe" style={{ textDecoration: "none", color: "#000000", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
            CONTACT ME
          </Link>
        </li>
      </ul>
      <button
        style={{
          width: "160px",
          height: "33px",
          backgroundColor: "#9024B6",
          padding: "6px",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "white", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
          DOWNLOAD CV
        </Link>
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          button {
            width: 130px;
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          h3 {
            font-size: 16px;
          }
          button {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
