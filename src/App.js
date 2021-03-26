import "./App.css";
import Country from "./component/Country";
import Header from "./component/Header";
import Scores from "./component/Scores";
import allCountryScores from "./data/allCountryScores";
import React, { useState } from "react";
import AllScores from "./component/AllScores";

function App() {
  const sortCountries = allCountryScores.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  let allScores = [];
  for (let i = 0; i < allCountryScores.length; i++) {
    allScores = allScores.concat(allCountryScores[i].scores).sort((a, b) => {
      if (a.s < b.s) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  const [sort, setSort] = useState("descending");
  const clickHandler = () => {
    setSort((sort) => {
      if (sort === "descending") {
        return "ascending";
      } else {
        return "descending";
      }
    });
  };

  return (
    <div className="App">
      <Header title={"Scores on the Doors"} />
      <table className="table">
        {allScores.map((country, index) => (
          <AllScores n={country.n} s={country.s} key={index} />
        ))}
      </table>
      <h4>Top Country Scores</h4>
      <button onClick={clickHandler}>Click to sort scores</button>
      {sortCountries.map((country, index) => (
        <div key={index}>
          <Country name={country.name} />
          <Scores country={country} sortOrder={sort} />
        </div>
      ))}
    </div>
  );
}

//   return (
//     <div className="App">
//       <Header />
//       <button>Sort results</button>
//       {sortCountries.map((country, index) => (
//         <div key={index}>
//           <Country name={country.name} />
//           {country.scores
//             .sort((a, b) => {
//               if (a.s < b.s) {
//                 return 1;
//               } else {
//                 return -1;
//               }
//             })
//             .map((score, index) => (
//               <Scores n={score.n} s={score.s} key={index} />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// }

export default App;
