import React, {useState} from 'react'
import store from '../redux/store'
import stylesSearchBar from '../styles/SearchBar.module.css'
import 'font-awesome/css/font-awesome.min.css'
import {searchJobsAction} from "../redux/actions/searchJobsAction"

export default function SearchBar(props) {
  const [input, setInput] = useState("")
  
  function handleKeyDown(e){
    if (e.key === 'Enter') {
      store.dispatch(searchJobsAction(input))
    }
  }
  return (
    <div className={stylesSearchBar['searchArea']}>
       <input type="text" 
        className={stylesSearchBar['search']}
        placeholder='&#xf002; Search creative projects'
        onKeyDown={handleKeyDown}
        onInput={e => setInput(e.target.value)}
        ></input>
    </div>
  )
}

// {<>
//   <img src="https://i.ibb.co/nDphwWD/search.png" alt="search" className={stylesSearchBar['searchImg']}></img>
//   <>Search creative projects</>
// </>
