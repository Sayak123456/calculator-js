function getHistory(){
    return document.getElementById("history value").innerText;
}
function getOp(){
    return document.getElementById("output value").innerText;
}
function printHistory(num){
    document.getElementById("history value").innerText=num;
}
function printOp(num){
    if(num=="")
        document.getElementById("output value").innerText=num;
    else    
        document.getElementById("output value").innerText=getFormattedNumber(num);
}
function getFormattedNumber(num){
    if(num=="-")
        return "";
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOp("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOp()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOp(output);
            }
        }
        else{
            var output=getOp();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);}
            }
            if(output!="" || history!=""){
                output= output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOp(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOp("");
                }
            }
        }
    });
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOp());
        if(output!=NaN){
            output=output+this.id;
            printOp(output);
        }
    });
}