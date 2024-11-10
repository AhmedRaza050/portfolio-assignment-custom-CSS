// import React from "react";

// function Portfolio() {
//   return (
//     <div>
//       <div style={{ margin: "60px 0px 50px 60px" }}>
//         <p
//           style={{
//             fontSize: "17px",
//             fontWeight: "bolder",
//             marginBottom: "0.5rem",
//             fontFamily: "Arial, sans-serif",
//             textAlign: "left",
//           }}
//         >
//           MY SERVICES
//         </p>
//         <h2
//           style={{
//             color: "#9024B6",
//             fontSize: "2.3rem",
//             fontWeight: "bold",
//             fontFamily: "Arial, sans-serif",
//             textAlign: "left",
//             marginBottom: "2rem",
//           }}
//         >
//           Latest Projects
//         </h2>
//         <p
//           style={{
//             color: "#000000",
//             fontSize: "17px",
//             fontFamily: "Arial, sans-serif",
//           }}
//         >
//           I am a skilled frontend developer offering innovative solutions that
//           enhance user experiences. With a keen eye for detail and a passion for{" "}
//           <br />
//           crafting responsive, interactive websites, I bring designs to life
//           through clean, efficient code.{" "}
//         </p>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "3rem",
//           alignItems: "center",
//           marginBottom: "50px",
//         }}
//       >
//         {/* card 1 */}
//         <div>
//           <div
//             style={{
//               height: "342px",
//               width: "287px",
//               backgroundColor: "#D9D9D9",
//               padding: "1.5rem",
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//             }}
//           ><div style={{ display: "flex" }}>
//           <img
//             src="ecommerce2.png"
//             alt="ecommerce2"
//             width={193}
//             height={342}
//             style={{ position: "absolute", marginLeft: "90px" }}
//           />
//           <img
//             src="ecommerce.png"
//             alt="ecommerce"
//             width={193}
//             height={342}
//             style={{}}
//           />
//         </div>
//           </div>
//           <h2
//             style={{
//               color: "#000000",
//               fontSize: "20px",
//               fontWeight: "bold",
//               fontFamily: "Arial, sans-serif",
//               textAlign: "center",
//               marginBottom: "2rem",
//             }}
//           >
//             E-commerce Website
//           </h2>
//         </div>
//         {/* card 2 */}
//         <div>
//           <div
//             style={{
//               height: "342px",
//               width: "287px",
//               backgroundColor: "#D9D9D9",
//               padding: "1.5rem",
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//             }}
//           >
//             {" "}
//             <div style={{ display: "flex" }}>
//               <img
//                 src="portfolio_project.png"
//                 alt="portfolio_project"
//                 width={193}
//                 height={342}
//                 style={{ position: "absolute", marginLeft: "90px" }}
//               />
//               <img
//                 src="portfolio_project2.png"
//                 alt="portfolio_project2"
//                 width={193}
//                 height={342}
//                 style={{}}
//               />
//             </div>
//           </div>
//           <h2
//             style={{
//               color: "#000000",
//               fontSize: "20px",
//               fontWeight: "bold",
//               fontFamily: "Arial, sans-serif",
//               textAlign: "center",
//               marginBottom: "2rem",
//             }}
//           >
//             Portfolio Website
//           </h2>
//         </div>
//         {/* card 3 */}
//         <div>
//           <div
//             style={{
//               height: "342px",
//               width: "287px",
//               backgroundColor: "#D9D9D9",
//               padding: "1.5rem",
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//             }}
//           >
//             {" "}
//             <div style={{ display: "flex" }}>
//               <img
//                 src="ui_design.png"
//                 alt="ui_design"
//                 width={193}
//                 height={342}
//                 style={{ position: "absolute", marginLeft: "90px" }}
//               />
//               <img
//                 src="ui_design2.png"
//                 alt="ui_design"
//                 width={193}
//                 height={342}
//                 style={{}}
//               />
//             </div>
//           </div>
//           <h2
//             style={{
//               color: "#000000",
//               fontSize: "20px",
//               fontWeight: "bold",
//               fontFamily: "Arial, sans-serif",
//               textAlign: "center",
//               marginBottom: "2rem",
//             }}
//           >
//             Ui Development
//           </h2>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "1rem",
//           alignItems: "center",
//           marginTop: "-50px",
//         }}
//       >
//         <div
//           style={{
//             height: "22px",
//             width: "69px",
//             borderRadius: "50px",
//             background: "#D9D9D9",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "22px",
//             width: "69px",
//             borderRadius: "50px",
//             background: "#9024B6",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "22px",
//             width: "69px",
//             borderRadius: "50px",
//             background: "#D9D9D9",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "22px",
//             width: "69px",
//             borderRadius: "50px",
//             background: "#D9D9D9",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "22px",
//             width: "69px",
//             borderRadius: "50px",
//             background: "#D9D9D9",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default Portfolio;



