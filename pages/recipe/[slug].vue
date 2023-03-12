<template>
    <h1>Blog</h1>

    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else>
        <h1 class="red">Tzatziki maison</h1>
    </div>
    
</template>

<script setup>
//you will need this later on
//<p>{{ recipeData.recipe }}</p>

    import blog_single from '@/cms/queries/blog_single';

    const route = useRoute();
    
    const variable = {
        slugUrl : route.params.slug
    }


    const { data: recipeData, pending: postsPending } = await useLazyAsyncQuery(blog_single, variable)

    definePageMeta({
            name: 'recipe-page',
            //path: '/router-usage',
    })
</script>