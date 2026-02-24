var images = document.getElementsByClassName("chb");
var states = new Array();

var result = document.getElementById("result");
var result_num = 0;

setInterval(update, 10);
function update(){
    result_num = 0;
    for (let i = 0; i < images.length; i++) {
        states[i] = images[i].getElementById("myCheck").checked;
    }
    for (let i = 0; i < states.length; i++) {
        if(states[i] == true){
            result_num += Math.pow(2, i);
        }
            
    }

    result.innerText = result_num;
}