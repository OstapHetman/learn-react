export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({ 
            ...project,
            authorFirstName: 'John',
            authorLastName: 'Doe',
            createdAt: new Date()``
        })
        .then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        })
        .catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};