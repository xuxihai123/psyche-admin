<template>
  <main-panel class="list-container" title="管理标签">
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
          <el-button type="primary" @click="openPanel()">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-body">
      <el-table ref="tagTable" :data="tableData" v-loading="loading" tooltip-effect="dark">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="avatar" label="头像地址"></el-table-column>
        <el-table-column prop="role" label="用户角色"></el-table-column>
        <el-table-column prop="githubId" label="githubId"></el-table-column>
        <el-table-column prop="githubUrl" label="githubUrl"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">{{ scope.row.created_at|date('YYYY-MM-DD HH:mm:ss') }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
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
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import BaseList from '@/components/base/list';
import services from '@/services';
@Component({
  components: {},
})
export default class UserManager extends BaseList {
  public tableData: any = [];
  public loading: boolean = false;
  public params: any = {
    title: '',
    slug: '',
  };

  public mounted() {
    this.fetchList();
  }

  public async fetchList() {
    console.log('fetchList...');
    try {
      this.loading = true;
      const payload = Object.assign({currentPage: this.currentPage, pageSize: this.pageSize}, this.params);
      const result = await services.userService.findAll(payload);
      this.tableData = result.items;
      this.total = result.total;
    } catch (err) {
      this.$message.error(err.message);
    } finally {
      this.loading = false;
    }
  }
}
</script>