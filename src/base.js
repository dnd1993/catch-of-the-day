import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDUAzJzp2wpN4EGiYnPpaNJ-aHy3cTTjUk',
  authDomain: 'catch-of-the-day-yana.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-yana-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
