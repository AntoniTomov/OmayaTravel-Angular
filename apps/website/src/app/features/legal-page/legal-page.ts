import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveSite } from '../../../sites/active-site';

interface LegalSection {
  heading?: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  links?: readonly {
    label: string;
    url: string;
  }[];
}

interface LegalPageContent {
  title: string;
  heroImage?: string;
  certificateImage?: string;
  sections: readonly LegalSection[];
}

const TERMS_SECTIONS: readonly LegalSection[] = [
  {
    heading: '1. Important Notice',
    paragraphs: [
      'All bookings with Omaya Travel are subject to these Terms and Conditions. The lead traveller (person making the booking) accepts the Terms and Conditions on behalf of all participants and is responsible for communicating all relevant information to other travellers in the booking.',
      'Omaya Travel is a fully registered and legally operating tour operator within the European Union, holding license number РК-01-8706 and full travel insurance in compliance with EU travel regulations.',
    ],
  },
  {
    heading: '2. Bookings and Payments',
    paragraphs: [
      'A deposit is required to secure your booking. In general, a deposit of 25% per person is payable within seven (7) days of written confirmation, unless otherwise stated. Certain tours may require a higher deposit amount, and this will be clearly noted in the Terms and Conditions on the relevant tour page.',
      'The deposit is non-refundable in cash. However, if you cancel your booking more than 45 days prior to departure, the full deposit amount may be used as credit toward a future trip, minus a EUR 100 administration fee.',
      'Certain services (e.g. domestic flights, permits, peak-season hotels) may require full prepayment and are non-refundable. This will be communicated at the time of booking.',
      'Full payment must be received no less than 60 days before the commencement of your trip, unless otherwise specified. Some trips may require earlier payment or additional instalments, which will be communicated with the booking confirmation. Failure to pay by the due date will result in a reminder. You will also be responsible for any supplier-imposed costs due to late payment. If payment is not received within seven (7) days of the reminder, your booking will be deemed cancelled.',
      'Any fees associated with credit card payments are the responsibility of the traveller.',
    ],
  },
  {
    heading: '3. Cancellation Policy (By You)',
    paragraphs: [
      'Cancellation policies may vary depending on the destination and will be communicated at the time of reservation.',
      'If you cancel after the deposit has been paid, the deposit may be used as credit for a future expedition, provided Omaya Travel is notified more than 45 days in advance. An administration fee of 100 EUR applies.',
      'Refund structure:',
    ],
    list: [
      'Less than 14 days before departure: non-refundable.',
      '45–30 days before departure: full refund minus the deposit.',
      '29–20 days before departure: 30% refund applicable.',
    ],
  },
  {
    heading: '4. Illness, Vaccination Status, and Inability to Travel',
    paragraphs: [
      'If, due to illness, suspected illness, or failure to satisfy any required tests or vaccination requirements, an airline or other carrier refuses carriage, a hotel or vessel refuses accommodation, or Omaya Travel or its suppliers reasonably exclude you, you may be prevented from commencing or continuing your trip.',
      'If the trip has commenced, we will provide reasonable assistance to arrange alternative travel or continue the trip at your cost. If the trip has not commenced, assistance cannot be provided. We will not refund trip costs in these circumstances, as payments to suppliers will have been made and preparation for the trip completed. Omaya Travel is not responsible for other losses, including airfares or visa expenses. Travel insurance covering illness and unforeseen events is strongly recommended.',
      'If a new medical condition arises, or an existing condition changes, it must be reported immediately. If it affects your ability to participate, it is treated as a cancellation by you, and travel insurance is recommended. Failure to disclose medical conditions may result in exclusion from the trip, treated as a cancellation by you.',
    ],
  },
  {
    heading: '5. Force Majeure',
    paragraphs: [
      'Credit for future travel may be available depending on the situation, supplier policies, and notice period, but this is not guaranteed. Omaya Travel will communicate options and do its best to accommodate affected travellers.',
    ],
  },
  {
    heading: '6. Cancellation by Omaya Travel',
    paragraphs: [
      'If we cancel travel arrangements for reasons other than Force Majeure or failure to meet minimum numbers, you may elect to receive a refund of all funds paid or alternative travel arrangements of substantially equal quality. Omaya Travel is not responsible for additional expenses or losses arising from such cancellation.',
    ],
  },
  {
    heading: '7. Changes',
    paragraphs: [
      'Name changes may be made free for services not tied to specific individuals; fees may apply for services such as flights, train tickets, entry fees, or permits. Changes to tour dates or itineraries may also incur additional costs.',
      'Minor changes by Omaya Travel will be communicated. Significant changes, such as major itinerary modifications, substantial accommodation changes, or cancellation of multiple activities, will be communicated promptly. You may accept the changes and continue your trip or cancel your booking with refund, subject to administration fees.',
      'During travel, itinerary, transport, accommodation, and inclusions may change due to circumstances beyond our control, including weather, road conditions, transport schedule changes, or mechanical failures.',
    ],
  },
  {
    heading: '8. General Conditions',
    paragraphs: [
      'Omaya Travel will not be responsible for omissions or modifications to the itinerary due to Force Majeure or other circumstances beyond our control. Loss of enjoyment or distress caused by such changes is excluded. Any compensation will be reduced by the value of alternative services accepted by you. Omaya Travel will not be responsible for additional expenses or losses due to itinerary changes.',
    ],
  },
  {
    heading: '9. Accommodation',
    paragraphs: [
      'Accommodation may be substituted with properties of comparable or higher standard. Efforts will be made to minimise substitutions, and such substitutions will not be considered a significant change.',
    ],
  },
  {
    heading: '10. Passports, Visas, and Vaccinations',
    paragraphs: [
      'You must hold a valid passport and obtain any required visas. Passport name must match your airline ticket, or boarding may be denied. Responsibility for documentation accuracy rests with you. Omaya Travel accepts no liability for failures.',
      'You must comply with visa requirements and consult your local embassy or consulate. Specialist visa services should be engaged if needed.',
      'You are responsible for obtaining any vaccinations or preventative medications. Omaya Travel provides information in good faith.',
    ],
  },
  {
    heading: '11. Health and Fitness',
    paragraphs: [
      'You must ensure appropriate health and fitness levels to participate. Doubts should be discussed before booking. Pre-existing medical conditions that increase risk or affect the trip must be disclosed at booking. Omaya Travel may request medical assessment. Refunds or transfers will be made according to standard cancellation policy if informed in sufficient time.',
      'Bookings made less than 45 days before departure require immediate disclosure of pre-existing conditions. New or changed medical conditions must be reported immediately. Non-disclosure may result in exclusion from the trip, treated as a cancellation.',
    ],
  },
  {
    heading: '12. Special Requirements and Room Sharing',
    paragraphs: [
      'Dietary requirements must be communicated within seven (7) days of booking confirmation. While Omaya Travel will endeavour to notify suppliers, requests are not guaranteed. You are responsible for allergens in meals and beverages.',
      'Single travellers should pay a single supplement in advance, refundable if a roommate is found. Roommates are matched by sex only, with no guarantees regarding compatibility. Omaya Travel is not responsible for any inconvenience caused by roommates. Single room availability cannot be guaranteed if changed before or during the trip.',
    ],
  },
  {
    heading: '13. Conduct on Tour',
    paragraphs: [
      'You must conduct yourself to ensure safety and enjoyment of the group. Behaviour that threatens others or disrupts the tour may result in removal, with no refund. Additional costs incurred will be your responsibility.',
    ],
  },
  {
    heading: '14. Minimum Numbers',
    paragraphs: [
      'Some trips require minimum participant numbers. If not met, trips may be cancelled or re-costed. Notice will be given at least 45 days prior. You may accept the new cost or cancel with a refund or credit. Omaya Travel is not responsible for additional travel costs affected by such changes.',
    ],
  },
  {
    heading: '15. Acceptance of Risk',
    paragraphs: [
      'Travel involves personal risks beyond those of everyday life due to adventurous activities or destinations with geographical, political, or cultural risks. You accept these risks. Consult guidance from the Department of Foreign Affairs and Trade (DFAT) or local equivalents.',
    ],
  },
  {
    heading: '16. Third-Party Services',
    paragraphs: [
      'Services booked on the spot with third parties or partners are your responsibility. Omaya Travel is not liable for optional visits, local guides, or services not directly managed by us.',
      'Activities such as horse riding or trekking are undertaken at your own risk. Omaya Travel is not liable for injuries resulting from participation.',
    ],
  },
  {
    heading: '17. Complaints',
    paragraphs: [
      'Any problems must be reported immediately during travel to Omaya Travel representatives or suppliers to allow resolution. Follow-up complaints must be submitted in writing within 30 days of trip completion. Failure to comply may limit your rights to make a claim.',
    ],
  },
  {
    heading: '18. Travel Documents',
    paragraphs: [
      'Travel documents are electronic and emailed approximately 14 days before departure, provided full payment and required paperwork are received. If leaving earlier, notify Omaya Travel to attempt early delivery.',
    ],
  },
  {
    heading: '19. Image Release',
    paragraphs: [
      'During tours, Omaya Travel may take photographs or recordings. You consent to the use of images for promotional purposes without compensation. Inform your guide if you do not consent.',
    ],
  },
  {
    heading: '20. Airport Transfers and Baggage',
    paragraphs: [
      'Airport transfers are included only on arrival and departure days. You are responsible for your luggage, including carrying it in accommodations without porterage or elevators. Omaya Travel is not liable for damaged or lost luggage. Additional luggage restrictions will be communicated.',
    ],
  },
  {
    heading: '21. Souvenirs and Artefacts',
    paragraphs: [
      'Rules regarding souvenirs vary by country. Guides will inform you in good faith. Omaya Travel is not responsible for issues at immigration.',
    ],
  },
  {
    heading: '22. Money Requested on Tour',
    paragraphs: [
      'While services are generally pre-paid, you may be asked for incidental funds in developing tourism areas. Do not provide cash to local staff claiming to work for Omaya Travel without prior authorization. Contact the emergency number immediately.',
    ],
  },
  {
    heading: '23. Refusal of Carriage',
    paragraphs: [
      'Omaya Travel may remove customers from tours if they endanger others or display disruptive, unsafe, or illegal behavior. Onward travel costs are the traveller’s responsibility.',
    ],
  },
  {
    heading: '24. Pre-Departure Contact',
    paragraphs: [
      'You must provide a reliable telephone number, email, or address. Documentation will not be released until this information is provided. Omaya Travel is not responsible if contact details change without notification.',
    ],
  },
  {
    heading: '25. Travel Agents',
    paragraphs: [
      'If booking through a travel agent, Omaya Travel is not financially liable until payment is received. Agents must ensure that invoices, itineraries, and Terms and Conditions are correctly communicated. Agents may not accept Terms on behalf of customers but must provide clear access to them.',
    ],
  },
];

