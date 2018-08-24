


function calculateTriangleArea(x, y){
   return x * y / 2
  }

function calculateRectangleArea(x, y){
   return x * y
  }
function calculateCircleArea(x){

return Math.PI * x * x
}



if (calculateRectangleArea(x, y){
  calculateRectangleArea.name === true
  &&  x > 0 && y > 0})
  (calculateRectangleArea(x, y){
  return [x * y]
  })
else if (calculateTriangleArea(x, y)
  {
    calculateTriangleArea.name === true
  && x > 0 && y > 0
 })
  (calculateTriangleArea(x, y){
  return [x * y / 2]
  })

else if (calculateCircleArea(x,y)
  {
  calculateCircleArea.name === true
  && x > 0})
   (calculateCircleArea(x,y){
  return [Math.PI * x * x]
})
 else {return undefined}








console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined