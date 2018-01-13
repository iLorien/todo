const but = document.querySelector("#sent");
const input = document.querySelector("#inputFT");
const area = document.querySelector("#result");
let count = 1;

but.addEventListener("click", () => {
    let isValid = validate();
    if(isValid){
        let newEl = document.createElement("div");
        let h1 = document.createElement("h3");

        h1.textContent = input.value;
        newEl.appendChild(h1);

        newEl.className = "templateFT";
        newEl.id = "nr" + count;
        area.appendChild(newEl);

        count++;
        let elemFT = document.querySelector("#" + newEl.id);
        elemFT.onclick = deleteEl;
    }
});

// if(count >= 2){
//     elemFT.addEventListener("click", () => {
//         alert("gfd");
//     });
// }
function deleteEl(){
    area.removeChild(this);
}


var validate = function(){
    if(!input.value){
        input.placeholder = "Here is empty";
        return false;
    }
    return true;
}

