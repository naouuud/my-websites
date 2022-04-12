function FirstFactorial(num) {
return (num === 1? 1 : num * FirstFactorial(num - 1));
}

let x = prompt('Pick a number', '');

FirstFactorial(x);

/
5 * FirstFactorial(4);
5 * (4 * FirstFactorial(3));
5 * (4 * (3 * FirstFactorial(2)));
5 * (4 * (3 * (2 * FirstFactorial(1))));
5 * (4 * (3 * (2 * 1)));
5 * (4 * (3 * 2));
5 * (4 * 6);
5 * 24;
120;
/
