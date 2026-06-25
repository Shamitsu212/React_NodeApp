import styles from './Header.module.css'

import { NotebookIcon } from 'lucide-react'

import Search_UI from '../../UI/Search_UI/Search_UI'

import { useRequiredContext } from '../../../utils/useRequiredContext'
import { SearchContext } from '../../../context/SearchContext'

function Header() {
  
  const { search, setSearch } = useRequiredContext(SearchContext, 'SearchContext')

  return (

    <header className={styles.header}>
      
      <div className={styles.header_Logo}>
        
        <NotebookIcon size={36} color='#F4BE1A' />

        Notes

      </div>
      
      <Search_UI string={search} setString={setSearch}/>

    </header>
  )

}

export default Header
