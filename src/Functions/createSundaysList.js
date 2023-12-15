import numToMonth from "./Maps/numToMonth"

const createSundaysList = (numOfSundays, startDate) => {
    let currentDate = new Date()
    if (startDate) {
        const startDateArray = startDate.split("-")
        const [year, month, date] = [startDateArray[0], startDateArray[1], startDateArray[2]]

        let chosenDate = [month, date, year].join('-')
        currentDate = new Date(chosenDate)
    }

    const sundays = []

    while (currentDate.getDay() !== 0) {
        currentDate.setDate(currentDate.getDate() + 1)
    }

    for (let i = 0; i < numOfSundays; i++) {
        sundays.push(`${numToMonth[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`)

        if (currentDate.getDate() + 7 < currentDate.getDate()) {
            currentDate.setMonth(currentDate.getMonth() + 1)
        } else {
            currentDate.setDate(currentDate.getDate() + 7)
        }
    }
    return sundays
}

export default createSundaysList;