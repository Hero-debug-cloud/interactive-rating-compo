var check=0;
var btn_1=document.querySelector('.btn-1');
btn_1.addEventListener('click',function(){
    btn_1.classList.toggle("changing");
    btn_2.classList.remove("changing");
    btn_3.classList.remove("changing");
    btn_4.classList.remove("changing");
    btn_5.classList.remove("changing");
    check=1;
});
var btn_2=document.querySelector('.btn-2');
btn_2.addEventListener('click',function(){
    btn_2.classList.toggle("changing");
    btn_1.classList.remove("changing");
    btn_3.classList.remove("changing");
    btn_4.classList.remove("changing");
    btn_5.classList.remove("changing");
    check=2;
});
var btn_3=document.querySelector('.btn-3');
btn_3.addEventListener('click',function(){
    btn_3.classList.toggle("changing");
    btn_2.classList.remove("changing");
    btn_1.classList.remove("changing");
    btn_4.classList.remove("changing");
    btn_5.classList.remove("changing");
    check=3;
});
var btn_4=document.querySelector('.btn-4');
btn_4.addEventListener('click',function(){
    btn_4.classList.toggle("changing");
    btn_2.classList.remove("changing");
    btn_3.classList.remove("changing");
    btn_1.classList.remove("changing");
    btn_5.classList.remove("changing");
    check=4;
});
var btn_5=document.querySelector('.btn-5');
btn_5.addEventListener('click',function(){
    btn_5.classList.toggle("changing");
    btn_2.classList.remove("changing");
    btn_3.classList.remove("changing");
    btn_4.classList.remove("changing");
    btn_1.classList.remove("changing");
    check=5;
});

var submit=document.querySelector(".submit");
submit.addEventListener("click",function(){
      var note=document.querySelector(".note");
    //   note.classList.remove("hidden");
      note.innerHTML="You Selected "+check+" out of 5";
      document.querySelector(".container").classList.add("hidden");
      document.querySelector(".container-2").classList.remove("hidden");
});
