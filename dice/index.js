function cl(){
    var randomnum=(Math.floor(Math.random()*6))+1;
    var randimg="dice"+randomnum+".png";
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randimg);

    var randomnum2=(Math.floor(Math.random()*6))+1;
    var randimg2="dice"+randomnum2+".png";
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randimg2);
    if(p1!=10 && p2!=10){
        if(randomnum>randomnum2){
            p1=p1+1;
            document.getElementById("rf").innerHTML="Player 1 Wins";
            document.getElementById("s1").innerHTML=p1;
        }
        else if(randomnum2>randomnum){
            p2=p2+1;
            document.getElementById("rf").innerHTML="Player 2 Wins";
            document.getElementById("s2").innerHTML=p2;
        }
        else{
            document.getElementById("rf").innerHTML="Draw";
        }
    }
    else{
        p1=0;
        p2=0;
       if(p1>p2){
        alert("Player 1 wins 10 Games! && Game restarts");
       }
       else{
        alert("Player 2 wins 10 Games! && Game restarts");
       }
    }

}
p1=0;
p2=0;