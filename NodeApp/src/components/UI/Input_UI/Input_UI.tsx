import type React from 'react'
import styles from './Input_UI.module.css'
import type { SetStateAction } from 'react'

interface Props {
    
    string: string,
    setString: React.Dispatch<SetStateAction<string>>,

    placeholder: string
}

function Input_UI({string, setString, placeholder}:Props) {

  return (
    <input 
        className={styles.input} 
        value={string} 
        placeholder={placeholder} 
        onChange={() => setString(string)}    
    />
  )
}

export default Input_UI