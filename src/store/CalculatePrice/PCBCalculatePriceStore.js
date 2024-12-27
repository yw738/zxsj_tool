import { defineStore } from 'pinia'
import axios  from "axios"
import { message } from 'ant-design-vue'


export const usePCBCalculatePriceStore = defineStore('PCBCalculatePriceData', {
    state: ()=>({
        Order: null,
        OrderCost: {
            PCB_Project: {
                PCB_TotalCost: 0,
                PCB_BenchmarkCost: 0,
                PCB_ProjectCost: 0,
                PCB_BoardThicknessCost: 0,
                PCB_InnerLayer_CopperThicknessesCost: 0,
                PCB_FR4_BoardMaterialTGCost: 0,

            }
        },
        OptionalParameters: null,
    }),

    getters: {
        OrderTotalCost: (state) =>{
            let totalCost = 0;
            let PCBTotalCost = Object.values(state.OrderCost.PCB_Project)
            .filter(value => typeof value === 'number')
            .reduce((acc, value) => acc + value, 0); 
            
            totalCost += PCBTotalCost;
            return totalCost;
        }
    },

    actions: {
        getInitOrder(){
            return axios.get('api/CalculatePrice/GetCalculatePriceParameter')
            .then(response => {
                let result = response.data
                if(result.Type === 0){
                    this.Order = result.Data.InitOrder;
                    this.InitOrderHandler();
                    this.OptionalParameters = result.Data.OptionalParameters;
                }
            })
            .catch(error => {
                console.error(error);
                message.error(`错误 ${error}`);
            })
        },

        InitOrderHandler(){
            this.Order.PCB_OrderProject.BoardLength = null
            this.Order.PCB_OrderProject.BoardWidth = null

            this.Order.PCB_OrderProject.Deliver_Length_PCS = null
            this.Order.PCB_OrderProject.Deliver_Width_PCS = null
            this.Order.PCB_OrderProject.BoardNumber = null
        },

        saveSourceData(){
            return axios.post('api/PCB_CalculatePriceRule/SaveBasePriceRule', this.sourceData)
            .then(response => {
                let result = response.data
                if(result.Type === 0){                   
                    for(var messageStr of result.Messages){
                        message.success(messageStr)
                    }                   
                }
            })
            .catch(error => {
                console.error(error);
                message.error(`错误 ${error}`);
            })
        },
    }
})