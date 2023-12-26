"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import  ChatCompletionRequestMessage  from "openai";


import { Heading } from "@/components/Heading";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Code, MessageSquare, Music } from "lucide-react";
import { useState } from "react";

import axios from "axios";

const ConversationPage = () => {
	const router = useRouter();
	const [music, setMusic] = useState<string>();
   

	const formSchema = z.object({
		prompt: z.string().min(1, {
			message: "Music prompt must be at least 1 character long",
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: "",
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			setMusic(undefined);
			const response = await axios.post("/api/music", data);
			setMusic(response.data.audio);
			form.reset();
            
          
		} catch (error: any) {
			console.log(error);
		} finally {
			router.refresh();
		}
	};

	return (
		<div>
			<Heading
				title="Music"
				description="Turn your words into a song"
				icon={Music}
				iconColor="text-emerald-500"
				bgColor="bg-emerald-500/10"
			/>
			<div className="px-4 lg:px-8">
				<div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
							<FormField
								name="prompt"
								render={({ field }) => (
									<FormItem className="col-span-12 lg:col-span-10">
										<FormControl className="m-0 p-0">
											<Input
												className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
												placeholder="Simple toggle button using reat hooks"
												disabled={isLoading}
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								className="col-span-12 lg:col-span-2 w-full"
								type="submit"
								disabled={isLoading}
								size="icon"
							>
								Generate
							</Button>
						</form>
					</Form>
				</div>
				<div className="space-y-4 mt-4">
					{isLoading && (
						<div className="p-20">
							<Loader />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ConversationPage;
