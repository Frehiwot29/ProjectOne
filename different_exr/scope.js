let x = 10;
function main() {
    let x = 0;
    console.log("x1: " + x);
    x = 20;
    console.log("x2: " + x);
    if (x > 0) {
        x = 30;
        console.log("X3: " + x);
    }
    console.log("x4: " + x);

    function f(x) {
        console.log("x5: " + x);
    }
    f(50);
    console.log("x6: " + x);
}
main();
console.log("x7: " + x);