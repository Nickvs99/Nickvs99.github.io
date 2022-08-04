<template>

<GenericSection id="contact-section">
    <h1>Get in touch!</h1>

    <form class="gform" method="POST" 
        action="https://script.google.com/macros/s/AKfycbwRSKg41eBdC3XX2BihwRH-EdzZlqQx4Yqqsus_sXwHNDzcziimJ6ByyTg3T7zZa74G6g/exec"
    >
        <div class="form-elements">

            <input id="name" class="form-input" name="name" placeholder="Your name" />

            <textarea id="message" class="form-input" name="message" rows="10"
                placeholder="Your message"></textarea>
            
            <input id="email" class="form-input" name="email" type="email" value=""
                required placeholder="your.name@email.com"/>

            <input class="hidden" id="honeypot" type="text" name="honeypot" value="" />

            <button class="form-button" type="submit">
                Submit
            </button>
        </div>

        <div style="display:none" class="thankyou_message">

            <h2><i>Thank you</i> for your message! I will get back to you soon!
            </h2>
        </div>

    </form>
</GenericSection>

</template>

<script>

import GenericSection from "./GenericSection.vue"
export default {
  components: { GenericSection }
}

</script>

<style lang="scss" scoped>

.form-elements {
    width: 500px;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    
    margin: 10px 0;
}


.form-input { 
    background-color: $light-color;

    color: $primary-color;
    font-size: 16px;
    padding: 5px 10px;

    height: 40px;
    
    border: 2px solid $primary-color-dark;
    border-radius: 5px;

    &::placeholder{
        color: $primary-color;
    }
}

textarea.form-input {
    height: 200px;
    padding-top: 15px;
}

.form-button {
    background-color: $primary-color;
    color: $light-color;

    height: 40px;
    font-size: 16px;

    padding: 5px 10px;
    
    border: 2px solid $primary-color-dark;
    border-radius: 5px;
}

</style>
