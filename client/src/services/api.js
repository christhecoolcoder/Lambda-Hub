const BASE_URL = 'http://localhost:3001';

export function fetchAssignments() {
    return fetch(BASE_URL + '/assignments')
        .then(res => res.json())
        .catch(err => {
            console.log(err);
    });
}

export function fetchComments() {
    return fetch(BASE_URL + '/comments')
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

export function deleteComment(id) {
    const opts = {
        method: 'DELETE',
    }
    return fetch(`${BASE_URL}/comments/${id}`, opts)
        .catch(err => {
            throw Error(err);
        });
}

export function saveAssignment(assignment) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(assignment),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    return fetch(`${BASE_URL}/assignments`, opts)
      .then(resp => resp.json());
  }