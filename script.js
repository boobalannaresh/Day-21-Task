// Callback Hell Task
// Display countdown from 10 to 1 on the screen and then display  the Quotes on the screen

var i=11;
    var time=document.createElement('div');
    time.style.fontSize="80px";
    time.style.color="#9f9bc5";
    setTimeout(function(){
        time.innerText="Countdown Starts Now";
        setTimeout(function(){
            i--;
            time.innerText=i;
            setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                time.innerText="“Life is like riding a bicycle. To keep your balance, you must keep moving.”";
                },2000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    document.body.append(time);