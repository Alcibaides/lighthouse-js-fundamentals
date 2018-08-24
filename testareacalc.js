function calculateTriangleArea(x, y) {
  if(x < 0 || y < 0) {
    return undefined;
  }
  return x * y / 2;
}

function calculateRectangleArea(x, y) {
  if(x < 0 || y < 0) {
    return undefined;
  }
  return x * y;
}

function calculateCircleArea(x) {
  if(x < 0) {
    return undefined;
  }

  return Math.PI * x * x;
}

    console.log(calculateRectangleArea(10, 5)); // should print 50
    console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
    console.log(calculateRectangleArea(10, -5)); // should print undefined

    console.log(calculateTriangleArea(10, 5)); // should print 25
    console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
    console.log(calculateTriangleArea(10, -5)); // should print undefined

    console.log(calculateCircleArea(10)); // should print 314.159...
    console.log(calculateCircleArea(3.5)); // should print 38.484...
    console.log(calculateCircleArea(-1)); // should print undefined