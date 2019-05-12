import {Vue, Component, Prop} from 'vue-property-decorator';
import postSvc from '@/services/post';

@Component
export default class PostCreate extends Vue {
  private tableData: any = [];
  private multipleSelection: any = [];

  private total: number = 1;
  private currentPage: number = 1;
  private pageSize: number = 1;

  private params: any = {
    title: '',
    slug: '',
    status: '',
  };

  private toggleSelection(rows: any) {
    const pickTable = this.$refs.multipleTable as any;
    if (rows) {
      rows.forEach((row: any) => {
        pickTable.toggleRowSelection(row);
      });
    } else {
      pickTable.clearSelection();
    }
  }

  private handleSelectionChange(val: any) {
    this.multipleSelection = val;
  }

  private mounted() {
    this.fetchList();
  }

  private searchCall() {
    this.currentPage = 1;
    this.fetchList();
  }
  private fetchList() {
    console.log('fetchList...');
    const payload = Object.assign({currentPage: this.currentPage, pageSize: this.pageSize}, this.params);
    postSvc.findAll(payload).then((result: any) => {
      this.tableData = result.items;
      this.total = result.total;
    });
  }
  private handleSizeChange(val: number) {
    this.pageSize = val;
    this.fetchList();
  }

  private handleCurrentChange(val: number) {
    this.currentPage = val;
    this.fetchList();
  }
}
