<template>
  <div> 
      <header>
          <div class="center-header">
            <h1>
                <a href="https://salao-pro.com/" class="logo">
                  <img src="https://salao-pro.com/wp-content/uploads/sites/11/2020/02/logo-salaopro.png" class="header_logo header-logo" alt="Salão Pro">
                </a> 
            </h1>
            <div class="main-header">
                <a href="https://salao-pro.com/pro" target="_blank">Faça Parte do Salão</a>
                <a href="#">Ajuda</a>
            </div>
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
    background-color: #3bbdb2;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 999;
    -webkit-box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
    -moz-box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
}
.center-header{
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.logo{
    line-height: 62px;
    width: 150px;
    display: block;
    height: 30px;
}
.logo img{
    max-width: 100%;
}

.main-header{
  display: block;
  right:0;
  top: 0;
  width: 60%;
  position: absolute;
  text-align: right;
  font-weight: bold;
  height: 100%;
  line-height: 66px;
}

.main-header a{
  color: #FFF;
  font-size: 16px;
  padding:0 0 0 16px;
  text-shadow: #11403c 1px 1px; 
}

.main-header a:hover{
  color: #0c2725;
}

</style>
