function checkdata(){
    let uname = document.myform.fname.value;
    let uedu = document.myform.edu;
    let upass = document.myform.fpass.value;
    let umail = document.myform.fmail.value;
    let ucon = document.myform.fcon.value;
    let regmail = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
    let regname = "^[a-zA-Z ]{3,20}$";
    let regpass ="^{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
    let regcon = "^[0-9]{10}$";
    if (uname.trim() === ""){
        window.alert("fullname required");
        document.getElementById('fname').focus();
        return false;
    }

    if(!uname.trim().match(regname)){
        window.alert("fullname must character min-3 and max-20");
        document.getElementById("fname").focus();
        return false;
    }

    if(uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked ==  false && uedu[3].checked ==  false){
        window.alert("please select your qualification")
        return false;
    }

    if (upass.trim() === ""){
        window.alert("password required");
        document.getElementById('fpass').focus();
        return false;
    }

    if(!upass.trim().match(regpass)){
        window.alert("full password must be in correct");
        document.getElementById("fpass").focus();
        return false;
    }
    if (umail.trim() === ""){
        window.alert("mail id required");
        document.getElementById('fmail').focus();
        return false;
    }

    if(!umail.trim().match(regmail)){
        window.alert("mail must be in correct");
        document.getElementById("fmail").focus();
        return false;
    }
    if (ucon.trim() === ""){
        window.alert("contact required");
        document.getElementById('fcon').focus();
        return false;
    }

    if(!ucon.trim().match(regcon)){
        window.alert("contact must be in correct");
        document.getElementById("fcon").focus();
        return false;
    }
}