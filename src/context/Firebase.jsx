import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc} from 'firebase/firestore';

const FirebaseContext=createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyBTuZkXrEj6s9aR0ng1671Eo7aQFt4fs8Y",
    authDomain: "fir-reg-456df.firebaseapp.com",
    projectId: "fir-reg-456df",
    storageBucket: "fir-reg-456df.appspot.com",
    messagingSenderId: "358476492245",
    appId: "1:358476492245:web:af21ce6c2f434c4fe9215c"
  };
export const useFirebase = ()=>useContext(FirebaseContext);
const firebaseApp =initializeApp(firebaseConfig);


const firestore=getFirestore(firebaseApp);

export const FirebaseProvider=(props)=>{
    const eventReg =async(email,num,name,branch,year)=>{
        return await addDoc(collection(firestore,'participants'),{
            email,
            num,
            name,
            branch,
            year
         })
    }

    return <FirebaseContext.Provider value={{eventReg}}>
        {props.children}
    </FirebaseContext.Provider>
};