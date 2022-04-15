import { Link, useParams } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillChatSquareDotsFill} from 'react-icons/bs'
import {IoIosCall} from 'react-icons/io'
import {RiShareForwardFill} from 'react-icons/ri'

import LookBookCard from "../Components/Cards/LookBookCard";
import { useEffect, useState } from "react";

import axios from 'axios';

const LookBookStudent = () => {
    const {id} = useParams();
    const [follow, setFollow] = useState(false);


    const [dataLook, setDataLook] = useState(null);
    console.log(id);
    useEffect(() => {
        async function fetch(){  axios.get(`/api/student/${id}`).then(result=>{
            setDataLook(result.data[0])
            console.log(result);
        })
    }
        if(id){
        fetch();
    }

    }, []);

    if(id && dataLook)
    return(
        <div className="my-2">
            <div className="mt-28 flex justify-center flex-col items-center">
             <div className="border-4 border-primary-red  w-32 h-32 rounded-full" style={{background:`url(${dataLook.dpImage}) center` , backgroundSize: 'cover'}}>
                </div>
                <div className="mt-4 flex flex-col items-center">
                        <span className="text-2xl font-roboto font-medium text-gray-700">{dataLook.name}</span>
                    <span className="mt-1 text-sm font-roboto font-medium text-gray-400 ">
                        {dataLook.degree} 
                    <span className=" font-semibold"> 3rd Year</span>
                     </span>

                    <span className="mt-2 text-md font-roboto font-medium text-gray-500">{dataLook.bio}</span>

                </div>
                    <div className=" w-full mt-6 font-roboto text-primary-red flex justify-center ">
                        <div className="flex flex-col items-center mr-8">
                            <span className=" font-bold text-2xl">{dataLook.connectionCounts}</span>
                            <span className="font-medium text-md">Amigos</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className=" font-bold text-2xl">12</span>
                            <span className="font-medium text-md">Community</span>
                        </div>
                    </div>
                    
                    <div className=" w-full mt-6 mb-4 font-roboto text-gray-800 flex justify-center items-center ">
                        <div className="flex flex-col items-center mr-8">
                        <IoIosCall size={32}/>
                        </div>
                        <div className="flex flex-col items-center mr-8">
                            <Link to="/chat/Ashish">
                            <BsFillChatSquareDotsFill size={26}/>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center ">
                        <RiShareForwardFill size={32}/>
                        </div>
                    </div>

                    
                    <div className="w-11/12 mt-4">
                        {!follow && <button className=" w-full bg-primary-red py-1 text-white font-roboto" onClick={()=>setFollow(true)}>Add Friend</button>}
                        {follow && <button className=" w-full  border-2 border-primary-red py-1 box-border text-primary-red font-roboto">Add Friend</button>}
                    </div>
            </div>
        </div>
    );
}
 
export default LookBookStudent;