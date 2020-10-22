<template>
  <div class="home">
    <!-- <Header /> -->
    <Start :Start="result.Start" :Start2="result.Start2" :Start3="result.Start3" />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from '@/components/Footer.vue';
// import Header from '@/components/Header.vue';
import Start from '@/components/Start.vue';

export default {
  name: 'Home',
  components: {
    // Footer,
    // Header,
    Start,
  },
  computed: {
    result() {
      return this.$store.state.result;
    },
  },
  created() {
    this.$store.dispatch('getData');
  },
};
</script>
