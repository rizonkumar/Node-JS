function todo(task) {
    console.log("start of todo")
    setTimeout(function fun() {
        console.log("Completed",task);
    }, 2000);
    console.log("end of todo")
}

console.log("Starting");
todo("Assignment");
console.log("Ending");