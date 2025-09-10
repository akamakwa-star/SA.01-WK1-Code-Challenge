let speed = (prompt('Enter vehicle speed'));

speed(speed);

function speeder(speed){
    if (speed <=70){
        console.log("ok")

    }else {
        let demPoints = (speed-70)/5

        if (demPoint>12){
            console.log("License suspended")
        }else {
            console.log("Point:" + demPoints)
        }
    }
}