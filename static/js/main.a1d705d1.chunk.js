(this["webpackJsonppendu-react"]=this["webpackJsonppendu-react"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),a=s(3),i=s.n(a),c=s(4),o=s(5),l=s(7),d=s(6);String.prototype.replaceAt=function(e,t){return this.substr(0,e)+t+this.substr(e+t.length)};s(12);var u=s(0),h=function(e){var t=e.letter,s=e.letterBlur,r=e.letterBlock,n=e.lettersHidden,a=e.index,i=e.onClick;return Object(u.jsx)("div",{className:"letter-block ".concat(r," ").concat(n),onClick:function(){return i(a)},children:Object(u.jsx)("span",{className:"letters ".concat(s),children:t})},a)},k=(s(14),["React","Single-page Application","ECMAScript","Compilateurs","Bundlers","Gestionnaires de paquets","CDN","JSX","Elements","Composants","props","state","Methodes de cycle de vie","Composants controles","non controles","Cles","Refs","Evenements","Reconciliation"]),p=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],j=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).state={wordToGuess:r.randWord().toUpperCase(),wordToGuessMasked:"",clickedLetters:[],lettersHidden:"",restartHidden:"hidden",won:!1},console.log(r.state.wordToGuess),r}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.setState({wordToGuessMasked:this.maskWord(this.state.wordToGuess)})}},{key:"randWord",value:function(){return k[(e=19,Math.floor(Math.random()*Math.floor(e)))];var e}},{key:"maskWord",value:function(e){return e.replace(/\w/gi,"_")}},{key:"getClassForLetter",value:function(e){return this.state.clickedLetters.includes(e)?"letter-blur":""}},{key:"getClassForLetterBlock",value:function(e){return this.state.clickedLetters.includes(e)?"letter-block-add":""}},{key:"hideLetters",value:function(){this.setState({lettersHidden:"hidden"})}},{key:"showRestart",value:function(){this.setState({restartHidden:""})}},{key:"checkWordCompleted",value:function(){var e=this.state,t=e.wordToGuess;e.wordToGuessMasked===t&&(this.setState({won:!0}),this.hideLetters(),this.showRestart())}},{key:"handleRestart",value:function(){var e=this;this.setState({lettersHidden:"",restartHidden:"hidden"},(function(){e.resetAll()}))}},{key:"resetAll",value:function(){var e=this;this.setState({wordToGuess:this.randWord().toUpperCase(),clickedLetters:[],won:!1},(function(){e.setState({wordToGuessMasked:e.maskWord(e.state.wordToGuess)})}))}},{key:"handleLetterOnClick",value:function(e){var t=this,s=this.state,r=s.wordToGuess,n=s.wordToGuessMasked,a=s.clickedLetters,i=n.slice();if(!a.includes(e)&&r.includes(p[e]))for(var c=0;c<r.length;c++)r[c]===p[e]&&(i=i.replaceAt(c,p[e]),this.setState({wordToGuessMasked:i,clickedLetters:a.concat(e)},(function(){t.checkWordCompleted()})))}},{key:"render",value:function(){var e=this,t=this.state,s=t.lettersHidden,r=t.restartHidden;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"center-middle",children:[Object(u.jsx)("h1",{children:"LE PENDU EN REACT JS"}),Object(u.jsx)("h2",{children:"Devinez le mot qui se cache derri\xe8re les tirets \xe0 l'aide des lettres."}),Object(u.jsxs)("div",{className:"restart ".concat(r),children:[Object(u.jsx)("span",{"aria-label":"congratulation",role:"img",children:Object(u.jsx)("p",{children:"Bien jou\xe9 ! \ud83c\udf89"})}),Object(u.jsx)("iframe",{src:"https://giphy.com/embed/g9582DNuQppxC",title:"Congratulation",width:"480",height:"270",frameBorder:"0",className:"giphy-embed",allowFullScreen:!0}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://giphy.com/gifs/hero0fwar-karmawhore-rhyming-g9582DNuQppxC",children:"via GIPHY"})})]}),Object(u.jsxs)("span",{className:"masked-text",children:[" ",this.state.wordToGuessMasked," "]}),Object(u.jsxs)("div",{className:"letters-block",children:[p.map((function(t,r){return Object(u.jsx)(h,{letter:t,letterBlur:e.getClassForLetter(r),letterBlock:e.getClassForLetterBlock(r),lettersHidden:s,index:r,onClick:e.handleLetterOnClick.bind(e)},r)})),Object(u.jsx)("div",{className:"letter-block restart ".concat(r),children:Object(u.jsx)("span",{"aria-label":"restart",role:"img",className:"letters",onClick:this.handleRestart.bind(this),children:"\ud83d\udd04"})})]})]})})}}]),s}(n.a.Component),b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),r(e),n(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.a1d705d1.chunk.js.map