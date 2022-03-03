// * ============ SCOPE ============ * \\
// ~ DEMO 1 START ~ \\
let emptyVariable;

function checkVariable(){
    console.log("emptyVariable Before", emptyVariable);
    emptyVariable = 5;
    console.log("emptyVariable After", emptyVariable);
}
checkVariable();
// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\
let testVariable = "Globally Initialized";

function callLocalFunction(){
    let testVariable = "Locally Initialized";
    console.log("testVariable inisde the function", testVariable);
}
callLocalFunction();
// ~ DEMO 2 END ~ \\

// ~ DEMO 3 START ~ \\
let listening = false;

function startListening(topic){

    if (topic ==="Programming") listening = true;
}
startListening("Programming");

console.log("listening", listening);
// ~ DEMO 3 END ~ \\