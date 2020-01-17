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

let sorted = bubbleSort( array );
console.log( sorted );
