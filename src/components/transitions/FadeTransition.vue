
<template>

<Transition name="fade" mode="out-in">
    <slot />
</Transition>

</template>
  
<style>

.transition-container {
    background-color: red;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

</style>
