import { useState } from 'react'
import TopBar from './components/TopBar'
import { Increment } from './components/Increment'
import Show from './components/Show'
import Decrement from './components/decrement'
import Table from './components/Table'
import Calculator from './components/Calculator'
import Child from './components/Child'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Effects from './components/Effects'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




function App() {
  const [count, setCount] = useState(0)
const firebaseConfig = {
  apiKey: "AIzaSyAdnjItRn2QltzFGuOaFsgfLkjaY0iJNxc",
  authDomain: "fir-ae844.firebaseapp.com",
  projectId: "fir-ae844",
  storageBucket: "fir-ae844.firebasestorage.app",
  messagingSenderId: "908018886436",
  appId: "1:908018886436:web:78a3de481f88c5077975b1",
  measurementId: "G-1D2VLZ1QG2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
  return (
    <>
      <div>
        <TopBar />
        <Increment />
       <Decrement />
        <Show />
        <Table />
        <Calculator />
        <Effects />
        <Child name = "Rahul"/>
          <Child name = "Neha"/>
        </div>
    </>
  )
}

export default App
