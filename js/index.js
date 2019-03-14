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
document.getElementById('postcreate').onclick= function(){
  blog.style.display='block';
}
document.getElementById('close3').onclick=function(){
  blog.style.display='none';
}
document.getElementById('postall').onclick=function(){
  window.location='html/bloglist.html';
}
