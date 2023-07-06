// console.log("day la 1 dong log")
// var a = 1
// var b = 2
// // alert(a + b)
// console.log(a * b)
// console.log(!!'f8') // true


// var myString = 'Hoc js Tai js js F8  '

// find index
// console.log(myString.lastIndexOf('js', 12))
// console.log(myString.search('js'))

// cut string
// console.log(myString.slice(0))

// replace
// console.log(myString.replace(/js/g, 'javascript'));
// console.log(myString.toUpperCase())

// trim  -- loai bo khoang trang 2 dau
// console.log(myString.trim().length)

// split
// var languages = 'javascript, php, ruby'
// console.log(languages.split(', '))

// 9.get a character by index
// console.log(myString.charAt(5))
// console.log(Number.isFinite(2 / 0)); // false
// console.log(Number.isFinite(20 / 5)); // true
// console.log(Number.isFinite(0 / 0)); // false

// console.log(Number.isInteger(999999999)); // true
// console.log(Number.isInteger(0.2));       // false
// console.log(Number.isInteger(Math.PI));   // false

// console.log(Number.parseFloat('10')) // 10
// console.log(Number.parseFloat('10.00')) // 10
// console.log(Number.parseFloat('238,21')) // 238
// console.log(Number.parseFloat('237.22')) // 237.22
// console.log(Number.parseFloat('34 56 78')) // 34
// console.log(Number.parseFloat(' 37 ')) // 37
// console.log(Number.parseFloat('18 is my age')) // 18

// console.log(Number.parseInt('10')) // 10
// console.log(Number.parseInt('10.00')) // 10
// console.log(Number.parseInt('238,21')) // 238
// console.log(Number.parseInt('237.22')) // 237
// console.log(Number.parseInt('34 56 78')) // 34
// console.log(Number.parseInt(' 37 ')) // 37
// console.log(Number.parseInt('18 is my age')) // 18

// var numberObject = 1234.56789;

// console.log(numberObject.toFixed()); // '1235'
// console.log(numberObject.toFixed(1)); // '1234.6'
// console.log(numberObject.toFixed(6)); // '1234.567890'

// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'



/* Mảng

1. Tạo mảng
    -cách tạo
    - sử dụng? tại sao?
    - Ktra data type?
2. Truy xuất mảng
    - độ dài mảng
    - lấy phần tử theo index
*/
// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby',
//     'c++',
//     null,
//     undefined,
//     function () {

//     },
//     {}
// ];
// console.log(Array.isArray(languages))
// console.log(languages[3]);


/*
Làm việc với array

1. to string
2. join
3. pop
4. push
5. shift
6. unshift
7. splicing
8. concat
9. slicing
*/


// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby',
//     'c++',
// ]

// console.log(languages.toString())
// console.log(languages.join(' - '))
// console.log(languages.pop()) //xóa ptu cuoi mang, trả về nó luon
// console.log(languages.push('Dart','java')) //them vao cuoi mang
// console.log(languages.shift()) //xóa ptu dau mang, trả về nó luon
// console.log(languages.unshift('Dart','java')) //them vao dau mang
// languages.splice(1,0,'Dart', 'java') // cat them xoa hoac chen tu vi tri đến bn phần tử, chèn
// var languages2 = [
//     'Dart',
//     'Java',

// ]
// console.log(languages.concat(languages2)) //nỐi 2 mảng
// console.log(languages.slice(-2)) //cắt


//---------------8.Lam viec voi object--------------

/* 
Object trong Javascript
*/
// var emailKey = 'email';
// var myInfo = {
//     name: 'Son Dang',
//     age: 18,
//     address: 'Ha Noi, VN',
//     [emailKey]: 'sondn@fullstack.edu.vn',
//     getName: function () {
//         return this.name;
//     }
// };

// myInfo.email = 'sondn@fullstack.edu.vn'
// myInfo['my-email'] = 'sondn@fullstack.edu.vn'
// var myKey = 'address'
// console.log(myInfo[myKey]);
// delete myInfo.age
// console.log(myInfo.getName());
// console.log(myInfo);

/**
 * 76. Object contructor
*/

// function User(firstName, lastName,avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function () {
//         return `${firstName} ${lastName}`
//     }
// }
// // prototype
// User.prototype.className = 'F8'
// User.prototype.getClassName = function () {
//     return this.className;
// }

// var author = new User('Son','Dang','avatar 1');
// var user = new User('Vũ', 'Nguyễn', 'avatar 2');

// author.title = 'Chia sẻ dạo tại F8';
// user.comment ='asssssssssssdad'

// // console.log(author.constructor===User );
// // console.log(author.getName() );
// // console.log(user.getName());
// console.log(author.className );
// console.log(user.getClassName());


// 80. Doi tuong Date

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);
// console.log(date.getHours(), date.getMinutes(), date.getSeconds());

