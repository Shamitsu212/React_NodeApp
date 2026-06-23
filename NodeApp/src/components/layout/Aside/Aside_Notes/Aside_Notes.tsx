import styles from './Aside_Notes.module.css'

import { useSelector } from 'react-redux'
import type { RootState } from '../../../../store/store'
import Button_UI from '../../../UI/Button_UI/Button_UI'
import NotePreview_UI from '../../../UI/NotePreview_UI/NotePreview_UI'

function Aside_Notes() {

    const notes = useSelector((state: RootState) => state.notes)

  return (
    <div className={styles.aside_notes}>
        
      <div className={styles.notes_list}>
        <NotePreview_UI />
        <NotePreview_UI />
        <NotePreview_UI />
      </div>
        

        {notes.notes.map((n) => (
            <div></div>
        ))}

    </div>
  )
}

export default Aside_Notes