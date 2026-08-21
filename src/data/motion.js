export const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' },
  transition: { duration: .7, ease: [0.22, 1, 0.36, 1] },
};
