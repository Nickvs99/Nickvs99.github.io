<template>


<ParagraphImageLayout>
    <template #paragraph-start>
        <p> 
            MusicMatch was created to make it easy to share the love for music between people.
            MusicMatch analyses your Spotify account, through the Spotify API, and shows statistics about your music taste, such as your favourite artists and genres.
        </p>

        <p>
            This data can be compared between users to create their own combined personal Spotify playlist, which both users should enjoy. 
            Perfect for a roadtrip or a party.
        </p>

        <p> Unfortanetly, MusicMatch is no longer available. </p>
    </template>
</ParagraphImageLayout>
    

</template>

<script>

import ParagraphImageLayout from "@/components/ParagraphImageLayout.vue";

export default {
    components: { ParagraphImageLayout },
};

</script>
