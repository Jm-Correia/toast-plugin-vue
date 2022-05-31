<script setup lang="ts">
import { inject } from 'vue';
import { toast } from '../../plugin/Toast';

const toastModal = inject("toast") as toast;
const emitToast = toastModal.hiden

</script>

<template>
    <Teleport to="body" v-if="emitToast">
        <ToastView :position="$toast.localOptions.position" :title="$toast.localOptions.title"
            :message="$toast.localOptions.message" :toastType="$toast.localOptions.toastType" />
    </Teleport>
</template>
