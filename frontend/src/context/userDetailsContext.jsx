import {createContext,useState} from 'react'
const UserDetailsContext= createContext()
function UserDetailsContextProvider({children}){
    const [userDetails,setUserDetails]= useState({
        username:"",
        image:''
    })
    return(<>
        <UserDetailsContext.Provider value={{userDetails,setUserDetails}}>
            {children}
        </UserDetailsContext.Provider>
    </>

    )
}

export {UserDetailsContextProvider,UserDetailsContext}