<template>
  <div class="reactor-controls view">
    <BaseHeader
      back-icon
      v-bind:title="headerTitle"
      v-bind:handle-icon-click="routeHome"
    />
    <div class="rc-main">
      <div class="rc-sidebar">
        <BaseSidebar>
          <BaseSidebarItem
            title="Air"
            icon-name="icon-air"
            v-bind:handle-click="SET_AIR_ACTIVE"
          />
          <BaseSidebarItem
            title="Light"
            icon-name="icon-light"
            v-bind:handle-click="SET_LIGHT_ACTIVE"
          />
          <BaseSidebarItem
            title="Heater"
            icon-name="icon-heat"
            v-bind:handle-click="SET_HEATER_ACTIVE"
          />
        </BaseSidebar>
      </div>
      <div class="rc-controls">
        <component
          v-bind:is="currentControlPanel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import {
  SET_AIR_ACTIVE,
  SET_HEATER_ACTIVE,
  SET_LIGHT_ACTIVE,
} from '@/store/mutations.types';

import BaseHeader from '@/components/BaseHeader';
import BaseSidebar from '@/components/BaseSidebar';
import BaseSidebarItem from '@/components/BaseSidebarItem';
import LightControlPanel from '@/components/LightControlPanel';
import HeaterControlPanel from '@/components/HeaterControlPanel';
import AirControlPanel from '@/components/AirControlPanel';


export default {
  components: {
    BaseHeader,
    BaseSidebar,
    BaseSidebarItem,
    HeaterControlPanel,
    LightControlPanel,
    AirControlPanel,
  },
  computed: {
    ...mapGetters(['selectedControlPanel', 'selectedModuleName']),
    currentControlPanel() {
      return `${this.selectedControlPanel}ControlPanel`;
    },
    headerTitle() {
      return `${this.selectedModuleName} Controls`;
    },
  },
  methods: {
    ...mapMutations([SET_AIR_ACTIVE, SET_HEATER_ACTIVE, SET_LIGHT_ACTIVE]),
    routeHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables";

.reactor-controls {
  height: 100%;
}

.rc-header {
  background-color: $grey-300;
  padding: 20px 20px;
  font-size: 1.5em;

  .theme--light {
    &.v-btn{
      font-size: 1.4em;
      margin-right: .5em;
    }
  }
}

.rc-main {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "sidebar controls";
}

.rc-sidebar {
  grid-area: sidebar;
  padding-top: 1em;
}

.rc-controls {
  padding: 40px;
  grid-area: controls;
}

.icon-air {
  font-size: .7em;
  position: relative;
  left: 0.1em;
}

</style>
