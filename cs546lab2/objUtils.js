function extend(...args){
    if(args.length < 2)
    { 
    throw ("Error : Length less than 2");
    }
    if(!args.some(arg => typeof arg !== "object" || Object.keys(arg).length >=2 )) 
    {
        throw ("Error: Argument is not of proper type")
    }
    
    if(args.includes(undefined) || args.includes(null)) 
    {
        throw ("Error: Argument contain undefined  or null ");
    }
    else
    { 
        const result =  Object.assign(...args.reverse())
        return result;  
    }   
}

function smush(...args){
    if(args.length < 2)
    { 
    throw ("Error : Length less than 2");
    }
    if(!args.some(arg => typeof arg !== "object" || Object.keys(arg).length >=2 )) 
    {
        throw ("Error: Argument is not of proper type")
    }
    
    if(args.includes(undefined) || args.includes(null)) 
    {
        throw ("Error: Argument contain undefined  or null ");
    }
    else{
    const result = Object.assign(...args);
    return result;
    }
}
    
function mapValues(object, func){
    
    if(typeof func != "function"){
        throw "Error: Function not defined";
    }
    if(typeof object != "object"){
        throw "Error: Object not defined";
    }
    else{
        for(let value in object){
            object[value] = func(object[value])
        }
        return object;
    }
}




module.exports = {
    extend,
    smush,
    mapValues


}