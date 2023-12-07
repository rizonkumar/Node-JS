function process () {
    console.log("Start");
    setTimeout(function exec () {
        console.log("Executing some task 1")
    }, 1000);
    setTimeout(function exec () {
        console.log("Executing some task 2")
    }, 1000);
    for(let i = 0; i < 10000000; i++){
        // some task
    }
    console.log("End")
}

process();