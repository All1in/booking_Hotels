import React from 'react';
import './styles/App.scss';
import Gallery from "./components/Gallery/Gallery";
import Intercontinental from "./components/Intercontinental/Intercontinental";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div className="App">
        {/*/// MB should add an Error Boundary*/}

        <Gallery
            headline="Sona A Luxury Hotel"
            description="Here are the best hotel
             booking sites, including
             recommendations for international
             travel and for finding low-priced hotel rooms."
        />

        {/*/// MB should add an Error Boundary*/}

        <Intercontinental />

        <Services servicesHeadline="Discover Our Services" />
    </div>
  );
}

export default App;
