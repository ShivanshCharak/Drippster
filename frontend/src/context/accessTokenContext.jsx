import React, { useState } from 'react'
import { createContext } from 'react'
const TokenContext = createContext()
function AccessTokenContextProvider({children}) {
    const [accessToken,setAccessToken] = useState("")
  return (
    <TokenContext.Provider value={{accessToken,setAccessToken}}>
        {children}
    </TokenContext.Provider>
  )
}

export { AccessTokenContextProvider,TokenContext}