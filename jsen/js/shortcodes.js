/*太极*/
var span = document.getElementsByTagName('span');
for(var i = 0; i < 4; i ++){
	span[i].onmouseover = function (){
		span[1].style.color = "#04C3D3"; //让字体变成蓝色
		span[2].style.animation = "tucheng1 0.2s"; //
		span[3].style.animation = "tucheng2 0.2s";
	}

	span[i].onmouseout = function(){
		span[1].style.color = "#FF7900"; //让字体恢复原状
		span[2].style.animation = "tucheng3 0.2s";
		span[3].style.animation = "tucheng4 0.2s";
	}
}

/*菜单*/
var all = document.getElementsByTagName("div")[0];
var menu1 = document.getElementById("right");
var span1 = document.getElementsByTagName("span")[4];
var count = 1;
function menu(){
	if(count % 2 != 0){
	menu1.style.display = "block";
	all.style.marginLeft = -250 + "px";
	menu1.style.animation = "right6 0.4s";
	all.style.animation = "left6 0.4s";
	}else {
	setTimeout(function(){menu1.style.display = "none";},400);
	all.style.marginLeft = 0 + "px";
	menu1.style.animation = "right7 0.4s";
	all.style.animation = "left7 0.4s";
	}
	count++;
}

/*后三个的固定效果*/
var body5 = document.getElementById("body5");
function yanchi2(){
	if(window.pageYOffset > 0){
		body5.children[0].style.display = "block";
	}
}
setInterval(yanchi2,1000);

var lianjie = document.getElementById("lianjie");
var tou2 = document.getElementsByClassName("tou")[0];
var end = document.getElementById("end");
function yanchi3(){
	if(window.pageYOffset > 0){
		lianjie.style.display = "block";
	}
	tou2.style.display = "none";
}
setInterval(yanchi3,1000);
var tou3 = document.getElementsByClassName("tou")[1];
function yanchi4(){
	if(window.pageYOffset > 0){
		end.style.display = "block";	
		tou3.style.display = "none";
	}
}
setInterval(yanchi4,1000);

for(var i = 1;i <= 4; i++){
	var ico = "ico" + i;
	var icon1 = document.getElementsByClassName(ico)[0];
	icon1.onmouseover = function(){
	this.style.animation = "flipping 1s";
	}
	icon1.onmouseout = function(){
	this.style.animation = "";
	}
}
var input1 = document.getElementsByTagName("input")[0];
input1.onmouseenter = function(){
	this.style.border = "1px solid #00C6D7";
}
function leavea(){
	input1.style.border = "";
}
input1.onfocus = function(){
	if(this.value == "Email"){
		this.value = "";
	}
	this.style.border = "1px solid #FF7900";
	this.removeEventListener("mouseleave",leavea);
}
input1.onblur = function(){
	if(this.value == "Email" ||this.value == ""){
		this.value = "Email";
	}
}