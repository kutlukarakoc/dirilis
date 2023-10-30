interface Paragraph {
  children: string
  className: string
}

const Paragraph: React.FC<Paragraph> = ({ children, className }) => {
  return (
    <p
      className={`inline-block indent-4 text-paragraph-mobile text-black-500 sm:text-white-50 md:text-paragraph-tablet xl:indent-8 2xl:text-paragraph ${className}`}
    >
      {children}
    </p>
  )
}

export default Paragraph
