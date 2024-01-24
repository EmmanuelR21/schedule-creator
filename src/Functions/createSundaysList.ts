import numToMonth from "./Maps/numToMonth"

const createSundaysList = (numOfSundays: number, startDate: string): string[] => {
    let currentDate: Date = new Date();
    if (startDate) {
        const startDateArray: string[] = startDate.split("-");
        const [year, month, date]: [string, string, string] = [startDateArray[0], startDateArray[1], startDateArray[2]];

        const chosenDate: string = [month, date, year].join('-');
        currentDate = new Date(chosenDate);
    }

    const sundays: string[] = [];

    while (currentDate.getDay() !== 0) {
        currentDate.setDate(currentDate.getDate() + 1);
    }

    for (let i = 0; i < numOfSundays; i++) {
        sundays.push(`${numToMonth[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`);

        if (currentDate.getDate() + 7 < currentDate.getDate()) {
            currentDate.setMonth(currentDate.getMonth() + 1);
        } else {
            currentDate.setDate(currentDate.getDate() + 7);
        }
    }
    return sundays;
}

export default createSundaysList;
