import { Link, useParams } from "react-router-dom";

import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdAddCircleOutline} from 'react-icons/io'
import CommunityCard from "../Components/Cards/communityCard";
import CommunityPostCard from "../Components/Cards/CommunityPostCard";

const dataCommunityPostCard = [
    {
        dpImage : " https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann-414x414.jpeg",
        image : "https://s3-eu-west-1.amazonaws.com/racingnews-v2-prod/2022/Leclerc/_1125x633_crop_center-center_85_none/SI202203200222_hires_jpeg_24bit_rgb.jpg?v=1647794590",
        likes : "402",
        caption : "What a race!! it was a close call",
        user:"Samarth"
    },
    {
        dpImage : " https://www.baknoprofiles.com/index_files/beforeimage_354.png",
        caption : "One of the fastest pitstops of F1",
        likes : "255",
        image: "https://cdn-wp.thesportsrush.com/2020/07/Untitled-design-33.jpg",
        user:"Anjalina"
    },
    {
        dpImage : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        caption : "there was a major accident today",
        likes : "234",
        image: "https://wallpaperaccess.com/full/6725718.jpg",
        user:"Ashish"
    },
    {
        dpImage : "https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png",
        caption : "Finally ferrari making a comeback",
        likes : "543",
        image: "https://static.wikia.nocookie.net/f1wikia/images/a/a3/PodiumCeremony.png/revision/latest?cb=20121228205246",
        user:"Rohan"
    },
]

const dataCommunities =[
    {
      bannerImage : "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/alfa_4.jpg",
      dpImage:"https://www.formula1.com/content/dam/fom-website/manual/Misc/2021manual/2021FranceManualAdds/Friday/GettyImages-1233520532.jpg",
      description:"petrol Heads | F1 | checkered flag 🏁",
      name:"F1 Fans",
      memberCount : "2K",
      university : "VIT C",
    },
    {
      bannerImage : "https://techcrunch.com/wp-content/uploads/2015/07/hackathon.png",
      dpImage:"https://avatars.githubusercontent.com/u/66815960?s=80",
      description:"Let's Hack tonight @ h.acknight",
      name:"Hack Club",
      memberCount : "200",
      university : "VIT C",
    },
    {
      bannerImage : "https://wallpaperaccess.com/full/538948.png",
      dpImage:"https://image.winudf.com/v2/image1/Y29tLmtpcml0by5hcHAud2FsbHBhcGVyLml0YWNoaV9zY3JlZW5fMF8xNjIxMTc5ODYzXzAxNg/screen-0.jpg?fakeurl=1&type=.webp",
      description:"Daily Edits & Recommendations",
      name:"Anime Geeks",
      memberCount : "1.5k",
      university : "VIT C",
    },
    {
      bannerImage : "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg",
      dpImage:"https://i.kym-cdn.com/entries/icons/mobile/000/032/379/Screen_Shot_2020-01-09_at_2.22.56_PM.jpg",
      description:"Eat Sleep Code Repeat",
      name:"Coding Nerds",
      memberCount : "4k",
      university : "VIT C",
    }
  ]

const Community = () => {

    const {id} = useParams();
    if(id)
    return (
        <div className="w-full mt- px-3 bg-gray-50">
              <div className="mb-4">
                  <div className="relative">
                    <div className="w-full h-24 bg-cover bg-center grayscale brightness-75"
                     style={{background:`url(https://cdn.wallpapersafari.com/2/79/mXQSHz.jpg) center` , backgroundSize:'cover'}}>
                        {/* bannv */}</div>

                    <div className="absolute rounded-full left-2 top-12 h-20 w-20 border-4 border-gray-100 shadow-sm"
                     style={{background:`url(https://cdn-wp.thesportsrush.com/2020/06/Untitled-design-2020-06-22T220153.298.jpg) center` , backgroundSize:'cover'}}>
                        {/* profile */}
                    </div>
                  </div>         
              </div>
              <div  className="py-4">
                  <div className="flex justify-between items-center" >
                    <h1 className="text-xl font-roboto font-medium text-black">F1 Fans</h1>
                    <h1 className="text-sm font-roboto font-medium text-sky-500">VIT C</h1>

                  </div>
                  <p className="text-sm font-roboto font-think text-gray-500">
                        petrol Heads | F1 | checkered flag 🏁
                      </p>
                      
                      <div className="flex justify-between flex-col py-2 mt-2">
                        <button className="bg-primary-red text-white font-roboto  px-1" >Follow</button>
                        <span className="font-roboto font-normal text-gray-500 text-xs text-right">160+ member</span>
                      </div>
                </div>  

                {/* post */}
                <div>
                    {dataCommunityPostCard.map(Element=>(
                        <div className="mb-3 shadow-sm">

                    <CommunityPostCard data={Element} />
                        </div>
                    ))}
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
            <h1 className="text-gray-800 font-roboto font-semibold text-2xl">Discover Communities</h1>
            <a href="http://localhost:4000/create/community">
            <IoMdAddCircleOutline size={24} className="text-primary-red"/>
            </a>
        </div>

        <div className="mt-8">
            {dataCommunities.map(Element=>(
                <div className="mb-6">
                <Link to="/community/f1">
                <CommunityCard data={Element}/>
                </Link>
                </div>
            ))}
        </div>
     </div>
     );
}

// function SearchBar(props) {
//     const filterText = props.filterText;
//     const inStockOnly = props.inStockOnly;
    
//     return (
//       <form>
//         <input 
//           type="text" 
//           placeholder="Search..." 
//           value={filterText}
//           onChange={e => props.onFilterTextChange(e.target.value)} 
//           className="shadow appearance-none border-none rounded w-full py-2 px-3 mb-4 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//         <p>
//           <input 
//             type="checkbox" 
//             checked={inStockOnly} 
//             onChange={e => props.onInStockChange(e.target.checked)}
//             className="mr-2 leading-tight"
//           />
//           <span class="text-sm">
//             Only show products in stock
//           </span>
//         </p>
//       </form>
//     );

 
export default Community;