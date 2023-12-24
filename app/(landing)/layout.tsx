const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="h-full bg-[#111827] overflow-auto">
			<div className="mx-auto max-w-screen-6xl w-full">{children}</div>
		</main>
	);
};

export default LandingLayout;
