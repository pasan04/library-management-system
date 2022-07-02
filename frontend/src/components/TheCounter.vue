<template>
    <h1>{{counter}}</h1>
    <button style="width:100px; height:100px; color:#1d2671" @click="addOne">Add 1</button>
</template>

<script>
export default{
    methods:{
        addOne(){
            this.$store.commit('increment')
        }
    }
}

</script>