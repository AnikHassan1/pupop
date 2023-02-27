const student={
    name:"Anik Miah",
    money: 5000,
    study : "Math",
    Subject : ['Calculation','algobra','geometry'],
    // object method Addd
    exam: function(){
        return (this.money);
    },
    //object  Another Method Call Function
    improveExam : function(subject){
              this.exam();
              return `${this.name} is taking improved exam`
    },
    //object  method Value Change
    treatDay: function(amout,tips){
        this.money=this.money-amout-tips;
          return this.money;
    }
}
console.log(student.exam());
// console.log(improveExam('Microposseor'));
console.log(student.improveExam('Math'))
console.log(student.treatDay(500,50));
const tips=(student.treatDay(900,100));
console.log(tips);