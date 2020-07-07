<template>
    <footer class="footer">
        <div class="layout-container">
            <div class="footer-row">
                <div class="footer-col">
                    <nuxt-link class="footer-logo animation-item" to="/">
                        <img src="/icons/logo.svg" alt="CashU logo">
                    </nuxt-link>
                </div>
                <div class="footer-col">
                    <p class="footer-subtitle animation-item">Мы в социальных сетях</p>
                    <div class="footer-socials">
                        <a href="" class="animation-item" target="_blank"><insta /></a>
                        <a href="" class="animation-item" target="_blank"><vk /></a>
                        <a href="" class="animation-item" target="_blank"><facebook /></a>
                    </div>
                </div>
                <div class="footer-col">
                    <nuxt-link class="footer-link animation-item" to="/about">О нас</nuxt-link>
                    <nuxt-link class="footer-link animation-item" to="/documentation">Документация</nuxt-link>
                    <nuxt-link class="footer-link animation-item" to="/get-loan">Как получить микрокредит</nuxt-link>
                    <nuxt-link class="footer-link animation-item" to=/repay-loan>Как погасить микрокредит</nuxt-link>
                </div>
                <div class="footer-col">
                    <nuxt-link class="footer-link animation-item" to="/posts">Акции и новости</nuxt-link>
                    <nuxt-link class="footer-link animation-item" to="/reviews">Отзывы</nuxt-link>
                    <nuxt-link class="footer-link animation-item" to="/faq">Часто задаваемые вопросы</nuxt-link>
                    <nuxt-link class="footer-link animation-item" to="/contacts">Контакты</nuxt-link>
                </div>
                <div class="footer-col">
                    <p class="footer-subtitle animation-item">Телефон</p>
                    <a href="" class="footer-link animation-item --icon">
                        <phone />
                        +7 (701) 885-80-80
                    </a>
                    <p class="footer-subtitle animation-item">E-mail</p>
                    <a href="" class="footer-link animation-item --icon">
                        <email />
                        info@cashu.kz
                    </a>
                </div>
            </div>
            <div class="footer-copyright">
                <p class="footer-subtitle animation-item">Сервис быстрых онлайн займов в Казахстане</p>
                <a href="https://brandstudio.kz" class="animation-item" target="_blank"><img src="/icons/brandstudio.png" alt="CashU logo"></a>
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
    mounted() {
        let block = document.querySelector('.footer')
        let item = block.querySelectorAll('.animation-item')
        let footerScene = this.$scrollmagic.scene({
            triggerElement: block,
            triggerHook: 0.8
        })
        .setTween(
            gsap.from(item, {opacity: 0, y: 15, duration: 0.4, stagger: 0.1, ease: 'back.out(3)'})
        )
        this.$scrollmagic.addScene(footerScene)
    },
    components: {
        insta,
        vk,
        facebook,
        phone,
        email
    }
}
</script>