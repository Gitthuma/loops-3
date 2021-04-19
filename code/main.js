let i = 500;
let para = document.createElement('p');

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}


// Add your code here

/*You need to use a loop to go through the numbers 2 to 500 backwards (1 is not counted as a prime number), and run the provided isPrime() function on them. For each number that isn't a prime number, continue on to the next loop iteration. For each one that is a prime number, add it to the paragraph's textContent along with some kind of separator.*/

/*Create a do...while loop*/

/*Create a condition to check if isPrime() is true and print it*/

do {
   if (isPrime(i)) {
       para.textContent += i + ' ';
   }

    i--
} while ( i >= 2);


// Don't edit the code below here!
let section = document.querySelector('section');
section.appendChild(para);