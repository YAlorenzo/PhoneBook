"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{5873:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(9439),r=t(9434),o=t(7638),u=t(7689),c=t(281),s=t(2791),i=t(5737),l=t.n(i),m=t(5984),d=(t(8404),"formInput_modal__w6nDG"),h="formInput_active__I834o",f="formInput_from__XXMrf",p="formInput_input_name__cRdDS",_="formInput_buttonAdd__apLl4",x=t(3329);function v(e){var n=e.active,t=(0,u.s0)(),i=(0,r.I0)(),v=(0,r.v9)((function(e){return e.contacts.items})),b=(0,r.v9)((function(e){return e.active})),j=(0,s.useState)(""),C=(0,a.Z)(j,2),g=C[0],k=C[1],y=(0,s.useState)(""),N=(0,a.Z)(y,2),w=N[0],A=N[1];return(0,x.jsx)("div",{className:b?h:d,onClick:function(){i((0,c.r)(!1))},children:(0,x.jsxs)("form",{onSubmit:function(e){!function(e,n){e.preventDefault();var t={name:e.currentTarget.elements.name.value,number:n,id:(0,m.x0)(10)};v.some((function(e){return e.name.includes(t.name)}))?alert("a contact with the same name already exists!"):(i((0,o.uK)(t)),i((0,c.r)(!1)))}(e,g),t("/contacts"),A(""),k("")},className:f,onClick:function(e){return e.stopPropagation()},children:[(0,x.jsx)("h1",{children:"Add Contact"}),(0,x.jsx)("p",{children:"Name"}),(0,x.jsx)("label",{htmlFor:"name",children:(0,x.jsx)("input",{type:"text",name:"name",value:w,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){"name"===e.currentTarget.name&&A(e.currentTarget.value)},className:p})}),(0,x.jsx)("p",{children:"Phone"}),(0,x.jsx)("label",{htmlFor:"number",children:(0,x.jsx)(l(),{country:"us",value:g,name:"number",onChange:function(e){k(e)},inputStyle:{width:"404px"}})}),(0,x.jsx)("button",{type:"submit",className:_,onClick:n,children:"Add"})]})})}},4186:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(2791);var a=t(9434),r=t(281),o="buttonModal_container__QZwh7",u="buttonModal_button__mZdMn",c="buttonModal_title__+BMVV",s=t(3329);function i(){var e=(0,a.v9)((function(e){return e.auth.isLoggedIn})),n=(0,a.v9)((function(e){return e.auth.user.name})),t=(0,a.I0)();return e&&(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:o,children:[(0,s.jsxs)("h1",{className:c,children:[n[0].toUpperCase()+n.slice(1),", welcome to your personal phoone book!"]}),(0,s.jsx)("button",{type:"button",onClick:function(){t((0,r.r)(!0)),document.getElementsByName("name")[0].focus()},className:u,children:"Add Contact"})]})})}var l=t(5873);function m(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{}),(0,s.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=186.cc76ff6f.chunk.js.map