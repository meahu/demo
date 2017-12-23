import PraiseButton from './index.es'
const f = new PraiseButton;
xtag.register('x-praise', {
  content: '<div class="praise" id="thumb">\
    <div class="finger finger0"></div>\
    <div class="finger finger1"></div>\
    <div class="finger finger2"></div>\
    <div class="finger finger3"></div>\
    <div class="finger finger4"></div>\
    <div class="add" id="add">+1</div>\
  </div>',
  methods: {
    praise: function(){
      let _this = this
      f.clickAction();
      let animation = _this.querySelector('#add')
      animation.className = 'hide num'
      setTimeout(function(){
        animation.className = 'hide';
      })
    }
  },
  events: {
    click: function(e){
      let _this = this;
      
    }
  }
});