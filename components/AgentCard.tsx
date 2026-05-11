import Image from 'next/image';
import { Agent } from '../types/agent';
type Props = { agent: Agent; };
export default function AgentCard({ agent }: Props) {
  return (
    <article className='card-arch group'>
      <div className='grid md:grid-cols-[120px_1fr] gap-6 p-6'>
        <div className='relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden bg-charcoal-100 mx-auto md:mx-0'>
          <Image src={agent.photo} alt={agent.name} fill className='object-cover' />
        </div>
        <div className='flex-1'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h3 className='text-xl font-semibold text-charcoal-900'>{agent.name}</h3>
              <p className='text-sm text-charcoal-500 mt-1'>{agent.title}</p>
            </div>
            {agent.verified && <span className='badge-arch bg-emerald-600 text-white'>Verified</span>}
          </div>
          <p className='text-sm text-charcoal-600 mt-4'>{agent.bio}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {agent.specialties.map((specialty) => (
              <span key={specialty} className='text-xs px-3 py-1.5 rounded-full bg-charcoal-100 text-charcoal-600'>{specialty}</span>
            ))}
          </div>
          <div className='mt-6 grid grid-cols-3 gap-4 py-4 border-t border-b border-charcoal-100'>
            <div className='text-center'>
              <div className='text-2xl font-semibold text-charcoal-900'>{agent.rating.toFixed(1)}</div>
              <div className='text-xs text-charcoal-400 uppercase tracking-wide mt-1'>Rating</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-semibold text-charcoal-900'>{agent.listingsCount}</div>
              <div className='text-xs text-charcoal-400 uppercase tracking-wide mt-1'>Listings</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-semibold text-charcoal-900 truncate'>{agent.location}</div>
              <div className='text-xs text-charcoal-400 uppercase tracking-wide mt-1'>Location</div>
            </div>
          </div>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a href={'tel:' + agent.phone} className='px-5 py-2.5 bg-charcoal-900 text-white text-sm font-semibold rounded-lg hover:bg-charcoal-800 transition-colors'>Call</a>
            <a href={'mailto:' + agent.email} className='px-5 py-2.5 border-2 border-charcoal-200 text-charcoal-700 text-sm font-semibold rounded-lg hover:border-charcoal-300 hover:bg-charcoal-50 transition-colors'>Email</a>
          </div>
        </div>
      </div>
    </article>
  );
}
