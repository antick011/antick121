const submit=() => {
    const msg1="Sohini"
    const msg2="sohini"
    const msg3="Natasha"
    const msg4="natasha"
    const msg5="nat"
    const msg6="Nat"
    
    const input = document.getElementById("inp")
    if(input.value===msg1,msg2,msg3,msg4,msg5,msg6){
        console.log("successful")
        document.getElementById("box1").style.display = "block"
        console.log("successful")
        var s = document.getElementById("box2")
        function playAudio(){
            s.play()
        }
    }
    else{
        console.log("unsuccessful")
        document.getElementById("box1").style.display = "none"
    }
}