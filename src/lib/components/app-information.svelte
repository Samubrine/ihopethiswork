<script lang=ts>
    import InformationBoard from "$lib/components/information.svelte"

    const info = {
        informations: [
            {
                id: 1,
                title: "Pengisian form kompetensi pegawai",
                description: "Bapak/Ibu harap mengisikan form kompetensi pegawai pada link berikut",
                isImportant: true,
            },
            {
                id: 2,
                title: "Pengumuman Baru",
                description: "Ini adalah pengumuman baru dari BPS Kabupaten Rokan Hilir",
                isImportant: true,
            },
            {
                id: 3,
                title: "Pengumuman Baru",
                description: "Ini adalah pengumuman baru dari BPS Kabupaten Rokan Hilir",
                isImportant: true,
            },
            {
                id: 4,
                title: "Pengumuman Baru",
                description: "Ini adalah pengumuman baru dari BPS Kabupaten Rokan Hilir",
                isImportant: false,
            },
            {
                id: 5,
                title: "Pengumuman Baru",
                description: "Ini adalah pengumuman baru dari BPS Kabupaten Rokan Hilir",
                isImportant: false,
            },
            {
                id: 6,
                title: "Pengumuman Baru",
                description: "Ini adalah pengumuman baru dari BPS Kabupaten Rokan Hilir",
                isImportant: false,
            },
        ],
    }
</script>

<InformationBoard {...info} />
