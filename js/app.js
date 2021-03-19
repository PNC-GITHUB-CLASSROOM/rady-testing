let getDate = () => {
    const dates = document.querySelector('#date');
    const day = document.querySelector('#box-day');
    const month = document.querySelector('#box-month');
    const year = document.querySelector('#box-year');


    day.innerHTML = dates.value.substring(8);
    month.innerHTML = dates.value.substring(5, 7);
    year.innerHTML = dates.value.substring(0, 4);

    checkDate(date.value);
}

let dateInPast = (firstDate, secondDate) => firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0);


let checkDate = (dates) => {
    let currentDate = new Date();
    let givenDate = new Date(dates);
    let today = checkCurrentDate();
    

    if (!dateInPast(givenDate, currentDate)) {
        showMessage("green", "Future!", "#57f");
    }else if (today === dates) {
        showMessage("orange", "Present!", "#a8e");
    } else {
        showMessage("grey", "Past!", "#eec");
    }
}

let checkCurrentDate = () => {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();

    today = year + '-' + month + '-' + day;
    return today;
}

let showMessage = (color, textMessage, bgBody) => {
    let message = document.querySelector('.message');
    let text = document.querySelector('h1');

    message.style.background = "#fff";
    message.style.border = "2px solid " + color;

    text.innerHTML = textMessage;
    text.style.background = color;
    document.body.style.background = bgBody;
}
document.querySelector('#date').addEventListener('change', getDate);