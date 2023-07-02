<template>

<GenericSection id="contact-section">
    <h1>Get in touch!</h1>


    <form class="gform" method="POST" 
        action="https://script.google.com/macros/s/AKfycbwRSKg41eBdC3XX2BihwRH-EdzZlqQx4Yqqsus_sXwHNDzcziimJ6ByyTg3T7zZa74G6g/exec"
    >
        <div style="display:none" class="error-message">
            <h2>Whoops. Something went wrong</h2>
            <p>We are sorry for the inconvenience. Please contact me at <a href="mailto:vansantennick@gmail.com">vansantennick@gmail.com</a></p>
        </div>

        <div class="form-elements">

            <div class="form-container">
                <input id="name" class="form-input" name="name" placeholder="Your name" type="text" required autocomplete="name"/>
            
                <input id="email" class="form-input" name="email" type="email"
                    required placeholder="your.mail@email.com"
                    autocomplete="email" />
                
                <textarea id="message" class="form-input" name="message" rows="10"
                    required placeholder="Your message"></textarea>
                
                <input class="hidden" id="honeypot" type="text" name="honeypot" value="" />

                <button id="form-submit" class="form-button" type="submit">
                    Submit
                </button>
            </div>

            <ContactMailIconThin class="contact-icon"/>
        </div>

        <LoadIcon style="display:none" class="load-element"/>

        <div style="display:none" class="thankyou_message">
            <h2><i>Thank you</i> for your message! I will get back to you soon!</h2>
        </div>
    </form>
    
</GenericSection>

</template>

<script>

import ContactMailIconThin from "@/assets/icons/ContactMailIconThin.vue";
import LoadIcon from "@/components/LoadIcon.vue";
import GenericSection from "./GenericSection.vue";

export default {
    components: { ContactMailIconThin, GenericSection, LoadIcon },
    mounted() {
        // Set min height, such that the section does not shrink during loading, or on a success message
        this.$el.style.minHeight = this.$el.offsetHeight + "px";
    }
};

</script>

<style lang="scss" scoped>

.form-elements {
    position: relative;

    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-rows: auto;
    grid-template-areas: "form icon";

    @media(max-width: $screen-width-lg) {
        grid-template-columns: 100%;
        grid-template-rows: auto;
        grid-template-areas:
            "form"
    }
}

.form-container {

    max-width: calc(min(100%, 750px));

    grid-area: form;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas:
        "name email" 
        "message message"
        "submit submit";

    margin-top: 10px;
    gap: 10px;

    @media(max-width: $screen-width-md) {

        grid-template-columns: 100%;
        grid-template-rows: auto;
        grid-template-areas:
            "name"
            "email" 
            "message"
            "submit";
    }
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
.form-button {
    @extend %clickable-primary;
    @extend %border-sm;

    color: var(--clr-light);

    height: 40px;
    font-size: 16px;

    padding: 5px 10px;
}

.contact-icon {

    grid-area: icon;

    width: 75%;
    margin: auto;   

    fill: var(--clr-primary);
}

.load-element {
    color: var(--clr-primary);
}

</style>
