import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Vue from 'vue'
Vue.use(VuePersianDatetimePicker, {
  name: 'date-picker',
  props: {
    format: 'YYYY-MM-DD',
    displayFormat: 'jYYYY-jMM-jDD',
    editable: false,
    placeholder: 'วว/ดด/ปปปป',
    altFormat: 'YYYY-MM-DD',
    autoSubmit: true,
    locale: "en",
    timezone: false
    //...
    //... And whatever you want to set as default.
    //...
  }
});
