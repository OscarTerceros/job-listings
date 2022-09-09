import Header from "../organisms/Header/Header"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
        { children }  
      {/* <Footer/> */}
    </>
  )
}

export default DefaultLayout