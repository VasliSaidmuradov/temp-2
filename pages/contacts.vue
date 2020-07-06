<template>
    <div class="contacts" ref="animationBlock">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Контакты</nuxt-link>
        </div>
        <div class="layout-container">
            <div class="contacts-left">
                <h1 class="section-title animation-item">Обратная связь</h1>
                <p class="contacts-text animation-item">Хотите получать специально подобранные для Вас предложения, быть в курсе новостей и участвовать в акциях? Тогда заполняйте форму и будьте в команде CashU!</p>
                <app-form />
            </div>
            <div class="contacts-right">
                <p class="contacts-label animation-item">Телефон</p>
                <a href="" class="contacts-text --icon animation-item">
                    <phone />
                    +7 (701) 885-80-80
                </a>
                <p class="contacts-label animation-item">E-mail</p>
                <a href="" class="contacts-text --icon animation-item">
                    <email />
                    info@cashu.kz
                </a>
                <p class="contacts-label animation-item">Адрес</p>
                <p class="contacts-text --icon animation-item">
                    <pin />
                    Алматы, ул. проспект Достык, 305/3
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import appForm from '@/components/partials/form'
import phone from '@/static/icons/phone-filled.svg'
import email from '@/static/icons/mail.svg'
import pin from '@/static/icons/pin.svg'
import animation from '@/mixins/animation'
export default {
    mixins: [animation],
    components: {
        appForm,
        phone,
        email,
        pin
    }
}
</script>