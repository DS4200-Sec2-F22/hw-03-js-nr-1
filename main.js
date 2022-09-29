//getting divs containing visualization descriptions
let marksNChannels = document.getElementById("display1")
let colormap = document.getElementById("display2");

//hiding description divs
marksNChannels.style.display = "none"
colormap.style.display = "none";


function click1(){
	marksNChannels.style.display = "block";

}

document.getElementById("subButton1").addEventListener('click', click1);

function click2(){
	colormap.style.display = "block";
}

document.getElementById("subButton2").addEventListener('click', click2);

