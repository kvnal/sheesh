import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import CommunityCard from "../Components/Cards/communityCard";
import axios from "axios";
import { useEffect, useState } from "react";


const Community = () => {
  const [dataCommunities, setDataCommunities] = useState(null);
  useEffect(() => {
    axios.get('/api/get/community').then(result=>{
      setDataCommunities(result.data);
    })
  }, []);
  
  if(dataCommunities)
  return (
    <div className="mx-4 my-20">
      <div>
        <div>
          <div className="absolute  right-5 pt-2">
            <AiOutlineSearch size={20} />
          </div>
          <input className="h-8 border border-1 border-gray-300 bg-gray-200 w-full pl-2" placeholder="Search" type="text" />
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h1 className="text-gray-800 font-roboto font-semibold text-2xl">Discover Communities</h1>
        <a href="http://localhost:4000/create/community">
          <IoMdAddCircleOutline size={24} className="text-primary-red" />
        </a>
      </div>

      <div className="mt-8">
        {dataCommunities.map(Element => (
          <div className="mb-6">
              <CommunityCard data={Element} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Community;