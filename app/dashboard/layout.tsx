export default function DashboarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="bg-gray-200 w-full h-full">{children}</section>;
}
