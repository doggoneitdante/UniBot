export class TimeConfiguration {
    rightNow = new Date();

    constructor() {}

    monTue(openMonTue, closedMonTue)
    {
        var openDateMonTue = new Date(rightNow.getTime());
        openDateMonTue.setHours(openMonTue.split(":")[0]);
        openDateMonTue.setMinutes(openMonTue.split(":")[1]);
        openDateMonTue.setSeconds(openMonTue.split(":")[2]);

        var closedDateMonTue = new Date(rightNow.getTime());
        closedDateMonTue.setHours(closedMonTue.split(":")[0]);
        closedDateMonTue.setMinutes(closedMonTue.split(":")[1]);
        closedDateMonTue.setSeconds(closedMonTue.split(":")[2]);

        const valid = openDateMonTue < rightNow && closedDateMonTue > rightNow;
        return valid;
    }

    wedThur(openWedThur, closedWedThur) {
        var openDateWedThur = new Date(rightNow.getTime());
        openDateWedThur.setHours(openWedThur.split(":")[0]);
        openDateWedThur.setMinutes(openWedThur.split(":")[1]);
        openDateWedThur.setSeconds(openWedThur.split(":")[2]);

        var closedDateWedThur = new Date(rightNow.getTime());
        closedDateWedThur.setHours(closedWedThur.split(":")[0]);
        closedDateWedThur.setMinutes(closedWedThur.split(":")[1]);
        closedDateWedThur.setSeconds(closedWedThur.split(":")[2]);

        const valid = openDateWedThur < rightNow && closedDateWedThur > rightNow;
        return valid;
    }

    fri(openFri, closedFri) {
        var openDateFri = new Date(rightNow.getTime());
        openDateFri.setHours(openFri.split(":")[0]);
        openDateFri.setMinutes(openFri.split(":")[1]);
        openDateFri.setSeconds(openFri.split(":")[2]);

        var closedDateFri = new Date(rightNow.getTime());
        closedDateFri.setHours(closedFri.split(":")[0]);
        closedDateFri.setMinutes(closedFri.split(":")[1]);
        closedDateFri.setSeconds(closedFri.split(":")[2]);

        const valid = openDateFri < rightNow && closedDateFri > rightNow;
        return valid;
    }

    satSun(openSatSun, closedSatSun) {
        var openDateSatSun = new Date(rightNow.getTime());
        openDateSatSun.setHours(openSatSun.split(":")[0]);
        openDateSatSun.setMinutes(openSatSun.split(":")[1]);
        openDateSatSun.setSeconds(openSatSun.split(":")[2]);

        var closedDateSatSun = new Date(rightNow.getTime());
        closedDateSatSun.setHours(closedSatSun.split(":")[0]);
        closedDateSatSun.setMinutes(closedSatSun.split(":")[1]);
        closedDateSatSun.setSeconds(closedSatSun.split(":")[2]);

        const valid = openDateSatSun < rightNow && closedDateSatSun > rightNow;
        return valid;
    }
}