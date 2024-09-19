// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.


const btnRes = document.getElementById("btnRes");
const res = document.getElementById("res");

btnRes.addEventListener("click", function () {
    const side1 = parseFloat(document.getElementById("firstSide").value);
    const side2 = parseFloat(document.getElementById("secondSide").value);
    const side3 = parseFloat(document.getElementById("thirdSide").value);
    let s = (side1 + side2 + side3) / 2;
    // console.log(s);
    let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    res.innerHTML = area;
    // console.log(area);

})