const AMELIA_TERMS_SECTIONS: readonly LegalSection[] = [
  {
    heading: '1. Важно съобщение',
    paragraphs: [
      'Всички резервации, направени чрез Amelia Travel, се извършват съгласно настоящите Общи условия. Водещият пътник (лицето, което прави резервацията) приема Общите условия от името на всички участници и носи отговорност за предоставянето на цялата необходима информация на останалите пътници в резервацията.',
      'Amelia Travel е бранд на Omaya Travel. Туристическите пакети, предлагани под бранда Amelia Travel, се организират от Omaya Travel, което е туроператорът и страна по договора с пътуващия.',
      'Omaya Travel е регистриран и законно действащ туроператор в рамките на Европейския съюз, притежаващ лиценз № РК-01-8706 и необходимата застраховка „Отговорност на туроператора“ съгласно приложимите изисквания.',
      'Omaya Travel поема разходите за застраховка „Медицински разходи при болест и злополука на туриста“ за периода на пътуването.',
    ],
  },
  {
    heading: '2. Резервации и плащания',
    paragraphs: [
      'За да бъде потвърдена резервацията, е необходим депозит. Обичайно депозитът е в размер на 25% на човек и се дължи в срок от седем (7) дни от писменото потвърждение, освен ако не е посочено друго. За някои турове може да се изисква по-висок депозит, което ще бъде ясно посочено в условията на съответната страница на тура.',
      'Депозитът не подлежи на възстановяване. Ако обаче анулирате резервацията си повече от 45 дни преди датата на отпътуване, пълният размер на депозита може да бъде използван като кредит за бъдещо пътуване, след приспадане на административна такса от 100 евро.',
      'Определени услуги, например вътрешни полети, разрешителни или хотели в пиков сезон, може да изискват пълно предплащане и да не подлежат на възстановяване. Това ще бъде съобщено при резервацията.',
      'Пълното плащане трябва да бъде получено не по-късно от 60 дни преди началото на пътуването, освен ако не е посочено друго. Някои турове може да изискват по-ранно плащане или допълнителни вноски, за което ще бъдете уведомени при потвърждението на резервацията.',
      'При неплащане в срок ще бъде изпратено напомняне. Пътникът носи отговорност и за всички допълнителни разходи, наложени от доставчици поради забавено плащане. Ако плащането не бъде получено в срок от седем (7) дни след изпращането на напомнянето, резервацията може да бъде анулирана.',
      'Всички такси, свързани с плащания с кредитна карта, са за сметка на пътника.',
    ],
  },
  {
    heading: '3. Политика за анулиране (от Ваша страна)',
    paragraphs: [
      'Условията за анулиране могат да варират според дестинацията и ще бъдат съобщени при резервацията.',
      'Ако анулирате резервацията си след заплащане на депозита, той може да бъде използван като кредит за бъдещо пътуване, при условие че Amelia Travel бъде уведомена повече от 45 дни предварително. Прилага се административна такса от 100 евро.',
      'Структура на възстановяване на суми:',
    ],
    list: [
      'По-малко от 20 дни преди отпътуване: сумата не подлежи на възстановяване.',
      '45–30 дни преди отпътуване: пълно възстановяване на платената сума, с изключение на депозита.',
      '29–20 дни преди отпътуване: възстановяват се 30% от платената сума.',
    ],
  },
  {
    paragraphs: [
      'Посочените условия за анулиране не ограничават правата на пътуващия, предвидени в приложимото законодателство. По-специално, когато са налице непреодолими и извънредни обстоятелства на мястото на дестинацията или в непосредствена близост до него, които засягат значително изпълнението на туристическия пакет или превоза до дестинацията, пътуващият може да има право да прекрати договора без такса и да получи пълно възстановяване на извършените плащания.',
    ],
  },
  {
    heading: '4. Заболяване, ваксинационен статус и невъзможност за пътуване',
    paragraphs: [
      'Ако поради заболяване, съмнение за заболяване или неизпълнение на изисквания за тестове или ваксинации авиокомпания или друг превозвач откаже да Ви превози, хотел или плавателен съд откаже настаняване, или Amelia Travel или нейните доставчици разумно Ви изключат, може да не можете да започнете или продължите пътуването си.',
      'Ако пътуването вече е започнало, ще окажем разумно съдействие за организиране на алтернативно пътуване или за продължаване на тура за Ваша сметка, доколкото това е възможно. Ако пътуването не е започнало, съдействие не може да бъде предоставено. В тези случаи разходите, които вече са направени към доставчици и не подлежат на възстановяване, могат да бъдат за сметка на пътника. Omaya Travel не носи отговорност за други загуби, включително разходи за самолетни билети или визи, освен когато приложимото законодателство предвижда друго.',
      'Силно препоръчваме сключването на подходяща туристическа застраховка за допълнителни рискове, които не са покрити от застраховката, предоставена от Omaya Travel.',
      'Ако възникне ново медицинско състояние или се промени съществуващо такова, то трябва да бъде съобщено незабавно. Ако това състояние засяга способността Ви да участвате в пътуването, то може да бъде третирано като анулиране от Ваша страна съгласно приложимата политика. Неразкриването на медицински състояния може да доведе до изключване от пътуването, което може да бъде третирано като анулиране от Ваша страна.',
    ],
  },
  {
    heading: '5. Форсмажорни обстоятелства',
    paragraphs: [
      'В зависимост от ситуацията и политиките на доставчиците може да бъде предоставен кредит за бъдещо пътуване, но това не е гарантирано.',
      'Amelia Travel ще съобщи наличните възможности и ще положи разумни усилия да съдейства на засегнатите пътници.',
      'Тази клауза не ограничава правата на пътуващия при непреодолими и извънредни обстоятелства съгласно приложимото законодателство.',
    ],
  },
  {
    heading: '6. Анулиране от страна на Amelia Travel',
    paragraphs: [
      'Ако анулираме туристическите договорености по причини, различни от форсмажорни обстоятелства или непостигане на минималния брой участници, можете да изберете възстановяване на всички платени суми или алтернативни туристически договорености със съществено равностойно качество, когато такива са налични.',
      'В случаите, когато Omaya Travel е длъжна да възстанови суми съгласно приложимото законодателство, това ще бъде извършено в съответствие с приложимите законови срокове.',
    ],
  },
  {
    heading: '7. Промени',
    paragraphs: [
      'Смяна на имена може да бъде извършена безплатно за услуги, които не са обвързани с конкретни лица; за услуги като полети, влакови билети, входни такси или разрешителни може да бъдат начислени такси. Промените в датите или програмата на тура също могат да доведат до допълнителни разходи.',
      'Незначителните промени от страна на Amelia Travel ще бъдат съобщавани. Съществени промени, като значителни изменения в програмата, съществени промени в настаняването или анулиране на множество дейности, ще бъдат съобщавани своевременно.',
      'Когато приложимото законодателство предоставя на пътуващия право да приеме предложената промяна или да прекрати договора, Amelia Travel ще уведоми пътуващия за приложимите възможности.',
      'По време на пътуването програмата, транспортът, настаняването и включените услуги могат да бъдат променени поради обстоятелства извън нашия контрол, включително метеорологични условия, пътни условия, промени в транспортните разписания или технически неизправности.',
    ],
  },
  {
    heading: '8. Общи условия',
    paragraphs: [
      'Amelia Travel не носи отговорност за пропуски или промени в програмата, дължащи се на форсмажорни обстоятелства или други обстоятелства извън нашия контрол, доколкото това е допустимо съгласно приложимото законодателство.',
      'Загубата на удоволствие или причиненият стрес в резултат на подобни промени не подлежат на обезщетение, освен когато приложимото законодателство предвижда друго.',
      'Всяко обезщетение ще бъде определяно съгласно приложимото законодателство, като се отчита стойността на приетите от Вас алтернативни услуги.',
    ],
  },
  {
    heading: '9. Настаняване',
    paragraphs: [
      'Настаняването може да бъде заменено с обекти със съпоставим или по-висок стандарт. Ще бъдат положени разумни усилия за минимизиране на подобни замени.',
      'Когато замяната представлява съществена промяна на договора за туристически пакет, ще се прилагат правата на пътуващия съгласно приложимото законодателство.',
    ],
  },
  {
    heading: '10. Паспорти, визи и ваксинации',
    paragraphs: [
      'Трябва да притежавате валиден паспорт и да осигурите необходимите визи. Името в паспорта трябва да съответства на името в самолетния билет, в противен случай може да Ви бъде отказано качване на борда.',
      'Отговорността за точността и валидността на личните документи е Ваша. Amelia Travel не носи отговорност за пропуски или неточности в предоставените от пътуващия документи.',
      'Трябва да спазвате визовите изисквания и да се консултирате с компетентното посолство или консулство. При необходимост следва да използвате специализирани визови услуги.',
      'Вие носите отговорност за осигуряването на необходимите ваксинации или профилактични лекарства. Amelia Travel предоставя информацията добросъвестно и не носи отговорност за промени в официалните изисквания или за индивидуални медицински препоръки.',
    ],
  },
  {
    heading: '11. Здраве и физическа годност',
    paragraphs: [
      'Трябва да разполагате с подходящо ниво на здраве и физическа годност за участие в пътуването. Всички съмнения следва да бъдат обсъдени преди резервацията.',
      'Съществуващи медицински състояния, които увеличават риска или могат да повлияят на пътуването, трябва да бъдат разкрити при резервацията. Omaya Travel може да поиска медицинска оценка, когато това е необходимо и допустимо съгласно приложимото законодателство.',
      'При своевременно уведомяване възстановяването на суми или прехвърлянето на резервацията ще се извършват съгласно приложимата политика и законовите права на пътуващия.',
      'При резервации, направени по-малко от 45 дни преди отпътуване, се изисква незабавно разкриване на съществуващи медицински състояния, които могат да повлияят на участието Ви.',
      'Нови или променени медицински състояния трябва да бъдат съобщени незабавно. Неразкриването може да доведе до изключване от пътуването, което може да бъде третирано като анулиране от Ваша страна.',
    ],
  },
  {
    heading: '12. Специални изисквания и споделяне на стая',
    paragraphs: [
      'Изискванията, свързани с храненето, трябва да бъдат съобщени в срок от седем (7) дни от потвърждението на резервацията.',
      'Въпреки че Amelia Travel ще положи усилия да уведоми доставчиците, изпълнението на тези изисквания не е гарантирано. Пътуващият носи отговорност да информира Amelia Travel за всички известни хранителни алергии или непоносимости. Доставчиците не винаги могат да гарантират липсата на конкретни алергени.',
      'Пътуващите, които желаят самостоятелна стая, трябва да заплатят предварително такса за единично настаняване. Тази такса подлежи на възстановяване, ако бъде намерен съквартирант.',
      'Съквартирантите се подбират единствено според пола, без гаранция за съвместимост. Amelia Travel не носи отговорност за евентуални неудобства, причинени от съквартиранти, освен когато произтичат от неизпълнение на задълженията на Omaya Travel по договора или закона.',
    ],
  },
  {
    heading: '13. Поведение по време на тура',
    paragraphs: [
      'Трябва да се държите по начин, който гарантира безопасността и доброто преживяване на групата.',
      'Поведение, което застрашава останалите, нарушава нормалното протичане на тура или нарушава местните закони, може да доведе до отстраняване от пътуването без възстановяване на суми, доколкото това е допустимо съгласно приложимото законодателство.',
      'Всички допълнителни разумни разходи, произтичащи от такова поведение, са за Ваша сметка.',
    ],
  },
  {
    heading: '14. Минимален брой участници',
    paragraphs: [
      'Някои турове изискват минимален брой участници, който ще бъде посочен в информацията за съответния тур и/или договора.',
      'Ако минималният брой не бъде достигнат, Omaya Travel може да анулира тура при условията и в сроковете, предвидени в приложимото законодателство.',
      'В случай на анулиране поради непостигане на минималния брой участници, пътуващият ще бъде уведомен в приложимия срок и ще получи възстановяване на направените плащания или друга възможност, когато това е предвидено от закона.',
      'Omaya Travel не носи отговорност за допълнителни разходи, като отделно закупени самолетни билети, когато това е допустимо съгласно приложимото законодателство.',
    ],
  },
  {
    heading: '15. Приемане на риска',
    paragraphs: [
      'Пътуването включва лични рискове, надхвърлящи тези от ежедневието, поради приключенски дейности или дестинации с географски, политически или културни рискове.',
      'Вие приемате обичайните рискове, свързани с участието в подобни дейности и посещението на съответните дестинации.',
      'Препоръчваме да се консултирате с актуалните указания за пътуване на Министерството на външните работи на Република България или на съответната компетентна институция.',
      'Тази клауза не ограничава отговорността на Omaya Travel, когато такава е предвидена в приложимото законодателство.',
    ],
  },
  {
    heading: '16. Услуги от трети страни',
    paragraphs: [
      'Услугите, резервирани на място с трети страни или партньори, са предмет на условията на съответните доставчици.',
      'Amelia Travel не носи отговорност за незадължителни посещения, местни екскурзоводи или услуги, които не са част от туристическия пакет и не се управляват пряко от нас, доколкото това е допустимо съгласно приложимото законодателство.',
      'Дейности като езда или трекинг могат да включват допълнителни рискове и се извършват при спазване на указанията за безопасност.',
      'Тази клауза не ограничава отговорността на Omaya Travel в случаите, предвидени в приложимото законодателство.',
    ],
  },
  {
    heading: '17. Оплаквания',
    paragraphs: [
      'Всеки проблем трябва да бъде докладван незабавно по време на пътуването на представител на Amelia Travel или на съответния доставчик, за да може да бъде предприето своевременно действие за разрешаването му.',
      'Пътуващият трябва да предостави разумна възможност на Omaya Travel да отстрани възникналото несъответствие.',
      'Последващи оплаквания могат да бъдат подадени писмено в срок от 30 дни след приключване на пътуването.',
      'Неспазването на посочения срок не засяга законовите права на пътуващия, когато приложимото законодателство предвижда друго.',
    ],
  },
  {
    heading: '18. Пътни документи',
    paragraphs: [
      'Пътните документи са електронни и се изпращат по имейл приблизително 14 дни преди отпътуване, при условие че пълното плащане и необходимите документи са получени.',
      'Ако заминавате по-рано, уведомете Amelia Travel, за да се опитаме да изпратим документите предварително.',
    ],
  },
  {
    heading: '19. Съгласие за използване на изображения',
    paragraphs: [
      'По време на туровете Amelia Travel може да прави снимки или видеозаписи.',
      'Използването на изображения на пътуващия за рекламни или маркетингови цели ще се извършва само при наличие на съответното необходимо съгласие.',
      'Съгласието за използване на изображения за рекламни цели е доброволно и отказът да бъде дадено не засяга правото Ви да участвате в пътуването.',
      'Ако не желаете да бъдете заснемани или изображенията Ви да бъдат използвани за рекламни цели, уведомете Amelia Travel или Вашия екскурзовод.',
    ],
  },
  {
    heading: '20. Летищни трансфери и багаж',
    paragraphs: [
      'Летищните трансфери са включени само в деня на пристигане и деня на заминаване, освен ако в програмата на конкретния тур не е посочено друго.',
      'Вие носите отговорност за багажа си, включително за пренасянето му до места за настаняване без хамалски услуги или асансьор.',
      'Amelia Travel не носи отговорност за повреден или изгубен багаж, освен когато отговорността произтича от приложимото законодателство или от действия/бездействия на Omaya Travel.',
      'Допълнителните ограничения за багажа ще бъдат съобщавани предварително, когато са известни.',
    ],
  },
  {
    heading: '21. Сувенири и артефакти',
    paragraphs: [
      'Правилата относно сувенирите и артефактите варират според държавата.',
      'Екскурзоводите ще Ви информират добросъвестно за известните ограничения, но Вие носите отговорност да спазвате местните закони и митническите изисквания.',
      'Omaya Travel не носи отговорност за проблеми, възникнали на границата вследствие на притежание или пренасяне на предмети от страна на пътуващия.',
    ],
  },
  {
    heading: '22. Пари, изисквани по време на тура',
    paragraphs: [
      'Въпреки че услугите обикновено са предплатени, може да Ви бъде поискана сума за непредвидени разходи в развиващи се туристически райони.',
      'Не предавайте пари в брой на местен персонал, който твърди, че работи за Amelia Travel, без предварително разрешение.',
      'При съмнение се свържете незабавно с предоставения номер за спешни случаи или с представител на Amelia Travel.',
    ],
  },
  {
    heading: '23. Отстраняване от тура',
    paragraphs: [
      'Amelia Travel може да отстрани клиент от тура, ако той застрашава други лица, проявява опасно или незаконно поведение или сериозно нарушава нормалното протичане на пътуването.',
      'В такива случаи допълнителните разходи за последващо пътуване или връщане са за сметка на пътника, доколкото това е допустимо съгласно приложимото законодателство.',
    ],
  },
  {
    heading: '24. Контакт преди тръгване',
    paragraphs: [
      'Трябва да предоставите валиден телефонен номер и имейл адрес, както и друга необходима информация за контакт.',
      'Документите няма да бъдат издадени, докато необходимата информация не бъде предоставена.',
      'Трябва незабавно да уведомите Amelia Travel за промени в данните за контакт.',
      'Amelia Travel не носи отговорност за пропуснати съобщения или документи, когато пътуващият не е уведомил Amelia Travel за промяна в предоставените данни за контакт.',
    ],
  },
  {
    heading: '25. Туристически агенти',
    paragraphs: [
      'При резервация чрез туристически агент Amelia Travel не носи финансова отговорност за плащания, които не са получени от Omaya Travel.',
      'Агентите трябва да гарантират правилното предаване на фактурите, програмите и Общите условия на клиентите.',
      'Агентите нямат право да приемат Общите условия от името на клиентите, но трябва да им осигурят ясен достъп до тях.',
      'Настоящите Общи условия не ограничават законовите права на пътуващия и законовите задължения и отговорност на Omaya Travel като туроператор.',
    ],
  },
];

