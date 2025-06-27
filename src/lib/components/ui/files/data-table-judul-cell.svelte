<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import * as Drawer from "$lib/components/ui/drawer/index.js";
	import { MediaQuery } from "svelte/reactivity";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import { format } from "date-fns";
	import { id as idLocale } from "date-fns/locale";

	let {
		name,          // file name
		labelValue,     // label
		description,
		link,
		date,
		importance = "false",
	} = $props();

	let open = $state(false);
	const isDesktop = new MediaQuery("(min-width: 768px)");

    const id = $props.id();
	// const label = $derived(labelValue ? { label: labelValue } : null);
	const formattedDate = format(new Date(date), "dd MMMM yyyy", { locale: idLocale });
</script>

<button
	onclick={() => (open = true)}
	type="button"
	class="inline-flex font-medium items-center hover:underline max-w-[500px] truncate bg-transparent border-none p-0 m-0 cursor-pointer"
>
	<!-- {#if label}
		<Badge variant="outline">{label.label}</Badge>
	{/if} -->
	<span class="ml-1">{name}</span>
</button>

{#if isDesktop.current}
	<Dialog.Root bind:open>
		<Dialog.Content class="p-5">
			<Dialog.Header>
				<Dialog.Title>{name}</Dialog.Title>
				<Dialog.Description>{description}</Dialog.Description>
			</Dialog.Header>
			<div class="space-y-2 p-1">
                <p><strong>Tanggal:</strong> {formattedDate}</p>
				<!-- <p><strong>Label:</strong> {labelValue}</p> -->
				<p>
                    <strong>Tautan:</strong> 
                    <a href={link} target="_blank" class="inline-block max-w-[330px] truncate overflow-hidden whitespace-nowrap text-blue-600 underline align-middle">
                        {link}</a>
                </p>
                {#if importance === "true"}
                    <Badge variant="destructive">Penting</Badge>
                {/if}
				<div class="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onclick={() => (open = false)}>Tutup</Button>
					<Button variant="default">Sunting</Button>
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>{name}</Drawer.Title>
				<Drawer.Description>{description}</Drawer.Description>
			</Drawer.Header>
			<div class="mt-4 px-4 space-y-2">
				<p><strong>Tanggal:</strong> {formattedDate}</p>
				<!-- <p><strong>Label:</strong> {labelValue}</p> -->
				<p>
                    <strong>Tautan:</strong> 
                    <a href={link} target="_blank" class="inline-block max-w-[330px] truncate overflow-hidden whitespace-nowrap text-blue-600 underline align-middle">
                        {link}</a>
                </p>
                {#if importance  === "true"}
					<Badge variant="destructive">Penting</Badge>
				{/if}
				<div class="flex justify-end gap-2 pt-4 pb-6">
					<Button variant="outline" onclick={() => (open = false)}>Tutup</Button>
					<Button variant="default">Sunting</Button>
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Root>
{/if}
