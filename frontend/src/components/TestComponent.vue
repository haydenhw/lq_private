<template>
  <div class="test-wrapper">
    <HeaterControlPanel />
  </div>
</template>

<script>
import HeaterControlPanel from './HeaterControlPanel';

export default {
  name: 'Test',
  components: {
    HeaterControlPanel,
  },
};

</script>

<style>
.test-wrapper {
  padding-left: 20%;
  margin-top: 50px;
  width: 600px;
}

.test-card {
  padding: 20px;
}
</style>
