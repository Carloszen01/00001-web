import styles from './style';

import { Beneficios, Confiabilidad, FAQ, Testimonios, CTA, Footer, Navbar, Hero, Stats, Consumo, Promo } from './components/inddex';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Beneficios />
        <Confiabilidad />
        <Consumo />
        <FAQ />
        <Promo />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
)

export default App