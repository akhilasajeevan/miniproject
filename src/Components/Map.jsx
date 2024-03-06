// import React from "react";
// import "./Map.css";

// function Map() {
//   let details = [
//     { name: "a", stack: "mern", age: 20 },
//     { name: "b", stack: "Python", age: 22 },
//     { name: "c", stack: "yyy", age: 24 },
//     { name: "d", stack: "rrr", age: 26 },
//     { name: "e", stack: "ggg", age: 28 },
//     { name: "ppp", stack: "fff", age: 30 },
//   ];
//   let uname = details.map((value) => (
//     <div id="divid">
//       {value.name} {value.stack} {value.age}{" "}
//       <button type="button" id="but">
//         click
//       </button>
//     </div>
//   ));
//   /
//   let uname2 =[] ;details2.forEach((value) =>
//     <div id="divid2">
//       {" "}
//       {value.name}
//       <button type="button" id="but">
//         click
//       </button>
//     </div>
//   );
//   return (
//     <div>
//       <center>
//         <h2>USER DETAILS1</h2>
//         {uname}
//       </center>
//       <h2>USER DETAILS2</h2>
//       {uname2}
//     </div>
//   );
// }

// import React from "react";

// // export default DetailsComponent;

// }

// import React from "react";

// const DetailsComponent = ({ details }) => {
//   details.forEach((detail, index) => {
//     console.log(`Details for person ${index + 1}:`);
//     console.log(`Name: ${detail.name}`);
//     console.log(`Stack: ${detail.stack}`);
//     console.log("Projects:");
//     Object.entries(detail.projects).forEach(([key, value]) => {
//       console.log(`${key}: ${value}`);
//     });
//     console.log("--------------------");
//   });

// //   return null; // or return some JSX if needed
// // };

// const Map = () => {
//   let details = [
//     {
//       name: "Sanay",
//       stack: "MERN",
//       projects: {
//         project1: "Ecommerce",
//         project2: "elearning"
//       }
//     }
//   ];

//   return (
//     <div>
//       <DetailsComponent details={details} />
//     </div>
//   );
// };

// // export default Map;
// }
// export default Map;
import React from "react";
const Map = () => {
  let details = [
    {
      name: "Sanay",
      stack: "MERN",
      projects: {
        project1: "Ecommerce",
        project2: "elearning",
      },
    },
  ];

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

    // return DetailsComponent; // or return some JSX if needed
  // };

  // const Map = () => {
  //   let details = [
  //     {
  //       name: "Sanay",
  //       stack: "MERN",
  //       projects: {
  //         project1: "Ecommerce",
  //         project2: "elearning"
  //       }
  //     }
  //   ];

  return (
    <div>
      <DetailsComponent details={details} />
    </div>
  );
};
}

export default Map;
