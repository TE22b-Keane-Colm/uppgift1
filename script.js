
let tal1_elem = document.querySelector("#tal1");
let tal2_elem = document.querySelector("#tal2");
let svar_elem = document.querySelector("#answer");
function plus(){
    let tal1 = parseInt(tal1_elem.value);
    let tal2 = parseInt(tal2_elem.value);

    svar_elem.value=(tal1+tal2);
    return answer = tal1+tal2; 
}
function minus(){
    let tal1 = parseInt(tal1_elem.value);
    let tal2 = parseInt(tal2_elem.value);
    svar_elem.value=(tal1-tal2);


}
function multiply(){
    let tal1 = parseInt(tal1_elem.value);
    let tal2 = parseInt(tal2_elem.value);
    svar_elem.value=(tal1*tal2);
    
}
function divid(){
    let tal1 = parseInt(tal1_elem.value);
    let tal2 = parseInt(tal2_elem.value);
    svar_elem.value=(tal1/tal2);
}






