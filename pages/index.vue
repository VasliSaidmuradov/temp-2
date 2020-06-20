<template>
    <div class="home-page">
        <banner />
        <pros />
        <news />
        <reviews />
        <subscribe />
    </div>
</template>

<script>
import banner from '@/components/home/banner'
import pros from '@/components/home/pros'
import news from '@/components/home/news'
import reviews from '@/components/home/reviews'
import subscribe from '@/components/partials/subscribe'
export default {
    components: {
        banner,
        pros,
        news,
        reviews,
        subscribe
    }
}
</script>