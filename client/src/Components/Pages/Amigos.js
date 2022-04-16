import { Link } from "react-router-dom";
import Swipe from "./Swipe";
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios'
import { useEffect, useState } from "react";

const Amigos = () => {


  const [storiesData, setstoriesData] = useState(null);

  useEffect(() => {
    /*
    {
            img:"https://eiko.ai/eiko/meero/-LtY2bRj3phbk3sApAqQVSpzEOg/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvMDdjY2U1M2YtMDk4NS00Y2QzLTllZjUtNTE2NGRkNzJiMTg2LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19",
            name:"hello" ,
            bio:"alo",
            degreeText : "btech - 3rd year"
          }
    */

    axios.get("api/student").then(result => {
      setstoriesData(result.data)
    });
  }, []);

  if(storiesData)
  return (
    <div className='flex justify-center items-center flex-col'>

      {/* cardsData={[
        {
          img:"https://eiko.ai/eiko/meero/-LtY2bRj3phbk3sApAqQVSpzEOg/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvMDdjY2U1M2YtMDk4NS00Y2QzLTllZjUtNTE2NGRkNzJiMTg2LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19",
          name:"hello"
          
      },
        "https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19",
        "http://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg"
      ]} */}
      <Swipe
        cardsData={storiesData}
        btn={true}
      />

      <Link to="/lookbook">
        <span className="z-50 absolute right-8 top-16 bg-primary-red p-4 text-white mt-4">
          <AiOutlineSearch />
        </span>
      </Link>


    </div>
  );
};

export default Amigos;