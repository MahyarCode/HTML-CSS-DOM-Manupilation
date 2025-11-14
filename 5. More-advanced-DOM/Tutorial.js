'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ///////////////////////////////////////
// // TODO Tutorial:

// // TODO Selecting Elements

// /* NOTE
// querySelector and querySelectorAll in HTML (JavaScript DOM methods) return static NodeLists or Elements.
// In contrast, methods like getElementsByClassName, getElementsByTagName, and getElementsByName return live HTMLCollections.

// it means the getElement methods return the update version of html when something change, but the querySelector returns the origin elements as they have been created
// */

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // NOTE if you remove one section from html and see the log of allSection, the list of sections still remains the same.
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// // NOTE if you remove one button from html and see the log of allButtons, that button is removed from the output list of buttons
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// // TODO Creating Elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'we use cookies for improved functionality and analytics'
// message.innerHTML =
//   'we use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // TODO Inserting Elements
// // NOTE let's add the cookie in the header part

// const header = document.querySelector('.header');

// // DESC prepend adds the element as the first child of the parent element ()
// header.prepend(message);

// // DESC append adds the element as the last child of the parent element ()
// header.append(message);

// /* NOTE
// the 'message' dom, placed at the end of the all elements from the header. not only we can use prepend and append to place element into another, but also we can move them. because of it, you see the message at the bottom of the header due to append it after prepending it.
// */

// // // DESC cloneNode returns a duplicate of an element
// // header.prepend(message);
// // header.append(message.cloneNode(true));

// // DESC if you want the message to be outside of header, use 'before' and 'after' method:
// header.after(message);
// header.before(message);

// // NOTE 'before' and 'after' method also operate like prepend and append in moving an element

// // TODO Delete Element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // TODO Styles
// // NOTE it will add inline style to the html which we can access to them directly
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.backgroundColor); // ✅
// console.log(message.style.width); // ✅
// console.log(message.style.height); // ❌ <empty string>
// // DESC getComputedStyle uses the browser specification and returns all the style of he specific element.
// console.log(getComputedStyle(message)); // ✅
// console.log(getComputedStyle(message).height); // ✅

// // DESC modify style of an element:
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // 50.3px ==> 50.3 + 30 + 'px' ==> 80.3px

// // DESC Changing the root color (in css)
// document.documentElement.style.setProperty('--color-primary', 'orange');

// // TODO Attributes
// /* NOTE
// every details in the html are attributes (src, class, lat, id, ...)
// */
// const logo = document.querySelector('.nav__logo');
// // DESC Standard attributes
// console.log(logo.src); // 'src' attribute
// console.log(logo.className); // 'className' attribute

// // DESC Non-standard attributes
// console.log(logo.designer); // ❌ undefined
// console.log(logo.getAttribute('designer')); // ✅

// // DESC Set an attribute value to something else
// // logo.alt = 'Beautiful Bankist logo';
// logo.setAttribute('alt', 'Beautiful Bankist logo');

// // DESC Set a new attribute
// logo.setAttribute('company', 'Bankist');

// // DESC the absolute version of src attribute:
// console.log(logo.src); // http://127.0.0.1:5500/5.%20More-advanced-DOM/img/logo.png
// console.log(logo.getAttribute('src')); // img/logo.png

// // DESC the absolute version of a link attribute:
// const link = document.querySelector('.twitter-link');
// console.log(link.href); // https://twitter.com/jonasschmedtman
// console.log(link.getAttribute('href')); // https://twitter.com/jonasschmedtman

// const link2 = document.querySelector('.nav__link--btn');
// console.log(link2.href); // http://127.0.0.1:5500/5.%20More-advanced-DOM/index.html#
// console.log(link2.getAttribute('href')); // #

// // DESC Data Structure
// // data-custom-value="3.0" || the 'data' is keyword. the rest should be written in camelCase
// console.log(logo.dataset.customValue);

// // TODO Classes:
// // document.querySelector('.class').classList.add('something')
// // document.querySelector('.class').classList.remove('something')
// // document.querySelector('.class').classList.toggle('something')
// // document.querySelector('.class').classList.contain('something')

