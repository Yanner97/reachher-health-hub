import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "sw";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.impact": "Impact",
    "nav.getInvolved": "Get Involved",
    "nav.contact": "Contact",
    "nav.donate": "Donate",

    // Hero
    "hero.badge": "🌍 Kilimanjaro, Tanzania",
    "hero.title1": "Empowering Women.",
    "hero.titleHighlight": "Advancing Health.",
    "hero.title2": "Transforming Communities.",
    "hero.description": "REACHHER HEALTHTECH uses technology, education, and community leadership to ensure every woman and girl is informed, confident, and empowered to take control of her health.",
    "hero.donateNow": "Donate Now",
    "hero.partnerWithUs": "Partner With Us",

    // About
    "about.label": "About Us",
    "about.title1": "Reaching Her,",
    "about.titleHighlight": "Reaching Health",
    "about.description": "REACHHER HEALTHTECH is a nonprofit organization based in Kilimanjaro, Tanzania, dedicated to improving the health of women and girls through digital innovation, community outreach, and empowerment programs.",
    "about.vision": "Our Vision",
    "about.visionText": "A Tanzania where every woman and girl has access to quality health information and services through technology and community support.",
    "about.mission": "Our Mission",
    "about.missionText": "To bridge the health information gap for women and girls using digital innovation, grassroots education, and peer-driven empowerment programs.",
    "about.whyWeExist": "Why We Exist",
    "about.whyWeExistText": "Millions of women in Tanzania face barriers to healthcare — limited access, stigma, and lack of information. We're changing that through technology.",
    "about.founderQuote": "\"Every woman deserves to know her body, understand her health, and make informed choices. At REACHHER HEALTHTECH, we believe that technology and community are the bridges to a healthier future for women and girls across Tanzania.\"",
    "about.founderTitle": "Founder & Executive Director",

    // Programs
    "programs.label": "Our Programs",
    "programs.title1": "What We",
    "programs.titleHighlight": "Do",
    "programs.description": "From digital tools to in-person outreach, our programs are designed to meet women and girls where they are.",
    "programs.digitalHealth": "Digital Health Solutions",
    "programs.digitalHealthDesc": "Mobile health apps, SMS appointment reminders, and WhatsApp support groups connecting women to vital health information.",
    "programs.digitalHealthTag": "Technology",
    "programs.communityHealth": "Community Health Education",
    "programs.communityHealthDesc": "Grassroots workshops and awareness campaigns addressing maternal health, family planning, and disease prevention.",
    "programs.communityHealthTag": "Education",
    "programs.cancerScreening": "Cancer Screening & Mobile Clinics",
    "programs.cancerScreeningDesc": "Bringing cervical and breast cancer screening directly to underserved communities through mobile clinic outreach.",
    "programs.cancerScreeningTag": "Healthcare",
    "programs.peerHealth": "Peer Health Champions",
    "programs.peerHealthDesc": "Training young women as health ambassadors in their communities, creating a network of informed peer educators.",
    "programs.peerHealthTag": "Leadership",
    "programs.mentalWellness": "Mental Wellness & Empowerment",
    "programs.mentalWellnessDesc": "Support groups and mental health initiatives helping women and girls build confidence and emotional resilience.",
    "programs.mentalWellnessTag": "Wellness",

    // Impact
    "impact.label": "Our Impact",
    "impact.title1": "Measurable",
    "impact.titleHighlight": "Change",
    "impact.stat1": "Women & Girls Reached",
    "impact.stat2": "Community Workshops",
    "impact.stat3": "Cancer Screenings",
    "impact.stat4": "Peer Health Champions",
    "impact.testimonial1": "Thanks to REACHHER, I learned about cervical cancer screening. Early detection saved my life. Now I teach other women in my village.",
    "impact.testimonial2": "The WhatsApp health group gave me confidence during my pregnancy. I had questions answered in Swahili, from women who understood my situation.",

    // Get Involved
    "involved.label": "Get Involved",
    "involved.title1": "Join the",
    "involved.titleHighlight": "Movement",
    "involved.description": "Whether you donate, volunteer, or partner, your support empowers women and girls across Tanzania.",
    "involved.donateTitle": "Donate",
    "involved.donateDesc": "Support our programs via mobile money (M-Pesa, Tigo Pesa) or international transfer.",
    "involved.partnerTitle": "Partner",
    "involved.partnerDesc": "Collaborate with us as a corporate, NGO, or government partner to scale impact.",
    "involved.volunteerTitle": "Volunteer",
    "involved.volunteerDesc": "Lend your skills — from tech to community health — and make a direct difference.",
    "involved.formTitle": "Sign Up to Volunteer",
    "involved.formSubtitle": "We'd love to hear from you!",
    "involved.name": "Your Name",
    "involved.email": "Your Email",
    "involved.interest": "Area of Interest",
    "involved.interestTech": "Technology & Digital Health",
    "involved.interestHealth": "Community Health Education",
    "involved.interestOutreach": "Outreach & Campaigns",
    "involved.interestFundraising": "Fundraising",
    "involved.interestOther": "Other",
    "involved.submit": "Submit",
    "involved.errorMsg": "Please fill in your name and email.",
    "involved.successMsg": "Thank you for your interest! We'll be in touch soon.",

    // Contact
    "contact.label": "Contact Us",
    "contact.title1": "Let's",
    "contact.titleHighlight": "Connect",
    "contact.location": "Location",
    "contact.locationValue": "Kilimanjaro, Tanzania",
    "contact.emailLabel": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.yourMessage": "Your Message",
    "contact.sendMessage": "Send Message",
    "contact.errorMsg": "Please fill in all fields.",
    "contact.successMsg": "Message sent! We'll get back to you soon.",

    // Footer
    "footer.description": "Empowering women and girls through technology, education, and community leadership in Tanzania.",
    "footer.quickLinks": "Quick Links",
    "footer.newsletter": "Newsletter",
    "footer.newsletterDesc": "Stay updated on our work and impact.",
    "footer.emailPlaceholder": "Your email",
    "footer.join": "Join",
    "footer.rights": "© 2026 REACHHER HEALTHTECH. All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.inTanzania": "in Tanzania",
  },

  sw: {
    // Navbar
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.programs": "Programu",
    "nav.impact": "Athari",
    "nav.getInvolved": "Shiriki",
    "nav.contact": "Wasiliana",
    "nav.donate": "Changia",

    // Hero
    "hero.badge": "🌍 Kilimanjaro, Tanzania",
    "hero.title1": "Kuwawezesha Wanawake.",
    "hero.titleHighlight": "Kuendeleza Afya.",
    "hero.title2": "Kubadilisha Jamii.",
    "hero.description": "REACHHER HEALTHTECH inatumia teknolojia, elimu, na uongozi wa jamii kuhakikisha kila mwanamke na msichana anapata taarifa, ujasiri, na uwezeshaji wa kudhibiti afya yake.",
    "hero.donateNow": "Changia Sasa",
    "hero.partnerWithUs": "Shirikiana Nasi",

    // About
    "about.label": "Kuhusu Sisi",
    "about.title1": "Kumfikia Yeye,",
    "about.titleHighlight": "Kufikia Afya",
    "about.description": "REACHHER HEALTHTECH ni shirika lisilo la faida lenye makao yake Kilimanjaro, Tanzania, linalojitahidi kuboresha afya ya wanawake na wasichana kupitia ubunifu wa kidijitali, ushiriki wa jamii, na programu za uwezeshaji.",
    "about.vision": "Dira Yetu",
    "about.visionText": "Tanzania ambapo kila mwanamke na msichana ana uwezo wa kupata taarifa na huduma bora za afya kupitia teknolojia na msaada wa jamii.",
    "about.mission": "Dhamira Yetu",
    "about.missionText": "Kuziba pengo la taarifa za afya kwa wanawake na wasichana kwa kutumia ubunifu wa kidijitali, elimu ya msingi, na programu za uwezeshaji zinazongozwa na wenzao.",
    "about.whyWeExist": "Kwa Nini Tupo",
    "about.whyWeExistText": "Mamilioni ya wanawake Tanzania wanakabiliwa na vikwazo vya afya — upatikanaji mdogo, unyanyapaa, na ukosefu wa taarifa. Tunabadilisha hilo kupitia teknolojia.",
    "about.founderQuote": "\"Kila mwanamke anastahili kujua mwili wake, kuelewa afya yake, na kufanya maamuzi sahihi. Katika REACHHER HEALTHTECH, tunaamini kuwa teknolojia na jamii ni madaraja ya mustakabali bora wa afya kwa wanawake na wasichana kote Tanzania.\"",
    "about.founderTitle": "Mwanzilishi na Mkurugenzi Mtendaji",

    // Programs
    "programs.label": "Programu Zetu",
    "programs.title1": "Tunachokifanya",
    "programs.titleHighlight": "",
    "programs.description": "Kutoka zana za kidijitali hadi ushiriki wa ana kwa ana, programu zetu zimeundwa kuwafikia wanawake na wasichana walipo.",
    "programs.digitalHealth": "Suluhisho za Afya ya Kidijitali",
    "programs.digitalHealthDesc": "Programu za afya za simu, vikumbusho vya SMS, na makundi ya WhatsApp yanayounganisha wanawake na taarifa muhimu za afya.",
    "programs.digitalHealthTag": "Teknolojia",
    "programs.communityHealth": "Elimu ya Afya ya Jamii",
    "programs.communityHealthDesc": "Warsha za msingi na kampeni za uhamasishaji zinazoshughulikia afya ya uzazi, upangaji uzazi, na kuzuia magonjwa.",
    "programs.communityHealthTag": "Elimu",
    "programs.cancerScreening": "Uchunguzi wa Saratani & Kliniki za Rununu",
    "programs.cancerScreeningDesc": "Kuleta uchunguzi wa saratani ya shingo ya kizazi na matiti moja kwa moja kwenye jamii zisizopata huduma kupitia kliniki za rununu.",
    "programs.cancerScreeningTag": "Afya",
    "programs.peerHealth": "Mabalozi wa Afya wa Rika",
    "programs.peerHealthDesc": "Kuwafunza wanawake vijana kuwa mabalozi wa afya katika jamii zao, kuunda mtandao wa waelimishaji wa rika wenye taarifa.",
    "programs.peerHealthTag": "Uongozi",
    "programs.mentalWellness": "Ustawi wa Akili na Uwezeshaji",
    "programs.mentalWellnessDesc": "Makundi ya msaada na mipango ya afya ya akili inayowasaidia wanawake na wasichana kujenga ujasiri na ustahimilivu wa kihisia.",
    "programs.mentalWellnessTag": "Ustawi",

    // Impact
    "impact.label": "Athari Yetu",
    "impact.title1": "Mabadiliko",
    "impact.titleHighlight": "Yanayopimika",
    "impact.stat1": "Wanawake na Wasichana Waliofikishwa",
    "impact.stat2": "Warsha za Jamii",
    "impact.stat3": "Uchunguzi wa Saratani",
    "impact.stat4": "Mabalozi wa Afya wa Rika",
    "impact.testimonial1": "Shukrani kwa REACHHER, nilijifunza kuhusu uchunguzi wa saratani ya shingo ya kizazi. Ugunduzi wa mapema uliokoa maisha yangu. Sasa ninawafundisha wanawake wengine kijijini kwangu.",
    "impact.testimonial2": "Kundi la afya la WhatsApp lilinipa ujasiri wakati wa ujauzito wangu. Maswali yangu yalijibiwa kwa Kiswahili, na wanawake walioelewa hali yangu.",

    // Get Involved
    "involved.label": "Shiriki",
    "involved.title1": "Jiunge na",
    "involved.titleHighlight": "Harakati",
    "involved.description": "Iwe unachangia, kujitolea, au kushirikiana, msaada wako unawawezesha wanawake na wasichana kote Tanzania.",
    "involved.donateTitle": "Changia",
    "involved.donateDesc": "Saidia programu zetu kupitia pesa za simu (M-Pesa, Tigo Pesa) au uhamisho wa kimataifa.",
    "involved.partnerTitle": "Shirikiana",
    "involved.partnerDesc": "Shirikiana nasi kama mshirika wa kampuni, NGO, au serikali ili kupanua athari.",
    "involved.volunteerTitle": "Jitolee",
    "involved.volunteerDesc": "Toa ujuzi wako — kutoka teknolojia hadi afya ya jamii — na ufanye tofauti moja kwa moja.",
    "involved.formTitle": "Jiandikishe Kujitolea",
    "involved.formSubtitle": "Tungependa kusikia kutoka kwako!",
    "involved.name": "Jina Lako",
    "involved.email": "Barua Pepe Yako",
    "involved.interest": "Eneo la Shauku",
    "involved.interestTech": "Teknolojia na Afya ya Kidijitali",
    "involved.interestHealth": "Elimu ya Afya ya Jamii",
    "involved.interestOutreach": "Ushiriki na Kampeni",
    "involved.interestFundraising": "Uchangishaji Fedha",
    "involved.interestOther": "Nyingine",
    "involved.submit": "Wasilisha",
    "involved.errorMsg": "Tafadhali jaza jina na barua pepe yako.",
    "involved.successMsg": "Asante kwa shauku yako! Tutawasiliana nawe hivi karibuni.",

    // Contact
    "contact.label": "Wasiliana Nasi",
    "contact.title1": "Hebu",
    "contact.titleHighlight": "Tuwasiliane",
    "contact.location": "Mahali",
    "contact.locationValue": "Kilimanjaro, Tanzania",
    "contact.emailLabel": "Barua Pepe",
    "contact.whatsapp": "WhatsApp",
    "contact.yourName": "Jina Lako",
    "contact.yourEmail": "Barua Pepe Yako",
    "contact.yourMessage": "Ujumbe Wako",
    "contact.sendMessage": "Tuma Ujumbe",
    "contact.errorMsg": "Tafadhali jaza sehemu zote.",
    "contact.successMsg": "Ujumbe umetumwa! Tutakujibu hivi karibuni.",

    // Footer
    "footer.description": "Kuwawezesha wanawake na wasichana kupitia teknolojia, elimu, na uongozi wa jamii nchini Tanzania.",
    "footer.quickLinks": "Viungo vya Haraka",
    "footer.newsletter": "Jarida",
    "footer.newsletterDesc": "Pata habari mpya kuhusu kazi na athari zetu.",
    "footer.emailPlaceholder": "Barua pepe yako",
    "footer.join": "Jiunge",
    "footer.rights": "© 2026 REACHHER HEALTHTECH. Haki zote zimehifadhiwa.",
    "footer.madeWith": "Imetengenezwa kwa",
    "footer.inTanzania": "Tanzania",
  },
};
