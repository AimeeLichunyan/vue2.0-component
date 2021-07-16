<template>
  <div id="app">
    <aimee-row>
      <aimee-col :span="12">11</aimee-col>
      <aimee-col :span="12">22</aimee-col>
    </aimee-row>
    <aimee-row>
      <aimee-col :span="24">33</aimee-col>
    </aimee-row>
    <aimee-row>
      <aimee-col :span="6" >44</aimee-col>
      <aimee-col :span="6" :offset="10">55</aimee-col>
    </aimee-row>

    <aimee-row :gutter="20">
      <aimee-col :span="6" >66</aimee-col>
      <aimee-col :span="6" >77</aimee-col>
      <aimee-col :span="6" >88</aimee-col>
      <aimee-col :span="6" >99</aimee-col>
    </aimee-row>
    <aimee-row justify="space-between">
      <aimee-col :span="6" >1010</aimee-col>
      <aimee-col :span="6" >1111</aimee-col>
    </aimee-row>
    
  <br/>
  <aimee-row :gutter="10">
    <aimee-col  :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple"></div>
    </aimee-col>
    <aimee-col  :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple-light"></div>
    </aimee-col>
    <aimee-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple"></div>
    </aimee-col>
    <aimee-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple-light"></div>
    </aimee-col>
  </aimee-row>



  <aimee-container>
      <aimee-header>Header</aimee-header>
      <aimee-main>Main</aimee-main>
    </aimee-container>

    <aimee-container>
      <aimee-header>Header</aimee-header>
      <aimee-main>Main</aimee-main>
      <aimee-footer>Footer</aimee-footer>
    </aimee-container>

    <aimee-container>
      <aimee-aside width="200px">Aside</aimee-aside>
      <aimee-main>Main</aimee-main>
    </aimee-container>

    <aimee-container>
      <aimee-header>Header</aimee-header>
      <aimee-container>
        <aimee-aside width="200px">Aside</aimee-aside>
        <aimee-main>Main</aimee-main>
      </aimee-container>
    </aimee-container>

    <aimee-container>
      <aimee-header>Header</aimee-header>
      <aimee-container>
        <aimee-aside width="200px">Aside</aimee-aside>
        <aimee-container>
          <aimee-main>Main</aimee-main>
          <aimee-footer>Footer</aimee-footer>
        </aimee-container>
      </aimee-container>
    </aimee-container>

    <aimee-container>
      <aimee-aside width="200px">Aside</aimee-aside>
      <aimee-container>
        <aimee-header>Header</aimee-header>
        <aimee-main>Main</aimee-main>
      </aimee-container>
    </aimee-container>

    <aimee-container>
      <aimee-aside width="200px">Aside</aimee-aside>
      <aimee-container>
        <aimee-header>Header</aimee-header>
        <aimee-main>Main</aimee-main>
        <aimee-footer>Footer</aimee-footer>
      </aimee-container>
    </aimee-container>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    fn(e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
 .aimee-col {
   border-radius: 4px;
 }
 .bg-purple-dark {
   background-color: #99a9bf;
 }
 .bg-purple {
   background: #d3dce6
 }
 .bg-purple-light{
   background: #efe9f2;
 }
 .grid-content {
   border-radius: 4px;
   min-height: 36px;
 }
</style>
