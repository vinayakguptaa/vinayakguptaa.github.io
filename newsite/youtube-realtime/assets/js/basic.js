  var x = document.getElementById("page");
  var y = document.getElementById("theme");
  var z = document.getElementById("mySidebar");
  var time = new Date().getHours();
  if(time < 6){
    x.style ="color:#fff!important;background-color:#000!important";
    z.style ="color:#fff!important;background-color:#000!important";
    y.innerHTML="Switch to Light Theme";
    y.classList.add("vg-white");
  }else if(time < 18){
    x.style ="color:#000!important;background-color:#fff!important";
    z.style ="color:#000!important;background-color:#fff!important";
    y.innerHTML="Switch to Dark Theme";
    y.classList.add("vg-black");
  }else{
    x.style ="color:#fff!important;background-color:#000!important";
    z.style ="color:#fff!important;background-color:#000!important";
    y.innerHTML="Switch to Light Theme";
    y.classList.add("vg-white");
  }
  z.style.display = "none";
  y.onclick=function(){
    if(y.innerHTML==="Switch to Light Theme"){
      x.style ="color:#000!important;background-color:#fff!important";
      z.style ="color:#000!important;background-color:#fff!important";
      y.innerHTML="Switch to Dark Theme";
      y.classList.remove("vg-white");
      y.classList.add("vg-black");
      console.log("Theme Changed");
    } else {
      x.style ="color:#fff!important;background-color:#000!important";
      z.style ="color:#fff!important;background-color:#000!important";
      y.innerHTML="Switch to Light Theme";
      y.classList.add("vg-white");
      y.classList.remove("vg-black");
      console.log("Theme Changed");
    }
  };
  function vg_openclose() {
    if(z.style.display === "none"){
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }
  function vg_close() {
    z.style.display = "none";
  }
