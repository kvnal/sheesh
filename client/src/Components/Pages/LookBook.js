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
    const [dataLook, setDataLook] = useState(null);
    useEffect(() => {
        axios.get('/api/student').then(result=>{
            setDataLook(result.data);
        })
    }, []);

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
                <Link to={`/lookbook/${Element.email}`}>
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