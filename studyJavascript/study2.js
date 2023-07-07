//---------------------------------- 13. HTML DOM---------------------------------
// Document Object Model || Có 3 thành phần
/**
 * 1. Element
 * 2. Attribute
 * 3.Text
 */
// Javascript: Browser | Server (NodeJS)
//Browser: HTML -> DOM -> WEB API

// console.log(document)
// document.write('HELLO GUYS')

// ================ Get element methods                       ======
// 1. Element: ID, class, tag,
// CSS selector, HTML collection
// 2. Attribute
// 3. Text
// var headingNode = document.getElementById("heading");
// // console.log(headingNode);
// console.log({
//     element: headingNode
// })

// var headingNode = document.getElementsByClassName("heading");
// console.log(headingNode);

// var headingNode = document.getElementsByTagName("p");
// console.log(headingNode);

// var headingNode = document.querySelectorAll('.box .heading-2:nth-child(2)');
// console.log(headingNode);

// var formlist = document.forms
// console.log(formlist['testForm'])
// console.log(document.forms)

// >>>>>>>>>>>>>>>>>>>>>> BT Get element
/**
 * Sử dụng các biến đã cho sẵn dưới đây
 */

// var productsListElement = document.getElementsByClassName('products-list')
// var firstProductElement = document.getElementsByClassName('.products-list .product:first-child')
// var buttonElements = document.buttons

// console.log(productsListElement)
// console.log(firstProductElement)
// console.log(buttonElements)


// ================ 136. Get element methods - 2                     ======

//cach 1
// var listItemNodes = document.querySelectorAll('.box-1 li');
// console.log(listItemNodes)

// công việc1: sử dụng tới `boxNode`
//công việc 2: sử dụng tới các li elements là con của `.box-1`

// cach 2
// var boxNode = document.querySelector('.box-1');
// console.log(boxNode.querySelectorAll('li'))
// console.log(boxNode.getElementsByTagName('li'))

// ================ 137. Get element methods - 3                     ======
// 1. getElementsByID
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

// 6. HTML collection
// 7. document.write

//6
// console.log(document.forms);

//7
// document.write('Hello')

// ================ 139. DOM attribute          ======
// thêm attribute vào element từ js

// var headingElement = document.querySelector('h2')

// headingElement.title = "title-2";
// headingElement.className = "heading";
// headingElement.setAttribute('data','test data')
// console.log(headingElement.getAttribute('class'))
// console.log(headingElement.title) // . hợp lệ thì chỉ cần viết ntn k cần get
// console.log(headingElement.getAttribute('data'))

// ================ InnerText vs textContent Property          ======
// innerText, textContent

// var headingElement = document.querySelector('.heading');
// console.log(headingElement.innerText); //day la geter
// console.log(headingElement.textContent);
// headingElement.innerText = 'New heading' //day la seter
// headingElement.innerText = '<i>New heading</i>'
// headingElement.textContent = `

// demo Heading

// `
// console.log(headingElement.innerText); //day la geter
// console.log(headingElement.textContent);
//khi get thì innerText sẽ lấy nội dung y chang trên trình duyệt thấy, còn
// textContent thì sẽ lấy nội dung thật trong source code(DOM)

// ================ 143. InnerHTML vs OuterHTML Property          ======
// 1. Element
// 2. Attribute
// 3. Text

// innerHTML, outerHTML
// dùng để thêm, thay đổi nội dung element vào element thường dùng innerHTML, khác biệt
// là thay thể,

// var boxElement = document.querySelector('.box')
//innerHTML
// boxElement.innerHTML = '<h1 title = "heading">New Heading</h1>'
// console.log(boxElement.innerHTML)
// boxElement.innerHTML = '<span>Test</span>' // còn thẻ có class box

//outerHTML
// boxElement.innerHTML = '<h1 title = "heading">New Heading</h1>'
// boxElement.outerHTML = '<span>Test</span>' // ghi đè cả thẻ có class box

// console.log(boxElement.outerHTML)
// console.log(document.querySelector('h1').innerText)
// console.log(boxElement)

// ================ 146. Node properties          ======
// thêm contenteditable thì có thể thay đổi nội dung như 1 thẻ input
// var boxElement = document.querySelector('.box')

// console.log([boxElement]) // xem các properties

/* ================ 148. DOM CSS          ====== */
// DOM style

// var boxElement = document.querySelector('.box')

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green'
// })

// console.log(boxElement.style.backgroundColor)

//end

/* ================ 150. ClassList Property          ====== */
// add: thêm class vào element
// contains: ktra xem chứa k true/false
// remove: xóa class
// toggle: nếu chưa có thì thêm class, nếu có rồi thì xóa (add + remove)

