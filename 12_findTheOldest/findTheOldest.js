
/**
 * Return the oldest Person in an array of people.
 * Assumes the yearOfBirth and yearOfDeath are reasonable (positive, within sensible bounds) and yearOfBirth is <= yearOfDeath.
 * @param {Array} people 
 */
const findTheOldest = function(people) {
    let oldest = people[0];
    let curOldestPersonAge = oldest.yearOfDeath - oldest.yearOfBirth;

    people.forEach((person, index) => {
        let curPersonAge = person.yearOfDeath - person.yearOfBirth;
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
