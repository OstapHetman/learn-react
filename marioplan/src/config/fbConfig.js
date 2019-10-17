import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCNUR34KVjgEZPbVJDdA3pUpU8RQmY3HtE",
    authDomain: "marioplan-4196a.firebaseapp.com",
    databaseURL: "https://marioplan-4196a.firebaseio.com",
    projectId: "marioplan-4196a",
    storageBucket: "marioplan-4196a.appspot.com",
    messagingSenderId: "62119756245",
    appId: "1:62119756245:web:8e571349ebf1e846883d5c"
});

firebase.firestore().settings({
    timestampsInSnapshots: true
})

export default firebase;