const LEGAL_PAGES: Record<string, LegalPageContent> = {
  'omaya-travel-license': {
    title: 'Omaya Travel License & Registration Details',
    certificateImage: '/assets/images/legal/certificate-for-registration.webp',
    sections: [
      {
        paragraphs: [
          'This page confirms Omaya Travel license and official registration with the Bulgarian Ministry of Tourism under:',
        ],
        list: [
          'Registration No.: РК-01-8706',
          'Company: Omaya Travel EOOD',
          'EIK (Company ID): 208663654',
          'Registered address: Kardzhali, 61 Hristo Botev St.',
          'Date of issue: 19 March 2026',
        ],
      },
      {
        paragraphs: [
          'This registration confirms Omaya Travel’s compliance with the Bulgarian Tourism Act, including mandatory tour operator liability insurance and consumer protection requirements for all package travel bookings.',
          'You can verify this registration directly in Bulgaria’s National Tourist Register (Национален туристически регистър), maintained by the Ministry of Tourism.',
        ],
        links: [{ label: 'Bulgaria’s National Tourist Register', url: 'https://tourism.egov.bg/' }],
      },
    ],
  },
  termsconditions: {
    title: 'Omaya Travel Terms and Conditions',
    heroImage: '/assets/images/legal/terms-and-conditions.webp',
    sections: TERMS_SECTIONS,
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    heroImage: '/assets/images/legal/privacy-policy.webp',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'We respect your privacy and are committed to protecting your personal data.',
          'This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or book one of our small-group adventure tours.',
          'Omaya Travel is the data controller responsible for your personal data.',
        ],
      },
      {
        heading: '2. What Information We Collect',
        paragraphs: ['We may collect the following types of personal data:'],
        list: [
          'Identity Data: Name, surname',
          'Contact Data: Email address, phone number',
          'Booking Information: Tour preferences, travel dates, special requests',
          'Payment Information: Billing details (processed securely via third-party providers)',
          'Technical Data: IP address, browser type, device information',
          'Usage Data: Pages visited, time spent on our website',
        ],
      },
      {
        paragraphs: [
          'We also collect certain information automatically through cookies and similar technologies. For more details, please see our Cookie Policy.',
        ],
      },
      {
        heading: '3. How We Use Your Data',
        paragraphs: ['We use your personal data to:'],
        list: [
          'Process and manage your bookings',
          'Communicate with you regarding your tours',
          'Provide customer support',
          'Improve our website and services',
          'Send marketing communications (only with your consent)',
          'Comply with legal obligations',
        ],
      },
      {
        paragraphs: [
          'We also use cookies and similar technologies to analyze website traffic, personalize content, and improve user experience.',
        ],
      },
      {
        heading: '4. Legal Basis for Processing (GDPR)',
        paragraphs: [
          'We process your data under the General Data Protection Regulation (GDPR) based on:',
        ],
        list: [
          'Contract: To fulfill your booking',
          'Consent: For marketing communications, cookies, and tracking technologies',
          'Legal obligation: For accounting and regulatory compliance',
          'Legitimate interests: To improve our services and website',
        ],
      },
      {
        heading: '5. Third-Party Services',
        paragraphs: [
          'We use trusted third-party services to operate our business and improve our services, including:',
        ],
        list: [
          'Google Analytics – to understand how visitors use our website',
          'Meta Platforms, Inc. (Meta Ads / Facebook Pixel) – to measure and optimize advertising campaigns',
          'Email marketing providers (e.g. Mailchimp or similar) – to send newsletters and updates',
        ],
      },
      {
        paragraphs: [
          'These providers may process your data on our behalf and may use cookies or similar technologies.',
        ],
      },
      {
        heading: '6. Sharing Your Data',
        paragraphs: ['We may share your data with:'],
        list: [
          'Payment processors',
          'Tour guides and local partners (only when necessary for your trip)',
          'IT and website service providers',
          'Analytics and advertising partners (with your consent)',
          'Legal or regulatory authorities when required',
          'We never sell your personal data.',
        ],
      },
      {
        heading: '7. International Transfers',
        paragraphs: [
          'Some of our third-party providers (such as Google and Meta) may transfer your data outside the European Economic Area (EEA).',
          'In such cases, we ensure appropriate safeguards are in place, including the use of Standard Contractual Clauses approved by the European Commission.',
        ],
      },
      {
        heading: '8. Data Retention',
        paragraphs: ['We retain your personal data only as long as necessary:'],
        list: [
          'Booking and financial records: up to 5–7 years (to comply with legal and tax obligations)',
          'Marketing data: until you withdraw your consent or unsubscribe',
          'Analytics and cookie data: in accordance with our Cookie Policy',
        ],
      },
      {
        heading: '9. Your Rights',
        paragraphs: ['Under the General Data Protection Regulation (GDPR), you have the right to:'],
        list: [
          'Access your personal data',
          'Correct inaccurate data',
          'Request deletion (“right to be forgotten”)',
          'Restrict or object to processing',
          'Data portability',
          'Withdraw consent at any time (including for marketing and cookies)',
          'You also have the right to lodge a complaint with your local data protection authority.',
        ],
      },
      {
        heading: '10. Data Security',
        paragraphs: [
          'We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.',
        ],
      },
      {
        heading: '11. Third-Party Links',
        paragraphs: [
          'Our website may contain links to other websites. We are not responsible for their privacy practices.',
        ],
      },
      {
        heading: '12. Children’s Privacy',
        paragraphs: [
          'OOur services are intended for individuals aged 16 and over.',
          'We may collect and process personal data of individuals aged 16–17 for the purpose of booking and participating in our tours. Where required, we may request consent from a parent or legal guardian.',
          'We do not knowingly collect personal data from individuals under the age of 16. If we become aware that we have collected such data, we will take steps to delete it.',
          'If you believe that a child under 16 has provided us with personal data, please contact us.',
        ],
      },
      {
        heading: '13. Updates to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Changes will be posted on this page.',
        ],
      },
      {
        heading: '14. Contact Us',
        paragraphs: [
          'If you have any questions about this Privacy Policy or your data, please contact us:',
          'Company Name: Omaya Travel',
          'Email: info@omayatravel.com',
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    heroImage: '/assets/images/legal/cookies-bgr.webp',
    sections: [
      { paragraphs: ['Last updated: 28.03.2026'] },
      {
        heading: '1. Introduction',
        paragraphs: [
          'This Cookie Policy explains how Omaya Travel (“we”, “us”, or “our”) uses cookies and similar technologies when you visit our website.',
          'We are a tour operator based in Bulgaria, and we comply with applicable data protection laws, including the General Data Protection Regulation (GDPR).',
          'Cookies are small text files stored on your device (computer, tablet, or mobile) that help improve your browsing experience and enable key website functionality.',
        ],
      },
      {
        heading: '2. How We Use Cookies',
        paragraphs: ['We use cookies to:'],
        list: [
          'Measure the effectiveness of our marketing campaigns',
          'Enable essential website functionality, including tour bookings and secure payments',
          'Remember your preferences (such as language, currency, and selected tours)',
          'Analyze website traffic and improve performance',
          'Deliver personalized advertisements and travel offers',
        ],
      },
      {
        heading: '3. Types of Cookies We Use',
        paragraphs: [
          'a) Strictly Necessary Cookies',
          'These cookies are essential for the operation of our website. They support secure login and session handling, booking and checkout processes, and security and fraud prevention. These cookies cannot be disabled.',
          'b) Performance and Analytics Cookies',
          'We use analytics tools such as Google Analytics to understand how visitors use our website. These cookies collect information such as pages visited, time spent on the website, and traffic sources. This data is aggregated and helps us improve our services.',
          'c) Functional Cookies',
          'These cookies allow us to remember your preferences and provide enhanced features, such as language and region selection, currency preferences, and saved tours or user selections.',
          'd) Marketing and Advertising Cookies',
          'These cookies are used to show you relevant ads based on your interests. We use Google Ads, Facebook Ads, and Instagram Ads (via Meta platforms). These services may track your activity across websites to deliver personalized advertisements and measure campaign performance.',
        ],
      },
      {
        heading: '4. Third-Party Cookies',
        paragraphs: [
          'We work with trusted third-party providers who may place cookies on your device, including:',
        ],
        list: [
          'Google (Analytics and Ads)',
          'Meta platforms (Facebook and Instagram)',
          'Payment service providers (for secure transactions)',
          'These third parties may process your data according to their own privacy and cookie policies.',
        ],
      },
      {
        heading: '5. Online Booking and Payments',
        paragraphs: ['When you book a tour or make a payment on our website:'],
        list: [
          'Cookies help maintain your session during booking',
          'Temporary data may be stored to complete your reservation',
          'Payment providers may use cookies for fraud prevention and secure processing',
        ],
      },
      {
        heading: '6. Your Cookie Choices',
        paragraphs: ['Under EU law, you have control over your cookie preferences. You can:'],
        list: [
          'Accept or reject non-essential cookies via our cookie consent banner',
          'Change or withdraw your consent at any time',
          'Manage cookies through your browser settings',
          'Please note that disabling certain cookies may affect website functionality, especially booking and payment features.',
        ],
      },
      {
        heading: '7. Data Collected via Cookies',
        paragraphs: ['Cookies may collect:'],
        list: [
          'IP address',
          'Browser and device information',
          'Website activity and interactions',
          'Booking-related behavior',
          'We do not store sensitive personal data in cookies.',
        ],
      },
      {
        heading: '8. Legal Basis for Using Cookies',
        paragraphs: ['As a company based in Bulgaria (EU), we rely on:'],
        list: [
          'User consent for analytics and marketing cookies',
          'Legitimate interest for strictly necessary cookies',
          'You have the right to withdraw your consent at any time.',
        ],
      },
      {
        heading: '9. Updates to This Policy',
        paragraphs: [
          'We may update this Cookie Policy periodically to reflect legal or operational changes. Updates will be posted on this page with a revised “Last updated” date.',
        ],
      },
      {
        heading: 'Contact Us',
        paragraphs: [
          'If you have any questions about this Cookie Policy or how we use cookies, please contact us:',
          'info@omayatravel.com',
        ],
      },
    ],
  },
};

