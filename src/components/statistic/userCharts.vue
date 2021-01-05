<template>
<a-layout>
      <a-layout-header class="layout-header">
        <div>
    <a-row>
    <a-col :span="8">
      <a-card title="总上报数" class="total ">
        <p class="totalnum">{{allnum}}条</p>
      </a-card>
    </a-col>
    <a-col :span="8">
     <a-card title="审核通过" class="total">
        <p class="totalnum">{{pass}}条</p>
      </a-card>
    </a-col>
    <a-col :span="8">
       <a-card title="处理隐患" class="total">
        <p class="totalnum">{{finish}}处</p>
      </a-card>
    </a-col>
  </a-row>
      </div>

  </a-layout-header>
      <a-layout-content class="layout-content">
        <template>
  <a-tabs class="table">
    <a-tab-pane key="1" :tab="tab1" @click="selecttab1" class="tab">
     <div id="container"></div>
     <div class="top">
       <ul>
        <h4>各厂{{toptitle}}排名</h4>
        <li><span class="topnum">1</span>打开冰箱门</li>
       </ul>
     </div>
    </a-tab-pane>
    <a-tab-pane key="2" :tab="tab2" class="tab" @click="selecttab2">
       <div id="container"></div>
       <div class="top">
       <ul>
        <h4>各厂{{toptitle}}排名</h4>
        <li><span class="topnum">1</span>打开冰箱门</li>
       </ul>
     </div>
    </a-tab-pane>
    <template #tabBarExtraContent>
     <a-space size="large">
     <a>今日</a>
     <a>本周</a>
     <a>本月</a>
     <a>全年</a>
     <a-range-picker
    :ranges="{ 今日: [moment(), moment()], '本月': [moment(), moment().endOf('month')] }"
    @change="onChange" 
  />
     </a-space>
    </template>
  </a-tabs>
        </template>
      </a-layout-content>
    </a-layout>
</template>
<script>
import moment from 'moment';
import { Column } from '@antv/g2plot';
const data = [
  { name:'炼钢厂', number: 138 },
  { name: '炼铁厂', number: 52 },
  { name: '动力厂', number: 61 },
  { name: '烧结厂', number: 145 },
  { name: '带钢厂', number: 48 },
];
export default {
  data(){
    return{
      allnum:'11111',
      pass:'111111',
      finish:'444444',
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      tab1:'上报数',
      tab2:'处理数',
      toptitle:'',
    }
  },
  components:{
  },
  methods:{
    charts(){
       const bar = new Column('container',{
        data,
        xField: 'name',
        yField: 'number',
        seriesField: 'name',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 100
          },
          formatter(value){
            return value.number+"项"
          }
        },
    });
    bar.render();
    },
     moment,
    onChange(dates, dateStrings) {
    },
    selecttab1(){
      this.toptitle=this.tab1;
      this.charts();
      console.log('1')
    },
    selecttab2(){
      console.log('2')
      this.toptitle=this.tab2;
      this.charts();

    }
  },
  mounted:function(){
    this.charts();
    this.toptitle=this.tab1;
    
  }
}
</script>
<style lang="scss">
  .total{
    text-align: center;
    width: 80%;
    height: 150px;
  }
  .totalnum{
    font-size: 23px;
  }
  #container{
    height: 330px;
    width: 70%;
  }
  .layout-header{
    background: white!important;
    height: 20% !important;
  }
  .layout-content{
    background: white!important;
  }
  .table{
    margin-top: 2% !important;
  }
  .top{
    width:25%;
    height: 330px;
    text-align: center;
  }
  h4{
    margin-top: .5em !important;
    margin-bottom: .5em !important;
    color: rgba(0,0,0,.85) !important;
    font-weight: 500 !important;
  }
  li{
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 22px;  
  }
  .tab{
    display: flex;
    flex-direction: row;
  }
  .topnum{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 1.5px;
    margin-right: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    background-color: #314659;
    color: white;
    border-radius: 20px;
  }
</style>
