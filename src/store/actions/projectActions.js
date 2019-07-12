export const createProject = (project) => {
    //pause the dispatch
    return (dispatch, getStat) => {
        //make async call to database
        //continue with dispatch as normal
        dispatch({type:'CREATE_PROJECT', project});
    }
}