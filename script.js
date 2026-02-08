function updateDate() {
    const now = new Date();
    const days = ["sun", "mon", "tues", "wed", "thu", "fri", "sat"];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();

    return `${dayName} ${monthName} ${date}`;

}

document.getElementById('date').textContent = updateDate();

setInterval(() => {
    document.getElementById('date').textContent = updateDate();
}, 60000); //checks every minute and updates automatically at midnight

function updateTime(){

}