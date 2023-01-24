let heart = document.getElementById("sirt");
let judy_about = document.getElementById("judyop");
let nick_about = document.getElementById("nickop");
let img_about = document.getElementById("bigimg");
let slidediv = document.getElementById("sec3inner");
let shadediv = document.getElementById("shade");
let k = 0;
let a = 0;
let b = 0;
let c = 0;
function f(){
	k++;
	if(k%2==1){
		heart.style.color = "red";
	}else{
		heart.style.color = "blueviolet";
	}
}

function judy(){
	c++
	if(c%2==1){
		judy_about.style.opacity = "1";
	}else{
		judy_about.style.opacity = "0";
	}
	
}
function nick(){
	b++
	if(b%2==0){
		nick_about.style.opacity = "1";
	}else{
		nick_about.style.opacity = "0";
	}
	
}

function more(){
	a++
	if(a%2==1){
		img_about.style.display = "block";
	}else{
		img_about.style.display = "none";
	}
	
}
var i = 0;
let photoslide = ["jb.jpg","jn4.jpg","judynick.jpg","loveunick.jpg","slow.jpg"];
var slide = setInterval(function(){
	slidediv.style.backgroundImage = "url("+photoslide[i]+")";
	slidediv.style.transition = "10s";
	slidediv.style.position = "relative";
	i++
	if(i==photoslide.length){
		clearInterval(slide);
	}
},2000)
/////////////////////////////////////
// let o;
// setInterval(function(){
// 	let scroll = document.documentElement.scrollTop;
// 	let o = scroll;
// },1)
// 	console.log(o)
//////////////////////////shade div code
function cl(){
	shadediv.style.transform ="translateY(-100%)";
	shadediv.style.transition = "3s"; 
}
	function num(){
		let number = event.keyCode;
		if (number==32) {
			let numortext = prompt("Give me text or number");
			if(typeof(parseInt(numortext))==="number"){
				shadediv.style.transform ="translateY(0%)";
				shadediv.style.transition = "3s"; 
			}
		}
	}
/////////////////////////////////////
const find = document.getElementsByClassName("wherefind");
let imgobj = [
	{
		img: "barca.jpg",
		text: "Welcome Barcelona",
		hr: "https://en.wikipedia.org/wiki/Barcelona"

	},
	{
		img: "bali.jpg",
		text: "Welcome Bali",
		hr: "https://en.wikipedia.org/wiki/Bali"
	},
	{
		img: "tashkent.jpg",
		text: "Welcome Tashkent",
		hr: "https://en.wikipedia.org/wiki/Tashkent"
	},
	{
		img: "cypros.jpg",
		text: "Welcome Cypros",
		hr: "https://en.wikipedia.org/wiki/Cyprus"
	},
	{
		img: "germany.jpg",
		text: "Welcome Germany",
		hr: "https://en.wikipedia.org/wiki/Germany"
	},
	{
		img: "swiss.jpg",
		text: "Welcome 	Swiss",
		hr: "https://en.wikipedia.org/wiki/Swiss_International_Air_Lines"
	},
	{
		img: "london.jpeg",
		text: "Welcome London",
		hr: "https://en.wikipedia.org/wiki/London"
	}
];
var iu = 0;
function reob(xo){
	let boxi = document.createElement("div");
	let image = document.createElement("img");
	let textob = document.createElement("a");
	boxi.style.width = "300px"
	boxi.style.marginTop = "30px"
	image.style.width = "300px"
	boxi.style.height = "300px"
	image.style.height = "200px"
	boxi.style.border = "solid"
	image.src = imgobj[iu].img;
	textob.innerHTML = imgobj[iu].text;
	textob.style.color = "white";
	textob.setAttribute("href", imgobj[iu].hr);
	textob.setAttribute("target", "__blank");
	boxi.appendChild(image)
	boxi.appendChild(textob)
	find[0].appendChild(boxi)
	iu++
	if (iu < xo.length) {
		reob(xo);
	}

}
reob(imgobj);
// for (var i = 0; i < imgobj.length; i++) {
// 	let box = document.createElement("div");
// 	let image = document.createElement("img");
// 	let textob = document.createElement("h1");
// 	box.style.width = "300px"
// 	image.style.width = "300px"
// 	box.style.height = "300px"
// 	image.style.height = "200px"
// 	box.style.border = "solid"
// 	image.src = imgobj[i].img;
// 	textob.innerHTML = imgobj[i].text;
// 	box.appendChild(image)
// 	box.appendChild(textob)
// 	find[0].appendChild(box)
// }


var ter = document.getElementsByClassName("section8")
function writename(){
	var valrange = inprange.value;
	let range = ["YOU","TAUGHT","ME","HOW","TO","LOVE","BUT","NOT","HOW","TO","STOP"];
	for (var valrange = 0; valrange < range.length; valrange++) {
		// console.log(range[is])
		var boxo = document.createElement("i");
		boxo.style.color = "red";
		boxo.innerHTML  = range[valrange] +" ";
		ter[0].appendChild(boxo)
	}
	// console.log(valrange)
	
}
var tun = document.getElementsByClassName("tunik")
function cre(){
	var eliz = document.createElement("div");
	eliz.style.width = "50px";
	eliz.style.height = "50px";
	eliz.style.border = "solid";
	tun[0].appendChild(eliz)
} 
function ff(){
	var arrus = mecc.value;
	if(arrus==2){
		cre()
	}else if(arrus==3){
		cre()
	}else if(arrus==4){
		cre()
	}else if(arrus==5){
		cre()
	}else if(arrus==6){
		cre()
	}else if(arrus==7){
		cre()
	}else if(arrus==8){
		cre()
	}
}


