export const setUserInStorage = (data) => {
  localStorage.setItem("myUser",  JSON.stringify({...data}));    
};


export const getUserFromStorage = () => {
   const myUser =  localStorage.getItem("myUser");
   if(myUser){
    return JSON.parse(localStorage.getItem("myUser"));
   }
   return null;
}

export const logOutUser = ()=>{
    localStorage.removeItem("myUser");
}