import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBCw_Px68EFyzY2eZPegF1I1uRMjq_XONw",
  authDomain: "acoolmessageboard.firebaseapp.com",
  databaseURL: "https://acoolmessageboard.firebaseio.com",
  projectId: "acoolmessageboard",
  storageBucket: "acoolmessageboard.appspot.com",
  messagingSenderId: "410302103395"
};
firebase.initializeApp(config);
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage().ref();
