var numberbtArray;
var nmbrArray=[];
var firstno=0;
var secondno;
var opr;
var output=0;
window.addEventListener("load",inputno);
var calcObj = new calculator();
function inputno(){
        numberbtArray=document.querySelectorAll(".number");
        for(let i=0 ; i<numberbtArray.length ; i++){
            numberbtArray[i].addEventListener("click",printno);
            console.log("nmbr printing");
        }
        var oprbt=document.querySelectorAll(".operator");
        for(let i=0 ; i<oprbt.length ; i++){
            oprbt[i].addEventListener("click",operation);
        } 
        document.querySelector("#equals").addEventListener("click",equals);
        document.querySelector("#backspace").addEventListener("click",backspace);
        document.querySelector("#clear").addEventListener("click",clearAll);
        document.querySelector("#reciprocal").addEventListener("click",reciprocal);
        document.querySelector("#percentage").addEventListener("click",percentage);
        

}
    
function printno(){
         var number=this.innerHTML;
        nmbrArray.push(number);
        document.querySelector("#inputbox").value +=number;
}   

function operation(){
    opr=this.innerHTML;
    for(let i=0 ;i<nmbrArray.length ;i++){
        firstno +=nmbrArray[i];
    }
    nmbrArray=[];
    document.querySelector("#inputbox").value="";
    console.log("txtbx shld get empty");
}

function equals(){
    if(output==0){
    secondno = document.querySelector("#inputbox").value;
    output=calcObj.docalculation(firstno,secondno,opr);
    document.querySelector("#inputbox").value = output;
    firstno=0; secondno=0;}
    else{
        secondno = document.querySelector("#inputbox").value;
        output =calcObj.docalculation(output,secondno,opr);
        document.querySelector("#inputbox").value = output;
    }
}

function backspace(){
    nmbrArray.pop();
    document.querySelector("#inputbox").value="";
    for(let i=0;i<nmbrArray.length;i++){
        document.querySelector("#inputbox").value +=nmbrArray[i];
    }
    //document.querySelector("#inputbox").value=nmbrArray;
    console.log("popp");
}

function clearAll(){
    document.querySelector("#inputbox").value="";
    firstno=0;
    secondno=0;
    opr="";
    nmbrArray=[];
    output=0;
}

function reciprocal(){
    for(let i=0 ;i<nmbrArray.length ;i++){
        firstno +=nmbrArray[i];
    }
    document.querySelector("#inputbox").value=1/firstno;
}

function percentage(){
    for(let i=0 ;i<nmbrArray.length ;i++){
        firstno +=nmbrArray[i];
    }
    document.querySelector("#inputbox").value=firstno/100;
}

