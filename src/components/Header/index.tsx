
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.menu}>
      <p>LOGO</p>
      <nav>
        <ul>
          <li><a href="/home" title="go to homescreen">home</a></li>
          <li><a href="/news" title="news of tech">news</a></li>
          <li><a href="/contact" title="make contact">contact</a></li>
        </ul>

        <form target="/search">
          <input name="q" type="search" />
          <input type="submit" />
        </form>
      </nav>
    </header>
  )
}
