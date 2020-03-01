<template>
    <div class="form-address">
        <a-input class="size31" placeholder="cep" v-model="cep" @pressEnter="cepUser()" @blur="cepUser()"/>
        <a-input class="size93" placeholder="Nome" v-model="name"/>
        <a-input class="size31" placeholder="telefone" ref="numero" v-model="phone"/>
    </div>
</template>

<script>


export default {
    data(){
        return{
            cep:'',
            name:'',
            phone:'',
        }
    },
    methods:{
        cepUser(){
             this.$store.commit('address/setCep', this.cep)
             this.$root.$emit('cep', this.cep)
        }
    },
}
</script>

<style>

.form-address .size31,.form-address .size62,.form-address .size93{
    margin:0 6px 10px 0;
    padding: 22px 12px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.15);
    font-size: 14px;
}
.form-address .size31{
    width:31%;
}
.form-address .size62{
    width:62%;
}
.form-address .size93{
    width:93%;
}
</style>
