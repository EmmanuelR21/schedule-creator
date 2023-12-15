import NUM_TO_MONTH from "./Maps/numToMonth"

const createSundaysList = (numOfSundays, startDate) => {
    let CURRENT_DATE = new Date()
    if (startDate) {
        const START_DATE_ARRAY = startDate.split("-")
        const [YEAR, MONTH, DATE] = [START_DATE_ARRAY[0], START_DATE_ARRAY[1], START_DATE_ARRAY[2]]

        let CHOSEN_DATE = [MONTH, DATE, YEAR].join('-')
        CURRENT_DATE = new Date(CHOSEN_DATE)
    }

    const SUNDAYS = []

    while (CURRENT_DATE.getDay() !== 0) {
        CURRENT_DATE.setDate(CURRENT_DATE.getDate() + 1)
    }

    for (let i = 0; i < numOfSundays; i++) {
        SUNDAYS.push(`${NUM_TO_MONTH[CURRENT_DATE.getMonth()]} ${CURRENT_DATE.getDate()}, ${CURRENT_DATE.getFullYear()}`)

        if (CURRENT_DATE.getDate() + 7 < CURRENT_DATE.getDate()) {
            CURRENT_DATE.setMonth(CURRENT_DATE.getMonth() + 1)
        } else {
            CURRENT_DATE.setDate(CURRENT_DATE.getDate() + 7)
        }
    }
    return SUNDAYS
}

export default createSundaysList;