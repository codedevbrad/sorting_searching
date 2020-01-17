```javascript
var items = "Aaron Adam Aiden Alex Alexander Alfie Archie Arthur Ashton Bailey Ben Bejamin Blake Bobby Caleb Callum Cameron Charles Charlie Connor Daniel David Dexter Dylan Edward Elijah Elliot Ethan Evan Finlay Finley Frankie Freddie Frederick Gabriel George Harley Harrison Harry Harvey Hayden Henry Isaac Jack Jackson Jacob Jake James Jamie Jayden Jenson Joel John Joseph Joshua Jude Kai Kayden Kian Kyle Leo Leon Lewis Liam Logan Louie Louis Luca Lucas Luke Mason Matthew Max MichaelMohammad Mohammed Muhammad Nathan Noah Oliver Ollie Oscar Owen Reece Reuben Rhys Riley Robert Ryan Samuel Sebastian Stanley Taylor Theo Thomas Toby Tommy Tyler William Zachary";

items = items.split(" ");

console.log( binary(true , 'Archie'))

function binary( remaining , target ) {
		
    while( remaining ) {
        var mid = Math.ceil( ( items.length - 1 ) / 2 );    

        console.log( 'middle is:' , items[mid] ,'at index :' , mid );

        if ( target != items[mid] && items.length == 1 ) {
            console.log('no items'); // return false
            remaining = false;
        } 

        else if ( target == items[mid]) {
            console.log( 'found' ); // return true
            remaining = false;
        } 
        else {
           if ( target < items[mid] ) { items = items.splice( 0 , mid ); }
           if ( target > items[mid] ) { items = items.splice( mid + 1 , items.length ); }
        }
    }  
}
```
