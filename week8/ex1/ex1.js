var txta = prompt ("Enter number A");
var txtb = prompt ("Enter number B");

if(txta == null || txta == "" || isNaN(txta)) {
    alert("Number A is formatted incorrect");
} else if(txtb == null || txtb == "" || isNaN(txtb)) {
    alert("Number B is formatted incorrect");
} else {
    var result = parseFloat(txta) + parseFloat(txtb);
    alert("Result:\n" + txta + " + " + txtb + " = " + result);
}