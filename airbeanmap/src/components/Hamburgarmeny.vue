<template>
    <div class="wrapper">
        <!--{{this.$root.$data.displayNavMenu}}-->
        <div class="button" v-on:click="hideShowMenu()"><span class="plus">+</span></div>
        <ul>
            <li v-for="(menu, index) in menuOps" :key="index" class="option">
                <div class="link" @click="goto(menu.myUrl)">{{menu.title}}</div>
                <div class="underline"></div>
            </li>
            <li class="option" v-if="this.$store.state.loggedin">
                <div class="link" @click="localKill()">Logga ut</div>
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
                    myUrl: "",
                }
            ],
        }
    },
    methods: {
        goto: function(param) {
            this.$store.commit("hideShowMenu");
            if (param.length == 0) {
                this.$store.commit("showStatus");
            }
            else {
                this.$root.$router.push(param);
            }
        },
        hideShowMenu() {
            this.$store.commit('hideShowMenu');
        },
        localKill() {
            this.$store.commit('logout');
        }
    }
    
}
</script>

<style scoped>

.plus {
    transform: rotate(45deg);
    width:100%;
    height:100%;
    display:block;
}
.button {
    width:90px;
    height:90px;
    font-size:7em;
    line-height:75%;
    text-align:center;
    padding: 0;
    margin: 35px auto 200px 35px;
    box-sizing:border-box;
}

.wrapper {

    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    width:700px;
    height:110%;
    background-color:rgba(0,0,0,0.9);
    margin-left:auto;
    margin-right:auto;
    z-index:10;
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