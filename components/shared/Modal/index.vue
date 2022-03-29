<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div
        class="modal d-flex align-items-center"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="modal-content">
          <button
            type="button"
            class="btn-close"
            aria-label="Close modal"
            @click="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.modal {
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-content {
  background-color: transparent;
  border: 0;
  text-align: center;
  max-width: 850px;
  width: 100%;
}

.modal-content > div {
  border-radius: 8px;
}

.btn-close {
  position: absolute;
  top: -60px;
  right: -40px;
  border: none;
  font-size: 60px;
  padding: 0;
  cursor: pointer;
  color: #ffffff;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
