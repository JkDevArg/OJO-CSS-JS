var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    for(var i=0;i<2;i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform = "traslate(-"+x+",-"+y+")";
    }
}
function changeMyOjo(){
    document.onmouseover = function(){
        //console.log("t1");
        document.getElementById("o1").className="ojo";
        document.getElementById("o2").className="ojo";
    }
    document.onmouseout = function(){
        document.getElementById("o1").className="ojo-2";
        document.getElementById("o2").className="ojo-2";
        //console.log("t2");
    }
}