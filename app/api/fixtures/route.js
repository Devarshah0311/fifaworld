const FIXTURES = [
  // Group A
  { id:1, home:"Mexico", away:"South Africa", date:"2026-06-11", time:"20:00", offset:-5, venue:"Mexico City", group:"Group A", round:"Matchday 1" },
  { id:2, home:"South Korea", away:"Czech Republic", date:"2026-06-11", time:"20:00", offset:-6, venue:"Guadalajara", group:"Group A", round:"Matchday 1" },
  { id:3, home:"Mexico", away:"Czech Republic", date:"2026-06-17", time:"15:00", offset:-5, venue:"Mexico City", group:"Group A", round:"Matchday 2" },
  { id:4, home:"South Korea", away:"South Africa", date:"2026-06-17", time:"21:00", offset:-6, venue:"Guadalajara", group:"Group A", round:"Matchday 2" },
  { id:5, home:"South Africa", away:"Czech Republic", date:"2026-06-24", time:"21:00", offset:-5, venue:"Mexico City", group:"Group A", round:"Matchday 3" },
  { id:6, home:"Mexico", away:"South Korea", date:"2026-06-24", time:"21:00", offset:-6, venue:"Guadalajara", group:"Group A", round:"Matchday 3" },

  // Group B
  { id:7, home:"Canada", away:"Bosnia", date:"2026-06-12", time:"15:00", offset:-4, venue:"Toronto", group:"Group B", round:"Matchday 1" },
  { id:8, home:"USA", away:"Panama", date:"2026-06-12", time:"19:00", offset:-4, venue:"Atlanta", group:"Group B", round:"Matchday 1" },
  { id:9, home:"Canada", away:"USA", date:"2026-06-18", time:"19:00", offset:-4, venue:"Toronto", group:"Group B", round:"Matchday 2" },
  { id:10, home:"Bosnia", away:"Panama", date:"2026-06-19", time:"15:00", offset:-4, venue:"Atlanta", group:"Group B", round:"Matchday 2" },
  { id:11, home:"Bosnia", away:"USA", date:"2026-06-26", time:"19:00", offset:-4, venue:"Philadelphia", group:"Group B", round:"Matchday 3" },
  { id:12, home:"Panama", away:"Canada", date:"2026-06-26", time:"19:00", offset:-4, venue:"Toronto", group:"Group B", round:"Matchday 3" },

  // Group E
  { id:13, home:"Germany", away:"Curacao", date:"2026-06-14", time:"12:00", offset:-5, venue:"Houston", group:"Group E", round:"Matchday 1" },
  { id:14, home:"Ivory Coast", away:"Ecuador", date:"2026-06-14", time:"19:00", offset:-4, venue:"Philadelphia", group:"Group E", round:"Matchday 1" },
  { id:15, home:"Germany", away:"Ivory Coast", date:"2026-06-20", time:"16:00", offset:-4, venue:"Toronto", group:"Group E", round:"Matchday 2" },
  { id:16, home:"Ecuador", away:"Curacao", date:"2026-06-20", time:"20:00", offset:-5, venue:"Kansas City", group:"Group E", round:"Matchday 2" },
  { id:17, home:"Curacao", away:"Ivory Coast", date:"2026-06-25", time:"16:00", offset:-4, venue:"Philadelphia", group:"Group E", round:"Matchday 3" },
  { id:18, home:"Ecuador", away:"Germany", date:"2026-06-25", time:"16:00", offset:-4, venue:"East Rutherford", group:"Group E", round:"Matchday 3" },

  // Group F
  { id:19, home:"Netherlands", away:"Japan", date:"2026-06-14", time:"15:00", offset:-5, venue:"Dallas", group:"Group F", round:"Matchday 1" },
  { id:20, home:"Sweden", away:"Tunisia", date:"2026-06-14", time:"20:00", offset:-6, venue:"Monterrey", group:"Group F", round:"Matchday 1" },
  { id:21, home:"Netherlands", away:"Sweden", date:"2026-06-20", time:"13:00", offset:-5, venue:"Houston", group:"Group F", round:"Matchday 2" },
  { id:22, home:"Tunisia", away:"Japan", date:"2026-06-21", time:"15:00", offset:-5, venue:"Dallas", group:"Group F", round:"Matchday 2" },
  { id:23, home:"Tunisia", away:"Netherlands", date:"2026-06-26", time:"15:00", offset:-5, venue:"Dallas", group:"Group F", round:"Matchday 3" },
  { id:24, home:"Japan", away:"Sweden", date:"2026-06-27", time:"21:00", offset:-6, venue:"Monterrey", group:"Group F", round:"Matchday 3" },

  // Group G
  { id:25, home:"Belgium", away:"Egypt", date:"2026-06-15", time:"18:00", offset:-7, venue:"Seattle", group:"Group G", round:"Matchday 1" },
  { id:26, home:"Iran", away:"New Zealand", date:"2026-06-15", time:"18:00", offset:-7, venue:"Los Angeles", group:"Group G", round:"Matchday 1" },
  { id:27, home:"Belgium", away:"Iran", date:"2026-06-21", time:"18:00", offset:-7, venue:"Vancouver", group:"Group G", round:"Matchday 2" },
  { id:28, home:"New Zealand", away:"Egypt", date:"2026-06-22", time:"18:00", offset:-7, venue:"Seattle", group:"Group G", round:"Matchday 2" },
  { id:29, home:"New Zealand", away:"Belgium", date:"2026-06-27", time:"15:00", offset:-7, venue:"Vancouver", group:"Group G", round:"Matchday 3" },
  { id:30, home:"Egypt", away:"Iran", date:"2026-06-28", time:"18:00", offset:-7, venue:"Los Angeles", group:"Group G", round:"Matchday 3" },

  // Group H
  { id:31, home:"Australia", away:"Turkey", date:"2026-06-13", time:"18:00", offset:-4, venue:"Atlanta", group:"Group H", round:"Matchday 1" },
  { id:32, home:"Spain", away:"Cape Verde", date:"2026-06-15", time:"12:00", offset:-4, venue:"Atlanta", group:"Group H", round:"Matchday 1" },
  { id:33, home:"Saudi Arabia", away:"Uruguay", date:"2026-06-15", time:"18:00", offset:-4, venue:"Miami", group:"Group H", round:"Matchday 1" },
  { id:34, home:"Australia", away:"Cape Verde", date:"2026-06-22", time:"15:00", offset:-4, venue:"Philadelphia", group:"Group H", round:"Matchday 2" },
  { id:35, home:"Turkey", away:"Saudi Arabia", date:"2026-06-23", time:"18:00", offset:-4, venue:"Miami", group:"Group H", round:"Matchday 2" },

  // Group J
  { id:36, home:"Argentina", away:"Algeria", date:"2026-06-13", time:"12:00", offset:-4, venue:"East Rutherford", group:"Group J", round:"Matchday 1" },
  { id:37, home:"Norway", away:"Ghana", date:"2026-06-13", time:"21:00", offset:-4, venue:"Boston", group:"Group J", round:"Matchday 1" },
  { id:38, home:"Argentina", away:"Norway", date:"2026-06-19", time:"21:00", offset:-4, venue:"East Rutherford", group:"Group J", round:"Matchday 2" },
  { id:39, home:"Algeria", away:"Ghana", date:"2026-06-20", time:"18:00", offset:-4, venue:"Boston", group:"Group J", round:"Matchday 2" },
];

export async function GET() {
  return Response.json({ fixtures: FIXTURES, live: [] });
}