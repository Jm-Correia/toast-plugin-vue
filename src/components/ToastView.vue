<script setup lang="ts">
import { defineProps, PropType, onMounted } from 'vue'
import { Position, ToastType } from '../options/Configuration'
import Event from '../options/event'

const props = defineProps({
    title: {
        type: String,
        required: false,
        default: ''
    },
    message: {
        type: String,
        required: false,
        default: "Default"
    },
    position: {
        type: Object as PropType<Position>,
        required: false,
        default: Position.topRight
    },
    toastType: {
        type: Object as PropType<ToastType>,
        default: ToastType.info
    }
})



</script>
<template>
    <div :class="`container ${toastType} ${position}`">
        <div class="internal">
            <strong v-if="title">{{ title }}</strong>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 360px;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    margin: 10px 10px 10px 10px;
    position: absolute;
    z-index: 10;
}

.internal {
    flex: 1;
}

.internal>p {
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.8;
    line-height: 20px;
}

.sucess {
    background: #e6fffa;
    color: #2e656a;
    align-items: center;
}

.info {
    background: #ebf8ff;
    color: #3172b7;
}

.error {
    background: #fddede;
    color: #c53030;
}

.topRight {
    top: 0;
    right: 0;
}

.topLeft {
    top: 0;
    left: 0;
}

.downRight {
    bottom: 0;
    right: 0;
}

.downLeft {
    bottom: 0;
    left: 0;
}
</style>