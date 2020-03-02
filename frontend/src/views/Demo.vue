<template>
  <div class="demo grey lighten-3">
    <div class="demo-container">
      <div class="card">
        <div class="reactor-card-temp">
          <span class="reactor-card-temp-val">{{ formatSensorData(sensorData, 'Prime1').temperature }}</span>
          <span class="reactor-card-data-unit reactor-card-temp-unit">°C</span>
        </div>
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
  import {LIVESTREAM_URL} from '@/constants/api.constants';
  import DemoLightControl from '@/components/DemoLightControl';
  import callApi from "../utils/api.utils";
  import {mapState} from "vuex";

  export default {
    components: {
      DemoLightControl,
    },
    data() {
      return {
        livestreamUrl: LIVESTREAM_URL,
      }
    },
    computed: {
      ...mapState({
        sensorData: state => state.sensors,
      }),
      formatSensorData() {
        return (sensorData, moduleName) => {
          const {temperature, OD} = sensorData[moduleName];
          const numTemp = Number(temperature);
          const numOD = Number(OD);

          // eslint-disable-next-line
          if (isNaN(numTemp) || isNaN(numOD)) {
            return {
              temperature,
              OD,
            };
          }

          const oneDecimalTemp = numTemp.toFixed(2);
          const twoDecimalOD = numOD.toFixed(2);

          return {
            temperature: oneDecimalTemp,
            OD: twoDecimalOD,
          };
        };
      },
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
    width: 100%;
    height: 75vh;
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

  .card {
    position: relative;
  }

  .reactor-card-temp {
    position: absolute;
    top:0;
    right: 4px;
    font-size: 2em;
  }

  .reactor-card-data-unit {
    vertical-align: super;
    font-size: .5em;
  }
</style>
