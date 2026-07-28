import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  whatsapp = false,
  ...props
}) {
  const baseClass = `${variants[variant] || variants.primary} ${className}`

  const content = (
    <>
      {(whatsapp || Icon) && (
        <span className="shrink-0">
          {whatsapp ? <MessageCircle className="w-5 h-5" /> : Icon && <Icon className="w-5 h-5" />}
        </span>
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
