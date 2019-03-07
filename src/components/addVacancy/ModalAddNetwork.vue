<template>
  <div class="modal fade" id="modalAddNetwork">
    <button data-dismiss="modal" class="d-none" ref="modalClose"></button>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form>
          <div class="modal-body pb-0">
            <h3 class="text-center">Добавление сети</h3>
            <InputText :data="data"
                       v-validate="'required'"
                       :error="errors.first(data.name)"
                       :name="data.name"
                       v-model="value"
            />
          </div>
          <div class="modal-footer pt-0">
            <button class="btn btn-primary" @click.prevent="validateBeforeSubmit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import InputText from "../inputs/InputText";
  import {mapActions} from 'vuex';

  export default {
    name: "ModalAddNetwork",
    components: {InputText},
    data() {
      return {
        data: {
          id: 'inputAddNetwork',
          label: 'Сеть',
          name: 'inputAddNetwork'
        },
        value: ''
      }
    },
    methods: {
      ...mapActions({
        NETWORK_ADD: 'network/NETWORK_ADD'
      }),
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.NETWORK_ADD({name: this.value})
              .then(res => {
                if (res.ok) {
                  this.$refs.modalClose.click();
                  this.$emit('newNetwork');
                }
              })
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>