var string = new String();
var a = new String();
function capitalize(string){
    if(string === undefined)
    {
        throw "Error: string does not exist";
    }
    else if(typeof string != "string")
    {
        throw "Error: string is not of proper type";
    }
    else{
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

}

function repeat(string,num){
    if(string === undefined)
    {
        throw "Error: string does not exist";
    }
    else if(typeof string != "string")
    {
        throw "Error: string is not of proper type";
    }
    if(num == null){
        throw " number does not exist";
    }
    else if(num  <=0 ){
        throw "please enter a positive value of number "
    }
    else{
    a = string.repeat(num);
    return a;
    }
}

function countChars(string){
    
    var count=1;
    if(string === undefined)
    {
        throw "Error: string does not exist";
    }
    else if(typeof string != "string")
    {
        throw "Error: string is not of proper type";
    }
    else
    {  
          var count = {};
        for(var a = 0; a < string.length; a++){
            var character = string.charAt(a);
            if(count[character]){
               count[character]++;
            } else{
               count[character] = 1;
            }
        }
        return count;
          
    }
}











































module.exports = {
    capitalize,
    repeat,
    countChars
    

}