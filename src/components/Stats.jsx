import { stats } from "../constants"
import styles from "../styles"


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div key={index} className={`flex flex-1 justify-space items-center flex-row m-3`}>

          <div className="flex justify-start items-center">
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>

          <div className={`${styles.flexCenter} flex-1`}>
            {stats.length - 1 !== index && <div className="border-2 h-full w-[20px] rotate-90 hidden md:flex ml-3" />}
          </div>
        </div>

      ))}
    </section>
  )
}

export default Stats