<template>
  <div>
    
    <div class="Menu">
      <b-navbar class="headerNavbar" toggleable="lg" type="dark" variant="">
      <b-navbar-brand href="#"><a href="index.html"><img class="logo" src="../images/logo.png" alt="Logo"></a></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Accueil</b-nav-item>
          <b-nav-item href="/Gains">Lots</b-nav-item>
          <b-nav-item href="/Menu">Burgers</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="success btnCo">Connexion</b-button>
          <b-button variant="primary btnRegister">Inscription</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
   
    
      <nuxt /> 
  <footer class="footer">
    <div class="container">
      <div class="row">
      <div class="col-sm-3">
          <h4 class="title">Sumi</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
          <ul class="social-icon">
          <a href="#" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#" class="social"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#" class="social"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#" class="social"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
          <a href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></a>
          <a href="#" class="social"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
          </ul>
          </div>
      <div class="col-sm-3">
          <h4 class="title">My Account</h4>
          <span class="acount-icon">          
            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> Wish List</a>
            <a href="#"><i class="fa fa-cart-plus" aria-hidden="true"></i> Cart</a>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
            <a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Language</a>           
          </span>
            </div>
      <div class="col-sm-3">
          <h4 class="title">Category</h4>
          <div class="category">
          <a href="#">lot</a>
          <a href="#">voiture</a>
          <a href="#">burger</a>
          <a href="#">girl</a>
          <a href="#">bag</a>          
          </div>
          </div>
      <div class="col-sm-3">
          <h4 class="title">Payment Methods</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <ul class="payment">
          <li><a href="#"><i class="fa fa-cc-amex" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i></a></li>            
          <li><a href="#"><i class="fa fa-paypal" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-cc-visa" aria-hidden="true"></i></a></li>
          </ul>
          </div>
      </div>
      <hr>
      
      <div class="row text-center"> ©FatBoar David et Sergio</div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/css/mdb.min.css);
html {
  
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.Menu{
  width: 100%;
}
.headerNavbar{
  background: #FFFFFF;
  position: relative;
  border-bottom: 27px solid #222126 !important;
}

.logo{
  height: 120px;
  margin-left: 30px;
  margin-right: 30px;
}

.btnCo{
  background: #8c281f !important;
}

.btnRegister{
  background: #222126 !important;
}
.navbar-dark .navbar-nav .nav-link{
  color: black !important;
}

.navbar-dark .navbar-nav .nav-link:hover{
  color: black !important;
}

.navbar-dark .navbar-brand{
  margin-left: 10%;
}
.btnCo{
  margin-left: 20px;
}

.ml-auto{
  margin-right: 10% !important;
}

section {
        padding: 100px 0 70px;
}

.footer {
    padding: 50px 0 20px 0;
    background-color: #222126;
    color: #878c94;
}
.footer .title{text-align: left;color:#fff;font-size:25px;}


.footer .social-icon{padding:0px;margin:0px;}
.footer .social-icon a{display:inline-block;color:#fff;font-size:25px;padding:5px;}
.footer .acount-icon a{display:block;color:#fff;font-size:18px;padding:5px;text-decoration:none;}
.footer .acount-icon .fa{margin-right:25px;}


.footer .category a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 5px 20px;
    margin: 1px;
    border-radius:4px;
    margin-top: 6px;
    background-color: black;
    border: solid 1px #fff;
}

.footer .payment{margin:0px;padding:0px;list-style-type:none}
.footer .payment li{list-style-type:none}
.footer .payment li a {
    text-decoration: none;
    display: inline-block;
    color: #fff;
    float: left;
    font-size: 25px;
    padding: 10px 10px;
}

</style>

<script>
export default {
  computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
        name: ''
      }
  } 
}
</script>
