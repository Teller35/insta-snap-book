
module.exports = (timestamp, { monthLength = "short" } ={} ) => {
    
    let months;
    
    if (monthLength === "short") {
        months = {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            11: 12,
        };
    } else {
        months = {
            0: "Jan",
            1: "Feb",
            2: "Mar",
            3: "Apr",
            4: "May",
            5: "Jun",
            6: "Jul",
            7: "Aug",
            8: "Sep",
            9: "Oct",
            10: "Nov",
            11: "Dec",
        };
    }

    const dateObj = new Date(timestamp);
    const formMonth = months[dateObj.getMonth()];
    const formDate = dateObj.getDate();
    const formYear = dateObj.getFullYear().toString().substr(-2);
    const formMinute = dateObj.getMinutes();

    let hours = dateObj.getHours();

    if (hours > 12) {
        hours -= 12;
    }
    else if (hours === 0) {
        hours = 12;
    }
    else {
        hours;
    }
    
    let portionOfDay;

    if (dateObj.getHours() >= 12) {
        portionOfDay = "PM"
    }
    else {
        portionOfDay = "AM"
    }

  const formattedTimeStamp = `${hours}:${formMinute} ${portionOfDay} on ${formMonth}/${formDate}/${formYear}`

  return formattedTimeStamp;
};
