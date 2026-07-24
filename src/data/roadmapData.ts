import { WeekData } from '../types';

export const ROADMAP_TITLE = "Roadmap Exodia لتعلّم Adobe After Effects خلال شهر";
export const BRAND_NAME = "Exodia";
export const BRAND_SUBTITLE = "خارطة طريق احترافية منظمة للمبتدئين";
export const SUPPORT_WHATSAPP = "https://wa.me/201109054862";
export const SUPPORT_PHONE = "+201109054862";

export const WEEKS_DATA: WeekData[] = [
  {
    number: 1,
    title: "أساسيات البرنامج",
    subtitle: "فهم بيئة العمل والتحريك الأساسي والـ Keyframes",
    description: "في هذا الأسبوع يبدأ المتعلم بفهم أساسيات برنامج After Effects: الواجهة، التايم لاين، الطبقات، التحريك الأساسي، والـ Keyframes، مع فهم أساسيات الموشن والتكوين البصري.",
    objective: "فهم واجهة البرنامج والأدوات الرئيسية + إتقان مبادئ التكوين البصري",
    instructions: [
      "ابدأ بالكورس الأساسي أولاً لفهم الواجهة والتايم لاين بشكل كامل",
      "بعد إنهاء الكورس، شاهد فيديوهين التكوين والموشن لتطوير الرؤية البصرية"
    ],
    resources: [
      {
        id: "w1-r1",
        title: "كورس أساسيات After Effects – عمرو عطالله",
        description: "كورس متكامل للمبتدئين يغطّي واجهة البرنامج والتايم لاين وأنواع الطبقات وكيفية البداية الصحيحة.",
        url: "https://www.youtube.com/watch?v=XvsRsq5fx9w&list=PLg9ps5Gu0MiANa46_HgzOibsysnBZRtPx",
        videoId: "XvsRsq5fx9w",
        type: "course",
        channelName: "عمرو عطالله",
        badge: "كورس أساسي",
        isHighlighted: true
      },
      {
        id: "w1-r2",
        title: "أساسيات الموشن والتكوين – الجزء الأول",
        description: "شرح مبسط لمبادئ التكوين والموشن جرافيكس وضبط الحركة البصرية.",
        url: "https://www.youtube.com/watch?v=1NA2rj9deZI",
        videoId: "1NA2rj9deZI",
        type: "video",
        channelName: "عبدالرحمن إبراهيم",
        badge: "أساسيات التكوين"
      },
      {
        id: "w1-r3",
        title: "أساسيات الموشن والتكوين – الجزء الثاني",
        description: "استكمال لمفاهيم الحركة وتوزيع العناصر بأسلوب مريح للعين.",
        url: "https://www.youtube.com/watch?v=VtIQI_bz-iQ&list=PLs55sU36mOn90roGLo7eLUEXNIGdNwID7",
        videoId: "VtIQI_bz-iQ",
        type: "playlist",
        channelName: "عبدالرحمن إبراهيم",
        badge: "أساسيات التكوين"
      }
    ],
    keyTakeaways: ["الواجهة والـ Layout", "التايم لاين والطبقات", "مفهوم الـ Keyframe", "قواعد التكوين البصري"]
  },
  {
    number: 2,
    title: "التحريك والتكوين",
    subtitle: "التطبيق العملي المستمر وإتقان تقنيات التحريك",
    description: "في هذا الأسبوع يبدأ التطبيق الفعلي على التحريكات، مع التركيز على تنفيذ أمثلة عملية بشكل مستمر لترسيخ المفاهيم المكتسبة.",
    objective: "التطبيق المستمر، إتقان السرعات والمُنحنيات (Graph Editor)، والتعوّد الكامل على أدوات البرنامج",
    instructions: [
      "اعتمد على قناة Hossam Works لتعلّم معظم أنواع التحريكات والتقنيات العملية",
      "ركّز بشكل خاص على أرفع 3 فيديوهات موصى بها في القناة",
      "استخدم قناة Fares Toson كمصدر إضافي للشروح التفصيلية والعميقة"
    ],
    resources: [
      {
        id: "w2-r1",
        title: "قناة Hossam Works – المصدر الرئيسي للتحريك",
        description: "القناة الأساسية لتعلّم معظم تطبيقات التحريك الاحترافية في الأفتر إيفكتس.",
        url: "https://www.youtube.com/watch?v=VtIQI_bz-iQ&list=PLs55sU36mOn90roGLo7eLUEXNIGdNwID7",
        videoId: "VtIQI_bz-iQ",
        type: "channel",
        channelName: "Hossam Works",
        badge: "القناة الرئيسية",
        isHighlighted: true
      },
      {
        id: "w2-r2",
        title: "تطبيق تحريك عملي احترافي - الفيديو الأول",
        description: "تطبيق عملي مركز لتطوير مهارات التحريك والتحكم بالسرعة.",
        url: "https://www.youtube.com/watch?v=nVw5aKNJg70&t=416s",
        videoId: "nVw5aKNJg70",
        type: "video",
        channelName: "Hossam Works",
        badge: "أهمهم",
        isHighlighted: true
      },
      {
        id: "w2-r3",
        title: "تقنيات تحريك متقدمة - الفيديو الثاني",
        description: "دروس عمليّة لبناء أشكال حركية سلسة ومريحة للعين.",
        url: "https://www.youtube.com/watch?v=4V3iq48R6wU",
        videoId: "4V3iq48R6wU",
        type: "video",
        channelName: "Hossam Works",
        badge: "أهمهم",
        isHighlighted: true
      },
      {
        id: "w2-r4",
        title: "إتقان الكي فريم والغراف إيديتور - الفيديو الثالث",
        description: "شرح عملي عميق لمُنحنيات السرعة والسلاسة في الحركة.",
        url: "https://www.youtube.com/watch?v=8Gu8J9-6_yY",
        videoId: "8Gu8J9-6_yY",
        type: "video",
        channelName: "Hossam Works",
        badge: "أهمهم",
        isHighlighted: true
      },
      {
        id: "w2-r5",
        title: "قناة Fares Toson – مصدر إضافي تفصيلي",
        description: "قناة ممتازة تقدم شروحات مفصلة ودقيقة لتقنيات الموشن جرافيكس.",
        url: "https://www.youtube.com/@FaresToson.1",
        type: "channel",
        channelName: "Fares Toson",
        badge: "مصدر إضافي تفصيلي"
      }
    ],
    keyTakeaways: ["Graph Editor & Speed Graph", "مفهوم الـ Easing (Easy Ease)", "تطبيقات حركية متنوعة", "التطبيق اليومي المكثف"]
  },
  {
    number: 3,
    title: "رفع المستوى وربط أكثر من مشهد",
    subtitle: "تكوين مشروع كامل والانتقال بين اللقطات بمرونة",
    description: "في هذا الأسبوع لن يكتفي المتعلم ببناء مشهد واحد فقط، بل يبدأ في ربط أكثر من مشهد مع بعض ليكوّن مشروعاً كاملاً بشكل أبسط وأكثر تنظيمًا.",
    objective: "ربط اللقطات المتعددة، تكوين مشروع موشن كامل، وفهم التسلسل البصري والانتقالات",
    instructions: [
      "تابع الفيديوهات الستة التالية بالترتيب المُحدد تماماً",
      "طبق كل مشهد فور الانتهاء منه ثم قم بربطه بالمشهد السابق لتكوين فيديو متكامل"
    ],
    resources: [
      {
        id: "w3-r1",
        title: "المشهد الأول: بداية الربط وبناء التأسيس البصري",
        description: "المرحلة الأولى في بناء المشروع الكامل ووضع الهيكل الأساسي للتحريك.",
        url: "https://www.youtube.com/watch?v=HzgH1Di5fF4",
        videoId: "HzgH1Di5fF4",
        type: "video",
        channelName: "سلسلة ربط المشاهد",
        badge: "الخطوة 1"
      },
      {
        id: "w3-r2",
        title: "المشهد الثاني: تصميم العناصر والانتقال السلس",
        description: "تطبيق المشهد الثاني مع التركيز على بسط العناصر ونظافة الانتقال.",
        url: "https://www.youtube.com/watch?v=UYTJ_NasV2E",
        videoId: "UYTJ_NasV2E",
        type: "video",
        channelName: "سلسلة ربط المشاهد",
        badge: "الخطوة 2"
      },
      {
        id: "w3-r3",
        title: "المشهد الثالث: التحكم في التوقيت والـ Transitions",
        description: "تنسيق الانتقالات الحركية بين المشاهد لضمان استمرارية بصرية مشوقة.",
        url: "https://www.youtube.com/watch?v=gncP9GCNpw8",
        videoId: "gncP9GCNpw8",
        type: "video",
        channelName: "سلسلة ربط المشاهد",
        badge: "الخطوة 3"
      },
      {
        id: "w3-r4",
        title: "المشهد الرابع: ربط المكونات والطبقات المتقدمة",
        description: "إضافة التفاصيل والطبقات المساندة لرفع جودة المشهد الإجمالية.",
        url: "https://www.youtube.com/watch?v=pK3T51WfhII",
        videoId: "pK3T51WfhII",
        type: "video",
        channelName: "سلسلة ربط المشاهد",
        badge: "الخطوة 4"
      },
      {
        id: "w3-r5",
        title: "المشهد الخامس: الإخراج وإعادة الهيكلة البصرية",
        description: "مراجعة تسلسل المشاهد وضبط إيقاع الحركة لضمان الاتساق.",
        url: "https://www.youtube.com/watch?v=-H6URrLMESs",
        videoId: "-H6URrLMESs",
        type: "video",
        channelName: "سلسلة ربط المشاهد",
        badge: "الخطوة 5"
      },
      {
        id: "w3-r6",
        title: "المشهد السادس: اللمسات النهائية وإخراج المشروع المتكامل",
        description: "الإنهاء الكامل للمشروع وتنسيق الألوان وتصدير الفيديو بلمسة احترافية.",
        url: "https://www.youtube.com/watch?v=ObmdRUpfJb8&t=16s&pp=0gcJCaMLAYcqIYzv",
        videoId: "ObmdRUpfJb8",
        type: "video",
        channelName: "سلسلة ربط المشاهد",
        badge: "الخطوة 6 (المشروع النهائي)",
        isHighlighted: true
      }
    ],
    keyTakeaways: ["Scene Transitions", "Visual Flow & Timing", "تكوين سيناريو متكامل", "إدارة مشاريع Multi-Scene"]
  },
  {
    number: 4,
    title: "مرحلة الاحتراف والتطبيق على المحتوى الأجنبي",
    subtitle: "رفع الكفاءة، الابتكار، والتطبيق اليومي على دروس عالمية",
    description: "في هذا الأسبوع يبدأ المتعلم في رفع المستوى أكثر، والتعامل مع تاتوريالات أجنبية ومحتوى أكثر قوة واحترافية للوصول لمستوى العمالقة.",
    objective: "التطبيق اليومي المستمر، توسيع المدارك الإبداعية، واكتساب مهارات متقدمة من تجارب عالمية",
    instructions: [
      "هذه المرحلة مخصصة لرفع المستوى والوصول للجاهزية لسوق العمل",
      "شاهد وطبّق على تاتوريال أجنبي واحد يومياً على الأقل",
      "كوّن لنفسك مكتبتك المرجعية القائمة على المصادر العربية والأجنبية"
    ],
    resources: [
      {
        id: "w4-r1",
        title: "قناة Vane Motion – احتراف التحريك العالمي",
        description: "قناة أجنبية استثنائية لتعلم أحدث أساليب الموشن جرافيكس والتأثيرات البصرية الحديثة.",
        url: "https://www.youtube.com/@vanemotion",
        type: "channel",
        channelName: "Vane Motion",
        badge: "مصدر أجنبي احترافي",
        isHighlighted: true
      },
      {
        id: "w4-r2",
        title: "قناة Tarık | Video Editor – المونتاج والتحريك المتقدم",
        description: "قناة متخصصة في التأثيرات البصرية، تعديل الفيديو المتقدم، والتقنيات الحركية العالية.",
        url: "https://www.youtube.com/@tarikvideoeditor",
        type: "channel",
        channelName: "Tarık | Video Editor",
        badge: "مصدر أجنبي احترافي",
        isHighlighted: true
      }
    ],
    keyTakeaways: ["World-class Motion Techniques", "Daily Practice Routines", "الربط بين المصادر العربية والأجنبية", "بناء البورتفوليو الشخصي"]
  }
];

export const SUMMARY_LISTS = {
  arabic: {
    title: "القائمة العربية الموصى بها للوصول لمستوى احترافي",
    sources: [
      "كورس عمرو عطالله (الأساسيات)",
      "قناة Hossam Works (التحريك والـ Graph Editor)",
      "قناة Fares Toson (الشرح التفصيلي العميق)",
      "سلسلة الربط للأسبوع الثالث (تكوين مشروع كامل)"
    ]
  },
  foreign: {
    title: "القائمة الأجنبية لمرحلة الاحتراف والتطوير المستمر",
    sources: [
      "Vane Motion (تقنيات موشن عالمية حديثة)",
      "Tarık | Video Editor (تأثيرات بصرية ومونتاج احترافي)"
    ]
  }
};

export const FINAL_ADVICE = "استمر في التطبيق يومياً، وركّز على التنفيذ والـ Practice أكثر من المتابعة المجردة. الممارسة العملية هي السِّر الحقيقي للوصول للاحتراف!";
