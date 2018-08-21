const BASE_URL = 'http://localhost:3001';

export function fetchAssignments() {
    return fetch(BASE_URL + '/assignments')
        .then(res => res.json())
        .catch(err => {
            console.log(err);
    });
}

export function fetchAssignment(id) {
    return fetch(BASE_URL + '/assignments/' + id)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
    });
}

export function deleteAssignment(id) {
    const opts = {
        method: 'DELETE',
    }
    return fetch(`${BASE_URL}/assignments/${id}`, opts)
        .catch(err => {
            throw Error(err);
        });
}