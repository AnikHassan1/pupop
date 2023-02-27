const Kodom={
    name:"Anik Miah",
    money: 5000,
    study : "Math",
    Subject : ['Calculation','algobra','geometry'],
    // object method Addd
    exam: function(){
        return (`${this.name} is exam`);
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
const kadir=(Kodom.exam());
const Name={
    name: "kodom",
    money:900
}
// const x=Kodom.exam.call(Name);
// console.log(x);
const s = Kodom.treatDay.call(Name,400,100)
// console.log(s);
// const S = Kodom.treatDay.apply(Name,[1000,100]);
// console.log(S);
const e=Kodom.treatDay.bind(Name);
const iu=e(100,100);
console.log(iu);