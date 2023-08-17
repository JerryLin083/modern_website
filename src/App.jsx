import "./index.css"

import styles from "./styles";
import {
  Navbar, Hero, Stats, Business, Billing, CardDeal,
  Testimonials, Clients, CTA, Footer,
} from "./components"

const App = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden`}>
      <div className={`${styles.paddingX} fixed  w-full bg-zinc-900 z-[10] shadow-xl `}>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

      </div>

      <div className={`bg-primary ${styles.flexStart} mt-[80px]`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App