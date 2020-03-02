<template>
  <div class="demo grey lighten-3">
    <div class="demo-container">
      <div class="card">
        <img class="livestream" :src="livestreamUrl" alt="">
        <div class="demo-controls">
          <div class="light-control">
            <div class="light-control-label">
              <span class="icon-sun"></span>
            </div>
            <DemoLightControl/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { LIVESTREAM_URL } from '@/constants/api.constants';
  import DemoLightControl from '@/components/DemoLightControl';

  export default {
    components: {
      DemoLightControl,
    },
    data() {
      return {
        livestreamUrl: LIVESTREAM_URL,
      }
    },
    mounted() {
      return;
      const {video, videoContainer} = this.$refs;
      const {offsetWidth, offsetHeight} = videoContainer;
      video.style.width = `${offsetWidth}px`;
      video.style.height = `${offsetHeight}px`;

      window.addEventListener('resize', () => {
        const {offsetWidth, offsetHeight} = videoContainer;
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
    background-color: white;
    padding-top: 5vh;
  }

  .demo-container {
    margin: 0 auto;
    max-width: 450px;
    width: 90%;
  }

  .livestream {
    height: 100%;
    width: 100%;
    max-height: 75vh;
    overflow: hidden;
  }

  .demo-controls {
    padding: 24px 12px;
    width: 100%;
  }

  .light-control {
    display: flex;
    align-items: center;
  }

  .light-control-label {
    display: flex;
    padding-right: .5em;
  }

  .icon-sun {
    font-size: 1.7em;
  }
</style>
