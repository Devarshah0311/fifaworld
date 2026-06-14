'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [allFixtures, setAllFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState("All");

  useEffect(() => {
    fetch("/api/fixtures")
      .then((res) => res.json())
      .then((data) => {
        setAllFixtures(data.fixtures || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getISTDateTime = (match) => {
    try {
      const [hours, mins] = match.time.split(":").map(Number);
      const localDate = new Date(`${match.date}T${String(hours).padStart(2,"0")}:${String(mins).padStart(2,"0")}:00Z`);
      const utcDate = new Date(localDate.getTime() - match.offset * 3600000);
      const istTime = utcDate.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });
      const istDate = utcDate.toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      const istDateKey = utcDate.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
      return { istDate, istTime, istDateKey, utcDate };
    } catch {
      return { istDate: "TBC", istTime: "TBC", istDateKey: "", utcDate: new Date(0) };
    }
  };

  const todayIST = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const tomorrowIST = new Date(Date.now() + 86400000).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });

  const enriched = allFixtures.map(m => ({ ...m, ...getISTDateTime(m) }));
  const todayMatches = enriched.filter(m => m.istDateKey === todayIST).sort((a,b) => a.utcDate - b.utcDate);
  const tomorrowMatches = enriched.filter(m => m.istDateKey === tomorrowIST).sort((a,b) => a.utcDate - b.utcDate);

  const groups = ["All", ...Array.from(new Set(enriched.map(m => m.group))).sort()];
  const groupFixtures = enriched
    .filter(m => selectedGroup === "All" || m.group === selectedGroup)
    .sort((a, b) => a.utcDate - b.utcDate);

  const MatchCard = ({ match }) => (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-green-500/50 transition">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-slate-400">{match.istDate}</span>
        <span className="text-xs text-green-400 font-semibold">{match.istTime} IST</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold">{match.home}</span>
        <span className="text-slate-500 text-sm px-2">vs</span>
        <span className="font-semibold">{match.away}</span>
      </div>
      <div className="text-xs text-slate-500 mt-2">{match.venue}</div>
      <div className="text-xs text-blue-400 mt-1">{match.group} — {match.round}</div>
    </div>
  );

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
            <a href="#fixtures" className="hover:text-green-400 transition">Fixtures</a>
            <a href="#groups" className="hover:text-green-400 transition">Groups</a>
            <a href="#" className="hover:text-green-400 transition">News</a>
            <a href="#" className="hover:text-green-400 transition">Watch</a>
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

      <section id="fixtures" className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold mb-6">Today's Matches</h2>
        {loading ? (
          <div className="text-slate-400 text-center py-12">Loading...</div>
        ) : todayMatches.length === 0 ? (
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
            <div className="text-slate-400">No matches today.</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todayMatches.map((match) => <MatchCard key={match.id} match={match} />)}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold mb-6">Tomorrow's Matches</h2>
        {tomorrowMatches.length === 0 ? (
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
            <div className="text-slate-400">No matches tomorrow.</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tomorrowMatches.map((match) => <MatchCard key={match.id} match={match} />)}
          </div>
        )}
      </section>

      <section id="groups" className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold mb-6">Browse by Group</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGroup(g)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                selectedGroup === g
                  ? "bg-green-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        {groupFixtures.length === 0 ? (
          <div className="text-slate-400 text-center py-8">No matches found.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupFixtures.map((match) => <MatchCard key={match.id} match={match} />)}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Top Headlines</h2>
          <div className="space-y-3">
            {[
              "Germany fan cycles 26,000km to get to Houston",
              "Brazil fans take over NYC ahead of their opener",
              "Ronaldo arrives for Portugal World Cup campaign",
              "Australia shock Turkey in Group H opener",
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