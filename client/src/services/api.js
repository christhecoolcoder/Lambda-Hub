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

  export function fetchComments(assignmentId) {
    return fetch(BASE_URL + '/comments/' + assignmentId)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
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

  export function updateAssignment(assignment) {
    const opts = {
      method: 'PUT',
      body: JSON.stringify(assignment),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    return fetch(`${BASE_URL}/assignments/${assignment.id}`, opts)
        .then(resp => resp.json());
  }