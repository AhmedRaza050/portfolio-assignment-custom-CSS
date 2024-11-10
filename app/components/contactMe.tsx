// // ContactMe.tsx
// import Link from 'next/link';
// import React from 'react';

// export default function ContactMe() {
//   return (
//     <section style={{ padding: '60px 20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
//       {/* Title Section */}
//       <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '10px', fontWeight: 'bold' }}>CONTACT ME</h3>
//       <h1 style={{ fontSize: '28px', color: '#9024B6', marginBottom: '20px' }}>Lets Make Something Together</h1>
//       <p style={{ fontSize: '16px', color: '#000000', marginBottom: '40px', lineHeight: '1.5' }}>
//         Connect With Us Effortlessly! Click The "Contact Me" Button To Reach Out And Let's Discuss How We Can
//        <br /> Transform Your Digital Experiences Into Unforgettable Journeys.
//       </p>

//       {/* Form and Personal Details */}
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
//         {/* Form Section */}
//         <form style={{ maxWidth: '400px', width: '100%' }}>
//           <input
//             type="text"
//             placeholder="Enter Your Name Here"
//             style={{
//               width: '100%',
//               padding: '15px',
//               marginBottom: '15px',
//               borderRadius: '20px',
//               border: '1px solid #000',
//               background:"#D9D9D9",
//               color:"#000000",
//               outline: 'none',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//               fontSize: '14px'
//             }}
//           />
//           <input
//             type="email"
//             placeholder="Enter Your Email Here"
//             style={{
//               width: '100%',
//               padding: '15px',
//               marginBottom: '15px',
//               borderRadius: '20px',
//               border: '1px solid #000',
//               background:"#D9D9D9",
//               color:"#000000",
//               outline: 'none',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//               fontSize: '14px'
//             }}
//           />
//           <textarea
//             placeholder="Write Something..."
//             style={{
//               width: '100%',
//               padding: '15px',
//               borderRadius: '20px',
//               border: '1px solid #000',
//               background:"#D9D9D9",
//               color:"#000000",
//               outline: 'none',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//               fontSize: '14px',
//               height: '100px'
//             }}
//           />
//           <button
//           type='submit'
//             style={{
//               width: "160px",
//               height: "39px",
//               backgroundColor: "#9024B6",
//               padding: "6px",
//               marginTop:"25px",
//               marginBottom:"25px",
//               marginLeft:"250px",
//               borderRadius: "10px",
//               border: "none",
//             }}
//           >
//             <Link
//               href="/"
//               style={{
//                 textDecoration: "none",
//                 color: "white",
//                 fontSize: "16px",
//                  fontFamily: 'Arial, sans-serif',
//                 fontWeight: "bolder",
//                 letterSpacing: "2px",
                
//               }}
//             >
//               SEND
//             </Link>
//           </button>
//         </form>

//         {/* Personal Details Section */}
//         <div style={{ maxWidth: '300px', width: '100%', textAlign: 'center', lineHeight: '1.5' ,}}>
//           <h3 style={{ fontSize: '20px', color: '#AC5BC8', marginBottom: '15px' }}>Personal Details</h3>
//           <p style={{ fontSize: '14px', marginBottom: '8px' }}>
//             <strong>Phone:</strong><br />
//             +92 300 70004<br />
//             +92 300 70007
//           </p>
//           <p style={{ fontSize: '14px', marginBottom: '8px' }}>
//             <strong>Email:</strong><br />
//             ahmedraza@gmail.com
//           </p>
//           <p style={{ fontSize: '14px' }}>
//             <strong>Address:</strong><br />
//            karachi, Pakistan.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// ContactMe.tsx
import Link from 'next/link';
import React from 'react';

export default function ContactMe() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Title Section */}
      <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '10px', fontWeight: 'bold' }}>CONTACT ME</h3>
      <h1 style={{ fontSize: '28px', color: '#9024B6', marginBottom: '20px' }}>Let&apos;s Make Something Together</h1>
      <p style={{ fontSize: '16px', color: '#000000', marginBottom: '40px', lineHeight: '1.5' }}>
        Connect With Us Effortlessly. Click The &quot;Contact Me&quot; Button To Reach Out And Let's Discuss How We Can
        <br /> Transform Your Digital Experiences Into Unforgettable Journeys.
      </p>

      {/* Form and Personal Details */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
        {/* Form Section */}
        <form style={{ maxWidth: '400px', width: '100%' }}>
          <input
            type="text"
            placeholder="Enter Your Name Here"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '20px',
              border: '1px solid #000',
              background: "#D9D9D9",
              color: "#000000",
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontSize: '14px'
            }}
          />
          <input
            type="email"
            placeholder="Enter Your Email Here"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '20px',
              border: '1px solid #000',
              background: "#D9D9D9",
              color: "#000000",
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontSize: '14px'
            }}
          />
          <textarea
            placeholder="Write Something..."
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '20px',
              border: '1px solid #000',
              background: "#D9D9D9",
              color: "#000000",
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontSize: '14px',
              height: '100px'
            }}
          />
          <button
            type="submit"
            style={{
              width: "160px",
              height: "39px",
              backgroundColor: "#9024B6",
              padding: "6px",
              marginTop: "25px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
                fontFamily: 'Arial, sans-serif',
                fontWeight: "bolder",
                letterSpacing: "2px",
              }}
            >
              SEND
            </Link>
          </button>
        </form>

        {/* Personal Details Section */}
        <div style={{ maxWidth: '300px', width: '100%', textAlign: 'center', lineHeight: '1.5' }}>
          <h3 style={{ fontSize: '20px', color: '#AC5BC8', marginBottom: '15px' }}>Personal Details</h3>
          <p style={{ fontSize: '14px', marginBottom: '8px' }}>
            <strong>Phone:</strong><br />
            +92 300 70004<br />
            +92 300 70007
          </p>
          <p style={{ fontSize: '14px', marginBottom: '8px' }}>
            <strong>Email:</strong><br />
            ahmedraza@gmail.com
          </p>
          <p style={{ fontSize: '14px' }}>
            <strong>Address:</strong><br />
            Karachi, Pakistan.
          </p>
        </div>
      </div>
    </section>
  );
}
