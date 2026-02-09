// Root layout is now handled by [locale]/layout.tsx
// This file is kept for backwards compatibility but should not be used
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
