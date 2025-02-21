import HomeHeroImg from '../../assets/kiornos_assets/HomeHeroImg.png';

function LandingHomePage() {
    return (
        <div className="">
            <div className="relative">
                {/* Move Image to the Top */}
                <img src={HomeHeroImg} alt="Hero Home Image" className="w-full" />

                {/* Blur Effect at the Bottom Blending into White */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-lg"></div>

                {/* Other Content Below the Image */}
                <div className="text-center text-zinc-950 -mt-52 flex flex-col justify- gap-y-5">
                    <h1 className="text-8xl font-bold">Create Different.</h1>
                    <p className="text-lg">We build brands and digital experiences that redefine industries.</p>

                    <button className="w-52 mx-auto px-4 py-2 mt-5 z-10 text-white font-semibold shadow-md rounded-full bg-gradient-to-r from-[#007AFF] to-[#A2CDFD] hover:opacity-90">
                        Discover more
                    </button>

                </div>
            </div>
        </div>
    )
}

export default LandingHomePage