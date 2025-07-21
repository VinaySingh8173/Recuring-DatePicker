import { useState } from 'react'
import './App.css'
import RecurringDatePicker from './components/RecurringDatePicker';

function App() {

  return (
    <>
   <div className="p-3 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg">
  <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 m-4">
     Recurring Date Picker
  </h1>
  <RecurringDatePicker />
</div>
    </>
  )
}

export default App
