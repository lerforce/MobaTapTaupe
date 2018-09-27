import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bowl from './boule_noir.svg'
import Timer from './countdown.js'

class Circle extends Component {
    render() {
	return (
		<view style={height: 100px, width: 100px}/>
	);
    }
}

class App extends Component {
    renderCircle(posx, posy) {
	this.setState = {
	    x: posx,
	    y: posy
	}
	return <Circle/>;
    }
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
            </header>
	    <Timer startCount='10' />
	    <img src={bowl} className="App-obj" alt="bowl"/>
	    {this.renderCircle(10, 13)}	
	{this.renderCircle(100, 136)}
	</div>
    );
    }
}

export default App
