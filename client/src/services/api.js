const BASE_URL = 'http://localhost:3001';

export function fetchAssignments() {
    return fetch(`${BASE_URL}/assignments`)
        .then(res => res.json())
        .catch(err => {
            throw Error(err);
        });
}