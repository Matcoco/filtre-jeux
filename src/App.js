import React, { Component } from 'react';
import './App.css';
import FiletrableJeuxTable from './Components/FiletrableJeuxTable';

const JEUX = [];

JEUX.push({category:'FPS',price:'10€', stocked:true, name:"Counter Strike"});
JEUX.push({category:'RPG',price:'80€', stocked:true, name:"Final Fantasy 7 Remake"});
JEUX.push({category:'RPG',price:'50€', stocked:true, name:"Final Fantasy 8"});
JEUX.push({category:'RPG',price:'80€', stocked:false, name:"Final Fantasy 9"});
JEUX.push({category:'RPG',price:'60€', stocked:true, name:"Final Fantasy 10 II"});
JEUX.push({category:'RPG',price:'40€', stocked:false, name:"Final Fantasy 13"});
JEUX.push({category:'RPG',price:'35€', stocked:true, name:"Final Fantasy 6"});
JEUX.push({category:'Aventure',price:'35€', stocked:true, name:"Uncharted"});
JEUX.push({category:'Aventure',price:'45€', stocked:false, name:"Uncharted 2"});
JEUX.push({category:'Aventure',price:'49€', stocked:false, name:"Uncharted 3"});
JEUX.push({category:'Horror',price:'69€', stocked:true, name:"Resident evil"});
JEUX.push({category:'Horror',price:'25€', stocked:true, name:"Resident evil 2"});
JEUX.push({category:'Horror',price:'55€', stocked:false, name:"Resident evil 2 Remake"});
JEUX.push({category:'Horror',price:'75€', stocked:false, name:"Resident evil 3 Remake"});
JEUX.push({category:'simulation',price:'15€', stocked:true, name:"Les Sims 1"});
JEUX.push({category:'simulation',price:'25€', stocked:false, name:"Les Sims 2"});
JEUX.push({category:'simulation',price:'35€', stocked:true, name:"Les Sims 3"});


class App extends Component {

  render(){

    return (
      <div className="App">
        <header className="App-header">
        <FiletrableJeuxTable jeux={JEUX}/>
        </header>
      </div>
    );
  }
}

export default App;
