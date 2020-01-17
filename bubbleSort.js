
var array1 = [ 7 , 3 , 2 , 5 , 6 ];
var array2 = [ 2 , 3 , 5 , 67, ];

const swap = ( arr, a , b ) => {
  let temp = arr[a];
  arr[a] = arr[b]
  arr[b] = temp;
} 
function bubbleSort( array ) {
    for ( var i = 0; i < array.length; i++ ) {
        let didSwap = false;
	for ( var j = 0; j < array.length - i - 1; j++ ) {
		
    		let a = array[j];
     	        let b = array[j+1];
         
		if ( a > b ) {
		    swap( array , j , j+1 );
		    didSwap = true;
		}
	     
		if ( j+1 == array.length - 1 && didSwap == false ) {
		   return array; 
		}
        }
    }
    return array;  
}

let sorted = bubbleSort( array1 );
console.log( sorted );
