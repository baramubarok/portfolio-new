<template>
  <dialog
    ref="dialog"
    class="project-lightbox"
    :aria-label="project ? `${project.name} image preview` : 'Project image preview'"
    @cancel="handleCancel"
    @close="handleClose"
  >
    <div class="project-lightbox-backdrop" @click.self="close">
      <div class="project-lightbox-content">
        <div class="flex items-center justify-between gap-4">
          <div v-if="project">
            <p class="path-label">image --preview</p>
            <h2 class="mt-2 font-display text-2xl font-semibold text-cream md:text-3xl">{{ project.name }}</h2>
          </div>
          <button type="button" class="project-lightbox-close" aria-label="Close image preview" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <img v-if="project" :src="project.image" :alt="`${project.name} project preview`" class="project-lightbox-image" />
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import type { Project } from '~/data/projects'

const props = defineProps<{ open: boolean; project: Project | null }>()
const emit = defineEmits<{ 'update:open': [value: boolean] }>()
const dialog = ref<HTMLDialogElement | null>(null)

const syncDialog = async (isOpen: boolean) => {
  await nextTick()
  if (!dialog.value) return
  if (isOpen && !dialog.value.open) dialog.value.showModal()
  else if (!isOpen && dialog.value.open) dialog.value.close()
}

const close = () => emit('update:open', false)
const handleCancel = () => close()
const handleClose = () => { if (props.open) emit('update:open', false) }

watch(() => props.open, syncDialog, { immediate: true })
onMounted(() => syncDialog(props.open))
onUnmounted(() => { if (dialog.value?.open) dialog.value.close() })
</script>