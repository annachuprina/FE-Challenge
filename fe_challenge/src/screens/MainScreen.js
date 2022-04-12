import React from 'react'
import stylesMainScreen from '../styles/MainScreen.module.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import SortingButton from '../components/SortingButton'

export default function MainScreen(props) {
  return (
    <div className={stylesMainScreen['mainScreen']}>
        <Banner/>
        <SearchBar/>
        <SortingButton 
        numberOfJobs={props.jobsData.jobs.length} 
        numberOfSearchedJobs={props.jobsData.searchedJobs ? props.jobsData.searchedJobs.length : 0}
        noJobs={props.jobsData.noJobs}/>
        <hr className={stylesMainScreen['line']}/>
        <Card jobs={props.jobsData.jobs} 
        searchedJobs={props.jobsData.searchedJobs} 
        noJobs={props.jobsData.noJobs}
        className={stylesMainScreen['card']}/>
    </div>
  )
}
