<template>
  <div class="demo">
    <div ref="videoContainer"  class="demo-stream-container">
      <img
        ref="video"
        src="http://10.0.0.25:8085/"
        alt="live reactor stream"
      >
    </div>
    <div class="demo-controls" />
  </div>
</template>

<script>
export default {
  mounted() {
    const { video, videoContainer } = this.$refs;
    const { offsetWidth, offsetHeight } = videoContainer;
    video.style.width = `${offsetWidth}px`;
    video.style.height = `${offsetHeight}px`;

    window.addEventListener('resize', () => {
      const { offsetWidth, offsetHeight } = videoContainer;
      video.style.width = `${offsetWidth}px`;
      video.style.height = `${offsetHeight}px`;
    });
  },
};
</script>

<style>
  .demo {
    height: 100%;
    color: black;
    background-color: lightgrey;
  }

  .demo-stream-container {
    width: 100vw;
    height: 70vh;
  }

  .demo-stream-container img {
  }


  .demo-controls {
    background-color: lightseagreen;
    width: 100vw;
    height: 150px;
  }

</style>
