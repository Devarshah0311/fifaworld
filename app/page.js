export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      
      <nav className="border-b border-slate-700 backdrop-blur-sm bg-slate-900/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              FIFA World Cup 2026
            </h1>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-green-400 transition">Home</a>
            <a href="#" className="hover:text-green-400 transition">Fixtures</a>
            <a href="#" className="hover:text-green-400 transition">Teams</a>
            <a href="#" className="hover:text-green-400 transition">News</a>
            <a href="#" className="hover:text-green-400 transition">Watch</a>
            <a href="#" className="hover:text-green-400 transition">Chat</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-4">
          LIVE COVERAGE
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          World Cup <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">2026</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Everything about the FIFA World Cup 2026 - fixtures, scores, teams, news and highlights. All times in IST.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-400 text-sm font-semibold">LIVE NOW</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-4xl mb-2">BRA</div>
              <div className="font-bold text-xl">Brazil</div>
            </div>
            <div className="text-center px-8">
              <div className="text-5xl font-bold mb-2">2 - 1</div>
              <div className="text-sm text-slate-400">65 min</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-4xl mb-2">ARG</div>
              <div className="font-bold text-xl">Argentina</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold mb-6">Today's Fixtures <span className="text-slate-500 text-base">(IST)</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-green-500/50 transition cursor-pointer">
            <div className="text-xs text-slate-400 mb-3">9:30 PM IST</div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">France</span>
              <span className="text-slate-500 text-sm">vs</span>
              <span className="font-semibold">Germany</span>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-green-500/50 transition cursor-pointer">
            <div className="text-xs text-slate-400 mb-3">11:00 PM IST</div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Spain</span>
              <span className="text-slate-500 text-sm">vs</span>
              <span className="font-semibold">Italy</span>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-green-500/50 transition cursor-pointer">
            <div className="text-xs text-slate-400 mb-3">1:30 AM IST</div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">England</span>
              <span className="text-slate-500 text-sm">vs</span>
              <span className="font-semibold">Portugal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Top Headlines</h2>
          <div className="space-y-3">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-green-500/50 transition cursor-pointer">
              <div className="text-xs text-green-400 mb-1">NEWS</div>
              <div className="font-medium">Messi confirms this is his final World Cup</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-green-500/50 transition cursor-pointer">
              <div className="text-xs text-green-400 mb-1">NEWS</div>
              <div className="font-medium">Host cities announce ticket release dates</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-green-500/50 transition cursor-pointer">
              <div className="text-xs text-green-400 mb-1">NEWS</div>
              <div className="font-medium">VAR rules updated for the 2026 tournament</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-green-500/50 transition cursor-pointer">
              <div className="text-xs text-green-400 mb-1">NEWS</div>
              <div className="font-medium">India broadcast deal confirmed with JioCinema</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Watch in India</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="font-semibold">JioCinema</span>
                <span className="text-green-400 text-sm">Free streaming</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="font-semibold">Sports18</span>
                <span className="text-blue-400 text-sm">TV broadcast</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">FIFA Plus YouTube</span>
                <span className="text-red-400 text-sm">Highlights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
          Built for FIFA World Cup 2026 fans - All match times in IST
        </div>
      </footer>

    </div>
  );
}