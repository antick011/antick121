const submit=() => {
    const msg1="Sohini"
    const msg2="sohini"
    const msg3="Natasha"
    const msg4="natasha"
    const msg5="nat"
    const msg6="Nat"
    
    const input = document.getElementById("inp")
    console.log(input.value)
    if(input.value===msg1||input.value===msg2||input.value===msg3||input.value===msg4||input.value===msg5||input.value===msg6){
        console.log("successful")
        document.getElementById("box1").style.display = "block"
    }
    else{
        console.log("unsuccessful")
        document.getElementById("box1").style.display = "none"
    }
}