<script lang="ts">
    import * as Card from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button"
    import FileBlock from "$lib/components/file-block.svelte" 

</script>

<Card.Root> 
    <Card.Header>
        <Card.Title>Kumpulan Fail General</Card.Title>
        <Card.Description>Fail-fail general untuk seluruh pegawai BPS Kabupaten Rokan Hilir</Card.Description>
    </Card.Header>
    <Card.Content>
        <div class="grid grid-cols-3 gap-4">
            <div class="rounded-sm">
                <div class="rounded-sm bg-gray-50 p-4 h-full border-1 border-gray-200">
                    <!-- add perulangan disini -->
                    <Button 
                    class="w-full text-left text-gray-900 hover:bg-gray-100 truncate"
                    variant="ghost">
                        Fail Umum
                    </Button>
                    <Button 
                    class="w-full text-left text-gray-900 hover:bg-gray-100 truncate"
                    variant="ghost">
                        Fail Khusus
                    </Button>
                    <Button 
                    class="w-full text-left text-gray-900 hover:bg-gray-100 truncate"
                    variant="ghost">
                        Pengumuman
                    </Button>
                </div>
            </div>
            <!-- <div class="col-span-2 rounded-sm bg-white p-4 h-full border-1 border-gray-200">
                <div class="grid grid-rows-2 gap-4">
                    <Card.Root class="w-full p-4">
                        <Card.Header>
                            <Card.Title>Kumpulan Fail General</Card.Title>
                            <Card.Description>Fail-fail general untuk seluruh pegawai BPS Kabupaten Rokan Hilir</Card.Description>
                        </Card.Header>
                        <Card.Action>
                            <Button>Lihat semua</Button>
                        </Card.Action>
                    </Card.Root>
                    <FileBlock/>
                </div>
            </div> -->
        </div>
    </Card.Content>
</Card.Root>
