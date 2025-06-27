<script lang="ts">
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CalendarPrimitive.HeadCellProps = $props();
</script>

<CalendarPrimitive.HeadCell
	bind:ref
	class={cn(
		// i added w-full min-w-min
		"text-muted-foreground w-(--cell-size) rounded-md text-[0.8rem] font-normal w-full w-min-w",
		className
	)}
	{...restProps}
/>
