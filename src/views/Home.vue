<template>
  <div>
    <jktop/>
    <jkHeader/>
    <jknav/>
    <jkSlideshow/>
    <jkselect/>
    <jkrecommend/>
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

@Component({
  components: {
    jktop,
    jkHeader,
    jknav,
    jkSlideshow,
    jkselect,
    jkrecommend,
  },
})
export default class Home extends Vue {}
</script>
