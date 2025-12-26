type Task = {
  id: number;
  time: string;
  category: string;
  title: string;
  outcome: string;
};

const tomorrowTasks: Task[] = [
  {
    id: 1,
    time: "08:30",
    category: "Engineering Alignment",
    title: "Draft the 15-minute sync agenda with the engineering lead",
    outcome: "Clear structure covering blockers, feature readiness, and delivery risks.",
  },
  {
    id: 2,
    time: "08:45",
    category: "Engineering Alignment",
    title: "Send calendar invite for the timeline confirmation stand-up",
    outcome: "Meeting locked with lead engineer, PM, and QA representative.",
  },
  {
    id: 3,
    time: "09:00",
    category: "Engineering Alignment",
    title: "Compile the current sprint status and outstanding blockers",
    outcome: "One-page digest combining Jira snapshot and informal updates.",
  },
  {
    id: 4,
    time: "09:30",
    category: "Product Scope",
    title: "Review the V1 scope doc and flag must-have launch features",
    outcome: "Re-confirmed priority list aligned with the go-live promise.",
  },
  {
    id: 5,
    time: "10:00",
    category: "Engineering Alignment",
    title: "Set success criteria for accepting the final dev timeline",
    outcome: "List of metrics: buffer %, QA readiness, release checklist coverage.",
  },
  {
    id: 6,
    time: "10:30",
    category: "Engineering Alignment",
    title: "Prepare probing questions on velocity, staffing, and deployment",
    outcome: "Question bank ensuring no blind spots going into the meeting.",
  },
  {
    id: 7,
    time: "11:00",
    category: "Engineering Alignment",
    title: "Request updated burndown chart and confidence score from the dev lead",
    outcome: "Fresh data to validate or challenge proposed launch dates.",
  },
  {
    id: 8,
    time: "11:30",
    category: "Engineering Alignment",
    title: "Book contingency check-in for 48 hours post timeline agreement",
    outcome: "Calendar hold to confirm execution discipline mid-week.",
  },
  {
    id: 9,
    time: "12:00",
    category: "Hiring Kick-off",
    title: "List critical roles and seat counts for the next three hires",
    outcome: "Role slate covering backend, frontend, and QA/automation requirements.",
  },
  {
    id: 10,
    time: "12:30",
    category: "Hiring Kick-off",
    title: "Draft the backend engineer role profile with stack expectations",
    outcome: "JD ready for publishing with deliverables tied to launch roadmap.",
  },
  {
    id: 11,
    time: "13:00",
    category: "Hiring Kick-off",
    title: "Draft the frontend engineer role profile optimized for web V1",
    outcome: "JD highlighting Next.js expertise, localization, and performance mindset.",
  },
  {
    id: 12,
    time: "13:30",
    category: "Hiring Kick-off",
    title: "Draft the QA & automation engineer role profile",
    outcome: "JD covering test automation, release management, and staging ownership.",
  },
  {
    id: 13,
    time: "14:00",
    category: "Hiring Kick-off",
    title: "Prioritize outreach channels in Egypt for tech hiring",
    outcome: "Tiered list of platforms, communities, and recruiters with costs.",
  },
  {
    id: 14,
    time: "14:30",
    category: "Hiring Kick-off",
    title: "Sketch hiring funnel and ownership for each role",
    outcome: "Pipeline stages with responsible owner and expected throughput.",
  },
  {
    id: 15,
    time: "15:00",
    category: "Roadmap Planning",
    title: "Outline the 3-month launch roadmap with milestone checkpoints",
    outcome: "Timeline showing discovery, build, QA, and go-live enablement tracks.",
  },
  {
    id: 16,
    time: "15:45",
    category: "Roadmap Planning",
    title: "Break the first month into weekly execution sprints",
    outcome: "Week-by-week board mapping deliverables, owners, and KPIs.",
  },
  {
    id: 17,
    time: "16:30",
    category: "Executive Communications",
    title: "Prepare single-slide summary for stakeholders and advisors",
    outcome: "Snapshot covering launch date, hiring plan, and immediate asks.",
  },
  {
    id: 18,
    time: "17:00",
    category: "Executive Communications",
    title: "Block personal review slot to iterate on docs and share with team",
    outcome: "Calendar block with distribution list ready for end-of-day send.",
  },
];

