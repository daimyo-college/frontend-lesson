const vm = new Vue({
  el: '#app',
  data: {
    newItemTitle: null,
    items: [
        // { title: '領収書を準備する', isChecked: true },
        // { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        // { title: '参加者の人数を確認する', isChecked: false },
        // { title: 'ピザを注文する', isChecked: false },
        // { title: '参加費のお釣りを準備する', isChecked: false },
        // { title: '会場設営をする', isChecked: false },
    ]
  },
  methods: {
      loadTodo: function(){
        this.items = JSON.parse( localStorage.getItem('items') );
        if( !this.items ){
          this.items = [];
        }
      },
      addTodo: function(){
      console.log("Hey");
      this.items.push({
        title: this.newItemTitle,
        isChecked: false
      });
      this.saveTodo();
      this.newItemTitle = '';
    },
    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false; //
      });
      this.saveTodo();
    },
    saveTodo: function(){
      localStorage.setItem('items', JSON.stringify(this.items));
    },
  },

  mounted: function(){
    this.loadTodo();
  },
});
