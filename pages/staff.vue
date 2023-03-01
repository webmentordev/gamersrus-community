<template>
    <section class="staff-header overflow-hidden">
        <div class="fixed top-0 h-full w-full bg-black bg-opacity-80"></div>
        <div class="container relative z-10">
            <h1 class="py-[50px] mt-[60px] relative z-10 text-center text-white text-4xl">Staff Members</h1>
            <div class="flex justify-center mb-5">
                <div class="grid grid-cols-2 gap-12 text-white w-fit">
                    <div class="box bg-black p-6 rounded-lg relative">
                        <span class="absolute top-2 rounded-sm font-semibold left-2 p-2 text-sm px-3 bg-[#cd412b]">Owner</span>
                        <img class="mb-5 rounded-md" width="184" height="184" src="https://cdn.discordapp.com/attachments/566944154840727553/1076101105580261376/Test1.png">
                        <div class="info">
                            <h2 class="text-center text-xl mb-3">MickGaming20</h2>
                            <div class="flex text-md items-center justify-center">
                                <Icon class="mr-2" name="logos:discord-icon" />
                                <span class="text-sm">Mick Gaming#6740</span>
                            </div>
                        </div>
                    </div>
                    <div class="box bg-black p-6 rounded-lg relative">
                        <span class="absolute top-2 rounded-sm font-semibold left-2 p-2 text-sm px-3 bg-[#cd412b]">Admin</span>
                        <img class="mb-5 rounded-md" src="https://avatars.akamai.steamstatic.com/8077b2b2301c75f64ff71646bacf5c028d05ad94_full.jpg">
                        <div class="info">
                            <h2 class="text-center text-xl mb-3">ImperialGamerr</h2>
                            <div class="flex text-md items-center justify-center">
                                <Icon class="mr-2" name="logos:discord-icon" />
                                <span class="text-sm">ImperialGamer™#3677</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-12 text-white w-fit m-auto">
                <div class="box bg-black p-6 rounded-lg relative">
                    <span class="absolute top-2 rounded-sm font-semibold left-2 p-2 text-sm px-3 bg-[#cd412b]">Dev</span>
                    <img class="mb-5 rounded-md" src="https://avatars.akamai.steamstatic.com/07a0b9c0595a69ce1d81799bf8a1214c25846c9b_full.jpg">
                    <div class="info">
                        <h2 class="text-center text-xl mb-3">LoBBer</h2>
                        <div class="flex text-md items-center justify-center">
                            <Icon class="mr-2" name="logos:discord-icon" />
                            <span class="text-sm">iLoBBer#1741</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    useHead({
        title: 'Staff Members — Gamer R Us',
    });
</script>