import styles from './ModalButton_UI.module.css'

interface Props {
    text: string,
    OnClick: () => void
}

function ModalButton_UI({text, OnClick}:Props) {

  return (
    <button className={styles.modalButton} onClick={OnClick}>
        {text}
    </button>
  )
}

export default ModalButton_UI