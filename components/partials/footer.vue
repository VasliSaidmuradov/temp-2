<template>
    <footer class="footer">
        <div class="layout-container">
            <div class="footer-row">
                <div class="footer-col">
                    <nuxt-link class="footer-logo" to="/">
                        <img src="/icons/logo.svg" alt="CashU logo">
                    </nuxt-link>
                </div>
                <div class="footer-col">
                    <p class="footer-subtitle">Мы в социальных сетях</p>
                    <div class="footer-socials">
                        <a href="" target="_blank"><insta /></a>
                        <a href="" target="_blank"><vk /></a>
                        <a href="" target="_blank"><facebook /></a>
                    </div>
                </div>
                <div class="footer-col">
                    <nuxt-link class="footer-link" to="/about">О нас</nuxt-link>
                    <nuxt-link class="footer-link" to="/documentation">Документация</nuxt-link>
                    <nuxt-link class="footer-link" to>Как получить микрокредит</nuxt-link>
                    <nuxt-link class="footer-link" to>Как погасить микрокредит</nuxt-link>
                </div>
                <div class="footer-col">
                    <nuxt-link class="footer-link" to>Акции и новости</nuxt-link>
                    <nuxt-link class="footer-link" to>Отзывы</nuxt-link>
                    <nuxt-link class="footer-link" to>Часто задаваемые вопросы</nuxt-link>
                    <nuxt-link class="footer-link" to>Контакты</nuxt-link>
                </div>
                <div class="footer-col">
                    <p class="footer-subtitle">Телефон</p>
                    <a href="" class="footer-link --icon">
                        <phone />
                        +7 (701) 885-80-80
                    </a>
                    <p class="footer-subtitle">E-mail</p>
                    <a href="" class="footer-link --icon">
                        <email />
                        info@cashu.kz
                    </a>
                </div>
            </div>
            <div class="footer-copyright">
                <p class="footer-subtitle">Сервис быстрых онлайн займов в Казахстане</p>
                <a href="https://brandstudio.kz" target="_blank"><img src="/icons/brandstudio.png" alt="CashU logo"></a>
            </div>
        </div>
    </footer>
</template>

<script>
import insta from '@/static/icons/insta.svg'
import vk from '@/static/icons/vk.svg'
import facebook from '@/static/icons/facebook.svg'
import phone from '@/static/icons/phone-filled.svg'
import email from '@/static/icons/mail.svg'
export default {
    components: {
        insta,
        vk,
        facebook,
        phone,
        email
    }
}
</script>