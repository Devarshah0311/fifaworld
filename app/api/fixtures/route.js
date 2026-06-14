export async function GET() {
  const key = "82768ce9c7mshea960ff89a46ec7p1e445djsnef4efbb619d5";
  const headers = {
    "x-rapidapi-host": "wc26-live-football-api.p.rapidapi.com",
    "x-rapidapi-key": key,
  };

  try {
    const [matchesRes, liveRes] = await Promise.all([
      fetch("https://wc26-live-football-api.p.rapidapi.com/matches", { headers }),
      fetch("https://wc26-live-football-api.p.rapidapi.com/live", { headers }),
    ]);

    const [matchesData, liveData] = await Promise.all([
      matchesRes.json(),
      liveRes.json(),
    ]);

    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

    const allMatches = Array.isArray(matchesData) ? matchesData : [];
    const upcoming = allMatches.filter(m => {
      const d = m.date || "";
      return d.startsWith(today) || d.startsWith(tomorrow);
    });

    return Response.json({
      fixtures: upcoming,
      live: Array.isArray(liveData) ? liveData : [],
    });
  } catch (e) {
    return Response.json({ fixtures: [], live: [], error: e.message });
  }
}