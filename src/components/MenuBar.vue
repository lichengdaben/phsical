<template>
  <nav>
    <div class="nav-menu">
      <div>
        <i>
          <img
            class="companyLogo"
            src="@/assets/companylogo.jpeg"
            width="75px"
            height="35px"
          />
          <font-awesome-icon
            class="barIcon"
            icon="fa-solid fa-bars"
            @click="showMenu()"
          />
        </i>
        <div
          class="nav-content"
          :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
        >
          <img
            class="logoimage"
            src="@/assets/companylogo.jpeg"
            width="75px"
            height="35px"
          />
          <ul class="nav-items">
            <li>Workshop Schedule</li>
            <li>GroupClass Schedule</li>
            <li>Loaction</li>
            <li>About Us</li>
          </ul>
          <div class="nav-content">
            <div class="login-button" v-show="display" @click="goToLogin">
              Login
            </div>
            <div class="login-button" v-show="!display"  @click="login">Logout</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      showMobileMenu: false,
      display: true,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    goToLogin() {
      this.$router.push("/login");
    },
    handleLogout() {
      this.$store.state.name=""
      this.$store.state.password=""
      localStorage.removeItem('Authorization')
    
       this.$store.dispatch("logout");
         this.$router.push("/login");
    },
  },
  mounted() {
    //  display1();
    if (this.$store.state.userName != null) this.display = false;
  },
};
</script>
<style scoped>
.nav-menu {
  background-color: #0047b3;
  height: auto;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 0 10px;
}
i {
  display: none;
}
/*// Mobile version - hidden hamburger menu*/
@media screen and (max-width: 768px) {
  .barIcon {
    display: flex;
    justify-content: left;
  }
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: auto;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  i {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    padding: 0 10px 10px 0;
  }
  li {
    margin: 20px;
  }
}
</style>