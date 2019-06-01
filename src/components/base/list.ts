import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class BaseList extends Vue {
  public total: number = 1;
  public currentPage: number = 1;
  public pageSize: number = 10;
  public params: any = {};

  public fetchList() {
    throw Error('yet not implement!');
  }

  public searchCall() {
    this.currentPage = 1;
    this.fetchList();
  }

  public handleSizeChange(val: number) {
    this.pageSize = val;
    this.fetchList();
  }

  public handleCurrentChange(val: number) {
    this.currentPage = val;
    this.fetchList();
  }
}
