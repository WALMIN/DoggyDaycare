(this["webpackJsonpdoggy-daycare"]=this["webpackJsonpdoggy-daycare"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(17),a=s.n(r),o=(s(24),s(25),s(26),s(7)),i=s(0);var l=function(){return Object(i.jsxs)("div",{className:"Home",style:{backgroundImage:"url('".concat("/DoggyDaycare","/images/background.jpg')")},children:[Object(i.jsxs)("main",{children:[Object(i.jsx)("h1",{className:"Title",children:"Welcome!"}),Object(i.jsxs)("p",{className:"Text",children:["Doggy Daycare helps you keep track",Object(i.jsx)("br",{}),"of all the dogs at your place."]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(o.b,{className:"Button",to:"/register",children:"See all the dogs"}),Object(i.jsx)(o.b,{className:"Button",to:"/",children:"More info"})]})]}),Object(i.jsxs)("footer",{children:["Photo by ",Object(i.jsx)("a",{href:"https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Alvan Nee"})," on ",Object(i.jsx)("a",{href:"https://unsplash.com/s/photos/dogs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})},j=s(9),d=(s(33),s(15)),b=s.n(d),u=s(19),h=function(e){var t=Object(c.useState)([]),s=Object(j.a)(t,2),n=s[0],r=s[1];return Object(c.useEffect)((function(){function t(){return(t=Object(u.a)(b.a.mark((function t(){var s,c,n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return s=t.sent,t.next=5,s.json();case 5:return c=t.sent,t.next=8,JSON.stringify(c);case 8:n=t.sent,localStorage.setItem("data",n),a=localStorage.getItem("data"),r(JSON.parse(a));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),{data:n}};var g=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)("present"),a=Object(j.a)(r,2),l=a[0],d=a[1],b=Object(c.useState)(!0),u=Object(j.a)(b,2),g=u[0],m=u[1],x=Object(c.useState)("\u2193"),O=Object(j.a)(x,2),p=O[0],f=O[1],N=h("https://api.jsonbin.io/b/608820de5210f622be3b3ec6").data,y=function(e,t){switch(t){case"age":return e.age;case"breed":return e.breed;case"owner":return e.owner.name;case"sex":return e.sex;case"present":default:return e.present}};return Object(i.jsxs)("div",{className:"Dogs",children:[Object(i.jsx)("input",{type:"search",placeholder:"Search by name or owner...",onChange:function(e){n(e.target.value)}}),Object(i.jsxs)("div",{className:"Sort",children:[Object(i.jsx)("p",{children:"Sort:"}),Object(i.jsx)("button",{className:"SortAscending",onClick:function(){m(!g),f(g?"\u2191":"\u2193")},children:p}),Object(i.jsx)("button",{className:"age"===l?"SortButtonCurrent":"SortButton",onClick:function(){return d("age")},children:"Age"}),Object(i.jsx)("button",{className:"breed"===l?"SortButtonCurrent":"SortButton",onClick:function(){return d("breed")},children:"Breed"}),Object(i.jsx)("button",{className:"owner"===l?"SortButtonCurrent":"SortButton",onClick:function(){return d("owner")},children:"Owner"}),Object(i.jsx)("button",{className:"sex"===l?"SortButtonCurrent":"SortButton",onClick:function(){return d("sex")},children:"Sex"}),Object(i.jsx)("button",{className:"present"===l?"SortButtonCurrent":"SortButton",onClick:function(){return d("present")},children:"Present"})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("main",{children:N.length>0?N.sort((function(e,t){return e.name>t.name?1:-1})).sort((function(e,t){return y(e,l)>y(t,l)?g?-1:1:g?1:-1})).filter((function(e){return""===s||e.name.toLowerCase().includes(s.toLowerCase())||e.owner.name.toLowerCase().includes(s.toLowerCase())||e.owner.lastName.toLowerCase().includes(s.toLowerCase())?e:null})).map((function(e,t){return Object(i.jsxs)(o.b,{className:"DogItem",to:"/dog/"+e.chipNumber,children:[Object(i.jsx)("img",{src:e.img,alt:"dog",style:{borderColor:!0===e.present?"#CCD4BF":"#EEBAB2"}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"title",children:e.name}),Object(i.jsxs)("p",{children:[e.owner.name,Object(i.jsx)("br",{}),e.owner.lastName]})]})]},t)})):Object(i.jsxs)("div",{className:"Loading",children:[Object(i.jsx)("img",{src:"/DoggyDaycare/images/breed.svg",className:"LoadingLogo",alt:"logo"}),Object(i.jsx)("p",{className:"LoadingTitle",children:"Loading dogs..."})]})})]})},m=(s(35),s(2)),x=function(e){var t=Object(m.f)().chipNumber,s=h("https://api.jsonbin.io/b/608820de5210f622be3b3ec6").data;return Object(i.jsx)("div",{className:"Dog",children:s.length>0?s.filter((function(e){return e.chipNumber.toLowerCase()===t.toLowerCase()?e:null})).map((function(e,t){return Object(i.jsxs)("main",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{className:"DogImage",src:e.img,alt:"dog"}),Object(i.jsx)("h1",{children:e.name})]}),Object(i.jsxs)("div",{className:"DogInfo",children:[Object(i.jsxs)("div",{className:"Item",children:[Object(i.jsx)("p",{className:"Title",children:"Sex"}),Object(i.jsxs)("div",{className:"Content",children:[Object(i.jsx)("p",{children:e.sex}),Object(i.jsx)("img",{src:"female"===e.sex?"/DoggyDaycare/images/female.svg":"/DoggyDaycare/images/male.svg",alt:"sex"})]})]}),Object(i.jsx)("div",{className:"Item",children:Object(i.jsxs)("a",{href:"https://www.petfinder.com/dog-breeds/"+e.breed,target:"_blank",rel:"noopener noreferrer",children:[Object(i.jsx)("p",{className:"Title",children:"Breed"}),Object(i.jsxs)("div",{className:"Content",children:[Object(i.jsx)("p",{children:e.breed}),Object(i.jsx)("img",{src:"/DoggyDaycare/images/help.svg",alt:"help"})]})]})}),Object(i.jsxs)("div",{className:"Item",children:[Object(i.jsx)("p",{className:"Title",children:"Age"}),Object(i.jsxs)("p",{children:[e.age," ",e.age>1?"years":"year"]})]}),Object(i.jsxs)("div",{className:"Item",style:{background:!0===e.present?"#CCD4BF":"#EEBAB2"},children:[Object(i.jsx)("p",{className:"Title",children:"Present"}),Object(i.jsx)("p",{children:!0===e.present?"Yes":"No"})]})]}),Object(i.jsx)("div",{className:"OwnerInfo",children:Object(i.jsxs)("div",{className:"Content",children:[Object(i.jsx)("img",{src:"/DoggyDaycare/images/owner.svg",alt:"owner"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{className:"Title",children:[e.owner.name," ",e.owner.lastName]}),Object(i.jsx)("p",{className:"Text",children:e.owner.phoneNumber})]}),Object(i.jsx)("a",{href:"tel:"+e.owner.phoneNumber,children:Object(i.jsx)("img",{className:"Call",src:"/DoggyDaycare/images/phone.svg",alt:"phone"})})]})}),Object(i.jsxs)("p",{className:"DogChip",children:["Chip number: ",e.chipNumber]})]},t)})):Object(i.jsxs)("div",{className:"Loading",children:[Object(i.jsx)("img",{src:"/DoggyDaycare/images/breed.svg",className:"LoadingLogo",alt:"logo"}),Object(i.jsx)("p",{className:"LoadingTitle",children:"Loading dog..."})]})})};s(36);var O=function(){return Object(i.jsxs)("div",{className:"NoPage",children:[Object(i.jsx)("h1",{children:"This page doesn't exist."}),Object(i.jsx)(o.b,{className:"GoBack",to:"/",children:"Go back to Doggy Daycare."})]})};var p=function(){return Object(i.jsx)(o.a,{basename:"/",children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsxs)(o.b,{className:"Logo",to:"/",children:[Object(i.jsx)("img",{src:"/DoggyDaycare/images/doggy-daycare.png",alt:"logo"}),Object(i.jsx)("h2",{children:"Doggy Daycare"})]})}),Object(i.jsx)("main",{children:Object(i.jsxs)(m.c,{children:[Object(i.jsxs)(m.a,{exact:!0,path:"/",children:[" ",Object(i.jsx)(l,{})," "]}),Object(i.jsxs)(m.a,{exact:!0,path:"/register",children:[" ",Object(i.jsx)(g,{})," "]}),Object(i.jsxs)(m.a,{exact:!0,path:"/dog/:chipNumber",children:[" ",Object(i.jsx)(x,{})," "]}),Object(i.jsxs)(m.a,{path:"*",children:[" ",Object(i.jsx)(O,{})," "]})]})})]})})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),f()}},[[37,1,2]]]);
//# sourceMappingURL=main.c04805bf.chunk.js.map