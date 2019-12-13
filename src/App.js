import React, { Component } from 'react';
import './App.css';

import Menu from './pofcomponent/Menu';
import Summer from './pofcomponent/Summer';
import Autumn from './pofcomponent/Autumn';
import Winter from './pofcomponent/Winter';
import Spring from './pofcomponent/Spring';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: [
        'Summer',
        'Autumn',
        'Winter',
        'Spring'
      ],
      selectionfunction: '',
    }
  }

  stationChange = (station) => {
    console.log(station)
    this.setState( {
      selectionfunction: station,
    });
  }


  stationRenderization = (station) => {
    switch(this.state.selectionfunction) {
      case 'Summer':
        return <Summer/>;
      case 'Autumn':
        return <Autumn/>;
      case 'Winter':
        return <Winter/>;
      case 'Spring':
        return <Spring/>;
      default:
        return null;
    }
  }
  render() {
    return (
      <div className="App">
        <Menu stations={this.state.stations}
        stationChange={this.stationChange}/>
        {this.stationRenderization()}
      </div>
    );
  }
}

export default App;
