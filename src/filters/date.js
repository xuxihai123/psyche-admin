import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('date', function(input, formatStr) {
  return dayjs(input).format(formatStr);
});
