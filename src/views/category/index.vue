<template>
  <main-panel class="list-container" title="管理标签">
    <div class="list-header">
      <el-form :inline="true" :model="params" class="filters">
        <el-form-item label="名称">
          <el-input v-model="params.title" placeholder="名称关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchCall">搜索</el-button>
          <el-button type="primary" @click="openPanel()">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-body">
      <el-table
        ref="tagTable"
        v-loading="loading"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="name" label="标签名"></el-table-column>
        <el-table-column prop="slug" label="别名"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column label="标签列表">
          <template slot-scope="scope">
            <span>{{scope.row.tags.map((tag)=>tag.name).join(', ')}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="openPanel(scope.row)">编辑</el-button>
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
    <transition name="slide-fade">
      <category-form
        v-if="showTagPanel"
        :editObj="editObj"
        @refreshList="fetchList"
        @close="switchMoreSetting(false)"
        class="tag-panel"
      ></category-form>
    </transition>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import BaseList from '@/components/base/list';
import CategoryForm from './form.vue';
import categorySvc from '@/services/category';
@Component({
  components: {
    CategoryForm,
  },
})
export default class TagManager extends BaseList {
  public editObj: any = null;
  public tableData: any = [];
  public loading: boolean = false;
  public showTagPanel: boolean = false;
  public multipleSelection: any = [];
  public params: any = {
    title: '',
    slug: '',
  };

  public handleSelectionChange(val: any) {
    this.multipleSelection = val;
  }

  public mounted() {
    this.fetchList();
  }

  public async fetchList() {
    console.log('fetchList...');
    try {
      this.loading = true;
      const payload = Object.assign({currentPage: this.currentPage, pageSize: this.pageSize}, this.params);
      const result = await categorySvc.findAll(payload);
      this.tableData = result.items;
      this.total = result.total;
    } catch (err) {
      this.$message.error(err.message);
    } finally {
      this.loading = false;
    }
  }

  public openPanel(obj: any) {
    this.editObj = obj;
    this.switchMoreSetting(true);
  }

  public deleteItem(obj: any) {
    categorySvc.delete(obj.id).then(() => {
      this.$message.success('删除成功！');
      this.fetchList();
    });
  }
  private switchMoreSetting(flag: boolean) {
    if (flag) {
      this.$scope.app.activePanel = true;
      this.showTagPanel = true;
    } else {
      setTimeout(() => {
        this.$scope.app.activePanel = false;
      }, 500);
      this.showTagPanel = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-panel {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
