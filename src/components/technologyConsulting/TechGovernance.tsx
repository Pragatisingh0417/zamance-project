export function TechGovernance() {

  const governance = [
    {
      title: "Architecture Governance",
      desc: "Structured oversight ensuring every system aligns with long-term scalability and enterprise resilience.",
    },
    {
      title: "Security & Compliance",
      desc: "Embedded regulatory controls and security frameworks aligned with data protection standards.",
    },
    {
      title: "Risk Governance",
      desc: "Proactive identification of vendor and technical dependencies to reduce operational risk.",
    },
    {
      title: "Delivery Accountability",
      desc: "Clear ownership models and milestone governance ensuring measurable execution.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-900 to-teal-800 py-20 text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Governance Roadmap Elements
          </h2>

          <p className="mt-4 text-white/70">
            Key governance elements that support secure and structured
            technology execution.
          </p>

        </div>


        {/* ---------------- */}
        {/* MOBILE VERSION */}
        {/* ---------------- */}

        <div className="md:hidden relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[4px]
          bg-gradient-to-b from-blue-500 via-teal-400 to-green-500
          rounded-full"></div>


          <div className="space-y-10">

            {governance.map((item,i)=>(

              <div key={i} className="flex gap-5">

                {/* Hexagon */}
                <div className="relative z-10">

                  <div className="
                  w-12 h-12
                  bg-gradient-to-br
                  from-blue-500
                  to-green-500
                  [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
                  flex
                  items-center
                  justify-center
                  font-bold
                  ">
                    {i+1}
                  </div>

                </div>


                {/* Text */}
                <div className="bg-white text-black p-4 rounded-xl shadow-lg">

                  <h3 className="font-semibold text-sm">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs mt-1">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>



        {/* ---------------- */}
        {/* DESKTOP VERSION */}
        {/* ---------------- */}

        <div className="hidden md:block relative h-[520px] mt-10">

          <svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 420 520"
            fill="none"
          >

            <path
              d="
              M20 20
              C 280 40, 280 140, 60 200
              C 300 260, 300 360, 40 480
              "
              stroke="url(#grad)"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">

                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="50%" stopColor="#14B8A6"/>
                <stop offset="100%" stopColor="#22C55E"/>

              </linearGradient>
            </defs>

          </svg>


          {governance.map((item,i)=>{

            const iconPos = [
              "top-[40px] left-[60px]",
              "top-[160px] left-[230px]",
              "top-[280px] left-[80px]",
              "top-[400px] left-[230px]",
            ];

            const labelPos = [
              "top-[40px] left-[130px]",
              "top-[160px] left-[20px]",
              "top-[280px] left-[150px]",
              "top-[400px] left-[20px]",
            ];

            const descPos = [
              "top-[40px] right-[0px]",
              "top-[160px] right-[0px]",
              "top-[280px] right-[0px]",
              "top-[400px] right-[0px]",
            ];

            return(

              <div key={i}>

                {/* Hexagon Icon */}
                <div className={`absolute ${iconPos[i]}`}>

                  <div className="
                  w-14 h-14
                  bg-gradient-to-br
                  from-blue-500
                  to-green-500
                  [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]
                  flex
                  items-center
                  justify-center
                  font-bold
                  shadow-xl
                  ">
                    {i+1}
                  </div>

                </div>


                {/* Title */}
                <div className={`absolute ${labelPos[i]}
                bg-white text-black px-5 py-3 rounded-xl shadow-lg text-sm font-semibold`}>
                  {item.title}
                </div>


                {/* Description */}
                <div className={`absolute ${descPos[i]}
                w-[250px] text-white/70 text-sm`}>
                  {item.desc}
                </div>

              </div>

            );

          })}

        </div>


      </div>

    </section>
  );
}