// var boxElement = document.querySelector('.box');

// console.log(boxElement.classList.length);
// console.log(boxElement.classList[0]);
// console.log(boxElement.classList.value);
// console.log(boxElement.classList)

// boxElement.classList.add('red', 'blue');

//setTimeout giam, interval là nhấp nháy
// setInterval(() => {
//     // boxElement.classList.remove('red')
//     boxElement.classList.toggle('red')

// }, 1000)

// console.log(boxElement.classList.contains('red'))
//end

/* ================ 155. DOM events          ====== */
// // 1. Attribute events
// // 2. Assign event using the element node

// // xem them tai w3, google
// // 1. onclick: click
// // 2. onmouseover: hover vao, onmouseout: di chuot ra,

// var h1Element = document.querySelectorAll('h1');

// for (var i = 0; i < h1Element.length; ++i){
//     h1Element[i].onclick = function (e) {
//         console.log(e.target)
//     }
//     // console.log(h1Element[i])
// }
// //end


/* ================ 158. DOM events example         ====== */
// 1. Input / select
// 2. Key up / down
// onchange, oninput, on
// var inputElement = document.querySelector('input[type="text"]')

// var inputValue;
// // console.log(inputElement)
// inputElement.onchange = function (e) {
//     inputValue = e.target.value
// }

// //checkbox
// var inputElement = document.querySelector('input[type="checkbox"]')

// inputElement.onchange = function (e) {
//     console.log(e.target.checked)
// }

// //select
// var inputElement = document.querySelector('select')

// inputElement.onchange = function (e) {
//     console.log(e.target.value)
// }

// 2. Key up / down
// var inputElement = document.querySelector('input[type="text"]')
// inputElement.onkeyup = function (e) {
//     // console.log(e.target.value)
//     console.log(e.which)
//     switch (e.which) {
//         case 27:
//             console.log('Exit')
//             break
//     }
// }

// bh da co phan code thay vi which đã bị bỏ đi
// onkeyup, onkeydown, onkeypress
// document.onkeypress = function (e) {
//     // console.log(e.code)
//     switch (e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('Enter');
//             break;
//     }
// }

//end=========================

/* ================ 159. PreventDefault and StopPropagation           ====== */
// 1.PreventDefault
// 2.StopPropagation
// .anchors la phải đặt name

// // VD1
// var aElements = document.links;

// // console.log(aElements)
// for (var i = 0; i < aElements.length; i++){
//     aElements[i].onclick = function (e) {
//         // console.log(e.target.href);
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault()
//         }
//     }
// }

// // VD2
// var ulElement = document.querySelector('ul')
// ulElement.onmousedown = function (e) {
//     e.preventDefault()
// }
// ulElement.onclick = function (e) {
//     console.log(e.target)
// }

// // 2.
// document.querySelector('div').onclick = function (e) {
//     console.log('DIV')
// };
// document.querySelector('button').onclick = function (e) {
//     e.stopPropagation() // ngan chan nổi bọt
//     console.log('Click me!')
// };

//end=========================

/* ================ 160. Event listener           ====== */
// 1. DOM event | Event listener
// 2. JSON
// 3. Promise
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe/ Hủy bỏ lắng nghe
// var btn = document.getElementById('btn');

// console.log(btn)

// 1. khi xu ly 2 van de trên với DOM
// thì nhiều hàm sẽ được gọi và gán vào chung 1 hàm trong onclick(VD)
// btn.onclick = function () {
//     // viec 1
//     console.log('viec 1')
//     // viec 2
//     console.log('viec 2')
//     // viec 3
//     alert('viec 3')
// }
// setTimeout(function () {
//     btn.onclick = function () {

//     }
// },3000)

// 1. khi xu ly 2 van de trên với Event listener
// var btn = document.getElementById('btn');

// btn.addEventListener('click', function (e) {
//     console.log('Event 1');
// })

// btn.addEventListener('click', function (e) {
//     console.log('Event 2');
// })

// btn.addEventListener('click', function (e) {
//     console.log('Event 3');
// })
// function viec1() {
//     console.log('viec 1')
// }
// function viec2() {
//     console.log('viec 2')
// }
// btn.addEventListener('click', viec1)
// btn.addEventListener('click', viec2)

// setTimeout(function () {
//     btn.removeEventListener('click', viec1)
// }, 3000)

// event listener đặc biệt hữu hiệu khi cần xử lý mà hủy bỏ lắng nghe
//end=========================

