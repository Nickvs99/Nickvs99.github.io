<template>

<GenericSection id="contact-section">
    <h1>Contact</h1>

    <form class="gform" method="POST" 
        action="https://script.google.com/macros/s/AKfycbwRSKg41eBdC3XX2BihwRH-EdzZlqQx4Yqqsus_sXwHNDzcziimJ6ByyTg3T7zZa74G6g/exec"
    >
        <div class="form-elements">

            <div>
                <label for="name">Name: </label>
                <input id="name" name="name" placeholder="What your Mom calls you" />
            </div>

            <div>
                <label for="message">Message: </label>
                <textarea id="message" name="message" rows="10"
                    placeholder="Tell us what's on your mind..."></textarea>
            </div>

            <div>
                <label for="email"><em>Your</em> Email Address:</label>
                <input id="email" name="email" type="email" value=""
                    required placeholder="your.name@email.com"/>
            </div>

            <div>
                <label for="color">Favourite Color: </label>
                <input id="color" name="color" placeholder="green" />
            </div>

            <div class="honeypot-field">
                <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
                <input id="honeypot" type="text" name="honeypot" value="" />
            </div>

            <button>
                &nbsp;Send
            </button>
        </div>

        <div style="display:none" class="thankyou_message">
            <!-- You can customize the thankyou message by editing the code below -->
            <h2><em>Thanks</em> for contacting us! We will get back to you soon!
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

<style>

#contact-section {
    background-color: yellow;
}

</style>
