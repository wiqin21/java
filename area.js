function display(){
    event.preventDefault();
    let I1 = document.getElementById("length").value;
    let I2 = document.getElementById("width").value;

    let I3=I1*I2;
    
     document.getElementById("area").value=I3;
}
