function formValid() {
    f = document.frmRegister;
    var phone_pattern = /^(\(0\d{1,3}\)\d{7})|(0\d{9,10})$/;
    var email_pattern = /^[a-zA-Z]\w*(\.\w+)*\@\w+(\.\w{2,3})+$/;
    
    if(f.txtUsername.value=="") {
        alert("Username can't be empty");
        f.txtUsername.focus();
        return false;
    }

    if(f.txtPassword1.value.length < 6) {
        alert("Password length must be from 6 to 20 characters");
        f.txtPassword1.focus();
        return false;
    }

    if(f.txtPassword1.value != f.txtPassword2.value) {
        alert("Password doesn't match");
        f.txtPassword2.focus();
        return false;
    }

    if(phone_pattern.test(f.txtPhone.value)==false) {
        alert("Invalid phone number");
        f.txtPhone.focus();
        return false;
    }

    if(email_pattern.test(f.txtEmail.value)==false) {
        alert("Invalid email address");
        f.txtEmail.focus();
        return false;
    }

    if(f.chkMusic.checked==false && f.chkReading.checked==false) {
        alert("You must select at least one favourite");
        f.chkMusic.focus();
        return false;
    }

    if(f.filePicture.value=="") {
        alert("You must select your picture");
        f.filePicture.focus();
        return false;
    }

    if(f.txtDescription.value=="") {
        alert("You must enter description");
        f.txtDescription.focus();
        return false;
    }

    alert("All register information are correct.");
    return true;
}
