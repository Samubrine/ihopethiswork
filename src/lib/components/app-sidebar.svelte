<script lang="ts" module>
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import BotIcon from "@lucide/svelte/icons/bot";
	import ChartPieIcon from "@lucide/svelte/icons/chart-pie";
	import FrameIcon from "@lucide/svelte/icons/frame";
	import LifeBuoyIcon from "@lucide/svelte/icons/life-buoy";
	import MapIcon from "@lucide/svelte/icons/map";
	import SendIcon from "@lucide/svelte/icons/send";
	import Settings2Icon from "@lucide/svelte/icons/settings-2";
	import LayoutDashboardIcon from "@lucide/svelte/icons/layout-dashboard";
	import HandshakeIcon from "@lucide/svelte/icons/handshake";
	import BoxesIcon from "@lucide/svelte/icons/boxes";
	import DataIcon from "@lucide/svelte/icons/chart-no-axes-combined";

	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "Dashboard",
				url: "/dashboard",
				icon: LayoutDashboardIcon,
				isActive: true,
				items: [
					
				],
			},
			{
				title: "Tim",
				url: "#",
				icon: HandshakeIcon,
				items: [
					{
						title: "Subbagian Umum",
						url: "tim/umum",
					},
					{
						title: "Distribusi",
						url: "tim/distribusi",
					},
					{
						title: "Neraca",
						url: "tim/neraca",
					},
					{
						title: "Sosial",
						url: "tim/sosial",
					},
					{
						title: "Produksi",
						url: "tim/produksi",
					},
					{
						title: "IPDS",
						url: "tim/ipds",
					},
				],
			},
			{
				title: "Sub Tim",
				url: "#",
				icon: BoxesIcon,
				items: [
					{
						title: "Zona Integritas",
						url: "#",
					},
					{
						title: "PEKPPP",
						url: "#",
					},
					{
						title: "Humas",
						url: "#",
					},
					{
						title: "Sakip",
						url: "#",
					},
					{
						title: "Sektoral",
						url: "#",
					},
					{
						title: "Desa Cantik",
						url: "#",
					},
				],
			},
			{
				title: "Data Strategis",
				url: "#",
				icon: DataIcon,
				items: [
					{
						title: "Kependudukan",
						url: "#",
					},
					{
						title: "Kesehatan",
						url: "#",
					},
					{
						title: "Ketenagakerjaan",
						url: "#",
					},
					{
						title: "Kemiskinan",
						url: "#",
					},
					{
						title: "Pendidikan",
						url: "#",
					},
					{
						title: "Pembangunan Manusia",
						url: "#",
					},
					{
						title: "Perekonomian",
						url: "#",
					},
				],
			},
		],
		navSecondary: [
			{
				title: "Support",
				url: "#",
				icon: LifeBuoyIcon,
			},
			{
				title: "Feedback",
				url: "#",
				icon: SendIcon,
			},
		],
		projects: [
			{
				name: "Design Engineering",
				url: "#",
				icon: FrameIcon,
			},
			{
				name: "Sales & Marketing",
				url: "#",
				icon: ChartPieIcon,
			},
			{
				name: "Travel",
				url: "#",
				icon: MapIcon,
			},
		],
	};
</script>

<script lang="ts">
	import NavMain from "./nav-main.svelte";
	import NavProjects from "./nav-projects.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import CommandIcon from "@lucide/svelte/icons/command";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<CommandIcon class="size-4" />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-medium">Klorofil</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<!-- in case i wanna add more navbar -->
		<!-- <NavProjects projects={data.projects} /> -->
		<!-- <NavSecondary items={data.navSecondary} class="mt-auto" /> -->
	</Sidebar.Content>
	<Sidebar.Footer>
		<!-- auth/user -->
		<!-- <NavUser user={data.user} /> -->
	</Sidebar.Footer>
</Sidebar.Root>
