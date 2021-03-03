<template>
  <div class="Breadview">
    <Nav />
    <div class="bottomImg">
      <div class="text-holder">
        <h1 class="MenyHeader">Meny</h1>

        <form class="filterform">

            <select @change="beanfilter(message)" v-model="message">
            <option value="all" selected>Alla Bönor</option>
            <option value="light">Lättrostade</option>
            <option value="medium">Mellanrostade</option>
            <option value="dark">Mörkrostade</option>
            </select>

        </form>

        <div class="minheight">

        <div class="orderinfo" v-for="(kaffe, index) of this.$store.state.sortiment" :key="index">
          <div v-if="hideshow(index)" class="orderinfo_inner">
          <div class="addtocartclass">
          <img class="imgadd" v-on:click="placeorder($store.state.sortiment[index])" src="../assets/addtocart.png" />
          </div>
          <div class="textspecific">
            <h1 @click="merInfo(index)" class="h1-link">{{$store.state.sortiment[index].name}}</h1><div class="dots"></div>
            <h1>{{$store.state.sortiment[index].price}} kr</h1>
            <p>{{$store.state.sortiment[index].desc}}</p>
            <p v-if="index == showruta" class="info">{{$store.state.sortiment[index].info}}</p>
          </div>
          </div>
        </div>

        </div>

      </div>
       
    </div>
    
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
  data: function() {
    return {
      message: "all",
      showruta: -1,
    }
  },
  methods: {
        hideshow(param) {
          let show=false;
          if (this.$store.state.sortiment[param].type == this.message || this.message == "all") {show=true;}
          return show;
        },
        beanfilter(param) {
          let show=false;
          this.$store.state.sortiment.forEach((item) => {
          show=false;
              if (param == "all" || item.type == param) {show=true;}
          });
          return show;
        },
       placeorder(param) {
          //alert(param.name+" / "+param.price);
          //alert(param.name);
          this.$store.commit('addnewitem', param);

          /*
          let addCount=false;
          for (let i=0;i<this.$root.$data.orders.length;i++) {
              if (param.name == this.$root.$data.orders[i].name) {
                alert("Match!");
                this.$root.$data.orders[i].amount++;
                addCount=true;
              }
          }
          if (addCount == false) {this.$root.$data.orders.push({name: param.name, price: param.price, amount: 1});}
          */
       },
       merInfo(param) {
         if (param == this.showruta) {this.showruta=-1;}
         else {this.showruta = param;}
       }
    }
}
</script>

<style scoped>

h1 {
  font-family:var(--hfont);
}
p {
  font-family:var(--brodtext);
}

.filterform {
  display:flex;
  width:90%;
  height:auto;
  margin: 30px auto;
}

select {
  font-family:var(--hfont);
  font-size:1.5em;
  background-color:rgba(255,255,255,0.5);
  margin-left:1.2em;
}

.Breadview {
  background-color: #f3e4e1;
  width: 100%;
  min-height:var(--minheight);
}


.imageholder {
  background-image: url("../assets/header-leaf.png"), url("../assets/footer-leaf.png");
  background-repeat: no-repeat;
    background-position: center top, center bottom;
    background-size: 100%, 100%;
    height: 100%;
    width: 100%;
    margin: 0%;
    padding: 0%;
    z-index: -1;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 28% 0 23% 0
}
.text-holder {
  display: flex;
  /* background-color: lightcyan; */
  height: 55%;
  width: 90%;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.minheight {
  min-height:600px;
  padding:0;
  width:90%;
  margin:0;
  background-color:blue;
}
.orderinfo {
display: flex;
align-self: flex-start;
padding: 0 0 0 9%;
width:100%;
background-color:red;
}
.orderinfo_inner {
display: flex;
align-self: flex-start;
padding: 0;
margin: 0;
width:100%;
height:100%;
}
.dots {
  height:auto;
  width:auto;
  min-width:25%;
  margin:0;
  padding:0;
  border-bottom:2px dotted rgba(0,0,0,0.7);
}
.textspecific {
  text-align-last: left;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-between;
  width:450px;
}
.textspecific > h1 {
display:block;
margin:0;
padding:0;
}
.textspecific > h1:nth-child(1) {
  /*
  min-width:200px;
  max-width:250px;
  */
  width:auto;
  max-width:55%;
}
.textspecific > h1:nth-child(3) {
  width:20%;
}
.addtocartclass {
    width: 10%;
    display: flex;
    height: 10%;
    padding-right:4%;
    margin:0;
}
.imgadd {
    width: 80%;
    height: 80%;
    margin:0;
    padding: 0;
    cursor:pointer;
    border:4px solid transparent;
}
.imgadd:hover {
   border:4px solid red;
   border-radius:50%;

}
.MenyHeader {
  font-weight: 700;
  font-size: 464%;
}
.h1-link {
  cursor: pointer;

}
.h1-link:hover {
  color: orange;
}
.info {
  background-color: white;
  font-weight:600;
  line-height:1.5em;
  color:black;
  width: 90%;
  border: 2px solid black;
  padding: 10px;
  text-align:left;
}
</style>