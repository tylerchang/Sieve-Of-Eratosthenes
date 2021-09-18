(this["webpackJsonpsieve-of-eratosthenes"]=this["webpackJsonpsieve-of-eratosthenes"]||[]).push([[0],{10:function(e,t,i){},12:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),r=i(4),o=i.n(r),a=(i(9),i(2)),c=(i(10),i(0)),l=function(e){var t=Object(c.jsx)("div",{});return t=e.prime?Object(c.jsxs)("div",{style:{width:"100px",height:"100px",border:"1px solid black",background:"green",textAlign:"center",fontSize:"35px",fontFamily:"Oswald, sans-serif"},children:[" ",e.number," "]}):Object(c.jsxs)("div",{style:{width:"100px",height:"100px",border:"1px solid black",textAlign:"center",fontSize:"35px",fontFamily:"Oswald, sans-serif"},children:[" ",e.number," "]}),Object(c.jsx)("div",{children:t})},h=function(){var e=Object(n.useState)(),t=Object(a.a)(e,2),i=t[0],s=t[1],r=Object(n.useState)([]),o=Object(a.a)(r,2),h=o[0],b=o[1],u=Object(n.useState)(!1),j=Object(a.a)(u,2),d=j[0],m=j[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"headers",children:"The Sieve of Eratosthenes Prime Number Generator"}),Object(c.jsxs)("div",{className:"inputs",children:[Object(c.jsx)("input",{type:"text",className:"input_box",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Limit(n)"}),Object(c.jsx)("button",{className:"generate_button",onClick:function(){if("number"===typeof parseInt(i)){var e=function(e){for(var t=[],i=0,n=0;n<=e;n++)t.push(!0);t[0]=!1,t[1]=!1;for(var s=2;s<=Math.sqrt(e);s++)if(!0===t[s]){i=0;for(var r=s*s;r<=e;r=s*s+i*s)t[r]=!1,i++}return t}(i);b(e),m(!0)}},children:"Generate"}),Object(c.jsx)("button",{className:"reset_button",onClick:function(){m(!1)},children:"Reset"})]}),Object(c.jsx)("div",{className:"container",children:d&&Object(c.jsx)("div",{className:"body",children:h.map((function(e,t){return Object(c.jsx)(l,{number:t,prime:e})}))})}),!d&&Object(c.jsxs)("div",{className:"description",children:["Enter ",Object(c.jsx)("i",{children:"n"})," into the textbox and click Generate! This will compute all the prime numbers up to ",Object(c.jsx)("i",{children:"n"}),". WARNING: ",Object(c.jsx)("i",{children:"n"})," > 90,000 will crash the site.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"How The Algorithm Works:",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"During my Number Theory course in college, we learned about The Sieve of Eratosthenes. Although simple, I still found this ancient method of computing prime numbers to be a pretty fascinating algorithm. The main idea is that if we start with a set of all positive integers between 1 and any limit ",Object(c.jsx)("i",{children:"n"}),", then we eliminate all composite numbers up to ",Object(c.jsx)("i",{children:"n"}),", everything that is left must be prime.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"The algorithm starts by pointing to the first number, let's say 2. A second pointer would then start iterating through all the multiples of 2 and crossing them off since any multiple would be considered composite. This process then happens for 3. However, once it gets to 4, it would've already been crossed off as composite since when the algorithm ran for 2, 4 was detected as a mutiple of 2. So, the pointer then skips to 5. The process keeps going until we hit ",Object(c.jsx)("i",{children:"n"}),". Notice that the algorithm gets progressively faster since more numbers are getting eliminated.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"If you would like a way better explanation, you can read about it ",Object(c.jsx)("a",{href:"https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes",children:"here."})," Thought it would be fun to code up this little simulation of the algorithm. I was never the best at math, let alone a proof-based math course, but Number Theory was quite memorable and interesting. Even if I don't remember everything from this course in the future, I will at least have this project to look back on :)",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"~Tyler",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Sept. 2021"]})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;i(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()},9:function(e,t,i){}},[[12,1,2]]]);
//# sourceMappingURL=main.6f2d5fab.chunk.js.map