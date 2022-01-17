
var ipId;
var ipPw;
var ipRe_pw;
var ipUserName;
var ipEmail;
var ipYear;
var ipBir_m;
var ipBir_d;
var ipSexs;
var ipPhone1;
var ipPhone2;
var ipPhone3;

var id;
var pw;
var re_pw;
var userName;
var email;
var year;
var bir_m;
var bir_d;
var sexs;
var phone1;
var phone2;
var phone3;

window.onload = function(){
    ipId=document.getElementById("id");
    ipPw=document.getElementById("pw");
    ipRe_pw=document.getElementById("re_pw");
    ipUserName=document.getElementById("userName");
    ipEmail=document.getElementById("email");
    ipYear=document.getElementById("year");
    ipBir_m=document.getElementById("bir_m");
    ipBir_d=document.getElementById("bir_d");
    ipSexs=document.getElementsByName("sexs");
    ipPhone1=document.getElementById("phone1");
    ipPhone2=document.getElementById("phone2");
    ipPhone3=document.getElementById("phone3");
}

function check(){  
    id=ipId.value;
    pw=ipPw.value;
    re_pw=ipRe_pw.value;
    userName=ipUserName.value;
    email=ipEmail.value;
    for(var i=0;i<ipSexs.length;i++){
        
        if(ipSexs[i].checked == true){ 
            sexs = ipSexs[i].value;
        }
    }

    var userInfo = 
        "id: "+id+"\n"
        +"pw: "+pw+"\n"
        +"re_pw: "+re_pw+"\n"
        +"name: "+userName+"\n"
        +"email: "+email+"\n"
        +"birth_y: "+year+"\n"
        +"birth_m: "+bir_m+"\n"
        +"birth_d: "+bir_d+"\n"
        +"sex: "+sexs+"\n" ;
        +"tel_1: "+phone1+"\n"
        +"tel_2: "+phone2+"\n"
        +"tel_3: "+phone3;
    
    alert(userInfo);

    if(checkId() && checkPw() && checkRe_pw() && checkPwAndRe_pw() && checkName() && checkEmail()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}

function checkId(){
    if(id.length>=6 && id.length<=12){
        console.log("id 일치");
         return true;
    } else {
        console.log("id 미일치");
         return false;
    }
}

function checkPw(){
    if(pw.length>=4 && pw.length<=12){
        console.log("pw 일치");
        return true;
    } else {
        console.log("pw 미일치");
        return false;
    }
}

function checkRe_pw(){
    if(re_pw.length>=4 && re_pw.length<=12){
        console.log("re_pw 일치");
        return true;
    } else {
        console.log("re_pw 미일치");
        return false;
    }
}

function checkName(){
    if(userName.length>=2 && userName.length<=12){
        console.log("name 일치");
        return true;
    } else {
        console.log("name 미일치");
        return false;
    }
}

function checkEmail(){
    if(email.length>=10 && email.length<=20){
        console.log("email 일치");
        return true;
    } else {
        console.log("email 미일치");
        return false;
    }
}

function checkPwAndRe_pw(){
    if(pw == re_pw){
        console.log("pw, re_pw 일치");
        return true;
    } else {
        console.log("pw, re_pw 미일치");
        return false;
    }
}