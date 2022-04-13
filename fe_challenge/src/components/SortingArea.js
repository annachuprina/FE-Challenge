import React from 'react'
import stylesSortingArea from '../styles/SortingArea.module.css'

export default function SortingArea(props) {
  return (
    <div className={stylesSortingArea['sortingArea']}>
      <div className={stylesSortingArea['totalNumber']}>
        All jobs - {props.numberOfSearchedJobs > 0 ? props.numberOfSearchedJobs : props.noJobs ? 0 : props.numberOfJobs} results
      </div>
        <div className={stylesSortingArea['sortingButton']}>
          Sort results by
          <select className={stylesSortingArea['selectButton']} defaultValue={'Relevance 1'}>
            <option value='Relevance 1'> Relevance</option>
            <option value='Relevance 2'> Relevance</option>
          </select>
        </div>
    </div>
  )
}