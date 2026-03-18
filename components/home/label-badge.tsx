import { motion } from 'framer-motion';

export function LabelBadge({ text }: { text: string }) {
  return (
    <motion.span
      className="inline-flex rounded-full bg-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
      animate={{ backgroundPositionX: ['0%', '200%'] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      style={{ backgroundImage: 'linear-gradient(90deg,#FF7A1B,#ff9f5f,#FF7A1B)', backgroundSize: '200% 100%' }}
    >
      {text}
    </motion.span>
  );
}
