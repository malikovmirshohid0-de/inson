import { AnatomyItem } from '../types/anatomy';

export const ANATOMY_ITEMS: AnatomyItem[] = [
  // ==================== YURAK-QON TOMIR TIZIMI ====================
  {
    id: 'heart',
    nameUz: 'Yurak',
    nameLatin: 'Cor',
    category: 'organ',
    system: 'cardiovascular',
    systemNameUz: 'Yurak-qon tomir tizimi',
    systemColor: 'text-red-500 bg-red-500/10 border-red-500/30',
    views: ['front'],
    location: "Ko'krak qafasining o'rta qismida, chap tomonga biroz og'gan holda ikki o'pka orasida joylashgan.",
    function: "Tanadagi barcha to'qima va a'zolarga qon haydovchi asosiy biologik nasos. U bir kecha-kunduzda 100 000 martadan ortiq qisqarib, taxminan 7 500 litr qonni butun vujud bo'ylab tinimsiz aylantiradi.",
    diseases: [
      { name: "Yurak ishemik kasalligi", description: "Yurak mushaklarini oziqlantiruvchi toj (koronar) qon tomirlarining torayishi yoki tiqilishi.", severity: 'jiddiy' },
      { name: "Arterial gipertoniya", description: "Qon bosimining surunkali 140/90 mm simob ustunidan baland ko'tarilishi.", severity: 'eng_kop' },
      { name: "Yurak aritmiyasi", description: "Yurak urish ritmi va ketma-ketligining buzilishi (taxikardiya yoki bradikardiya).", severity: 'ortacha' },
      { name: "Miokard infarkti", description: "Yurak mushagi bir qismining qon bilan ta'minlanishi to'xtab, nekrozga uchrashi.", severity: 'jiddiy' },
      { name: "Yurak yetishmovchiligi", description: "Yurakning yetarli miqdorda qon hayday olmasligi natijasida tanada shish va hansirash yuzaga kelishi.", severity: 'jiddiy' }
    ],
    causes: ["Kamharakat turmush tarzi", "Noto'g'ri va yog'li ovqatlanish", "Surunkali ruhiy stress", "Tamaki va alkogol iste'moli", "Irsiy moyillik va yosh omili"],
    statistics: {
      percentage: 32,
      label: "Dunyodagi jami o'lim holatlarining qariyb 32 foizi (yiliga ~18 million kishi) yurak-qon tomir kasalliklari hissasiga to'g'ri keladi.",
      source: "Jahon Sog'liqni Saqlash Tashkiloti (JSST / WHO)",
      year: 2023,
      details: "Yurak xastaliklari dunyo bo'yicha o'lim sabablari orasida 1-o'rinda turadi."
    },
    prevention: "Har kuni kamida 30 daqiqa piyoda yuring, tuz iste'molini kuniga 5 grammgacha cheklang va qon bosimingizni muntazam nazorat qiling.",
    funFact: "Inson yuragi o'zining elektr impulslarini mustaqil ishlab chiqaradi, shu sababli yetarli kislorod berilsa, u tana tashqarisida ham urishda davom etishi mumkin.",
    glossary: [
      { term: "Miokard", definition: "Yurakning asosiy harakatlantiruvchi qalin mushak qatlami." },
      { term: "Sistola", definition: "Yurak qorinchalarining qisqarib, qonni tomirlarga haydashi." },
      { term: "Ateroskleroz", definition: "Tomir devorlariga xolesterin quyqalarining yig'ilib, uning torayishi." }
    ]
  },
  {
    id: 'aorta',
    nameUz: 'Aorta va yirik qon tomirlar',
    nameLatin: 'Aorta',
    category: 'vessel',
    system: 'cardiovascular',
    systemNameUz: 'Yurak-qon tomir tizimi',
    systemColor: 'text-rose-500 bg-rose-500/10 border-rose-500/30',
    views: ['front', 'back'],
    location: "Yurakning chap qorinchasidan boshlanib, ko'krak va qorin bo'shlig'i bo'ylab umurtqa oldida pastga yo'naladi.",
    function: "Inson tanasidagi eng yirik bosh arteriya tomiri. U yurakdan otilib chiqqan kislorodga to'yingan yangi qonni butun vujudga tarqatuvchi magistral yo'ldir.",
    diseases: [
      { name: "Aorta anevrizmasi", description: "Aorta devorining zaiflashib, pufaksimon bo'rtib chiqishi va yorilish xavfi.", severity: 'jiddiy' },
      { name: "Aorta aterosklerozi", description: "Aorta devoriga xolesterin qatlamlari o'tirishi natijasida elastikligining yo'qolishi.", severity: 'eng_kop' },
      { name: "Aortit", description: "Aorta devorlarining autoimmun yoki infeksion yallig'lanishi.", severity: 'ortacha' }
    ],
    causes: ["Yuqori arterial qon bosimi (gipertoniya)", "Chekish va nikotin ta'siri", "Irsiy biriktiruvchi to'qima kasalliklari", "Qon tarkibida xolesterin yuqoriligi"],
    statistics: {
      percentage: 8,
      label: "65 yoshdan oshgan erkaklarning taxminan 5-8 foizida qorin aortasi anevrizmasi xavfi kuzatiladi.",
      source: "Lancet / Global Cardiovascular Studies",
      year: 2022
    },
    prevention: "Qon bosimini doimiy me'yorda (120/80) ushlab turing, chekishdan mutlaqo voz keching va vaqti-vaqti bilan qorin qon tomirlari UTT (UZI) tekshiruvidan o'ting.",
    funFact: "Aortaning diametri eng keng joyida bog' sug'orish shlangidek — taxminan 2.5-3 sm ga teng bo'ladi.",
    glossary: [
      { term: "Anevrizma", definition: "Tomir devorining noziklashib, xalta shaklida kengayishi." },
      { term: "Lumen", definition: "Qon tomiri ichki bo'shlig'i yoki o'tish yo'li." }
    ]
  },

  // ==================== NAFAS TIZIMI ====================
  {
    id: 'lungs',
    nameUz: "O'pka",
    nameLatin: 'Pulmones',
    category: 'organ',
    system: 'respiratory',
    systemNameUz: 'Nafas olish tizimi',
    systemColor: 'text-sky-500 bg-sky-500/10 border-sky-500/30',
    views: ['front', 'back'],
    location: "Ko'krak qafasining deyarli butun bo'shlig'ini egallaydi, yurak va to'sh suyagining ikki tomonida joylashgan.",
    function: "Tashqi muhitdagi kislorodni qonga o'tkazish va moddalar almashinuvida hosil bo'lgan karbonat angidrid gazini tashqariga chiqarish. Har kuni inson taxminan 20 000 marta nafas oladi.",
    diseases: [
      { name: "Surunkali obstruktiv o'pka kasalligi (SOO'K / COPD)", description: "Nafas yo'llarining doimiy torayishi oqibatida havo aylanishining buzilishi.", severity: 'jiddiy' },
      { name: "Bronxial astma", description: "Bronxlarning surunkali allergik yallig'lanishi va vaqti-vaqti bilan bo'g'ilish xurujlari.", severity: 'eng_kop' },
      { name: "Zotiljam (Pnevmoniya)", description: "Bakteriya yoki viruslar keltirib chiqaradigan o'pka to'qimasining o'tkir yallig'lanishi.", severity: 'jiddiy' },
      { name: "O'pka saratoni", description: "Bronxlar va o'pka to'qimasida hosil bo'ladigan xavfli o'sma.", severity: 'jiddiy' }
    ],
    causes: ["Tamaki chekish (jumladan elektron sigaretlar)", "Zaharli havo va chang bilan nafas olish", "Respirator virusli infeksiyalar", "Allergenlar bilan doimiy aloqa"],
    statistics: {
      percentage: 10,
      label: "Dunyo aholisining qariyb 10-12 foizi (300+ million kishi) astma yoki SOO'K kabi surunkali o'pka kasalliklaridan aziyat chekadi.",
      source: "JSST / WHO Global Respiratory Report",
      year: 2023,
      details: "Chekish o'pka saratoni holatlarining 85 foizidan ortig'iga sabab bo'ladi."
    },
    prevention: "Toza havoda ko'proq sayr qiling, chekmang va tutunli joylardan yiroq bo'ling, nafas mashqlarini bajaring.",
    funFact: "Agar ikkala o'pkaning barcha alveolalari tekis yoyilsa, ularning umumiy sathi tennis kortining maydoniga (taxminan 70-100 kv. metr) teng bo'ladi!",
    glossary: [
      { term: "Alveola", definition: "O'pkaning eng mayda havo pufakchasi, aynan shu yerda gazlar almashinuvi kechadi." },
      { term: "Bronx", definition: "Traxeyadan o'pka ichiga havo eltuvchi daraxtsimon shoxlangan naychalar." }
    ]
  },
  {
    id: 'trachea',
    nameUz: 'Kekirdak va traxeya',
    nameLatin: 'Trachea',
    category: 'organ',
    system: 'respiratory',
    systemNameUz: 'Nafas olish tizimi',
    systemColor: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
    views: ['front'],
    location: "Bo'yinning oldingi qismida, qizilo'ngachning oldida joylashib, halqumdan ko'krak qafasiga qadar tushadi.",
    function: "Havo o'tishi uchun doim ochiq turadigan tog'ay halqalardan tuzilgan naycha. U havo oqimini isitadi, namlaydi va changlardan tozalaydi.",
    diseases: [
      { name: "Traxeit", description: "Traxeya shilliq qavatining o'tkir yoki surunkali yallig'lanishi va quruq yo'tal.", severity: 'eng_kop' },
      { name: "Traxeya stenozi", description: "Traxeya bo'shlig'ining torayib, nafas olishning og'irlashishi.", severity: 'jiddiy' },
      { name: "Laringotraxeit", description: "Halqum va kekirdakning birgalikdagi yallig'lanishi (bo'g'ilish xuruji xavfi bilan).", severity: 'ortacha' }
    ],
    causes: ["Sovuq va quruq havo bilan nafas olish", "O'tkir respirator virusli infeksiyalar (O'RVI)", "Kimyoviy bug'lar va tutun", "Allergik reaksiyalar"],
    statistics: {
      percentage: 15,
      label: "Aholining taxminan 15 foizi har yili kamida bir marta yuqori nafas yo'llari va traxeya yallig'lanishi bilan to'qnash keladi.",
      source: "Global Burden of Disease Study",
      year: 2022
    },
    prevention: "Xona havosini namlantirib turing, tomoq va ko'krakni sovuqdan asrang, shamollash paytida ko'p iliq suyuqlik iching.",
    funFact: "Traxeyaning ichki yuzasi mitti hilpillovchi kiprikchalar bilan qoplangan bo'lib, ular daqiqasiga 1000 martadan ortiq tebranib changlarni tomoqqa qarab haydab chiqaradi.",
    glossary: [
      { term: "Bifurkatsiya", definition: "Traxeyaning ikkita asosiy bronxga ajralish nuqtasi." }
    ]
  },

  // ==================== HAZM QILISH TIZIMI ====================
  {
    id: 'stomach',
    nameUz: 'Oshqozon',
    nameLatin: 'Gaster / Ventriculus',
    category: 'organ',
    system: 'digestive',
    systemNameUz: 'Hazm qilish tizimi',
    systemColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    views: ['front'],
    location: "Qorin bo'shlig'ining yuqori chap tomonida, diafragma ostida, qovurg'a yoyi orqasida joylashgan.",
    function: "Ovqatni qabul qilib, xlorid kislota va pepsin fermenti orqali parchalovchi, oqsillarni kimyoviy hazm qiluvchi kengayuvchi mushakli xalta.",
    diseases: [
      { name: "Gastrit", description: "Oshqozon ichki shilliq qavatining yallig'lanishi va hazmning buzilishi.", severity: 'eng_kop' },
      { name: "Oshqozon yarasi", description: "Shilliq qavatning xlorid kislota ta'sirida yemirilishi va nuqson hosil bo'lishi.", severity: 'jiddiy' },
      { name: "Gastroezofageal reflyuks (GERB)", description: "Oshqozon kislotasining qizilo'ngachga qayta otilishi va jig'ildon qaynashi.", severity: 'eng_kop' },
      { name: "Oshqozon poliplari", description: "Shilliq qavatda hosil bo'ladigan xavfsiz o'smalar.", severity: 'ortacha' }
    ],
    causes: ["Helicobacter pylori bakteriyasi infeksiyasi", "Tartibsiz ovqatlanish va quruq taom yeyish", "Aspirin va nosteroid yallig'lanishga qarshi dorilarni noto'g'ri ichish", "Stress va chekish"],
    statistics: {
      percentage: 50,
      label: "Dunyo aholisining qariyb 50 foizi oshqozon yarasi va gastritning asosiy qo'zg'atuvchisi bo'lgan Helicobacter pylori bilan zararlangan.",
      source: "JSST / WHO Helicobacter Epidemiology",
      year: 2023,
      details: "Kattalar orasida surunkali gastrit bilan kasallanish 60 foizdan oshadi."
    },
    prevention: "Har doim rejim bo'yicha ovqatlaning, haddan tashqari achchiq va qovurilgan taomlardan tiyiling, ovqatni yaxshilab chaynang.",
    funFact: "Oshqozondagi xlorid kislota shu qadar kuchliki, u hatto temir mixni eritishi mumkin. Oshqozon o'zini o'zi hazm qilib yubormasligi uchun har 3-5 kunda ichki shilliq qavatini to'liq yangilab turadi!",
    glossary: [
      { term: "Pepsin", definition: "Oqsillarni mayda peptidlarga parchalovchi asosiy oshqozon fermenti." },
      { term: "Ximus", definition: "Oshqozonda yarim hazm bo'lgan bo'tqasimon ovqat massasi." }
    ]
  },
  {
    id: 'liver',
    nameUz: 'Jigar',
    nameLatin: 'Hepar',
    category: 'organ',
    system: 'digestive',
    systemNameUz: 'Hazm qilish tizimi',
    systemColor: 'text-amber-600 bg-amber-600/10 border-amber-600/30',
    views: ['front'],
    location: "Qorin bo'shlig'ining yuqori o'ng tomonida, to'g'ridan-to'g'ri diafragma ostida qovurg'alar panohi ostida joylashgan.",
    function: "Inson tanasidagi eng yirik ichki a'zo va bosh kimyoviy laboratoriya. Qonni toksinlardan tozalaydi, o't suyuqligi ishlab chiqaradi, yog' va vitaminlarni zaxiralaydi hamda 500 dan ortiq hayotiy jarayonlarni boshqaradi.",
    diseases: [
      { name: "Gepatitlar (A, B, C)", description: "Viruslar chaqiradigan o'tkir yoki surunkali jigar to'qimasining yallig'lanishi.", severity: 'jiddiy' },
      { name: "Jigar yog' bosishi (Gepatoz)", description: "Jigar hujayralarida ortiqcha yog' to'planishi va ularning buzilishi.", severity: 'eng_kop' },
      { name: "Jigar sirrozi", description: "Jigar to'qimalarining chandiqli biriktiruvchi to'qima bilan almashib, faoliyatining to'xtashi.", severity: 'jiddiy' },
      { name: "Jigar yetishmovchiligi", description: "Toksinlar tozalanishi keskin to'xtashi natijasida organizmning zaharlanishi.", severity: 'jiddiy' }
    ],
    causes: ["Ortiqcha vazn va noto'g'ri yog'li ovqatlanish", "Alkogolli ichimliklarni surunkali iste'mol qilish", "Virusli infeksiyalar (B va C gepatit)", "Dori vositalarini nazoratsiz ko'p ichish"],
    statistics: {
      percentage: 25,
      label: "Dunyo bo'yicha kattalarning qariyb 25-30 foizida jigarning alkogolsiz yog' bosishi (NAFLD) mavjud.",
      source: "Journal of Hepatology / WHO",
      year: 2023
    },
    prevention: "Shirin gazli ichimliklar va trans-yog'lardan voz keching, gepatit B ga qarshi emlaning va dori vositalarini faqat shifokor ko'rsatmasi bilan qabul qiling.",
    funFact: "Jigar — tanadagi o'zini o'zi qayta tiklay oladigan (regeneratsiya) yagona a'zodir: uning hatto 70 foizi olib tashlansa ham, qolgan 30 foizidan bir necha oy ichida to'liq tiklana oladi!",
    glossary: [
      { term: "Gepatotsit", definition: "Jigarning asosiy ishchi hujayrasi." },
      { term: "Bilirubin", definition: "Eski qon hujayralari parchalanishidan hosil bo'ladigan sariq pigment." }
    ]
  },
  {
    id: 'gallbladder',
    nameUz: "O't pufagi",
    nameLatin: 'Vesica biliaris / fellea',
    category: 'organ',
    system: 'digestive',
    systemNameUz: 'Hazm qilish tizimi',
    systemColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    views: ['front'],
    location: "Jigarning pastki yuzasida joylashgan noksimon shakldagi xaltacha.",
    function: "Jigarda doimiy ishlab chiqariladigan o't suyuqligini to'plab, quyultiradi va ovqat (ayniqsa yog'lar) oshqozondan ichakka o'tganda uni o'n ikki barmoqli ichakka chiqaradi.",
    diseases: [
      { name: "O't-tosh kasalligi (Xolelitiaz)", description: "O't suyuqligi dimlanishi va xolesterin kristallanishidan toshlar hosil bo'lishi.", severity: 'eng_kop' },
      { name: "Xoletsistit", description: "O't pufagi devorlarining tosh yoki infeksiya oqibatida o'tkir yallig'lanishi.", severity: 'jiddiy' },
      { name: "O't yo'llari diskineziyasi", description: "O't pufagi qisqarish tonusining buzilishi va o't ajralishining sekinlashishi.", severity: 'ortacha' }
    ],
    causes: ["Kamharakatlik va uzoq vaqt och yurish", "Yuqori xolesterinli va yog'li taomlar", "Semizlik va keskin ozish parhezlari", "Ayollarda gormonal o'zgarishlar va homiladorlik"],
    statistics: {
      percentage: 15,
      label: "Kattalar aholisining 10-15 foizida hayoti davomida o't pufagida toshlar paydo bo'ladi (ayollarda erkaklarga qaraganda 2 barobar ko'proq).",
      source: "World Gastroenterology Organisation",
      year: 2022
    },
    prevention: "Kichik porsiyalarda kuniga 4-5 mahal bir xil vaqtda ovqatlaning, yetarli suv iching va uzoq vaqt och yurishdan saqlaning.",
    funFact: "O't pufagining o'zi o't suyuqligi ishlab chiqarmaydi — u faqat jigarning mahsulotini 5-10 baravargacha quyiltirib saqlovchi ombordir.",
    glossary: [
      { term: "Xolesterin toshlari", definition: "O't pufagida tosh hosil bo'lishining eng ko'p tarqalgan (80%) turi." }
    ]
  },
  {
    id: 'pancreas',
    nameUz: 'Oshqozon osti bezi',
    nameLatin: 'Pancreas',
    category: 'organ',
    system: 'digestive',
    systemNameUz: 'Hazm va Endokrin tizimi',
    systemColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    views: ['front'],
    location: "Qorin bo'shlig'ining orqa devorida, oshqozonning orqasida ko'ndalang joylashgan cho'ziq bez.",
    function: "Aralash bez: oqsillar, yog'lar va uglevodlarni parchalovchi kuchli fermentlarni (fermentli shira) ichakka chiqaradi, hamda qondagi shakar miqdorini boshqaruvchi insulin va glyukagon gormonlarini ishlab chiqaradi.",
    diseases: [
      { name: "Qandli diabet (1 va 2-tur)", description: "Insulin yetishmovchiligi yoki hujayralarning insulinga sezuvchanligi yo'qolishi.", severity: 'jiddiy' },
      { name: "Pankreatit (O'tkir va surunkali)", description: "Bez fermentlari faollashib, bezning o'z to'qimasini eritib yuborishi.", severity: 'jiddiy' },
      { name: "Oshqozon osti bezi kistasi", description: "Bez to'qimasida suyuqlik to'plangan bo'shliqlar paydo bo'lishi.", severity: 'ortacha' }
    ],
    causes: ["Noto'g'ri ovqatlanish (qovurilgan, o'ta yog'li taomlar)", "Spirtli ichimliklar", "O't-tosh kasalligi asorati", "Ortiqcha tana vazni"],
    statistics: {
      percentage: 10.5,
      label: "Dunyo bo'yicha 537 milliondan ortiq inson (kattalarning ~10.5%) qandli diabetdan aziyat chekmoqda.",
      source: "Xalqaro Diabet Federatsiyasi (IDF) / JSST",
      year: 2023
    },
    prevention: "Shirinlik va tozalangan shakarni me'yordan oshirmang, meva-sabzavotlar va kletchatkaga boy taomlar iste'mol qiling.",
    funFact: "Oshqozon osti bezi bir kunda taxminan 1 litrdan ortiq o'ta kuchli hazm sharbati ishlab chiqaradi.",
    glossary: [
      { term: "Insulin", definition: "Glyukozani hujayralarga yetkazib berib, qondagi shakarni tushiruvchi gormon." },
      { term: "Langergans orolchalari", definition: "Insulin va glyukagon ajratuvchi maxsus hujayralar to'plami." }
    ]
  },
  {
    id: 'spleen',
    nameUz: 'Taloq',
    nameLatin: 'Lien / Splen',
    category: 'organ',
    system: 'lymphatic',
    systemNameUz: 'Limfa va immun tizimi',
    systemColor: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
    views: ['front'],
    location: "Qorin bo'shlig'ining yuqori chap tomonida, oshqozonning yonida, 9-11 qovurg'alar sohasida joylashgan.",
    function: "Qonni qari va shikastlangan eritrotsitlardan tozalovchi 'qabriston', immun tizimining asosiy limfoid filtri va favqulodda vaziyatlar uchun qon zaxirasi ombori.",
    diseases: [
      { name: "Splenomegaliya (Taloq kattalashishi)", description: "Infeksiya yoki qon kasalliklari natijasida taloq o'lchamining ortishi.", severity: 'ortacha' },
      { name: "Taloq infarkti", description: "Taloq arteriyasi tiqilib, uning to'qimasi nobud bo'lishi.", severity: 'jiddiy' },
      { name: "Taloq yorilishi", description: "Qoringa tushgan jarohatlar oqibatida ichki kuchli qon ketishi.", severity: 'jiddiy' }
    ],
    causes: ["Qorin jarohatlari va zarbalar", "Yuqumli mononuklyoz, bezgak kabi infeksiyalar", "Jigar sirrozi va portal gipertenziya", "Leykoz va anemiya kasalliklari"],
    statistics: {
      percentage: 3,
      label: "Aholining taxminan 2-3 foizida turli infeksiyalar yoki jigar xastaliklari sababli taloq kattalashishi aniqlanadi.",
      source: "Clinical Hematology Journal",
      year: 2022
    },
    prevention: "Qorin sohasini zarba va jarohatlardan asrang, yuqumli kasalliklarni o'z vaqtida to'liq davolang.",
    funFact: "Taloq organizmda qonning taxminan 1 stakanini (200-250 ml) zaxirada ushlab turadi; yugurganingizda biqiningiz sanchishi — taloqning qo'shimcha qonni tomirlarga haydashi belgisidir!",
    glossary: [
      { term: "Eritrotsitlar qabristoni", definition: "Eski 120 kunlik qizil qon hujayralari aynan taloqda zararsizlantiriladi." }
    ]
  },
  {
    id: 'small_intestine',
    nameUz: 'Ingichka ichak',
    nameLatin: 'Intestinum tenue',
    category: 'organ',
    system: 'digestive',
    systemNameUz: 'Hazm qilish tizimi',
    systemColor: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
    views: ['front'],
    location: "Qorin bo'shlig'ining markaziy va pastki qismini egallab, yo'g'on ichak bilan o'ralgan.",
    function: "Uzunligi 5-7 metr bo'lgan o'ta murakkab laboratoriya. Ovqatdagi oqsillar, yog'lar, uglevodlar, vitaminlar va suvning 90 foizdan ortig'i aynan shu yerda so'rilib qonga o'tadi.",
    diseases: [
      { name: "Enterit", description: "Ingichka ichak shilliq qavatining o'tkir yoki surunkali yallig'lanishi.", severity: 'eng_kop' },
      { name: "Tseliakiya (Kleykovina ko'tara olmaslik)", description: "Glyuten oqsiliga nisbatan autoimmun reaksiya va ichak vorsinkalarining yemirilishi.", severity: 'ortacha' },
      { name: "Ichak tutilishi", description: "Ichak bo'shlig'i orqali ozuqa massasi harakatining to'xtab qolishi.", severity: 'jiddiy' }
    ],
    causes: ["Sifatsiz oziq-ovqat va bakterial zaharlanish", "Antibiotiklarni haddan tashqari ko'p ichish", "Allergik va genetik omillar", "Ichak disbakteriozi"],
    statistics: {
      percentage: 1,
      label: "Dunyo bo'ylab aholining 1 foizi genetik jihatdan tseliakiya (glyutenga chidamsizlik) kasalligiga moyil bo'ladi.",
      source: "World Gastroenterology Organisation",
      year: 2023
    },
    prevention: "Sanitariya qoidalariga rioya qiling, meva-sabzavotlarni yaxshilab yuving va fermentlangan qatiq-sut mahsulotlari bilan mikroflorani boyiting.",
    funFact: "Ingichka ichakning ichki yuzasi millionlab mikroskopik vorsinkalar bilan qoplangan bo'lib, uning umumiy so'rish maydoni 250 kvadrat metrga yetadi!",
    glossary: [
      { term: "Vorsinkalar", definition: "Oziq moddalarni qon va limfaga so'rib oluvchi mayda barmoqsimon o'simtalar." },
      { term: "Duodenum", definition: "Ingichka ichakning dastlabki 12 barmoqli qismi." }
    ]
  },
  {
    id: 'large_intestine',
    nameUz: "Yo'g'on ichak",
    nameLatin: 'Intestinum crassum / Colon',
    category: 'organ',
    system: 'digestive',
    systemNameUz: 'Hazm qilish tizimi',
    systemColor: 'text-amber-700 bg-amber-700/10 border-amber-700/30',
    views: ['front'],
    location: "Qorin bo'shlig'i atrofida gardish shaklida ingichka ichakni o'rab, chanoq bo'shlig'iga tushadi.",
    function: "Suv va elektrolitlarning qayta so'rilishini ta'minlaydi, najas massasini shakllantiradi va trillionlab foydali bakteriyalar orqali K va B guruhi vitaminlarini sintez qiladi.",
    diseases: [
      { name: "Ta'sirlangan ichak sindromi (TIS / IBS)", description: "Qorin og'rig'i, dam bo'lish va ich ketishi yoki qotishi bilan kechuvchi funksional buzilish.", severity: 'eng_kop' },
      { name: "Yarali kolit", description: "Yo'g'on ichak shilliq qavatining surunkali immun yallig'lanishi va qonashi.", severity: 'jiddiy' },
      { name: "Kolorektal saraton", description: "Yo'g'on ichak poliplaridan kelib chiquvchi xavfli o'sma.", severity: 'jiddiy' }
    ],
    causes: ["Kletchatkasi kam, qayta ishlangan go'sht mahsulotlari", "Kamharakatlik va suv kam ichish", "Surunkali ich qotishi", "Irsiy polipoz"],
    statistics: {
      percentage: 11,
      label: "Dunyo aholisining taxminan 9-11 foizida ta'sirlangan ichak sindromi (IBS) belgilari qayd etiladi.",
      source: "Rome Foundation / Lancet Gastroenterology",
      year: 2023
    },
    prevention: "Har kuni kepakli non, sabzavot va dukkaklilar iste'mol qiling, kuniga kamida 1.5-2 litr toza suv iching.",
    funFact: "Yo'g'on ichakda yashovchi bakteriyalarning umumiy og'irligi 1.5-2 kilogrammga yetadi va ularning genlari soni inson genlaridan 100 baravar ko'pdir!",
    glossary: [
      { term: "Mikrobioma", definition: "Ichakda yashovchi trillionlab foydali mikroorganizmlar jamoasi." }
    ]
  },
  {
    id: 'appendix',
    nameUz: "Ko'r ichak / Appendiks",
    nameLatin: 'Appendix vermiformis',
    category: 'organ',
    system: 'digestive',
    systemNameUz: 'Hazm va Immun tizimi',
    systemColor: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
    views: ['front'],
    location: "Qorin bo'shlig'ining pastki o'ng qismida, ko'r ichak tubidan chiqib turuvchi chuvalchangsimon o'simta.",
    function: "Uzoq vaqt keraksiz rudiment hisoblangan, biroq bugungi kunda immun hujayralar to'plangan 'ichak bodomchasi' va ichak foydali bakteriyalari uchun xavfsiz boshpana ekani isbotlangan.",
    diseases: [
      { name: "O'tkir appenditsit", description: "Appendiks bo'shlig'i to'silib, yallig'lanishi va tezkor jarrohlikni talab qilishi.", severity: 'jiddiy' }
    ],
    causes: ["Appendiks teshigining tosh yoki meva danaklari bilan tiqilib qolishi", "Limfoid to'qimaning shishib teshikni yopishi", "Bakterial infeksiya"],
    statistics: {
      percentage: 7,
      label: "Insonlarning hayoti davomida taxminan 7-8 foizida o'tkir appenditsit rivojlanishi xavfi mavjud.",
      source: "World Journal of Emergency Surgery",
      year: 2023
    },
    prevention: "Ichak mikroflorasini asrang, qabziyatga yo'l qo'ymang va o'ng biqindagi o'tkir og'riqda zudlik bilan tez yordam chaqiring.",
    funFact: "Qattiq ich ketishi yoki infeksiyadan so'ng ichak mikroflorasi nobud bo'lganda, appendiks ichida saqlangan foydali bakteriyalar ichakni qayta egallaydi.",
    glossary: [
      { term: "Appenditsit", definition: "Chuvalchangsimon o'simtaning o'tkir xirurgik yallig'lanishi." }
    ]
  },

  // ==================== SIYDIK-AJRATISH TIZIMI ====================
  {
    id: 'kidneys',
    nameUz: 'Buyraklar',
    nameLatin: 'Renes',
    category: 'organ',
    system: 'urinary',
    systemNameUz: 'Siydik-ajratish tizimi',
    systemColor: 'text-yellow-600 bg-yellow-600/10 border-yellow-600/30',
    views: ['back', 'front'],
    location: "Bel sohasida, qorin pardaning orqasida, 12-ko'krak va 1-3 bel umurtqalari sathida ikki tomonda joylashgan loviyasimon juft a'zo.",
    function: "Qonni kecha-kunduz tinimsiz filtrlovchi tabiiy tozalash filtrlari. Ular bir kunda taxminan 180 litr birlamchi siydik filtrlash orqali ortiqcha tuz, zaharli moddalar va metabolitlarni siydik bilan chiqaradi.",
    diseases: [
      { name: "Surunkali buyrak kasalligi (SBK)", description: "Buyrak nefronlarining asta-sekin yemirilishi va filtrlashning pasayishi.", severity: 'jiddiy' },
      { name: "Buyrak tosh kasalligi (Urolitiaz)", description: "Mineral tuzlarning buyrak jomida tosh shaklida cho'kishi va qattiq sanchiqli og'riq.", severity: 'eng_kop' },
      { name: "Piyelonefrit", description: "Buyrak kosacha-jom tizimining bakterial yallig'lanishi.", severity: 'ortacha' },
      { name: "Glomerulonefrit", description: "Buyrak koptokchalarining immunitet buzilishi tufayli yallig'lanishi.", severity: 'jiddiy' }
    ],
    causes: ["Kam suv ichish va sho'r ovqatlar", "Nazoratsiz qandli diabet va gipertoniya", "Tez-tez sovuq qotish va shamollash", "Og'riq qoldiruvchi dorilarni ko'p ichish"],
    statistics: {
      percentage: 10,
      label: "Yer yuzi aholisining qariyb 10 foizi (850 million kishi) surunkali buyrak xastaliklaridan aziyat chekadi.",
      source: "Xalqaro Nefrologlar Jamiyati (ISN) / JSST",
      year: 2023,
      details: "Bemorlarning 90 foizi kasallik boshlang'ich davrida hech qanday alomat sezmaydi."
    },
    prevention: "Har kuni yetarlicha toza suv iching (kuniga 1.5-2 litr), sho'r taomlarni kamaytiring va qon bosimi hamda qondagi shakarni nazorat qilib turing.",
    funFact: "Har bir buyrakda taxminan 1 milliontadan mikroskopik filtrlovchi nefronlar mavjud bo'lib, ular tanadagi butun qonni har 4-5 daqiqada bir marta to'liq filtrlaydi!",
    glossary: [
      { term: "Nefron", definition: "Buyrakning qonni filtrlashga mas'ul bo'lgan asosiy funksional birligi." },
      { term: "Kreatinin", definition: "Buyraklar filtrlash qobiliyatini ko'rsatuvchi muhim qon tahlili ko'rsatkichi." }
    ]
  },
  {
    id: 'bladder',
    nameUz: 'Qovuq (Siydik pufagi)',
    nameLatin: 'Vesica urinaria',
    category: 'organ',
    system: 'urinary',
    systemNameUz: 'Siydik-ajratish tizimi',
    systemColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    views: ['front'],
    location: "Kichik chanoq bo'shlig'ining old qismida, qov suyagi birikmasi orqasida joylashgan mushakli a'zo.",
    function: "Buyraklardan siydik yo'llari orqali keladigan siydikni vaqtincha to'plab turadi va kerakli paytda siydik chiqaruv nayi orqali tashqariga chiqaradi (sig'imi 300-500 ml).",
    diseases: [
      { name: "Tsistit", description: "Qovuq shilliq qavatining o'tkir bakterial yallig'lanishi va og'riqli tez-tez siydik qistashi.", severity: 'eng_kop' },
      { name: "Qovuq toshlari", description: "Qovuqda siydik dimlanishi sababli toshlar hosil bo'lishi.", severity: 'ortacha' },
      { name: "Siydik tutolmaslik", description: "Chanoq tubi mushaklari zaiflashishi tufayli siydikning beixtiyor chiqib ketishi.", severity: 'ortacha' }
    ],
    causes: ["Ichak tayoqchasi (E. coli) bakteriyasi tushishi", "Sovuq joyda o'tirish va shamollash", "Shaxsiy gigiyenaga e'tiborsizlik", "Siydikni uzoq vaqt ushlab turish odati"],
    statistics: {
      percentage: 50,
      label: "Ayollarning kamida 50-60 foizi hayotida bir marta bo'lsa ham tsistit xastaligiga chalinadi.",
      source: "Urology Clinics / WHO Data",
      year: 2023
    },
    prevention: "Siydik qistaganda darhol hojatga boring, sovuq tosh va sement ustida o'tirmang, ko'p miqdorda suyuqlik iching.",
    funFact: "Qovuq devorlari shu qadar elastikki, u bo'sh vaqtida yong'oqdek bo'lib, to'lganda esa o'z hajmidan bir necha baravar kengaya oladi.",
    glossary: [
      { term: "Detruzor", definition: "Qovuqni siqib siydik chiqaruvchi uch qavatli kuchli mushak qobig'i." }
    ]
  },

  // ==================== ASAB TIZIMI ====================
  {
    id: 'brain',
    nameUz: 'Bosh miya',
    nameLatin: 'Cerebrum / Encephalon',
    category: 'organ',
    system: 'nervous',
    systemNameUz: 'Markaziy asab tizimi',
    systemColor: 'text-violet-500 bg-violet-500/10 border-violet-500/30',
    views: ['front', 'back'],
    location: "Kalla suyagi qutisining ichida joylashib, mustahkam suyak va uch qavatli miya pardalari bilan himoyalangan.",
    function: "Butun organizmning oliy boshqaruv markazi. Fikrlash, xotira, his-tuyg'ular, harakatlar, nutq va barcha a'zolar faoliyatini muvofiqlashtiradi. 86 milliarddan ortiq neyronlardan tashkil topgan.",
    diseases: [
      { name: "Insult (Miyada qon aylanishining o'tkir buzilishi)", description: "Miya qon tomirining tiqilib qolishi (ishemik) yoki yorilishi (gemorragik).", severity: 'jiddiy' },
      { name: "Altsgeymer kasalligi", description: "Miya hujayralarining nobud bo'lishi va xotiraning yo'qolishi bilan kechuvchi demensiya.", severity: 'jiddiy' },
      { name: "Migren", description: "Boshning bir tomonida qattiq pulsatsiyalanuvchi og'riq xurujlari.", severity: 'eng_kop' },
      { name: "Epilepsiya (Tutqanoq)", description: "Miya neyronlarida to'satdan yuzaga keladigan kuchli elektr razryadlari.", severity: 'ortacha' }
    ],
    causes: ["Yuqori arterial qon bosimi", "Ateroskleroz va qon tomir tromblari", "Surunkali uyqusizlik va miya zo'riqishi", "Bosh miya jarohatlari", "Zararli odatlar (chekish, ichish)"],
    statistics: {
      percentage: 12,
      label: "Insult dunyo bo'yicha o'lim sabablari orasida 2-o'rinda, nogironlik keltirib chiqarish bo'yicha esa 1-o'rinda turadi.",
      source: "JSST / WHO Global Stroke Factsheet",
      year: 2023,
      details: "Har 4 nafar kattalardan biri hayoti davomida insult xavfiga duch kelishi mumkin."
    },
    prevention: "Har kuni 7-8 soat sifatli uxlang, yangi bilimlar o'rganib miyani mashq qildiring, qon bosimingizni me'yorda saqlang.",
    funFact: "Inson miyasi tana umumiy vaznining atigi 2 foizini tashkil qilsa-da, organizmdagi kislorod va energiyaning 20 foizdan ortig'ini bir o'zi iste'mol qiladi!",
    glossary: [
      { term: "Neyron", definition: "Elektr impulslarini qabul qiluvchi va uzatuvchi asosiy asab hujayrasi." },
      { term: "Sinaps", definition: "Ikki neyron o'rtasida axborot almashinadigan aloqa tuguni." }
    ]
  },
  {
    id: 'cerebellum',
    nameUz: 'Miyacha',
    nameLatin: 'Cerebellum',
    category: 'organ',
    system: 'nervous',
    systemNameUz: 'Markaziy asab tizimi',
    systemColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30',
    views: ['back'],
    location: "Kalla qutisining orqa pastki qismida, ensa suyagi chuqurchasida bosh miyaning ostida joylashgan.",
    function: "Harakatlar muvozanati, gavda holatini saqlash, mushaklar tonusini boshqarish va nozik harakatlarni (masalan, yozish, musiqa asbobi chalish) aniq muvofiqlashtirish.",
    diseases: [
      { name: "Ataksiya", description: "Harakatlar koordinatsiyasining buzilishi va gandiraklab yurish.", severity: 'jiddiy' },
      { name: "Miyacha insulti", description: "Miyachani qon bilan ta'minlovchi tomirlar zararlanishi va to'satdan kuchli bosh aylanishi.", severity: 'jiddiy' }
    ],
    causes: ["Bosh miya jarohatlari", "Alkogol intoksikatsiyasi", "Genetik degenerativ kasalliklar", "Miya qon tomir buzilishlari"],
    statistics: {
      percentage: 0.5,
      label: "Miyacha zararlanishi bilan bog'liq harakat koordinatsiyasi buzilishlari aholining 0.5 foizida uchraydi.",
      source: "Neurology International",
      year: 2022
    },
    prevention: "Boshni xavfsizlik shlemlari bilan himoyalang, alkogoldan yiroq bo'ling, muvozanatni yaxshilovchi mashqlar (yoga, suzish) qiling.",
    funFact: "Miyacha butun bosh miya hajmining atigi 10 foizini egallasa-da, miyadagi barcha neyronlarning 50 foizdan ortig'i aynan unda jamlangan!",
    glossary: [
      { term: "Purkine hujayralari", definition: "Miyachadagi eng murakkab shoxlangan bahaybat neyronlar." }
    ]
  },
  {
    id: 'spinal_cord',
    nameUz: 'Orqa miya',
    nameLatin: 'Medulla spinalis',
    category: 'organ',
    system: 'nervous',
    systemNameUz: 'Markaziy asab tizimi',
    systemColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    views: ['back'],
    location: "Umurtqa pog'onasi kanalining ichida, ensa teshigidan boshlanib 1-2 bel umurtqasiga qadar cho'zilgan 43-45 sm uzunlikdagi ip.",
    function: "Bosh miya bilan butun tana a'zolari o'rtasida axborot o'tkazuvchi asosiy magistral. Shartsiz reflekslar (qo'lni issiqdan tortib olish va h.k.) aynan orqa miyada hosil bo'ladi.",
    diseases: [
      { name: "Orqa miya jarohati", description: "Umurtqa sinishi sababli orqa miyaning ezilishi yoki uzilishi (falajlikka olib keladi).", severity: 'jiddiy' },
      { name: "Radikulit", description: "Orqa miyadan chiquvchi asab ildizchalarining qisilishi va o'tkir og'riq.", severity: 'eng_kop' },
      { name: "Tarqoq skleroz", description: "Asab tolalarining himoya miyelin qobig'ini immunitet yemirish kasalligi.", severity: 'jiddiy' }
    ],
    causes: ["Avtohalokatlar va balandlikdan yiqilish", "Umurtqa churralari (grija)", "Osteoxondroz", "Virusli infeksiyalar"],
    statistics: {
      percentage: 15,
      label: "Kattalarning 15-20 foizi umurtqa asab ildizchalari qisilishi (radikulit, lyumbago) og'riqlaridan aziyat chekadi.",
      source: "Global Spine Journal",
      year: 2023
    },
    prevention: "Og'ir yukni to'g'ri ko'taring (tizzani bukib), qaddingizni doim tik tuting va umurtqani mustahkamlovchi suzish bilan shug'ullaning.",
    funFact: "Orqa miya signallarni sekundiga 100 metr (soatiga 360 km) tezlikda bosh miyaga va orqaga yetkazib beradi!",
    glossary: [
      { term: "Miyelin", definition: "Asab signallarining tez o'tishini ta'minlovchi elektr izolyatsiyalovchi yog'li qobiq." }
    ]
  },

  // ==================== ENDOKRIN TIZIMI ====================
  {
    id: 'thyroid',
    nameUz: 'Qalqonsimon bez',
    nameLatin: 'Glandula thyroidea',
    category: 'endocrine',
    system: 'endocrine',
    systemNameUz: 'Endokrin tizimi',
    systemColor: 'text-pink-500 bg-pink-500/10 border-pink-500/30',
    views: ['front'],
    location: "Bo'yinning oldingi pastki qismida, hiqildoq va traxeyaning oldida kapalak shaklida joylashgan.",
    function: "Yod saqlovchi tiroksin (T4) va triyodtironin (T3) gormonlarini ishlab chiqarib, tanadagi barcha moddalar almashinuvi tezligini, tana haroratini va energiya sarfini boshqaradi.",
    diseases: [
      { name: "Gipotireoz", description: "Gormonlar kam ishlab chiqarilishi, holsizlik, vazn ortishi va shishlar.", severity: 'eng_kop' },
      { name: "Gipertireoz (Tireotoksikoz)", description: "Gormonlar me'yordan ortiq ishlab chiqarilishi, ozib ketish va yurak tez urishi.", severity: 'ortacha' },
      { name: "Endemik buqoq", description: "Organizmda yod yetishmasligi oqibatida bezning kattalashib ketishi.", severity: 'eng_kop' },
      { name: "Tireoidit", description: "Qalqonsimon bezning autoimmun yallig'lanishi.", severity: 'ortacha' }
    ],
    causes: ["Ovqat va suvda yod yetishmasligi", "Irsiy moyillik va autoimmun buzilishlar", "Surunkali stress va ekologik nurlanish"],
    statistics: {
      percentage: 7,
      label: "Dunyo aholisining 7-10 foizida (300 milliondan ortiq kishi) qalqonsimon bez faoliyati buzilishi kuzatiladi.",
      source: "Amerika Tireoid Assotsiatsiyasi / JSST",
      year: 2023
    },
    prevention: "Har doim faqat yodlangan osh tuzidan foydalaning, dengiz baliqlari va yong'oq iste'mol qiling.",
    funFact: "Qalqonsimon bez kapalak shakliga ega bo'lib, uning vazni atigi 15-20 gramm bo'lsa ham, u butun vujudingizdagi har bir hujayraning quvvat sarfini nazorat qiladi.",
    glossary: [
      { term: "Tiroksin", definition: "Qalqonsimon bezning asosiy yodli metabolik gormoni." }
    ]
  },
  {
    id: 'adrenal_glands',
    nameUz: 'Buyrak usti bezlari',
    nameLatin: 'Glandulae suprarenales',
    category: 'endocrine',
    system: 'endocrine',
    systemNameUz: 'Endokrin tizimi',
    systemColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    views: ['back', 'front'],
    location: "Har ikkala buyrakning yuqori qutblarida qalpoqcha shaklida joylashgan juft kichik bezlar.",
    function: "Adrenalin, noradrenalin, kortizol ('stress gormoni') va aldosteron kabi hayotiy muhim gormonlarni ishlab chiqaradi. Tana favqulodda xavf-xatar yoki stressga uchraganda 'Qoch yoki kurash' reaksiyasini ishga tushiradi.",
    diseases: [
      { name: "Buyrak usti bezi yetishmovchiligi (Addison kasalligi)", description: "Kortizol yetishmovchiligi tufayli qon bosimi tushishi va qorayish.", severity: 'jiddiy' },
      { name: "Itsenko-Kushing sindromi", description: "Kortizolning haddan tashqari ko'p ajralishi natijasida semirish va bosim ortishi.", severity: 'jiddiy' }
    ],
    causes: ["Surunkali ruhiy stress", "Autoimmun jarayonlar", "Gormonal dorilarni to'satdan to'xtatish"],
    statistics: {
      percentage: 2,
      label: "Doimiy surunkali stress tufayli rivojlangan mamlakatlarda aholining 2-3 foizida buyrak usti bezlari funksional charchashi kuzatiladi.",
      source: "Endocrine Society",
      year: 2022
    },
    prevention: "Surunkali stressni boshqarishni o'rganing, to'liq dam oling va kortikosteroid dorilarni o'zboshimchalik bilan ichmang.",
    funFact: "Xavf paytida ajralgan adrenalin qon tomirlarni kengaytirib, yurak urishini tezlashtiradi va mushaklarga oqib boruvchi qonni bir zumda 300 foizga oshiradi!",
    glossary: [
      { term: "Kortizol", definition: "Moddalar almashinuvini boshqaruvchi va yallig'lanishni to'xtatuvchi asosiy steroid gormon." }
    ]
  },

  // ==================== SEZGI A'ZOLARI ====================
  {
    id: 'eye',
    nameUz: "Ko'z",
    nameLatin: 'Oculus',
    category: 'organ',
    system: 'nervous',
    systemNameUz: "Ko'rish va sezgi a'zolari",
    systemColor: 'text-blue-500 bg-blue-500/10 border-blue-500/30',
    views: ['front'],
    location: "Kalla suyagining ko'z kosalarida (orbita) joylashgan sharsimon juft a'zo.",
    function: "Tashqi dunyodan yorug'lik nurlarini qabul qilib, ularni elektr impulslariga aylantiradi va ko'rish asabi orqali bosh miyaga uzatadi. Inson barcha ma'lumotlarning 80 foizidan ortig'ini ko'z orqali oladi.",
    diseases: [
      { name: "Miopiya (Yaqindan ko'rish)", description: "Uzoqdagi narsalarni xira ko'rish nuqsoni.", severity: 'eng_kop' },
      { name: "Katarakta", description: "Ko'z gavharining xiralashishi va ko'rishning yo'qolishi.", severity: 'jiddiy' },
      { name: "Glaukoma", description: "Ko'z ichki bosimining ortishi va ko'rish asabining zararlanishi.", severity: 'jiddiy' }
    ],
    causes: ["Smartfon va kompyuterga tinimsiz qarash", "Kam yorug'likda o'qish", "Yurak-qon tomir va diabet asorati", "Genetika"],
    statistics: {
      percentage: 30,
      label: "Dunyo bo'yicha 2.2 milliarddan ortiq odam (aholining ~28-30%) ko'rish qobiliyati buzilishidan aziyat chekmoqda.",
      source: "JSST / WHO World Report on Vision",
      year: 2023
    },
    prevention: "Har 20 daqiqa ekranga qaragandan so'ng 20 soniya davomida 6 metr nariga qarang (20-20-20 qoidasi).",
    funFact: "Ko'z qorachig'ini harakatlantiruvchi mushaklar inson tanasidagi eng tez harakatlanuvchi mushaklardir — ular soniyaning yuzdan bir qismida yo'nalishni o'zgartiradi.",
    glossary: [
      { term: "Retina (To'r parda)", definition: "Yorug'likni sezuvchi tayoqcha va kolbachalardan iborat nozik ichki qavat." }
    ]
  },
  {
    id: 'ear',
    nameUz: 'Quloq',
    nameLatin: 'Auris',
    category: 'organ',
    system: 'nervous',
    systemNameUz: "Eshituv va muvozanat a'zolari",
    systemColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    views: ['front', 'back'],
    location: "Kalla suyagining chakka sohasida joylashgan bo'lib, tashqi, o'rta va ichki quloq qismlaridan iborat.",
    function: "Tovush to'lqinlarini ushlab, mexanik tebranishlarni elektr signallariga aylantiradi hamda ichki quloqdagi yarim doira kanallar orqali gavdaning fazodagi muvozanatini saqlaydi.",
    diseases: [
      { name: "Otit", description: "Tashqi yoki o'rta quloqning o'tkir bakterial yallig'lanishi va qattiq og'riq.", severity: 'eng_kop' },
      { name: "Sensorinevral quloq og'irligi", description: "Eshituv asabi va ichki quloq hujayralarining zararlanishi.", severity: 'jiddiy' },
      { name: "Tinnitus (Quloqda shovqin)", description: "Tashqi tovushsiz quloq ichida doimiy jaranglash yoki shovqin eshitilishi.", severity: 'eng_kop' }
    ],
    causes: ["Quloqchinlar (naushnik) orqali baland musiqani ko'p tinglash", "Shamollash va tomoq infeksiyalari", "Quloqqa suv kirishi va toshmalar"],
    statistics: {
      percentage: 20,
      label: "Dunyo bo'yicha 1.5 milliarddan ortiq odam (aholining ~20%) turli darajadagi eshitish zaifligiga ega.",
      source: "JSST / WHO World Report on Hearing",
      year: 2023
    },
    prevention: "Naushnik ovozini 60% dan oshirmang va kuniga 60 daqiqadan ortiq tinglamang; quloqni paxtali tayoqcha bilan chuqur tozalamang.",
    funFact: "Siz uxlayotganingizda ham qulog'ingiz tovushlarni qabul qilishda davom etadi, ammo miya ularni filtrlab, dam olishingizga imkon beradi.",
    glossary: [
      { term: "Chig'anoq (Cochlea)", definition: "Tovush to'lqinlarini asab impulsiga aylantiruvchi ichki quloq qismi." }
    ]
  },
  {
    id: 'skin',
    nameUz: 'Teri',
    nameLatin: 'Cutis / Derma',
    category: 'organ',
    system: 'integumentary',
    systemNameUz: "Teri va qoplovchi a'zolar",
    systemColor: 'text-amber-600 bg-amber-600/10 border-amber-600/30',
    views: ['front', 'back'],
    location: "Inson butun gavdasini tashqi tomondan to'liq qoplab turuvchi maydoni 1.5-2 kvadrat metr bo'lgan a'zo.",
    function: "Tanamizning eng yirik a'zosi bo'lib, mikrob va jarohatlardan himoya qiladi, tana haroratini (terlash orqali) boshqaradi va quyosh nuri ostida D vitaminini sintez qiladi.",
    diseases: [
      { name: "Ekzema va dermatit", description: "Terining qichishishi, qizarishi va po'st tashlashi bilan kechuvchi yallig'lanish.", severity: 'eng_kop' },
      { name: "Psoriaz (Qora temiratki)", description: "Teri hujayralarining haddan tashqari tez yangilanishi natijasida tangasimon toshmalar hosil bo'lishi.", severity: 'ortacha' },
      { name: "Akne (Husnbuzar)", description: "Yog' bezlari va soch follikulalarining tiqilib yallig'lanishi.", severity: 'eng_kop' },
      { name: "Melanoma", description: "Teri xollaridan kelib chiquvchi xavfli o'sma.", severity: 'jiddiy' }
    ],
    causes: ["Quyoshning zararli ultrabinafsha nurlari", "Allergiya va noto'g'ri kosmetika", "Surunkali stress va ichak muammolari"],
    statistics: {
      percentage: 20,
      label: "Har qanday vaqtda dunyo aholisining 20-25 foizida kamida bitta teri kasalligi kuzatiladi.",
      source: "Global Burden of Disease Study / WHO",
      year: 2022
    },
    prevention: "Quyoshli kunlarda SPF himoya kremini surting, yetarli suv iching va terini yumshoq namlantirib turing.",
    funFact: "Teri har daqiqada taxminan 30 000 dan 40 000 gacha o'lik hujayralarni to'kadi; inson bir yilda qariyb 4 kilogramm eski terisini yo'qotadi!",
    glossary: [
      { term: "Epidermis", definition: "Terining eng ustki, yangilanib turuvchi himoya qatlami." },
      { term: "Melanin", definition: "Teriga rang beruvchi va ultrabinafsha nurlardan asrovchi pigment." }
    ]
  },

  // ==================== KO'PAYISH A'ZOLARI (ILMIY VA ODOB DOIRASIDA) ====================
  {
    id: 'male_reproductive',
    nameUz: "Erkak jinsiy a'zolari (Moyaklar va Prostata)",
    nameLatin: 'Organa genitalia masculina',
    category: 'organ',
    system: 'reproductive_male',
    systemNameUz: "Erkak ko'payish tizimi",
    systemColor: 'text-sky-600 bg-sky-600/10 border-sky-600/30',
    views: ['front'],
    location: "Kichik chanoq bo'shlig'i va chov sohasida joylashgan.",
    function: "Erkaklik gormoni (testosteron) va spermatozoidlarni ishlab chiqarish orqali nasl qoldirish funksiyasini ta'minlaydi. Prostata bezi urug' suyuqligi tarkibini boyitadi.",
    diseases: [
      { name: "Prostatit", description: "Prostata bezining o'tkir yoki surunkali yallig'lanishi va siyishning qiyinlashishi.", severity: 'eng_kop' },
      { name: "Prostata adenomasi", description: "Yoshi kattalarda prostata bezining xavfsiz kattalashishi.", severity: 'eng_kop' },
      { name: "Varikotsele", description: "Urug' tizimchasi venalarining kengayishi.", severity: 'ortacha' }
    ],
    causes: ["Kamharakat o'troq hayot tarzi", "Sovuq joyda o'tirish", "Chanoq sohasidagi qon dimlanishi", "Genital infeksiyalar"],
    statistics: {
      percentage: 50,
      label: "50 yoshdan oshgan erkaklarning 50 foizida, 80 yoshda esa 80 foizida prostata bezi kattalashishi (adenoma) kuzatiladi.",
      source: "European Association of Urology / WHO",
      year: 2023
    },
    prevention: "Muntazam jismoniy faol bo'ling, sovuq qotmang, 45 yoshdan so'ng har yili PSA tahlili va urolog ko'rigidan o'ting.",
    funFact: "Moyaklar tana haroratidan 2-3 daraja sovuqroq bo'lishi kerak; aynan shuning uchun ular tana bo'shlig'idan tashqarida joylashgan.",
    glossary: [
      { term: "Testosteron", definition: "Erkaklik xususiyatlarini va mushak massasini shakllantiruvchi asosiy gormon." }
    ],
    genderSpecific: 'male'
  },
  {
    id: 'female_reproductive',
    nameUz: "Ayol jinsiy a'zolari (Bachadon va Tuxumdonlar)",
    nameLatin: 'Organa genitalia feminina',
    category: 'organ',
    system: 'reproductive_female',
    systemNameUz: "Ayol ko'payish tizimi",
    systemColor: 'text-rose-500 bg-rose-500/10 border-rose-500/30',
    views: ['front'],
    location: "Kichik chanoq bo'shlig'ining markazida, qovuq va to'g'ri ichak o'rtasida joylashgan.",
    function: "Tuxum hujayralar va ayollik gormonlari (estrogen, progesteron) ishlab chiqarish, homilani 9 oy davomida rivojlantirish va tug'ruq jarayonini amalga oshirish.",
    diseases: [
      { name: "Bachadon miomasi", description: "Bachadon devori mushak qavatining xavfsiz o'smasi.", severity: 'eng_kop' },
      { name: "Endometrioz", description: "Bachadon ichki qavatining boshqa a'zolarga tarqalib qonashi va og'riq berishi.", severity: 'eng_kop' },
      { name: "Tuxumdon kistasi", description: "Tuxumdonda suyuqlik to'plangan pufakchalar paydo bo'lishi.", severity: 'ortacha' }
    ],
    causes: ["Gormonal muvozanatning buzilishi", "Surunkali yallig'lanish kasalliklari", "Stress va abort asoratlari", "Irsiyat"],
    statistics: {
      percentage: 30,
      label: "35 yoshdan oshgan ayollarning taxminan 30-40 foizida bachadon miomasi aniqlanadi.",
      source: "JSST / WHO Reproductive Health",
      year: 2023
    },
    prevention: "Har yili ginekolog ko'rigidan o'ting, kichik chanoq a'zolari ultratovush tekshiruvini qildiring va sovuqdan asraning.",
    funFact: "Bachadon inson tanasidagi eng kuchli cho'ziluvchan a'zo bo'lib, homiladorlik davrida o'zining odatiy hajmidan 500 baravargacha kattalashadi!",
    glossary: [
      { term: "Endometriy", definition: "Homilani qabul qilish uchun har oy qalinlashib yangilanadigan bachadon ichki shilliq qavati." }
    ],
    genderSpecific: 'female'
  },

  // ==================== SUYAK TIZIMI (CLICKABLE BONES ON SVG) ====================
  {
    id: 'skull',
    nameUz: 'Bosh suyagi (Kalla)',
    nameLatin: 'Cranium',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Umurtqa pog'onasining yuqori uchida joylashgan.",
    function: "Bosh miya, ko'z, quloq kabi nozik hayotiy a'zolarni har qanday mexanik shikastlanishdan ishonchli himoya qiladi va yuz qiyofasini hosil qiladi. Jami 29 ta suyakdan iborat.",
    diseases: [
      { name: "Kalla suyagi sinishlari", description: "Kuchli travma natijasida suyak butunligining buzilishi.", severity: 'jiddiy' },
      { name: "Kranial choklar erta bitishi (Kraniosinostoz)", description: "Bolalarda kalla suyaklari choklarining muddatidan oldin qotib qolishi.", severity: 'ortacha' }
    ],
    causes: ["Avtohalokatlar va sport jarohatlari", "Balandlikdan yiqilish", "Tug'ruq asoratlari"],
    statistics: {
      percentage: 5,
      label: "Dunyo bo'yicha jiddiy travmalarning 5-8 foizi bosh suyagi va miya jarohatlari hissasiga to'g'ri keladi.",
      source: "JSST / WHO Trauma Statistics",
      year: 2023
    },
    prevention: "Velosiped yoki mototsiklda doim himoya shlemi taqing, mashinada xavfsizlik kamarini taqing.",
    funFact: "Yangi tug'ilgan chaqaloqning bosh suyagida suyaklar bir-biri bilan tutashmagan bo'lib, ular orasida 6 ta yumshoq 'likildoq' (fontanel) bo'ladi.",
    glossary: [
      { term: "Kranial chok", definition: "Kalla suyaklarini bir-biriga qimirlamaydigan qilib ulovchi tishsimon birikma." }
    ],
    boneDetails: { count: 29, boneGroup: 'bosh', paired: true }
  },
  {
    id: 'spine',
    nameUz: "Umurtqa pog'onasi",
    nameLatin: 'Columna vertebralis',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['back', 'front'],
    location: "Gavdaning orqa markaziy o'qi bo'ylab bosh suyagidan to dumg'azaga qadar cho'zilgan.",
    function: "Tananing bosh o'q tayanchi bo'lib, gavdani tik tutadi, bosh va qo'llarning harakatini ta'minlaydi va orqa miyani himoyalaydi. 33-34 ta umurtqadan iborat.",
    diseases: [
      { name: "Umurtqalararo disk churrasi (Grija)", description: "Disk mag'zining tashqariga bo'rtib chiqib, orqa miya asab tolasini qisishi.", severity: 'eng_kop' },
      { name: "Skolioz", description: "Umurtqa pog'onasining yon tomonga 'S' yoki 'C' shaklida qiyshayishi.", severity: 'eng_kop' },
      { name: "Osteoxondroz", description: "Umurtqalar va tog'ay disklarining yemirilishi.", severity: 'eng_kop' }
    ],
    causes: ["Noto'g'ri gavda holatida soatlab o'tirish", "Jismoniy harakatning yetishmasligi", "Og'ir yuklarni noto'g'ri ko'tarish", "Ortiqcha tana vazni"],
    statistics: {
      percentage: 80,
      label: "Dunyodagi katta yoshli aholining qariyb 80 foizi umrida kamida bir marta bel va umurtqa sohasidagi kuchli og'riqni boshdan kechiradi.",
      source: "Lancet Rheumatology / JSST",
      year: 2023
    },
    prevention: "Har 45 daqiqada o'tirgan joyingizdan turib cho'zilish mashqlarini bajaring, suzish bilan shug'ullaning va qorin-bel korset mushaklarini baquvvat qiling.",
    funFact: "Ertalab uyg'onganingizda bo'yingiz kechqurungiga qaraganda 1-2 sm ga uzunroq bo'ladi, chunki tunda umurtqalararo tog'ay disklar suv shimib kengayadi!",
    glossary: [
      { term: "Umurtqa diski", definition: "Ikkita umurtqa orasidagi elastik zarba yutuvchi tabiiy amortizator." }
    ],
    boneDetails: { count: 26, boneGroup: 'umurtqa', paired: false }
  },
  {
    id: 'ribs',
    nameUz: "Qovurg'alar va To'sh suyagi",
    nameLatin: 'Costae et Sternum',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Ko'krak qafasi bo'shlig'ini o'rab turadi (12 juft qovurg'a va markazda to'sh).",
    function: "Yurak va o'pkani tashqi zarbalardan himoya qiladi hamda nafas olish va chiqarish vaqtida kengayib-torayib ko'krak qafasi hajmini o'zgartiradi.",
    diseases: [
      { name: "Qovurg'a sinishi", description: "Ko'krak qafasiga to'g'ridan-to'g'ri zarba tushishi oqibatida suyakning yorilishi yoki sinishi.", severity: 'ortacha' },
      { name: "Qovurg'alararo nevralgiya", description: "Qovurg'alar orasidan o'tuvchi asab tolasining qisilishi va sanchuvchi o'tkir og'riq.", severity: 'eng_kop' }
    ],
    causes: ["Sportdagi to'qnashuvlar", "Qattiq yo'tal (keksalarda)", "Ko'krak qafasi shikastlanishlari"],
    statistics: {
      percentage: 10,
      label: "Ko'krak qafasi shikastlanishi bilan shifoxonaga tushgan bemorlarning 60 foizida kamida bitta qovurg'a sinishi aniqlanadi.",
      source: "Trauma Surgery Journal",
      year: 2022
    },
    prevention: "Qovurg'alararo mushaklarni nafas gimnastikasi bilan rivojlantiring, kaltsiy va D vitaminini yetarli miqdorda qabul qiling.",
    funFact: "Inson har kuni nafas olganda qovurg'alar taxminan 20 000 marta ko'tarilib-tushadi!",
    glossary: [
      { term: "To'sh suyagi (Sternum)", definition: "Qovurg'alarni birlashtiruvchi oldingi yassi ko'krak suyagi." }
    ],
    boneDetails: { count: 25, boneGroup: 'kokrak', paired: true }
  },
  {
    id: 'clavicle_scapula',
    nameUz: "O'mrov va Kurak suyaklari",
    nameLatin: 'Clavicula et Scapula',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Yelka sohasining oldingi (o'mrov) va orqa (kurak) yuzasida joylashgan.",
    function: "Qo'lning erkin va keng amplituda bilan harakatlanishini ta'minlovchi yelka kamarining tayanch suyaklaridir.",
    diseases: [
      { name: "O'mrov suyagi sinishi", description: "Yelkaga yoki cho'zilgan qo'lga yiqilganda o'mrovning sinishi (eng keng tarqalgan sinishlardan biri).", severity: 'eng_kop' },
      { name: "Yelka-kurak periartriti", description: "Yelka bo'g'imi atrofidagi pay va mushaklar yallig'lanishi.", severity: 'ortacha' }
    ],
    causes: ["Velosipeddan yoki sportda yiqilish", "Yelkaga to'g'ridan-to'g'ri kuchli zarba tushishi"],
    statistics: {
      percentage: 5,
      label: "O'mrov suyagi sinishi butun inson skeletidagi barcha sinishlarning taxminan 5 foizini tashkil etadi.",
      source: "Orthopedic Clinics of North America",
      year: 2023
    },
    prevention: "Sport bilan shug'ullanishda xavfsizlik choralariga rioya qiling, yelka mushaklarini chiniqtiring.",
    funFact: "O'mrov suyagi inson skeletida birinchi bo'lib (homiladorlikning 5-haftasidayoq) shakllana boshlaydigan, ammo eng oxirida (21-25 yoshda) to'liq suyaklanadigan suyakdir.",
    glossary: [
      { term: "Akromion", definition: "Kurak suyagining o'mrov bilan tutashadigan yuqori bo'rtiq o'simtasi." }
    ],
    boneDetails: { count: 4, boneGroup: 'qol', paired: true }
  },
  {
    id: 'arm_bones',
    nameUz: 'Yelka, Tirsak va Bilak suyaklari',
    nameLatin: 'Humerus, Ulna et Radius',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Erkin qo'lning yuqori (yelka) va o'rta (bilak) qismida joylashgan.",
    function: "Qo'lning barcha mehnat va kundalik nozik harakatlarini, yuk ko'tarish, buralish (supinatsiya) va ushlash qobiliyatini bajaradi.",
    diseases: [
      { name: "Kollec sinishi (Bilak suyagi sinishi)", description: "Qo'l kaftiga yiqilganda bilak suyagining pastki uchidan sinishi.", severity: 'eng_kop' },
      { name: "Tirsak bo'g'imi chiqishi", description: "Tirsak bo'g'imi suyaklarining o'z o'rnidan siljishi.", severity: 'ortacha' }
    ],
    causes: ["Muzlamada qo'lga tayangan holda yiqilish", "Sport jarohatlari", "Osteoporoz (suyak mo'rtligi)"],
    statistics: {
      percentage: 16,
      label: "Keksa yoshdagilarda qo'l kaftiga yiqilish natijasida bilak sinishi barcha travmatologik murojaatlarning 16 foizini tashkil qiladi.",
      source: "World Orthopedic Association",
      year: 2022
    },
    prevention: "Qishda muzlama paytida sirpanmaydigan poyabzal kiying, suyak mustahkamligi uchun D vitamini o'rganing.",
    funFact: "Bilakdagi radius (nur) suyagi tirsak suyagi atrofida aylanib, qo'l panjangizni 180 darajaga ag'darish imkonini beradi.",
    glossary: [
      { term: "Epifiz", definition: "Naysimon uzun suyaklarning kengaygan bo'g'im hosil qiluvchi uchi." }
    ],
    boneDetails: { count: 6, boneGroup: 'qol', paired: true }
  },
  {
    id: 'hand_bones',
    nameUz: "Qo'l panjasi suyaklari (Kaft va Barmoqlar)",
    nameLatin: 'Ossa manus',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Qo'lning eng quyi qismida joylashgan (har qo'lda 27 tadan suyak: 8 kaft usti, 5 kaft, 14 barmoq).",
    function: "Insoniyat tamaddunining asosiy mehnat quroli. Yozish, asboblar bilan ishlash, ushlash va teginishni his qilish imkonini beradi.",
    diseases: [
      { name: "Karpal kanal sindromi", description: "Bilak sohasida o'rta asab tolasining siqilishi natijasida barmoqlar uvishishi.", severity: 'eng_kop' },
      { name: "Barmoq artrozi", description: "Barmoq mayda bo'g'imlarining yallig'lanishi va deformatsiyalanishi.", severity: 'eng_kop' }
    ],
    causes: ["Kompyuter sichqonchasi va klaviaturada tanaffussiz soatlab ishlash", "Qo'l bilan og'ir takroriy mehnat qilish"],
    statistics: {
      percentage: 5,
      label: "Ofis xodimlari va dasturchilarning qariyb 5-8 foizida karpal kanal sindromi rivojlanadi.",
      source: "Occupational Health Journal",
      year: 2023
    },
    prevention: "Klaviatura va sichqoncha bilan ishlaganda bilak uchun maxsus yumshoq taglikdan foydalaning va qo'l gimnastikasini qiling.",
    funFact: "Ikkala qo'l panjangizdagi 54 ta suyak butun tanangizdagi jami 206 ta suyakning to'rtdan bir qismini tashkil qiladi!",
    glossary: [
      { term: "Karpus", definition: "Kaft ustidagi 8 ta mayda suyakchalar majmuasi." }
    ],
    boneDetails: { count: 54, boneGroup: 'qol', paired: true }
  },
  {
    id: 'pelvis',
    nameUz: 'Chanoq suyagi',
    nameLatin: 'Pelvis / Os coxae',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Gavdaning pastki qismida, umurtqa bilan oyoqlar orasidagi tutashtiruvchi keng halqa.",
    function: "Tananing butun og'irligini oyoqlarga taqsimlaydi va chanoq ichidagi ichki a'zolar (qovuq, bachadon, to'g'ri ichak) uchun baquvvat suyanchiq hosil qiladi.",
    diseases: [
      { name: "Koksartroz (Chanoq-son bo'g'imi artrozi)", description: "Bo'g'im tog'ayining eskirishi, harakatning cheklanishi va oqsoqlanish.", severity: 'jiddiy' },
      { name: "Chanoq suyaklari sinishi", description: "Juda kuchli avtohalokat yoki balandlikdan qulash sababli yuzaga keladigan og'ir jarohat.", severity: 'jiddiy' }
    ],
    causes: ["Ortiqcha tana vazni", "Yoshga bog'liq tog'ay yemirilishi", "Chanoq-son bo'g'imi displaziyasi (tug'ma nuqson)"],
    statistics: {
      percentage: 12,
      label: "60 yoshdan oshgan insonlarning taxminan 10-12 foizida chanoq-son bo'g'imi koksartrozi alomatlari mavjud.",
      source: "Osteoarthritis and Cartilage Journal",
      year: 2023
    },
    prevention: "Tana vaznini me'yorda saqlang, bo'g'imga kuchli sakrash zarbalaridan saqlaning va suzish bilan shug'ullaning.",
    funFact: "Ayollar chanog'i erkaklarnikiga qaraganda kengroq, sayozroq va dumaloq shaklda bo'ladi — tabiat uni homiladorlik va tug'ruq uchun shunday moslashtirgan.",
    glossary: [
      { term: "Atsetabulum", definition: "Son suyagi boshchasi kirib turadigan chanoqdagi chuqur bo'g'im kosachasi." }
    ],
    boneDetails: { count: 2, boneGroup: 'oyoq', paired: true }
  },
  {
    id: 'femur_bone',
    nameUz: 'Son suyagi',
    nameLatin: 'Os femoris / Femur',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Chanoq bo'g'imidan tizza bo'g'imiga qadar bo'lgan oyoqning yuqori qismida joylashgan.",
    function: "Inson skeletidagi eng uzun, eng og'ir va eng mustahkam suyak. Tik turganda, yurganda va yugurganda tananing butun yuklamasini ko'taradi.",
    diseases: [
      { name: "Son suyagi bo'yinchasi sinishi", description: "Keksa odamlarda osteoporoz sababli arzimas yiqilishdan ham sodir bo'ladigan xatarli sinish.", severity: 'jiddiy' },
      { name: "Son suyagi boshchasi aseptik nekrozi", description: "Qon ta'minoti buzilishi natijasida suyak boshchasining yemirilishi.", severity: 'jiddiy' }
    ],
    causes: ["Keksalikdagi osteoporoz (suyak yumshashi)", "Avtohalokatlar", "Gormonlar va alkogol ta'siri"],
    statistics: {
      percentage: 18,
      label: "Dunyo bo'yicha har yili 1.6 milliondan ortiq inson son suyagi sinishi bilan ro'yxatga olinadi.",
      source: "JSST / WHO Osteoporosis Factsheet",
      year: 2023
    },
    prevention: "Tuxum, sut va kalsiyga boy mahsulotlarni yeb turing, ochiq havoda D vitamini oling va uydagi sirpanuvchi gilamlarni mahkamlang.",
    funFact: "Son suyagi shunchalik baquvvatki, u beton blokdan ham pishiqroq bo'lib, o'z o'qi bo'yicha 1.5 tonnagacha bo'lgan vertikal bosimga bardosh bera oladi!",
    glossary: [
      { term: "Kollum femoris", definition: "Son suyagining bo'yincha qismi bo'lib, eng ko'p sinadigan nozik nuqtasidir." }
    ],
    boneDetails: { count: 2, boneGroup: 'oyoq', paired: true }
  },
  {
    id: 'patella_tibia_fibula',
    nameUz: "Tizza qopqog'i va Boldir suyaklari",
    nameLatin: 'Patella, Tibia et Fibula',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Tizzadan to tovon bo'g'imiga qadar bo'lgan sohada joylashgan.",
    function: "Katta boldir (tibia) yuk ko'taruvchi asosiy suyak, kichik boldir (fibula) to'piq barqarorligi va mushaklar birikishi uchun xizmat qiladi, tizza qopqog'i (patella) esa tizza bo'g'imini himoyalaydi.",
    diseases: [
      { name: "Gonartroz (Tizza bo'g'imi artrozi)", description: "Tizza tog'ayining yeyilishi va qisirlashi, og'riqli bukilishi.", severity: 'eng_kop' },
      { name: "Boldir suyagi sinishi", description: "To'g'ridan-to'g'ri kuchli zarba (masalan, futbolda) oqibatida boldir suyaklarining sinishi.", severity: 'ortacha' },
      { name: "Menisk yorilishi", description: "Tizzaning keskin buralishi natijasida zarba yutuvchi tog'ayning yirtilishi.", severity: 'eng_kop' }
    ],
    causes: ["Sportdagi jarohatlar va yiqilishlar", "Ortiqcha vazn tufayli tizzaga tushadigan ortiqcha yuk", "Yoshga bog'liq yemirilish"],
    statistics: {
      percentage: 14,
      label: "45 yoshdan oshgan odamlarning 14 foizida tizza bo'g'imi gonartrozi kuzatiladi.",
      source: "Osteoarthritis Research Society",
      year: 2023
    },
    prevention: "Tizza bo'g'imiga tushadigan og'irlikni kamaytirish uchun vazningizni nazorat qiling va tizzani mustahkamlovchi yengil mashqlar bajaring.",
    funFact: "Chaqaloqlar tug'ilganida tizza qopqog'i suyagi bo'lmaydi — uning o'rnida yumshoq tog'ay bo'lib, bola 2-6 yoshga to'lgandagina u haqiqiy suyakka aylanadi!",
    glossary: [
      { term: "Sesamosimon suyak", definition: "Mushak payi qalinligi ichida erkin joylashgan dumaloq suyak." }
    ],
    boneDetails: { count: 6, boneGroup: 'oyoq', paired: true }
  },
  {
    id: 'foot_bones',
    nameUz: 'Oyoq panjasi suyaklari (Tovon va Barmoqlar)',
    nameLatin: 'Ossa pedis',
    category: 'bone',
    system: 'skeletal',
    systemNameUz: 'Suyak tizimi (Skelet)',
    systemColor: 'text-stone-600 bg-stone-500/10 border-stone-500/30',
    views: ['front', 'back'],
    location: "Oyoqning yerga tegib turuvchi quyi qismi (har oyoqda 26 tadan suyak: 7 tovon usti, 5 oyoq kafti, 14 barmoq).",
    function: "Inson yurganida, sakraganida va yugurganida butun gavdaning zarbasini o'ziga yutuvchi tabiiy gumbazli prujina (amortizator).",
    diseases: [
      { name: "Yassi oyoqlik (Ploskostopiya)", description: "Oyoq panjasi gumbazining pasayib ketishi va tez charchash.", severity: 'eng_kop' },
      { name: "Tovon shporasi (Plantar fassiit)", description: "Tovon suyagi ostida suyak o'simtasi hosil bo'lishi va bosganda igna sanchigandek og'riq.", severity: 'eng_kop' },
      { name: "Valgus deformatsiyasi (Oyoq bosh barmog'i qiyshayishi)", description: "Bosh barmoq suyagining tashqariga bo'rtib chiqishi.", severity: 'eng_kop' }
    ],
    causes: ["Tor, baland poshnali yoki noqulay poyabzal kiyish", "Kun bo'yi tik oyoqda turib ishlash", "Ortiqcha vazn"],
    statistics: {
      percentage: 25,
      label: "Kattalarning deyarli 25-30 foizida oyoq panjasi gumbazining turli darajadagi yassi oyoqlik yoki deformatsiyalari mavjud.",
      source: "Podiatry Global Association",
      year: 2022
    },
    prevention: "Baland poshnali poyabzaldan faqat me'yorida foydalaning, qum va mayda toshlar ustida yalangoyoq yurib turing.",
    funFact: "Inson har kuni o'rtacha 8 000 - 10 000 qadam bosadi; bir umr davomida oyoqlar bosib o'tadigan masofa Yer sharini 4 marta aylanib chiqishga teng bo'ladi!",
    glossary: [
      { term: "Kalkaneus (Tovon suyagi)", definition: "Oyoq panjasidagi eng yirik va massiv yuk ko'taruvchi suyak." }
    ],
    boneDetails: { count: 52, boneGroup: 'oyoq', paired: true }
  },

  // ==================== MUSHAK TIZIMI ====================
  {
    id: 'pectorals',
    nameUz: "Katta ko'krak mushagi",
    nameLatin: 'Musculus pectoralis major',
    category: 'muscle',
    system: 'muscular',
    systemNameUz: 'Mushak tizimi',
    systemColor: 'text-rose-600 bg-rose-600/10 border-rose-600/30',
    views: ['front'],
    location: "Ko'krak qafasining oldingi yuqori yuzasini qoplab turuvchi yelpig'ichsimon kuchli mushak.",
    function: "Qo'lni tanaga yaqinlashtirish, ichkariga burish, narsalarni oldinga itarish va chuqur nafas olishda yordamchi bo'lish.",
    diseases: [
      { name: "Ko'krak mushagi tortilishi (Miozit)", description: "Kuchli og'ir yuk ko'tarish yoki shamollash sababli mushak tolalarining yallig'lanishi.", severity: 'eng_kop' },
      { name: "Pektoral payining uzilishi", description: "Shtanga bosish (bench press) paytida payning suyakdan uzilishi.", severity: 'jiddiy' }
    ],
    causes: ["Mashg'ulotdan oldin qizdiruvchi mashqlarni bajarmaslik", "Haddan tashqari og'ir shtanga ko'tarish", "Konditsioner tagida sovuq qotish"],
    statistics: {
      percentage: 3,
      label: "Sport zallariga qatnovchi kuchli sportchilar orasida mushak jarohatlarining 3-5 foizi ko'krak mushagi hissasiga to'g'ri keladi.",
      source: "Sports Medicine Research",
      year: 2023
    },
    prevention: "Sport mashg'ulotidan oldin kamida 10 daqiqa ko'krak va yelka sohasini qizdiring va vaznni bosqichma-bosqich oshiring.",
    funFact: "Qushlarda aynan shu ko'krak mushagi ularning parvozini ta'minlaydi va ularning tana og'irligining 25-30 foizini tashkil qiladi!",
    glossary: [
      { term: "Miozit", definition: "Mushak to'qimasining yallig'lanishi va og'rishi." }
    ]
  },
  {
    id: 'biceps_triceps',
    nameUz: "Qo'l mushaklari (Ikki va Uch boshli mushaklar)",
    nameLatin: 'Biceps brachii et Triceps brachii',
    category: 'muscle',
    system: 'muscular',
    systemNameUz: 'Mushak tizimi',
    systemColor: 'text-rose-600 bg-rose-600/10 border-rose-600/30',
    views: ['front', 'back'],
    location: "Yelka suyagining oldingi (biceps) va orqa (triceps) tomonlarida joylashgan antagonist juft mushaklar.",
    function: "Biceps tirsak bo'g'imini bukadi va bilakni buradi; triceps esa tirsakni to'g'irlaydi va yozadi. Ular birgalikda qo'lning barcha tortish va itarish harakatlarini bajaradi.",
    diseases: [
      { name: "Biceps payi tendiniti", description: "Bicepsning yelka bo'g'imiga birikuvchi uzun kallagi payining yallig'lanishi.", severity: 'eng_kop' },
      { name: "Triceps zo'riqishi", description: "Zarba berish yoki tirsakni haddan ziyod zo'riqtirish oqibatida tolalarning uzilishi.", severity: 'ortacha' }
    ],
    causes: ["Bir xil harakatlarni takroriy zo'riqish bilan bajarish", "Og'ir narsalarni keskin ko'tarish"],
    statistics: {
      percentage: 8,
      label: "Og'ir jismoniy mehnat qiluvchilarning 8-10 foizida tirsak va yelka paylari tendiniti qayd etiladi.",
      source: "Orthopedic Sports Clinics",
      year: 2022
    },
    prevention: "Qo'llar bilan og'irlik ko'tarayotganda gavdani tik tuting va mushaklarni ortiqcha charchoq holatida ishlatmang.",
    funFact: "'Musculus' (mushak) so'zi lotinchadan 'mitti sichqoncha' degan ma'noni anglatadi — qadimiy tabiblar ter ostida biceps qisqarganda sichqon yugurgandek harakatni ko'rishgan!",
    glossary: [
      { term: "Antagonistlar", definition: "Bir-biriga qarama-qarshi harakat qiluvchi (biri bukib, biri yozuvchi) mushaklar juftligi." }
    ]
  },
  {
    id: 'abdominals',
    nameUz: "Qorin press mushaklari (To'g'ri va Qiya)",
    nameLatin: 'Musculus rectus abdominis',
    category: 'muscle',
    system: 'muscular',
    systemNameUz: 'Mushak tizimi',
    systemColor: 'text-rose-600 bg-rose-600/10 border-rose-600/30',
    views: ['front'],
    location: "Qorin oldingi devori bo'ylab to'sh suyagidan qov suyagiga qadar vertikal cho'zilgan.",
    function: "Gavdani oldinga egadi, ichki a'zolarni o'z o'rnida ushlab qorin ichki bosimini ta'minlaydi, nafas chiqarish va umurtqani to'g'ri saqlashda asosiy tayanch vazifasini o'taydi.",
    diseases: [
      { name: "Qorin oq chizig'i churrasi (Grija)", description: "Qorin markaziy pay chizig'ining zaiflashib, ichki a'zolarning tashqariga bo'rtib chiqishi.", severity: 'eng_kop' },
      { name: "Diastaz", description: "To'g'ri mushaklarning bir-biridan yon tomonga ajralib ketishi (ayniqsa tug'ruqdan keyin).", severity: 'eng_kop' }
    ],
    causes: ["Qorin ichki bosimining to'satdan ortishi", "Tug'ruqdan keyingi chanoq va qorin devori zaiflashishi", "Og'ir yuk ko'tarish"],
    statistics: {
      percentage: 33,
      label: "Tug'ruqdan keyingi dastlabki oylarda ayollarning 30-40 foizida turli darajadagi qorin to'g'ri mushaklari diastazi kuzatiladi.",
      source: "British Journal of Sports Medicine",
      year: 2023
    },
    prevention: "Qorin mushaklarini chuqur 'vakuum' va plank mashqlari bilan mustahkamlang, belga og'ir yuk tushishidan saqlaning.",
    funFact: "Press mushaklaridagi mashhur 'kubiklar' aslida bitta uzun to'g'ri mushak bo'lib, uning ustidan 3-4 ta ko'ndalang pay tasmalari kesib o'tishi natijasida kubiklar shakllanadi!",
    glossary: [
      { term: "Aponevroz", definition: "Keng yassi mushaklarning birikuvchi mustahkam oq payli pufagi." }
    ]
  },
  {
    id: 'gluteus',
    nameUz: 'Katta dumba mushagi',
    nameLatin: 'Musculus gluteus maximus',
    category: 'muscle',
    system: 'muscular',
    systemNameUz: 'Mushak tizimi',
    systemColor: 'text-rose-600 bg-rose-600/10 border-rose-600/30',
    views: ['back'],
    location: "Chanoqning orqa yuzasida joylashgan eng qalin va yirik mushak.",
    function: "Insonning tik turishi va qaddini saqlashining asosiy kafolati. Sonni orqaga yozadi, zinapoyadan ko'tarilishda, o'tirgan joydan tik turishda va yugurishda bosh kuchni beradi.",
    diseases: [
      { name: "Noksimon mushak sindromi (Piriformis)", description: "Dumba ichidagi chuqur mushak qisilib, quymich asabini ezishi va oyoqqa qattiq og'riq tarqalishi.", severity: 'eng_kop' },
      { name: "Gluteal amneziya ('Uxlab qolgan dumba' sindromi)", description: "Kun bo'yi o'tirib ishlash natijasida dumba mushaklarining faolligini yo'qotishi.", severity: 'eng_kop' }
    ],
    causes: ["Kuniga 8-10 soat stulda o'tirish", "Kamharakatlik", "Quymich asabining shamollashi"],
    statistics: {
      percentage: 17,
      label: "Bel og'rig'i bilan murojaat qilganlarning deyarli 17 foizida sabab belda emas, balki dumba mushaklari faoliyatsizligida ekani aniqlangan.",
      source: "Journal of Physical Therapy Science",
      year: 2022
    },
    prevention: "Har soatda o'rningizdan turib o'tirib-turish (prisedanie) qiling, lift o'rniga zinapoyadan piyoda ko'tariling.",
    funFact: "Katta dumba mushagi — inson tanasidagi eng katta va eng qudratli yakka mushak hisoblanadi. Aynan u odamzotni to'rt oyoqlab emas, ikki oyoqda tik yurishiga imkon bergan!",
    glossary: [
      { term: "Gluteal guruh", definition: "Katta, o'rta va kichik dumba mushaklaridan iborat chanoq mushaklari guruhi." }
    ]
  },
  {
    id: 'quadriceps_calves',
    nameUz: "To'rt boshli son va Boldir mushaklari",
    nameLatin: 'Quadriceps femoris et Gastrocnemius',
    category: 'muscle',
    system: 'muscular',
    systemNameUz: 'Mushak tizimi',
    systemColor: 'text-rose-600 bg-rose-600/10 border-rose-600/30',
    views: ['front', 'back'],
    location: "Sonning old tomoni (quadriceps) va boldirning orqa tomonida (ikra / gastrocnemius) joylashgan.",
    function: "Quadriceps tizzani yozadi va oyoqni oldinga qadam tashlashini ta'minlaydi; boldir mushagi esa tovonni ko'tarib (oyoq uchida turish) va Axill payi orqali itarilish kuchini beradi.",
    diseases: [
      { name: "Axill payining uzilishi", description: "Boldir mushagini tovon bilan bog'lovchi inson tanasidagi eng qalin payning uzilishi.", severity: 'jiddiy' },
      { name: "Boldir tomir tortishishi (Sudorogi)", description: "Magniy, kaliy yetishmovchiligi yoki charchoq tufayli mushakning og'riqli spazmi.", severity: 'eng_kop' }
    ],
    causes: ["Suvsizlanish va mikroelementlar (magniy, kaliy) yetishmovchiligi", "Qon aylanishining yomonlashishi (varikoz)", "Ortiqcha yuk bilan keskin sakrash"],
    statistics: {
      percentage: 35,
      label: "Katta yoshdagilarning kamida 35-40 foizi tunda oyoq va boldir tomirlari tortishishi (sudorogi) noqulayligini boshdan kechiradi.",
      source: "American Family Physician",
      year: 2023
    },
    prevention: "Yetarlicha suv iching, yotishdan oldin oyoqlarni yengil cho'zing, magniy va kaliyga boy banan, yong'oqlar iste'mol qiling.",
    funFact: "Boldir mushaklari tibbiyotda ko'pincha 'insonning ikkinchi yuragi' deb ataladi, chunki ular harakat paytida qisqarib, oyoqdagi venoz qonni pastdan yuqoriga — yurakka qarab haydab turadi!",
    glossary: [
      { term: "Axill payi", definition: "Inson tanasidagi eng yo'g'on va eng mustahkam pay (400 kg gacha yukni ko'taradi)." }
    ]
  }
];

// Helper to find item by ID
export const getAnatomyItemById = (id: string): AnatomyItem | undefined => {
  return ANATOMY_ITEMS.find((item) => item.id === id);
};
