import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCIUCGEasvEYsFmhEstHnsmsXpUJ6logZw',
  authDomain: 'portfolio-project-12e02.firebaseapp.com',
  projectId: 'portfolio-project-12e02',
  storageBucket: 'portfolio-project-12e02.appspot.com',
  messagingSenderId: '113368238950',
  appId: '1:113368238950:web:69ab5c180bfa78e41e16a7',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
