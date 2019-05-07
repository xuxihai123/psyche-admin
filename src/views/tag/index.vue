<template>
  <div class="list-container">
    <div class="list-header">
      <el-form :inline="true" :model="params" class="filters">
        <el-form-item label="名称">
          <el-input v-model="params.title" placeholder="名称关键字"></el-input>
        </el-form-item>
        <el-form-item label="别名">
          <el-input v-model="params.slug" placeholder="别名关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchCall">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-body">
      <el-table
        ref="tagTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="name" label="标签名"></el-table-column>
        <el-table-column prop="slug" label="别名"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column prop="meta_title" label="meta标题"></el-table-column>
        <el-table-column prop="meta_description" label="meta描述"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">{{ scope.row.created_at|date('YYYY-MM-DD HH:mm:ss') }}</template>
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
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import BaseList from '@/components/base/list';
import tagSvc from '@/services/tag';
@Component
export default class TagManager extends BaseList {
  public tableData: any = [];
  public multipleSelection: any = [];
  public params: any = {
    title: '',
    slug: '',
    status: '',
  };

  public toggleSelection(rows: any) {
    const pickTable = this.$refs.multipleTable as any;
    if (rows) {
      rows.forEach((row: any) => {
        pickTable.toggleRowSelection(row);
      });
    } else {
      pickTable.clearSelection();
    }
  }

  public handleSelectionChange(val: any) {
    this.multipleSelection = val;
  }

  public mounted() {
    this.fetchList();
  }

  public fetchList() {
    console.log('fetchList...');
    const payload = Object.assign({currentPage: this.currentPage, pageSize: this.pageSize}, this.params);
    tagSvc.findAll(payload).then((result: any) => {
      this.tableData = result.items;
      this.total = result.total;
    });
  }
}
</script>

<style lang="scss" scoped>
.tag-container {
}
</style>
