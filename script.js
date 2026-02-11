function updateDate() {
    const now = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();

    return `${dayName} ${monthName} ${date}`;

}

function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours % 12;
    hours = hours ? hours : 12;

    /* hours = hours < 10 ? '0' + hours : hours;*/
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes}`;
}

document.getElementById('date').textContent = updateDate();
document.getElementById('time').textContent = updateTime();

setInterval(() => {
    document.getElementById('date').textContent = updateDate();
}, 60000); //checks every minute and updates automatically at midnight

setInterval(() => {
    document.getElementById('time').textContent = updateTime();
}, 1000);