/*
Math object
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/

// console.log(Math.PI);
// console.log(Math.round(1.5));
// console.log(Math.abs(-4.5));
// console.log(Math.ceil(1.2));
// console.log(Math.floor(Math.random()*100));
// console.log(Math.random());
// console.log(Math.min(10,2,3));
// console.log(Math.max(1,2,3));
// console.log(Math.);
// function getRandomItem (a){
//     var index = Math.floor(Math.random() * 4)
//     console.log(a[index]);
// }

// var a = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]

// getRandomItem(a)
// function getRandomItem (a){
//     var index = Math.floor(Math.random() * (a.length - 1))
//     console.log(a[index])
//     return a[index];
// }

// var a = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]

// getRandomItem(a)


// ------------9.Lệnh rẽ nhánh, toán tử 3 ngôi------------------------
// switch
/**
 * khi không dùng break thì sau case 1 vẫn thực hiện case 2
 * kiểu nó sẽ k dừng lại như ifelse mà vẫn lọt tiếp vào các case sau 
 */
// var date = 2;

// switch (date) {
//     case 1:
//         console.log('Hom nay la thu 1')
//         break;
//     case 2:
//         console.log('Hom nay la thu 2')
//         break;
//     case 3:
//         console.log('Hom nay la thu 3')
//         break;
//     case 4:
//         console.log('Hom nay la thu 4')
//         break;
//     case 5:
//         console.log('Hom nay la thu 5')
//         break;
//     default:
//         console.log('i don\'t know!!')
// }

