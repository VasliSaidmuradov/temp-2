<template>
    <div class="contacts">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Контакты</nuxt-link>
        </div>
        <div class="layout-container">
            <div class="contacts-left">
                <h1 class="section-title">Обратная связь</h1>
                <p class="contacts-text">Хотите получать специально подобранные для Вас предложения, быть в курсе новостей и участвовать в акциях? Тогда заполняйте форму и будьте в команде CashU!</p>
                <app-form />
            </div>
            <div class="contacts-right">
                <p class="contacts-label">Телефон</p>
                <a href="" class="contacts-text --icon">
                    <phone />
                    +7 (701) 885-80-80
                </a>
                <p class="contacts-label">E-mail</p>
                <a href="" class="contacts-text --icon">
                    <email />
                    info@cashu.kz
                </a>
                <p class="contacts-label">Адрес</p>
                <p class="contacts-text --icon">
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
export default {
    components: {
        appForm,
        phone,
        email,
        pin
    }
}
</script>