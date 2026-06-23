import styles from './Button_UI.module.css'

interface Props {
    text: string,
    OnClick: (result:string) => void
    result: string
}

function Button_UI({text, OnClick, result}:Props) {

  return (

    <button className={styles.button} onClick={() => OnClick(result)}>
        {text}
    </button>

  )
}

export default Button_UI