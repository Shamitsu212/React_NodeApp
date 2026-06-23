import styles from './NotePreview_UI.module.css'

function NotePreview_UI() {

  return (
    <article className={styles.article}>
      
      <h5 className={styles.article_h}>
        Идеи для путешествия
      </h5>

      <p className={styles.p}>
        Исландия, Норвегия, Португалия, Новая Зеландия, Германия...
      </p>

    </article>
  )
}

export default NotePreview_UI
