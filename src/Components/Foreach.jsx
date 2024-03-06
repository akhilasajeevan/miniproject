// import React from 'react'

// function Foreach() {

//     let details = [
//           {
//           name: "Sanay",
//           stack: "MERN",
//           projects: {
//           project1: "Ecommerce",
//           project2: "elearning"
//           }
//           }
//           ];


//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Foreach



// import React from 'react';

// function MyComponent() {
//   // Sample data with objects inside an array
//   const data = [
//     {
//       id: 1,
//       name: 'John',
//       details: { age: 30, city: 'New York' }
//     },
//     {
//       id: 2,
//       name: 'Alice',
//       details: { age: 25, city: 'Los Angeles' }
//     },
//     {
//       id: 3,
//       name: 'Bob',
//       details: { age: 35, city: 'Chicago' }
//     }
//   ];

//   return (
//     <div>
//       {/* Render data */}
//       {data.map(item => (
//         <div key={item.id}>
//           <h2>{item.name}</h2>
//           {/* Use forEach to iterate over details object */}
//           {Object.keys(item.details).forEach(key => (
//             <p key={key}>
//               {key}: {item.details[key]}
//             </p>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyComponent;







const DetailsComponent = ({ details }) => {
    details.forEach((detail, index) => {
      console.log(`Details for person ${index + 1}:`);
      console.log(`Name: ${detail.name}`);
      console.log(`Stack: ${detail.stack}`);
      console.log("Projects:");
      Object.entries(detail.projects).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
      console.log("--------------------");
    });
  
    return null; // or return some JSX if needed
  };
  


//   const DetailsComponent = ({ details }) => {
//     return (
//       <div>
//         {details.map((detail, index) => (
//           <div key={index}>
//             <h2>Details for person {index + 1}</h2>
//             <p>Name: {detail.name}</p>
//             <p>Stack: {detail.stack}</p>
//             <p>Projects:</p>
//             <ul>
//               {Object.entries(detail.projects).map(([key, value]) => (
//                 <li key={key}>{key}: {value}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     );
//   };
  