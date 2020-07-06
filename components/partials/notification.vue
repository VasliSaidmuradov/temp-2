<template>
    <transition name="modal-fade">
        <div class="notification" v-if="isModalOpen">
            <div class="notification-overlay" @click="closeModal"></div>
            <div class="notification-inner">
                <button class="notification-close" @click="closeModal">
                    <close />
                </button>
                <h3 class="notification-title">Заголовок</h3>
                <p class="notification-text">
                    Каждый Ваш третий микрокредит, взятый у нас будет бесплатным! 0% по микрокредиту и никаких других процентов и комиссий за дополнительные услуги! Сколько возьмете – столько вернете! Автоматизированная умная система принятия решения позволяет мгновенно одобрить или отказать по поданной заявке на получение микрокредита. Вам не нужно будет ждать нашего решения несколько часов. Мы ценим время наших клиентов!
                </p>
                <img src="/img/news.png" alt="CashU image" class="notification-image">
            </div>
        </div>
    </transition>
</template>

<script>
import close from '@/static/icons/close.svg'
export default {
    data() {
        return {
            isModalOpen: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.openModal()
        },3000)
    },
    methods: {
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        }
    },
    components: {
        close
    }
}
</script>