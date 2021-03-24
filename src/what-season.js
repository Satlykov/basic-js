const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = 'no-value') {
    if (date === 'no-value' ) {
        return 'Unable to determine the time of year!';
    };

    if (date instanceof Date) {

        if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Fake!');

        const month = date.getMonth();

        switch (month) {
            case 11:
            case 0:
            case 1:
                return 'winter';
    
            case 2:
            case 3:
            case 4:
                return 'spring';
    
    
            case 5:
            case 6:
            case 7:
                return 'summer';
    
            case 8:
            case 9:
            case 10:
                return 'autumn';
        }
    }

    throw new Error('Wrong argument!');
};
