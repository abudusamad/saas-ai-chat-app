"use client";

import { Heading } from "@/components/Heading";
import { SettingsIcon } from "lucide-react";

const SettingsPage = () => {
	return (
		<div>
			<Heading
				title="Settings"
				description="Update your settings"
				icon={SettingsIcon}
				iconColor="text-orange-700"
				bgColor="bg-orange-700/10"
			/>
		</div>
	);
};

export default SettingsPage;
