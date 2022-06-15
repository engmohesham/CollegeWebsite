let blackWhight = document.querySelector(".buton-black-whight");
blackWhight.addEventListener("click", function () {
  document.body.classList.toggle("activebackground");
  document.body.classList.toggle("activeColorWhfit");
  $('.par-name').toggleClass('light');
  $('.par-name').toggleClass('dark');
  
});

let menudownR = document.querySelector(".menu-right");
let menudownL = document.querySelector(".menu-left");
let navmenu = document.querySelector(".nave-ul");

menudownR.addEventListener("click", function () {
    navmenu.style.right = "50%";
    menudownR.style.display = "none";
    menudownL.style.display = "inline-block";
});

menudownL.addEventListener("click", function () {
    navmenu.style.right = "-60%";
    menudownR.style.display = "inline-block";
    menudownL.style.display = "none";
});



let slayjs = document.querySelector(".slay");

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 5000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 10000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 15000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 2000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 25000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 30000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 35000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 40000);



//======================
// صفحة تسجيل المواد
//======================

// ديفات الجدول المخفيه التي ستظهر
let dis_1 = document.querySelector(".edit-code");
let dis_2 = document.querySelector(".edit-sub");
let dis_3 = document.querySelector(".edit-day");

// ديفات الجدول التي ستخنفي
let td_1 = document.querySelector(".td-1");
let td_2 = document.querySelector(".td-2");
let td_3 = document.querySelector(".td-3");

// وضع id لكل مادة تضاف
let id_1 = document.querySelector(".id-1");

// كود الماده الذي سيضعه الطالب
let inputcode = document.querySelector(".code-0");
let ok_C = document.querySelector(".ok-code-0");
// كود الماده الذي سيعدله الطالب
let editcode = document.querySelector(".code-1");
let li_edit_C = document.querySelector(".li-code-1");

// اسم الماده الذي سيضعه الطالب
let inputsub = document.querySelector(".subject-0");
let ok_S = document.querySelector(".ok-sub-0");
// اسم الماده الذي سيعدله الطالب
let editsub = document.querySelector(".sub-1");
let li_edit_S = document.querySelector(".li-sub-1");

// عدد ساعات الماده الذي سيظهر للطالب الخاص بالمادة
let edithour = document.querySelector(".hour-1");

// يوم الماده الذي سيضعه الطالب
let inputday = document.querySelector(".day-0");
let ok_D = document.querySelector(".ok-day-0");
// يوم الماده الذي سيعدله الطالب
let editday = document.querySelector(".day-1");
let li_edit_D = document.querySelector(".li-day-1");

// كود الماده السابقة الذي سيظهر للطالب الخاص بالمادة تلقائي
// كود السابق سيختفي عند التعديل
let code = document.querySelector(".code-2");


// الكوووووووووووووووود
ok_C.addEventListener("click", function () {
    if (inputcode.value == null || inputcode.value == undefined || inputcode.value.trim() == "") {
        alert("Please Write Right Code");
    }else {
        td_1.style.display = "none";
        dis_1.style.display = "table-cell";
        editcode.innerHTML = inputcode.value;
    }
});


ok_S.addEventListener("click", function () {
    if (inputsub.value == null || inputsub.value == undefined || inputsub.value.trim() == "") {
        alert("Please Write Right Name Of Subject");
    }else {
        td_2.style.display = "none";
        dis_2.style.display = "table-cell";
        editsub.innerHTML = inputsub.value;
    }
});

ok_D.addEventListener("click", function () {
    if (inputday.value == null || inputday.value == undefined || inputday.value.trim() == "") {
        alert("Please Write Right Day Of Exam");
    }else {
        td_3.style.display = "none";
        dis_3.style.display = "table-cell";
        editday.innerHTML = inputday.value;
    }
});

li_edit_C.addEventListener("click", function () {
    td_1.style.display = "table-cell";
    dis_1.style.display = "none";
});

li_edit_S.addEventListener("click", function () {
    td_2.style.display = "table-cell";
    dis_2.style.display = "none";
});

li_edit_D.addEventListener("click", function () {
    td_3.style.display = "table-cell";
    dis_3.style.display = "none";
});


//========================
// اضافة مادة جديده
//========================
let table_1 = document.querySelector(".n2");
let table_2 = document.querySelector(".n3");
let add_1 = document.querySelector(".add-1");
let add_2 = document.querySelector(".add-2");
let end = document.querySelector(".end");

var i;

add_1.addEventListener("click", function () {
    if (table_1.style.display = "none"){
        table_1.style.display = "table-row";
    }
    add_1.style.display = "none";
    add_2.style.display = "inherit";
});
add_2.addEventListener("click", function () {
    if (table_1.style.display = "table-row"){
        table_2.style.display = "table-row";
    }
    add_2.style.display = "none";
    add_1.style.display = "inherit";
});

end.addEventListener("click", function () {
    
});


//========================
// بيانات الطالب
//========================
let yournumber = document.querySelector(".num");
let yourname = document.querySelector(".nam");
let num_do = document.querySelector(".num-do");
let nam_do = document.querySelector(".nam-do");
let national = document.querySelector(".national");
let editname = document.querySelector(".editname");
let random = document.querySelector(".random");
let regnum = document.querySelector(".regnum");
let regnam = document.querySelector(".regnam");



num_do.addEventListener("click", function () {
    if (yournumber.value == null || yournumber.value == undefined || yournumber.value.trim() == "") {
        alert("Please Write Right National ID");
    }else {
        yournumber.style.display = "none";
        num_do.style.display = "none";
        regnum.style.display = "inherit";
        national.style.display = "inherit";
        national.innerHTML = yournumber.value;
    }
});

nam_do.addEventListener("click", function () {
    if (yourname.value == null || yourname.value == undefined || yourname.value.trim() == "") {
        alert("Please Write Right Name");
    }else {
        yourname.style.display = "none";
        nam_do.style.display = "none";
        regnam.style.display = "inherit";
        editname.style.display = "inherit";
        editname.innerHTML = yourname.value;
    }
});


//========================
// تاكيد تسجيل الجدول
//========================

// زر التسجيل وانهاء الجدول
let End = document.querySelector(".end");

// فورم التاكيد
let End_card = document.querySelector(".end-card");
// ازرار التاكيد
let Yes_sign = document.querySelector(".yes");
let No_sign = document.querySelector(".no");
// اخفاء الموقع بالكامل واظهار الفورم
let Overly = document.querySelector(".overly");

End.addEventListener("click", function () {
    if (End_card.style.display = "none"){
        End_card.style.display = "inherit";
        Overly.style.display = "inherit";
    }else{
        End_card.style.display = "none";
        Overly.style.display = "none";
    }
});

No_sign.addEventListener("click", function () {
        End_card.style.display = "none";
        Overly.style.display = "none";
});

Yes_sign.addEventListener("click", function () {
        alert("تم تسجيل جدولك بنجاح");
        End_card.style.display = "none";
        Overly.style.display = "none";
});

