const Profile = () => {
    return ( 
        <div className="my-2">
            <div className="mt-28 flex justify-center flex-col items-center">
             <div className="border-4 border-primary-red  w-32 h-32 rounded-full" style={{background:`url(https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=100&q=80) center` , backgroundSize:'cover'}}>
                </div>
                <div className="mt-4 flex flex-col items-center">
                    <span className="text-2xl font-roboto font-medium text-gray-700">Ben Stokes</span>
                    <span className="mt-1 text-sm font-roboto font-medium text-gray-400 ">
                        B.Tech - 
                    <span className=" font-semibold"> 3rd year</span>
                     </span>

                    <span className="mt-2 text-md font-roboto font-medium text-gray-500">Hello, world! I'm Ben.</span>

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

                    <div className="w-11/12 mt-4">
                        <button className=" w-full bg-primary-red py-1 text-white font-roboto">Edit profile</button>
                    </div>
            </div>
        </div>
     );
}
 
export default Profile;