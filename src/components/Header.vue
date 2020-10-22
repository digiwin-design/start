<template>
  <div>
    <div class="top">
      <div id="TOP-MENU">
        <h4 id="LOGO_M">鼎新電腦</h4>
        <h5 id="BTN">MENU</h5>
      </div>
      <div id="nav">
        <a href="https://www.digiwin.com/tw" target="_blank"><img class="logo" src="https://www.digiwin.com/tw/dsc/Library/images/logo.png" alt="鼎新官網" width="90" height="29"/></a>
        <ul class="link">
          <li class="line_L"><a href="https://www.digiwin.com/tw/activity.html" target="_blank">最新活動</a></li>
          <li><a href="https://www.digiwin.com/tw/enewspaper.html" target="_blank">電子報</a></li>
          <li>
            <a href="javascript:;">解決方案<img src="https://www.digiwin.com/tw/dsc/Library/images/arr.png" width="9" height="7"/></a>
            <ul class="subLink">
              <li><a href="https://www.digiwin.com/tw/case.html" target="_blank">E化案例</a></li>
            </ul>
          </li>
          <li>
            <a href="https://www.youtube.com/user/DSCTCE00" target="_blank">YouTube<img src="https://www.digiwin.com/tw/dsc/Library/images/arr.png" width="9" height="7"/></a>
            <ul class="subLink">
              <li><a href="https://www.facebook.com/DSCmain" target="_blank">鼎新粉絲團</a></li>
              <li><a href="https://www.digiwin.com/tw/dsc/service/WB002588/WB00258801.html" target="_blank">心服務新價值</a></li>
              <li><a href="https://a1.digiwin.com/" target="_blank">商務應用雲</a></li>
              <li><a href="https://www.digiwin.com/tw/dsc/project/ServiceCloud/ServiceCloud.html" target="_blank">鼎新服務雲</a></li>
            </ul>
          </li>
          <li class="Phone">
            <a href="https://www.digiwin.com/tw/contact/eform.html"><img src="https://www.digiwin.com/tw/dsc/Library/images/phoneIcon.png" width="16" height="12" /> 0800-888-162</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    initMenu() {
      /* -------上方企業識別Nav------------- */
      /* $("#nav ul ul").hide(); */
      $('#nav > ul > li').hover(
        (e) => {
          const N = e.currentTarget;
          $(N)
            .find('ul')
            .stop(true, true)
            .slideDown(400);
        },
        (e) => {
          const N = e.currentTarget;
          $(N)
            .find('ul')
            .stop(true, true)
            .slideUp(400);
        },
      );

      /* -------手機版Nav------------- */

      $('#BTN').on('click', this.OPENOPEN);

      $(window).on('resize', this.CLEARSTYLE);

      $('#LOGO_M').on('click', this.DIGIWIN);
    },
    DIGIWIN() {
      window.open('https://www.digiwin.com/tw');
    },
    CLEARSTYLE() {
      if ($(window).innerWidth() > 768) {
        $('#nav').attr('style', '');
      }
    },
    OPENOPEN() {
      $('#nav').slideToggle(300);
      this.$store.commit('toggleMask', !this.$store.state.showMask);
    },
    slideUpNav() {
      if ($(window).innerWidth() <= 768) {
        $('#nav').slideUp(300);
      }
    },
    toggleMask() {
      this.$store.commit('toggleMask', false);
      console.log('132');
    },
  },
  mounted() {
    this.initMenu();
    // document.querySelector('#mask').addEventListener('click', this.slideUpNav);
    // document.querySelector('#mask').addEventListener('touchstart', this.slideUpNav);
  },
  beforeDestroy() {
    document.querySelector('#mask').removeEventListener('click', this.slideUpNav);
    document.querySelector('#mask').removeEventListener('touchstart', this.slideUpNav);
  },
  computed: {
    active() {
      return this.$store.state.showMask;
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.7);
  content: '';
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.top {
  position: relative;
  z-index: 5;
}
/* --電腦版型------------------------------------- */
#TOP-MENU {
  display: none;
}
/* --------------------------------- */

