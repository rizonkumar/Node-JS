function fun(inputString, fn) {
    // executes some algo on the string
    let output = inputString.split(","); // output is an array
    for (let i = 0; i < output.length; i++) {
        fn(output[i]);
    }
}

// using it
fun("name:rizon, subject:cse", function process(ip) {
    let arr = ip.split(":");
    console.log("{", arr[0], " => ", arr[1], "}");
})