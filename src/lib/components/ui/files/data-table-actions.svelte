<script lang="ts">
    import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
    import LinkIcon from "@lucide/svelte/icons/link";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    // import * as ToolTip from "$lib/components/ui/tooltip";
    import { Tooltip } from "bits-ui";
    // import TooltipContent from "../tooltip/tooltip-content.svelte";
    import { Toaster } from "$lib/components/ui/sonner"
    import { toast } from "svelte-sonner";
    import { Badge } from "$lib/components/ui/badge"
    import { TooltipContent } from "../tooltip";
    
    let { id, link, importance}: {
         id: string,
         link : string, 
         importance?: string,
        } 
    = $props();

    function handleLinkClick() {
        navigator.clipboard.writeText(link);
        // window.open(link, "_blank");
        toast.success("URL berhasil disalin");
    }
   </script>

<div>
    <!-- importance badge
     <Tooltip.Provider>
        <Tooltip.Root>
            <Tooltip.Trigger>
                <Badge
                    class="h-3 min-w-3 rounded-full px-1 font-mono tabular-nums {importance ? '' : 'invisible'}"
                    variant="destructive"
                ></Badge>
            </Tooltip.Trigger>
            <TooltipContent>
                <p>Urgent</p>
            </TooltipContent>
        </Tooltip.Root>
     </Tooltip.Provider> -->

    <!-- link button -->
     <Tooltip.Provider>
        <Tooltip.Root>
            <Tooltip.Trigger>
                <Button
                variant="ghost"
                size="icon"
                class="relative size-8 p-0"
                onclick={handleLinkClick}
                >
                <LinkIcon />
                <span class="sr-only">Salin URL</span>
                </Button>
            </Tooltip.Trigger>
            <Tooltip.Content
            side="top"
            align="center"
            class="z-50 rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md"
            >
                <p>Salin URL</p>
            </Tooltip.Content>
        </Tooltip.Root>
     </Tooltip.Provider>
     
     <!-- dropdown menu -->
     <Tooltip.Provider>
         <Tooltip.Root>
             <Tooltip.Trigger>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                    {#snippet child({ props })}
                    <Button
                        {...props}
                        variant="ghost"
                        size="icon"
                        class="relative size-8 p-0"
                    >
                        <span class="sr-only">Aksi Lain</span>
                        <EllipsisIcon />
                    </Button>
                    {/snippet}
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                    <!-- bisa add group juga, i deleted that thou -->
                    <DropdownMenu.Item>Sunting</DropdownMenu.Item>
                    <DropdownMenu.Item>Hapus</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Tooltip.Trigger>
            <Tooltip.Content
            side="top"
            align="center"
            class="z-50 rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md"
            >
                <p>Aksi Lain</p>
            </Tooltip.Content>
        </Tooltip.Root>
     </Tooltip.Provider>
</div>