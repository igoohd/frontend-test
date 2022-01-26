<template>
  <div @click="emitButtonClick" class="button-wrapper">
    <div :class="{ '-filled': buttonActive }" class="heart"></div>
    <div :class="{ '-active': buttonActive }" class="animation"></div>
  </div>
</template>

<script>
export default {
  props: { isWishList: Boolean },

  data() {
    return {
      buttonActive: this.isWishList,
    };
  },

  methods: {
    emitButtonClick() {
      if (this.isWishList) {
        this.$emit("buttonClick", false);
      } else {
        this.buttonActive = !this.buttonActive;
        this.$emit("buttonClick", this.buttonActive);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.heart {
  position: relative;
  height: 25px;
  width: 25px;
  background: #c9c9c9;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 0 0 0 10px;
  transform: rotate(-45deg);
  cursor: pointer;

  &.-filled {
    background-color: #ff2727;
  }

  &::before {
    position: absolute;
    content: "";
    top: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    content: "";
    right: -50%;
    top: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
  }
}

.animation {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background: #ff2727;
  transform: rotate(-45deg);
  border-radius: 0 0 0 10px;
  cursor: pointer;
  visibility: hidden;

  &.-active {
    animation: popup 0.8s linear;
    visibility: visible;
  }

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    right: -50%;
    background: inherit;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: -50%;
    right: 0;
    background: inherit;
    border-radius: 50%;
  }
}

@keyframes popup {
  100% {
    transform: scale(1.5) rotate(-45deg);
    opacity: 0;
  }
}
</style>
