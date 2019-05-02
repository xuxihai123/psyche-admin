<template>
  <div class="list-container">
    <div class="list-header">
      <el-form :inline="true" :model="params" class="filters">
        <el-form-item label="审批人">
          <el-input v-model="params.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="params.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchCall">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-body">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="slug" label="别名"></el-table-column>
        <el-table-column prop="meta_title" label="meta_title"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">{{ scope.row.created_at|date('YYYY-MM-DD HH:mm:ss') }}</template>
        </el-table-column>
        <el-table-column label="发布时间">
          <template slot-scope="scope">{{ scope.row.publish_at|date('YYYY-MM-DD HH:mm:ss') }}</template>
        </el-table-column>
        <el-table-column prop="created_by" label="作者"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="list-footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class PostCreate extends Vue {
  private tableData: any = [];
  private multipleSelection: any = [];
  private queryArgs: any = {
    currentPage: 1,
    pageSize: 15,
  };
  private params: any = {
    user: '',
    region: '',
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

  public mounted() {
    this.fetchList();
  }

  private searchCall() {
    this.queryArgs.currentPage = 1;
    this.fetchList();
  }
  private fetchList() {
    console.log('fetchList...');
    console.log(this.queryArgs);
    axios.get('/api/v1/posts', {params: this.queryArgs}).then((resp) => {
      console.log(resp);
      this.tableData = resp.data;
    });
  }
  private handleSizeChange(val: number) {
    this.queryArgs.pageSize = val;
    this.fetchList();
  }

  private handleCurrentChange(val: number) {
    this.queryArgs.currentPage = val;
    this.fetchList();
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid lightgray;
}
</style>

