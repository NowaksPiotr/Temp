let btn = document.querySelector(".button");
btn.addEventListener('click', reveal);

let inputs = document.querySelectorAll(".input");
let div = document.querySelector('.reveal');
let p = document.createElement("p");
p.innerText = "We are Legion. We are Anonymous. Piotr knows the secret."
let count = 0;
function reveal(){
    if(inputs[0].value == 3 && inputs[1].value == 2 && inputs[2].value == 1 && inputs[3].value == 2){
        let inter = setInterval(()=>{
            let p = document.createElement("p");
            p.innerText = "Pa55w0rd correct. Core set possibility to recharge: " + count*Math.random()*13;
            div.append(p);
            if(count >=4 && count%4 == 0){
            let p2 = document.createElement("p");
            p2.classList.add('p');
            p2.innerText = "W3 4R3 L3G10N. W3 AR3 4N0NYM0U$. P10TR H4$ A|_|_ AN5W3R$."
            div.append(p2);
            }
            count++;
            if(count >= 35){
                clearInterval(inter);
            }
        }, 800);

    }else{
        alert("Access denied.")
    }
}
