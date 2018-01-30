class calculator{
    docalculation(firstno,secondno,opr){
        // var expression = firstno + opr + secondno;
        // return eval(expression);
        if(opr=='+'){
            var x= parseInt(firstno) + parseInt(secondno);
            return x;
        }
        if(opr=='-'){
            var x= parseInt(firstno) - parseInt(secondno);
            return x;
        }
        if(opr=='*'){
            var x= parseInt(firstno) * parseInt(secondno);
            return x;
        }
        if(opr=='/'){
            var x= parseInt(firstno) / parseInt(secondno);
            return x;
        }
    }
    
     
}
