import sheeshLogo from "../../assets/sheesh_logo.png"

const SplashScreen = () => {
    return ( 
        <div className="h-screen w-full bg-primary-red text-white flex justify-center items-center flex-col"> 
            <img src={sheeshLogo} alt="" className="mr-10"/>
            <span className="font-roboto font-medium text-2xl">Sheesh.</span>
        </div>
     );
}
 
export default SplashScreen;