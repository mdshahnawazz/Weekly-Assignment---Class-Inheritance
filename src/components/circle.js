// import using require

// declare class


// export class using module.exports

import React, { Component } from 'react';
export class App extends Component {    render() {
        return <h1>Hello</h1>;    }
}
export default App;

app.js
import Shape from './shape';
class Circle extends Shape {  calculateArea() {    super.calculateArea();    console.log(this.constructor.name + ' Area Calclated Called');  }}module.exports = Circle;

circle.js
