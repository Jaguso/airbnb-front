import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCKz1oJlUyhPPTiup1nBgLdviiort7EAws",
    authDomain: "airbnb-front.firebaseapp.com",
    databaseURL: "https://airbnb-front.firebaseio.com",
    projectId: "airbnb-front",
    storageBucket: "airbnb-front.appspot.com",
    messagingSenderId: "21879044998"
};


export default firebase.initializeApp(config);