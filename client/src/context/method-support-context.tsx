import { createContext, useContext, useState } from 'react'

interface ContextMethodSupport {
    support: boolean
    setSupport: (support: boolean) => void
}

interface Props {
    children: React.ReactNode
}

const MethodSupportContext = createContext<ContextMethodSupport>(
    {
        support: false,
        setSupport: () => undefined,
    }
)

export const ContextMethodSupportProvider = ({ children }: Props) => {
    const [support, setSupport] = useState(false)

    return (
        <MethodSupportContext.Provider value={{
            support,
            setSupport
        }}>
            {children}
        </MethodSupportContext.Provider>
    )
}

export const useContextMethodSupport = () => useContext(MethodSupportContext)
