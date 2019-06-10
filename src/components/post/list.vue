<template>
  <div class="list-container">
    <div class="list-header">
      <el-form :inline="true" :model="params" class="filters">
        <el-form-item label="标题">
          <el-input v-model="params.title" placeholder="标题关键字"></el-input>
        </el-form-item>
        <el-form-item label="别名">
          <el-input v-model="params.slug" placeholder="别名关键字"></el-input>
        </el-form-item>
        <el-form-item label="状态" v-if="type==='post'">
          <el-select v-model="params.status">
            <el-option label="全部" value></el-option>
            <el-option label="草稿" value="draft"></el-option>
            <el-option label="已发布" value="published"></el-option>
            <el-option label="定时发布" value="dingshi"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchCall">搜索</el-button>
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
        <el-table-column prop="status" label="状态" width="80"></el-table-column>
        <el-table-column label="创建时间" v-if="type==='post'">
          <template slot-scope="scope">{{ scope.row.created_at|date('YYYY-MM-DD HH:mm:ss') }}</template>
        </el-table-column>
        <el-table-column label="发布时间" v-if="type==='post'">
          <template slot-scope="scope">{{ scope.row.publish_at|date('YYYY-MM-DD HH:mm:ss') }}</template>
        </el-table-column>
        <el-table-column label="作者">
          <template slot-scope="scope">{{ scope.row.author&&scope.row.author.name }}</template>
        </el-table-column>
        <el-table-column label="标签" v-if="type==='post'">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row.tags" :key="tag.id" class="tag-item">{{tag.name}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="preview(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="toEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteItem(scope.row)">删除</el-button>
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
import postSvc from '@/services/post';

@Component
export default class PostCreate extends BaseList {
  @Prop({default: 'post'})
  public type!: string;

  public tableData: any = [];
  public multipleSelection: any = [];

  public params: any = {
    title: '',
    slug: '',
    status: '',
  };

  public handleSelectionChange(val: any) {
    this.multipleSelection = val;
  }

  public mounted() {
    this.fetchList();
  }

  public fetchList() {
    console.log('fetchList...');
    this.params.type = this.type;
    const payload = Object.assign({currentPage: this.currentPage, pageSize: this.pageSize}, this.params);
    postSvc.findAll(payload).then((result: any) => {
      this.tableData = result.items;
      this.total = result.total;
    });
  }

  public preview(item: any) {
    window.open('http://localhost:3000/post?pid=' + item.id);
  }

  public deleteItem(item: any) {
    postSvc
      .delete(item.id)
      .then((result: any) => {
        this.fetchList();
      })
      .catch((err) => {
        this.$message.error(err.message);
      });
  }

  public toEdit(item: any) {
    const routerName = this.type === 'post' ? 'postsEdit' : 'pagesEdit';
    this.$router.push({name: routerName, query: {pid: item.id}});
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid lightgray;
}
.tag-item {
  display: inline-block;
  margin: 3px 6px;
}
</style>

