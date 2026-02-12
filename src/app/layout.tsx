// Root layout - portal routes use their own layouts with HTML/body
// [locale] routes use [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
