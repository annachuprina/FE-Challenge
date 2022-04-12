import * as constants from '../constants'

export const searchJobsAction = (query) => {
    return {
        type: constants.SEARCH_JOBS,
        payload: query,
    }
};