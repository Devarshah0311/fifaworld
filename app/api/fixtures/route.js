const FIXTURES = [
  { id:1, home:"Mexico", away:"South Africa", date:"2026-06-11", time:"20:00 UTC-5", venue:"Mexico City", group:"Group A", round:"Matchday 1", score:"2-0", status:"FT" },
  { id:2, home:"South Korea", away:"Czech Republic", date:"2026-06-11", time:"20:00 UTC-6", venue:"Guadalajara (Zapopan)", group:"Group A", round:"Matchday 1", score:"0-3", status:"FT" },
  { id:3, home:"USA", away:"Panama", date:"2026-06-12", time:"19:00 UTC-4", venue:"Atlanta", group:"Group B", round:"Matchday 1", score:"3-0", status:"FT" },
  { id:4, home:"Canada", away:"Bosnia and Herzegovina", date:"2026-06-12", time:"15:00 UTC-4", venue:"Toronto", group:"Group B", round:"Matchday 1", score:"0-0", status:"FT" },
  { id:5, home:"Argentina", away:"Algeria", date:"2026-06-13", time:"12:00 UTC-4", venue:"MetLife Stadium, New York", group:"Group J", round:"Matchday 1", score:null, status:"FT" },
  { id:6, home:"Australia", away:"Turkey", date:"2026-06-13", time:"18:00 UTC-4", venue:"Atlanta", group:"Group H", round:"Matchday 4", score:null, status:"FT" },
  { id:7, home:"Germany", away:"Curacao", date:"2026-06-14", time:"12:00 UTC-5", venue:"Houston", group:"Group E", round:"Matchday 4", score:null, status:"scheduled" },
  { id:8, home:"Ivory Coast", away:"Ecuador", date:"2026-06-14", time:"19:00 UTC-4", venue:"Philadelphia", group:"Group E", round:"Matchday 4", score:null, status:"scheduled" },
  { id:9, home:"Netherlands", away:"Japan", date:"2026-06-14", time:"15:00 UTC-5", venue:"Dallas (Arlington)", group:"Group F", round:"Matchday 4", score:null, status:"scheduled" },
  { id:10, home:"Sweden", away:"Tunisia", date:"2026-06-14", time:"20:00 UTC-6", venue:"Monterrey (Guadalupe)", group:"Group F", round:"Matchday 4", score:null, status:"scheduled" },
  { id:11, home:"Belgium", away:"Egypt", date:"2026-06-15", time:"18:00 UTC-7", venue:"Seattle", group:"Group G", round:"Matchday 5", score:null, status:"scheduled" },
  { id:12, home:"Iran", away:"New Zealand", date:"2026-06-15", time:"18:00 UTC-7", venue:"Los Angeles (Inglewood)", group:"Group G", round:"Matchday 5", score:null, status:"scheduled" },
  { id:13, home:"Spain", away:"Cape Verde", date:"2026-06-15", time:"12:00 UTC-4", venue:"Atlanta", group:"Group H", round:"Matchday 5", score:null, status:"scheduled" },
  { id:14, home:"Saudi Arabia", away:"Uruguay", date:"2026-06-15", time:"18:00 UTC-4", venue:"Miami (Miami Gardens)", group:"Group H", round:"Matchday 5", score:null, status:"scheduled" },
];

export async function GET() {
  const key = "82768ce9c7mshea960ff89a46ec7p1e445djsnef4efbb619d5";
  const headers = {
    "x-rapidapi-host": "wc26-live-football-api.p.rapidapi.com",
    "x-rapidapi-key": key,
  };

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const upcoming = FIXTURES.filter(m =>
    m.date === today || m.date === tomorrow
  );

  let live = [];
  try {
    const liveRes = await fetch("https://wc26-live-football-api.p.rapidapi.com/live", { headers });
    const liveData = await liveRes.json();
    live = Array.isArray(liveData) ? liveData : [];
  } catch {
    live = [];
  }

  return Response.json({ fixtures: upcoming, live });
}