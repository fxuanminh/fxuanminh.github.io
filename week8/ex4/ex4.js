function display() {
    a = document.f.a
    var txt = document.getElementById("view_area").contentWindow;

    txt.document.body.innerHTML = "";
    if(a.value == "" || isNaN(a.value))
        txt.document.write("<font color='red'>You must enter a number</font>");
    else {
        txt.document.write("<b>Multiplication table " + a.value + "</b><br/>");
        for(i=1; i<=10; i++)
            txt.document.write(a.value + " x " + i + " = " + (i*a.value) + "<br/>");
    }
}