// // TODO Scrolling
// const buttonScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// // buttonScrollTo.addEventListener('click', function (e) {
//   // // DESC this gives me the position we want to scroll (in this case: section--1)
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);

//   // // DESC this gives the current position of the button
//   // console.log(e.target.getBoundingClientRect());

//   // // DESC scrollX (pageXOffset in old version) will specify the live HORIZONTAL position of scrolling from the left of the page
//   // // DESC scrollY (pageYOffset in old version) will specify the live VERTICAL position of scrolling from the top of the page
//   // console.log(`current scroll (X/Y)`, window.scrollX, window.scrollY);
//   // console.log(`current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

//   // // DESC the height and width of the webpage in case of zooming or modifying the scale of window
//   // console.log(
//   //   'height/width viewport',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   //TODO Let's do the scroll in OLD SCHOOL WAY
//   // // DESC using window object method: scrollTo
//   // window.scrollTo(s1coords.left, s1coords.top); //❌ it doesn't work properly if we click it in the middle of the page

//   // // NOTE the current position + current scroll
//   // window.scrollTo(
//   //   s1coords.left + window.scrollX,
//   //   s1coords.top + window.scrollY
//   // ); // ✅

//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollX,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: 'smooth',
//   // }); // ✅✅✅

//   // TODO Let's do the scroll in MODERN WAY
//   section1.scrollIntoView({ behavior: 'smooth' }); // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// });

// // TODO Type of Events and EventHandlers (Reference: mdn js elements | mdn js DOM events)
// /*
// Event: signals generated from the DOM that something has happened. (e.g. click)
// */

// // DESC if you move the mouse to the h1, the alert pops up
// const h1 = document.querySelector('h1');

// const h1FunctionListener = function (e) {
//   alert('addEventListener: Great! you are reading the heading');

//   // // DESC the next line will remove the event listener; that means it happens once!
//   // h1.removeEventListener('mouseenter', h1FunctionListener);
// };

// h1.addEventListener('mouseenter', h1FunctionListener);
// // DESC or we can add the removeEventListener using the setTimeout after 3 seconds
// setTimeout(
//   () => h1.removeEventListener('mouseenter', h1FunctionListener),
//   3000
// );

// // // NOTE it alerts again after the event happens
// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great! you are reading the heading');
// // };

// // TODO Event Propagation:  Capturing and Bubbling
// /*
// Propagation means when an eventListener is define for both child element and parent element (e.g. click), when you click on the child element, the parent element's event is also executed.
// */

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1) + min);
// const randomRGB = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // e.preventDefault();
//   this.style.backgroundColor = randomRGB();
//   // DESC to stop the bubbling through all of the parent elements, this is a 'NOT RECOMMENDED way:
//   // NOTE IF YOU COMMENT THE NEXT LINE, YOU'LL SEE ALL THE ELEMENTS GET CHANGED
//   // e.stopPropagation();

//   /*
//   console.log(e.target); // class = nav__link
//   console.log(e.currentTarget); // class = nav__link
//   */
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // e.preventDefault();
//   this.style.backgroundColor = randomRGB();

//   /*
//   console.log(e.target); // class = nav__link
//   console.log(e.currentTarget); // class = nav__links
//   */
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     // e.preventDefault();
//     this.style.backgroundColor = randomRGB();
//     /*
//     console.log(e.target); // class = nav__link
//     console.log(e.currentTarget); // class = nav
//     */
//   },
//   true // NOTE setting the third argument of eventListener to true (default: false) makes it to execute it in the capturing phase (when the event starts from the root to bottom (the element); the default of false means that it execute the parents when the eventListener goes up to the root again)
// );

// // TODO Event Delegation

// // // DESC this is a 'NOT RECOMMENDED' way to assign eventListener to elements.
// // document.querySelectorAll('.nav__link').forEach(function (element) {
// //   element.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     const id = this.getAttribute('href');
// //     // console.log(id); e.g. #section--1
// //     document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
// //     // console.log(this);
// //   });
// // }); // NOTE what if we have 10000 elements? this is a huge overconsumption of efficiency

