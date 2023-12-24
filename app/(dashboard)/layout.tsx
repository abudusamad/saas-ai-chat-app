const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-30 bg-gray-900">
                
            </div>
			<main>{children}</main>
		</div>
	);
};

export default DashboardLayout;
