"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{5873:function(n,e,t){t.d(e,{Z:function(){return v}});var a=t(9439),r=t(2791),o=t(5737),u=t.n(o),c=(t(8404),"formInput_modal__w6nDG"),s="formInput_active__I834o",i="formInput_from__XXMrf",l="formInput_input_name__cRdDS",m="formInput_buttonAdd__apLl4",d=t(5984),h=t(9434),p=t(7638),f=t(7689),_=t(281),x=t(3329);function v(n){var e=n.active,t=(0,f.s0)(),o=(0,h.I0)(),v=(0,h.v9)((function(n){return n.contacts.items})),b=(0,h.v9)((function(n){return n.active})),j=(0,r.useState)(""),C=(0,a.Z)(j,2),g=C[0],k=C[1],y=(0,r.useState)(""),N=(0,a.Z)(y,2),w=N[0],A=N[1];return(0,x.jsx)("div",{className:b?s:c,onClick:function(){o((0,_.r)(!1))},children:(0,x.jsxs)("form",{onSubmit:function(n){!function(n,e){n.preventDefault();var t={name:n.currentTarget.elements.name.value,number:e,id:(0,d.x0)(10)};v.some((function(n){return n.name.includes(t.name)}))?alert("a contact with the same name already exists!"):(o((0,p.uK)(t)),o((0,_.r)(!1)))}(n,g),t("/contacts"),A(""),k("")},className:i,onClick:function(n){return n.stopPropagation()},children:[(0,x.jsx)("h1",{children:"Add Contact"}),(0,x.jsx)("p",{children:"Name"}),(0,x.jsx)("label",{htmlFor:"name",children:(0,x.jsx)("input",{type:"text",name:"name",value:w,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){"name"===n.currentTarget.name&&A(n.currentTarget.value)},className:l})}),(0,x.jsx)("p",{children:"Phone"}),(0,x.jsx)("label",{htmlFor:"number",children:(0,x.jsx)(u(),{country:"us",value:g,name:"number",onChange:function(n){k(n)},className:"gg",inputClass:"my-input-class",inputStyle:{width:"404px"}})}),(0,x.jsx)("button",{type:"submit",className:m,onClick:e,children:"Add"})]})})}},4186:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});t(2791);var a="buttonModal_container__QZwh7",r="buttonModal_button__mZdMn",o="buttonModal_title__+BMVV",u=t(9434),c=t(281),s=t(3329);function i(){var n=(0,u.v9)((function(n){return n.auth.isLoggedIn})),e=(0,u.v9)((function(n){return n.auth.user.name})),t=(0,u.I0)();return n&&(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:a,children:[(0,s.jsxs)("h1",{className:o,children:[e[0].toUpperCase()+e.slice(1),", welcome to your personal phoone book!"]}),(0,s.jsx)("button",{type:"button",onClick:function(){t((0,c.r)(!0)),document.getElementsByName("name")[0].focus()},className:r,children:"Add Contact"})]})})}var l=t(5873);function m(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{}),(0,s.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=186.9325d54f.chunk.js.map