<template>
    <div class="calculator">
        <div class="calculator-nav">
            <button class="calculator-btn" 
                :class="{'--active' : currentTab === 'first'}"
                @click="currentTab = 'first'">Первый микрокредит</button>
            <button class="calculator-btn" 
                :class="{'--active' : currentTab === 'repeated'}"
                @click="currentTab = 'repeated'">Повторный микрокредит</button>
        </div>
        <div class="calculator-row" v-if="currentTab === 'first'">
            <div class="calculator-left">
                <div class="calculator-slider-wrp">
                    <button class="calculator-decrease" @click="decrease">
                        <range-arrow />
                    </button>
                    <div class="calculator-tooltip-wrp">
                        <p class="calculator-label">5 000</p>
                        <p class="calculator-label">30 000</p>
                        <p class="calculator-label">55 000</p>
                        <p class="calculator-label">80 000</p>
                        <p class="calculator-label">105 000</p>
                        <p class="calculator-label">130 000</p>
                    </div>
                    <client-only>
                        <round-slider
                            class="calculator-curved-slider"
                            editable-tooltip="false"
                            handle-size="68"
                            line-cap="round"
                            width="8"
                            :radius="radius"
                            max="5000"
                            min="130000"
                            startAngle="-120"
                            endAngle="+60"
                            start-value="0"
                            range-color="#5AE0B6"
                            path-color="#DEE1E5"
                            v-model="sliderValue"
                            :tooltip-format="formattedTooltip"
                            tooltip-color="#132333"
                            step="500"
                        />
                    </client-only>
                    <button class="calculator-increase" @click="increase">
                        <range-arrow />
                    </button>
                </div>
                <div class="calculator-date-wrp">
                    <div class="calculator-date-tooltip"> {{ date }} </div>
                    <client-only>
                        <vue-slider
                            :tooltip="'none'"
                            :contained="true"
                            :dotSize="60"
                            :min="5"
                            :max="30"
                            :data="data"
                            :marks="true" 
                            v-model="date" />
                    </client-only>
                </div>
                <div class="calculator-btn-wrp">
                    <button class="button">Получить деньги</button>
                </div>
            </div>
            <div class="calculator-right">
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <bag />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Вы берете</p>
                            <p class="calculator-text">70 000 ₸</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Сумма к возврату</p>
                            <p class="calculator-text">75 000 ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <calender />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Дата возврата</p>
                            <p class="calculator-text">10 июня 2020</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">На срок</p>
                            <p class="calculator-text">10 дней</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-divider"></div>
                <div class="calculator-reward">
                    <div>
                        <success />
                        <p class="calculator-label">Вознаграждение</p>
                        <p class="calculator-text">4 500 ₸</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="calculator-row" v-if="currentTab === 'repeated'">
            <div class="calculator-left">
                <div class="calculator-slider-wrp">
                    <button class="calculator-decrease" @click="decrease">
                        <range-arrow />
                    </button>
                    <div class="calculator-tooltip-wrp">
                        <p class="calculator-label">5 000</p>
                        <p class="calculator-label">30 000</p>
                        <p class="calculator-label">55 000</p>
                        <p class="calculator-label">80 000</p>
                        <p class="calculator-label">105 000</p>
                        <p class="calculator-label">130 000</p>
                    </div>
                    <client-only>
                        <round-slider
                            class="calculator-curved-slider"
                            editable-tooltip="false"
                            handle-size="68"
                            line-cap="round"
                            width="8"
                            :radius="radius"
                            max="5000"
                            min="130000"
                            startAngle="-120"
                            endAngle="+60"
                            start-value="0"
                            range-color="#5AE0B6"
                            path-color="#DEE1E5"
                            v-model="sliderValue"
                            :tooltip-format="formattedTooltip"
                            tooltip-color="#132333"
                            step="500"
                        />
                    </client-only>
                    <button class="calculator-increase" @click="increase">
                        <range-arrow />
                    </button>
                </div>
                <div class="calculator-date-wrp">
                    <div class="calculator-date-tooltip"> {{ date }} </div>
                    <client-only>
                        <vue-slider
                            :tooltip="'none'"
                            :contained="true"
                            :dotSize="60"
                            :min="5"
                            :max="30"
                            :data="data"
                            :marks="true" 
                            v-model="date" />
                    </client-only>
                </div>
                <div class="calculator-btn-wrp">
                    <button class="button">Получить деньги</button>
                </div>
            </div>
            <div class="calculator-right">
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <bag />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Вы берете</p>
                            <p class="calculator-text">70 000 ₸</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Сумма к возврату</p>
                            <p class="calculator-text">75 000 ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <calender />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Дата возврата</p>
                            <p class="calculator-text">10 июня 2020</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">На срок</p>
                            <p class="calculator-text">10 дней</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-divider"></div>
                <div class="calculator-reward">
                    <div>
                        <success />
                        <p class="calculator-label">Вознаграждение</p>
                        <p class="calculator-text">4 500 ₸</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import rangeArrow from '@/static/icons/range-arrow.svg'
import bag from '@/static/icons/bag.svg'
import calender from '@/static/icons/calender.svg'
import success from '@/static/icons/success.svg'
export default {
    data() {
        return {
            sliderValue: 5000,
            step: 25000,
            radius: 450,
            date: '5 дней',
            data: ['5 дней', '10 дней', '20 дней', '30 дней'],
            currentTab: 'first'
        }
    },
    mounted() {
        if (document.body.clientWidth <= 480) {
            this.radius = 350
        }
        if (document.body.clientWidth <= 376) {
            this.radius = 300
        }
        if (document.body.clientWidth <= 321) {
            this.radius = 270
        }
    },
    methods: {
        formattedTooltip(arg) {
            return arg.value + '₸'
        },
        increase() {
            if (this.sliderValue >= 130000) return
            this.sliderValue += this.step
        },
        decrease() {
            if (this.sliderValue <= 5000) return
            this.sliderValue -= this.step
        },
    },
    components: {
        rangeArrow,
        bag,
        calender,
        success
    }
}
</script>