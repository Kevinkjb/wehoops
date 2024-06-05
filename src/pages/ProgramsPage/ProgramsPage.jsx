
import ProgramPageList from "../../components/ProgramComponents/ProgramPage/ProgramPageList"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import '../page-main-style.css'

const ProgramsPage = () => {
  return (
    <>
      <div className="sub-pages-header">
          <Navbar/>
          <div className='sub-hero'>
            <div className="sub-hero-container">
                <h1 className='sub-hero-title'>Programs</h1>
            </div>
          </div>
      </div>
      <div className="program-event-section">
        <ProgramPageList/>
      </div>
      <Footer/>
    </>
    
  )
}

export default ProgramsPage
