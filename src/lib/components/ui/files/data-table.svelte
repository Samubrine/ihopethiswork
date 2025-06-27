<script lang="ts" generics="TData, TValue">
    import {
        type ColumnDef,
        type PaginationState,
        type SortingState,
        type ColumnFiltersState,
        getCoreRowModel,
        getPaginationRowModel,
        getSortedRowModel,
        getFilteredRowModel,
    } from "@tanstack/table-core";
    import { Input } from "$lib/components/ui/input/index.js";
    import {
     createSvelteTable,
     FlexRender,
    } from "$lib/components/ui/data-table/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
    import type { File } from "$lib/components/ui/files/columns.js";
    import FileBoard from "$lib/components/file-board.svelte";
    import * as Card from "$lib/components/ui/card"
    import PlusIcon from "@lucide/svelte/icons/plus"
    // modal
    import { MediaQuery } from "svelte/reactivity";
    import DataTableFacetedFilter from "$lib/components/ui/files/data-table-faceted-filter.svelte";
    // form
    import type { SuperValidated, Infer } from "sveltekit-superforms";
    import { type FileSchema } from "$lib/schemas/files-schema.js";
    import AddButton from "$lib/components/ui/files/data-table-add-button.svelte";

    type DataTableProps<TData, TValue> = {
        allData: {
            data: TData[];
            form: SuperValidated<Infer<FileSchema>>;
        }
        columns: ColumnDef<TData, TValue>[];
    };
    
    let { allData, columns }: DataTableProps<TData, TValue> = $props();
    const { data, form } = allData;
    
    let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
    let sorting = $state<SortingState>([]);
    let columnFilters = $state<ColumnFiltersState>([]);
    
    const table = createSvelteTable({
        get data() {
            return data;
        },
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onPaginationChange: (updater) => {
        if (typeof updater === "function") {
            pagination = updater(pagination);
        } else {
            pagination = updater;
        }
        },
        onSortingChange: (updater) => {
        if (typeof updater === "function") {
            sorting = updater(sorting);
        } else {
            sorting = updater;
        }
        },
        onColumnFiltersChange: (updater) => {
        if (typeof updater === "function") {
            columnFilters = updater(columnFilters);
        } else {
            columnFilters = updater;
        }
        },
        state: {
        get pagination() {
            // only 10 items per page
            return pagination;
        },
        get sorting() {
            return sorting;
        },
        get columnFilters() {
            return columnFilters;
        },
        },
    });

</script>

<div>
    <Card.Root> 
        <Card.Header>
            <Card.Title>Kumpulan Fail General</Card.Title>
            <Card.Description>Fail-fail general untuk seluruh pegawai BPS Kabupaten Rokan Hilir</Card.Description>
        </Card.Header>
        <Card.Content>
            <!-- folder bar -->
            <div class="grid grid-cols-4 gap-4">
                <div class="rounded-sm">
                    <div class="rounded-sm bg-gray-50 p-2 h-full border-1 border-gray-200">
                        <!-- add perulangan disini -->
                        <Button 
                        class="w-full justify-start text-gray-900 hover:bg-gray-100 truncate"
                        variant="ghost">
                            Fail Umum
                        </Button>
                        <Button 
                        class="w-full justify-start text-gray-900 hover:bg-gray-100 truncate"
                        variant="ghost">
                            Fail Khusus
                        </Button>
                        <Button 
                        class="w-full justify-start text-gray-900 hover:bg-gray-100 truncate"
                        variant="ghost">
                            Pengumuman
                        </Button>
                    </div>
                </div>
                <!-- tabel dan lainnya -->
                <div class="col-span-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center py-4 w-full">
                            <Input
                            placeholder="Cari fail..."
                            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                            onchange={(e) => {
                                table.getColumn("name")?.setFilterValue(e.currentTarget.value);
                            }}
                            oninput={(e) => {
                                table.getColumn("name")?.setFilterValue(e.currentTarget.value);
                            }}
                            class="max-w-sm"
                            />
                        </div>
                        <div class="m-3">
                            <DataTableFacetedFilter
                            column={table.getColumn("importance")!}
                            title="Urgensi"
                            options={[
                                { label: "Urgent", value: "true" },
                                { label: "Biasa", value: "false" }
                            ]}
                            />                
                        </div>
                        <!-- add button -->
                        <div class="col-span-1">
                            <AddButton form={form} />
                        </div>
                    </div>
                    <div class="rounded-md border">
                        <Table.Root>
                            <Table.Header>
                                {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
                                    <Table.Row>
                                        {#each headerGroup.headers as header (header.id)}
                                            <Table.Head class="pl-3">
                                            {#if !header.isPlaceholder}
                                                <FlexRender
                                                    content={header.column.columnDef.header}
                                                    context={header.getContext()}
                                                />
                                            {/if}
                                            </Table.Head>
                                        {/each}
                                    </Table.Row>
                                {/each}
                            </Table.Header>
                            <Table.Body>
                                {#each table.getRowModel().rows as row (row.id)}
                                    <Table.Row data-state={row.getIsSelected() && "selected"}>
                                        {#each row.getVisibleCells() as cell (cell.id)}
                                            <Table.Cell>
                                                <FlexRender
                                                content={cell.column.columnDef.cell}
                                                context={cell.getContext()}
                                                />
                                            </Table.Cell>
                                        {/each}
                                    </Table.Row>
                                    {:else}
                                    <Table.Row>
                                        <Table.Cell colspan={columns.length} class="h-24 text-center">
                                        No results.
                                        </Table.Cell>
                                    </Table.Row>
                                {/each}
                            </Table.Body>
                        </Table.Root>
                    </div>
                    <div class="flex items-center justify-end space-x-2 py-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onclick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      Sebelumnya
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onclick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      Selanjutnya
                    </Button>
                  </div>
                </div>
            </div>
        </Card.Content>
    </Card.Root>
</div>