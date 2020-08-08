import firebase from "firebase/app"   // siempre
import 'firebase/firestore'          //siempre
  
  
  

  var firebaseConfig = {
    apiKey: "AIzaSyBWlpE_ZvP8AnJ8LlI2joma2rd4y4RM-MY",
    authDomain: "rnconfirebasecloudfirestore.firebaseapp.com",
    databaseURL: "https://rnconfirebasecloudfirestore.firebaseio.com",
    projectId: "rnconfirebasecloudfirestore",
    storageBucket: "rnconfirebasecloudfirestore.appspot.com",
    messagingSenderId: "31481702548",
    appId: "1:31481702548:web:6fe95e405421615019ac81"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)// Initialize Firebase
}


export default firebase  // exportalo ya armado