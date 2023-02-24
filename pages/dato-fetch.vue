<template>
    <h1>Dato usage</h1>

    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else>
        <h2>Blog results :</h2>
        <ul>
            <li v-for="post in blogPosts.allRecipes" :key="post.id">
                <img :src="post.recipeImg.url" alt="chat" />
                <nuxt-link :to="{name: 'blog-slug', params: {slug: post.slugUrl}}">{{ post.title }}</nuxt-link>
            </li>
        </ul>
    </div>

</template>

<script setup>
    import blog_post from '@/cms/queries/blog_post';

    const { data: blogPosts, pending: postsPending } = await useLazyAsyncQuery(blog_post)
</script>