import { Link } from 'react-router-dom'

/**
 * Logo oficial M&V
 * Coração + tipografia M&V (sem subtítulo Gospel Wear)
 */
export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: { icon: 36, text: 'text-lg' },
    md: { icon: 44, text: 'text-xl' },
    lg: { icon: 56, text: 'text-2xl' },
  }
  const s = sizes[size] || sizes.md

  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <img
        src="/images/logo-heart.png"
        alt="M&V"
        width={s.icon}
        height={s.icon}
        className="transition-transform group-hover:scale-105 shrink-0 object-contain"
        style={{ width: s.icon, height: s.icon }}
      />
      <span className={`font-display font-bold tracking-tight ${s.text} leading-none`}>
        <span className="text-[#F472B6]">M</span>
        <span className="text-[#EF4444]">&amp;</span>
        <span className="text-[#60A5FA]">V</span>
      </span>
    </Link>
  )
}
