/* 1: basic arithmetic operators */

function performArithmetic() {
	const firstarithnum = Number (document.forms.ArithmeticForm.firstarithnum.value);
	const secondarithnum = Number (document.forms.ArithmeticForm.secondarithnum.value);
	const arithmeticoperator = document.forms.ArithmeticForm.arithmeticoperator.value;
	let arithresult = 0;

switch (arithmeticoperator) {
	case 'Addition':
	arithresult = firstarithnum + secondarithnum;
	alert(`The result of adding ${firstarithnum} and ${secondarithnum} is ${arithresult}.`);
	break;
	case 'Subtraction':
	arithresult = firstarithnum - secondarithnum;
	alert(`The result of subtracting ${firstarithnum} and ${secondarithnum} is ${arithresult}.`);
	break;
	case 'Multiplication':
	arithresult = firstarithnum * secondarithnum;
	alert(`The result of multiplying ${firstarithnum} and ${secondarithnum} is ${arithresult}.`); 
	break;
	case 'Division':
	if (secondarithnum == 0) {
		alert(`Cannot divide by zero!`);
		break;
	}else {
		arithresult = firstarithnum / secondarithnum;
		alert(`The result of dividing ${firstarithnum} by ${secondarithnum} is ${arithresult}.`);
		break;
	}
}
}
	
/* 2: factorial: */

function performFactorial() {
	const factnum = Number (document.forms.FactForm.factnum.value);
	let factresult = 0;
	
	if (factnum < 0) {
		alert(`Can't calculate the factorial of a negative number`);
		return;
  } else if (factnum == 0) {
		alert(`The factorial of ${factnum} is one!`);
		return;
	} else {
		factresult = 1;
		for (i = 1; i <= factnum; i++) {
			factresult *= i;
		}
	}
	alert(`The factorial of ${factnum} is ${factresult}!`);
}

/* 3: fibonacci */

function performFibonacci() {
	const fibonaccinum = Number (document.forms.FibonacciForm.fibonaccinum.value);
	var x = 0
	var y = 1
	let fibresult = 0
	
	if (fibonaccinum < 0) {
		alert(`Input must be a positive number!`);
		return;
	}else if (fibonaccinum === 0) {
		alert(`The nth fibonacci number for ${fibonaccinum} is zero`);
		return;
	}else{ 
		for (i = 2; i<= fibonaccinum; i++) {
			fibresult = x + y;
			x = y;
			y = fibresult;
		}
	}
	alert(`The nth fibonacci number for ${fibonaccinum} is ${fibresult}!`);
}

/* 4: max, min, range */

function performTrio() {
	const trionumone = Number (document.forms.TrioForm.trionumone.value);
	const trionumtwo = Number (document.forms.TrioForm.trionumtwo.value);
	const trionumthree = Number (document.forms.TrioForm.trionumthree.value);
	let range = 0;
	
	let max = Math.max(trionumone, trionumtwo, trionumthree);
	let min = Math.min(trionumone, trionumtwo, trionumthree);
	range = max - min;
	
	alert(`The minimum number is ${min}, the maximum number is ${max}, and the range is ${range}!`);
}


/* 5: mailing list */

function addSignup() {
	var firstname = document.SignupForm.firstname.value;
	var lastname = document.SignupForm.lastname.value;
	var email = document.SignupForm.email.value;
	var zipcode = document.SignupForm.zipcode.value;

	var signupinfo = `<br><div>First name: ` + firstname + `<br>Last Name: `
	+ lastname + `<br>Email: ` + email + `<br>zipcode: ` + zipcode + `</div>`;
	document.getElementById("signupinfo").innerHTML += signupinfo;
}

