// import using require

// declare class


// export class using module.exports


import Shape from './shape';
class Circle extends Shape {  calculateArea() {    super.calculateArea();    console.log(this.constructor.name + ' Area Calclated Called');  }}module.exports = Circle;


