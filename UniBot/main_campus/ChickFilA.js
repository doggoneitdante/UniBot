import TimeConfiguration from './main_campus';
import Semester from './main_campus';

class ChickFilA {
    openMonTue;
    closedMonTue;
    openWedThur;
    closedWedThur;
    openFri;
    closedFri;
    today = new Date();

    constructor() {
        var timeconfig = new TimeConfiguration();
        var semester = new Semester(1);

        // Summer
        if (semester.getSemesterKey() == 1) {
            const openMonTue = '07:30:00';
            const closedMonTue = '17:00:00';
            const openWedThur = '07:30:00';
            const closedWedThur = '15:00:00';
            const openFri = '07:30:00';
            const closedFri = '14:00:00';
        }
    }

// Monday - Tuesday 7:30 - 17:00
    whenValid() {

    }
/**    if (valid) {
        message.reply(`\nChick-Fil-A is currently **OPEN.**\n**Here are the hours for Chick-Fil-A on Main Campus (JPL Food Court):**\nMon - Tue\t7:30 - 17:00\nWed - Thu\t7:30-15:00\nFri\t\t\t7:30 - 14:00\nSat - Sun\t\tClosed\n\n\nCurrent Semester: **Summer '19**\nCurrent time: ${rightNow}`);
    } else {
        message.reply(`\nChick-Fil-A is currently **CLOSED.**\n**Here are the hours for Chick-Fil-A on Main Campus (JPL Food Court):**\nMon - Tue\t7:30 - 17:00\nWed - Thu\t7:30-15:00\nFri\t\t\t7:30 - 14:00\nSat - Sun\t\tClosed\n\n\nCurrent Semester: **Summer '19**\nCurrent time: ${rightNow}`);
    }
    if (rightNow.getDay() === 0 || rightNow.getDay() === 6) {
        message.reply(`\nChick-Fil-A is currently **CLOSED.**\n**Here are the hours for Chick-Fil-A on Main Campus (JPL Food Court):**\nMon - Tue\t7:30 - 17:00\nWed - Thu\t7:30-15:00\nFri\t\t\t7:30 - 14:00\nSat - Sun\t\tClosed\n\n\nCurrent Semester: **Summer '19**\nCurrent time: ${rightNow}`);
    }*/
}