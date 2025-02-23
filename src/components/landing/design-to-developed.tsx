import blcokE from "@/assets/kiornos_assets/block_E.png";
import blockD from "@/assets/kiornos_assets/block_D.png";
import logo1 from "@/assets/kiornos_assets/logo.png";
import logo2 from "@/assets/kiornos_assets/logo2.png";
import BlockF from "@/assets/kiornos_assets/BlockF.png";
import Ellipes3 from "@/assets/kiornos_assets/Ellipse3.png";

const blocksImg = [
  { logo: logo1, block: blcokE },
  { logo: logo2, block: blockD },
];

export function DesignToDeveloped() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center p-12 py-28 justify-center gap-5 bg-zinc-100">
          <h2 className="text-5xl font-bold text-center pt-8 pb-24">
            From design to development,
            <br />
            we deliver end-to-end solutions
          </h2>

          <div className="my-5">
            <div className="flex flex-wrap justify-center gap-8">
              {blocksImg.map((blockData, idx) => (
                <div
                  key={idx}
                  className="relative bg-zinc-50 flex flex-col justify-center max-w-md px-11 py-8 text-center gap-y-6 rounded-xl"
                >
                  {/* First image (logo) */}
                  <img
                    src={blockData.logo}
                    alt={`Logo ${idx + 1}`}
                    className="mx-auto"
                  />

                  <h3 className="text-3xl font-bold">Design that Moves.</h3>
                  <p className="px-11 leading-tight">
                    Kiorons Studio blends creativity with precision to build
                    visual experiences that leave a lasting impression.
                  </p>

                  <div className="text-center pt-12">
                    <a
                      href=""
                      className="text-sm text-center text-zinc-800 border border-zinc-900 px-4 py-2 rounded-full"
                    >
                      Know More
                    </a>
                  </div>

                  <img
                    src={blockData.block}
                    alt={`Block ${idx + 1}`}
                    className="px-11 pt-16"
                  />

                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#C6C6C6] rounded-full flex justify-center align-middle items-center text-2xl text-zinc-100">
                    +
                  </div>
                </div>
              ))}

              <div className="flex justify-center items-center w-full">
                <div
                  className="relative bg-zinc-950 flex flex-col justify-center items-center max-w-[56%] px-36 py-16 text-center gap-y-6 rounded-xl text-zinc-50 w-full bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${Ellipes3})` }}
                >
                  {/* First image (logo) */}
                  <img src={BlockF} alt="Logo" className="mx-auto" />

                  <h3 className="text-2xl font-bold leading-none">
                    End-to-End Solutions <br /> Just Made for Your Brand.
                  </h3>
                  <p className="px-11 leading-tight">
                    One is your brand’s secret weapon—where strategy and growth
                    meet. We’re here to guide your brand with a tailor-made plan
                    that aligns with your vision, whether that’s through
                    positioning, brand strategy, or full-scale digital
                    marketing.
                  </p>

                  <div className="text-center pt-12">
                    <a
                      href=""
                      className="text-sm text-center text-white px-4 py-2 rounded-full border-0
          bg-gradient-to-r from-[#007AFF] via-[#FF0A5F] to-[#FF570A]"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
