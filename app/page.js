'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://free-api-live-football-data.p.rapidapi.com/football-current-live", {
      headers: {
        "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFixtures(data.response || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      <nav className="border-b border-slate-700 bg-slate-900/80 sticky top-0 z-50">
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
          Live scores, fixtures, teams and news. All times in IST.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold mb-6">
          Live Matches <span className="text-slate-500 text-base">(IST)</span>
        </h2>
        {loading ? (
          <div className="text-slate-400 text-center py-12">Loading live matches...</div>
        ) : fixtures.length === 0 ? (
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">⚽</div>
            <div className="text-slate-400">No live matches right now. Check back on match day!</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {fixtures.map((match, i) => {
              const utcTime = new Date(match.fixture?.date);
              const istTime = utcTime.toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
              });
              return (
                <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-green-500/50 transition">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-red-400 text-xs font-semibold">LIVE</span>
                    <span className="text-slate-500 text-xs ml-auto">{istTime} IST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{match.teams?.home?.name}</span>
                    <div className="text-center px-4">
                      <div className="text-2xl font-bold">
                        {match.goals?.home ?? 0} - {match.goals?.away ?? 0}
                      </div>
                      <div className="text-xs text-slate-400">{match.fixture?.status?.elapsed}'</div>
                    </div>
                    <span className="font-bold text-lg">{match.teams?.away?.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Top Headlines</h2>
          <div className="space-y-3">
            {[
              "Messi confirms this is his final World Cup",
              "Host cities announce ticket release dates",
              "VAR rules updated for the 2026 tournament",
              "India broadcast deal confirmed with JioCinema",
            ].map((title, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-green-500/50 transition cursor-pointer">
                <div className="text-xs text-green-400 mb-1">NEWS</div>
                <div className="font-medium">{title}</div>
              </div>
            ))}
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