#nav {
  position: relative;
  z-index: 999995;
  width: 100%;
  height: 35px;
  background-color: #f4f5f5;
  font-family: Arial, '新細明體', '微軟正黑體';
}
#nav .logo {
  position: absolute;
  top: 3px;
  left: 45px;
  z-index: 999999;
  float: left;
}
#nav .link {
  float: right;
  width: 600px;
  height: 35px;
  text-align: center;
  letter-spacing: 1px;
}
#nav .link > li {
  float: left;
  width: 110px;
  border-right: 1px solid #c4c4c4;
  color: #757373;
  font-size: 13px;
  line-height: 35px;
}
#nav .link > li a {
  display: block;
  color: #757373;
  text-decoration: none;
}
#nav .link > li:hover {
  background-color: #e0e0e0;
  color: #757373;
  text-decoration: none;
  line-height: 35px;
}
#nav .link .Phone {
  width: 120px;
  border-right: 0 solid #999;
}
#nav .link .Phone:hover,
#nav .link .line:hover {
  background-color: #f4f5f5;
}
#nav .link .line_L {
  border-left: 1px solid #c4c4c4;
}
#nav .link .subLink {
  z-index: 999995;
  display: none;
  border-top: none;
  border-left: 1px solid #c4c4c4;
  background-color: #fff;
}
#nav .link .subLink li a {
  display: block;
  height: 35px;
  color: #757373;
  text-align: center;
}
#nav .link .subLink li a:hover {
  background: #f4f5f5;
}
#nav .Phone a {
  margin-left: 6px;
}
/* --手機版型------------------------------------- */

@media screen and (max-width: 768px) {
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  body,
  html {
    -webkit-text-size-adjust: none;
  }
  #WRAPPER {
    min-width: 320px;
  }

  #TOP-MENU {
    position: relative;
    display: block;
    width: 100%;
    height: 50px;
    background-color: #f4f5f5;
  }
  #TOP-MENU h4 {
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
    width: 150px;
    height: 40px;
    background-image: url(http://www.digiwin.com/tw/dsc/Library/images/DSClogo.png);
    background-size: 90px auto;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }
  #TOP-MENU h5 {
    position: absolute;
    top: 10px;
    right: 5px;
    display: block;
    width: 60px;
    height: 40px;
    background-image: url(http://www.digiwin.com/tw/dsc/Library/images/btn.png);
    background-size: 60px auto;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }

  /* --------------------------------- */

  #nav {
    position: relative;
    z-index: 999995;
    display: none;
    width: 100%;
    height: auto;
    background-color: #e0e0e0;
    font-family: '微軟正黑體', Arial, Helvetica, sans-serif;
  }
  #nav .logo {
    display: none;
  }
  #nav .link {
    float: none;
    margin-right: 30px;
    width: 100%;
    height: auto;
    text-align: center;
    line-height: 45px;
  }
  #nav .link > li {
    float: none;
    width: 100%;
    border-right: 0 solid #999;
    border-bottom: #fff 1px solid;
    color: #757373;
    font-size: 18px;
    line-height: 45px;
  }
  #nav .link > li a {
    display: block;
    color: #000;
    text-decoration: none;
    line-height: 45px;
  }
  #nav .link > li a:hover {
    background-color: #666;
    color: #fff;
    text-decoration: none;
    line-height: 45px;
  }
  #nav .link .Phone {
    width: 100%;
    font-weight: normal;
  }
  #nav .link .Phone:hover,
  #nav .link .line:hover {
    background-color: #f4f5f5;
  }
  #nav .link .line_L {
    border-left: 0 solid #999;
  }
  #nav .link .subLink {
    z-index: 999995;
    display: none;
    border: 0 solid #757373;
    border-top: none;
    background-color: #f4f5f5;
  }
  #nav .link .subLink li a {
    display: block;
    height: 45px;
    border-bottom: #e0e0e0 1px solid;
    color: #900;
    text-align: center;
  }
  #nav .link .subLink li a:hover {
    background-color: #900;
    color: #fff;
    line-height: 45px;
  }
}
</style>
