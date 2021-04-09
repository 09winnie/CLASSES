class square{
    constructor(width,height,color){
        console.log("A square has an even size.");
        this.width=width;
        this.height=height;
        this.color=color;
}
getArea(){
    return this.width*this.height;
}
getPerimeter(){
    var sum=this.width+this.height;
    var result=sum*2;
    return result;
}
printDescription(){
    // used interpolation to print out the statement,,learnt about backtick
    console.log(`I am a square of ${this.width} * ${this.height} and i am ${this.color} in color.`) 
}

}
let square1=new square(6,6,"wheat");
let square2=new square(10,10,"teal");
console.log(square2.getArea());
console.log(square1.getArea());
console.log(square1.getPerimeter());
console.log(square2.getPerimeter());
console.log(square1.color);
console.log(square2.color);
square1.printDescription();
square2.printDescription();