const AMELIA_STANDARD_FORM_SECTIONS: readonly LegalSection[] = [
  {
    paragraphs: [
      'Приложение № 1 към чл. 82, ал. 1 от Закона за туризма',
      'Стандартен формуляр за предоставяне на информация във връзка с договори за туристически пакети, когато е възможно използването на хиперлинкове',
      'Предлаганата комбинация от туристически услуги представлява туристически пакет по смисъла на Директива (ЕС) 2015/2302.',
      'Поради тази причина ще се ползвате от всички гарантирани в ЕС права, които се прилагат за туристически пакети.',
      '„Омая Травел“ ЕООД, ЕИК 208663654, регистрирано като туроператор и туристически агент с удостоверение за регистрация № РК-01-8706, със седалище и адрес на управление: гр. Кърджали, ул. „Христо Ботев“ № 61, телефон за контакт: 0892 905 526, носи пълна отговорност за точното изпълнение на туристическия пакет като цяло.',
      '„Амелия“ е подбранд на „Омая Травел“ ЕООД. Когато туристически пакет е предлаган, рекламиран или резервиран под марката „Амелия“, договорът за туристически пакет се сключва с „Омая Травел“ ЕООД, което е отговорният туроператор и носи отговорност за изпълнението на туристическия пакет.',
      'В съответствие със законовите изисквания „Омая Травел“ ЕООД е предприело необходимите защитни мерки за възстановяване на Вашите плащания и, ако в туристическия пакет е включен транспорт – за осигуряване на Вашето репатриране в случай на несъстоятелност.',
      'По-подробна информация за основните права по Директива (ЕС) 2015/2302 може да намерите на следния интернет адрес:',
    ],
    links: [
      {
        label: 'EUR-Lex – Директива (ЕС) 2015/2302',
        url: 'https://eur-lex.europa.eu/legal-content/BG/TXT/?uri=CELEX%3A32015L2302',
      },
    ],
  },
  {
    heading: 'Основни права съгласно Директива (ЕС) 2015/2302',
    list: [
      'Пътуващите ще получат цялата основна информация за туристическия пакет преди сключването на договора за туристически пакет.',
      'Винаги има поне един търговец, който отговаря за точното изпълнение на всички туристически услуги, включени в договора.',
      'На пътуващите се предоставя телефонен номер за спешни повиквания или данни на звено за контакт, чрез което могат да се свържат с туроператора или с туристическия агент.',
      'Пътуващите могат да прехвърлят туристическия пакет на друго лице след предизвестие в разумен срок и евентуално заплащане на допълнителните разходи.',
      'Цената на туристическия пакет може да се увеличава единствено при нарастване на специфични разходи (например цените на горивото), ако това е изрично предвидено в договора, и във всеки случай не по-късно от 20 дни преди започване на изпълнението на туристическия пакет. Когато увеличението на цената надвишава 8 на сто от цената на туристическия пакет, пътуващият може да прекрати договора. Когато туроператорът си е запазил правото да увеличава цената, пътуващият има право на намаление на цената, ако има намаление на съответните разходи.',
      'Пътуващите могат да прекратят договора, без да заплащат такса за прекратяване на договора, и да получат пълно възстановяване на всички плащания при съществена промяна на някой от основните елементи на туристическия пакет, различен от цената. Когато преди започване на изпълнението на туристическия пакет отговорният за туристическия пакет търговец анулира туристическия пакет, пътуващите имат право да получат обратно платените от тях суми и, ако е подходящо – съответното обезщетение.',
      'Преди започване на изпълнението на туристическия пакет пътуващите могат да прекратят договора, без да заплащат такса за прекратяване на договора, при настъпване на извънредни обстоятелства, като например сериозни проблеми със сигурността на мястото на дестинацията, които биха могли да засегнат туристическия пакет.',
      'Пътуващите могат по всяко време преди започване на изпълнението на туристическия пакет да прекратят договора срещу подходяща и обоснована такса за прекратяване на договора.',
      'Когато след започване на изпълнението на туристическия пакет съществени елементи от него не могат да бъдат предоставени съгласно договореното, на пътуващия трябва да бъдат предложени подходящи алтернативни услуги без допълнителни разходи. Пътуващите могат да прекратят договора, без да заплащат такса за прекратяването му, когато услугите не са предоставени в съответствие с договора и това съществено засяга изпълнението на туристическия пакет, а туроператорът не е отстранил проблема.',
      'Пътуващите имат право също и на намаление на цената и/или на обезщетение за претърпените вреди, в случай че туристическите услуги не са предоставени или са предоставени лошо.',
      'Туроператорът трябва да окаже съдействие, ако пътуващият изпадне в затруднение.',
      'Когато туроператорът изпадне в несъстоятелност, направените плащания ще бъдат възстановени. Когато туроператорът или туристическият агент изпадне в несъстоятелност след започване на изпълнението на туристическия пакет и в него е включен превоз, репатрирането на пътниците е осигурено.',
    ],
  },
  {
    heading: 'Защита при несъстоятелност',
    paragraphs: [
      '„Омая Травел“ ЕООД се ползва със защита при несъстоятелност чрез застраховка „Отговорност на туроператора“, сключена със:',
      'ЗАД „Евроинс“ АД',
      'Адрес: гр. София 1592, бул. „Христофор Колумб“ № 43',
      'Телефон: 0700 17 241',
      'E-mail: office@euroins.bg',
      'Застрахователна полица № 03700100006437',
      'Застраховател: „Омая Травел“ ЕООД',
      'ЕИК: 208663654',
      'Адрес: гр. Кърджали, ул. „Христо Ботев“ № 61',
      'Телефон: 0892 905 526',
      'Застраховката покрива отговорността на туроператора във връзка с дейността му като туроператор, включително отговорността за вреди на потребители по договори за организирано туристическо пътуване, както и при неплатежоспособност и несъстоятелност на туроператора, съгласно условията на застрахователната полица.',
      'Застрахователна сума (лимит на отговорност): 12 782,30 EUR / 25 000 BGN за едно събитие и в агрегат.',
      'Пътуващите могат да се обърнат към застрахователната компания или, когато е приложимо, към компетентния орган, ако изпълнението на услугите е отказано поради несъстоятелност на „Омая Травел“ ЕООД.',
    ],
  },
  {
    paragraphs: [
      'Комисия за защита на потребителите',
      'Адрес: гр. София, пл. „Славейков“ № 4А, ет. 3, 4 и 6',
      'Телефон: 02 933 05 65',
      'E-mail: info@kzp.bg',
      'Министерство на туризма',
      'Адрес: гр. София, ул. „Съборна“ № 1',
      'Телефон: 02 904 68 09',
      'E-mail: tourism@tourism.government.bg',
      'Директива (ЕС) 2015/2302, както е транспонирана в националното законодателство, можете да намерите като линк към Закона за туризма на интернет страницата на Министерството на туризма.',
    ],
    links: [
      {
        label: 'Закон за туризма – Министерство на туризма',
        url: 'https://www.tourism.government.bg/bg/kategorii/zakoni/zakon-za-turizma',
      },
    ],
  },
  {
    heading: 'Данни за туроператора',
    paragraphs: [
      '„Омая Травел“ ЕООД',
      'ЕИК: 208663654',
      'Удостоверение за регистрация като туроператор и туристически агент № РК-01-8706',
      'Седалище и адрес на управление: гр. Кърджали, ул. „Христо Ботев“ № 61',
      'Телефон: 0892 905 526',
      '„Амелия“ е подбранд на „Омая Травел“ ЕООД.',
    ],
  },
];

