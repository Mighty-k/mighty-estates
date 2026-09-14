import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AgentCard from "../components/AgentCard";
import { sampleAgents } from "../lib/agentData";

export default function AgentsPage() {
  return (
    <>
      <Head>
        <title>Agents | Mighty Estates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Meet the trusted agents behind Mighty Estates and connect with specialists in residential and commercial property."
        />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="rounded-structural border border-line bg-white p-8 mb-8 shadow-soft">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ledger">
            Agents
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight mt-3">
            Meet the team guiding every search.
          </h1>
          <p className="text-slate mt-3 max-w-2xl text-base leading-relaxed">
            Our agents pair market knowledge with a calm, high-touch approach so
            buyers, renters, and owners can move with confidence.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sampleAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
