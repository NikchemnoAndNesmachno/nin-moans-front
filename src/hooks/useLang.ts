import { useContext} from 'react'
import { LangContext } from '../context/LangContext'

const useLang = () => {
    const context = useContext(LangContext)
    if (!context) throw new Error("no lang context")
    return context
}

export default useLang