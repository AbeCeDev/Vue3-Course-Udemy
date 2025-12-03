// Creo una nueva aplicación Vue con Vue.createApp
Vue.createApp({
  // Defino los datos reactivos de la aplicación mediante la función data
  data() {
    // Retorno un objeto con las propiedades reactivas goals y enteredValue
    return {
      // goals es un array que almacenará los objetivos añadidos
      goals: [],
      // enteredValue es una cadena que almacenará el valor ingresado en el input
      // Para que funcione se debe enlazar con v-model en el input del HTML añadiendo v-model="enteredValue" a la etiqueta input
      enteredValue: "",
    };
  },
  // Defino los métodos de la aplicación mediante el objeto methods
  methods: {
    // Creo un método llamado addGoal que añade el valor ingresado a la lista de objetivos
    addGoal() {
      // Añado el valor ingresado a la lista de objetivos
      this.goals.push(this.enteredValue);
      // Limpio el valor ingresado para que el input quede vacío
      this.enteredValue = "";
    },
  },
  // Monto la aplicación en el elemento del DOM con id "app"
}).mount("#app");
