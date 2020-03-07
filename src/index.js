module.exports = function check(str, bracketsConfig) {
 let arr = [];
 if (str == undefined) {
   return;
 } 
 for (let i = 0; i < str.length; i++){
   for (let j = 0; j < bracketsConfig.length; j++) {
     if (str[i] === bracketsConfig[j][0]) {
       arr.push(str[i]);
     }
     else if (str[i] === bracketsConfig[j][1]) {
        for (let k = 0; k < i; k++) {
           if (arr[k] === bracketsConfig[j][0]) {
            arr.push(str[i]);
           }
        }
     }
        
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === arr[i]) {
            return true;
        }
    }
} 
