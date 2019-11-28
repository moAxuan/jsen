var span = document.getElementsByTagName('span');/*logo的span*/
var fixed = document.getElementById("fixed");
var btn = document.getElementsByTagName("button")[1];
//需要load延迟出现的div
var head1 = document.getElementsByClassName("head_left")[0];
var head2 = document.getElementsByClassName("head_botton")[0];
var head3 = document.getElementsByClassName("head_right")[0];
var body1 = document.getElementById("body1");
var tou = document.getElementsByClassName("tou")[0];
var tou1 = document.getElementsByClassName("tou")[1];
var can = document.getElementById("li1");
var co = document.getElementById("canvasa");
var ruozhi = document.getElementById("ruozhi");
var ruozhi1 = document.getElementById("ruozhi1");
var body2 = document.getElementById("body2");
var body3 = document.getElementById("body3").children[0];
/*logo太极对称*/
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

//固定top出现
function jin(){
	if(window.pageYOffset >= 150){
		fixed.style.animation = "dis 1s";
		fixed.style.display = "block";
	}else {
		fixed.style.display = "none";
		fixed.style.animation = "diss 1s";
	}
}
setInterval(jin,1);

//翻转 
for(var i = 1;i <= 7; i++){
	var ico = "ico" + i;
	var icon1 = document.getElementsByClassName(ico)[0];
	icon1.onmouseover = function(){
	this.style.animation = "flipping 1s";
	}
	icon1.onmouseout = function(){
	this.style.animation = "";
	}
}



/*表单输入消失*/
for(var i = 0;i <= 1; i++){
	var type1 = document.getElementsByTagName('input')[i];
	type1.onfocus = function(){
		if(this.value == "Type Here"){
			this.value = "";
		}	
		this.style.border = "1px solid red"
	}
	
	type1.onblur = function(){
		if(this.value != ""){
			this.style.border = "1px solid #00C6D7";
			this.style.color = "black";
		}
		if(this.value == "Type Here" || this.value == ""){
			this.value = "Type Here";
			this.style.border = "1px solid #00C6D7";
			this.style.color = "#88719F";
		}
	}
}

/*黑框*/
document.getElementsByTagName("button")[0].onmouseenter = function(){
	this.style.backgroundColor = "black";
}
document.getElementsByTagName("button")[0].onmouseleave = function(){
	this.style.backgroundColor = "#FF7900";
}

//介绍一 ：鼠标移上去出现鬼东西
for(var i = 5;i <= 6; i++){
	var aa = document.getElementsByTagName("a")[i];
	aa.onmouseenter = function(){
		h3 = document.createElement("h3");
		h3.innerHTML = "Royal Shine";
		hr1 = document.createElement("hr");
		hr2 = document.createElement("hr");
		p1 = document.createElement("p");
		p1.innerHTML = "Doloremque laudantium";
		this.style.background = "rgba(0,0,0,0.4)";
		this.appendChild(h3);
		this.appendChild(hr1);
		this.appendChild(p1);
		this.appendChild(hr2);
	}
	aa.onmouseleave = function(){
		this.removeChild(h3);
		this.removeChild(hr1);
		this.removeChild(p1);
		this.removeChild(hr2);
		this.style.background = "";
	}
}
//介绍2移上去出现鬼东西
	var aa1 = document.getElementsByTagName("a")[7];
	var aa1C0 = aa1.children[0];
	var aa1C1 = aa1.children[1];
	var aa1C2 = aa1.children[2];
	aa1.onmouseenter = function(){
		//消失100毫秒后出现并且实现动画效果
		aa1C2.style.display = "none";
		setTimeout(function(){
			aa1C2.style.display = "block";
		},100);
		aa1C2.style.animation = "down1 0.3s";
		aa1C2.style.color = "white";

		//消失110毫秒后出现并且实现动画效果
		aa1C1.style.display = "none";
		setTimeout(function(){
			aa1C1.style.display = "block";
		},110);
		aa1C1.style.animation = "down3 0.3s";
		aa1C1.style.color = "white";

		//消失110毫秒后出现并且实现动画效果
		aa1C0.style.display = "none";
		setTimeout(function(){
			aa1C0.style.display = "block";
		},110);
		aa1C0.style.animation = "down2 1s";
	}
	aa1.onmouseleave = function(){
		aa1C0.style.animation = "up2 0.3s";
		aa1C1.style.animation = "up3 0.3s";
		aa1C2.style.animation = "up1 0.3s";
		aa1C1.style.color = "";
		aa1C2.style.color = "";
	}

	var aa2 = document.getElementsByTagName("a")[8];
	var aa2C0 = aa2.children[0];
	var aa2C1 = aa2.children[1];
	var aa2C2 = aa2.children[2];
	aa2.onmouseenter = function(){
		//消失100毫秒后出现并且实现动画效果
		aa2C2.style.display = "none";
		setTimeout(function(){
			aa2C2.style.display = "block";
		},100);
		aa2C2.style.animation = "down1 0.1s";
		aa2C2.style.color = "white";

		//消失110毫秒后出现并且实现动画效果
		aa2C1.style.display = "none";
		setTimeout(function(){
			aa2C1.style.display = "block";
		},110);
		aa2C1.style.animation = "down3 0.5s";
		aa2C1.style.color = "white";

		//消失110毫秒后出现并且实现动画效果
		aa2C0.style.display = "none";
		setTimeout(function(){
			aa2C0.style.display = "block";
		},110);
		aa2C0.style.animation = "down2 1s";
	}
	aa2.onmouseleave = function(){
		aa2C0.style.animation = "up2 0.3s";
		aa2C1.style.animation = "up3 0.3s";
		aa2C2.style.animation = "up1 0.3s";
		aa2C1.style.color = "";
		aa2C2.style.color = "";
	}
	/*介绍2的鬼东西*/
	can.onmouseenter = function(){
		co.style.display = "block";
		co.style.animation = "len1 1s";
		setTimeout(function(){
			ruozhi.style.display = "block";
			ruozhi1.style.display = "block";
		},700)

	}
	can.onmousemove = function(){
		co.style.display = "block";
		co.style.animation = "len1 1s";
	}
	can.onmouseleave = function(){
		co.style.animation = "len2 1s";
		ruozhi.style.display = "none";
		ruozhi1.style.display = "none";
		setTimeout(function(){
			co.style.display = "none";
		},1000)
	}

