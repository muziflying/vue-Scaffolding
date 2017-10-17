<template>
    <div class="container">
        <header class = "header" id = 'header'>
            <router-view name='header'></router-view>
        </header>
        <nav class = "nav" id = 'nav'>
            <router-view name = 'nav'></router-view>
        </nav>
        <footer class = "footer" id = 'footer'>
            <router-view></router-view>
        </footer>
    </div>
</template>
<script type="text/javascript">
    import MainNav from './MainNav.vue'
    export default {
        data(){
            return{

            }
        },
        mounted(){
            
        }
    }    
</script>
