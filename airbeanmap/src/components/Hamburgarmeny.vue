<template>
    <div class="wrapper">
        <!--{{this.$root.$data.displayNavMenu}}-->
        <ul>
            <li v-for="menu in menuOps" :key="menu" class="option">
                <div class="link" @click="goto(menu.myUrl)">{{menu.title}}</div>
                <div class="underline"></div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            menuOps: [
                {
                    title: "Meny",
                    myUrl: "Meny",
                },
                {
                    title: "Vårt kaffe",
                    myUrl: "Vartkaffe",
                },
                {
                    title: "Min profil",
                    myUrl: "About",
                },
                {
                    title: "Orderstatus",
                    myUrl: "/home 4",
                }
            ],
        }
    },
    methods: {
        goto: function(param) {
            this.$root.hideShowMenu();
            this.$root.$router.push(param);
        }
    }
    
}
</script>

<style scoped>

.wrapper {

    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    justify-content: center;
    width:700px;
    min-height:800px;
    background-color:rgba(0,0,0,0.9);
    margin-left:auto;
    margin-right:auto;
    z-index:1;
    position:absolute;

}

li {
    list-style:none;
}

.option {
    font-size:3rem;
    text-align:center;
    font-weight: 900;
}

.link {
    cursor:pointer;
    color:rgba(255,255,255,0.8);
}
.link:hover {
    color:rgba(255,255,255,1);
}

.underline {
  width: 100px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  margin-left:auto;
  margin-right:auto;
  box-sizing:border-box;
}

</style>