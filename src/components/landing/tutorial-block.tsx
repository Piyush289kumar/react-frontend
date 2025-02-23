import blcokE from "@/assets/kiornos_assets/block_E.png";
import blockD from "@/assets/kiornos_assets/block_D.png";
import logo1 from "@/assets/kiornos_assets/logo.png";
import logo2 from "@/assets/kiornos_assets/logo2.png";
import BlockF from "@/assets/kiornos_assets/BlockF.png";
import Ellipes3 from "@/assets/kiornos_assets/Ellipse3.png";
import Rectangle62 from "@/assets/kiornos_assets/Rectangle62.png";

const blocksImg = [
  { logo: logo1, block: blcokE },
  { logo: logo2, block: blockD },
];

const specificationBlockContent = [
  {
    OneBlock: [
      {
        text: "Working with kiorons means you’re not just choosing a service—you’re choosing a partner.",
        textColor: "text-zinc-500",
      },
      {
        text: "We listen, we understand, and we build with you,  ",
        textColor: "text-zinc-50",
      },

      {
        text: "every step of the way.",
        textColor: "text-zinc-500",
      },
    ],

    TwoBlock: [
      {
        text: "we don’t just build brands — we craft experiences.",
        textColor: "text-zinc-400",
      },
      {
        text: "From the design to the technology behind it, we bring ideas to life ",
        textColor: "text-zinc-900",
      },

      {
        text: "in ways that are simple, impactful, and meaningful. ",
        textColor: "text-zinc-400",
      },

      {
        text: "Every interaction tells a story,",
        textColor: "text-zinc-900",
      },

      {
        text: "creating moments that resonate.",
        textColor: "text-zinc-400",
      },
    ],

    ThreeBlock: [
      {
        text: "Our work goes beyond what's seen. We shape the future by merging creative vision with cutting-edge technology. From branding to digital solutions, ",
        textColor: "text-zinc-400",
      },
      {
        text: "we’re already developing tomorrow’s tools ",
        textColor: "text-zinc-900",
      },

      {
        text: "— like our upcoming ",
        textColor: "text-zinc-400",
      },

      {
        text: "AI-powered CRM, ",
        textColor: "text-zinc-900",
      },

      {
        text: "designed to help businesses grow and connect in smarter ways.",
        textColor: "text-zinc-400",
      },

      {
        text: "creating moments that resonate.",
        textColor: "text-zinc-400",
      },
    ],

    FourBlock: [
      {
        text: "We believe in blending creativity with technology to unlock possibility. Every project at Kiorons is driven by passion and attention to detail. ",
        textColor: "text-zinc-400",
      },
      {
        text: "From the first pixel to the final line of code, we design with purpose ",
        textColor: "text-zinc-900",
      },

      {
        text: "— to elevate your brand and create lasting impact.",
        textColor: "text-zinc-400",
      },
    ],
  },
];

export function Tutorial() {
  return (
    <>
      <section>
        <div className="flex flex-col px-96 py-24 align-top justify-center gap-5 bg-zinc-950 text-zinc-50">
          <div className="grid grid-cols-2 w-full px-6">
            {/* Left Grid - Full Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-7xl font-bold pt-8 pb-8">
                Built for You,
                <br />
                Step by Step.
              </h2>

              {specificationBlockContent.map((block, idx) => (
                <div key={idx}>
                  {block.OneBlock.map((item, itemIdx) => (
                    <p
                      key={itemIdx}
                      className={`${item.textColor} text-xl font-medium`}
                    >
                      {item.text ?? "N/A"}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <img src={Rectangle62} alt={`Img Name`} className="" />
          </div>

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
