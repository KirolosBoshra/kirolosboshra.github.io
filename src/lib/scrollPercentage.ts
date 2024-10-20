export function getScrollPercentage(): number {
  const scrollTop = window.scrollY; // Pixels scrolled from the top
  const windowHeight = window.innerHeight; // Viewport height
  const fullHeight = document.documentElement.scrollHeight; // Total page height

  if (fullHeight <= windowHeight) return 100; // Fully visible if no scrolling needed

  const scrollableHeight = fullHeight - windowHeight;
  const scrollPercent = (scrollTop / scrollableHeight) * 100;

  return Math.min(Math.max(scrollPercent, 0), 100); // Clamp between 0 and 100
}
