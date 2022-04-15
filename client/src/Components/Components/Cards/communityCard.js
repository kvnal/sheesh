import { useState } from "react";
import { Link } from "react-router-dom";


const CommunityCard = ({data}) => {
    const [follow, setFollow] = useState(false);

    return ( 
        <div className="w-full bg-gray-50 shadow border-1">
          <Link to={`/community/${data.name}`}>
              <div className="mb-4">
                  <div className="relative">
                    <div className="w-full h-24 bg-cover bg-center grayscale brightness-75"
                     style={{background:`url(${data.bannerImage}) center` , backgroundSize:'cover'}}>
                        {/* bannv */}
                    </div>

                    <div className="absolute rounded-full left-2 top-12 h-20 w-20 border-4 border-gray-100 shadow-sm"
                     style={{background:`url(${data.dpImage}) center` , backgroundSize:'cover'}}>
                        {/* profile */}
                    </div>
                  </div>         
              </div>
            </Link>

              <div  className="p-4">
                  <div className="flex justify-between items-center" >
                    <h1 className="text-xl font-roboto font-medium text-black">{data.name}</h1>
                    <h1 className="text-sm font-roboto font-medium text-sky-500">{data.university}</h1>

                  </div>
                  <p className="text-sm font-roboto font-think text-gray-500">
                      {data.description}
                      </p>

                      <div className="flex justify-between flex-col py-2 mt-2">
                        {!follow && <button className="bg-primary-red text-white font-roboto  px-1" onClick={()=>setFollow(true)}>Follow</button>}
                        {follow && <button className="bg-sky-500 text-white font-roboto  px-1">Following</button>}
                        <span className="font-roboto font-normal text-gray-500 text-xs text-right">{data.memberCount}+ member</span>
                      </div>
                </div>  

        </div>
     );
}
 
export default CommunityCard;