const { DateTime } = require("luxon");


module.exports = {
    format: (date, time) => {
        return `${DateTime.fromISO(time).toFormat('h:mm a')} on ${DateTime.fromISO(date).toFormat('LLL dd, yy')}`  
    }
};