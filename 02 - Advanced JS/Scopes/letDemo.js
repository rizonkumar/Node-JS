{
    let x = 10;
    console.log(x); // 10
}

function fn(){
    console.log(y); // cannot acces 'y' before initialization
    let y = 8;
    console.log(y); // 8
}
fn();
console.log(x); // not defined
console.log(y); // not defined