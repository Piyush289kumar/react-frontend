import Vector from '../assets/kiornos_assets/Vector.svg';
import speechBubbles from '../assets/kiornos_assets/speechBubbles.png';

const tabs = [
    "Studio",
    "Tech",
    "One",
    "About", "Case", "Product", "Learn"
]

export function LandingNavBar() {
    return (
        <div className="flex gap-x-12 pt-6 pb-2 justify-center items-center w-[90%] mx-auto">

            <div className='rounded-full p-3' style={{ background: "#F5F5F5" }}>
                <img src={Vector} alt="Vector Icon" className="w-4 h-4" />
            </div>
            <div className='flex gap-x-12 px-24 py-3 rounded-full font-light' style={{ background: "#F5F5F5" }}>
                {tabs.map((tab, index) => (
                    <a key={index} href={`#${tab}`} className="mr-4 hover:underline">
                        {tab}
                    </a>
                ))}
            </div>
            <div className='rounded-full p-3' style={{ background: "#007AFF" }}>
                <img src={speechBubbles} alt="speechBubbles" className="w-4 h-4" />
            </div>
        </div>

    );
}
