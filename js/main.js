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


//let arrow = document.querySelector(".arrwoi");
//
//window.onscroll = function () {
//  if (this.scrollY >= 400) {
//    arrow.classList.add("show");
//  } else {
//    arrow.classList.remove("show");
//  }
//};
////========================
//let btnarrow = document.querySelector(".btn-arrow");
//
//btnarrow.addEventListener("click", function () {
//  window.scrollTo({
//    top: 0,
//    behavior: "smooth",
//  });
//});



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










//==============
// اقسام الفيزياء
//==============
let next = document.querySelector(".nextJs");
let part = document.querySelector(".list-contnta");
let P = document.querySelector(".li-p");
let PCH = document.querySelector(".li-pch");
let PG = document.querySelector(".li-pg");
let PM = document.querySelector(".li-pm");
let PL = document.querySelector(".li-pl");
let result = document.querySelector(".result");

// اقسام الفيزياء
next.addEventListener("click", (eo) => {
    result.style.opacity = 0;
    if (part.value === "P") {
        P.style.display = "flex";
        PCH.style.display = "none";
        PG.style.display = "none";
        PM.style.display = "none";
        PL.style.display = "none";
    }else if(part.value === "PCH"){
        PCH.style.display = "flex";
        P.style.display = "none";
        PG.style.display = "none";
        PM.style.display = "none";
        PL.style.display = "none";
    }else if(part.value === "PG"){
        PCH.style.display = "none";
        P.style.display = "none";
        PG.style.display = "flex";
        PM.style.display = "none";
        PL.style.display = "none";
    }else if(part.value === "PM"){
        PCH.style.display = "none";
        P.style.display = "none";
        PG.style.display = "none";
        PM.style.display = "flex";
        PL.style.display = "none";
    }else if(part.value === "PL"){
        PCH.style.display = "none";
        P.style.display = "none";
        PG.style.display = "none";
        PM.style.display = "none";
        PL.style.display = "flex";
    }else{
        P.style.display = "none";
        PCH.style.display = "none";
        PG.style.display = "none";
        PM.style.display = "none";
        PL.style.display = "none";
        result.style.opacity = 0;
    }
});





//==============
let enter = document.querySelector(".enterJs");
let subject = document.querySelector(".list-P");
let sub = document.getElementById("subject");
let code = document.getElementById("code");
let hour1 = document.getElementById("hour");
let hour2 = document.getElementById("hour-2");


enter.addEventListener("click", (eo) => {
    // قسم الفيزياء الاجباري
    if (subject.value === "P178") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء رياضية 1";
        code.innerHTML = "P177";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P211") {
        result.style.opacity = 1;
        sub.innerHTML = "خواص مادة";
        code.innerHTML = "P111";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P222") {
        result.style.opacity = 1;
        sub.innerHTML = "ديناميكا حرارية";
        code.innerHTML = "P122";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P254") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء ذرية 1";
        code.innerHTML = "P133";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P275") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء رياضية 1";
        code.innerHTML = "P177";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P286") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 1";
        code.innerHTML = "P189";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "4 hours";
    }else if (subject.value === "P311") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء جوامد 1";
        code.innerHTML = "P211";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P352") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء نووية 1";
        code.innerHTML = "P254";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P373") {
        result.style.opacity = 1;
        sub.innerHTML = "ميكانيكا الكم 1";
        code.innerHTML = "P275";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P374") {
        result.style.opacity = 1;
        sub.innerHTML = "ديناميكا حرارية احصائية";
        code.innerHTML = "P222";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P385") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 2";
        code.innerHTML = "P286";
        hour1.innerHTML = "4 hours";
        hour2.innerHTML = "4 hours";
    }else if (subject.value === "P411") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء جوامد 1";
        code.innerHTML = "P211";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P485") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 3";
        code.innerHTML = "P385";
        hour1.innerHTML = "4 hours";
        hour2.innerHTML = "4 hours";
    }
    
    // قسم الفيزياء الاختياري
    else if (subject.value === "P1610") {
        result.style.opacity = 1;
        sub.innerHTML = "موجات و صوتيات";
        code.innerHTML = "P144";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P237") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء ذرية 1";
        code.innerHTML = "P133";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P248") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء ذرية 1";
        code.innerHTML = "P133";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P269") {
        result.style.opacity = 1;
        sub.innerHTML = "الكترونيات فيزيائية";
        code.innerHTML = "P1610";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P2710") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء رياضية 1";
        code.innerHTML = "P177";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P2711") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء رياضية 1";
        code.innerHTML = "P177";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P356") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء نووية 1";
        code.innerHTML = "P254";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P357") {
        result.style.opacity = 1;
        sub.innerHTML = "يزياء نووية 1";
        code.innerHTML = "P254";
        hour1.innerHTML = "2 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P457") {
        result.style.opacity = 1;
        sub.innerHTML = "ميكانيكا الموائع";
        code.innerHTML = "P2711";
        hour1.innerHTML = "2 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P4710") {
        result.style.opacity = 1;
        sub.innerHTML = "كهرومغناطيسية";
        code.innerHTML = "P145";
        hour1.innerHTML = "2 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P4911") {
        result.style.opacity = 1;
        sub.innerHTML = "ديناميكا حرارية احصائية";
        code.innerHTML = "P222";
        hour1.innerHTML = "2 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P4913") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء جوية 1";
        code.innerHTML = "P4911";
        hour1.innerHTML = "2 hours";
        hour2.innerHTML = "2 hours";
    }else if (subject.value === "P4115") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء جوامد 2";
        code.innerHTML = "P311";
        hour1.innerHTML = "2 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P4116") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء جوامد 2";
        code.innerHTML = "P311";
        hour1.innerHTML = "2 hours";
        hour2.innerHTML = "3 hours";
    }else if (subject.value === "P2412") {
        result.style.opacity = 1;
        sub.innerHTML = "بصريات الكترونية";
        code.innerHTML = "P233";
        hour1.innerHTML = "3 hours";
        hour2.innerHTML = "3 hours";
    }else {
        result.style.opacity = 0;
    }
    
});

