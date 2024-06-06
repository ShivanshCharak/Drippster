import {useState,createContext} from 'react'

const AuthTypeContext=createContext()

function AuthTypeContextProvider({children}){
    const [authType,setAuthType] = useState("")
    return(<>
        <AuthTypeContext.Provider value={{authType,setAuthType}}>
            {children}
        </AuthTypeContext.Provider>
    
    </>)
}
export {AuthTypeContextProvider,AuthTypeContext}