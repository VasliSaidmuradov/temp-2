<template>
    <div class="get-steps">
        <div class="get-steps-block --black --circle">
            <div class="layout-container">
                <div class="get-steps-row">
                    <div class="get-steps-left">
                        <h3 class="section-title animation-item">Шаг 1. Выберете необходимую сумму и срок!</h3>
                        <p class="get-steps-text animation-item">Калькулятор автоматически рассчитает сумму и срок возврата, более того, будут указаны сумма вознаграждения (только для повторных займов) и сумма комиссии за верификацию. При возврате займа Вы не получите никаких сюрпризов в виде скрытых комиссий. </p>
                        <h4 class="get-steps-heading animation-item --block">
                            Мы всегда следуем нашим принципам: <b>Прозрачность и честность!</b>
                        </h4>
                    </div>
                    <div class="get-steps-right"></div>
                </div>
            </div>
        </div>
        <div class="get-steps-block --z2">
            <div class="layout-container">
                <div class="get-steps-row">
                    <div class="get-steps-left">
                        <h3 class="section-title animation-item">Шаг 2. Заполнение анкеты</h3>
                        <p class="get-steps-text animation-item">Вы попадете на страницу заполнения анкеты, где необходимо будет указать свои данные. Заполнение анкеты займет не более 5 минут, при этом никаких подтверждающих документов, удостоверяющих Вашу личность, а также справок о доходах, либо месте работы от Вас не потребуется! Единственное условие – указать о себе правдивые данные, т.к. это будет влиять на скорость рассмотрения заявки</p>
                        <h4 class="get-steps-heading animation-item --block">
                            Мы постараемся удовлетворить <b>Все Ваши пожелания!</b>
                        </h4>
                    </div>
                    <div class="get-steps-right">
                        <img class="animation-item" src="/img/get-steps1.png" alt="CashU image">
                    </div>
                </div>
            </div>
        </div>
        <div class="get-steps-block --black --z3">
            <div class="layout-container">
                <div class="get-steps-row">
                    <div class="get-steps-left">
                        <h3 class="section-title animation-item">Шаг 3. Подписание договора</h3>
                        <p class="get-steps-text animation-item">На указанный Вами телефон поступит SMS-сообщение с цифровым кодом, с помощью которого Вы сможете подписать договор получения займа, предварительно ознакомившись с ним в личном кабинете. Все условия, выбранные Вами будут прописаны в договоре, Вам ничего не придется заполнять вручную, распечатывать и ставить свою подпись.</p>
                        <h4 class="get-steps-heading animation-item">
                            Подписать договор — <b>легко!</b>
                        </h4>
                    </div>
                    <div class="get-steps-right">
                        <img src="/img/get-steps2.png" alt="CashU image" class="animation-item">
                    </div>
                </div>
            </div>
        </div>
        <div class="get-steps-block --z4 --padding-bottom">
            <div class="layout-container">
                <div class="get-steps-row">
                    <div class="get-steps-left">
                        <h3 class="section-title animation-item">Шаг 4. Получение денег</h3>
                        <p class="get-steps-text animation-item">
                            В случае одобрения займа, Вы получите необходимую сумму на банковский счет либо банковскую карту, которые Вы указали в анкете, в течении нескольких часов (скорость зачисления зависит от Вашего банка). Мы отправляем деньги с 9:00 до 18:00 по будням. Рассматриваем заявки круглосуточно и без выходных. 
                        </p>
                        <p class="get-steps-text animation-item">
                            Money Express выдает займ даже тем, у кого плохая кредитная история, либо вообще ее нет. 
                        </p>
                    </div>
                    <div class="get-steps-right">
                        <img src="/img/get-steps3.png" alt="CashU image" class="animation-item">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        let block = document.querySelectorAll('.get-steps-block')
        block.forEach((b) => {
            let item = b.querySelectorAll('.animation-item')
            let stepsScene = this.$scrollmagic.scene({
                triggerElement: b
            })
            .setTween(
                gsap.from(item, {opacity: 0, y: 15, duration: 0.4, stagger: 0.1, ease: 'back.out(3)'})
            )
            this.$scrollmagic.addScene(stepsScene)
        })
    }
}
</script>