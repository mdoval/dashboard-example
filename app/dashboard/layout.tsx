import DashboardNavBar from "../ui/dashboard/dashboard-navbar";

export default function DashboarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="bg-gray-200 w-full h-full flex flex-row">
          <div className="bg-gray-600">
            <div className="h-20 flex items-center justify-center text-white text-2xl font-bold"><h1>Example App</h1></div>
            <DashboardNavBar />
          </div>
          <div className="w-full">{children}</div>                    
          </section>;
}