const AMELIA_COOKIE_POLICY_SECTIONS: readonly LegalSection[] = [
  {
    paragraphs: ['Последна актуализация: 28.03.2026 г.'],
  },
  {
    heading: '1. Въведение',
    paragraphs: [
      'Настоящата Политика за използване на бисквитки обяснява как Amelia Travel („Амелия“, „ние“, „нас“ или „нашият/нашата/нашето“) използва бисквитки и сходни технологии, когато посещавате нашия уебсайт.',
      'Amelia Travel („Амелия“) е подбранд на „Омая Травел“ ЕООД, ЕИК 208663654, регистрирано като туроператор и туристически агент с удостоверение за регистрация № РК-01-8706.',
      'Когато използвате уебсайта на Amelia Travel, резервациите и договорите за туристически пакети се сключват с „Омая Травел“ ЕООД, което е юридическият туроператор и носи отговорност за предоставяните туристически услуги.',
      'Ние сме туроператор, установен в България, и спазваме приложимото законодателство в областта на защитата на личните данни, включително Общия регламент относно защитата на данните (GDPR).',
      'Бисквитките са малки текстови файлове, които се съхраняват на Вашето устройство – компютър, таблет или мобилен телефон. Те помагат за подобряване на потребителското Ви изживяване и осигуряват основни функционалности на уебсайта.',
    ],
  },
  {
    heading: '2. Как използваме бисквитките',
    paragraphs: ['Използваме бисквитки, за да:'],
    list: [
      'измерваме ефективността на нашите маркетингови кампании;',
      'осигуряваме основни функционалности на уебсайта, включително резервации на туристически пакети и сигурни плащания;',
      'запомняме Вашите предпочитания, като език, валута и избрани туристически пакети;',
      'анализираме посещаемостта на уебсайта и подобряваме неговата работа;',
      'Ви предоставяме персонализирани реклами и предложения за пътувания.',
    ],
  },
  {
    heading: '3. Видове бисквитки, които използваме',
    paragraphs: [
      'а) Строго необходими бисквитки',
      'Тези бисквитки са необходими за функционирането на нашия уебсайт. Те подпомагат сигурното влизане и управлението на сесиите, процесите по резервация и плащане, както и мерките за сигурност и предотвратяване на измами.',
      'Тези бисквитки не могат да бъдат деактивирани чрез нашия инструмент за управление на съгласието, тъй като без тях уебсайтът и основните му функционалности не могат да работят правилно.',
      'б) Бисквитки за ефективност и анализ',
      'Използваме инструменти за анализ, като Google Analytics, за да разберем как посетителите използват нашия уебсайт.',
      'Тези бисквитки могат да събират информация, като посетени страници, време, прекарано на уебсайта, и източници на трафик. Данните се използват в обобщен вид и ни помагат да подобряваме нашите услуги и работата на уебсайта.',
      'в) Функционални бисквитки',
      'Тези бисквитки ни позволяват да запомняме Вашите предпочитания и да предоставяме подобрена функционалност, например избор на език и регион, предпочитана валута, както и запазени туристически пакети или други избрани от Вас опции.',
      'г) Маркетингови и рекламни бисквитки',
      'Тези бисквитки се използват, за да Ви показваме по-релевантни реклами въз основа на Вашите интереси.',
      'Използваме Google Ads, както и рекламни услуги на Meta, включително Facebook и Instagram.',
      'Тези услуги могат да проследяват Вашата активност на различни уебсайтове с цел предоставяне на персонализирани реклами и измерване на ефективността на рекламните кампании.',
    ],
  },
  {
    heading: '4. Бисквитки на трети страни',
    paragraphs: [
      'Работим с доверени доставчици на услуги, които могат да поставят бисквитки на Вашето устройство, включително:',
    ],
    list: [
      'Google – Google Analytics и Google Ads;',
      'Meta – Facebook и Instagram;',
      'доставчици на платежни услуги – за сигурно извършване на транзакции.',
    ],
  },
  {
    paragraphs: [
      'Тези трети страни могат да обработват Вашите данни съгласно собствените си политики за поверителност и използване на бисквитки.',
    ],
  },
  {
    heading: '5. Онлайн резервации и плащания',
    paragraphs: [
      'Когато резервирате туристически пакет или извършвате плащане чрез нашия уебсайт:',
    ],
    list: [
      'бисквитките помагат за поддържане на Вашата сесия по време на процеса на резервация;',
      'определена временна информация може да бъде съхранявана с цел завършване на резервацията;',
      'доставчиците на платежни услуги могат да използват бисквитки за предотвратяване на измами и за сигурно обработване на плащанията.',
    ],
  },
  {
    heading: '6. Вашият избор относно бисквитките',
    paragraphs: [
      'Съгласно приложимото законодателство на Европейския съюз Вие имате контрол върху предпочитанията си относно използването на бисквитки.',
      'Можете да:',
    ],
    list: [
      'приемете или отхвърлите бисквитките, които не са строго необходими, чрез нашия банер за управление на съгласието за бисквитки;',
      'промените или оттеглите даденото от Вас съгласие по всяко време;',
      'управлявате бисквитките чрез настройките на Вашия браузър.',
    ],
  },
  {
    paragraphs: [
      'Моля, имайте предвид, че деактивирането на определени бисквитки може да повлияе на функционалността на уебсайта, особено на функциите за резервация и плащане.',
    ],
  },
  {
    heading: '7. Данни, събирани чрез бисквитки',
    paragraphs: ['Бисквитките могат да събират информация, включително:'],
    list: [
      'IP адрес;',
      'информация за браузъра и устройството;',
      'информация за активността и взаимодействията Ви с уебсайта;',
      'информация относно поведението Ви при резервация.',
    ],
  },
  {
    paragraphs: ['Не съхраняваме чувствителни лични данни в бисквитките.'],
  },
  {
    heading: '8. Правно основание за използване на бисквитки',
    paragraphs: [
      'Като дружество, установено в България и Европейския съюз, ние използваме следните правни основания:',
    ],
    list: [
      'Вашето съгласие – за аналитични, функционални, маркетингови и рекламни бисквитки, когато съгласието се изисква от приложимото законодателство;',
      'легитимен интерес и/или необходимост за предоставяне на поисканата от Вас услуга – за строго необходимите бисквитки, доколкото това е приложимо.',
    ],
  },
  {
    paragraphs: ['Имате право да оттеглите даденото от Вас съгласие по всяко време.'],
  },
  {
    heading: '9. Актуализации на настоящата политика',
    paragraphs: [
      'Можем периодично да актуализираме настоящата Политика за използване на бисквитки, за да отразим промени в законодателството, използваните от нас технологии или начина, по който функционират нашите услуги.',
      'Всички актуализации ще бъдат публикувани на тази страница с посочена нова дата на „Последна актуализация“.',
    ],
  },
  {
    heading: 'Контакти',
    paragraphs: [
      'Ако имате въпроси относно настоящата Политика за използване на бисквитки или относно начина, по който използваме бисквитки и обработваме информация чрез тях, можете да се свържете с нас:',
      'Amelia Travel',
      'Подбранд на „Омая Травел“ ЕООД',
      'ЕИК: 208663654',
      'Удостоверение за регистрация като туроператор и туристически агент № РК-01-8706',
      'Адрес: гр. Кърджали, ул. „Христо Ботев“ № 61',
      'Телефон: 0892 905 526',
      'E-mail: info@ameliatravel.com',
    ],
  },
];

