module.exports=function (templateParams) {
	var _cssList=['vendor'];
	var webAssetsHelp=require('./webAssetsHelp.js')(templateParams,_cssList);
	debugger
	var _html="{% extends './layout.html' %}"+
              "{% block title %}My Page{% endblock %}"+
              "{% block styles %}"+
              webAssetsHelp.styles+
              "{% endblock %}"+
              "{% block content %}{% include '../widget/index.html' %}{% endblock %}"+
              "{% block script %}"+
              "<script>" +
              "(function(){" +
              "var scriptsshow = [" + webAssetsHelp.scriptsshow + "];" +
              "for(let i=0; i< scriptsshow.length; i++){" +
              "let a = scriptsshow[i];" +
              "if(localStorage.getItem(a)){" +
              "$('<scr' + 'ipt>'+localStorage.getItem(a)+'</scr' + 'ipt>').attr({type:'text/javascript', id:i}).appendTo($('head').remove('#'+i));" +
              "}"+              
              "else{" +
              "localStorage.clear();var flag=true;" +
              "for (let q =0;q<scriptsshow.length; q++ ) {" +
              "let b=scriptsshow[q];" +
			  "axios.get(b)." +
			  "then(function(data){localStorage.setItem(b, data.data);})" +
			  "}break;" +
			  "}" +
			  "}" +
			  "if (flag) {" +
			  "LazyLoad.js(scriptsshow,function(){});" +
			  "}" +
			  "})()" +
			  "</script>" +
			  "{% endblock %}";
              return _html;
}