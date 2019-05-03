import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('date', (input: string, formatStr: string) => dayjs(input).format(formatStr));
