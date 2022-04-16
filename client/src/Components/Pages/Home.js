
import { MdAddBox } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Story from '../Components/Cards/Story';
import axios from 'axios';
import { useEffect, useState } from 'react';


const fileUploadPORT = "4000";

const Home = () => {
    const [storiesData, setStoriesData] = useState(null);

    useEffect(() => {
        /*   {
        url: 'https://static.toiimg.com/thumb/msid-46565281,width-800,height-600,resizemode-75/46565281.jpg', seeMore: <span>hello world</span>,
        header: { heading: 'Jimmy Mishra', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' }
    }*/
        axios.get('/api/story').then(result => {
            console.log(result.data);
            var stories = [];
            result.data.forEach(element => {

                const story = {
                    url: element.url,
                    header :{
                        heading : element.profileName,
                        subheading : element.caption +" - "+ element.subheading,
                        profileImage: element.profileImage,
                    }
                };

                stories.push(story);
            });
            return stories;
        }).then(stories => setStoriesData(stories));
    }, []);
    const redirect = () => {
        return window.location.href = "http://localhost:" + fileUploadPORT;
    };
    if (storiesData)
        return (
            <div>
                <div className='px-4 w-full flex justify-between items-center  hover:cursor-pointer'>

                    {/* <FileUploader className="" /> */}
                    {/* <FaFileUpload onClick={redirect} className="text-primary-red" size={32}>
                    Upload a file
                </FaFileUpload> */}
                    <MdAddBox onClick={redirect} className="text-primary-red" size={32}>
                        Upload a file
                    </MdAddBox>

                    <Link to="/profile">
                        <FaUserAlt className="text-primary-red" size={24}>
                        </FaUserAlt>
                    </Link>
                </div>


                {/* <div className='scale-90 absolute top-16 story-css'>  */}
                <div className='story-styles' >
                    <Story stories={storiesData} />
                </div>
                {/* <div className='mt-6 flex justify-center items-center'>
                <Swipe props={ [
      "https://i.pinimg.com/236x/06/75/9d/06759dc8472db17acb9414eec9991460.jpg",
       "https://pm1.narvii.com/6737/47e81761302ce90b1138fea05c90b32a1f7c5b98v2_hq.jpg",
        "https://i.pinimg.com/736x/ec/63/47/ec63478a8128cbce816e3ebf281dbda7.jpg"
    ]} btn={false} />
            </div> */}
            </div>

        );
};

export default Home;