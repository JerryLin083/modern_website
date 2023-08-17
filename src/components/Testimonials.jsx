import styles from "../styles"
import { feedback } from "../constants"
import { quotes } from "../assets"

const FeedbackCard = ({ index, content, name, title, img }) => {
  return (
    <div key={index} className="feedback-card flex flex-col w-[370px] rounded-[20px] px-10 py-12 md:mr-10 sm:mr-5 mr-0 my-5">
      <img 
        src={quotes} 
        alt="quotes"  
        className="w-[42px] h-[27px] object-contain"  
      />
      <p className="text-[18px] text-white font-normal font-poppins leading-[32px] my-10">
        {content}
      </p>
      <div className={`flex flex-row`}>
        <img
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins text-white text-[20px] leading-[32px] font-semibold">
            {name}
          </h4>
          <p className="text-dimWhite font-normal font-poppins text-[16px] leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section id="clients" className={`w-full ${styles.flexCenter} flex-col ${styles.paddingY} relative`}>
      <div className={`w-full flex flex-col md:flex-row md:justify-center items-center sm:mb-16 mb-6 relative z-[1]`}>
        <h2 className={`${styles.heading2}`}>
          What people are
          <br className="hidden sm:block" />
          saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-wrap sm:justify-start justify-center feedback-container mt-10 relative z-[1]">
        {feedback.map((fb, index) => (
          <FeedbackCard key={fb.id} index={index} {...fb} />
        ))}
      </div>

      <div className="absolute z-[0] top-[0px] -right-1/2 w-[60%] h-[60%] rounded-full blue__gradient" />
    </section>
  )
}

export default Testimonials