(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return i});var a=n(8),r=(n(0),n(153));e.default=function(t){var e=t.data;return console.log(e),Object(a.b)(r.a,null,Object(a.b)("div",null,Object(a.b)("h1",null,"My Site's Files"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"relativePath"),Object(a.b)("th",null,"prettySize"),Object(a.b)("th",null,"extension"),Object(a.b)("th",null,"birthTime"))),Object(a.b)("tbody",null,e.allFile.edges.map(function(t,e){var n=t.node;return Object(a.b)("tr",{key:e},Object(a.b)("td",null,n.relativePath),Object(a.b)("td",null,n.prettySize),Object(a.b)("td",null,n.extension),Object(a.b)("td",null,n.birthTime))})))))};var i="567629725"},149:function(t,e,n){var a;t.exports=(a=n(152))&&a.default||a},150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p});var a=n(8),r=n(0),i=n.n(r),u=n(4),c=n.n(u),o=n(148),l=n.n(o);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return o.withPrefix}),n.d(e,"navigate",function(){return o.navigate}),n.d(e,"push",function(){return o.push}),n.d(e,"replace",function(){return o.replace}),n.d(e,"navigateTo",function(){return o.navigateTo});var s=n(149),b=n.n(s);n.d(e,"PageRenderer",function(){return b.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var f=i.a.createContext({}),p=function(t){return Object(a.b)(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},151:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(154),r=n.n(a),i=n(155),u=n.n(i),c=new r.a(u.a),o=c.rhythm},152:function(t,e,n){"use strict";n.r(e);n(52);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),c=n(53),o=n(2),l=function(t){var e=t.location,n=o.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=l},153:function(t,e,n){"use strict";var a=n(8),r=(n(0),n(150)),i=n(151),u={name:"146q31f",styles:"float:right;"},c={name:"146q31f",styles:"float:right;"};e.a=function(t){var e=t.children;return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(2),";padding-top:",Object(i.a)(1.5),";")},Object(a.b)(r.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(i.a)(2),";display:inline-block;font-style:normal;")},"Pandas Eating Lots")),Object(a.b)(r.Link,{to:"/about/",css:u},"About"),Object(a.b)(r.Link,{to:"/contact/",css:c},"Contact"),e)}}}]);
//# sourceMappingURL=component---src-pages-my-files-js-a12784fc1940b679ebfb.js.map