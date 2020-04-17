function checkInput(num){
    if(typeof(num) != 'number') throw 'Input is not a Number';
    if(num <= 0) throw 'Input is not a positive number';
    return num;
};

function volumeOfRectangularPrism(length,width,height){
    checkInput(length);
    checkInput(width);
    checkInput(height);
    return length*width*height;
};

function surfaceAreaOfRectangularPrism(length,width,height){
    checkInput(length);
    checkInput(width);
    checkInput(height);
    return (length*width+length*height+width*height)*2;
};

function volumeOfSphere(radius){
    checkInput(radius);
    return 4/3*Math.PI*Math.pow(radius,3);
};

function surfaceAreaOfSphere(radius){
    checkInput(radius);
    return 4*Math.PI*Math.pow(radius,2);
};

module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};