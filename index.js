const submit=() => {
    const msg1="rupkatha"
    const msg2="RUPKATHA"
    const msg3="Rupkatha"
    const msg4="Rupkatha Roy"
    const msg5="RUPKATHA ROY"
    const msg6="rupkatha roy"
    
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
