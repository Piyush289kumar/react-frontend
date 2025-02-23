import Rectangle62 from "@/assets/kiornos_assets/Rectangle62.png";
import GlobalNetwork from "@/assets/kiornos_assets/global-network.png";
import Technology from "@/assets/kiornos_assets/technology.png";
import Curve from "@/assets/kiornos_assets/curve.png";
import Opposite from "@/assets/kiornos_assets/opposite.png";

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

    features: [
      {
        title: "Discovery",
        img: GlobalNetwork,
        description: [
          {
            text: "We start by listening. ",
            textColor: "text-zinc-500",
          },
          {
            text: "We want to understand your goals, your challenges, and your vision ",
            textColor: "text-zinc-50",
          },
          {
            text: "for the future.",
            textColor: "text-zinc-500",
          },
        ],
      },

      {
        title: "Design & Strategy",
        img: Curve,
        description: [
          {
            text: "This is where ideas take shape. ",
            textColor: "text-zinc-50",
          },
          {
            text: "Our team designs innovative solutions tailored to your brand’s unique identity.",
            textColor: "text-zinc-500",
          },
        ],
      },

      {
        title: "Development & Execution",
        img: Technology,
        description: [
          {
            text: "With a focus on precision ",
            textColor: "text-zinc-500",
          },
          {
            text: "we bring your project to life, ensuring every detail ",
            textColor: "text-zinc-50",
          },
          {
            text: "is executed flawlessly.",
            textColor: "text-zinc-500",
          },
        ],
      },

      {
        title: "Launch & Beyond",
        img: Opposite,
        description: [
          {
            text: "We don’t stop at launch. ",
            textColor: "text-zinc-500",
          },
          {
            text: "We’re here to ensure long-term success, ",
            textColor: "text-zinc-50",
          },
          {
            text: "continuing to optimize and support your brand.",
            textColor: "text-zinc-500",
          },
        ],
      },
    ],
  },
];

export function Tutorial() {
  return (
    <>
      <section>
        <div className="flex flex-col pl-96 pr-20 py-24 align-top justify-center gap-5 bg-zinc-950 text-zinc-50">
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
            <div className="flex flex-wrap gap-x-24 gap-y-0 py-24">
              {specificationBlockContent.map((block, blockIdx) =>
                block.features.map((specificationBlock, idx) => (
                  <div
                    key={`${blockIdx}-${idx}`}
                    className="relative bg-none flex flex-col max-w-md py-8 gap-y-6 rounded-xl"
                  >
                    {/* First image (logo) */}
                    <img
                      src={specificationBlock.img}
                      alt={`Logo ${idx + 1}`}
                      className="mr-auto "
                    />

                    <h3 className="text-4xl font-bold">
                      {specificationBlock.title}
                    </h3>
                    <p className="text-lg leading-tight font-bold">
                      {specificationBlock.description.map((desc, descIdx) => (
                        <span key={descIdx} className={`${desc.textColor}`}>
                          {desc.text}{" "}
                        </span>
                      ))}
                    </p>
                  </div>
                ))
              )}

              <div className="text-center pt-12 w-full -mx-[12%]">
                <a href="" className="text-sm text-center text-[#007AFF]">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
