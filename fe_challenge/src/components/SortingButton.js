import React from 'react'
import stylesSortingButton from '../styles/SortingButton.module.css'

export default function SortingButton(props) {
  return (
    <div className={stylesSortingButton['sortingArea']}>
      <div className={stylesSortingButton['totalNumber']}>
        All jobs - {props.numberOfSearchedJobs > 0 ? props.numberOfSearchedJobs : props.noJobs ? 0 : props.numberOfJobs} results
      </div>
        <div className={stylesSortingButton['sortingButton']}>
          Sort results by
          <select className={stylesSortingButton['selectButton']}>
            <option selected> Relevance</option>
            <option> Relevance</option>
          </select>
        </div>
    </div>
  )
}