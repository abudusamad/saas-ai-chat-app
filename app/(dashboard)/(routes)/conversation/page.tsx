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
import { MessageSquare } from "lucide-react";
import { useState } from "react";

import OpenAI from "openai";

import axios from "axios";

const ConversationPage = () => {
	const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
	
	const formSchema = z.object({
		prompt: z.string().min(1, {
			message: "Prompt must be at least 1 character long",
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
			const openai = new OpenAI();
            const completion = await openai.chat.completions.create({
							messages: [
								{
									role: "system",
									content:
										"You are a helpful assistant designed to output JSON.",
								},
								{ role: "user", content: "Who won the world series in 2020?" },
							],
							model: "gpt-3.5-turbo-1106",
							response_format: { type: "json_object" },
						});
						console.log(completion.choices[0].message.content);
		} catch (error: any) {
			console.log(error);
		} finally {
			router.refresh();
		}
	};

	return (
		<div>
			<Heading
				title="Conversation"
				description="Our most advavnaced AI model yet."
				icon={MessageSquare}
				iconColor="text-violet-500"
				bgColor="bg-violet-500/10"
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
												placeholder="How to calulate the area of a circle?"
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
						<div className="p-8 rounded-lg w-full flex items-center justify-between bg-muted">
							<Loader />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ConversationPage;