//==============
let subject2 = document.querySelector(".li-PCH");
let enter2 = document.querySelector(".enterJs2");
let hour3 = document.getElementById("hour-3");

enter2.addEventListener("click", (eo) => {
    // قسم الفيزياء والكيمياء الاجباري
    if (subject2.value === "CH211") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء فيزيائية";
        code.innerHTML = "CH111";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH222") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء غير عضوية";
        code.innerHTML = "CH122";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH245") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء عضوية";
        code.innerHTML = "CH145";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH246") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء عضوية";
        code.innerHTML = "CH145";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH278") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عملية تحليلية وفيزيائية وغير عضوية 1";
        code.innerHTML = "CH176";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH279") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عملية عضوية 1";
        code.innerHTML = "CH177";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH311") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء فيزيائية";
        code.innerHTML = "CH111";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH323") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء العناصر غير الانتقالية";
        code.innerHTML = "CH222";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH324") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء العناصر الانتقالية";
        code.innerHTML = "CH323";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH446") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH244") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء عضوية";
        code.innerHTML = "CH145";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH3711") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عملية تحليلية وفيزيائية وغير عضوية 2";
        code.innerHTML = "CH278";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH346") {
        result.style.opacity = 1;
        sub.innerHTML = "مبادىء الكيمياء العضوية الفيزيائية";
        code.innerHTML = "CH244";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "P1610") {
        result.style.opacity = 1;
        sub.innerHTML = "موجات وصوتيات";
        code.innerHTML = "P144";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else if (subject2.value === "P211") {
        result.style.opacity = 1;
        sub.innerHTML = "خواص مادة";
        code.innerHTML = "P111";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else if (subject2.value === "P237") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء ذرية 1";
        code.innerHTML = "P133";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else if (subject2.value === "P286") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 1";
        code.innerHTML = "P189";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "4 hours";
    }else if (subject2.value === "P385") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 2";
        code.innerHTML = "P286";
        hour1.innerHTML = "4 hours";
        hour3.innerHTML = "4 hours";
    }else if (subject2.value === "P485") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 3";
        code.innerHTML = "P385";
        hour1.innerHTML = "4 hours";
        hour3.innerHTML = "4 hours";
    }
    
    // قسم الفيزياء والكيمياء الاختياري
    else if (subject2.value === "CH233") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء تحليلية 1";
        code.innerHTML = "CH134";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH4522") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH312") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء فيزيائية";
        code.innerHTML = "CH111";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH412") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء فيزيائية";
        code.innerHTML = "CH111";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH4420") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH325") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء تحليلية 1";
        code.innerHTML = "CH134";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH447") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH448") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH469") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH4710") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عملية تحليلية وفيزيائية وغير عضوية 3";
        code.innerHTML = "CH3711";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH3314") {
        result.style.opacity = 1;
        sub.innerHTML = "تحليل آلي 1";
        code.innerHTML = "CH325";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH349") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH411") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء غير عضوية";
        code.innerHTML = "CH122";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH4216") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء المتراكبات";
        code.innerHTML = "CH324";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH4418") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عضوية أروماتية";
        code.innerHTML = "CH246";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "CH4711") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء عملية عضوية 3";
        code.innerHTML = "CH3712";
        hour1.innerHTML = "2 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "P222") {
        result.style.opacity = 1;
        sub.innerHTML = "دينا ميكا حرارية";
        code.innerHTML = "P122";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else if (subject2.value === "P233") {
        result.style.opacity = 1;
        sub.innerHTML = "الكترونيات فيزيائية";
        code.innerHTML = "P1610";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else if (subject2.value === "P254") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء ذرية 1";
        code.innerHTML = "P133";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else if (subject2.value === "P352") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء نووية 1";
        code.innerHTML = "P254";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else if (subject2.value === "P357") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء نووية 1";
        code.innerHTML = "P254";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "2 hours";
    }else if (subject2.value === "P411") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء جوامد 1";
        code.innerHTML = "P211";
        hour1.innerHTML = "3 hours";
        hour3.innerHTML = "3 hours";
    }else {
        result.style.opacity = 0;
    }
    
});


