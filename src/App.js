import React from "react"
import './App.css';
import Nav from "./components/Nav.js"
import Main from "./components/Main.js"
import Card from "./components/Card.js"
import FullCountryInfo from "./components/FullCountryInfo"
import NotFound from "./components/NotFound"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const [mode, changeMode] = React.useState(true)
  const [data, changeData] = React.useState([])
  const [searchData, changeSearchData] = React.useState("")
  const [regionFilter, regionFilterChange] = React.useState("")

  //Change dark mode
  function toggleMode() {
    changeMode(prevState => !prevState)
  }

  //Get Countries and save to data
  React.useEffect(() => {
    return (
      fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(apiData => changeData(apiData))
    )
  }, [])

  function log(value) {
    changeSearchData(prevState => value)
  }

  const card = data.map(apiData => {
    if (apiData.name.common.toLowerCase().includes(searchData.toLowerCase()))
    if (apiData.region.includes(regionFilter))
    return (
      <Card 
        key={apiData.flags.png}
        data={apiData}
        mode={mode}
      />
    )
  })

  function changeRegionFilter(region) {
    regionFilterChange(prevState => region)
    console.log(window.location.href.split("/")[3].replaceAll('%20', ' '));
  }

  //Change body color
  {mode ? document.body.style.backgroundColor = "hsl(207, 26%, 17%)" : document.body.style.backgroundColor = "#fff"}
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Nav 
            mode={mode}
            handleClick={toggleMode}
          />
            <Main 
              mode={mode}
              handleChange={log}
              changeRegion={changeRegionFilter}
              regionFilter={regionFilter}
            />
            <div className="wrapper">
              {card}
            </div>
          </Route>
        <Route path="/:countryCode" >
          <Nav 
            mode={mode}
            handleClick={toggleMode}
          />
          <FullCountryInfo 
            mode={mode}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
/*<Card 
          img="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
          name="United States"
          population="320.925.100"
          region="America"
          capital="Washington"
        />*/