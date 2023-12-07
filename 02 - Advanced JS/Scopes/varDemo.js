function fn() {
  console.log(x);
  var x = 10;
  console.log(x);
}

{
    var y = 20; // become global due to var
}

console.log(y); //20

if(true){
    var z = 30;
}

if(false){
    var k = 40;
}

console.log(x); // Error
console.log(z); // 30
console.log(k); // undefined
fn();
