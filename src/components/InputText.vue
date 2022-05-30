<script setup lang="ts">
import { inject } from 'vue';
import { Position, ToastType } from '../options';
import { toast } from '../plugin/Toast';

const toastModal = inject("toast") as toast;

const clickButton = () => {
    if (toastModal) {
        toastModal.setToast(
            {
                message: "MSG API HERE.",
                position: Position.topRight,
                title: 'SUCESS',
                toastType: ToastType.sucess,
                duration: 5000
            });
        toastModal.show();
    }

}
</script>

<template>
    <h1>Hello wold</h1>
    <button @click="clickButton">Toast</button>

</template>