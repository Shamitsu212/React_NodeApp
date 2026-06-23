import styles from './Aside_Menu.module.css'
import { useSelector } from 'react-redux'

import type { RootState } from '../../../../store/store'
import Button_UI from '../../../UI/Button_UI/Button_UI'
import { FolderIcon, NotebookPenIcon, StarIcon } from 'lucide-react'
import { useContext } from 'react'
import { SelectedContext } from '../../../../context/SelectedContext'
import Link_UI from '../../../UI/Link_UI/Link_UI'

function Aside_Projects() {

  const folders = useSelector((state: RootState) => state.folders)

  const context = useContext(SelectedContext)

  if(!context){
    throw new Error("Ошибка в контексте SelectedContext")
  }

  const {setSelected} = context


  return (
    <div className={styles.asideMenu}>

      <div className={styles.asideMenu_category}>
        <NotebookPenIcon size={30}/>
        <Button_UI text='Все заметки' result='All' OnClick={setSelected}/>
      </div>
      
      <div className={styles.asideMenu_category}>
        <StarIcon size={30}/>
        <Button_UI text='Избранные' result='favorite' OnClick={setSelected}/>
      </div>


      <div>
        
        <h3 className={styles.asideMenu_folders}>
          Папки 
          
          <div className={styles.folders__button}>
            <Link_UI text='+' to='/add'/>
          </div>
          
        </h3>

        {folders.folders.map((f) => (
          <div>
            <FolderIcon />
            <Button_UI text={f.name} result={`${f.id}`} OnClick={setSelected}/>
          </div>
        ))}

      </div>

      

    </div>
  )
}

export default Aside_Projects