interface Shape {
	draw(fillColor: string): void;
}

class Triangle implements Shape {
	draw(fillColor: string): void {
		console.log("Drawing Triangle with color " + fillColor);
	}
}

class Circle implements Shape {
	draw(fillColor: string ): void  {
		console.log("Drawing Circle with color " + fillColor);
	}
}

class Drawing implements Shape{
	private shapes: Shape[] = [];
	
	public draw(fillColor: string): void {
        this.shapes.forEach(shape => shape.draw(fillColor))
	}

	public add(s: Shape): void {
		this.shapes.push(s);
	}
	
	public remove(s: Shape): void {
        var index: number = this.shapes.indexOf(s, 0);
		this.shapes.splice(index, 1);
	}

	public clear(): void{
		console.log("Clearing all the shapes from drawing");
		this.shapes = [];
	}
}

const tri: Shape = new Triangle();
const tri1: Shape = new Triangle();
const cir: Shape = new Circle();

const drawing: Drawing  = new Drawing();
drawing.add(tri1);
drawing.add(tri1);
drawing.add(cir);
drawing.draw("Red");

drawing.clear();

drawing.add(tri);
drawing.add(cir);
drawing.draw("Green");

export {}