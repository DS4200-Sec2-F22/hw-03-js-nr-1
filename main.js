function click1(){


	let newText = "test1";
	document.getElementById("display1").innerHTML = newText
}

document.getElementById("subButton1").addEventListener('click', click1);

function click2(){


	let newText = "test2";
	document.getElementById("display2").innerHTML = newText
}

document.getElementById("subButton2").addEventListener('click', click2);


(function logging() {
	console.log("self-invoking function;"); 
})();