import Image from "next/image";

const Loader = () => {
	return (
		<div className="h-full flex flex-col gap-y-4 items-center justify-center">
			<div className="w-10 h-10 relative animate-spin">
				<Image fill alt="logo" src="/logo.svg" />
				<div className="text-sm text-muted-foreground">
					Mastech is thinking 
					<span className="animate-dots">.</span>
					<span className="animate-dots delay-200">.</span>
					<span className="animate-dots delay-400">.</span>
				</div>
			</div>
		</div>
	);
};

export default Loader;
