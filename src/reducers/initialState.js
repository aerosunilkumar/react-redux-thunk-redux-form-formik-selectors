import moment from "moment";

const initialState = {
    dashboardData: {
        isLoading:true,
        posts: [],
        postsError:undefined,
        user:{
            email:"",
            username:"",
            datepicker:moment()
        }
    }    
  };
  
  export default initialState;
  