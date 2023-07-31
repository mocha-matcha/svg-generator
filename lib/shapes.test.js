const {Triangle,Circle,Sqaure} = require('./shapes.js')

describe('Shape', () => {

describe('Triangle',() => {
it('should return the following:', () => {


const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"> <polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="white"></text></svg>`);

})


}),

describe('Circle',() => {
it('should return the following:', () => {


const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="white"></text></svg>`);

})


}),

describe('Sqaure',() => {
it('should return the following:', () => {


const shape = new Sqaure();
shape.setColor("blue");
expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"><polygon points="10,10,290,10,290,180,10,180" cx="150" cy="100" r="80" fill="blue"/><text x="150" y="110" font-size="20" text-anchor="middle" fill="white"></text></svg>`);

})


})


}) 