//---------------------------------- 14. JSON, Fetch, Postman ---------------------------------
/* ================ 161. JSON          ====== */
// 1. Là 1 định dạng dữ liệu (chuỗi)
// 2. Javascript Object Notation (JSON)
// 3. JSON: Number, String, Boolean, Null, Array, Object

// mã hóa / giải mã
// encode / decode
// Strngify / Parse

// var json = '["Javascript","PHP"]'; // mang
// var json = '{"name":"Son Dang","age":18}'
// var a = '1';
// console.log(JSON.parse(json))

// console.log(typeof JSON.stringify([
//     'Javas"cript',
//     'PHP'
// ]))
// console.log(JSON.stringify({
//     name: 'Son Dang',
//     age: 16
// }))

//website bh toàn dùng như vậy, response qua api rồi parse chuyển về lưu vào trong
// javascript rồi thực hiện
//end=========================

/* ================ 166. Promise           ====== */
// hiểu nó sinh ra để làm gì, thấu hiểu nỗi đau khi k có nó, ko sử dụng nó, cũng
// giống như a sơn làm ra f8
//      - synchronous: đồng bộ
//      - asynchronous: bất đồng bộ
//      - Nỗi đau
//      - Lý thuyết, cách hoạt động
//      - Thực hành, ví dụ

// Sync / Async

// những thứ gây bất đồng bộ trong js:
// setTimeout, setInterval, fetch, XLMHttpRequest, file reading
// request animation frame

//call back

// setTimeout là tác vụ bất động bộ (async)
//sleep
// setTimeout(function () {
//     console.log(1)
// }, 1000)
// console.log(2) // dong nay se in ra trc

//end=========================

/* ================ 168. Promise(pain)           ====== */
// callback hell
// pyramid of doom

// setTimeout(function () {
//     console.log(1); // viec 1
//     setTimeout(function () {
//         console.log(2); // viec 2
//         setTimeout(function () {
//             console.log(3); // viec 3
//             setTimeout(function () {
//                 console.log(4); // viec 4
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
//end=========================

/* ================ 169. Promise (concept)           ====== */
// // 1. new Promise
// // 2. Executor

// // Memory leak
// // 3 trang thai promise
// // 1. Pendding
// // 2. Fulfilled
// // 3. Rejected
// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // logic
//         // Thanh cong: resolve()
//         // That bai: reject()

//         //Fake call API
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'Javascript'
//         //     }
//         // ])
//         // reject('Co loi')
//     }
// );

// promise
//     .then(function (course) {
//         console.log(course);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log('Done!');
//     })

// // trả lời khi phỏng vấn: promise là 1 kn sinh ra để giúp xử lý giao tác bất đồng bộ,
// // trước khi có promise thì chúng ta thường sd callback, callback có vấn đề xảy ra
// // callback hell sâu vào khó nhìn, code rối rắm
// // để tạo ra 1 promise thì cta sử dụng từ khóa New với Promise và trong contructor
// // của nó truyền vào 1 Executor function, trong Executor function nhận đc 2 tham số
// // dạng hàm là resolve được gọi khi tc, reject goi khi tb
// // khi sử dụng promise, đối tượng đc tạo ra sử dụng những phương thức như là then,
// // catch, finally đều nhận callback function, then khi resolve, catch khi reject

//end=========================

/* ================ 172. Promise(chain)         ====== */
// // chain
// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // logic
//         // Thanh cong: resolve()
//         // That bai: reject()

//         resolve();
//     }
// );

// promise
//     .then(function () {
//         // return 1; // k return thi undefi
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve([1,2,3]);
//             }, 3000)
//         })
//     })
//     .then(function (data) {
//         console.log(data);
//        return 2;
//     })
//     .then(function (data) {
//         console.log(data);
//        return 3;
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log('Done!');
//     })

// // giai quyet bai toan ma callback bị bất đồng bộ
// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     })
// }
// sleep(1000)
//     .then(function () {
//         console.log(1)
//         return sleep(1000);
//     })
//     .then(function () {
//         console.log(2)
//         return sleep(1000);
//     })
//     .then(function () {
//         console.log(3)
//         return sleep(1000);
//     })
//     .then(function () {
//         console.log(4)
//         return sleep(1000);
//     })


//end=========================

/* ================ 174. Promise(resolve, reject, all)           ====== */
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = Promise.reject("Error!")

// promise
//     .then(function (result) {
//         console.log(result)
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// var promise1 = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve([1]);
//     },2000)
// })

// var promise2 = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve([2,3]);
//     },4000)
// })

