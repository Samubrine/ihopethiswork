<script lang="ts">
    import { Tooltip } from "bits-ui";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { TooltipContent } from "../tooltip";
  
    export let importance: string;
  </script>
  
{#if importance === "true"}
<Tooltip.Provider>
<Tooltip.Root>
    <Tooltip.Trigger>
    <Badge
        class="h-3 min-w-3 rounded-full px-1 font-mono tabular-nums"
        variant="destructive"
    ></Badge>
    </Tooltip.Trigger>
    <TooltipContent>
    <p>Urgent</p>
    </TooltipContent>
</Tooltip.Root>
</Tooltip.Provider>
{/if}