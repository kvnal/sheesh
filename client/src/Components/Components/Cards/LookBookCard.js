const LookBookCard = ({data}) => {
    return ( 
        <div className="flex justify-center flex-col bg-gray-100 p-2 shadow">
            <div  style={{background:`url(${data.dpImage}) center` , backgroundSize:'cover'}}
            className="w-24 h-20"
            >
            </div>

            <div className="flex flex-col">
                <h1 className="mt-2 text-md text-center font-roboto font-medium text-gray-800">{data.name}</h1>
                <h1 className="mb-1 text-xs text-center font-roboto font-normal text-gray-600">{data.bio}</h1>

                <div className="mt-2">
                    <button className="bg-primary-red w-full py-0.5 text-sm text-white font-roboto font-medium">Add</button>
                </div>
            </div>
        </div>
     );
}
 
export default LookBookCard;