// /*
// In EventDelegation:
// 1. we first add the eventListener to a common parent element
// 2. Determine what element originated the event
// */

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log(e.target);

//   if (e.target.classList.contains('nav__link')) {
//     e.preventDefault();
//     console.log('link');
//     const id = e.target.getAttribute('href');
//     // console.log(id); e.g. #section--1
//     document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// // TODO DOM Traversing: walking through the html

// // NOTE Going DOWNWARDS !!! : to the child
// const duplicatedH1 = document.querySelector('h1');
// console.log(duplicatedH1.querySelectorAll('.highlight'));
// // DESC these 2 following methods only works for direct children
// console.log(duplicatedH1.childNodes);
// console.log(duplicatedH1.children);
// duplicatedH1.firstElementChild.style.backgroundColor = 'orange';
// duplicatedH1.lastElementChild.style.backgroundColor = 'red';

// // NOTE Going UPWARDS !!! : to the parent
// console.log(duplicatedH1.parentNode);
// console.log(duplicatedH1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-primary)';

// // NOTE Going SIDEWAYS !!! : to the siblings
// console.log(duplicatedH1.previousElementSibling);
// console.log(duplicatedH1.nextElementSibling);

// console.log(duplicatedH1.previousSibling);
// console.log(duplicatedH1.nextSibling);

// // DESC if you want to see all the siblings, you can move to the parent's node and then see all its children
// console.log(duplicatedH1.parentElement.children);
// [...duplicatedH1.parentElement.children].forEach(function (element) {
//   if (element !== h1) element.style.transform = 'scale(0.5)';
// });

// // TODO Tabbed Component : slide through parts of a section with 3 tabs above

// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainers = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabsContainers.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');

//   // NOTE as we used .closest for the target, we have white spaces that clicking on them cause errors. So, it is better to write the following statement:
//   if (!clicked) return; // DESC it stops the eventListener when clicking on white spaces.

//   // DESC Active the clicked TAB
//   tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
//   clicked.classList.add('operations__tab--active');

//   // DESC Active the CONTENT area
//   tabsContent.forEach(content =>
//     content.classList.remove('operations__content--active')
//   );
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
//   // tabsContent.forEach(tab => tab.classList.remove('operations__tab--active'));
//   // clicked.classList.add('operations__tab--active');
// });

// // TODO Passing arguments to Event Handlers
// // NOTE menu fade animation:

// const nav = document.querySelector('.nav');

// // NOTE refactoring the Commented operation :
// const handleHover = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;

//     console.log(this);
//   }
// };
// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));

// // // DESC the mouseover is when the mouse is moving in the element area
// // nav.addEventListener('mouseover', function (e) {
// //   if (e.target.classList.contains('nav__link')) {
// //     const link = e.target;
// //     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
// //     const logo = link.closest('.nav').querySelector('img');
// //     siblings.forEach(el => {
// //       if (el !== link) el.style.opacity = 0.5;
// //     });
// //     logo.style.opacity = 0.5;
// //   }
// // });

// // // DESC the mouseout is the opposite of mouseover when the mouse is outside of the element area
// // nav.addEventListener('mouseout', function (e) {
// //   if (e.target.classList.contains('nav__link')) {
// //     const link = e.target;
// //     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
// //     const logo = link.closest('.nav').querySelector('img');

// //     siblings.forEach(el => {
// //       if (el !== link) el.style.opacity = 1;
// //     });
// //     logo.style.opacity = 1;
// //   }
// // });

// // TODO Sticky Navigation
// const nav = document.querySelector('.nav');

// // // DESC OLD SCHOLL AND NOT RECOMMENDED WAY
// // window.addEventListener('scroll', function () {
// // const initialCoords = section1.getBoundingClientRect();
// // const section1 = document.querySelector('#section--1');
// //   // console.log('window.scrollY :', window.scrollY);
// //   // console.log('initialCoords.top :', initialCoords.top);
// //   if (this.window.scrollY + 90 > initialCoords.top) nav.classList.add('sticky');
// //   else nav.classList.remove('sticky');
// // });

// // DESC IntersectionObserver : the modern way ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries; // entries[0]
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);
