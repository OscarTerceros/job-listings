const Image = ({ logo, description }) => {
  return (
    <>
      <img src={ logo } alt={ description } className="logo" />
    </>
  )
}

export default Image