const launchPillars = [
  {
    title: "Engineering Readiness",
    highlights: [
      "Lock target release date with 15% buffer for QA and fixes.",
      "Define hotfix protocol and deployment checklist for V1 web.",
      "Secure weekly burn reports for transparency to investors.",
    ],
  },
  {
    title: "Hiring Sprint",
    highlights: [
      "Source 30 qualified candidates per role by end of month one.",
      "Stand up fast interview loop with tech assessment and culture screen.",
      "Onboard first hire within six weeks to accelerate delivery.",
    ],
  },
  {
    title: "Go-To-Market Prep",
    highlights: [
      "Craft restaurant onboarding narrative and pilot partner list.",
      "Draft retention KPIs: bookings per venue, table turn rate, CSAT.",
      "Align marketing teaser campaign with launch readiness checkpoints.",
    ],
  },
];

const runwayPlan = [
  {
    label: "Month 1",
    focus: "Stabilize build, start hiring, validate user journeys.",
  },
  {
    label: "Month 2",
    focus: "Integrate feedback loops, complete QA automation, secure first hires.",
  },
  {
    label: "Month 3",
    focus: "Pilot launch, execute marketing ramp, prepare investor update.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-emerald-100 py-16">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 font-sans text-zinc-900">
        <header className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-xl shadow-emerald-100/40 backdrop-blur-sm">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Reservya • CEO Command Center
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tomorrow&apos;s game plan to lock the launch timeline and open the hiring sprint
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            Objective: leave tomorrow with a signed-off engineering schedule, green-lit hiring plan for 3 seats, and a clear 3-month + 1-month roadmap that de-risks the Reservya web V1 launch in Egypt.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-500">
            <span className="rounded-full bg-emerald-50 px-4 py-1 font-medium text-emerald-700">
              Focus • Timeline certainty
            </span>
            <span className="rounded-full bg-emerald-50 px-4 py-1 font-medium text-emerald-700">
              Focus • Hiring kickoff
            </span>
            <span className="rounded-full bg-emerald-50 px-4 py-1 font-medium text-emerald-700">
              Focus • 3-month runway map
            </span>
          </div>
        </header>

        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Tomorrow&apos;s 18-task checklist</h2>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-600">
              Start 08:30 → Finish 17:30
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tomorrowTasks.map((task) => (
              <div
                key={task.id}
                className="flex h-full flex-col gap-3 rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm shadow-emerald-100/60 backdrop-blur-sm"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                    {task.category}
                  </span>
                  <span className="text-sm font-semibold text-zinc-500">{task.time}</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight text-zinc-900">
                  {task.id}. {task.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">{task.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-lg shadow-emerald-100/40 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">3 strategic pillars</h2>
            <p className="text-sm text-zinc-600">
              Anchor weekly check-ins on these pillars to ensure Reservya&apos;s launch readiness stays on track.
            </p>
            <div className="flex flex-col gap-5">
              {launchPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-emerald-100/70 bg-emerald-50/60 p-5">
                  <h3 className="text-lg font-semibold text-emerald-900">{pillar.title}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-800">
                    {pillar.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-lg shadow-emerald-100/40 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">90-day runway snapshot</h2>
            <p className="text-sm text-zinc-600">
              Use this as the North Star during tomorrow&apos;s conversations to map dependencies and hiring urgency.
            </p>
            <div className="space-y-4">
              {runwayPlan.map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-5">
                  <h3 className="text-base font-semibold text-zinc-900">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.focus}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50 p-5 text-sm text-emerald-800">
              <p className="font-semibold">End-of-day deliverables</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Signed-off engineering timeline with validation notes.</li>
                <li>Published job descriptions and sourcing channel plan.</li>
                <li>Shared roadmap doc covering 3-month arc and month-one sprint.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
