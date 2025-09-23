let enterSpeed = Number(prompt("Enter the speed in km/h"));

if (Number.isNaN(enterSpeed)) {
    console.log("Invalid input");
} else if (enterSpeed <= 70) {
    console.log("OK");
} else {
    let excess = enterSpeed - 70;
    let points = Math.floor(excess / 5);

    if (points >= 12) {
        console.log("License suspended");
    } else {
        console.log("Points: " + points);
    }
}

