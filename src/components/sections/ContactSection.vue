<template>

<GenericSection id="contact-section">
    <h1>Get in touch!</h1>

    <form class="gform" method="POST" 
        action="https://script.google.com/macros/s/AKfycbwRSKg41eBdC3XX2BihwRH-EdzZlqQx4Yqqsus_sXwHNDzcziimJ6ByyTg3T7zZa74G6g/exec"
    >
        <div class="form-elements">

            <input id="name" class="form-input" name="name" placeholder="Your name" type="text" required/>
            
            <input id="email" class="form-input" name="email" type="email" value=""
                required placeholder="your.name@email.com"/>
            
            <textarea id="message" class="form-input" name="message" rows="10"
                required placeholder="Your message"></textarea>
            
            <input class="hidden" id="honeypot" type="text" name="honeypot" value="" />

            <button id="form-submit" class="form-button" type="submit">
                Submit
            </button>
        </div>

        <div style="display:none" class="thankyou_message">
            <h2><i>Thank you</i> for your message! I will get back to you soon!</h2>
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
    width: 750px;
    max-width: 100%;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas:
        "name email" 
        "message message"
        "submit submit";

    margin: 10px auto;
    gap: 10px;

    @media(max-width: $md-screen-width) {
        grid-template-columns: 100%;
        grid-template-rows: auto;
        grid-template-areas:
            "name"
            "email" 
            "message"
            "submit";
    }
}

.form-button {
    @extend %clickable-primary;
    @extend %border-sm;

    color: $light-color;

    height: 40px;
    font-size: 16px;

    padding: 5px 10px;
}

#name {
    grid-area: name;
}

#email {
    grid-area: email;
}

#message {
    grid-area: message;
}

#form-submit {
    grid-area: submit;
}

</style>
