import Rectangle71 from "@/assets/kiornos_assets/Rectangle71.png";
import Rectangle72 from "@/assets/kiornos_assets/Rectangle72.png";
import Rectangle73 from "@/assets/kiornos_assets/Rectangle73.png";
import Rectangle74 from "@/assets/kiornos_assets/Rectangle74.png";

const blocksImg = [Rectangle71, Rectangle72, Rectangle73, Rectangle74];

export function ShowcaseCards() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center px-12 justify-center gap-5 mt-32 mb-0">
          <h2 className="text-7xl font-bold">Innovate. Inspire. Transform.</h2>

          <div className="my-28">
            <div className="flex flex-wrap justify-center gap-8">
              {blocksImg.map((blockImg, idx) => (
                <div key={idx} className="relative">
                  <img src={blockImg} alt={`Rectangle${idx + 1}`} className="" />
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#C6C6C6] rounded-full flex justify-center align-middle items-center text-2xl text-zinc-100">
                    +
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-12">
              <a href="" className="text-sm text-center text-[#007AFF]">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
