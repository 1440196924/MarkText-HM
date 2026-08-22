<template>
  <div
    class="title-bar"
    :class="{ 'os-harmonyos': isHarmonyOS }"
  >
    <template v-if="isHarmonyOS">
      <div
        class="frameless-titlebar-button frameless-titlebar-toggle"
        @click.stop="handleMaximizeClick"
      >
        <div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 1024 1024"
          >
            <g transform="translate(1024, 0) scale(-1, 1)">
              <path
                v-show="!isMaximized"
                :d="harmonyMaximizePath"
              />
              <path
                v-show="isMaximized"
                :d="harmonyRestorePath"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        class="frameless-titlebar-button frameless-titlebar-minimize"
        @click.stop="handleMinimizeClick"
      >
        <div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 1024 1024"
          >
            <path :d="harmonyMinimizePath" />
          </svg>
        </div>
      </div>
      <div
        class="frameless-titlebar-button frameless-titlebar-close"
        @click.stop="handleCloseClick"
      >
        <div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 1024 1024"
          >
            <path :d="harmonyClosePath" />
          </svg>
        </div>
      </div>
    </template>
    <template v-else>
      <div
        class="frameless-titlebar-button frameless-titlebar-close"
        @click.stop="handleCloseClick"
      >
        <div>
          <svg
            width="10"
            height="10"
          >
            <path :d="windowIconClose" />
          </svg>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { closePath as windowIconClose, harmonyMinimizePath, harmonyRestorePath, harmonyMaximizePath, harmonyClosePath } from '../../assets/window-controls'
import { isHarmonyOS } from '@/util'

const isMaximized = ref(false)

onMounted(async () => {
  try {
    isMaximized.value = !!(await window.electron.windowControl.isMaximized())
  } catch {}
})

const handleCloseClick = () => {
  window.electron.windowControl.close()
}

const handleMinimizeClick = () => {
  window.electron.windowControl.minimize()
}

const handleMaximizeClick = () => {
  window.electron.windowControl.toggleMaximize()
}
</script>

<style scoped>
.title-bar {
  -webkit-app-region: drag;
  user-select: none;
  background: transparent;
  height: var(--titleBarHeight);
  box-sizing: border-box;
  color: var(--editorColor50);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
  transition: color 0.4s ease-in-out;
  cursor: default;
}

.frameless-titlebar-button {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 46px;
  height: var(--titleBarHeight);
  -webkit-app-region: no-drag;
}

.frameless-titlebar-button > div {
  position: absolute;
  display: inline-flex;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.frameless-titlebar-close:hover {
  background-color: rgb(228, 79, 79);
}

.frameless-titlebar-button svg {
  fill: #000000;
}

.frameless-titlebar-close:hover svg {
  fill: #ffffff;
}

/* HarmonyOS: three controls right-aligned (maximize | minimize | close). */
.os-harmonyos {
  text-align: right;
}

.os-harmonyos .frameless-titlebar-button {
  position: relative;
  display: inline-block;
  top: auto;
  right: auto;
  width: 40px;
  color: var(--editorColor50);
}

.os-harmonyos .frameless-titlebar-button svg {
  fill: currentColor;
}

.os-harmonyos .frameless-titlebar-minimize:hover,
.os-harmonyos .frameless-titlebar-toggle:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.os-harmonyos .frameless-titlebar-close:hover {
  background-color: #e81123;
}

.os-harmonyos .frameless-titlebar-close:hover svg {
  fill: #ffffff;
}
</style>
