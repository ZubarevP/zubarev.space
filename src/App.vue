<template>
  <button
    class="button button-left"
    @click.prevent="changeMode"
  >
    <IconNight v-if="night"/>
    <IconDay v-else/>
  </button>
  <button
    class="button button-right" 
    @click.prevent="changeLang"
  >{{ langButton }}
  </button>
  <AppHeader/>
  <AppContact/>
  <AppDescription/>
  <AppCertificate/>
  <AppSkills/>
  <AppEducation/>
  <AppLanguage/>
  <AppProjects/>
  <AppFooter/>    
</template>

<script>
  import { computed } from "vue";

  import AppHeader from "@/components/headerApp.vue";
  import AppContact from "@/components/contactApp.vue";
  import AppFooter from "@/components/footerApp.vue";
  import AppDescription from "@/components/descriptionApp.vue";
  import AppCertificate from "@/components/certificateApp.vue";
  import AppEducation from "@/components/educationApp.vue";
  import AppLanguage from "@/components/languageApp.vue";
  import AppSkills from "@/components/skillsApp.vue";
  import AppProjects from "@/components/projectsApp.vue";
  import IconDay from "@/components/icons/dayIcon.vue";
  import IconNight from "@/components/icons/nightIcon.vue";

  export default {

    data() {
      return {
        lang: "ru",
        night: true,
      };
    },

    provide() {
      return {
        lang: computed(()=>this.lang), 
      };
    },

    components: { 
      AppHeader, 
      AppFooter,  
      AppContact,   
      AppDescription, 
      AppCertificate,
      AppEducation,
      AppLanguage,
      AppSkills,
      AppProjects,
      IconDay,
      IconNight,
    },

    methods: {
      changeLang() {
        this.lang = this.lang == "en"? "ru": "en";
      }, 
      changeMode() {
        this.night = !this.night;
        this.chooseMode();
      },
      chooseMode() {
        document.body.style.background = !this.night
          ? "#efefef"
          : "#ffffff";
      },
      saveData() {
        localStorage.setItem("lang", this.lang);
        localStorage.setItem("night", this.night ? "night" : "day");
      },
    },

    computed: {
      langButton() {
        return this.lang === "en"? "ru": "en";
      },
    },

    created() {
      if(localStorage.getItem("lang")) {
        this.lang = localStorage.getItem("lang"); 
      } else {
        this.lang = navigator.language.startsWith("ru") 
          ? "ru"
          : "en";
      }
      if(localStorage.getItem("night")) {
        this.night = localStorage.getItem("night") === "night"
          ? true
          : false;
        this.chooseMode();
      }
      window.addEventListener("beforeunload", this.saveData);
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/variables";
  
  .button {
    width: 30px;
    height: 30px;
    position: absolute;
    @include flex-center;
    border-radius: 50%;
    border: none;
    background-color: $green;
    color: white;
    cursor: pointer;
    
    &-right {
      top: 10px;
      right: 10px;
    }

    &-left {
      top: 10px;
      left: 10px;
    }

    &:hover {
      top: 9px;
      right: 9px;
      width: 33px;
      height: 33px;
    }
  }
</style>
