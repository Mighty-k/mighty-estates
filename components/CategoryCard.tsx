import Link from 'next/link';
type Props = {
  title: string;
  subtitle?: string;
  icon?: 'home' | 'building' | 'briefcase' | 'sparkle';
  href?: string;
  accent?: boolean;
};
const icons = {
  home: (<svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' /></svg>),
  building: (<svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' /></svg>),
  briefcase: (<svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.085-.686-9.255-1.935L7 19H3v-2l4.5-4.5m12 6l-4-4m-5 0l4 4m3-4l4 4M6 13l4-4' /></svg>),
  sparkle: (<svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' /></svg>)
};
export default function CategoryCard({ title, subtitle, icon = 'home', href, accent }: Props) {
  const content = (
    <div className='card-arch p-6 h-full group-hover:border-charcoal-200'>
      <div className={accent ? 'w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-accent text-white' : 'w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-charcoal-100 text-charcoal-600'}>
        {icons[icon]}
      </div>
      <h3 className='text-lg font-semibold text-charcoal-900 mb-1'>{title}</h3>
      {subtitle && <p className='text-sm text-charcoal-500'>{subtitle}</p>}
      <div className='mt-4 flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity'>
        Explore
        <svg className='w-4 h-4 transition-transform group-hover:translate-x-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
        </svg>
      </div>
    </div>
  );
  return href ? (<Link href={href} className='group block'>{content}</Link>) : (<div className='group'>{content}</div>);
}