import React from "react";

function Portfolio() {
  return (
    <div style={{ padding: "0 60px", marginBottom: "50px" }}>
      {/* Header Section */}
      <div style={{ marginBottom: "60px" }}>
        <p style={{ fontSize: "17px", fontWeight: "bolder", marginBottom: "0.5rem", textAlign: "left" }}>
          MY SERVICES
        </p>
        <h2 style={{ color: "#9024B6", fontSize: "2.3rem", fontWeight: "bold", textAlign: "left", marginBottom: "2rem" }}>
          Latest Projects
        </h2>
        <p style={{ color: "#000", fontSize: "17px" }}>
          I am a skilled frontend developer offering innovative solutions that enhance user experiences. With a keen eye for detail and a passion for crafting responsive, interactive websites, I bring designs to life through clean, efficient code.
        </p>
      </div>

      {/* Project Cards Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: "3rem", alignItems: "center", marginBottom: "50px" }}>
        
        {/* Card 1 */}
        <div>
          <div style={{
            height: "342px",
            width: "287px",
            backgroundColor: "#D9D9D9",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            position: "relative",
          }}>
            <div style={{ display: "flex" }}>
              <img src="ecommerce2.png" alt="E-commerce preview 2" width={193} height={342} style={{ position: "absolute", marginLeft: "90px" }} />
              <img src="ecommerce.png" alt="E-commerce preview" width={193} height={342} />
            </div>
          </div>
          <h2 style={{
            color: "#000000",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}>E-commerce Website</h2>
        </div>

        {/* Card 2 */}
        <div>
          <div style={{
            height: "342px",
            width: "287px",
            backgroundColor: "#D9D9D9",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            position: "relative",
          }}>
            <div style={{ display: "flex" }}>
              <img src="portfolio_project.png" alt="Portfolio preview" width={193} height={342} style={{ position: "absolute", marginLeft: "90px" }} />
              <img src="portfolio_project2.png" alt="Portfolio preview 2" width={193} height={342} />
            </div>
          </div>
          <h2 style={{
            color: "#000000",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}>Portfolio Website</h2>
        </div>

        {/* Card 3 */}
        <div>
          <div style={{
            height: "342px",
            width: "287px",
            backgroundColor: "#D9D9D9",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            position: "relative",
          }}>
            <div style={{ display: "flex" }}>
              <img src="ui_design.png" alt="UI design preview" width={193} height={342} style={{ position: "absolute", marginLeft: "90px" }} />
              <img src="ui_design2.png" alt="UI design preview 2" width={193} height={342} />
            </div>
          </div>
          <h2 style={{
            color: "#000000",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}>UI Development</h2>
        </div>
      </div>

      {/* Pagination Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center", marginTop: "-50px" }}>
        <div style={{ height: "22px", width: "69px", borderRadius: "50px", background: "#D9D9D9" }}></div>
        <div style={{ height: "22px", width: "69px", borderRadius: "50px", background: "#9024B6" }}></div>
        <div style={{ height: "22px", width: "69px", borderRadius: "50px", background: "#D9D9D9" }}></div>
        <div style={{ height: "22px", width: "69px", borderRadius: "50px", background: "#D9D9D9" }}></div>
        <div style={{ height: "22px", width: "69px", borderRadius: "50px", background: "#D9D9D9" }}></div>
      </div>
    </div>
  );
}

export default Portfolio;
 