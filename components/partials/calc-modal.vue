<template>
    <div class="calc-modal">
        <div class="calc-modal-overlay" @click="closeModal"></div>
        <div class="calc-modal-inner">
            <button class="calc-modal-close" @click="closeModal">
                <close />
            </button>
            <calculator />
        </div>
    </div>
</template>

<script>
import close from '@/static/icons/close.svg'
import calculator from '@/components/home/calculator'
export default {
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    },
    components: {
        close,
        calculator
    }
}
</script>