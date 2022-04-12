import React from 'react'
import stylesCard from '../styles/Card.module.css'

function convertDate(date){
  var options = { day: 'numeric', month: 'long' };
  return new Date(date).toLocaleDateString([],options);
}
function renderJob(job){
  return(
    <div className={stylesCard['card']} key={job.id}>
        <div className={stylesCard['statusBar']}/>
        <div className={stylesCard['card_header']}>
          <img src={job.company_logo} alt="companyLogo" className={stylesCard['companyLogo']}></img>
          <div>
            <div className={stylesCard['companyName']}>{job.company_name}</div>
            <div className={stylesCard['location']}>
              <img src="https://i.ibb.co/k9n1cG3/Vector.png" alt="location" className={stylesCard['locationLogo']}/>
              {job.candidate_required_location}
            </div>
          </div>
        </div>
        <div className={stylesCard['jobTitle']}>{job.title}</div>
        <div className={stylesCard['categories']}>
        {typeof(job.category) !== "string" && job.category.map( category =>
          <div className={stylesCard['category']}>{category}</div>
        )}
        {typeof(job.category) === "string" && 
          <div className={stylesCard['category']}>{job.category}</div>}
        </div>
        <div className={stylesCard['bottomInfo']}>
          <div className={stylesCard['numberOfVideo']}>
            <img src="https://i.ibb.co/bgD9BYF/camera.png" alt="camera"/>
            {(Math.random() * 4 + 1).toFixed(0)} videos
          </div>
          <div className={stylesCard['date']}>
            <img src="https://i.ibb.co/mt6VZph/time.png" alt="time"/>
            {convertDate(job.publication_date)}
          </div>
        </div>
    </div>
  )
}
export default function Card(props) {
  return (
    <div className={stylesCard['cards']}>
      {
        props.noJobs === false && !props.searchedJobs && props.jobs.slice(0,9).map(renderJob)
      }
      {
        props.noJobs === false && props.searchedJobs && props.searchedJobs !== [] && props.searchedJobs.slice(0,9).map(renderJob)
      }
      {
        props.noJobs === true && <div className={stylesCard['noJobs']}>No jobs were found</div>
      }
    </div>
  )
}
