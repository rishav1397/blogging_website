document.getElementById('close').onclick=function(){
  modal1.style.display='none';
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
}
document.getElementById('close2').onclick=function(){
  modal2.style.display='none';
}
function fun(){
  document.getElementById('modal3').style.display='block';
}
document.getElementById('btn1').onclick=function(){
  document.getElementById('modal3').style.display='none';
}
function fun2(){
  window.location='post.html';
}
function open(){
    document.getElementById('modal3').style.display='block';
}
document.getElementById('btn2').onclick=function(){
  document.getElementById('modal3').style.display='none';
}
