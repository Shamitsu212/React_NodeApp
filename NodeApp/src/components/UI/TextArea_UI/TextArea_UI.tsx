import styles from './TextArea_UI.module.css'
import type { SetStateAction } from 'react'

interface Props {
    
    string: string,
    setString: React.Dispatch<SetStateAction<string>>,

    placeholder: string
}


function TextArea_UI({string, setString, placeholder}:Props) {

  return (
    <textarea
        className={styles.input} 
        value={string} 
        placeholder={placeholder} 
        onChange={() => setString(string)}    
    />
  )
}

export default TextArea_UI