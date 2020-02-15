  var array = new Array();
  var arrayOne = new Array();
  var arrayTwo = new Array();
   function head(array)
   {
       if(array === undefined)
       {
           throw "Error: array does not exist";
       }
       else if(array.length==0)
       {
           throw "Error: Array is empty"
       }
       else if(typeof array != 'object')
       {
           throw "Error: array is not of proper type";
       }
       else
       {
           return array[0];
       }
   }


   function last(array)
   {
       if(array === undefined)
       {
           throw "Error: array does not exist";
       }
       else if(array.length==0)
       {
           throw "Error: Array is empty"
       }
       else if(typeof array != 'object')
       {
           throw "Error: array is not of proper type";
       }
       else
       {
           return array[array.length-1];
       }
   }



   function remove(array, index)
   {
      if(array === undefined)
       {
          throw "Error: array does not exist";
       }
      else if(array.length==0)
       {
          throw "Error: Array is empty";
       }
       else if(typeof array != 'object')
       {
           throw "Error: array is not of proper type";
       }
       else if(index > array.length)
      {
          throw "Error: Index is out of bound";
      } 
      else
      {
            array.splice(index, 1); 
            return array;
      }
  }
   
    
  function range(end,value){
      if(end ==null ){
          throw "end number does not exist";
      }
      else if(end <=0 ){
          throw "please enter e positive integer value of end "
      }
      else if(typeof end != "number"  )
      {
          throw "Error: end is not of proper type";
      }
 
     else if(value == null){ 
       for (let i = 0; i < end; i++) 
        {
           array.push(i);
        }
        return array;
    }
    else{
        for (let i = 0; i < end; i++) 
        {
            array.push(value);
        }
        return array;
    }
  }


   function countElements(array){
    var count = 1;
    var results = "";

    if(array === undefined)
    {
       throw "Error: array does not exist";
    }
    else if(typeof array != 'object')
       {
           throw "Error: array is not of proper type";
       }
    else{
        var count = 1;
        var result = "";
        for (var i = 0; i < array.length; i++)
         {
            if (array[i] == array[i+1])
            {
              count +=1;
            }
            else
            {
                result = result + array[i] + " --> " + count + " times\n" ;
                count=1;
            }
         }    
        }
        return result;

    }
   

    function isEqual(arrayOne, arrayTwo){
        if(arrayOne === undefined || arrayTwo === undefined)
        {
           throw "Error: array does not exist";
        }   
        if((typeof arrayOne != 'object')|| (typeof arrayTwo != 'object') )
        {
            throw "Error: array is not of proper type";
        }   
        
        else{
            for (var i = 0; i < arrayOne.length; ++i)
             {
                if (arrayOne[i] !== arrayTwo[i]){
                     return false;
                 }
             }
               return true;
            }    
        
        
    }
   













   module.exports = {
       head,
       last,
       remove,
       range,
       countElements,
       isEqual,

   }