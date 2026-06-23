import Button_UI from '../../UI/Button_UI/Button_UI'
import Input_UI from '../../UI/Input_UI/Input_UI'
import TextArea_UI from '../../UI/TextArea_UI/TextArea_UI'
import styles from './AddNote.module.css'

function addNote() {

  return (
    <form className={styles.form}>
        
        <div>
            <Input_UI />
        </div>
        
        <div>
            <TextArea_Ui />
        </div>
        

        <Button_UI />

    </form>
  )
}

export default addNote