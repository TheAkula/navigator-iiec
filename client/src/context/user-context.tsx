import React, { useState, useEffect, createContext, SetStateAction, Dispatch, useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthScreen } from '../screens/auth-screen'

interface AuthContext {
    currentUser: undefined | string
    setCurrentUser: Dispatch<SetStateAction<string | undefined>>
}

export const UserContext = createContext<AuthContext>({
    currentUser: undefined,
    setCurrentUser: () => undefined,
})

interface Props {
    children: React.ReactNode
}

export const UserProvider = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState<string | undefined>(undefined)
    const navigate = useNavigate()

    const isAuthenticated = () => {
        const user = localStorage.getItem('token')

        if (!user) {
            return
        }
        navigate('/')

        return user
    }

    const checkLoggedIn = async () => {
        const cuser = isAuthenticated()

        setCurrentUser(cuser)
    }

    useEffect(() => {
        checkLoggedIn()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {currentUser ? children : <AuthScreen />}
        </UserContext.Provider>
    )
}

export const useContextUser = () => useContext(UserContext)