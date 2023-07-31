let inquirer = require('inquirer');
let fs = require('fs');
const {Triangle,Circle,Sqaure} = require('./lib/shapes');
inquirer
  .prompt([
	  {
		  name: 'shape',
		  message:'What shape would you like?',
		  type:'list',
		  choices:['Triangle','Circle','Square']
	  },
	  {
		  name:'color',
		  message:'What color would you like the shape to be? Use html code or hex (prefix with #)!',
		  type:'input'

	  },
	  {

		  name:'text',
		  message:'what would you like the text to be?',
		  type:'input'

	  },
	  {
		  name:'textColor',
		  message:'what color would you like the text to be? use html code or hex (prefix with #)!',
		  type:'input'

	  }
    /* Pass your questions in here */
  ])
  .then((answers) => {
let shape = ''; 
	  switch(answers.shape)
	  {
		  case 'Circle':
			  console.log('making circle.');
			  let circle = new Circle(answers.color,answers.textColor,answers.text);
			  circle.setColor(answers.color);
			  circle.setText(answers.text);
			  circle.setTextColor(answers.textColor);
			  shape = circle;
			  break;
		case 'Triangle':
			  console.log('making triangle.')
			  let triangle = new Triangle();
			  triangle.setColor(answers.color);
			  triangle.setText(answers.text);
			  triangle.setTextColor(answers.textColor);
			shape=triangle;
			  break;
		  case 'Sqaure':
			  console.log('making square.')
			  let square = new Sqaure(answers.color,answers.textColor,answers.text);
			  square.setColor(answers.color);
			  square.setText(answers.text);
			  square.setTextColor(answers.textColor);
			  shape=square;
			  break;
	  }
console.log("Generated logo.svg");
let value = shape.render();
console.log(value);
			  fs.writeFile('dist/logo.svg',value, (err) => { if(err) {throw err;}}  ) ;
  })
  .catch((error) => {
    if (error.isTtyError) {
	    console.log('Cannot display the text.')
    } else {
	    console.log(error)
    }
  });
