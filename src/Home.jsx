import styles from './style';
import ReactPixel from 'react-facebook-pixel';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TagManager from 'react-gtm-module';

import { Beneficios, Confiabilidad, FAQ, Testimonios, CTA, Footer, Navbar, Hero, Stats, Consumo, Promo } from './components/inddex';

ReactPixel.init('858411422659360', {}, { debug: false, autoConfig: true });
ReactPixel.pageView();

const tagManagerArgs = {
  gtmId: 'GTM-NJH4QQNT'
}

TagManager.initialize(tagManagerArgs)

const Home = () => (
  <HelmetProvider>
    <Helmet prioritizeSeoTags>
      <title>Utropix: Mejor Memoria y Concentración con Nootrópicos</title>
      <meta name='description' content="Potencia tu mente con nootrópicos naturales. Prueba los beneficios del hongo Melena de León." />
      <link rel="canonical" href="https://utropix.net" />
      <meta name='keywords' content='hongo melena de león, nootrópicos, nootrópicos naturales, 
      suplementos para la mente, aumentar rendimiento cognitivo' />
      { /* Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Utropix: Mejor Memoria y Concentración con Nootrópicos" />
      <meta property="og:description" content="Potencia tu mente con nootrópicos naturales. Prueba los beneficios del hongo Melena de León." />
      { /* End Facebook tags */}
    </Helmet>
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
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </HelmetProvider>
)

export default Home;