import block2_A from "@/assets/kiornos_assets/block2_A.png";
import block2_B from "@/assets/kiornos_assets/block2_B.png";
import block2_C from "@/assets/kiornos_assets/block2_C.png";
import Group51 from "@/assets/kiornos_assets/Group51.png";

const subDetails = [
  {
    text: "We think differently.",
    textColor: "text-zinc-900",
  },

  {
    text: "We design experiences that don’t just work—they inspire.",
    textColor: "text-zinc-500",
  },

  {
    text: "We believe every brand deserves something extraordinary.",
    textColor: "text-zinc-900",
  },

  {
    text: "It’s not about doing more; ",
    textColor: "text-zinc-500",
  },

  {
    text: "it’s about doing it better.",
    textColor: "text-zinc-900",
  },
];

const specificationBlockContent = [
  {
    OneBlock: [
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
export function SpecificationBlock() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center px-12 justify-center gap-5 my-48">
          <h2 className="text-7xl font-bold">
            We Don't Just Create
            <br />
            We Build Legacies.
          </h2>
          <p className="text-zinc-500 text-2xl font-semibold px-[28%]">
            {subDetails.map((content, idx) => (
              <span key={idx} className={content.textColor}>
                {content.text ?? "N/A"}
              </span>
            ))}
          </p>
        </div>

        <div className="flex mx-auto border-[1px] border-zinc-300">
          <div id="left" className="flex flex-col">
            <div className="p-16 border-r-[1px] border-b-[1px] border-zinc-300">
              {specificationBlockContent.map((block, idx) => (
                <div key={idx}>
                  {block.OneBlock.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className={`${item.textColor} text-2xl font-medium`}
                    >
                      {item.text ?? "N/A"}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div className="p-20 border-r-[1px] border-zinc-300">
              <div className="flex align-top justify-center py-16">
                <img src={block2_A} alt="Block A" className="" />
                <img src={block2_B} alt="Block B" className="-mx-16 -mt-6" />
                <img src={block2_C} alt="Block C" className="" />
              </div>
              {specificationBlockContent.map((block, idx) => (
                <div key={idx} className="py-">
                  {block.TwoBlock.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className={`${item.textColor} text-2xl font-medium`}
                    >
                      {item.text ?? "N/A"}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div id="right">
            <div className="p-20 border-b-[1px] border-zinc-300">
              <h3 className="text-4xl font-bold">
                Design. Development.
                <br />
                Always Evolving.
              </h3>
            </div>

            <div className="p-16 border-b-[1px] border-zinc-300">
              {specificationBlockContent.map((block, idx) => (
                <div key={idx}>
                  {block.ThreeBlock.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className={`${item.textColor} text-2xl font-medium`}
                    >
                      {item.text ?? "N/A"}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div
              className="p-12 border-b-[1px] border-zinc-300"
              style={{
                backgroundImage: `url(${Group51})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-[170px] text-[#007AFF] font-bold text-center leading-none">
                8
              </h1>
              <p className="text-zinc-900 text-center text-2xl">
                years of design & innovation
              </p>
            </div>

            <div className="p-16 h-full border-zinc-300">
              {specificationBlockContent.map((block, idx) => (
                <div key={idx}>
                  {block.FourBlock.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className={`${item.textColor} text-2xl font-medium`}
                    >
                      {item.text ?? "N/A"}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
