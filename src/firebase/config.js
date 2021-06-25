import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBLbnDRqrUfAB-aHPr8FG9vRfECL2JmTa4',
  authDomain: 'travelify-f5b34.firebaseapp.com',
  projectId: 'travelify-f5b34',
  storageBucket: 'travelify-f5b34.appspot.com',
  messagingSenderId: '866025026214',
  appId: '1:866025026214:web:1c91d62e8d34de5369fa67',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = app.auth();
export const firestore = app.firestore();
export default app;
