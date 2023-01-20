<template>
    <footer class="text-center z-40 relative">
        <div class="py-6">
            <h1 class="text-xl text-white font-md">Copyrights &copy; {{ data }} GamersRUs.live All Rights Reserved</h1>
        </div>
    </footer>
</template>

<script setup>
    const data = new Date().getFullYear();
</script>
