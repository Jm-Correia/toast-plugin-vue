import {App, reactive, ref} from "vue";
import {Position, ToastType} from '../options';
import ToastView from '../components/ToastView.vue'

type Options = {
    title?: String,
    message: String,
    position?: Position,
    toastType?: ToastType
    duration?: Number
}


export default {
    install(app: App){
        const toast = {
            hiden: ref(false),
            localOptions:reactive(<Options>{}),
            setToast(options: Options){
                const {message, position, title, toastType, duration = 2000} = options
                this.localOptions = {
                    message, position,title, toastType, duration
                }
            },
            show(){
                setTimeout(()=>{
                    this.hiden.value = false
                    this.localOptions = {}
                    console.log(this.hiden.value, this.localOptions)              
                }, this.localOptions.duration)
                this.hiden.value = true
            }
        }
        app.component('ToastView', ToastView)
        app.config.globalProperties.$toast = toast
        app.provide("toast", toast)
    }
}

export interface toast{
    hiden: boolean;
    localOptions: Options;
    setToast: (options: Options) => any;
    show:() => any;
}

declare module "@vue/runtime-core"{
    interface ComponentCustomProperties{
        $toast: toast
    }
}