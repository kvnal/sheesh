import { Link } from "react-router-dom";
import Swipe from "./Swipe";
import {AiOutlineSearch} from 'react-icons/ai'

const Amigos = () => {
  return ( 
    <div className='flex justify-center items-center flex-col'>
          
      <Swipe
      props={ [
        "https://eiko.ai/eiko/meero/-LtY2bRj3phbk3sApAqQVSpzEOg/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvMDdjY2U1M2YtMDk4NS00Y2QzLTllZjUtNTE2NGRkNzJiMTg2LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19",
         "https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19",
          "http://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg"
      ]}
      btn={true}
      />

      <Link to="/lookbook">
        <span className="z-50 absolute right-8 top-16 bg-primary-red p-4 text-white mt-4">
        <AiOutlineSearch/>
        </span>
      </Link>

      {/* {
        <div className="relative bottom-16 z-50 text-center font-semibold text-black">
        <span className="text-lg block">Ashish</span>
        <span>hello I'm ashish!!</span>
      </div>} */}
    </div>
   );
}
  
export default Amigos;