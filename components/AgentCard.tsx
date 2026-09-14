import Image from 'next/image';
import { Agent } from '../types/agent';

type Props = { agent: Agent; };

export default function AgentCard({ agent }: Props) {
  return (
    <article className="card-arch group">
      <div className="grid md:grid-cols-[120px_1fr] gap-6 p-6">
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-control overflow-hidden bg-paper-2 mx-auto md:mx-0 shadow-soft">
          <Image src={agent.photo} alt={agent.name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{agent.name}</h3>
              <p className="text-sm text-slate mt-1">{agent.title}</p>
            </div>
            {agent.verified && (
              <span className="badge-arch bg-success text-white font-medium">
                Verified
              </span>
            )}
          </div>
          <p className="text-sm text-slate mt-4 leading-relaxed">{agent.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {agent.specialties.map((specialty) => (
              <span
                key={specialty}
                className="text-xs px-3 py-1 rounded-pill bg-paper-2 text-slate border border-line/60"
              >
                {specialty}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 py-4 border-t border-b border-line">
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-ink">{agent.rating.toFixed(1)}</div>
              <div className="text-xs text-slate-2 uppercase tracking-wide mt-1">Rating</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-ink">{agent.listingsCount}</div>
              <div className="text-xs text-slate-2 uppercase tracking-wide mt-1">Listings</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-ink truncate">{agent.location}</div>
              <div className="text-xs text-slate-2 uppercase tracking-wide mt-1">Location</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={'tel:' + agent.phone}
              className="px-5 py-2.5 bg-ledger text-white text-sm font-medium rounded-control hover:bg-ledger-dim transition-colors shadow-soft active:translate-y-[1px]"
            >
              Call
            </a>
            <a
              href={'mailto:' + agent.email}
              className="px-5 py-2.5 bg-ledger-tint text-ledger text-sm font-medium rounded-control hover:bg-ledger-tint/80 border border-ledger/10 transition-colors active:translate-y-[1px]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
