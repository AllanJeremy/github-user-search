<template>
  <div class="bg-image" :style="backgroundStyle">
    <div v-if="overlay && !plain" class="overlay" :style="overlayStyle"></div>
  </div>

  <slot></slot>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackgroundImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    opacity: {
      type: String,
      default: '1',
      description:
        'The opacity of the background image. Note that this also affects the opacity of the overlay since the overlay is a child of the background image.',
    },
    position: {
      type: String,
      default: 'center',
    },
    //* Blur settings
    blur: {
      type: Boolean,
      default: true,
    },
    blurRadius: {
      type: String,
      default: '4px',
      description: 'This will only take effect if blur is set to true',
    },

    //* Overlay settings
    overlay: {
      type: Boolean,
      default: false,
    },
    overlayColor: {
      type: String,
      default: '#000',
    },
    overlayOpacity: {
      type: String,
      default: '0.35',
    },

    //
    plain: {
      type: Boolean,
      default: false,
      description:
        'If true, the image will be displayed as-is without any filters or overlay.',
    },

    //
    zIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    backgroundStyle() {
      const style = {
        backgroundImage: `url('${this.src}')`,
        backgroundPosition: this.position,
        opacity: this.opacity || 1,
        zIndex: this.zIndex || 0,
      };

      // Do not apply blur if an overlay is present
      if (this.blur && !this.overlay && !this.plain) {
        style.filter = `blur(${this.blurRadius})`;
        style.transform = 'scale(1.03)';
        style.overflow = 'hidden';
      }

      return style;
    },
    overlayStyle() {
      const style = {
        backgroundColor: this.overlayColor || '#000',
        opacity: this.overlayOpacity,
      };

      return style;
    },
  },
});
</script>

<style lang="scss" scoped>
.bg-image {
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.overlay {
  //
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
