import { combineReducers } from "redux";
// import bugsReducer from './bugs';
// import projectsReducer from './projects';
// import usersReducer from './users';
import subjectsReducer from './subjects';

export default combineReducers({
    // bugs: bugsReducer,
    // projects: projectsReducer,
    // users: usersReducer,
    subjects: subjectsReducer,
});