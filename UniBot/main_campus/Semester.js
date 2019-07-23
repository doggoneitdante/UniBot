export class Semester {
    semester = -1;
    semesterTitle = "";
    thisYear = new Date()
    thisYear = thisYear.getFullYear();

    constructor(semesterKey) {
        this.semester = semesterKey;
        this.setSemesterTitle();
    }
    // 0 == Spring
    // 1 == Summer
    // 2 == Fall
    calcSemester(key) {
        switch(key) {
            case 0:
                return "Spring";
            case 1:
                return "Summer";
            case 2:
                return "Fall";
        }
    }

    setSemesterTitle() {
        this.semesterTitle = this.calcSemester(this.semester) + " " + this.thisYear;
    }

    getSemesterKey() {
        return this.semester;
    }


}