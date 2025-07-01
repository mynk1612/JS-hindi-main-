// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);

})();
// global scope ke 

(function aurcode(name ) {

    console.log(`DB CONNECTED TWO ${name}`); // varaible name

})('mayank');

( (name ) => {
    
    console.log(`DB CONNECTED Three ${name}`); // varaible name

})('mayank')                                                                    



/* +++++++++++++++++ JAVASCRIPT EXECUTION CONTEXT +++++++++++ 

for execution firhtly Global Execution context run in this we learn  (this)
 
Javascript is single threaded 

Three types of Execution context 

1- Global Execution Context
2- Function Execution Context
3- Eval Execution Context 

java script code run, it is run in two phase 

1- Memory Cretion Phase  // only memory allocation phase done in this 
2- Execution phase  // 

Code file for memory creation phase 

let val1 = 10
let val2 = 5 
function addNum(num1, num2){
    let total = num1 +num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

+++++++++++++++Steps for Run the Code++++++++++++++++++++++++ 

1 Global Execution to this 

2 Memory Phase or Creation Phase (all variable collect---- 
       
        val1- undefined, 
        val2- undefined
        addnum - defination)
        result1- undefined 
        reuslt2- undefined 
    //first cycle 

3 Execution Phase 

    val1 - 10
    val2 - 5
    addNum - newvariable environment + Execution thread  
    Result1 = 15
    Result2 = 
    if work is done the value is deleted 


    after this addnum memory phase again comes 

    Memory Phase 
            val1- undefined, 
            val2- undefined 
            total - undefined 
        
    Execution Context 
            num1 - 10
            num2 - 5

            total - 15


NEW VARIABLE ENVIRONMENT 
+ 
Thread 

MP(Memory phase , execution phase)


---------------------- CALLS TAGS ---------------------------

//Global Environment 
ONE METHOD () 

Two ()
Three ()
 
Complexity comes when in LIFO U call all 1, 2, 3 


*/

