const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-10 text-center text-header-5 text-black-400 md:text-left lg:mb-16 xl:text-header-3">
      {title}
    </h2>
  )
}

export default Title
