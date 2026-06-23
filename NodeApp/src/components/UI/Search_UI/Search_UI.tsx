import type React from 'react'
import styles from './Search_UI.module.css'
import type { SetStateAction } from 'react'
import { SearchIcon } from 'lucide-react'

interface Props {
    
    string: string,
    setString: React.Dispatch<SetStateAction<string>>,

}

function Search_UI({string, setString}:Props) {

  return (

    <div className={styles.search}>
        <SearchIcon size={30}/>

        <input 
            className={styles.search__input} 
            value={string} 
            placeholder="Поиск заметок..."
            onChange={(e) => setString(e.target.value)}    
        />

    </div>

    
  )
}

export default Search_UI