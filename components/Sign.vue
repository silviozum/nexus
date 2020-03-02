<template>
  <div class="form-address">
    <a-input class="size93" placeholder="email" v-model="email" />
    
    <a-input-password class="size31" placeholder="senha" v-model="password"
    @pressEnter="confirmPass()" @blur="confirmPass()" />
    <a-input-password class="size31" placeholder="Confirme a Senha" ref="numero" v-model="confirmPassword" 
    @pressEnter="confirmPass()" @blur="confirmPass()"/>
    <p>{{confirmPassErro}}</p>
    <a-input class="size93" placeholder="cpf" v-model="cpf"/>
  </div>
</template>

<script>


export default {
    data(){
        return{
            email:'',
            password:'',
            confirmPassword:'',
            cpf:'',
            confirmPassErro:''
        }
    },
    methods:{
        confirmPass(){
            if(this.confirmPassword){
                if(this.confirmPassword !== this.password){
                    this.confirmPassErro = 'ih mano ta errado essas senha'
                }else{
                    this.confirmPassErro = ''
                }
            }
        }
    }
}
</script>

<style>

</style>