// Toàn tử 3 ngôi (Ternary operator)
// var course = {
//     name: 'Javascript',
//     coin: 0
// }

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`)
// } else {
//     console.log('Miễn phí')
// }

// var result = course.coin ? `${course.coin} Coins` : 'Miễn phí';
// console.log(result);

// var a = 1
// var b = 2
// var c = a > 0 ? a : b
// console.log(c)

//-------10. Vòng lặp (loop)-----------
/**
 * 1. For - Lặp với điều kiện đúng
 * 2. for/in Lặp qua key của đối tượng
 * 3. for/of lặp qua value của đối tượng
 * 4. while - lặp khi điều kiện đúng
 * 5. do-while - Lặp ít nhất 1 lần, sau đó lặp điều kiện đúng
 */

// for (var i = 1; i <= 1000; i++){
//     console.log(i)
// }
// //Tạo danh sách số ngẫu nhiên
// function getRandNumbers (min, max,length){
//     var a=[]
//     for(var i =0; i< length;i++){
//         a[i] = Math.random()*(max-min) +min
//     }
//     console.log(a)
//     return a
// }
// tinh tong
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal (order){
//     var total = 0;
//     var length = order.length;
//     for (var i = 0; i < length;i++){
//         total += order[i].price;
//     }
//     console.log(total);
//     return total;
// }

// // Expected results:
// getTotal(orders) // Output: 8700000

//      for/in loop
// var myInfo = {
//     name: 'Son Dang',
//     age: ' 18',
//     address:'Ha noi, VN'
// };
// var languages = [
//     'php',
//     'java',
//     'ruby',
//     'javascript'
// ]

// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }
// for (var key in languages) {
//     console.log(languages[key])
// }


// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal (order){
//     var total = 0;
//     for (var key in order){
//         total += order[key].price;
//         console.log(order[key].price)
//     }
//     console.log(total);
//     return total;
// }

// // Expected results:
// getTotal(orders) // Output: 8700000

// function run(object) {
//     var a = []
//     for (var key in object){
//         // console.log(`Thuộc tính ${key} có giá trị ${object[key]}`);
//         a.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     // console.log(a);
//     return a;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // console.log(run())
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]


// for/of loop

// var languages = [
//     'php',
//     'ruby',
//     'javascript',
// ];
// var languages = 'java script'
// var myInfo = {
//     name: 'Son Dang',
//     age: 18
// }
// console.log(Object.keys(myInfo))
// console.log(Object.values(myInfo))

// for (var value of Object.keys(myInfo)) {
//     console.log(myInfo[value])
// }

//              while loop, do while

// var i = 0
// while (i <= 1000) {
//     console.log(i)
//     i++;
// }

// do {
//     i++
//     console.log(i)
// } while (i < 0)

// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }
// }

//              Đệ quy
// xác định điểm dừng
// logic handle => tọa ra điêm dừng

// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num
// }
// countDown(10)

// tạo ra vòng lặp từ đệ quy
// function loop(start,end,cb) {
//     if (start < end) {
//         cb(start);
//         return loop(start +1, end, cb);
//     }
// }

// var array = ['PHP', 'Java', 'Python']
// loop(0, array.length, function (index) {
//     console.log(array[index])
// })

// function giaiThua(number) {
//     if (number > 0) {
//         return number * giaiThua(number - 1);
//     }
//     return 1
// }
// console.log(giaiThua(6))

//----------------------------------------------11. Làm việc với mảng II ---------------------------------------
/*
    Array method    
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 50
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 250
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 250
//     },
// ]
// duyet qua tung phan tu
//              For Each
// courses.forEach(function (course,index) {
//     console.log(index,course)
// })


// // every tat ca phai thoa man
// var isFree = courses.every(function (course,index) {
//     console.log(index);
//     return course.coin === 0;
// })
// console.log(isFree)

// //  nguoc lai voi every
// var isFree = courses.some(function (course,index) {
//     console.log(index);
//     return course.coin === 0;
// })
// console.log(isFree)


// //find timf kiem
// var course = courses.find(function (course,index) {
//     console.log(index);
//     return course.name === 'Ruby';
// })
// console.log(course)

//   filter timf kiem all
// var listCourses = courses.filter(function (course,index) {
//     // console.log(index);
//     return course.name === 'Ruby';
// })
// console.log(listCourses)

// bai tạp thuc hanh
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport (array){
//     var array = sports.filter(function (sport, index) {
//         return sport.like > 5
//     })
//     return array
// }


// // Kỳ vọng
// console.log(getMostFavoriteSport(sports))
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]



// .===================         map
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 200
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 250
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 250
//     },
// ]

// function courseHandler(course,index, originArray) {
//     // console.log("1")
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray
//     }
// }
// var newCourses = courses.map(courseHandler);

// console.log(newCourses)

//=======================           reduce
// 1. Dễ hiểu
// 2. Ngắn gọn
// 3. Hiệu năng


// Biến lưu trữ
// Thực hiện việc lưu trữ
// var totalCoin = 0;

// for (var course of courses) {
//     totalCoin += course.coin;
// }
// console.log(totalCoin);

// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     var total = accumulator + currentValue.coin
//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ': currentValue.coin,
//         'Tích trữ được: ': accumulator + currentValue.coin
//     })
//     // console.log(currentValue)
//     return total
// }
// var totalCoin = courses.reduce(coinHandler, 0);

// viet ngan chi con ntn
// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }, 0);

//viet tat nua
// var totalCoin = courses.reduce((a,b) => a + b.coin, 0);
// console.log(totalCoin)

// bai tap reduce
// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(sports){
//     return sports.reduce(function(acumulator, currentValue){
//         return acumulator += currentValue
//     },0)
// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

// ==================Ví dụ: Array reduce() method

// giá trị mong muốn lấy là gì thì phải để giá trị khởi tạo là như vậy
// var numbers = [100, 200, 200, 250, 250]
// var totalCoin = numbers.reduce(function (total, coin) {
//     return total + coin
// })
// console.log(totalCoin)

//Flat - "Làm phẳng" mảng từ Depth aray - "Mảng sâu"
// depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//     // console.log(flatOutput,depthItem)
//     return flatOutput.concat(depthItem);
// }, [])
// console.log(flatArray)

// Lấy ra các khóa học đưa vào 1 mảng mới
// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "JavaScript"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "NodeJS"
//             }
//         ]
//     }
// ]

// // lấy ra các khóa học
// var newCourses = topics.reduce(function (course,topic) {
//     return course.concat(topic.courses)
// }, [])
// // console.log(newCourses)

// var htmls = newCourses.map(function (course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// })
// console.log(htmls.join(''));
//output
// <div>
//     <h2>HTML, CSS</h2>
//     <p>ID: 1</p>
// </div>

// <div>
//     <h2>JavaScript</h2>
//     <p>ID: 2</p>
// </div>

// <div>
//     <h2>PHP</h2>
//     <p>ID: 1</p>
// </div>

// <div>
//     <h2>NodeJS</h2>
//     <p>ID: 2</p>
// </div>

//>>>>>>>> BT  Thực hành sử dụng Reduce #2

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
// ];


// function calculateRating(watchList) {
//     var movieOfNolan = watchList.filter(function (movie) {
//         return movie.Director === "Christopher Nolan"
//     })
//     // console.log(listFilms);
//     var totalIMDB = movieOfNolan.reduce(function (diem,info) {
//         return (diem + parseFloat(info.imdbRating))
//     }, 0)
//     return totalIMDB/movieOfNolan.length;
// }

//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675


// ==================       String/Array includes() method
// console.log(Array.prototype.includes)

// var title = 'Responsive web design'
// console.log(title.includes('Responsive',1))

// var title = ['PHP', 'JavaScript', 'Python']
// console.log(title.includes('PHP',-4))





// --------------------------------- 12. Callback?-----------------------------------------
//callbacks
// Là hàm (function) được truyền qua đối số khi gọi hàm khác
// 1. Là Hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

// function myFunction(param) {
//     if (typeof param === 'function') {
//         param(123)
//     }
// }

// function myCallback(value) {
//     console.log('Value: ', value)
// }
// // myCallback(321)
// myFunction(myCallback)


// >>>>>>> Baif tap 118

// function sumCb(a, b) {
//     return a+b
// }
// function subCb(a, b) {
//     return a-b
// }
// function multiCb (a, b) {
//     return a*b
// }
// function divCb(a, b) {
//     return a/b
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3


// ================ Callback phần 2

//Code chay hàm map
// Array.prototype.map2 = function (callback) {
//     // console.log(this.map2);
//     var output = [], arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i], i);
//         // console.log('refsult: ', result);
//         output.push(result);
//     }
//     return output;
// }

// var course = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// var htmls = course.map2(function (course, index) {
//     // console.log(index, course)
//     return `<h2>${course}</h2>`
// })

// var htmls = course.map(function (course) {
//     return `<h2>${course}</h2>`
// })

// console.log(htmls);
// console.log(htmls.join(''));

//      chatGPT support
// Array.prototype.myMap = function(callback) {
//     let result = []; // Khởi tạo mảng rỗng để lưu trữ kết quả

//     for (let i = 0; i < this.length; i++) {
//       result.push(callback(this[i], i, this)); // Thêm kết quả callback vào mảng result
//     }

//     return result; // Trả về mảng result chứa kết quả
// }

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.myMap(function(number) {
//   return number * number;
// });

// console.log(squaredNumbers); // Kết quả: [1, 4, 9, 16, 25]

// >>>>>>>>>>>>>>>>>> BT code ham myMap
// Array.prototype.myMap = function(cb,index) {
//     var output = [], arrayLength = this.length;
//     for (var i = 0; i< arrayLength; i++){
//         output.push(cb(this[i], i));
//     }
//     return output
// }


// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]


//==================== Empty elements of array?

// var courses = [
//     'Javascript',
//     'PHP'
// ];

// var courses = new Array(10, 20)

// courses.push('Python','Ruby')

// courses.length = 10

// console.log(courses);
// for (var index of courses) {
//     console.log(index)
// }

// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(1, 2, 3)); // output: 6
// console.log(sum(10, 20, 30, 40, 50)); // output: 150


//==================== My forEach() method?
//  kiến thức:
// 1.Object prototype
// 2.For in
// 3.hasOwnProperty

// Array.prototype.forEach2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index],index,this);
//         }
//     }
// }

// var courses = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ]
// courses.length = 10;
// courses.push('Python')
// // console.log(courses)
// courses.forEach2(function (course, index, array) {
//     console.log(course, index, array)
// })



//==================== My filter() method

// không lặp qua index trống khi đổi length
// Array.prototype.filter2 = function (callback) {
//     var output = []

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index],index,this);
//             // console.log(this[index], result)
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 880
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ]

// var filterCourses = courses.filter2(function (course, index, array) {
//     // console.log(course,index,array)
//     return course.coin > 700
// })

// console.log(filterCourses);

// >>>>>>>>>>>>>>>>>> BT code ham myFIlter
// Array.prototype.myFilter = function (cb) {
//     var output = [];

//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             var result = cb(this[i], i, this);
//             // console.log(result)
//             if (result) {
//                 output.push(this[i]);
//             }
//         }
//     }
//     return output
// }


// /**
// Expected results:
// */
// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0;
// })); Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
// })); Output: [1, 2, 3, 4]


//==================== My some() method

// Array.prototype.mySome = function (callback) {
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             if (callback(this[i], i, this)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: false,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true,
//     }
// ]

// var result = courses.mySome(function (course, index, array) {
//     // console.log(course)
//     return course.isFinish;
// })

// console.log(result)

// >>>>>>>>>>>>>>>>>> BT code ham mySome

// Array.prototype.mySome = function(cb) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (cb(this[index], index, this)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// // code every chi can doi return

// // Expected results:

// const numbers = [1, 3, 3, 5];

// console.log(numbers.mySome(function (number) {
//     return number % 2 === 0;
// })); Output: false

// console.log(numbers.mySome(function (number, index) {
//     return index % 2 === 0;
// })); Output: true

// console.log(numbers.mySome(function (number, index, array) {
//     return array.length % 2 === 0;
// })); Output: true

//==================== My every() method
// Array.prototype.myEvery = function (callback) {
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             if (!callback(this[i], i, this)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true,
//     }
// ]

// var result = courses.myEvery(function (course, index, array) {
//     // console.log(course)
//     return course.isFinish;
// })

// console.log(result)

// >>>>>>>>>>>>>>>>>> BT code ham myEvery

// Array.prototype.myEvery = function(cb) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (!cb(this[index], index, this)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }


// // Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true


