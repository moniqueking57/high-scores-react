import "./App.css";
import Country from "./component/Country";
import Header from "./component/Header";
import Scores from "./component/Scores";
import allCountryScores from "./data/allCountryScores";

function App() {
  const sortCountries = allCountryScores.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  // button functionality
  // function Sort(){
  //   const
  // }

  return (
    <div className="App">
      <Header />
      <button>Sort results</button>
      {sortCountries.map((country, index) => (
        <div key={index}>
          <Country name={country.name} />
          {country.scores
            .sort((a, b) => {
              if (a.s < b.s) {
                return 1;
              } else {
                return -1;
              }
            })
            .map((score, index) => (
              <Scores n={score.n} s={score.s} key={index} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
