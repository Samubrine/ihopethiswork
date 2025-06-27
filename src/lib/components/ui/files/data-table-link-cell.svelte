<script lang="ts">
    let { link }: { link: string } = $props();
  </script>
  
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-block max-w-[200px] truncate text-blue-600 hover:underline"
    title={link}
  >
    {link}
  </a>
  