const AMELIA_LEGAL_PAGES: Partial<Record<string, LegalPageContent>> = {
  termsconditions: {
    title: 'Общи условия на Amelia Travel',
    heroImage: '/assets/images/legal/terms-and-conditions.webp',
    sections: AMELIA_TERMS_SECTIONS,
  },
  'standarten-formulyar': {
    title: 'Стандартен формуляр',
    heroImage: '/assets/images/legal/terms-and-conditions.webp',
    sections: AMELIA_STANDARD_FORM_SECTIONS,
  },
  'cookie-policy': {
    title: 'Политика за използване на бисквитки',
    heroImage: '/assets/images/legal/cookies-bgr.webp',
    sections: AMELIA_COOKIE_POLICY_SECTIONS,
  },
  'omaya-travel-license': {
    title: 'Лиценз и регистрация на Omaya Travel',
    certificateImage: '/assets/images/legal/certificate-for-registration.webp',
    sections: [
      {
        paragraphs: [
          'Тази страница потвърждава лиценза и официалната регистрация на Omaya Travel в Министерството на туризма на България:',
        ],
        list: [
          'Регистрационен №: РК-01-8706',
          'Дружество: Омая Травел ЕООД',
          'ЕИК: 208663654',
          'Седалище и адрес на управление: гр. Кърджали, ул. „Христо Ботев“ № 61',
          'Дата на издаване: 19 март 2026 г.',
        ],
      },
      {
        paragraphs: [
          'Тази регистрация потвърждава съответствието на Омая Травел със Закона за туризма на България, включително задължителната застраховка „Отговорност на туроператора“ и изискванията за защита на потребителите при всички резервации на туристически пакети.',
          'Можете да проверите тази регистрация директно в Националния туристически регистър, поддържан от Министерството на туризма.',
          '„Амелия“ е подбранд на „Омая Травел“ ЕООД, а туристическите пакети, предлагани под марката „Амелия“, се организират именно от Омая Травел ЕООД.',
        ],
        links: [{ label: 'Национален туристически регистър', url: 'https://tourism.egov.bg/' }],
      },
    ],
  },
};

@Component({
  selector: 'app-legal-page',
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPage {
  private readonly route = inject(ActivatedRoute);
  private readonly activeSite = inject(ActiveSite);

  protected readonly page = computed(() => {
    const slug = this.route.snapshot.data['pageSlug'] as string;

    if (this.activeSite.site().id === 'amelia') {
      const ameliaPage = AMELIA_LEGAL_PAGES[slug];

      if (ameliaPage) {
        return ameliaPage;
      }
    }

    return LEGAL_PAGES[slug] ?? LEGAL_PAGES['privacy-policy'];
  });
}
