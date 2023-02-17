<template>
    <h1>Dato usage</h1>
    <div v-if="headerPending">
        <p>Loading data</p>
    </div>
    <div v-else>
        <h2>Blog header</h2>
        <p>Site name: {{ cmsHeader?.header?.siteName }}</p>
    </div>

    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else>
        <h2>Blog results</h2>
        <ul>
            <li v-for="post in blogPosts.allBlogPosts" :key="post.id">
                <nuxt-link :to="{name: 'blog-slug', params: {slug: post.blogSlug}}">{{ post.blogTitle }}</nuxt-link>
            </li>
        </ul>
    </div>

    <div v-if="footerPending">
        <p>Loading data</p>
    </div>
    <div v-else>
        <h2>Blog footer</h2>
        <p v-for="item in cmsFooter.footer.differentUsage" :key="item.id">{{ item.title }}</p>
    </div>
</template>

<script setup>
    import blog_post from '@/cms/queries/blog_post';
    import header from '@/cms/queries/header';
    import footer from '@/cms/queries/footer';


    const { data: blogPosts, pending: postsPending } = await useLazyAsyncQuery(blog_post)
    const { data: cmsHeader, pending: headerPending } = await useLazyAsyncQuery(header)
    const { data: cmsFooter, pending: footerPending } = await useLazyAsyncQuery(footer)
</script>