//Task 10
const getMax = (str) => {
    let max = 0,
        maxChar = '';
     str.split('').forEach((char)=>{
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     return maxChar;
   };
  
   console.log(getMax("ddfffflllll"))
  
  