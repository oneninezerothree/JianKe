<template>
<div>
    This's HomePage!
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    created() {
        this.$store.state.CommonBottomShow = true;
        this.$store.state.loaddingStatus = 0;
    },
});
</script>
