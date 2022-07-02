<template>
    <h1>{{counter}}</h1>
    <p>We do more........</p>
    <!-- <button style="width:100px; height:100px; color:#1d2671" @click="addOne">Add 1</button> -->
</template>

<script>
export default{
    computed:{
        counter(){
            return this.$store.state.counter*2;
        }
    }
}

</script>