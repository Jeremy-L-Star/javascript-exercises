/**
 * Set the age of a person who is still alive - no death date.
 * @param {Number} yearOfBirth 
 * @returns Number the age of the person.
 */
function setAgeOfLivingPerson(yearOfBirth) {
    let currentDateTimestamp = Date.now();
    let currentDate = new Date(currentDateTimestamp);
    let currentYear = currentDate.getFullYear(); // currently this = 2023.

    return currentYear - yearOfBirth; 
}

/**
 * Return the oldest Person in an array of people.
 * Assumes the yearOfBirth and yearOfDeath are reasonable (positive, within sensible bounds) and yearOfBirth is <= yearOfDeath.
 * @param {Array} people 
 */
const findTheOldest = function(people) {
    let oldest = people[0];
    let curOldestPersonAge = oldest?.yearOfDeath - oldest.yearOfBirth;

    // if curOldestPersonAge is NaN, they're still alive
    // so use the current date to calculate their age.
    // Note: Optional chaining should be undefined when yearOfDeath doesn't exist. undefined - Number = NaN. Number.NaN() is the best solution here.
    if(Number.isNaN(curOldestPersonAge)) {
        curOldestPersonAge = setAgeOfLivingPerson(oldest.yearOfBirth);
    }

    people.forEach((person, index) => {
        let curPersonAge = person?.yearOfDeath - person.yearOfBirth;

        if(Number.isNaN(curPersonAge)) {
            curPersonAge = setAgeOfLivingPerson(person.yearOfBirth);
        }
        console.log(`current person name: ${person.name}, array index: ${index}`);

        if(curPersonAge > curOldestPersonAge) {
            console.log(`found new oldest person at index ${index}, name ${person.name}`);
            oldest = people[index];
            curOldestPersonAge = curPersonAge;
        }
    });

    console.log(`Oldest person type: ${typeof oldest}, oldest person's name: ${oldest.name}`);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
