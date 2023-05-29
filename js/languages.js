let LANG_FALLBACK = "en"; // fallback lang,when lang attr undefined

let getLangFromStorage = () => localStorage.getItem("lang");
let setLangInStorage = (lang) => localStorage.setItem("lang", lang);

let LANGS = {
  // syntax as the following
  // "xlang" : {
  //    partName1: "partName1 content in xlang",
  //    partNameN: "partNameN content in xlang"
  //    and so on...
  // }

  en: {
    Home: "Home",
    About: "About",
    Service: "Service",
    ProjectList: "Transformations",
    Contact: "Contact",
    GetAQuote: "Contact Us",
    PersevereRelentlessly: "Fight for your dreams. Persevere relentlessly",
    ExploreMore: "Explore more",
    FightForSuccess: "Fight if you want to success",
    Previous: "Previous",
    Next: "Next",
    feature1: "Personalized Training Plans",
    feature2: "Virtual Coaching and Support",
    feature3: "Access to a Wide Range of Fitness Resources",
    title1: "Unleashing Athletic Potential: Meet Coach Oussama Boukh",
    desc1:
      "Oussama Boukh is a highly skilled and experienced sports coach who has helped numerous athletes achieve their goals. With a passion for fitness and a deep understanding of the human body, Oussama has dedicated his life to helping people improve their physical abilities and reach new heights in their athletic pursuits",
    PresExper: "Preserving Experiences",
    desc2:
      "Experiences shape us, and our archives preserve them. They allow us to reflect, learn, and share our stories.",
    DediTeam: "Dedicated Team",
    desc3:
      "Experienced team delivers tailored coaching. Committed to learning and results, they provide feedback, support, and guidance to achieve goals.",
    facts1: "Clients",
    facts2: "Happy clients",
    facts3: "Good transformation",
    facts4: "Years of experience",
    title2: "Why Choosing Us!",
    title3: "Few Reasons Why People Choosing Us!",
    desc4:
      "Our online sports coaching provides personalized training plans, remote coaching and support, and access to a wide range of resources. Our experienced coaches are dedicated to helping you achieve your fitness goals, and will work closely with you to develop a customized plan that meets your unique needs and preferences. We provide regular feedback, support, and guidance to help you stay on track and make progress towards your objectives.",
    info1: "Youtube Video",
    title4: "Our Services",
    title5: "Services That We Offer For You",
    title6: "Bulking Nutrition Plans",
    title7: "Strength Training Programs",
    title8: "Progress Tracking and Accountability",
    desc5:
      "                  we create tailored nutrition plans for bulking, based on client's dietary needs, preferences, and supplementation.",
    desc6:
      "                  Coach designs strength training programs with exercises and techniques for building muscle mass and strength.",
    desc7:
      "we provide regular feedback, support, and tracking to keep clients motivated towards bulking goals.",
    readmore: "Read More",
    title9: "How we work?",
    title10: "Assess the Client's Needs.",
    desc8:
      "We meet with the client to assess their needs, goals, and any physical or medical limitations. This enables us to create a customized plan that meets their unique requirements.",
    title11: "Develop a Training Plan",
    desc9:
      "We develop a tailored training plan, accounting for the client's goals and limitations. The plan includes exercises and techniques to progress towards objectives.",
    title12: "Provide Regular Feedback and Support",
    desc10:
      "We offer regular feedback and support, including progress tracking, technique correction, and encouragement, to help clients stay motivated and on track.",
    title13: "Adjust and Modify the Plan as Needed",
    desc11:
      "              We periodically review the training plan and make necessary adjustments to ensure its effectiveness and relevance as clients progress on their special road.",
    title14: "Our tranformation",
    desc12:
      'Transformation starts with challenging ourselves. Muscles tear lifting heavier weights. Failure builds gains. The habit of "one more repetition" allows growth. Pushing limits defines success. Pain builds strength. Growth starts when we refuse to quit. New PRs mark progress.The discomfort of growth defines transformation. We become stronger versions of ourselves.',
    title15: "Pricing",
    desc13:
      "Our services are competitively priced, offering great value for our clients. We believe in fair and transparent pricing without compromising on quality. Contact us  to learn more.",
    info2: "Basic",
    month: "/ month",
    info3: "MEAL PLAN SPECIALIZED",
    info4: "WORKOUT PLAN",
    info5: "CARDIO",
    info6: "SUPPLEMENTS PLAN",
    info7: "EVERY TWO WEEKS CHECKS",
    info8: "QUESTIONS EVERY  TWO WEEKS",
    info9: "HORMONAL CYCLES WITH DETAILS",
    info10: "INCLUDED SPORT ANALYZE FOR ADVANCED ATHLETES",
    info11: "EVERY WEEK CHECKS",
    info12: "QUESTIONS EVERY WEEK",
    info13: "Advanced",
    info14: "Professional",
    buynow: "Buy Now",
    title16: "Frequently Asked",
    title17: "Questions",
    desc14:
      "Do you have questions about our technology services? We are here to help you. Contact us by phone, e-mail or via our online contact form. We pride ourselves on our quick response times and friendly customer service, and are always happy to answer your questions and address your concerns. Don't hesitate to reach out. We look forward to hearing from you! ",
    qu1: "Why choosing me?  ",
    desc15:
      "I'm glad to answer because my clients tell how did I help them out to achieve good results, cheery lives, healthy  and strong bodies with very simple and physically fit nutrition",
    qu2: "Is it important to have a trainer ?",
    desc16:
      " Yes it is essential to share your gym journey with a high competent teacher who can guide you and help you follow you life dreams because I  provide you with better accountability, efficiency, and objectivity during your workouts.",
    qu3: "What's a subscription plan?",
    desc17:
      " A subscription to a plan is an agreement between a user and a service, according to which the service organization agrees to provide the user with a set of services under the terms of the plan, and the subscriber receives the right to use the services and undertakes to pay for these service",
      contact: "Reservations",
      contact1: "Phone : ",
      contact2: "Email : ",
      contact3: "Opening Hours",
      contact4: "Mon-Sat: 11AM- 23PM Sunday: Closed",
      contact5: "Contact Us",
    desc18: "We are always here to help you. Contact us by phone, e-mail or via our online contact form. We pride ourselves on our quick response times and friendly customer service. Please do not hesitate to contact us with any questions or concerns you may have. We look forward to hearing from you!",
    texting: "text us : ",
    calling: "call us : "
  },

  ar: {
    Home: "الصفحة الرئيسية",
    About: "حول",
    Service: "خدمة",
    ProjectList: "مشاريع",
    Contact: "تواصل",
    GetAQuote: "تواصل معنا",
    PersevereRelentlessly: "حارب على قبل أحلامك. المثابرة بلا توقف",
    ExploreMore: "انقر للمزيد من المعلومات",
    FightForSuccess: "تقاتل لا بغيتي توصل",
    Previous: "السابق",
    Next: "التالي",
    feature1: "خطط التدريب المخصصة",
    feature2: "التدريب عن بعد والدعم",
    feature3: "الوصول الي مصادر واسعة من اللياقة البدنية",
    title1: "إطلاق الإمكانات الرياضية: قابل مدرب أوسامة بوخ ",
    desc1:
      "أوسامة بوخ مدرب رياضي مهر وخبير بفضل تجربته الطويلة ساعد العديد من الرياضيين على تحقيق أهدافهم . ملتزم باللياقة البدنية ولديه فهم عميق للجسم البشري، قدم حياته لمساعدة الناس على تحسين قدراتهم البدنية والوصول إلى مستويات جديدة في سعيهم الرياضي ",

    PresExper: "الحفاظ على التجارب",
    DediTeam: "فريق مخلص",
    desc4:
      "يوفر لكم التدريب عن بعد تخطيط تدريبي مخصص، دعم وتغذية راجعة لتحقيق أهدافكم.",
    facts1: "العملاء",
    facts2: "عملاء راضون",
    facts3: "تحول جيد",
    facts4: "سنوات خبرة",
    title2: "لماذا نختارك!",
    title3: "أسباب لماذا يختارنا الناس!",
    title6: "خطط التغذية للتضخم العضلي",
    title7: "برامج التدريب لتقوية العضلات",
    title8: "متابعة التقدم والمساءلة",
    desc5:
      " نخلق خطط تغذية مصممة خصيصا للتضخم، على أساس الاحتياجات والتفضيلات الغذائية للعميل والمكملات.",
    desc6: "يصمم المدرب برامج تدريب لبناء العضلات والقوة مع تمارين وتقنيات.",
    desc7:
      " نوفر تغذية راجعة منتظمة ودعم ومتابعة للحفاظ على دافعية العملاء نحو أهداف التضخم.",
    readmore: "اقرأ المزيد",
    title9: "كيف نعمل؟",
    title10: "تقييم احتياجات العميل.",
    desc8:
      "نلتقي بالعميل لتقييم احتياجاته وأهدافه وأي قيود صحية أو طبية. وهذا يمكننا من وضع خطة مصممة خصيصًا لتلبية متطلباته الفريدة.",
    title11: "وضع خطة التدريب",
    desc9:
      "نطور خطة تدريب مصممة خصيصا ، مراعية أهداف العميل وقيوده. تتضمن الخطة تمارين وتقنيات للتقدم نحو الأهداف.",
    title12: "توفير الملاحظات والدعم بانتظام",
    desc10:
      "نوفر تغذية راجعة ودعم يتضمن متابعة التقدم ،تصحيح التقنيات والتشجيع لمساعدة العملاء على البقاء مدفوعين لتحقيق الأهداف.",
    title13: "تعديل الخطة حسب الحاجة",
    desc11:
      "نقوم بمراجعة دورية لخطة التدريب ونقوم بالتعديلات اللازمة لضمان فعاليتها وصلتها بتقدم العملاء على الطريق الخاص بهم.",
    title14: "تحولنا",
    desc12: "التحول يبدأ من تحدي أنفسنا...",
    title15: "الأسعار ",
    desc13:
      "خدماتنا مقدمة بأسعار تنافسية وتوفر قيمة عالية لعملائنا. نؤمن بالأسعار العادلة والشفافة دون المساومة على الجودة. يرجى الاتصال بنا  لمعرفة المزيد.",
    info2: "أساسي",
    month: "/ شهر",
    info3: "خطة وجبات متخصصة",
    info4: "خطة تدريب",
    info5: "رياضة بدنية ",
    info6: "خطة مكملات غذائية",
    info7: "مراجعات كل أسبوعين",
    info8: "أسئلة كل أسبوعين",
    info9: "دورات هرمونية بالتفصيل",
    info10: "يشمل تحليل رياضي للرياضيين المحترفين",
    info11: "مراجعات كل أسبوع",
    info12: "أسئلة كل أسبوع",
    info13: "متقدم",
    info14: "محترف",
    buynow: "اشتري الآن",
    title16: "أسئلة شائعة",
    title17: "اسئلة",
    desc14: "هل لديك أسئلة حول خدمات التكنولوجيا الخاصة بنا؟ نحن هنا لمساعدتك. اتصل بنا عبر الهاتف أو البريد الإلكتروني أو عبر نموذج الاتصال عبر الإنترنت. نحن نفخر بأوقات الاستجابة السريعة لدينا وخدمة العملاء الودية ، ونحن سعداء دائمًا بالإجابة على أسئلتك ومعالجة مخاوفك. لا تتردد في التواصل. نحن نتطلع الى الاستماع منك!",
    qu1: " لماذا اختياري ؟",
    desc15: "يسعدني الإجابة لأن موكلي يخبرون كيف ساعدتهم في تحقيق نتائج جيدة ، وحياة مبتهجة ، وأجسام صحية وقوية مع التغذية البسيطة للغاية واللائمة الجسدية ",
    qu2: " هل هو مهم أن يكون لديك مدرب؟",
    desc16:
      "نعم ، فإن مشاركة رحلتك في نادي اللياقة البدنية مع معلم مؤهل عالي الكفاءة يمكن أن يوجهك و يساعدك على تحقيق أحلام حياتك .    ",
    qu3: "ما هو خطة الاشتراك؟ ",
    desc17:
      "إن الاشتراك في الخطة هو اتفاق بين المستخدم والخدمة ، ووفقًا لمؤسسة الخدمة توافق على تزويد المستخدم بمجموعة من الخدمات بموجب شروط الخطة ، ويتلقى المشترك الحق في استخدام الخدمات و يتعهد بدفع ثمن هذه الخدمة ",
       contact :"احجز الآن :",     
   contact1:"هاتف: ",     
    contact2:"البريد الإلكتروني: ",       
    contact3:  "ساعات العمل" ,        
    contact4:"من  الإثنين إلى السبت 11 صباحًا -11مسا ًء الأحد مغلق" ,       
    contact5:"تواصلوا معنا"
  },
};

