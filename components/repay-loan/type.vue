<template>
    <div class="repay-type" ref="animationBlock">
        <div class="layout-container">
            <h3 class="section-title animation-item">Вернуть деньги также легко и просто,  как и получить!</h3>
            <p class="repay-type-text animation-item">Выберите удобный для Вас способ возврата займа:</p>
            <div class="repay-type-row --margin-top">
                <nuxt-link to="/payment" class="repay-type-col animation-item">
                    <p class="repay-type-text">Платежные терминалы QIWI</p>
                    <img src="/icons/qiwi.svg" alt="CashU image">
                </nuxt-link>
                <nuxt-link to="/payment" class="repay-type-col animation-item">
                    <p class="repay-type-text">Платежные терминалы Касса 24</p>
                    <img src="/icons/kassa24.png" alt="CashU image">
                </nuxt-link>
            </div>
            <div class="repay-type-row --margin-bottom">
                <nuxt-link to="/payment" class="repay-type-col animation-item">
                    <p class="repay-type-text">Перевод на банковский счет (реквизиты для перевода ниже)</p>
                    <img src="/icons/card.svg" alt="CashU image">
                </nuxt-link>
                <nuxt-link to="/payment" class="repay-type-col animation-item">
                    <p class="repay-type-text">Погасить или продлить займ из Личного Кабинета</p>
                    <img src="/icons/user-green.svg" alt="CashU image">
                </nuxt-link>
            </div>
            <h4 class="repay-type-subtitle animation-item">Реквизиты для банковского перевода:</h4>
            <ul class="repay-type-list">
                <li><p class="repay-type-text animation-item">• Получатель: ТОО «МФО «СashU»</p></li>
                <li><p class="repay-type-text animation-item">• БИН: 1234567899323</p></li>
            </ul>
            <h4 class="repay-type-subtitle animation-item">Банковский счёт:</h4>
            <ul class="repay-type-list">
                <li><p class="repay-type-text animation-item">• ИИК KZ1234567890234</p></li>
                <li><p class="repay-type-text animation-item">• БИК HSBKKZKX</p></li>
                <li><p class="repay-type-text animation-item">• АО «Народный Банк Казахстана» (оплатить можно через любой банк на территории РК)</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
import animation from '@/mixins/animation'
export default {
    mixins: [animation]
}
</script>