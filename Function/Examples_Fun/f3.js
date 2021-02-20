function funX(a, b) {
    let c;
    c = 5;
    console.log("Value of c: " + c);
    funY(a * c, "yes");
}
function funY(x, y) {
    let z;
    z = "I can see the sea";
    console.log(x);
    console.log("What is on the stack here?");
}
function main() {
    let a;
    let b;
    a = "Hello";
    console.log(b);
    funX(3, a);
    b = "World";
    console.log(b);
}
main();
