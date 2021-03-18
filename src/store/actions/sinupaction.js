import axios from 'axios';


export const sinup = (payload, history) => async (dispatch) => {
    try{
       let resp= await  axios.post('/signup', payload);
      dispatch({
           type: "USER_SIGNUP",
           user: payload
       });
   
     //  history.push('/login');
   
    }catch(e){
     console.log(e);
    }
   
    
     
     
   
   }