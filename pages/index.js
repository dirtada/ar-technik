import Head from "next/head";
import Image from "next/image";
import { 
  PhoneIcon, 
  MapPinIcon, 
  CheckBadgeIcon, 
  WrenchIcon, 
  ExclamationTriangleIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  CurrencyDollarIcon,
  HandThumbUpIcon
} from "@heroicons/react/24/solid";

export default function ArTechnik() {
  const sluzby = [
    { jmeno: "Servis a seřízení oken", ikona: WrenchIcon, popis: "Prevence před zadrháváním a profukováním." },
    { jmeno: "Oprava kování", ikona: ExclamationTriangleIcon, popis: "Výměna nefunkčních částí a mechanizmů." },
    { jmeno: "Výměna těsnění", ikona: ShieldCheckIcon, popis: "Zastavení úniku tepla a hluku z ulice." },
  ];

  const vyhody = [
    { jmeno: "Rychlý výjezd", ikona: ClockIcon },
    { jmeno: "Férová cena", ikona: CurrencyDollarIcon },
    { jmeno: "Garance kvality", ikona: HandThumbUpIcon },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-x-hidden">
      <Head>
        <title>AR TECHNIK | Vaše okna, naše starost | Lukáš Novák</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* --- HEADER --- */}
      <header className="h-[70px] md:h-[80px] px-6 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 flex items-center">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          <div className="relative w-[150px] h-[50px] md:w-[180px] md:h-[60px]">
            <Image 
              src="/images/ar-technik-logo-okno.png" 
              alt="AR-TECHNIK Logo" 
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          <a href="tel:+420608025502" className="flex items-center gap-2 text-blue-700 font-black text-base md:text-lg hover:scale-105 transition-transform">
            <PhoneIcon className="w-5 h-5" />
            +420 608 025 502
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* --- HERO SEKCE (Nastavena tak, aby se vešla na obrazovku) --- */}
        <section className="min-h-[calc(100vh-80px)] flex items-center py-6 md:py-10">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* TEXTOVÁ ČÁST */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1 text-center lg:text-left">
                <div className="space-y-3">
                  <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block">
                    Profesionální servis oken
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[0.95] tracking-tighter uppercase italic">
                    Vaše okna, <br/><span className="text-blue-700 underline decoration-blue-200 underline-offset-4">naše starost.</span>
                  </h1>
                  <p className="text-base text-slate-600 font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
                    Kompletní péče o vaše okna a dveře. Šetříme náklady na vytápění a vracíme oknům funkčnost.
                  </p>
                </div>

                {/* SLUŽBY - Kompaktnější verze */}
                <div className="grid grid-cols-1 gap-3 text-left">
                  {sluzby.map((item) => (
                    <div key={item.jmeno} className="group flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <div className="bg-blue-50 p-2 rounded-lg text-blue-600 shrink-0">
                        <item.ikona className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 uppercase italic text-xs">{item.jmeno}</h3>
                        <p className="text-[11px] text-slate-500 leading-tight">{item.popis}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HLAVNÍ FOTKA - Limitovaná výška */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[300px] md:h-[450px] lg:h-[550px] border-4 border-white bg-slate-100 group">
                  <Image 
                    src="/images/servis-oken-ar-technik.png" 
                    alt="Servis oken Lukáš Novák" 
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center justify-between border border-slate-100">
                    <div>
                      <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">Cena servisu bytu</span>
                      <span className="text-xl md:text-2xl font-black italic text-slate-900">1 200 Kč <span className="text-xs font-normal not-italic text-slate-400 uppercase">bez DPH</span></span>
                    </div>
                    <CheckBadgeIcon className="w-8 h-8 text-blue-600 opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- OBLAST PŮSOBNOSTI --- */}
        <section className="bg-slate-900 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic leading-none">
                  Kde působíme? <br />
                  <span className="text-blue-500 underline decoration-blue-800 underline-offset-4">Praha a okolí.</span>
                </h2>
                <p className="text-slate-400 text-base max-w-md mx-auto lg:mx-0">
                  Rychlé výjezdy po celé Praze a Středočeském kraji. Jsme tam, kde nás potřebujete.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2 max-w-sm mx-auto lg:mx-0">
                  {vyhody.map(v => (
                    <div key={v.jmeno} className="flex items-center gap-2">
                      <v.ikona className="w-5 h-5 text-blue-500" />
                      <span className="font-bold uppercase tracking-widest text-[9px] text-slate-200">{v.jmeno}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-[2rem] border border-white/10">
                <div className="relative w-full aspect-video">
                  <Image 
                    src="/images/mapa-praha.png" 
                    alt="Mapa oblasti" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- KONTAKT --- */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl text-center space-y-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
              Potřebujete servis?
            </h2>
            <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                  <MapPinIcon className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-black text-slate-900 italic uppercase leading-none">Lukáš Novák</h3>
                  <p className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mt-1">lukas.novak.85@seznam.cz</p>
                </div>
              </div>
              <a href="tel:+420608025502" className="group w-full md:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 p-6 md:px-10 rounded-2xl transition-all shadow-lg active:scale-95 text-white">
                <PhoneIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span className="text-2xl md:text-3xl font-black italic">+420 608 025 502</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.3em]">
            AR TECHNIK • Lukáš Novák • IČO: 21387605
          </p>
        </div>
      </footer>
    </div>
  );
}
