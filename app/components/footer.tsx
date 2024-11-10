// // footer.tsx
// import Link from 'next/link';
// import React from 'react';
// import { FaVolleyballBall , FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer style={{ backgroundColor: '#d9d9d9', textAlign: 'center',padding:"4px" , fontFamily: 'Arial, sans-serif',marginTop:"50px",width:"100%",height:"249px" }}>
//       {/* Logo Section */}
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' ,paddingTop:"20px"}}>
        
//       <div
//             style={{
//               height: "40px ",
//               width: "40px",
//               borderRadius: "50%",
//               backgroundColor: "#9024B6",
//                fontFamily: 'Arial, sans-serif',
//               textAlign: "right",
//               color: "#fff",
//               padding: "12px",
//             }}
//           >
//             <FaVolleyballBall style={{fontSize:"30px",marginTop:"6px", marginRight:"5px"}} />
            
//           </div>
//           <h3 style={{ color: "#9024B6" , fontFamily: 'Arial, sans-serif'}}>AhmedRaza</h3>
//         </div>

//       {/* Navigation Links */}
//       <ul
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             listStyle: "none",
//             gap: "40px",
//             marginRight: "80px",
//             marginLeft: "80px",
//           }}
//         >
//           <li>
//             <Link
//               href="/"
//               style={{
//                 textDecoration: "none",
//                 color: "#000000",
//                 fontSize: "12px",
//                 fontFamily: 'Arial, sans-serif'
//               }}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#about"
//               style={{
//                 textDecoration: "none",
//                 color: "#000000",
//                 fontSize: "12px",
//                  fontFamily: 'Arial, sans-serif'
//               }}
//             >
//               ABOUT ME
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#services"
//               style={{
//                 textDecoration: "none",
//                 color: "#000000",
//                 fontSize: "12px",
//                  fontFamily: 'Arial, sans-serif'
//               }}
//             >
//               MY SERVICES
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#portfolio"
//               style={{
//                 textDecoration: "none",
//                 color: "#000000",
//                 fontSize: "12px",
//                 fontFamily: 'Arial, sans-serif'
//               }}
//             >
//               PORTFOLIO
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#contact"
//               style={{
//                 textDecoration: "none",
//                 color: "#000000",
//                 fontSize: "12px",
//                 fontFamily: 'Arial, sans-serif'
//               }}
//             >
//               CONTACT ME
//             </Link>
//           </li>
//         </ul>

//       {/* Social Media Icons */}
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '18px', marginBottom: '20px',marginTop:"20px" }}>
//         <a href="#" style={{ color: '#000' ,fontSize:"20px"}}> <FaFacebook /></a>
//         <a href="#" style={{ color: '#000' ,fontSize:"20px"}}> <FaInstagram /></a>
//         <a href="#" style={{ color: '#000' ,fontSize:"20px"}}> <FaTwitter /></a>
//         <a href="#" style={{ color: '#000' ,fontSize:"20px"}}> <FaLinkedin /></a>
//       </div>

//       {/* Bottom Section */}
//       <div style={{ backgroundColor: '#9e36d4',paddingTop:"10px", color: '#fff', fontSize: '18px',width:"100%",height:"40px" }}>
//         &copy; 2024 <strong>AhmedRaza</strong> All Rights Reserved, Inc.
//       </div>
//     </footer>
//   );
// }




// Footer.tsx
import Link from 'next/link';
import React from 'react';
import { FaVolleyballBall, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#d9d9d9', textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '50px', width: '100%',
    }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{
          height: '40px', width: '40px', borderRadius: '50%', backgroundColor: '#9024B6', color: '#fff', textAlign: 'center',
        }}>
          <FaVolleyballBall style={{ fontSize: '24px', marginTop: '8px' }} />
        </div>
        <h3 style={{ color: '#9024B6', fontFamily: 'Arial, sans-serif', marginLeft: '10px' }}>AhmedRaza</h3>
      </div>

      {/* Navigation Links */}
      <ul style={{
        display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '30px', padding: 0, marginBottom: '20px',
      }}>
        {['HOME', 'ABOUT ME', 'MY SERVICES', 'PORTFOLIO', 'CONTACT ME'].map((text, index) => (
          <li key={index}>
            <Link href={text === 'HOME' ? '/' : `#${text.replace(' ', '').toLowerCase()}`} style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '20px', marginBottom: '20px' }}>
        {[
          { href: '#', icon: <FaFacebook aria-label="Facebook" /> },
          { href: '#', icon: <FaInstagram aria-label="Instagram" /> },
          { href: '#', icon: <FaTwitter aria-label="Twitter" /> },
          { href: '#', icon: <FaLinkedin aria-label="LinkedIn" /> },
        ].map((link, index) => (
          <a key={index} href={link.href} style={{ color: '#000' }}>
            {link.icon}
          </a>
        ))}
      </div>

      {/* Bottom Section */}
      <div style={{ backgroundColor: '#9e36d4', padding: '10px 0', color: '#fff', fontSize: '16px', width: '100%' }}>
        &copy; 2024 <strong>AhmedRaza</strong> All Rights Reserved, Inc.
      </div>
    </footer>
  );
}
