(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),l=a(1),c=a(2),o=a(4),m=a(3),u=(a(13),a(6),function(t){var e=t.image,a=t.width;return r.a.createElement("img",{src:e,alt:"",style:{width:"".concat(a,"px")}})});u.defaultProps={width:130};var p=u,g=function(t){Object(o.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={left:0},t.scrollLeft=function(){var e=t.props,a=e.images,n=e.frameSize,r=e.step,i=e.itemWidth,s=t.state.left;s-=i*r,Math.abs(s)>=(a.length-n)*i&&(s=-(a.length-n)*i),t.setState({left:s})},t.scrollRight=function(){var e=t.props,a=e.itemWidth,n=e.step,r=t.state.left;(r+=a*n)>0&&(r=0),t.setState({left:r})},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props,e=t.frameSize,a=t.itemWidth,n=t.animationDuration,i={width:a*e,transition:n},s={transform:"translateX(".concat(this.state.left,"px)"),transitionDuration:"".concat(n,"ms")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Carousel",style:i},r.a.createElement("ul",{className:"Carousel__list",style:s},this.props.images.map((function(t){return r.a.createElement("li",{key:t},r.a.createElement(p,{image:t,width:a}))})))),r.a.createElement("button",{type:"button",onClick:this.scrollRight},"Prev"),r.a.createElement("button",{type:"button",onClick:this.scrollLeft},"Next"))}}]),a}(r.a.Component),h=function(t){Object(o.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state.images;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Carousel with ",t.length," images"),r.a.createElement(g,{images:t,step:3,frameSize:3,itemWidth:100,animationDuration:2e3,infinite:!1}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(h,null),document.getElementById("root"))},6:function(t,e,a){},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.72795e8a.chunk.js.map