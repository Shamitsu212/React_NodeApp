import styles from './NotePreview_UI.module.css'

import { SelectedNoteContext } from '../../../context/SelectedNoteContext'
import { useRequiredContext } from '../../../utils/useRequiredContext'

import { useDispatch, useSelector } from 'react-redux'
import { favoriteNote, pinNote, removeNotes, unFavoriteNote, unPinNote } from '../../../store/slices/NotesSlice'
import type { RootState } from '../../../store/store'

import { PinIcon, PinOffIcon, StarIcon, TrashIcon } from 'lucide-react'

interface Props{

  id: number

}

function NotePreview_UI({id}:Props) {

  const { setSelected } = useRequiredContext(SelectedNoteContext, 'SelectedNoteContext')

  const notes = useSelector((state:RootState) => state.notes)
  const note = notes.notes.find((n) => n.id == id)
  
  if (!note) {
    return null
  }

  const dispatch = useDispatch()

  function favorite(id:number){
    dispatch(favoriteNote(id))
  }
  function pin(id:number){
    dispatch(pinNote(id))
  }
  function unFavorite(id:number){
    dispatch(unFavoriteNote(id))
  }
  function unPin(id:number){
    dispatch(unPinNote(id))
  }
  function del(id:number){
    dispatch(removeNotes(id))
  }

  

  return (

    <article className={styles.article} onClick={() => setSelected(`${id}`)}>

      <div className={styles.article_buttonContainer}>

        {note?.Pinned ? 
          <button className={styles.buttonContainer_button} onClick={(e) => {e.stopPropagation(), unPin(note.id)}}>
            <PinOffIcon size={22} color='black'/>
          </button>
        : 
          <button className={styles.buttonContainer_button} onClick={(e) => {e.stopPropagation(), pin(note.id)}}>
            <PinIcon size={22} color='black'/>
          </button>
        }

        {note?.Favorite ? 
          <button className={styles.buttonContainer_button} onClick={(e) => { e.stopPropagation(), unFavorite(note.id)}}>
            <StarIcon size={22} color='#F4BE1A'/>
          </button>
        : 
          <button className={styles.buttonContainer_button} onClick={(e) => { e.stopPropagation(), favorite(note.id)}}>
            <StarIcon size={22} color='black'/>
          </button>
        }

        <button className={styles.buttonContainer_button} onClick={() => del(note.id)}>
          <TrashIcon size={22} color='black'/>
        </button>

      </div>
      
      <h5 className={styles.article_h}>
        {note?.name}
      </h5>

      <p className={styles.p}>
        {note?.text}
      </p>

    </article>
    
  )
  
}

export default NotePreview_UI
