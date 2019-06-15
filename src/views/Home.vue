<template>
<div>
    <jktop />
    <jkHeader />
    <jkSlideshow />
    <jkselect />
    <jkrecommend />
    <jkgou />
    <!-- <jknav /> -->
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import jktop from '../components/jktop.vue'; // @ is an alias to /src
import jkHeader from '../components/jkHeader.vue';
import jkSlideshow from '../components/jkSlideshow.vue';
import jkselect from '../components/jkselect.vue';
import jkrecommend from '../components/jkrecommend.vue';
import jkgou from '../components/jkgou.vue';

export default Vue.extend({
    components: {
        jktop,
        jkHeader,
        jkSlideshow,
        jkselect,
        jkrecommend,
        jkgou,
    },
    created() {
        this.$store.state.CommonBottomShow = true;
    },
});
</script>
