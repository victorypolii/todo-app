import React from 'react'
import Header from '../Components/employee/Header';
import SearchBar from '../Components/employee/SearchBar';
import EmployeeList from '../Components/employee/EmployeeList';
import Clock from '../Components/Clock';
import NameForm from '../Components/NameForm';

const HomePage = () => {
  return (
    <div>
      <Clock />
      <Header title="Employee Directory" />
      <NameForm/>
      <SearchBar />
      <EmployeeList />
    </div>
  )
}

export default HomePage;