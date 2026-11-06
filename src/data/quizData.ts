import { QuizQuestion } from '../types/anatomy';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Kattalarda inson skeletida jami nechta suyak mavjud?",
    options: ["180 ta", "206 ta", "256 ta", "300 ta"],
    correctIndex: 1,
    explanation: "Katta yoshli inson skeletida roppa-rosa 206 ta suyak mavjud. Yangi tug'ilgan chaqaloqlarda esa taxminan 270-300 ta suyak bo'lib, o'sish davrida ularning ko'p qismi o'zaro birikib ketadi.",
    relatedOrganId: "skull"
  },
  {
    id: 2,
    question: "Inson tanasidagi eng uzun, eng og'ir va eng baquvvat suyak qaysi?",
    options: ["Yelka suyagi (Humerus)", "Katta boldir (Tibia)", "Son suyagi (Femur)", "To'sh suyagi (Sternum)"],
    correctIndex: 2,
    explanation: "Son suyagi (Os femoris / Femur) — inson tanasidagi eng uzun va eng mustahkam suyak bo'lib, u 1.5 tonnagacha bo'lgan bosimga bardosh bera oladi.",
    relatedOrganId: "femur_bone"
  },
  {
    id: 3,
    question: "Tanamizdagi qaysi a'zo 70% qismi olib tashlansa ham o'zini o'zi to'liq qayta tiklay oladi (regeneratsiya)?",
    options: ["Buyrak", "Miya", "Jigar", "Oshqozon"],
    correctIndex: 2,
    explanation: "Jigar (Hepar) — inson tanasidagi yagona yuqori darajada regeneratsiya qobiliyatiga ega ichki a'zo bo'lib, hatto uning 70 foizi olib tashlansa ham, qolgan qismi o'z hajmini qayta tiklay oladi.",
    relatedOrganId: "liver"
  },
  {
    id: 4,
    question: "Inson tanasidagi eng mitti suyak qaysi va u qayerda joylashgan?",
    options: ["Uzangi suyagi (O'rta quloqda)", "No'xatsimon suyak (Kaftda)", "Ko'z yosh suyagi (Ko'z kosasida)", "Dum suyagi (Umurtqada)"],
    correctIndex: 0,
    explanation: "Uzangi suyagi (Stapes) o'rta quloqda joylashgan bo'lib, uning uzunligi bor-yo'g'i 3 mm, vazni esa taxminan 3 milligrammni tashkil qiladi.",
    relatedOrganId: "ear"
  },
  {
    id: 5,
    question: "Tanamizdagi qaysi mushaklar guruhini shifokorlar ko'pincha 'insonning ikkinchi yuragi' deb atashadi?",
    options: ["Qorin pressi", "Boldir mushaklari", "Deltasimon mushak", "Biceps"],
    correctIndex: 1,
    explanation: "Boldir mushaklari (Gastrocnemius) harakat vaqtida venoz qonni pastdan yuqoriga — yurakka qarab haydab beruvchi tabiiy mushakli nasos vazifasini o'taydi.",
    relatedOrganId: "quadriceps_calves"
  },
  {
    id: 6,
    question: "JSST ma'lumotlariga ko'ra, dunyoda o'lim sabablari orasida birinchi o'rinda qaysi tizim xastaliklari turadi?",
    options: ["Nafas olish yo'llari kasalliklari", "Yurak-qon tomir kasalliklari", "Oshqozon-ichak xastaliklari", "Asab tizimi kasalliklari"],
    correctIndex: 1,
    explanation: "Jahon Sog'liqni Saqlash Tashkiloti (JSST) hisobotiga ko'ra, dunyo bo'ylab barcha o'lim holatlarining taxminan 32 foizi yurak-qon tomir kasalliklari hissasiga to'g'ri keladi.",
    relatedOrganId: "heart"
  },
  {
    id: 7,
    question: "Qon tarkibidagi shakarni (glyukoza) tushiruvchi 'insulin' gormoni qaysi a'zoda ishlab chiqariladi?",
    options: ["Qalqonsimon bez", "Oshqozon osti bezi", "Jigar", "Taloq"],
    correctIndex: 1,
    explanation: "Insulin gormoni oshqozon osti bezining (Pancreas) Langergans orolchalari deb ataluvchi maxsus beta-hujayralarida ishlab chiqariladi.",
    relatedOrganId: "pancreas"
  },
  {
    id: 8,
    question: "Inson tanasidagi barcha suyaklarning to'rtdan bir qismi (54 ta suyak) tananing aynan qaysi qismida to'plangan?",
    options: ["Bosh suyagida", "Ikkala qo'l panjasida", "Ko'krak qafasida", "Umurtqa pog'onasida"],
    correctIndex: 1,
    explanation: "Ikkala qo'l panjamizda 27 tadan jami 54 ta suyak mavjud bo'lib, bu butun skeletdagi 206 ta suyakning 26 foizdan ortig'ini tashkil qiladi.",
    relatedOrganId: "hand_bones"
  },
  {
    id: 9,
    question: "Boshqa hech bir suyak bilan bevosita bo'g'im hosil qilmaydigan erkin suyak qaysi?",
    options: ["Tizza qopqog'i", "Til osti suyagi", "O'mrov suyagi", "Kurak suyagi"],
    correctIndex: 1,
    explanation: "Til osti suyagi (Os hyoideum) boshqa hech qanday suyak bilan bo'g'im hosil qilmaydi, u bo'yin sohasida paylar va mushaklar yordamida osilib turadi.",
    relatedOrganId: "skull"
  },
  {
    id: 10,
    question: "Buyraklar bir kecha-kunduzda qonni filtrlab, taxminan qancha 'birlamchi siydik' hosil qiladi?",
    options: ["1.5 - 2 litr", "15 - 20 litr", "150 - 180 litr", "500 litr"],
    correctIndex: 2,
    explanation: "Buyrak nefronlari 24 soat davomida taxminan 150-180 litr birlamchi filtrat hosil qiladi, uning 99 foizi yana qayta qonga so'rilib, atigi 1.5-2 litri ikkilamchi siydik sifatida ajraladi.",
    relatedOrganId: "kidneys"
  }
];
