import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

const colorArr = [//Ilman tätä värin voi vaihtaa kirjoittamalla
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "cyan",
  "brown",
  "yellow",
  "lightblue"
];

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      color: "hotpink"
    };
  }

  componentDidMount(){//värin vaihto ajastetusti
    let colorPos = 0;
    setInterval(() => {
      if(colorArr.length -1 > colorPos) {
        this.setState({
          color: colorArr[colorPos]
        });
        colorPos++
      } else {
        this.setState({
          color: colorArr[colorPos]
        });
        colorPos = 0;
      }
    }, 700);
  }
  toggleColor(){
    this.setState({
      color: "yellow"
    });
  }

  ChangeColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  render() {
    const styleObj = {
            backgroundColor: this.state.color
          };
    return (
      <section style={styleObj}
       id="hello-world">
      <h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
      <input value={this.state.color} onChange={this.ChangeColor.bind(this)}/>
   </section>
    );
  }
}
export default App;
