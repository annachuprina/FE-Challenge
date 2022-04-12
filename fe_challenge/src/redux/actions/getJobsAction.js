import * as constants from '../constants';

const endpoint = "https://remotive.com/api/remote-jobs?category=software-dev";

const handleErrorACB = response => {
    if (!response.ok) { 
       throw response.statusText
    } else {
       return response.json()
    }
}

const handleNoActivityACB = response => {
    if (response.error) {
        throw response.error
    } else {
        return response
    }
}
export const getJobsAction = () => {
    return dispatch => {
        fetch(endpoint)
        .then(handleErrorACB)
        .then(handleNoActivityACB)
        .then(data => {
            dispatch({
                type: constants.GET_JOBS_SUCCESS,
                payload: data.jobs
            });
        })
        .catch((error) => 
            dispatch({
            type:constants.GET_JOBS_ERROR, payload: error
        }));
    };
};

export default getJobsAction