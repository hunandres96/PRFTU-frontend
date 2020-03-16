import React from 'react';
import './App.css';

import { StudentProvider } from './context/StudentState'
import { StudentList } from './components/StudentList';
import { AddStudent } from './components/AddStudent';
import { Header } from './components/Header';

function App() {
  return (
    <StudentProvider>
      <Header />
      <div>
        <StudentList />
        <AddStudent />
      </div>
    </StudentProvider>
  )
}

export default App
