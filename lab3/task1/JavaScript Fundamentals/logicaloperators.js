//task1
alert( null || 2 || undefined ); //2
//task2
alert( alert(1) || 2 || alert(3) ); // first 1, then 2
//task3
alert(1 && null && 2); //The answer: null, because it’s the first falsy value from the list
//task4
alert( alert(1) && alert(2) ); //The answer: 1, and then undefined
//task5
alert( null || 2 && 3 || 4 ); //The answer: 3
//task6
if (age >= 14 && age <= 90)
//task7
if (age < 14 || age > 90)
//task8
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); //The answer: the first and the third will execute
 
//task9
let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

