import {combineReducers} from 'redux';

import dashboardReducer from '../components/dashboard/dashboardReducer'

export default combineReducers({
    dashboardData:dashboardReducer
});