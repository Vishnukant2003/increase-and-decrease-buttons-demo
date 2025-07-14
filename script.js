const para = document.getElementById("para");
let count = 0;

function decreaMent(){
    if(count==0){
        return;
    }
    count--;
    para.innerHTML =count;
}
function increMent(){
    count++;
    para.innerHTML =count
}
function reSet(){
    para.innerHTML = "0";
}