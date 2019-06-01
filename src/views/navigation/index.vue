<template>
  <main-panel class="list-container" title="管理导航">
    <div class="list-header">
      <el-form :inline="true" :model="params" class="filters">
        <el-form-item label="名称">
          <el-input v-model="params.keyword" placeholder="名称关键字"></el-input>
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
        :data="tableData"
        v-loading="loading"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">
            <span class="order-btn" v-if="scope.$index!==0">
              <i class="el-icon-upload2"></i>
            </span>
            <span class="order-btn" v-if="scope.$index!==tableData.length-1">
              <i class="el-icon-download"></i>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="导航名称"></el-table-column>
        <el-table-column prop="link" label="导航链接"></el-table-column>
        <el-table-column prop="icon" label="导航图标"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="openPanel(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteItem(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="list-footer">
      <!-- <el-pagination
        background
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>-->
    </div>
    <transition name="slide-fade">
      <nav-create-save
        v-if="showTagPanel"
        @close="showTagPanel=false"
        @refreshList="fetchList"
        :editObj="editObj"
        class="tag-panel"
      ></nav-create-save>
    </transition>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import BaseList from '@/components/base/list';
import NavCreateSave from './save.vue';
import navigationSvc from '@/services/navigation';
import {extend} from 'dayjs';
@Component({
  components: {
    NavCreateSave,
  },
})
export default class NavigationManager extends BaseList {
  public tableData: any = [];
  public editObj: any = null;
  public showTagPanel: boolean = false;
  public multipleSelection: any = [];
  public loading: boolean = false;
  public params: any = {
    keyword: '',
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
      const result = await navigationSvc.findAll(this.params);
      this.tableData = result.items;
    } catch (err) {
      this.$message.error(err.message);
    } finally {
      this.loading = false;
    }
  }

  public openPanel(obj: any) {
    this.editObj = obj;
    this.showTagPanel = true;
  }

  public deleteItem(obj: any) {
    navigationSvc.delete(obj.id).then(() => {
      this.$message.success('删除成功！');
      this.fetchList();
    });
  }
}
</script>

<style lang="scss" scoped>
.order-btn {
  display: inline-block;
  padding-right: 6px;
  color: #409eff;
  font-size: 18px;
  cursor: pointer;
}
</style>
