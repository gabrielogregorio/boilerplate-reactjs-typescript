import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import styles from './styles.module.css'

export const Home = () => {
  return (
  <>
    <Header />
    <main className={styles.main}>
      <section aria-label="Conteúdo Principal">
        <h1>title content</h1>
        <article>
          <h2>title of article</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nam quasi odio facilis debitis suscipit, odit expedita. Impedit eum obcaecati neque illum omnis eius nesciunt autem praesentium, voluptas nemo accusamus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui fugiat officia eaque ipsa corrupti. Tempore praesentium consectetur deleniti quibusdam architecto dolorum ea. Et perspiciatis reiciendis pariatur quos voluptatem ipsam.</p>
        </article>
      </section>
    </main>

    <Footer />
  </>
  )
}
