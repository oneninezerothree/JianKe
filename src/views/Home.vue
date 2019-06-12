<template>
  <div>
    <jktop/>
    <jkHeader/>
    <jkSlideshow/>
    <jkselect/>
    <jkrecommend/>
    <jkgou/>
    <jknav/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import jktop from '@/components/jktop.vue'; // @ is an alias to /src
import jkHeader from '@/components/jkHeader.vue';
import jknav from '@/components/jknav.vue';
import jkSlideshow from '@/components/jkSlideshow.vue';
import jkselect from '@/components/jkselect.vue';
import jkrecommend from '@/components/jkrecommend.vue';
import jkgou from '@/components/jkgou.vue';

@Component({
  components: {
    jktop,
    jkHeader,
    jkSlideshow,
    jkselect,
    jkrecommend,
    jknav,
    jkgou,
  },
})
export default class Home extends Vue {}
</script>
