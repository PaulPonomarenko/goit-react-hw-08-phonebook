"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[60],{60:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var a=n(791),s=n(439),r="FormData_main__form__UvrQX",c="FormData_phonebook__title__r3wqc",l="FormData_input__form__9d5RV",_="FormData_form__button__3uF3l",i="FormData_input__change__uCPtf",o="FormData_form__label__fCgAu",u="FormData_submit__button__Ul2cu",m=n(434),h=n(634),d=n(184);function f(){var e=(0,m.I0)(),t=(0,a.useState)(""),n=(0,s.Z)(t,2),f=n[0],x=n[1],j=(0,a.useState)(""),p=(0,s.Z)(j,2),N=p[0],b=p[1],v=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":x(a);break;case"phone":b(a);break;default:return}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:c,children:"PHONEBOOK"}),(0,d.jsx)("div",{className:r,children:(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e((0,h.uK)({name:f,phone:N})),x(""),b(""),t.target.reset()},children:[(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("label",{className:o,children:"Name"}),(0,d.jsx)("input",{className:i,onChange:v,type:"text",name:"name",required:!0,placeholder:"Name",defaultValue:f})]}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("label",{className:o,children:"Number"}),(0,d.jsx)("input",{className:i,onChange:v,type:"tel",name:"phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Number",defaultValue:N})]}),(0,d.jsx)("div",{className:_,children:(0,d.jsx)("button",{className:u,type:"submit",children:"Add contact"})})]})})]})}var x="Contacts_contact__title__C1b7k",j="Contacts_contacts__container__2SjKn",p="Contacts_contacts__list__oD9-W",N="Contacts_contact__item__Fzv+w",b="Contacts_contact__number__NwOGr",v="Contacts_contact__delete__jG7J2",C="Contacts_no__contacts__CrFNy",F=function(e){return e.contacts.items},g=function(e){return e.filter.filter},k=function(){var e=(0,m.I0)(),t=(0,m.v9)(F),n=(0,m.v9)(g),a=function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log(t),e}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:x,children:"Contacts"}),(0,d.jsx)("div",{className:j,children:0!==t.length?(0,d.jsx)("ul",{className:p,children:a.map((function(t){var n=t.name,a=t.id,s=t.phone;return(0,d.jsxs)("li",{className:N,children:[(0,d.jsxs)("p",{children:[n,":"]}),(0,d.jsx)("span",{className:b,children:s}),(0,d.jsx)("button",{type:"button",className:v,onClick:function(){return e((0,h.GK)(a))},children:"Delete"})]},a)}))}):(0,d.jsx)("p",{className:C,children:"CONTACTS NOT FOUND"})})]})},w="Filter_filter__vxThR",D="Filter_label__filter__MTKLE",y="Filter_filter__input__toa89",O=n(808),T=function(){var e=(0,m.I0)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:w,children:[(0,d.jsx)("label",{htmlFor:"filter",className:D,children:"Find contact by name"}),(0,d.jsx)("input",{className:y,type:"text",id:"filter",onChange:function(t){e((0,O.T)(t.target.value))}})]})})};function K(){var e=(0,m.I0)();return(0,a.useEffect)((function(){e((0,h.yF)())}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(T,{}),(0,d.jsx)(k,{})]})}}}]);
//# sourceMappingURL=60.3bb91fe2.chunk.js.map