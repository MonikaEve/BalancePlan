const initState = {
    projects:[
        {id:'1', title:'create a project management app', content:'blah blah blah'},
        {id:'2', title:'Mindfulness', content:'blah blah blah'},
        {id:'3', title:'Case Study', content:'blah blah blah'}
    ]
}
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}
export default projectReducer;