// lang checking
let AVAILABLE_LANGS = Object.keys(LANGS);

// lang sould be available
AVAILABLE_LANGS?.indexOf(getLangFromStorage()) == -1 &&
  setLangInStorage(LANG_FALLBACK);

let LANG = getLangFromStorage();

document.documentElement.lang = LANG; // set lang to page

// render available langs in lang selector
AVAILABLE_LANGS.forEach((lang) => {
  let option = new Option(lang, lang); // create option
  lang == LANG && (option.defaultSelected = true); // set selected if lang is used

  document.querySelector("[data-langSelector]").add(
    option, // arg1: text, arg2: value
    undefined // put option in bottom
  );
});

// rendering parts translation
Object.keys(LANGS[LANG]).forEach((partName) => {
  if (partName != "title") {
    document
      .querySelectorAll(`[data-${partName}]`)
      .forEach((e) => (e.textContent = LANGS[LANG][partName]));
    return;
  }

  document.title = LANGS[LANG][partName];
});

// Get the selected language from localStorage, ordefault to English
const selectedLang = localStorage.getItem("lang") || "en";
// Set the value of the language selector to the selected language
const langSelector = document.querySelector("[data-langSelector]");
langSelector.value = selectedLang;
// Set the direction of the body based on the selected language
document.body.setAttribute("dir", selectedLang === "ar" ? "rtl" : "ltr");
