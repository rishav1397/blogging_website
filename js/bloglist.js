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
document.getElementById('trash').onclick=function(){
  document.getElementById('modal3').style.display='block';
}
document.getElementById('close4').onclick=function(){
  document.getElementById('modal3').style.display='none';
}
document.getElementById('dot_dot').onclick=function(){
  window.location='post.html';
}
function open(){
    document.getElementById('modal3').style.display='block';
}
