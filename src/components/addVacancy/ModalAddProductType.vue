<template>
  <div class="modal fade" id="modalAddProductType">
    <button data-dismiss="modal" class="d-none" ref="modalClose"></button>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form>
          <div class="modal-body pb-0">
            <h3 class="text-center">Добавление типа продукта</h3>
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
    name: "ModalAddProductType",
    components: {InputText},
    data() {
      return {
        data: {
          id: 'inputAddProductType',
          label: 'Тип продукта',
          name: 'inputAddProductType'
        },
        value: ''
      }
    },
    methods: {
      ...mapActions({
        PRODUCT_TYPE_ADD: 'productType/PRODUCT_TYPE_ADD'
      }),
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.PRODUCT_TYPE_ADD({name: this.value})
              .then(res => {
                if (res.ok) {
                  this.$refs.modalClose.click();
                  this.$emit('newProductType');
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