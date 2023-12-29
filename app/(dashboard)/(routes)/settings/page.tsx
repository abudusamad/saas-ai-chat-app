"use client";

import { Heading } from "@/components/Heading";
import { SettingsIcon } from "lucide-react";

const SettingsPage = () => {
	const isPro = false;
	return (
		<div>
			<Heading
				title="Settings"
				description="Update your settings"
				icon={SettingsIcon}
				iconColor="text-orange-700"
				bgColor="bg-orange-700/10"
			/>
			<div className="px-4 lg:px-8 space-y-4">
				<div className="text-muted-foreground text-sm">
					{isPro ? "You are a pro user" : "You are not a pro user"}
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
