import styles from "../styles"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const FooterLinkCard = ({ title, links }) => {
  return (
    <div className="flex-1 flex flex-col justify-start ss:my-0 my-4 min-w-[150px]">
      <h4 className="font-poppins text-white font-medium text-[18px] leading-[27px]">{title}</h4>
      <ul className="list-none mt-4">
        {links.map((item, index) => (
          <li key={item.name} className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mt-4">
            <a
              onClick={() => window.open(item.link, "_blank")}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

    </div>
  )
}

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} text-[18px] max-w-[310px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-center flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link, index) => (
            <FooterLinkCard key={index} {...link} />
          )
          )}
        </div>
      </div>

      <div className="py-[20px] w-full flex flex-col sm:flex-row justify-center items-center sm:justify-between border-t-[1px] border-[#3F3E45]">
        <p className="font-poppins font-normal text-center leading-[27px] text-[18px] text-dimWhite">
          Copyright @ 2021 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row justify-center items-center gap-6 sm:mt-0 mt-6">
          {socialMedia.map(media => (
            <a
              onClick={() => window.open(media.link, "_blank")}
            >
              <img
                key={media.id}
                src={media.icon}
                alt={media.id}
                className="w-[21px] h-[21px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer