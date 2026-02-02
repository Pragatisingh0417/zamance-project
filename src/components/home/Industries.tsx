import industriesBg from "../../assets/bg/industries.jpg";


const industries = [
  {
    name: "Finance & Banking",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="#fff" d="M8.692 12.266V6.692h1.616v5.574l-.808-.824zm4.347 2.23V2.692h1.615v10.189zM4.307 16.64v-5.947h1.615v4.331zm-.116 3.911l5.297-5.296l3.55 3.05l6.753-6.754H17.5v-1h4v4h-1v-2.292l-7.438 7.438l-3.55-3.05l-3.904 3.904z"/></svg>
    ),
  },
  {
    name: "Healthcare & Life Sciences",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.6"><path d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15"/><path d="m18 16l.858-.858a.48.48 0 0 0 .142-.343v0a.49.49 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15"/><path d="m6 16l-.858-.858A.5.5 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20m4.167-8h-3.334V9.667H8V6.333h2.333V4h3.334v2.333H16v3.334h-2.333z"/></g></svg>
    ),
  },
  {
    name: "Manufacturing & Industrial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="#fff" d="M3 21V10.648l5-2.129v1.962l5-2V11h8v10zm1-1h16v-8h-8V9.95l-5 2V10l-3 1.325zm7.23-2.461h1.54V14.46h-1.54zm-4 0h1.54V14.46H7.23zm8 0h1.54V14.46h-1.54zM21 11h-3.116l1-7.23h1.231zM4 20h16z"/></svg>
    ),
  },
  {
    name: "Energy & Utilities",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 48 48"><path fill="none" stroke="#eaeaea" stroke-linecap="round" stroke-linejoin="round" d="M26.92 38.382h10.218m-5.108-5.109V43.49m-19.692.01L37.14 18.698H25.76L36.903 4.5H24.33c-1.25 0-2.405.667-3.03 1.75L10.86 24.333h8.94z" stroke-width="1"/></svg>
    ),
  },
  {
    name: "Retail & Logistics",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="#fff" d="M7.5 19q-1.038 0-1.77-.73T5 16.5H3.379q-.213 0-.357-.143q-.143-.143-.143-.357t.143-.357t.357-.143h1.877q.271-.667.875-1.084Q6.735 14 7.5 14t1.37.416q.603.417.874 1.084h4.618L16.558 6H8.212q-.214 0-.357-.143T7.71 5.5t.144-.357T8.21 5h8.578q.384 0 .626.308q.243.308.156.686L16.998 8.5h1.271q.379 0 .727.174t.566.472l1.797 2.398q.218.292.283.609q.066.316.01.664l-.598 3.037q-.056.292-.283.469t-.519.177h-.483q0 1.039-.73 1.77t-1.77.73t-1.769-.73t-.73-1.77H10q0 1.039-.73 1.77T7.5 19m8.387-5.75h4.651l.177-.89l-2.138-2.86h-1.818zm.67-7.25l-2.195 9.5l.242-1.002zM4.25 10.02H3.123q-.242 0-.36-.206q-.119-.205.018-.416l2.058-3.306q.086-.13.23-.09q.143.04.143.202V8.25h1.127q.242 0 .36.205t-.018.416l-2.058 3.287q-.086.13-.23.1t-.143-.192zM7.5 18q.617 0 1.059-.441Q9 17.117 9 16.5t-.441-1.059T7.5 15t-1.059.441Q6 15.883 6 16.5t.441 1.059Q6.883 18 7.5 18m9.77 0q.617 0 1.058-.441q.441-.442.441-1.059t-.441-1.059T17.269 15t-1.058.441q-.442.442-.442 1.059t.441 1.059q.442.441 1.06.441"/></svg>
    ),
  },
  {
    name: "Travel, Tourism & Leisure",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="#fff" d="M11.564 10.38L5.16 7.662q-.408-.159-.478-.58t.231-.721l.246-.266q.143-.142.325-.194t.385-.021l8.712 1.504l3.138-3.145q.421-.42 1.018-.42t1.019.42q.421.421.421 1.019t-.421 1.018L16.617 9.42l1.499 8.706q.03.204-.019.389q-.049.184-.191.327l-.265.24q-.302.302-.725.235q-.424-.068-.583-.475l-2.714-6.424l-3.069 3.064l.53 3.119q.032.154-.005.295q-.036.142-.154.259l-.271.252q-.235.235-.536.179q-.3-.056-.455-.333L7.95 16.05l-3.202-1.71q-.277-.153-.333-.454t.18-.536l.251-.271q.117-.118.259-.164q.141-.046.295-.015l3.113.544z" stroke-width="0.2" stroke="#fff"/></svg>
    ),
  },
  {
    name: "Technology & SaaS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="#fff" d="M17.300 7.501H7.5v10.003h10.003z" stroke-width="0.0" stroke="#fff"/><path fill="#fff" d="M21.505 5.5v-2h-2v-2h-2.001v2h-2v-2h-2.001v2h-2v-2H9.501v2h-2v-2H5.5v2h-2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h2v2.001h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v-2h2.001v-2.001h-2v-2h2v-2.001h-2v-2h2V9.501h-2v-2h2V5.5zm-2 14.004H5.5V5.501h14.003z" stroke-width="0.1" stroke="#fff"/></svg>
    ),
  },
];

export default function Industries() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed "
       style={{ backgroundImage: `url(${industriesBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-14 leading-snug text-center md:leading-tight">
          Industries We Serve
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className="
                group relative rounded-2xl
                border border-white/10
                bg-white/10 backdrop-blur-md
                p-8 text-center
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:bg-white/15
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
              "
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div
                className="
                  mx-auto mb-5 flex p-1 h-16 w-16 items-center justify-center
                  rounded-xl bg-white/10
                  transition-all duration-500
                  group-hover:scale-110 group-hover:bg-white/20
                "
              >
                {industry.icon}
              </div>

              {/* Title */}
              <p className="text-base font-medium tracking-wide text-white/90 group-hover:text-white">
                {industry.name}
              </p>

              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-teal-500/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
