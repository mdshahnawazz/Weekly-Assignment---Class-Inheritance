// declare class

// export class using module.exports


  
class Shape {  constructor(color) {    this.color = color;  }  calculateArea() {    console.log(this.constructor.name + ' Area Calclated Called');  }  drawShape() {    return '';  }
}module.exports = Shape;//  //export default Shape


