var teacher = "Ranjit";
function fun() {
    var teacher = "Rishon";
    console.log(teacher, teachingAssistant);
    teachingAssistant = "Rizon";
}


function gun(){
    var student;    // scope of gun // undefined
    console.log(subject);
    var subject = "JS";
    console.log(teacher);
}
console.log(teacher);
gun();