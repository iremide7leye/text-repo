const target = new Date("11:30 Mar 11 2024");
setInterval(() => {
    let now = new Date();
let dist = (target - now) / 1000;

        const days = Math.floor(dist / (3600 *24));
        const hours = Math.floor((dist % (3600 *24))/3600);
        const mins = Math.floor((dist % 3600)/60);
        const secs = Math.floor(dist % 60);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = mins;
document.getElementById("secs").innerHTML = secs;


});