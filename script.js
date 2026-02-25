var images = document.getElementsByClassName("img");
var states = new Array();

var result_bin = document.getElementById("bin");
var result_dec = document.getElementById("dec");
var result_oct = document.getElementById("oct");
var result_hex = document.getElementById("hex");

var result_bin_num = 0
var result_dec_num = 0
var result_oct_num = 0
var result_hex_num = 0


images = Array.from(images).reverse();

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", ()=>{
        states[i] = !states[i];
        if(states[i]) images[i].src = "yes.png";
        else images[i].src = "no.png";
        update();
    })
    
}
function update(){
    result_dec_num = 0
    for (let i = 0; i < states.length; i++) {
        if(states[i] == true){
            result_dec_num += Math.pow(2, i);
        }
            
    }
    result_bin.innerText = result_dec_num.toString(2);
    result_dec.innerText = result_dec_num
    result_oct.innerText = result_dec_num.toString(8);
    result_hex.innerText = result_dec_num.toString(16);
}