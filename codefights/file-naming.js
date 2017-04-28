// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["dd", 
//  "dd(1)", 
//  "dd(2)", 
//  "dd", 
//  "dd(1)", 
//  "dd(1)(2)", 
//  "dd(1)(1)", 
//  "dd", 
//  "dd(1)"], the output should be
// fileNaming(names) = [ 'dd',         
//   'dd(1)',      
//   'dd(2)',      
//   'dd(3)',      
//   'dd(1)(1)',   
//   'dd(1)(2)',   
//   'dd(1)(1)(1)',
//   'dd(4)',      
//   'dd(1)(3)' ]  .



function fileNaming(names) {
    var newNames = [],
        count = 1;
    names.map(function(name){
        newName = name;
        while(newNames.indexOf(newName) !== -1) {
            newName = name+"("+count++ +")";
        }
        count = 1;
        newNames.push(newName);
    });
    return newNames;
}


console.log(fileNaming(["dd", 
 "dd(1)", 
 "dd(2)", 
 "dd", 
 "dd(1)", 
 "dd(1)(2)", 
 "dd(1)(1)", 
 "dd", 
 "dd(1)"]));