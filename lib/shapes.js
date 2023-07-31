class Shape
{
constructor()
	{

		this.text = "";
		this.color = "black";
		this.textColor = "white";
	}


setColor(color)
{
this.color = color;
}

setText(text)
{
this.text = text;
}

setTextColor(textColor)
{
this.textColor = textColor;
}


}

class Triangle extends Shape
{

render()
	{

return `<svg version="1.1" width="300" height="200"> <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;

	}


}

 class Circle extends Shape
{

constructor(color,textColor,text){
super(color,textColor,text);

}
render()
	{

return `<svg version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;

	}
}

class Sqaure extends Shape
{

constructor(color,textColor,text){
super(color,textColor,text);
}

render()
	{
return `<svg version="1.1" width="300" height="200"><polygon points="10,10,290,10,290,180,10,180" cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="110" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;


	}

}

module.exports = {Triangle,Circle,Sqaure};
