// Define an array of driver objects
const drivers = [
    {
        name: 'John',
        hometown: 'Chicago'
    },
    {
        name: 'Jane',
        hometown: 'Boston'
    },
    {
        name: 'Mike',
        hometown: 'San Francisco'
    }
];

// Define a function that finds drivers whose names match the given string
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

// Define a function that finds drivers whose names begin with the given string
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

// Define a function that finds drivers whose names match the given string exactly
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}