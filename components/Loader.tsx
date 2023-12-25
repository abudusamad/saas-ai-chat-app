import Image from "next/image";

const Loader = () => {
	return (
		<div>
			<div>
				<Image fill alt="logo" src="/logo.svg" />
				<div>Mastech is thinking ...</div>
			</div>
		</div>
	);
};

export default Loader;
