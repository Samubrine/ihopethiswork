<script lang="ts">
    import * as Card from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button"
    import { Badge } from "$lib/components/ui/badge"
    import { ScrollArea } from "$lib/components/ui/scroll-area"
    import NextIcon from "@lucide/svelte/icons/chevron-right";

    let {
        informations,
    }: {
        informations: {
            id: number;
            title: string;
            description: string;
            isImportant?: boolean;
        }[];
    } = $props();
</script>

<Card.Root class="w-full p-4">
    <Card.Header class="pt-4"> 
        <Card.Title>Informasi Terkini</Card.Title>
        <Card.Description>Pengumuman terbaru di BPS Kabupaten Rokan Hilir</Card.Description>
        <Card.Action class="w-full flex justify-end">
            <Button>Lihat semua</Button>
        </Card.Action>
    </Card.Header>
    <ScrollArea class="h-72 w-full rounded-md border p-4 bg-gray-50">
        <div class="grid gap-4">
            <!-- add perulangan disini -->
            {#each informations as info (info.id)}
                <Card.Root>
                    <Card.Header>
                        <Card.Title class="truncate py-2">
                            {info.title}
                        </Card.Title>
                        <Card.Description class="truncate">
                            {info.description}
                        </Card.Description>
                        <Card.Action>
                            <!-- kalau tidak urgent, gaada badge nya -->
                            <Badge
                                class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums {info.isImportant ? '' : 'invisible'}"
                                variant="destructive"
                            ></Badge>
                            <Button href="#" variant="ghost">
                                <NextIcon />
                            </Button>
                        </Card.Action>
                    </Card.Header>
                </Card.Root>
            {/each}
        </div>
    </ScrollArea>
</Card.Root>
