import { getApp, getApps, initializeApp} from "firebase/app"
import { getFireStore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAkjCN2mz25tSDVkqIWoIiY6e6IOHu_kFw",
    authDomain: "recipe-4a865.firebaseapp.com",
    databaseURL: "https://recipe-4a865-default-rtdb.firebaseio.com",
    projectId: "recipe-4a865",
    storageBucket: "recipe-4a865.appspot.com",
    messagingSenderId: "1406739352",
    appId: "1:1406739352:web:bb34bc4c7a362fdde241ed",
    measurementId: "G-TVDVX92P2X"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFireStore(app);
  const storage = getStorage(app)

  export { app, firestore, storage };
  