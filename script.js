alert("مرحبا بك في موقعي! انا اسمي اسماء وسوف احسب درجاتك")


let grade = prompt ("enter yor grade");
console .log(grade);

// يمكن استخدام if(grad>=90 && grade<=100);
if(grade>=90){
    console.log('%cلقد حصلت على امتياز ', 'background: #222; color: #bada55');

}
else if (grade>=80){
    console.log('%cلقد حصلت على جيد جداً,', 'background: #222; color: #bada55');
}
else if (grade>=70){
    console.log('%cلقد حصلت على جيد','background: #222; color: #bada55');
}
else if (grade>=60){
    console.log('%cلقد حصلت على مقبول','background: #222; color: #bada55');
}
else if (grade>=50){
    console.log('%c لقد حصلت على ضعيف','background: #222; color: #bada55');
    }
else{
    console.log('%c راسبٍ','background: #222; color: #bada55');
}