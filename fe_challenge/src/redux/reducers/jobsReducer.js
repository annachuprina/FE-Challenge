import * as constants from '../constants';

const initState = {
    jobs: [],
    searchedJobs: [],
    loading:false,
    error:false,
    noJobs: false,
};

export const jobsReducer = (state = initState, action) => {
    switch(action.type) {
        case constants.GET_JOBS:
            return { 
                loading: true,
                ...state
            }
        case constants.GET_JOBS_SUCCESS:
            return{
                loading: false,
                jobs: action.payload,
                noJobs: false,
            }
        case constants.GET_JOBS_ERROR:
            return{
                loading: false,
                error: action.payload,
                jobs: [],
            }
        case constants.SEARCH_JOBS: 
            const existItems = state.jobs.filter(job => job.title.includes(action.payload))
            if (existItems && existItems.length > 0){
                return { 
                    loading: true,
                    searchedJobs: existItems,
                    jobs: state.jobs,
                    noJobs: false,
                }
            }
            else{
                return { 
                    loading: true,
                    searchedJobs: [],
                    noJobs: true,
                    jobs: state.jobs
                }
            }

        default:
            return state
    }
    
}