<template>
<div>
    This's NewPage!
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    created() {
        this.$store.state.CommonBottomShow = true;
    },
});
</script>
