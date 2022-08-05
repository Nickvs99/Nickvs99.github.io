export function sortByInt(a, b) {
    return a - b;
}

export function sortByString(a, b) {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
}

export default {sortByInt, sortByString}