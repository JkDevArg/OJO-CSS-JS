try{
    const balls = document.querySelectorAll(".ball");
    document.addEventListener('mousemove', (event) => {
        const x = (event.clientX * 100) / window.innerWidth + "%";
        const y = (event.clientY * 100) / window.innerHeight + "%";
        balls.forEach((ball) => {
            ball.style.left=x;
            ball.style.top=y;
            ball.style.transform = "traslate(-"+x+",-"+y+")";
        })
    })
    function changeMyOjo(){
        document.addEventListener('mousemove', function(){
            document.getElementById("o1").className="ojo";
            document.getElementById("o2").className="ojo";
        })
    
        document.addEventListener('mouseout', function(){
            document.getElementById("o1").className="ojo-2";
            document.getElementById("o2").className="ojo-2";
        })
    }
}catch(err){
    console.log(err);
}
