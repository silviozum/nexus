<template>
  <div> 
      <header>
          <div class="center-header">
            <h1>
                <a href="https://salao-pro.com/" class="logo">
                  <img src="https://salao-pro.com/wp-content/uploads/sites/11/2020/02/logo-salaopro.png" class="header_logo header-logo" alt="Salão Pro">
                </a> 
            </h1>
          </div>
      </header>
  </div>
</template>

<script>


export default {
  data () {
    return{

    }
  },
}
</script>

<style>
header{
    height: 70px;
    background-color: #fff;
    text-align: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 999;
    -webkit-box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
    -moz-box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
}
.logo{
    line-height: 66px;
    width: 150px;
    display: block;
    height: 30px;
    margin: 0 auto;
}
.logo img{
    max-width: 100%;
}

</style>
