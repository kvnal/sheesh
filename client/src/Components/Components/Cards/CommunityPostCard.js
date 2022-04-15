import {AiTwotoneLike} from 'react-icons/ai'
import {FaCommentAlt} from 'react-icons/fa'
import {RiShareForwardFill} from 'react-icons/ri'


const CommunityPostCard = ({data}) => {
    return ( 
        <div className="bg-gray-100 py-2">
            <div>
                <div className="pt-2 flex items-center">
                    <img className="rounded-full h-8 w-8" src={data.dpImage} alt="" />
                    <span className="ml-2 flex flex-col text-sm text-gray-800 font-roboto font-medium">
                        {data.user}
                    <span className=" text-xs text-sky-500 font-roboto font-bold">
                        Add 
                    </span>
                    </span>
                </div>

                <div>
                    {/* image */}
                    <div 
                    className="mt-2 aspect-video"
                     style={{background:`url(${data.image}) center` , backgroundSize:'cover'}}
                    >
                    </div>

                    <div className="flex flex-col items-start text-primary-red">
                        <div className='mt-2 flex  items-center'>
                            
                            <AiTwotoneLike size={24}/>
                            <FaCommentAlt size={20} className="ml-3"/>
                            <RiShareForwardFill size={24} className="ml-3"/>

                        </div>

                            
                            <span className='font-bold font-roboto'>{data.likes} likes</span>
                    </div>

                    {/* caption */}
                    <div className="mt-2">
                        <p className="text-md font-roboto text-gray-800 text-medium">{data.caption}</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default CommunityPostCard;