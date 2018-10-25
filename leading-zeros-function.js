/*
===============
NOTES: leading zeros iteration will pad a base number with n+1 number of zeros. 
call the function by setting the maximum iteration to perform, maximum of leading zeros needed, and the base number to use. 

expected calling: 
a(3,4,5); 

expected output: 
0001
0002
0003

=================
*/


//function to pad a base number with leading zeros. 
function leading_zeros(number, length) {
  
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
  return str; 
	         
}
 
//set the maximum iteration to perform and maximum of leading zeros needed. 
function a(max_iterations, max_leading_zeros, base_number){
    
    let count =0; 
    let maxi = max_leading_zeros; 

    for(let a = 1; a < maxi; a++){
       base_number = count+= 1; 
      console.log( leading_zeros(base_number,maxi)); 
    }
 
}


