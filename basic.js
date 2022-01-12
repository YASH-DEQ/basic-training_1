// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?


function secondLargest(array) {
  // Write your code here
  for(let i=0;i<array.length-1;i++)
    {
      for(let j = 0;j<array.length-i-1;j++)
        {
          if(array[j]>array[j+1])
            {
              let temp = array[j];
              array[j]=array[j+1];
              array[j+1]=temp;
            }
        }
    }
  return array[array.length-2];
};
    
    
  
       

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  var freq ={};
for(var i=0;i<string.length;i++)
    {
        if(string[i]>='a' && string[i]<='z') {
          if(freq[string[i]] == null)
          {   
              freq[string[i]] = 1;
          }
          else 
          {
              freq[string[i]] += 1;
          }
      }
    }
  
  return freq;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  
    let result = {};

    for (const i in unflatObject) {
    
        if ((typeof unflatObject[i]) === 'object') {
            const temp = flatten(unflatObject[i]);
          console.log(temp);
            for (const j in temp) {
 
                result[i + '.' + j] = temp[j];
            }
        }
        else {
            result[i] = unflatObject[i];
        }
    }
  
  return result;
  
};

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
  let result = {},
      temp,
      substrings,
      property,
      i;
    for (property in flatObject) {
      substrings = property.split(".");
      temp = result;
      for (i = 0; i < substrings.length - 1; i++) {
        if (!(substrings[i] in temp)) {
          if (isFinite(substrings[i + 1])) {
            temp[substrings[i]] = [];
          } else {
            temp[substrings[i]] = {};
          }
        }
        temp = temp[substrings[i]];
      }
      temp[substrings[substrings.length - 1]] = flatObject[property];
    }
   return result;
}
