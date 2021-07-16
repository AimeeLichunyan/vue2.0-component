import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai'
import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('button.vue',() => {
    it('1.测试button能否正常显示slot里的内容', () => {
       const wrapper = shallowMount(Button,{
           slots: {
               default: 'aimee-ui'
           }
       })
       expect(wrapper.text()).to.eq('aimee-ui')
    })
    it('2.测试icon传入是否能正常显示', () => {
       
    })
    it('3.测试loading时，按钮是禁用状态', () => {
       
    })
    it('4.测试button能否正常点击', () => {
       
    })
    it('5.测试button传入position是否正常显示', () => {
       
    })
})