//框框架架
	btn.onmouseenter = function(){
		var btnF = btn.parentNode;
		btnF.style.border = "3px solid #FF7900";
		btnF.style.animation = "kuang 1s";
	}
	btn.onmouseleave = function(){
		var btnF = btn.parentNode;
		btnF.style.animation = "";
		btnF.style.border = "none";
	}




//延迟1秒后出现
xiao();
function xiao(){
	head1.style.display = "none";
	head2.style.display = "none";
	head3.style.display = "none";
	body1.style.display = "none";
	tou.style.display = "block";
}

function uup(){
	head1.style.display = "block";
	head2.style.display = "block";
	head3.style.display = "block";
	body1.style.display = "block";
	tou.style.display = "none";
}
setInterval(uup,1000);

fixed.style.cursor = "pointer";
function ST(){
	var top = window.pageYOffset;
	if(top > 0){
		window.scrollTo(0,top - top);
	}
}


/*五星好评*/
var ul1 = document.getElementsByTagName("ul")[3];
var xing = document.getElementsByClassName("xing");
ul1.style.width = xing.length * 25 + "px";
var imgg =document.getElementsByClassName("xing1");
	for(var i = 0;i <= 4; i++){
	imgg[i].onmouseenter = function(){
		var index;    
        for(var j=0;j<imgg.length;j++){    
          if(this==imgg[j]){index=j;break;}    
        }    
        for(var a = 0; a <= index; a ++){
        	imgg[a].src = "images/star-on.png";
        }
	}

	function abc(){
		for(var j=1;j<imgg.length;j++){    
           if(imgg[j]<=this){    
           imgg[j].src="images/star-off.png";    
              //console.log(j);    
          }   
      }
	}
	imgg[i].addEventListener("mouseleave",abc);
	imgg[i].onclick = function(){
		for(var j=0;j<imgg.length;j++){    
           if(imgg[j] >= this){    
           imgg[j].removeEventListener("mouseleave",abc);
              //console.log(j);    
		   
          }
      }
	}
	
}

function jin1(){
	if(window.pageYOffset >= 610){
		body2.style.display = "block";
		body2.children[0].style.animation = "left3 0.5s";
		body2.children[1].style.animation = "right3 1s";
		tou1.style.display = "none";
	}
}
setInterval(jin1,1500);


