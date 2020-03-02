<template>
  <SliderControl
    :level="lampLevel"
    :level-label-func="getPercentLabel"
    @slider-move="dimLamp"
    @slider-move-end="updateIntensity"
  />
</template>

<script>
import io from 'socket.io-client';
import { mapActions, mapGetters } from 'vuex';
import { UPDATE_MODULE_STATE, UPDATE_MODULE_PARAMS } from '@/store/actions.types';
import { getPercentLabel } from '@/utils/controlPanel.utils';
import { DIM_LAMP_SOCKET_URL } from '@/constants/api.constants';

import SliderControl from './SliderControl';

const socket = io(DIM_LAMP_SOCKET_URL);

export default {
  name: 'LightControlPanel',
  components: {
    SliderControl,
  },
  computed: {
    ...mapGetters(['lamp', 'activeReactionId', 'selectedModuleName']),
    lampLevel() {
      return Number(this.lamp.level);
    },
  },
  mounted() {
    socket.on('connect', () => { console.log('socket connected!') });
  },
  methods: {
    ...mapActions([UPDATE_MODULE_STATE, UPDATE_MODULE_PARAMS]),
    updateIntensity([level]) {
      this.UPDATE_MODULE_PARAMS({
        actuatorType: 'Lamp',
        newParams: { level },
      });
    },
    dimLamp([sliderVal]) {
      const socketMessage = {
        level: sliderVal,
        dest: this.selectedModuleName,
        id: '5c9a57c3e5e2c205fcd15903',
      };

      socket.emit('dim lamp', socketMessage);
    },
    getPercentLabel,
  },
};
</script>

<style lang="scss" >
  .slider-control {
    width: 100%;
  }

  .slider-control-slider {
    width: 100%;
  }

  .slider-control-level {
    margin-left: 0;
    padding: 0 .5em;
    width: auto;
    text-align: center;

  }

  .noUi-connects {
    background-color: #dddada;
  }
</style>
