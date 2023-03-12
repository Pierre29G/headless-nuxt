<template>
    <ul>
        <li><NuxtLink :to="{name: 'fetch-usage'}">Fetch usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'archive'}">Dato usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'style-usage'}">Style usage</NuxtLink></li>
    </ul>
    <h1>Home page</h1>

    <AppInfo>
        Page de référence vers tous les éléments vu en cours
    </AppInfo>
</template>

<script setup>
</script>