/*body3边框变颜色*/


	var ul2 = document.getElementsByTagName("ul")[4];
	for(var j = 0;j <= ul2.children.length - 1; j ++){
		var kuang = ul2.children[j];
		kuang.onmouseenter = function(){
			var index = 0;
			var kuang1 = this.children[index];
			var kuang2 = kuang1.children[0];
			var kuang3 = kuang1.children[1];
			kuang3.style.animation = "color 0.5s";
			kuang1.style.border = "2px dashed #FF7936";
			kuang2.src = "images/" + kuang2.name +".png" ;
			kuang3.style.color = "#3CD0DD";
		}
		kuang.onmouseleave = function(){
			var index = 0;
			var kuang1 = this.children[index];
			var kuang2 = kuang1.children[0];
			var kuang3 = kuang1.children[1];
			kuang1.style.border = "";
			kuang3.style.animation = "";
			kuang2.src = "images/" +  kuang2.alt +".png";
			kuang3.style.color = "";
		}
	}
	var ul3 = document.getElementsByTagName("ul")[5];
	for(var j = 0;j <= ul3.children.length - 1; j ++){
		var kuang = ul3.children[j];
		kuang.onmouseenter = function(){
			var index = 0;
			var kuang1 = this.children[index];
			var kuang2 = kuang1.children[0];
			var kuang3 = kuang1.children[1];
			kuang3.style.animation = "color 0.5s";
			kuang1.style.border = "2px dashed #FF7936";
			kuang2.src = "images/" + kuang2.name +".png" ;
			kuang3.style.color = "#3CD0DD";
		}
		kuang.onmouseleave = function(){
			var index = 0;
			var kuang1 = this.children[index];
			var kuang2 = kuang1.children[0];
			var kuang3 = kuang1.children[1];
			kuang1.style.border = "";
			kuang3.style.animation = "";
			kuang2.src = "images/" + kuang2.alt + ".png" ;
			kuang3.style.color = "";
		}
	}
/*bodey3滚动到一定程度才会出现*/
function body3_sc(){
		if(window.pageYOffset >= 1200){
		body3.style.display = "block"; 


	}
}
setInterval(body3_sc,1500)

/*body3上下交叉*/
var body_3Shang = document.getElementsByClassName("shang")[0];
var body_3Shang1 = document.getElementsByClassName("shang")[1];
body_3Shang.style.animation = "shang 1s";
body_3Shang1.style.animation = "shang1 1s";

/*body4橙色框+延迟block*/
var ul4 = document.getElementsByTagName("ul")[6];
for(var i = 0;i < ul4.children.length; i++){
	var ul4Child = ul4.children[i];
	ul4Child.onmouseenter = function(){
		var li4Child = this.children[1];
		li4Child.style.animation = "orange 1s";
		li4Child.style.display = "block";
	}
	
	ul4Child.onmouseleave = function(){
		var li4Child = this.children[1];
		li4Child.style.animation = "orange1 1s";
		setTimeout(function(){
			li4Child.style.display = "none";
		},1000);
	}
}
function yanchi(){
	if(window.pageYOffset > 2100){
		ul4.parentNode.style.display = "block";
	}
}
setInterval(yanchi,1500);

/*body5的奇葩效果*/
var input1 = document.getElementsByTagName("input")[4];
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

var body5 = document.getElementById("body5");
function yanchi2(){
	if(window.pageYOffset > 2500){
		body5.children[0].style.display = "block";
	}
}
setInterval(yanchi2,1000);

var lianjie = document.getElementById("lianjie");
var tou2 = document.getElementsByClassName("tou")[2];
var end = document.getElementById("end");
function yanchi3(){
	if(window.pageYOffset > 2600){
		lianjie.style.display = "block";
	}
	tou2.style.display = "none";
}
setInterval(yanchi3,1000);
var tou3 = document.getElementsByClassName("tou")[3];
function yanchi4(){
	if(window.pageYOffset > 2650){
		end.style.display = "block";	
		tou3.style.display = "none";
	}
}
setInterval(yanchi4,1000);


/*菜单栏*/
var all = document.getElementsByTagName("div")[0];
var menu1 = document.getElementById("right");
var count = 1;
function menu(){
	if(count % 2 != 0){
	menu1.style.display = "block";
	all.style.marginLeft = -20 + "px";
	head3.style.right = 250 + "px";
	menu1.style.animation = "right6 1s";
	all.style.animation = "left6 1s";
	head3.style.animation = "left66 1s";
	}else {
	setTimeout(function(){menu1.style.display = "none";},1000);
	all.style.marginLeft = 0 + "px";
	head3.style.right = 0 + "px";
	menu1.style.animation = "right7 1s";
	all.style.animation = "left7 1s";
	head3.style.animation = "left666 1s";
	}
	count++;
}
