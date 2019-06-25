import firebase from '../../config/fbConfig'

var db = firebase.firestore()

export const createProject = (project) => {
    return(dispatch, getState) => {
       // make async call to database;
       const profile = getState().firebase.profile
       const authorId = getState().firebase.auth.uid
       db.collection('projects').add({
           ...project,
           authorFirstName: profile.firstName,
           authorLastName: profile.lastName,
           authorId: authorId,
           createdAt: new Date() 
       }).then( () => {
        dispatch({ type: 'CREATE_PROJECT', project})
       }).catch( (err) => {
           dispatch({type: 'CREATE_PROJECT_ERROR', err})
       })
    }
}

