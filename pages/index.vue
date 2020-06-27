<template>
    <div class="home-page">
        <banner />
        <calculator />
        <pros />
        <news />
        <reviews />
        <subscribe />
    </div>
</template>

<script>
import banner from '@/components/home/banner'
import calculator from '@/components/home/calculator'
import pros from '@/components/home/pros'
import news from '@/components/home/news'
import reviews from '@/components/home/reviews'
import subscribe from '@/components/partials/subscribe'
export default {
    components: {
        banner,
        calculator,
        pros,
        news,
        reviews,
        subscribe
    }
}
</script>