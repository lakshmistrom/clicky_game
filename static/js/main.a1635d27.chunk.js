(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),o=(a(22),a(2)),i=a(3),l=a(5),u=a(4),m=a(6);var h=function(e){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar-dark bg-dark fixed-top"},r.a.createElement("div",{className:"container-fluid my-3"},r.a.createElement("div",{className:"row align-items-center justify-content-between text-white"},r.a.createElement("div",{className:"col-sm-auto"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("h1",null,"Clicky Game"))),r.a.createElement("div",{className:"col-sm-auto"},r.a.createElement("p",{className:"mb-0"},e.guessedStatus)),r.a.createElement("div",{className:"col-sm-auto"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("strong",null,"Score:")," ",e.score,"  ",r.a.createElement("strong",null,"| Top Score:")," ",e.topScore," "))))))};var d=function(e){return r.a.createElement("img",{alt:e.name,className:"img-fluid",src:e.image,onClick:e.onclick})},f=a(15),g=a.n(f),v={search:function(){return g.a.get("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12]")}},p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).searchCharacters=function(){v.search().then(function(e){return a.setState({result:e.data})}).catch(function(e){return console.log(e)})},a.clickedChars={},a.state={result:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.searchCharacters()}},{key:"render",value:function(){var e=this,t=this.state.result;return console.log(t),r.a.createElement("div",{className:"mt-5"},t.map(function(t){return r.a.createElement(d,{key:t.id,name:t.name,image:t.image,onclick:function(){return e.handleClick(t.id)}})}))}},{key:"shuffle",value:function(){var e=this.state.result.slice();e.sort(function(e,t){return.5-Math.random()}),this.setState({result:e})}},{key:"handleClick",value:function(e){console.log(e);var t=e;this.shuffle(),this.clickedChars[t]?(this.clickedChars={},this.props.onIncorrectGuess()):(this.clickedChars[t]=!0,this.props.onCorrectGuess())}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,guessedStatus:"Click an image to begin! To earn points avoid clicking the same image more than once."},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,guessedStatus:this.state.guessedStatus}),r.a.createElement(p,{onCorrectGuess:function(){return e.correctGuess()},onIncorrectGuess:function(){return e.incorrectGuess()}}))}},{key:"correctGuess",value:function(){console.log("You guessed correctly!");var e=this.state.score+1,t=this.state.topScore;e>this.state.topScore&&t++;var a={score:e,topScore:t,guessedStatus:"You guessed correctly!"};this.setState(a)}},{key:"incorrectGuess",value:function(){console.log("You guessed incorrectly!");this.setState({score:0,guessedStatus:"You guessed incorrectly!"})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.a1635d27.chunk.js.map