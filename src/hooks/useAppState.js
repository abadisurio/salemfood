import { useState } from 'react'

const useAppState = (children) => {
    console.log(children);
    const [isLoading, setIsLoading] = useState(true)
    return {
        isLoading, setIsLoading
    }
}

export default useAppState