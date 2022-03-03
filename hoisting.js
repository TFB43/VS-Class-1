// * ============ HOISTING ============ * \\
// ~ DEMO 1 START ~ \\
let firstOne;

function hoistOne() {

    let firstOne = 2;
    console.log("firstOne inisde function:", firstOne);
}
hoistOne();

console.log("firstOne after function:", firstOne);
// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\
let highVar = 99;

let midVar;

fakeFunc();

midVar = 44;

function fakeFunc()  {

    console.log("Still Works");
    console.log("highVar",highVar);
    console.log("midVar", midVar);
    console.log("lowVar", lowVar);
}

let lowVar = 1;
// ~ DEMO 2 END ~ \\