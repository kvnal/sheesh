import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import CommunityPostCard from "../Components/Cards/CommunityPostCard";

const CommunityIndividual = () => {

    const {id} = useParams();

    const [dataCommunityPost, setDataCommunityPost] = useState(null);
    const [dataCommunity, setDataCommunity] = useState(null);


    useEffect(() => {
        axios.get(`/api/community/${id}`).then(result=>{
            setDataCommunityPost(result.data)
        })
        
        axios.get(`/api/get/community/${id}`).then(result=>{
            setDataCommunity(result.data[0]);
        })


    }, []);

    if(id)
    return (
        <div className="w-full mt- px-3 bg-gray-50">
        { dataCommunity &&
        <>
              <div className="mb-4">
                  <div className="relative">
                    <div className="w-full h-24 bg-cover bg-center grayscale brightness-75"
                     style={{background:`url(${dataCommunity.bannerImage}) center` , backgroundSize:'cover'}}>
                        {/* bannv */}</div>

                    <div className="absolute rounded-full left-2 top-12 h-20 w-20 border-4 border-gray-100 shadow-sm"
                     style={{background:`url(${dataCommunity.dpImage}) center` , backgroundSize:'cover'}}>
                        {/* profile */}
                    </div>
                  </div>         
              </div>
              <div  className="py-4">
                  <div className="flex justify-between items-center" >
                    <h1 className="text-xl font-roboto font-medium text-black">{dataCommunity.name}</h1>
                    <h1 className="text-sm font-roboto font-medium text-sky-500">{dataCommunity.university}</h1>

                  </div>
                  <p className="text-sm font-roboto font-think text-gray-500">
                    {dataCommunity.description}
                      </p>
                      
                      <div className="flex justify-between flex-col py-2 mt-2">
                        <button className="bg-primary-red text-white font-roboto  px-1" >Follow</button>
                        <span className="font-roboto font-normal text-gray-500 text-xs text-right">{dataCommunity.memberCount}+ member</span>
                      </div>
                </div>  
                    </>
                    
                    }
                {
                    dataCommunityPost &&
                <div>
                    {dataCommunityPost.map(Element=>(
                        <div className="mb-3 shadow-sm">

                    <CommunityPostCard data={Element} />
                        </div>
                    ))}
                </div>}
              </div>
            
    );

}
 
export default CommunityIndividual;