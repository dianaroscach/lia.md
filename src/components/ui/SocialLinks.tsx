type SocialLinksProps={
  className?:string;
  iconClassName?:string;
};

export function SocialLinks({className="",iconClassName="h-4 w-4"}:SocialLinksProps){return <div className={`flex items-center gap-3 ${className}`} aria-label="Rețele sociale"><a href="https://www.instagram.com/ciocarlia.sezatoare/" target="_blank" rel="noreferrer" aria-label="Ciocârlia pe Instagram" className="transition hover:text-[var(--wine)]"><InstagramIcon className={iconClassName}/></a><a href="https://www.facebook.com/ciocarlia.sezatoarea" target="_blank" rel="noreferrer" aria-label="Ciocârlia pe Facebook" className="transition hover:text-[var(--wine)]"><FacebookIcon className={iconClassName}/></a></div>}

function InstagramIcon({className}:{className:string}){return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>}
function FacebookIcon({className}:{className:string}){return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.7 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.8v8h3.4Z"/></svg>}
