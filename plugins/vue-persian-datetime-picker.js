import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Vue from 'vue'
Vue.use(VuePersianDatetimePicker, {
  name: 'date-picker',
  props: {
    format: 'YYYY-MM-DD HH:mm',
    displayFormat: 'jYYYY-jMM-jDD',
    editable: false,
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    autoSubmit: true,
    locale: "en",
    timezone: false
    //...
    //... And whatever you want to set as default.
    //...
  }
});
