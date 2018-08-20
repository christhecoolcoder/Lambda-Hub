const BASE_URL = 'http://localhost:3000';

export function fetchAssignments() {
    return fetch(BASE_URL + '/assignments')
        .then(res => res.json())
        .catch(err => {
            console.log(err);
    });
}