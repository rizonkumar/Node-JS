let id1 = setInterval(function execute1() {
    console.log("task completed 1");
}, 10000);

let id2 = setInterval(function execute2() {
    console.log("task completed 2");
    clearInterval(id1);
}, 3000);

