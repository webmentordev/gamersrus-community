<template>
    <nav class="fixed top-0 left-0 w-full z-40 mt-4 620:mt-0 620:px-0 620:rounded-none px-4">
        <div class="container flex items-center rounded-md justify-between bg-black bg-opacity-30 backdrop-blur-md">
            <NuxtLink to="/"><img src="https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg" alt="Rust Logo"></NuxtLink>
            <ul class="flex items-center 620:hidden">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/#about">About</NuxtLink>
                <NuxtLink to="/staff">Staff</NuxtLink>
                <NuxtLink to="/wipe">Wipe</NuxtLink>
                <NuxtLink to="/rules">Rules</NuxtLink>
                <NuxtLink to="/fivem" class="rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#f5870a" d="M22.4 24h-5.225c-.117 0-.455-1.127-1.026-3.375c-1.982-6.909-3.124-10.946-3.417-12.12l3.37-3.325h.099c.454 1.42 2.554 7.676 6.299 18.768ZM12.342 7.084h-.048a3.382 3.385 0 0 1-.098-.492v-.098a102.619 102.715 0 0 1 3.272-3.275c.13.196.196.356.196.491v.05a140.694 140.826 0 0 1-3.322 3.324ZM5.994 10.9h-.05c.67-2.12 1.076-3.209 1.223-3.275L14.492.343c.08 0 .258.524.533 1.562zm1.37-4.014h-.05C8.813 2.342 9.612.048 9.71 0h4.495v.05a664.971 664.971 0 0 1-6.841 6.839Zm-2.69 7.874h-.05c.166-.798.554-1.418 1.174-1.855a312.918 313.213 0 0 1 5.71-5.717h.05c-.117.672-.375 1.175-.781 1.52zM1.598 24l-.098-.05c1.399-4.172 2.148-6.322 2.248-6.45l6.74-6.694v.05C10.232 11.88 8.974 16.263 6.73 24Z"/></svg></NuxtLink>
            </ul>

            <ul class="620:block hidden" @click="show = !show">
                <li class="h-[1px] my-2 w-[60px] bg-white"></li>
                <li class="h-[1px] my-2 w-[60px] bg-white"></li>
                <li class="h-[1px] my-2 w-[60px] bg-white"></li>
            </ul>
            <div class="fixed top-0 left-0 flex justify-end w-full h-screen z-40" v-if="show" @click="show = !show">
                <div class="max-w-lg w-full h-full bg-dark p-3">
                    <h2 class="text-3xl mb-3 text-white">GamersRUs Servers</h2>
                    <ul class="text-start text-white flex flex-col w-full">
                        <NuxtLink class="py-6 border-b border-gray-600" to="/">Home</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/#about">About</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/staff">Staff</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/wipe">Wipe</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/rules">Rules</NuxtLink>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return {
                show: false
            }
        }
    }
</script>