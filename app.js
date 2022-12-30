let time = 1500;
let displayMinutes = Math.floor(time/60);
let displaySeconds = time % 60;
let interval = null;
let interval2 = null
let status = "stopped";
let time2 = 300;

function startStop(){
if (status === "stopped") {
    if (time === 0) {
        interval2 = window.setInterval(restperiod, 1000);}

    else {
        interval = window.setInterval(timer, 1000);
        document.getElementById('lofiSong').play();
    }

    document.getElementById("startStop").innerHTML = "Stop"
    status = "started";
}

    else{
        window.clearInterval(interval);
        window.clearInterval(interval2);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
        document.getElementById('lofiSong').pause();
    }
}

function rest(){

    interval2= window.setInterval(restperiod, 1000);

}

function timerinterval(){
    time = 1500
    interval = window.setInterval(timer, 1000);
    document.getElementById('lofiSong').play();
}

function restperiod() {
            document.getElementById('alarm').pause();
            document.getElementById('alarm').currentTime=0;
            time2--;
            let displayMinutes2 = Math.floor(time2/60);
            let displaySeconds2 = time2 % 60;
            displaySeconds2 < 10 ? displaySeconds2 = "0" + displaySeconds2 : displaySeconds2
            document.getElementById("timer").innerHTML = `${displayMinutes2}: ${displaySeconds2}`; 
            if (time2===0){
                window.clearInterval(interval2);
                document.getElementById('alarm').play();
                alert("Time to start!!!")
                document.getElementById('alarm').pause();
                document.getElementById('alarm').currentTime=0;
                return timerinterval();
            }
}

function timer(){
    time--;
    let displayMinutes = Math.floor(time/60);
    let displaySeconds = time % 60;
    displaySeconds < 10 ? displaySeconds = "0" + displaySeconds : displaySeconds
    document.getElementById("timer").innerHTML = `${displayMinutes}: ${displaySeconds}`; 
    if (time === 0) { 
        time2 = 300
        window.clearInterval(interval);
        document.getElementById('alarm').play();
        document.getElementById('lofiSong').pause();
        document.getElementById('lofiSong').currentTime=0;
        alert("Rest time");
        return rest();
    }
} 

function reset(){
    clearInterval(interval);
    clearInterval(interval2);
    time = 1500;
    time2 = 300;
    let displayMinutes = Math.floor(time/60);
    let displaySeconds = time % 60;
    displaySeconds < 10 ? displaySeconds = "0" + displaySeconds : displaySeconds
    document.getElementById("timer").innerHTML = `${displayMinutes}: ${displaySeconds}`; 
    document.getElementById('lofiSong').pause();
    document.getElementById('lofiSong').currentTime = 0;   
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
}


