//greet()
const function1 = function(){console.log("Hello!");};

function display(param){
    param();
}
display(function1)
setTimeout(()=>{console.log("hey")}, 5000);
setInterval(()=>{console.log(8);},2000);