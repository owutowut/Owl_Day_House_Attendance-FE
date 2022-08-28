import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Vue from 'vue'
Vue.use(VuePersianDatetimePicker, {
  name: 'date-picker',
  props: {
    format: 'YYYY-MM-DD',
    displayFormat: 'jYYYY-jMM-jDD',
    editable: false,
    placeholder: 'ปปปป/ดด/วว',
    altFormat: 'YYYY-MM-DD',
    autoSubmit: true,
    locale: "th",
    timezone: false
    //...
    //... And whatever you want to set as default.
    //...
  }
});
