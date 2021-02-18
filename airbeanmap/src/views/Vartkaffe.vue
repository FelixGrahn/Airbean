<template>
  <div class="container">
    <span class="header">Vårt Kaffe</span>
    <p class="bold">
      Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds
      dripper, crema, strong whipped, variety extra iced id lungo half and half
      mazagran. Pumpkin spice.
    </p>
    <p>
      Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
      aftertaste, con panna milk black, arabica white rich beans single shot
      extra affogato. So affogato macchiato sit extraction instant grinder
      seasonal organic, turkish single shot, single origin, and robusta strong
      to go so dripper. Viennese froth, grounds caramelization skinny aromatic
      cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
      flavour cultivar ut bar instant kopi-luwak.
    </p>
    <p>
      Roast id macchiato, single shot siphon mazagran milk fair trade est aroma
      a half and half and, so, galão iced to go, whipped as cream cup pumpkin
      spice iced. At extra, rich grinder, brewed to go, steamed half and half
      at, that, percolator macchiato trifecta and body as arabica dripper. In
      galão black java milk sit trifecta, robusta, acerbic café au lait instant
      shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese
      cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk
      aromatic turkish skinny crema.
    </p>

    <img src="../assets/image1.png" alt="bild på Eva" /><br />
    <span>
      <b>Eva Cortado</b><br />
      Vd & grundare
    </span>
<!--     <img src="../assets/footer-leaf.png" alt="löv">
 -->  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.imageholderx {
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
    padding: 36% 0 23% 0
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3e4e1;
  padding:0;
  width:100%;
  background-image: url("../assets/header-leaf.png"), url("../assets/footer-leaf.png");
  background-repeat: no-repeat;
  background-position: center top, center bottom;
  background-size: 100%, 100%;
  padding: 36% 0 23% 0
}
.header {
 font-size: 35px;
 /*margin-right: 250px;*/
 color:black;
 font-weight:900;
 width: 32rem;
 text-align:left;

}
p {
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: justify;
  width: 32rem;
  line-height:165%;
  color:black;
}
.bold {
  font-weight: 600;
}
b {
 font-size: 20px;
}
</style>
