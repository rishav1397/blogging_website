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
// like button script
var likes =0;
function liker() {
    if(likes===0)
    {
      document.getElementById("like").innerHTML ='<i class="fa fa-thumbs-up"></i>&nbsp;Liked!';
        likes++;
        document.getElementById("liketxt").innerHTML = likes+' person liked this!';
    }
    else
    {
            likes++;
        document.getElementById("liketxt").innerHTML = likes +' people have liked this!';
    }
}
///
function comments(cmt){
    var par = document.createElement("div");
    var lis = document.createTextNode(cmt.value);
    document.getElementById('txtarea').value='';
   par.appendChild(lis);
    var vs = document.getElementById("listcomments");
    vs.prepend(par);
    par.classList.add("cmntdiv");
    vs.style.padding ="10px 20px 20px 20px";
}
var once=1;
function fun1(eds){
    var c=document.getElementsByClassName("btn")[0];
    c.innerHTML="Save ";
    var q=document.createElement("i");
    q.className="fa fa-floppy-o";
    c.appendChild(q);
    //document.execCommand("contenteditable", true, "p");

    var vs = document.getElementById("pqrst");
    var head=document.getElementById("blogTitle");
    if(once===1){
    var fun = document.getElementById("blogBody").innerHTML;
    var head1= document.getElementById("blogTitleNew").innerHTML;
    document.getElementById("blogBody").setAttribute('style','display:none;');
    document.getElementById("blogTitleNew").setAttribute('style','display:none;');
    var par = document.createElement('textarea');
    var qar = document.createElement('textarea');
    qar.setAttribute('style','font-family:Abel, sans-serif;font-size:100%');
    var lis = document.createTextNode(fun.trim());
    var lis1 = document.createTextNode(head1.trim());
    par.appendChild(lis);
    qar.appendChild(lis1);
    vs.appendChild(par);
    head.appendChild(qar);
    par.classList.add("editcmnt1");
    qar.classList.add("editcmnt2");
  par.style.height = (par.scrollHeight)+"px";
        qar.style.height = (qar.scrollHeight)+"px";
        par.focus();
    once=2;
        document.getElementsByClassName("blogAuthor")[0].style.marginBottom="10px";
    }
    else {
       var gun = document.getElementsByClassName("editcmnt1")[0].value;
       var bun = document.getElementsByClassName("editcmnt2")[0].value;
       console.log(gun);
        document.getElementById("blogBody").innerHTML =gun;
        document.getElementById("blogTitleNew").innerHTML =bun;
        document.getElementsByClassName("editcmnt1")[0].setAttribute('style','display:none;');
        document.getElementsByClassName("editcmnt2")[0].setAttribute('style','display:none;');
        document.getElementById("blogBody").setAttribute('style','display:block;');
        document.getElementById("blogTitleNew").setAttribute('style','display:block;');
         document.getElementById("editing").innerHTML ='Edit&nbsp;<i class="fa fa-edit"></i>';
        once=1;
        vs.removeChild(vs.lastChild);
        head.removeChild(head.lastChild);
    }

}
