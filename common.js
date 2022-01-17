/*
    공통함수 모음
*/
function tv(str){   //문자열출력
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight;	
    // document.write(str);
}
function tvPlayerInfo(str){   //문자열출력
    var screenString = screenPlayerInfo.value;
    screenString = str;
    screenPlayerInfo.value = screenString;
    // document.write(str);
}

function tvMonInfo(str){
    var screenString = screenObject.value;
    screenString = str;
    screenObject.value = screenString;
}

function br(){  //줄바꿈(엔터)     
    document.write("<br>")
}

function hr(){  //줄긋고 줄바꿈    
    document.write("<hr>")
}

function messageBoxClear(){
    screenMessageBox.value =""
}

function objectClear(){
    screenObject.value = ""
}