const { DateTime } = require("luxon");


module.exports = {
    dateFormat: (date, time) => {
        return `${DateTime.fromISO(time).toFormat('h:mm a')} on ${DateTime.fromISO(date).toFormat('LLL dd, yy')}`  
    }
};