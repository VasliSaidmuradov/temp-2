export default {
    mounted() {
        if (this.$refs.animationBlock) {
            let item = this.$refs.animationBlock.querySelectorAll('.animation-item')

            const scene = this.$scrollmagic.scene({
                triggerElement: this.$refs.animationBlock,
                triggerHook: 0.7
            })
            .setTween(
                gsap.from(item, {opacity: 0, y: 15, duration: 0.4, delay: 0.3, stagger: 0.1, ease: 'back.out(3)'})
            )
            // .addIndicators()
            this.$scrollmagic.addScene(scene)
            // this.$scrollmagic.attachTo(this.$refs.animationBlock)
            // this.$refs.animationBlock.$scrollmagic.addScene(scene)
        }
    }
}
