import press from "./press";

export default {
    install (Vue) {
        Vue.directive("press", press);
        // Vue.directive('other-directive', myOtherDirective)
    }
};