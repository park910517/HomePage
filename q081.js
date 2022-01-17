window.onload = function(){
    userId = document.getElementById("id");
    userPw = document.getElementById("pw");
    loginBox = document.getElementById("login_box");
   
}
var userId="";
var userPw="";
var loginBox;
var now = new Date();
document.write(now.getFullYear() + "년" + (now.getMonth()+1) + "월" + now.getDate() + "일 " + now.getHours()+ "시" + now.getMinutes() + "분" + now.getSeconds() + "초" + now.getMilliseconds() + "밀리초"); br();
function login(){
    var id = userId.value;
    var pw = userPw.value;
    if(id == "park" || pw == "1234"){
        loginBox.innerHTML = id+" 회원님 반갑습니다";
    }else{
        alert("다시 확인 후 입력바랍니다.");
    }
}