//==============
let subject3 = document.querySelector(".li-PG");
let enter3 = document.querySelector(".enterJs3");
let hour4 = document.getElementById("hour-4");

enter3.addEventListener("click", (eo) => {
    // قسم الفيزياء والجيولوجيا الاجباري
    if (subject3.value === "CH211") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء فيزيائية";
        code.innerHTML = "CH111";
        hour1.innerHTML = "3 hours";
        hour4.innerHTML = "2 hours";
    }else if (subject3.value === "P485") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 3";
        code.innerHTML = "P385";
        hour1.innerHTML = "4 hours";
        hour4.innerHTML = "4 hours";
    }
    
    // قسم الفيزياء والجيولوجيا الاختياري
    else if (subject3.value === "CH233") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء تحليلية 1";
        code.innerHTML = "CH134";
        hour1.innerHTML = "2 hours";
        hour4.innerHTML = "2 hours";
    }else if (subject3.value === "") {
        result.style.opacity = 1;
        sub.innerHTML = "";
        code.innerHTML = "";
        hour1.innerHTML = "3 hours";
        hour4.innerHTML = "3 hours";
    }else {
        result.style.opacity = 0;
    }
    
});

//==============
let subject4 = document.querySelector(".li-PM");
let enter4 = document.querySelector(".enterJs4");
let hour5 = document.getElementById("hour-5");

enter4.addEventListener("click", (eo) => {
    // قسم الفيزياء وعلوم الحاسب الاجباري
    if (subject4.value === "CH211") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء فيزيائية";
        code.innerHTML = "CH111";
        hour1.innerHTML = "3 hours";
        hour5.innerHTML = "2 hours";
    }else if (subject4.value === "P485") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 3";
        code.innerHTML = "P385";
        hour1.innerHTML = "4 hours";
        hour5.innerHTML = "4 hours";
    }
    
    // قسم  الفيزياء وعلوم الحاسب الاختياري
    else if (subject4.value === "CH233") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء تحليلية 1";
        code.innerHTML = "CH134";
        hour1.innerHTML = "2 hours";
        hour5.innerHTML = "2 hours";
    }else if (subject4.value === "") {
        result.style.opacity = 1;
        sub.innerHTML = "";
        code.innerHTML = "";
        hour1.innerHTML = "3 hours";
        hour5.innerHTML = "3 hours";
    }else {
        result.style.opacity = 0;
    }
    
});


//==============
let subject5 = document.querySelector(".li-PL");
let enter5 = document.querySelector(".enterJs5");
let hour6 = document.getElementById("hour-6");

enter5.addEventListener("click", (eo) => {
    // قسم الفيزياء وعلوم الليزر الاجباري
    if (subject5.value === "CH211") {
        result.style.opacity = 1;
        sub.innerHTML = "أسس كيمياء فيزيائية";
        code.innerHTML = "CH111";
        hour1.innerHTML = "3 hours";
        hour6.innerHTML = "2 hours";
    }else if (subject5.value === "P485") {
        result.style.opacity = 1;
        sub.innerHTML = "فيزياء تطبيقية 3";
        code.innerHTML = "P385";
        hour1.innerHTML = "4 hours";
        hour6.innerHTML = "4 hours";
    }
    
    // قسم الفيزياء وعلوم الليزر الاختياري
    else if (subject5.value === "CH233") {
        result.style.opacity = 1;
        sub.innerHTML = "كيمياء تحليلية 1";
        code.innerHTML = "CH134";
        hour1.innerHTML = "2 hours";
        hour6.innerHTML = "2 hours";
    }else if (subject5.value === "") {
        result.style.opacity = 1;
        sub.innerHTML = "";
        code.innerHTML = "";
        hour1.innerHTML = "3 hours";
        hour6.innerHTML = "3 hours";
    }else {
        result.style.opacity = 0;
    }
    
});