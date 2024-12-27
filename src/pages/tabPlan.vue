<template>
  <div>
    <div class="flexBetween box1 flexItemSt">
      <div class="">
        <a-form ref="formRef" :label-col="labelCol">
          <a-form-item label="名称" class="marginB10">
            <a-input class="w100" v-model:value="formdata.name" />
          </a-form-item>
          <a-form-item label="活力" class="marginB20">
            <a-radio-group v-model:value="formdata.xinyuan">
              <a-radio value="20">20</a-radio>
              <a-radio value="40">40</a-radio>
              <a-radio value="60">60</a-radio>
              <a-radio value="80">80</a-radio>
              <a-radio value="100">100</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item
            v-for="(domain, index) in tableData"
            :key="domain.key"
            :label="`类别${index + 1}`"
            class="marginB10"
          >
            <div style="position: relative">
              <div class="flexBetween cal w100" v-if="index == 0">
                <div style="width: 90px">金额</div>
                <div style="width: 90px">数量</div>
                <div style="width: 60px">小计</div>
              </div>
              <div class="flexBetween">
                <div>
                  <a-input-number
                    style="width: 90px"
                    v-model:value="domain.value"
                    :precision="0"
                    :controls="false"
                    :min="0"
                  />
                </div>
                <div>
                  <a-input-number
                    style="width: 90px"
                    v-model:value="domain.num"
                    :precision="0"
                    :controls="false"
                    :min="0"
                  />
                </div>

                <div style="width: 60px">
                  {{ domain.value * domain.num }}
                </div>
              </div>
            </div>
          </a-form-item>
          <a-form-item label="总成本" class="marginB10">
            <div class="flexBetween">
              <div>
                {{ allM }}
              </div>
              <a-button type="dashed" style="width: 100px" @click="addDomain">
                <PlusOutlined />
                加类别
              </a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
      <div>
        <a-card title="分析" class="marginB10" style="width: 300px">
          <div class="flexStart marginB10">
            <div class="w110">出售:</div>
            <a-input-number
              style="width: 120px"
              v-model:value="money"
              :precision="0"
              :controls="false"
              :min="0"
            />
          </div>
          <div class="flexStart marginB10">
            <div class="w110">纯利润:</div>
            {{ lirun }}
          </div>
          <div class="flexStart">
            <div class="w110">活力利润:</div>
            {{ num20 }} <span style="margin-right: 10px">/20点</span>
          </div>
        </a-card>
        <div>
          <a-button style="width: 100px" type="primary" @click="save()"
            >保存</a-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 下单
 */
import { useRouter, useRoute } from "vue-router";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";

import {
  onBeforeMount,
  onMounted,
  ref,
  watch,
  reactive,
  toRefs,
  nextTick,
  computed,
} from "vue";
import { useUser } from "@/store/user.js";
import { localStorage } from "@/utils/storage";
const user = useUser();
const addDomain = () => {
  state.tableData.push({
    value: "",
    num: "",
  });
};
const labelCol = {
  style: {
    width: "100px",
  },
};
const state = reactive({
  formdata: {
    xinyuan: "40",
    name: "",
  },
  money: 1400,
  tableData: [
    { value: "100", num: "2" },
    { value: "100", num: "1" },
    { value: "100", num: "5" },
  ],
  orderObj: {},

  isShowPay: false,
  wxPayurl: null,
});
let allM = computed(() => {
  let arr = state.tableData.map((v) => v.value * v.num);
  return arr.reduce((a, b) => a + b, 0);
});

let lirun = computed(() => {
  return (state.money * 0.95 - allM.value).toFixed(0);
});

let num20 = computed(() => {
  let step = Math.ceil(+state.formdata.xinyuan / 20);
  return (lirun.value / step).toFixed(0);
});
const { formdata, money, orderObj, tableData, isShowPay, wxPayurl } =
  toRefs(state);

let save = () => {};
</script>

<style scoped lang="scss">
.box1 {
}
.w110 {
  width: 80px;
  font-size: 14px;
}
.cal {
  position: absolute;
  top: -23px;
}
</style>
