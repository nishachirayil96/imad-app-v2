console.log('Loaded!');
alert('Hi!');
var element=document.getElementById('main-text');
element.innerHTML='New value';

var marginleft=0;

var img=document.getElementById('madi');
function moveright()
{
marginleft=marginleft+10;
madi.style.marginLeft=marginleft+'px';
}

madi.onclick=function(){
var interval=setInterval(moveright,50);
};