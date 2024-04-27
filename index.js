var Form = document.getElementById("LoveForm");
function inpLove(event){
    event.preventDefault();
    LoveCalc();
}
function LoveCalc(){
    var userName = document.getElementById("name").value;
    var crushName = document.getElementById("crush").value;
    var randNum;
    var remark = document.getElementById("remarkText");
    const VIP = ["udhav", "Udhav", "aarav", "Aarav"]
    if(VIP.includes(userName)){
        if(VIP.includes(crushName)){
            randNum = 100;
        }
    }
    else{
        randNum = Math.floor(Math.random() * 101);
    }
    document.getElementById("LoveText").innerHTML = userName+" and "+crushName+"'s Love Percentage is "+randNum;
    if(randNum>=80){
        remark.innerHTML = crushName+" is your Soulmate <3";
    }
    else if(randNum<80 && randNum>=60){
        remark.innerHTML = "It might work out, keep going at it <3";
    }
    else if(randNum<60 && randNum>=40){
        remark.innerHTML = "The chances are slim, don't put much effort in it";
    }
    else{
        remark.innerHTML = "There are plenty of fish in the ocean and they are much more Hotter :)";
    }
    Form.style.display = "none";
}
Form.addEventListener("submit", inpLove);