<template>
  <div class="start">
    <div>
      <div class="Rating-gray" v-for="(starts, idx) in Start" :key="starts.id">
        <i v-for="(item, index) in itemClasses(idx)" :key="index" :class="item"></i>
      </div>
    </div>
    <div>
      <div class="Rating-gray" v-for="(starts2, idx) in Start2" :key="starts2.id">
        <i v-for="(item, index) in itemClasses2(idx)" :key="index" :class="item"></i>
      </div>
    </div>
    <div>
      <div class="Rating-gray" v-for="(starts3, idx) in Start3" :key="starts3.id">
        <i v-for="(item, index) in itemClasses3(idx)" :key="index" :class="item"></i>
      </div>
    </div>
  </div>
</template>
<script>
const LENGTH = 5;
const CLS_ON = 'fas fa-star';
const CLS_HALF = 'fas fa-star-half-alt';
const CLS_OFF = 'far fa-star';

export default {
  name: 'Rating',
  props: {
    Start: {
      type: Array,
    },
    Start2: {
      type: Array,
    },
    Start3: {
      type: Array,
    },
    rating: Number,
  },
  methods: {
    itemClasses(idx) {
      const result = [];
      const score = Math.floor(this.Start[idx].text * 2) / 2;
      const hasDecimal = score % 1 !== 0;
      const integer = Math.floor(score);

      for (let i = 0; i < integer; i += 1) {
        result.push(CLS_ON);
      }

      if (hasDecimal) {
        result.push(CLS_HALF);
      }

      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }

      return result;
    },
    itemClasses2(idx) {
      const result = [];
      const score = Math.floor(this.Start2[idx].text * 2) / 2;
      const hasDecimal = score % 1 !== 0;
      const integer = Math.floor(score);

      for (let i = 0; i < integer; i += 1) {
        result.push(CLS_ON);
      }

      if (hasDecimal) {
        result.push(CLS_HALF);
      }

      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }

      return result;
    },
    itemClasses3(idx) {
      const result = [];
      const score = Math.floor(this.Start3[idx].text * 2) / 2;
      const hasDecimal = score % 1 !== 0;
      const integer = Math.floor(score);

      for (let i = 0; i < integer; i += 1) {
        result.push(CLS_ON);
      }

      if (hasDecimal) {
        result.push(CLS_HALF);
      }

      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }

      return result;
    },
  },
};
</script>

<style scoped>
.Rating-gray {
  margin-right: 1.066667vw;
  color: #ffbe00;
  display: flex;
  padding: 10px 0;
}
.start {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
