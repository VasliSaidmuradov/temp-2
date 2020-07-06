<template>
    <div class="loan-steps" ref="animationBlock">
        <div class="loan-steps-container">
            <h3 class="section-title animation-item">Легко и просто!</h3>
            <h4 class="loan-steps-subtitle animation-item">Для этого достаточно сделать всего 4 шага:</h4>
            <div class="loan-steps-row animation-item">
                <div class="loan-steps-left">
                    <counter1 />
                    <p class="loan-steps-text">
                        Выбрать необходимые для вас сумму и срок, используя калькулятор, который будет сопровождать Вас на любой странице сайта
                    </p>
                </div>
                <div class="loan-steps-right">
                    <img src="/img/loan-steps1.png" alt="CashU image">
                </div>
            </div>
            <div class="loan-steps-row animation-item">
                <div class="loan-steps-left">
                    <counter2 />
                    <p class="loan-steps-text">
                        Зарегистрироваться и заполнить анкету, указав свои данные
                    </p>
                </div>
                <div class="loan-steps-right">
                    <img src="/img/loan-steps1.png" alt="CashU image">
                </div>
            </div>
            <div class="loan-steps-row animation-item">
                <div class="loan-steps-left">
                    <counter3 />
                    <p class="loan-steps-text">
                        Зарегистрироваться и заполнить анкету, указав свои данные
                    </p>
                </div>
                <div class="loan-steps-right">
                    <img src="/img/loan-steps1.png" alt="CashU image">
                </div>
            </div>
            <div class="loan-steps-row animation-item">
                <div class="loan-steps-left">
                    <counter4 />
                    <p class="loan-steps-text">
                        Получить деньги на банковский счет, либо на банковскую карту.
                    </p>
                </div>
                <div class="loan-steps-right">
                    <img src="/img/loan-steps1.png" alt="CashU image">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import counter1 from '@/static/icons/1.svg'
import counter2 from '@/static/icons/2.svg'
import counter3 from '@/static/icons/3.svg'
import counter4 from '@/static/icons/4.svg'
import animation from '@/mixins/animation'
export default {
    mixins: [animation],
    components: {
        counter1,
        counter2,
        counter3,
        counter4,
    }
}
</script>