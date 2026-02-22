function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    input.value = ""
    return value;

    
}