import React  from 'react';
import './App.css';
import store from './redux/store'
import Header from './components/Header';
import getJobsAction from "./redux/actions/getJobsAction"
import {useSelector} from'react-redux'
import Footer from './components/Footer';
import MainScreen from './screens/MainScreen';

store.dispatch(getJobsAction())

function App() {
  const jobsData = useSelector(state => state.jobsData)
  return (
    <div className="App">
      <Header/>
      <MainScreen jobsData={jobsData}/>
      <Footer/>
    </div>
  );
}

export default App;
