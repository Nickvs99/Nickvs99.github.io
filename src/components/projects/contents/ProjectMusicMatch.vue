<template>


<ParagraphImageLayout>
    <template #paragraph-start>
        <p> 
            MusicMatch was created to make it easy to share the love for music between people.
            MusicMatch analyses your Spotify account, through the Spotify API, and shows statistics about your music taste, such as your favourite artists and genres.
        </p>

        <p>
            This data can be compared between users to create their own personal Spotify playlist, which both users should enjoy. 
            Perfect for a long drive or a small party.
        </p>

        <p> Give it a try at <a href="https://spotifyfy.herokuapp.com" target="_blank">https://spotifyfy.herokuapp.com</a>! </p>
    </template>
</ParagraphImageLayout>
    

</template>

<script>

import ParagraphImageLayout from "@/components/ParagraphImageLayout.vue";

export default {
    components: { ParagraphImageLayout },
};

</script>
