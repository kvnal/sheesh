import { useState } from "react";
import { useParams } from "react-router-dom";
import {FaArrowAltCircleRight} from 'react-icons/fa'

const chat1 =[
    "Hi jimmy!",
    "👋👋👋",
    "How r you?"
]
const Chat = () => {
    const {id} = useParams();
    const [chats, setChats] = useState(null);

    const append = (message)=>{
        return setChats([...chats,{message}])
    }
    return ( 
        <div className="mx-4 mt-20  overflow-hidden">
            <div className=" flex justify-center  items-center  ">
             <div className="w-10 h-10 rounded-full" style={{background:`url(http://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg) center` , backgroundSize:'cover'}}>
             </div>
            <div className="ml-2 font-roboto font-semibold text-2xl">
             {id}
            </div>
            </div>

            <hr className="border-t-2 border-gray-300 mt-8 mb-2 "/>
            <div className="flex flex-col mt-8 items-end">
            {chat1.map(Element=>(
                <div className="p-2 w-fit border-r-4 border-primary-red text-right text-black bg-gray-200 font-roboto font-normal text-md mb-2 ">
                    {Element}
                </div>
            ))}
            </div>
            
            <div className="fixed bottom-0 mb-20 w-11/12 mr-10 flex justify-center items-center">
                <input type="text" className="bg-gray-300 w-full border-2  py-2 px-1 mr-6" />
                <FaArrowAltCircleRight className="text-primary-red" size={40}>
                </FaArrowAltCircleRight>
            </div>

        </div>
     );
}
 
export default Chat;