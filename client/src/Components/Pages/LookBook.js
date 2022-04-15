import { Link, useParams } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillChatSquareDotsFill} from 'react-icons/bs'
import {IoIosCall} from 'react-icons/io'
import {RiShareForwardFill} from 'react-icons/ri'

import LookBookCard from "../Components/Cards/LookBookCard";
import { useEffect, useState } from "react";

import axios from 'axios';

// const dataLook = [
//     {   dp:"https://hopkinsrp.org/wp-content/uploads/2019/03/IMG_9136-900x563.jpg",
//         name:"",
//         bio:"developer",
//     },
//     {   dp:"https://harris.uchicago.edu/files/gaviria-profile.jpg",
//         name:"",
//         bio:"Med. Student 💉",
//     },
//     {   dp:"http://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg",
//         name:"",
//         bio:"hello there!",
//     },
//     {   dp:"https://www.lse.ac.uk/finance/assets/images/student-profile-images/2018-and-earlier/Ambrose-Chui-Cropped-200x200.jpg",
//         name:"",
//         bio:"Peack ☮",
//     },
//     {   dp:"https://media.istockphoto.com/photos/female-college-student-on-campus-picture-id528879535?k=20&m=528879535&s=612x612&w=0&h=1oeMDUmcIN62tG6cWUz2TZ5qI29-gLxTYjAiF_2xVH0=",
//         name:"",
//         bio:"Sleeping 😪",
//     },
//     {   dp:"https://www.lse.ac.uk/finance/assets/images/student-profile-images/2018-and-earlier/Ambrose-Chui-Cropped-200x200.jpg",
//         name:"",
//         bio:"Tech geek!!",
//     },
// ]


const LookBook = () => {
    const {id} = useParams();

    const [dataLook, setDataLook] = useState(null);
    useEffect(() => {
        if(id){
            return axios.get(`api/student/${id}`).then(result=>{
                setDataLook(result.data)
            })
        }
        return axios.get('api/student').then(result=>{
            setDataLook(result.data);
        })
    }, []);

    if(id)
    return(
        <div className="my-2">
            <div className="mt-28 flex justify-center flex-col items-center">
             <div className="border-4 border-primary-red  w-32 h-32 rounded-full" style={{background:`url(http://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg) center` , backgroundSize: 'cover'}}>
                </div>
                <div className="mt-4 flex flex-col items-center">
                        <span className="text-2xl font-roboto font-medium text-gray-700">{id}</span>
                    <span className="mt-1 text-sm font-roboto font-medium text-gray-400 ">
                        B.com - 
                    <span className=" font-semibold"> 3rd year</span>
                     </span>

                    <span className="mt-2 text-md font-roboto font-medium text-gray-500">short bio about profile student!!</span>

                </div>
                    <div className=" w-full mt-6 font-roboto text-primary-red flex justify-center ">
                        <div className="flex flex-col items-center mr-8">
                            <span className=" font-bold text-2xl">234</span>
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
                        <button className=" w-full bg-primary-red py-1 text-white font-roboto">Add Friend</button>
                    </div>
            </div>
        </div>
    );
    
    

    return ( 
        <div className="mx-4 my-20">
        <div>
            <div>
                    <div className="absolute  right-5 pt-2">
                        <AiOutlineSearch size={20}/>
                    </div>
                <input className="h-8 border border-1 border-gray-300 bg-gray-200 w-full pl-2" placeholder="Search" type="text" />
            </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
            <h1 className="text-gray-800 font-roboto font-semibold text-2xl">Lookbook</h1>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 ">
            {dataLook && dataLook.map(Element=>(
                <Link to="/lookbook/Ashish">
                <div className="mb-6">
                <LookBookCard data={Element}/>
                </div>
                </Link>
            ))}
        </div>
     </div>
     );
}
 
export default LookBook;