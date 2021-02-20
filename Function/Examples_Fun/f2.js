function funA(a, n) {
    let something;
    something = "something.";
    funB(something, n);
}
function funB(a, b) {
    let thing;
    thing = "a thing.";
    console.log("What is on the stack when we're here?");
}
function main() {
    let test;
    let n;
    test = "Hello";
    n = 5;
    funA(n, 10);
}
main();