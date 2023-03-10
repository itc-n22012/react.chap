import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header () {
  return (
    <header>
      <container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </container>
    </header>
  )
}
