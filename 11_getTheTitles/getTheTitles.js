
/**
 * Get the titles from an array of book Objects.
 * @param {Array} bookArr an Array of Objects
 */
const getTheTitles = function(bookArr) {
    let titles = []
    bookArr.forEach(book => {
        titles.push(book.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
