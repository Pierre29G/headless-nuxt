<template>
    <h1>Blog</h1>

    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else>
        <p>{{ recipeData.recipe }}</p>
    </div>
    
</template>

<script setup>
    import blog_single from '@/cms/queries/blog_single';

    const route = useRoute();
    
    const variable = {
        slugUrl : route.params.slug
    }


    const { data: recipeData, pending: postsPending } = await useLazyAsyncQuery(blog_single, variable)
</script>