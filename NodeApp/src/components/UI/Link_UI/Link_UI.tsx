import styles from './Link_UI.module.css'

import { Link } from 'react-router-dom'

interface Props {
    to: string,
    text: string
}

function Link_UI({to, text}:Props) {

  return (
    <Link to={to} className={styles.addLink}>
        {text}
    </Link>
  )
}

export default Link_UI