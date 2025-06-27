<script lang="ts">
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import CalendarEvent from "$lib/components/calendar-31.svelte"
  import InformationBoard from "$lib/components/app-information.svelte"
  import FileBoard from "$lib/components/file-board.svelte"
  
  import DataTable from "$lib/components/ui/files/data-table.svelte";
  import { columns } from "$lib/components/ui/files/columns.js";
  import type { File } from "$lib/components/ui/files/columns.ts";
  
  let props = $props();
  const formData = props.form;
  const data = props.data.data;
  const allData = props.data;
  // janlupa delete this :
  console.log("Data: ", data)  
  console.log("loaded data: ", data);
  console.log("form data: ", formData);

  console.log("typeof data:", typeof data);
  console.log("Array.isArray(data):", Array.isArray(data));

</script>

<Sidebar.Provider>
  <AppSidebar />
  <Sidebar.Inset>
    <header class="flex h-16 shrink-0 items-center gap-2">
      <div class="flex items-center gap-2 px-4">
        <Sidebar.Trigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Page>Dashboard</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
    </header>
    <div class="flex flex-col gap-4 p-4 pt-0">
      <div class="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4">
        <!-- calendar -->
        <div class="w-full min-w-0">
          <div class="rounded-xl w-full h-full p-4 sm:p-6 md:p-8 bg-white shadow">
            <CalendarEvent />
          </div>
        </div>
    
        <!-- info board -->
        <div class="w-full min-w-0">
          <div class="rounded-xl w-full h-full p-4 sm:p-6 md:p-8 bg-white shadow min-w-2xs">
            <InformationBoard />
          </div>
        </div>
      </div>
    
      <!-- file board always below -->
      <div class="w-full max-w-screen-xl mx-auto">
        <div class="bg-muted/50 rounded-xl p-4 sm:p-6 md:p-8">
          <DataTable allData={allData} columns={columns} />
        </div>
      </div>
    </div>
  </Sidebar.Inset>
</Sidebar.Provider>