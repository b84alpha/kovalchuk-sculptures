import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="container-narrow py-6 md:py-8 flex items-center justify-between">
        <div className="text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-neutral-300 font-light opacity-70 hover:opacity-100 transition-opacity">
          KOVALCHUK SCULPTURES
        </div>
        <Image 
          src="/klogo.png" 
          alt="Kovalchuk Sculptures" 
          width={200} 
          height={200}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain opacity-90"
        />
      </header>

      {/* Hero */}
      <section className="container-narrow py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Hero Text */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] font-display tracking-tight">
              <span className="block">Art</span>
              <span className="block text-bronze">Beyond</span>
              <span className="block">Time<span className="text-bronze">.</span></span>
            </h1>
          </div>
          
          {/* Right: Studio Description */}
          <div className="lg:pt-8">
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 leading-relaxed mb-8">
              Kovalchuk Sculptures LLC is the UAE studio of <span className="text-bronze font-medium">Andrey Kovalchuk</span> — 
              State Prizes laureate and President of the Union of Artists of Russia.
            </p>
            
            {/* Elegant Awards text section */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-bronze to-transparent"></div>
              <p className="text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed pl-4">
                Honors include the <span className="text-neutral-200 font-light">State Prize of the Russian Federation</span>, 
                <span className="text-neutral-200 font-light"> Government Prize of Russia</span>, and the 
                <span className="text-neutral-200 font-light"> Order of France for Merit in Art & Literature</span>. 
              </p>
              <p className="text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed mt-4 pl-4">
                Works are held by leading museums worldwide, including the 
                <span className="text-neutral-200 font-light"> State Tretyakov Gallery</span> in Moscow and 
                <span className="text-neutral-200 font-light"> NAMOC</span> in Beijing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Buttons */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4">
          <a className="group btn btn-primary justify-center sm:justify-start relative overflow-hidden" href="mailto:contact@example.com">
            <span className="relative z-10">Contact Studio</span>
            <svg className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          <a className="group btn btn-secondary justify-center sm:justify-start relative overflow-hidden" href="/portfolio.pdf" target="_blank" rel="noopener noreferrer">
            <span className="relative z-10">Portfolio</span>
            <span className="relative z-10 text-neutral-500 ml-1">(PDF)</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bronze/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="container-narrow py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          <div className="group">
            <h3 className="text-xs tracking-[0.2em] text-neutral-500 mb-5">WHAT WE CREATE</h3>
            <ul className="space-y-3 text-sm md:text-base text-neutral-300">
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Figurative sculpture</span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Animalistic sculpture</span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Abstract sculpture</span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Spatial compositions & art objects</span>
              </li>
            </ul>
          </div>
          
          <div className="group">
            <h3 className="text-xs tracking-[0.2em] text-neutral-500 mb-5">MATERIALS</h3>
            <ul className="space-y-3 text-sm md:text-base text-neutral-300">
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Bronze <span className="text-neutral-500 text-xs">(multiple patinas)</span></span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Stainless steel</span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Colored composites</span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Mixed media</span>
              </li>
            </ul>
          </div>
          
          <div className="group">
            <h3 className="text-xs tracking-[0.2em] text-neutral-500 mb-5">SCALE</h3>
            <ul className="space-y-3 text-sm md:text-base text-neutral-300">
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Monumental civic works</span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">Small-format sculpture</span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-bronze mr-3 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                <span className="hover:text-neutral-100 transition">From centimeters to meters</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="container-narrow py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900">
              <Image 
                src={`/thumb-${i}.png`} 
                alt={`Sculpture ${i}`} 
                fill 
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container-narrow py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-neutral-800 mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-bronze text-2xl md:text-3xl font-light mb-2">01</div>
              <div className="text-sm md:text-base text-neutral-300">Concept</div>
            </div>
            <div>
              <div className="text-bronze text-2xl md:text-3xl font-light mb-2">02</div>
              <div className="text-sm md:text-base text-neutral-300">Approval</div>
            </div>
            <div>
              <div className="text-bronze text-2xl md:text-3xl font-light mb-2">03</div>
              <div className="text-sm md:text-base text-neutral-300">Casting</div>
            </div>
            <div>
              <div className="text-bronze text-2xl md:text-3xl font-light mb-2">04</div>
              <div className="text-sm md:text-base text-neutral-300">Installation</div>
            </div>
          </div>
          <p className="mt-8 text-center text-xs md:text-sm text-neutral-500 px-4 md:px-0">
            Each commission is personally authored and approved by Andrey Kovalchuk and realized to museum standards
          </p>
        </div>
      </section>

      {/* Footer - Centered */}
      <footer className="mt-16 md:mt-20 border-t border-neutral-800">
        <div className="container-narrow py-10 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
              <div>
                <div className="text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-neutral-400 mb-3 md:mb-4">STUDIO</div>
                <p className="text-xs md:text-sm text-neutral-500">
                  Kovalchuk Sculptures LLC<br/>
                  United Arab Emirates
                </p>
              </div>
              <div>
                <div className="text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-neutral-400 mb-3 md:mb-4">CONTACT</div>
                <div className="space-y-1">
                  <a href="mailto:contact@example.com" className="block text-xs md:text-sm text-neutral-300 hover:text-bronze transition">
                    contact@example.com
                  </a>
                  <a href="tel:+971501234567" className="block text-xs md:text-sm text-neutral-300 hover:text-bronze transition">
                    +971 50 123 4567
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-neutral-400 mb-3 md:mb-4">PORTFOLIO</div>
                <a href="/portfolio.pdf" className="text-xs md:text-sm text-neutral-300 hover:text-bronze transition">
                  Download PDF
                </a>
              </div>
            </div>
            <div className="pt-8 md:pt-10 border-t border-neutral-900 text-center">
              <p className="text-[10px] md:text-xs text-neutral-600">
                © 2025 Kovalchuk Sculptures LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}