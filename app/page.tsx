export default function Home() {
  const faqs = [
    {
      q: "How does the tracking SDK work?",
      a: "Drop a single JavaScript snippet into your app. It captures feature interaction events and streams them to your heatmap dashboard in real time — no backend changes needed."
    },
    {
      q: "What counts as a 'feature' event?",
      a: "Any UI interaction you tag: button clicks, page views, modal opens, form submissions. You define the granularity. The SDK sends named events with optional metadata."
    },
    {
      q: "Is my users' data safe?",
      a: "All events are anonymized by default. No PII is collected unless you explicitly pass it. Data is encrypted in transit and at rest, and you can delete your data at any time."
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          SaaS Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          See exactly which features your users{" "}
          <span className="text-[#58a6ff]">actually use</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FeatureMap turns raw interaction events into visual heatmaps so product managers can kill dead features, double down on winners, and ship a tighter UX.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $12/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial</p>

        {/* Mock heatmap visual */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <p className="text-xs text-[#6e7681] mb-4 uppercase tracking-widest">Feature Usage — Last 30 days</p>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 49 }).map((_, i) => {
              const intensity = Math.random()
              const bg =
                intensity > 0.8 ? "bg-[#58a6ff]" :
                intensity > 0.6 ? "bg-[#1f6feb]" :
                intensity > 0.4 ? "bg-[#388bfd33]" :
                intensity > 0.2 ? "bg-[#21262d]" : "bg-[#161b22]"
              return <div key={i} className={`h-8 rounded ${bg}`} />
            })}
          </div>
          <div className="flex gap-6 mt-4 text-xs text-[#6e7681]">
            <span><span className="inline-block w-3 h-3 rounded bg-[#58a6ff] mr-1 align-middle"></span>High usage</span>
            <span><span className="inline-block w-3 h-3 rounded bg-[#1f6feb] mr-1 align-middle"></span>Medium</span>
            <span><span className="inline-block w-3 h-3 rounded bg-[#21262d] mr-1 align-middle"></span>Low / unused</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-sm text-[#6e7681] mb-6">per month</p>
          <ul className="text-sm text-[#8b949e] space-y-2 mb-8 text-left">
            {[
              "Unlimited feature events",
              "Real-time heatmap dashboard",
              "JavaScript SDK + docs",
              "Up to 5 projects",
              "CSV export",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-[#c9d1d9] mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} FeatureMap. All rights reserved.
      </footer>
    </main>
  )
}