// // nếu có 1 promise bị lỗi thì sẽ lọt vào .catch và hỏng hết, nhưng tận dụng
// // để thành tính năng :)))
// Promise.all([promise1, promise2])
//     .then(function (result) {
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2))
//     })
//     .catch(function (err) {
//         console.log(err)
//     })

//end=========================

/* ================ 175. Promise example          ====== */
// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam'
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
//     {
//         id: 3,
//         name: 'Hung Dam'
//     }
//     //...
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video :('
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi!'
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'Cam on anh ^^'
//     }
// ]


// // 1. Lấy comments
// // 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng

// // kthuc cần nắm chắc
// // 1. Array
// // 2. Function, callback
// // 3. Promise
// // 4.DOM

// // Fake API

// function getComments() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(comments)
//         }, 1000)
//     })
// }

// function getUsersByIds(userIds) {
//     return new Promise(function (resolve) {
//         var result = users.filter(function (user) {
//             return userIds.includes(user.id)
//         })
//         setTimeout(function () {
//             resolve(result)
//         },1000)
//     })
// }

// // Callback hell
// // Promise hell
// // Async / Await học ở phần sau sẽ giúp viết gọn gàng hơn

// getComments()
//     .then(function (comments) {
//         console.log('comments:', comments)
//         var userIds = comments.map(function (comment) {
//             return comment.user_id
//         })
//         // console.log(userIds);
//         return getUsersByIds(userIds) // lay data
//             .then(function (users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             })
//     })
//     .then(function (data) {
//         console.log('data: ', data)
//         var commentBlock = document.getElementById('comment-block');

//         var html = '';
//         data.comments.forEach(function (comment) {
//             var user = data.users.find(function (user) {
//                 return user.id === comment.user_id; // lấy user
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });
//         commentBlock.innerHTML = html;
//     })


//end=========================

/* ================ 176. Fetch          ====== */
// // gọi lên API để lấy nội dung dữ liệu từ phía backend trả về
// // và front-end nhận nội dung đó và render ra trình duyệt
// // front-end: xây dựng giao diện người dùng
// // back-end: Xây dựng logic xử lý + cơ sở dữ liệu
// // API (URL) -> Application programing interface là cổng giao tiếp giữa các phần mềm

// // Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> Javascript types
// // -> render ra giao diện với HTML

// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// // stream
// fetch(postApi)
//     .then(function (response) {
//         // console.log(response.json());
//         return response.json();
//         // JSON.parse: JSON -> Javascript types
//     })
//     .then(function (posts) {
//         console.log(posts)// đã nhận được js
//         var htmls = posts.map(function (post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`
//         });
//         htmls = htmls.join('');
//         // console.log(htmls)
//         document.getElementById('posts-block').innerHTML = htmls
        
//     })
//     .catch(function (err) {
//         alert('Có lỗi!');
//     })

// Nắm bắt được ứng dụng thực thế của promise và Json cũng như fetch

//end=========================


/* ================ 177. JSON server           ====== */
// - JSON server: API Server(Fake) / Mock API -> OK
// - npm: node package manager  -> npmjs.com
// var courseApi = "http://localhost:3000/courses"

// fetch(courseApi)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (courses) {
//         console.log(courses)
//     })


//end=========================

/* ================ 178. Sử dụng Postman làm việc với REST API         ====== */
//      - CRUD
//          - Create: Tạo mới -> POST
//          - Read: Lấy dữ liệu -> GET
//          - Update: Chỉnh sửa -> PUT/PATCH
//          - Delete: Xóa  -> DELETE
//          Hướng dẫn postman

//end=========================

/* ================ 179. Thêm/sửa/xóa khóa học với Fetch và REST API           ====== */
var courseApi = 'http://localhost:3000/courses'

function start() {
    // getCourses(function (courses) {
    //     console.log(courses); //để xem trước thoi
    // })
    getCourses(renderCourses);

    handleCreateForm();
}

start();


// Function
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function handelDeleteCourse(id) {
    options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    };
    fetch(courseApi + "/" + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li class ="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handelDeleteCourse(${course.id})">Xóa</button>
            </li>    
        `;
    })
    listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
    var createBtn = document.querySelector("#create")
    createBtn.onclick = function () {
        // alert() // thử
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // console.log(name);
        // console.log(description);
        var formData = {
            name: name,
            description: description
        }

        createCourse(formData, function () {
            getCourses(renderCourses);
        });
    }
}

//end=========================

//---------------------------------- 15. ECMAScript 6+---------------------------------
/* ================ .           ====== */



//end=========================

/* ================ .           ====== */



//end=========================

/* ================ .           ====== */



//end=========================