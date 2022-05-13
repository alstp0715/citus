function onLogin(){
    const ID = document.getElementById("ID");
    const PW = document.getElementById("PW");
    if(ID.value=="asd" && PW.value=="asd"){
      alert("로그인 성공");
      location.href ="./index.html";
    }else{
      alert("로그인 실패");
    }
    ID.value = "";
    PW.value = "";
  } 

