<template>
    <div class="faq" ref="animationBlock">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Вопрос-ответ</nuxt-link>
        </div>
        <div class="layout-container">
            <h1 class="section-title animation-item">Вопросы и ответы</h1>
            <p class="faq-text animation-item">Безопасность ваших денег в CashU — это важно.</p>
            <p class="faq-text animation-item">Поэтому рассказываем, как мы её обеспечиваем.</p>
            <div class="faq-container">
                <div class="faq-dropdown animation-item" @click="toggleDropdown(index)" v-for="(dropdown, index) in 4" :key="index">
                    <div class="faq-question">Какие документы необходимы для получения микрокредита?</div>
                    <transition name="dropdown-fade">
                        <div class="faq-answer" v-if="index === activeDropdownIndex">
                            <p>Одновременно у Вас не может быть несколько микрокредитов, но CashU предлагает возможность получить дополнительную сумму к существующему микрокредиту. О возможностях получить дополнительную сумму Вы можете узнать в своем профиле CashU.</p>
                            <img src="/img/faq.png" alt="CashU image">
                        </div>
                    </transition>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
import animation from '@/mixins/animation'
export default {
    mixins: [animation],
    data() {
        return {
            activeDropdownIndex: null
        }
    },
    methods: {
        toggleDropdown(i) {
            if (i === this.activeDropdownIndex) {
                this.activeDropdownIndex = null
            } else {
                this.activeDropdownIndex = i
            }
        }
    }
}
</script>