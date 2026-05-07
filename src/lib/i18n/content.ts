import type { Metadata } from 'next';

export type Locale = 'en' | 'ar';
export type RouteKey = 'home' | 'about' | 'services' | 'howItWorks' | 'contact';

export const SITE_URL = 'https://www.easybrandlab.xyz';

export const routePaths: Record<RouteKey, { en: string; ar: string }> = {
  home: { en: '/', ar: '/ar' },
  about: { en: '/about', ar: '/ar/about' },
  services: { en: '/services', ar: '/ar/services' },
  howItWorks: { en: '/how-it-works', ar: '/ar/how-it-works' },
  contact: { en: '/contact', ar: '/ar/contact' },
};

export const routeKeys: RouteKey[] = ['home', 'about', 'services', 'howItWorks', 'contact'];

const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

export const getLocalizedPath = (route: RouteKey, locale: Locale) => routePaths[route][locale];
export const getAbsoluteUrl = (route: RouteKey, locale: Locale) => absoluteUrl(getLocalizedPath(route, locale));

export const getRouteKeyFromPath = (pathname: string): RouteKey => {
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  return (
    routeKeys.find((key) => routePaths[key].en === cleanPath || routePaths[key].ar === cleanPath) || 'home'
  );
};

export const getLocaleFromPath = (pathname: string): Locale => (pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en');

const metaCopy: Record<Locale, Record<RouteKey, { title: string; description: string }>> = {
  en: {
    home: {
      title: 'EasyBrandLabs - Conversion-Focused Websites & Growth Systems',
      description:
        'We build high-converting websites, landing pages, and automation systems that help businesses generate leads and scale without complexity.',
    },
    about: {
      title: 'About - EasyBrandLabs',
      description: 'Learn about EasyBrandLabs and how we help businesses grow with high-quality digital solutions.',
    },
    services: {
      title: 'Services - EasyBrandLabs',
      description: 'Web development, branding, automation, SEO, and growth marketing services for ambitious brands.',
    },
    howItWorks: {
      title: 'How It Works - EasyBrandLabs',
      description: 'See the simple process we use to turn ideas into polished digital products and growth systems.',
    },
    contact: {
      title: 'Contact - EasyBrandLabs',
      description: 'Contact EasyBrandLabs to discuss your website, branding, automation, or growth marketing project.',
    },
  },
  ar: {
    home: {
      title: 'EasyBrandLabs - مواقع وخدمات رقمية تساعدك تكبر شغلك',
      description:
        'نصمم مواقع احترافية، صفحات هبوط، وهوية وأنظمة أتمتة تساعد الشركات وأصحاب المشاريع في السعودية والخليج تجيب عملاء وتكبر بسهولة.',
    },
    about: {
      title: 'عن EasyBrandLabs',
      description: 'تعرّف على EasyBrandLabs وكيف نساعد أصحاب المشاريع والشركات يطلقون حضور رقمي مرتب وعملي.',
    },
    services: {
      title: 'خدماتنا - EasyBrandLabs',
      description: 'خدمات مواقع، هوية، أتمتة، SEO وتسويق نمو بلغة واضحة وتنفيذ احترافي يناسب الشركات وأصحاب المشاريع.',
    },
    howItWorks: {
      title: 'كيف نعمل - EasyBrandLabs',
      description: 'خطوات بسيطة وواضحة من الفكرة إلى الإطلاق، بدون تعقيد تقني أو متابعة مرهقة.',
    },
    contact: {
      title: 'تواصل معنا - EasyBrandLabs',
      description: 'تواصل معنا لنفهم مشروعك ونقترح عليك أفضل طريقة لتطوير موقعك أو هويتك أو نظامك الرقمي.',
    },
  },
};

export const getPageMetadata = (route: RouteKey, locale: Locale): Metadata => {
  const copy = metaCopy[locale][route];
  const canonical = getAbsoluteUrl(route, locale);
  const englishUrl = getAbsoluteUrl(route, 'en');
  const arabicUrl = getAbsoluteUrl(route, 'ar');

  return {
    title: copy.title,
    description: copy.description,
    keywords:
      locale === 'ar'
        ? [
            'تصميم مواقع للشركات',
            'تطوير مواقع عربية',
            'صفحات هبوط',
            'جذب العملاء',
            'أتمتة التسويق',
            'خدمات رقمية للشركات',
          ]
        : [
            'web design for businesses',
            'landing pages',
            'lead generation',
            'conversion optimization',
            'marketing automation',
            'digital services for businesses',
          ],
    alternates: {
      canonical,
      languages: {
        en: englishUrl,
        ar: arabicUrl,
        'x-default': englishUrl,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonical,
      siteName: 'EasyBrandLabs',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? ['en_US'] : ['ar_SA'],
      type: 'website',
    },
  };
};

export const ui = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      services: 'Services',
      howItWorks: 'How It Works',
      about: 'About',
      contact: 'Contact',
      cta: 'Get Started',
      menu: 'Toggle menu',
      switchTo: 'AR',
      switchLabel: 'View Arabic version',
    },
    footer: {
      tagline: 'Digital services for brands that want to scale without hiring.',
      groups: {
        Product: [
          { label: 'Services', route: 'services' as RouteKey },
          { label: 'How It Works', route: 'howItWorks' as RouteKey },
        ],
        Company: [
          { label: 'About', route: 'about' as RouteKey },
          { label: 'Contact', route: 'contact' as RouteKey },
          { label: 'Blog', href: '#' },
        ],
        Legal: [
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
        ],
      },
      rights: 'All rights reserved.',
    },
    contactForm: {
      name: 'Full Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      messagePlaceholder: 'Tell us about your project...',
      required: 'Please fill in all fields',
      invalidEmail: 'Please enter a valid email',
      error: 'Something went wrong. Please try again.',
      success: "Thanks for reaching out! We'll be in touch soon.",
      sending: 'Sending...',
      submit: 'Send Message',
    },
    serviceShowcase: {
      outcome: 'Outcome',
      viewDetails: 'View Details',
      hideDetails: 'Hide Details',
      requestQuote: 'Request Quote',
      fallback: 'A focused digital service built around your business goals.',
      turnaround: 'Turnaround',
      pricing: 'Pricing',
      customQuote: 'Custom quote',
      glance: 'What you get (at a glance)',
      deliver: 'What You Actually Deliver to Your Client',
      processFlow: 'Process flow',
      process: ['1. Discovery and goals', '2. Strategy, design, and build', '3. QA and revisions', '4. Launch and handoff'],
      outcomeTitle: 'Outcome',
      outcomeBody: 'We deliver a production-ready solution for your business - no internal dev team needed.',
      customPricing: 'Custom pricing based on business needs',
      doneForYou: 'Behind the Scenes (Done-for-You)',
      included: [
        'Project management and updates',
        'Design, development, and QA',
        'Branding applied to deliverables',
        'Revisions included',
        'Final handoff with documentation',
      ],
    },
    calendly: {
      schedule: 'Schedule now ->',
    },
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      howItWorks: 'كيف نعمل',
      about: 'من نحن',
      contact: 'تواصل',
      cta: 'ابدأ مشروعك',
      menu: 'فتح أو إغلاق القائمة',
      switchTo: 'EN',
      switchLabel: 'عرض النسخة الإنجليزية',
    },
    footer: {
      tagline: 'خدمات رقمية مرتبة للشركات وأصحاب المشاريع اللي يبغون يكبرون بدون توظيف فريق كامل.',
      groups: {
        'الخدمات': [
          { label: 'الخدمات', route: 'services' as RouteKey },
          { label: 'كيف نعمل', route: 'howItWorks' as RouteKey },
        ],
        'الشركة': [
          { label: 'من نحن', route: 'about' as RouteKey },
          { label: 'تواصل معنا', route: 'contact' as RouteKey },
          { label: 'المدونة', href: '#' },
        ],
        'القانونية': [
          { label: 'سياسة الخصوصية', href: '#' },
          { label: 'شروط الخدمة', href: '#' },
        ],
      },
      rights: 'كل الحقوق محفوظة.',
    },
    contactForm: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      namePlaceholder: 'محمد أحمد',
      emailPlaceholder: 'name@example.com',
      messagePlaceholder: 'اكتب لنا عن مشروعك أو الخدمة اللي تحتاجها...',
      required: 'عبّئ كل الحقول عشان نقدر نساعدك.',
      invalidEmail: 'تأكد من كتابة بريد إلكتروني صحيح.',
      error: 'صار خطأ أثناء الإرسال. جرّب مرة ثانية.',
      success: 'وصلتنا رسالتك. بنرجع لك قريبا.',
      sending: 'جاري الإرسال...',
      submit: 'أرسل الرسالة',
    },
    serviceShowcase: {
      outcome: 'وش النتيجة؟',
      viewDetails: 'شوف التفاصيل',
      hideDetails: 'إخفاء التفاصيل',
      requestQuote: 'اطلب تسعيرة',
      fallback: 'خدمة رقمية واضحة نبنيها حول هدف مشروعك واحتياج عملائك.',
      turnaround: 'المدة المتوقعة',
      pricing: 'التكلفة',
      customQuote: 'حسب احتياجك',
      glance: 'وش يشملك؟',
      deliver: 'وش تستلم بالضبط؟',
      processFlow: 'طريقة التنفيذ',
      process: ['١. نفهم احتياجك', '٢. نجهز التصميم والتنفيذ', '٣. نراجع ونعدل', '٤. نسلمك الملفات جاهزة'],
      outcomeTitle: 'النتيجة النهائية',
      outcomeBody: 'نجهز لك حل مرتب وجاهز للإطلاق لمشروعك، بدون ما تحتاج فريق تقني داخلي.',
      customPricing: 'التسعير يكون حسب حجم المشروع واحتياجه',
      doneForYou: 'اللي نتولاه عنك',
      included: [
        'تنظيم المشروع وإرسال التحديثات',
        'التصميم والتطوير والمراجعة',
        'تطبيق هويتك على المخرجات',
        'تعديلات واضحة ضمن النطاق',
        'تسليم نهائي بطريقة سهلة وواضحة',
      ],
    },
    calendly: {
      schedule: 'احجز مكالمة الآن',
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const pageContent = {
  en: {
    home: {
      hero: {
        title: ['Grow Your Business', 'Without Hiring a Full Team'],
        body: 'Web development, branding, automation, and marketing systems that help your business look sharper, generate leads, and grow without extra overhead.',
        primary: 'Start Scaling Now',
        secondary: 'See How It Works',
      },
      servicesTitle: 'Our Services',
      servicesBody: 'Everything your business needs to build a stronger digital presence without hiring developers or designers.',
      services: [
        { title: 'Web Development', description: 'Custom, responsive websites and web applications', icon: '🚀' },
        { title: 'Branding & Design', description: 'Logo design, brand identity, and visual assets', icon: '🎨' },
        { title: 'Automation Systems', description: 'Workflow automation and CRM integration', icon: '⚙️' },
        { title: 'Marketing Support', description: 'SEO, content, and digital marketing strategies', icon: '📊' },
      ],
      howTitle: 'How It Works',
      howBody: 'A simple, proven process that lets you focus on sales.',
      steps: [
        { number: '1', title: 'Share Your Goals', description: 'Tell us what you want your website, brand, or system to achieve' },
        { number: '2', title: 'We Build', description: 'Our team designs and delivers the digital solution your business needs' },
        { number: '3', title: 'You Launch', description: 'You get polished work that is ready to use, promote, and grow from' },
      ],
      testimonialsTitle: 'What You Will Say After Working With Us',
      testimonialsBody: 'Business owners and entrepreneurs trust us to improve their digital presence.',
      testimonials: [
        { name: 'Your Name', role: 'Business Owner', content: 'EasyBrandLabs helped us launch a cleaner website and generate better inquiries.', avatar: '👩‍💼' },
        { name: 'Your Name', role: 'Founder', content: 'The process was clear, the design looked premium, and we finally had a site we were proud to share.', avatar: '👨‍💼' },
        { name: 'Your Name', role: 'Consultant', content: 'They made the technical side simple and gave us exactly what we needed to move faster.', avatar: '👩‍💻' },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { question: 'How does working with EasyBrandLabs work?', answer: 'You focus on running your business while we build the systems that bring you leads. From websites to funnels and automation, everything is done for you with a clear focus on real results.' },
        { question: 'What quality standard can I expect?', answer: 'We deliver production-ready work that is reviewed for clarity, performance, and usability before handoff.' },
        { question: 'Can I customize the services?', answer: 'Absolutely. We tailor services to your specific business needs. Custom requirements and integrations are our specialty.' },
        { question: 'How long does a typical project take?', answer: "Timelines vary based on scope. A simple website: 2-4 weeks. Branding package: 1-3 weeks. Automation: 3-8 weeks. We'll provide exact estimates upfront." },
        { question: 'How do we communicate during the project?', answer: 'We communicate directly with you or your team, keep updates clear, and make sure you know what is happening at each step.' },
        { question: 'What if revisions are needed?', answer: 'Revisions are included within the agreed scope. We handle them promptly so the final work fits the brief.' },
      ],
      ctaTitle: 'Ready to Scale?',
      ctaBody: 'See which of our growth services fits you best.',
      cta: 'Get Started Today',
    },
    about: {
      heroTitle: 'About EasyBrandLabs',
      heroBody: 'A small, focused studio dedicated to building high-quality digital products that help businesses grow.',
      storyTitle: 'Our Story',
      story: [
        "EasyBrandLabs started with a simple idea: building high-quality digital solutions shouldn't be complicated, slow, or overpriced.",
        'Instead of adding layers of management and overhead, we keep things lean and focused. Every project gets direct attention, faster execution, and a higher level of care.',
        'The goal is simple: deliver work that actually helps businesses grow, not just look good.',
      ],
      badge: 'Built for Quality & Speed',
      approachTitle: 'Our Approach',
      values: [
        { title: 'Quality Over Quantity', description: 'Every project is handled with attention to detail and built to a high standard.', icon: '✨' },
        { title: 'Clear Communication', description: "No confusion, no delays. You always know what's happening.", icon: '💬' },
        { title: 'Built to Perform', description: 'Designs are not just polished. They are built to convert and grow your business.', icon: '📈' },
        { title: 'Fast & Efficient', description: 'Lean workflow means faster delivery without sacrificing quality.', icon: '⚡' },
        { title: 'Modern Tech', description: 'Using current tools to build scalable and reliable solutions.', icon: '🛠️' },
        { title: 'Long-Term Focus', description: "The goal isn't just launch. It is helping your business grow over time.", icon: '🤝' },
      ],
      whyTitle: 'Why Work With Us',
      columns: [
        {
          title: 'Focused & Dedicated',
          body: "You're not passed between departments or account managers. You get direct attention and a streamlined experience.",
          points: ['Direct communication', 'Faster decision making', 'More attention to detail'],
        },
        {
          title: 'Modern & Efficient Process',
          body: 'Built with a lean workflow that prioritizes speed, clarity, and results.',
          points: ['Clear timelines and deliverables', 'Structured development process', 'Consistent updates and feedback'],
        },
      ],
      stats: [
        ['Early', 'Stage Studio'],
        ['High', 'Attention to Detail'],
        ['Fast', 'Execution'],
        ['Focused', 'On Results'],
      ],
      ctaTitle: "Let's Build Something That Works",
      ctaBody: "If you're looking for quality work without the usual complexity, let's talk.",
      cta: 'Get Started',
    },
    howItWorks: {
      heroTitle: 'How It Works',
      heroBody: 'A simple process to turn your ideas into powerful digital products - without the stress.',
      steps: [
        { number: '1', title: 'Share Your Vision', description: "Tell us about your business, your goals, and what you want to build. We'll turn your ideas into a clear plan.", details: ['Simple consultation to understand your needs', 'Clear scope, timeline, and deliverables', 'Tailored solution for your business', 'No technical knowledge required'] },
        { number: '2', title: 'We Bring It to Life', description: 'Our team designs and builds your project while keeping you updated every step of the way.', details: ['Modern, high-converting design', 'Full development handled by experts', 'Regular progress updates', 'Built for performance and scalability'] },
        { number: '3', title: 'Refine & Launch', description: "You review everything, request any changes, and we launch when you're ready.", details: ['Revisions to match your expectations', 'Smooth deployment and setup', 'Fully optimized and tested', 'Launch support included'] },
        { number: '4', title: 'Scale & Grow', description: 'We continue supporting you after launch so your business keeps improving and growing.', details: ['Ongoing support available', 'Future upgrades and features', 'Performance monitoring', 'Long-term partnership'] },
      ],
      timelineTitle: 'Project Timeline',
      timelineBody: 'A typical timeline for delivering your project efficiently.',
      timeline: [
        { phase: 'Discovery', duration: '2-3 days', description: 'Understanding your goals and planning' },
        { phase: 'Design', duration: '1-2 weeks', description: 'Creating visuals and user experience' },
        { phase: 'Development', duration: '2-6 weeks', description: 'Building your product' },
        { phase: 'Testing & QA', duration: '3-5 days', description: 'Ensuring everything works perfectly' },
        { phase: 'Launch', duration: '2-3 days', description: 'Going live and final setup' },
      ],
      whyTitle: 'Why Choose EasyBrandLabs?',
      reasons: [
        { title: 'High-Quality Results', description: 'We deliver professional, reliable solutions you can trust.' },
        { title: 'Clear Communication', description: "You always know what's happening at every stage." },
        { title: 'Built to Scale', description: 'Your product is designed to grow with your business.' },
        { title: 'Fast Delivery', description: 'We move quickly without compromising quality.' },
        { title: 'Great Value', description: 'High-end results without bloated project costs.' },
        { title: 'Ongoing Support', description: "We're here even after launch to help you grow." },
      ],
      ctaTitle: 'Ready to Get Started?',
      ctaBody: "Let's build something that grows your business.",
      cta: 'Get Started',
    },
    contact: {
      heroTitle: 'Get In Touch',
      heroBody: 'Let us discuss how EasyBrandLabs can help your brand scale.',
      formTitle: 'Send us a message',
      infoTitle: 'Other ways to reach us',
      email: 'Email',
      phone: 'Phone',
      schedule: 'Schedule a Call',
      scheduleBody: 'Book a 30-minute call with our team to discuss your needs.',
      hours: 'Business Hours',
      hoursBody: 'Monday - Friday: 9am - 6pm KSA\nSaturday - Sunday: Closed',
      quick: 'Quick Response',
      quickBody: 'We aim to respond to all inquiries within 2 business hours during business hours.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { question: 'How long does it take to get a response?', answer: 'We respond to all inquiries within 2 business hours during business hours. Urgent matters can call us directly.' },
        { question: 'Is there a free consultation?', answer: 'Absolutely. We offer a free 30-minute consultation to discuss your needs and how we can help your brand scale.' },
        { question: 'Can I book an immediate call?', answer: 'Yes, use our scheduling link to find a time that works for you. We have availability throughout the week.' },
        { question: 'Do you offer a demo?', answer: 'Yes. We can walk you through our process, show examples of our work, and answer all your questions on a demo call.' },
        { question: 'What information do you need initially?', answer: "Just tell us about your brand, what services you want to offer, and your growth goals. We'll take it from there." },
      ],
      connectTitle: 'Connect With Us',
      connectBody: 'Follow for updates, tips, and success stories.',
    },
  },
  ar: {
    home: {
      hero: {
        title: ['كبّر شغلك أونلاين', 'بدون ما توظف فريق كامل'],
        body: 'نصمم لك موقع، هوية، وأتمتة تساعدك تطلع بشكل احترافي وتحوّل الزوار إلى عملاء.',
        primary: 'ابدأ مشروعك الآن',
        secondary: 'شوف كيف نشتغل',
      },
      servicesTitle: 'خدماتنا',
      servicesBody: 'خدمات رقمية واضحة ومفيدة للشركات وأصحاب المشاريع اللي يبغون حضور أقوى وطلبات أكثر.',
      services: [
        { title: 'مواقع احترافية', description: 'مواقع سريعة وواضحة تساعد العميل يفهمك ويتواصل معك بسهولة', icon: '🚀' },
        { title: 'هوية وتصميم', description: 'شكل مرتب لعلامتك من الشعار إلى الألوان والقوالب', icon: '🎨' },
        { title: 'أتمتة الشغل', description: 'نربط أدواتك ونخفف المتابعة اليدوية على فريقك', icon: '⚙️' },
        { title: 'تسويق ونمو', description: 'SEO ومحتوى وحملات تساعدك تجيب طلبات أكثر', icon: '📊' },
      ],
      howTitle: 'كيف نعمل',
      howBody: 'خطوات بسيطة من أول مكالمة إلى التسليم، وكل شيء واضح من البداية.',
      steps: [
        { number: '١', title: 'نفهم احتياجك', description: 'نسمع منك، نرتب الأولويات، ونحدد أفضل حل لمشروعك' },
        { number: '٢', title: 'نشتغل على التنفيذ', description: 'نصمم ونبني ونرسل لك تحديثات واضحة بدون إزعاج' },
        { number: '٣', title: 'تستلم وتطلق', description: 'تراجع الشغل، نعدّل المطلوب، وبعدها يكون جاهز للإطلاق' },
      ],
      testimonialsTitle: 'النتيجة اللي نحب نوصل لها',
      testimonialsBody: 'شغل مرتب يخفف عليك ويخلي مشروعك يظهر بشكل أقوى.',
      testimonials: [
        { name: 'صاحب مشروع', role: 'شركة ناشئة', content: 'صار عندنا موقع واضح وشكله احترافي، والناس صارت تفهم خدماتنا أسرع.', avatar: '👩‍💼' },
        { name: 'صاحب شركة', role: 'خدمات مهنية', content: 'قدرنا نطلع بشكل أوضح ونستقبل طلبات أفضل بدون ما نزيد فريقنا الداخلي.', avatar: '👨‍💼' },
        { name: 'مستشار مستقل', role: 'استشارات أعمال', content: 'التنفيذ كان مرتب، واللغة بسيطة، وما احتجت أدخل في تفاصيل تقنية كثيرة.', avatar: '👩‍💻' },
      ],
      faqTitle: 'الأسئلة الشائعة',
      faqs: [
        { question: 'كيف يبدأ العمل معكم؟', answer: 'نبدأ بمكالمة قصيرة نفهم فيها مشروعك وهدفك. بعدها نرسل لك نطاق واضح، مدة تقريبية، وخطوات التنفيذ.' },
        { question: 'هل تناسبون الشركات الصغيرة والناشئة؟', answer: 'نعم. نشتغل مع شركات ناشئة، أصحاب مشاريع، وفرق صغيرة تحتاج تنفيذ احترافي بدون تعقيد.' },
        { question: 'هل أقدر أخصص الخدمة حسب احتياجي؟', answer: 'أكيد. نضبط النطاق حسب مشروعك، سواء تحتاج موقع فقط أو هوية أو أتمتة أو باقة كاملة.' },
        { question: 'كم يأخذ المشروع عادة؟', answer: 'حسب حجم الشغل. الموقع البسيط غالبا من أسبوعين إلى 4 أسابيع، والهوية من أسبوع إلى 3 أسابيع، والأتمتة حسب الربط المطلوب.' },
        { question: 'هل تتعاملون مباشرة مع فريقي؟', answer: 'نعم. نتواصل معك أو مع فريقك مباشرة، ونرتب التحديثات والمراجعات بطريقة واضحة.' },
        { question: 'ماذا عن التعديلات؟', answer: 'أي تعديلات داخل النطاق المتفق عليه تكون مشمولة وواضحة من البداية.' },
      ],
      ctaTitle: 'جاهز ترتب حضورك الرقمي؟',
      ctaBody: 'خلنا نعرف مشروعك ونقترح عليك أفضل خطوة تبدأ فيها.',
      cta: 'تواصل معنا',
    },
    about: {
      heroTitle: 'عن EasyBrandLabs',
      heroBody: 'فريق صغير ومركز يساعدك تبني حضور رقمي احترافي بدون تعقيد أو تكلفة فريق داخلي كبير.',
      storyTitle: 'ليش بدأنا؟',
      story: [
        'بدأت EasyBrandLabs من ملاحظة بسيطة: كثير من الشركات تحتاج موقع وهوية وأنظمة رقمية، لكن ما تحتاج تعقيد كبير أو فريق داخلي مكلف.',
        'عشان كذا بنينا طريقة عمل خفيفة وواضحة. نفهم المطلوب، نرتب الخطة، وننفذ بجودة عالية بدون كثرة اجتماعات أو كلام تقني غير ضروري.',
        'هدفنا أن تستلم شغل يخدم مشروعك فعلا: واضح للعميل، سهل الاستخدام، وجاهز يساعدك تجيب فرص أكثر.',
      ],
      badge: 'شغل واضح وسريع ومرتب',
      approachTitle: 'طريقتنا في الشغل',
      values: [
        { title: 'نبدأ من الهدف', description: 'ما نصمم لمجرد الشكل. نربط كل قرار بهدف واضح للمشروع.', icon: '✨' },
        { title: 'تواصل بدون غموض', description: 'تعرف وش صار، وش القادم، ومتى تستلم، بدون متابعة مرهقة.', icon: '💬' },
        { title: 'تصميم يساعد يبيع', description: 'الصفحات تكون سهلة الفهم وتقود الزائر للخطوة المطلوبة.', icon: '📈' },
        { title: 'تنفيذ خفيف وسريع', description: 'نشتغل بطريقة منظمة عشان نختصر الوقت ونحافظ على الجودة.', icon: '⚡' },
        { title: 'تقنية مناسبة', description: 'نختار الأدوات اللي تخدم مشروعك، مو الأدوات المعقدة لمجرد أنها جديدة.', icon: '🛠️' },
        { title: 'نظرة طويلة', description: 'نبني شي قابل للتطوير، عشان ما تضطر تبدأ من الصفر بعد فترة قصيرة.', icon: '🤝' },
      ],
      whyTitle: 'ليش تختار EasyBrandLabs؟',
      columns: [
        {
          title: 'تعامل مباشر وواضح',
          body: 'ما نضيعك بين أقسام كثيرة. تتعامل مع فريق فاهم المطلوب ويقدر يحرك المشروع بسرعة.',
          points: ['ردود واضحة', 'قرارات أسرع', 'تفاصيل أقل ضياعا'],
        },
        {
          title: 'تنفيذ مرتب من البداية',
          body: 'نحدد النطاق، نرتب الأولويات، ونمشي بخطوات مفهومة عشان تعرف بالضبط وين وصلنا.',
          points: ['نطاق واضح', 'مواعيد واقعية', 'مراجعات بدون فوضى'],
        },
      ],
      stats: [
        ['فريق صغير', 'واهتمام أعلى'],
        ['تنفيذ مرتب', 'من أول خطوة'],
        ['لغة واضحة', 'بدون تعقيد'],
        ['تركيز كامل', 'على النتيجة'],
      ],
      ctaTitle: 'خلنا نبني شي يخدم شغلك',
      ctaBody: 'إذا تحتاج موقع، هوية، أو نظام يختصر عليك الوقت، نقدر نساعدك.',
      cta: 'تواصل معنا',
    },
    howItWorks: {
      heroTitle: 'كيف نعمل',
      heroBody: 'خطوات واضحة وبسيطة. نفهم احتياجك، ننفذ، نراجع، وبعدها تطلق بثقة.',
      steps: [
        { number: '١', title: 'نفهم مشروعك', description: 'نبدأ بمكالمة قصيرة نفهم فيها وش تبغى تحقق، من هو عميلك، وأين تحتاج المساعدة.', details: ['نسمع فكرتك وأهدافك', 'نحدد الأولويات', 'نقترح أفضل مسار', 'ما تحتاج شرح تقني معقد'] },
        { number: '٢', title: 'نرتب الخطة', description: 'نحوّل الكلام إلى نطاق عمل واضح: وش بنسلم، متى، وكيف بتكون طريقة المراجعة.', details: ['نطاق ومخرجات واضحة', 'جدول زمني واقعي', 'مسؤوليات محددة', 'تسعير حسب الاحتياج'] },
        { number: '٣', title: 'ننفذ ونراجع', description: 'نشتغل على التصميم أو التطوير أو الأتمتة، ونرسل لك تحديثات مفهومة خلال الطريق.', details: ['تصميم وتنفيذ احترافي', 'مراجعات في نقاط واضحة', 'تحسينات قبل التسليم', 'اختبار قبل الإطلاق'] },
        { number: '٤', title: 'نطلق ونحسن', description: 'بعد موافقتك، نجهز الإطلاق ونساعدك تفهم الخطوات التالية عشان تستفيد من الشغل.', details: ['إطلاق سلس', 'تسليم الملفات أو الوصوليات', 'شرح مختصر عند الحاجة', 'دعم وتطوير لاحق متاح'] },
      ],
      timelineTitle: 'كم يأخذ المشروع؟',
      timelineBody: 'هذه أرقام تقريبية. المدة النهائية تعتمد على حجم المشروع والمواد المتوفرة.',
      timeline: [
        { phase: 'الفهم', duration: '2-3 أيام', description: 'نجمع المتطلبات ونرتب الأولويات' },
        { phase: 'التصميم', duration: '1-2 أسبوع', description: 'نجهز الشكل وتجربة المستخدم' },
        { phase: 'التنفيذ', duration: '2-6 أسابيع', description: 'نبني الموقع أو النظام المطلوب' },
        { phase: 'المراجعة', duration: '3-5 أيام', description: 'نختبر ونعدل قبل التسليم' },
        { phase: 'الإطلاق', duration: '2-3 أيام', description: 'ننشر ونضبط الإعدادات الأخيرة' },
      ],
      whyTitle: 'لماذا EasyBrandLabs؟',
      reasons: [
        { title: 'شغل مرتب', description: 'مخرجات واضحة وقابلة للاستخدام، مو ملفات مشتتة أو ناقصة.' },
        { title: 'تواصل مفهوم', description: 'نشرح لك الوضع بلغة بسيطة ونبعدك عن التفاصيل المزعجة.' },
        { title: 'جاهز للنمو', description: 'نبني الأساس بطريقة تسمح لك تطور لاحقا بدون إعادة كل شيء.' },
        { title: 'سرعة بدون استعجال', description: 'نختصر الوقت، لكن ما نختصر الجودة.' },
        { title: 'قيمة مناسبة', description: 'تنفيذ احترافي بدون ميزانيات ضخمة أو تكاليف مبالغ فيها.' },
        { title: 'دعم بعد التسليم', description: 'نقدر نكمل معك في التحسينات والتطوير إذا احتجت.' },
      ],
      ctaTitle: 'جاهز نرتب الخطة؟',
      ctaBody: 'أرسل لنا فكرة مشروعك، ونقول لك وش أفضل خطوة تبدأ فيها.',
      cta: 'تواصل معنا',
    },
    contact: {
      heroTitle: 'تواصل معنا',
      heroBody: 'عندك فكرة أو مشروع؟ اكتب لنا وش تحتاج، ونرجع لك بخطوة واضحة.',
      formTitle: 'أرسل تفاصيل مشروعك',
      infoTitle: 'تقدر تتواصل معنا هنا',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      schedule: 'احجز مكالمة',
      scheduleBody: 'احجز مكالمة قصيرة ونفهم احتياجك ونقترح عليك الأنسب.',
      hours: 'ساعات العمل',
      hoursBody: 'الاثنين - الجمعة: 9 صباحا - 6 مساء بتوقيت السعودية\nالسبت - الأحد: مغلق',
      quick: 'نرد عليك بسرعة',
      quickBody: 'غالبا نرد خلال نفس يوم العمل، وإذا كان الطلب واضح نقدر نعطيك توجيه أسرع.',
      faqTitle: 'الأسئلة الشائعة',
      faqs: [
        { question: 'متى تردون علي؟', answer: 'نحاول نرد خلال نفس يوم العمل. كل ما كانت تفاصيل مشروعك أوضح، كان ردنا أدق وأسرع.' },
        { question: 'هل المكالمة الأولى مجانية؟', answer: 'نعم، نقدر نعمل مكالمة تعريفية قصيرة نفهم فيها احتياجك ونوضح لك هل نقدر نساعدك.' },
        { question: 'هل أقدر أحجز موعد مباشرة؟', answer: 'أكيد. استخدم زر الحجز واختر الوقت المناسب لك من المواعيد المتاحة.' },
        { question: 'وش أرسل لكم بالبداية؟', answer: 'أرسل رابط مشروعك إن وجد، وش الخدمة اللي تحتاجها، والهدف اللي تبغى توصله.' },
        { question: 'هل تشتغلون مع شركات في مراحل مبكرة؟', answer: 'نعم. نقدر نبدأ بنطاق بسيط ومفيد، ثم نطوره مع نمو الشركة.' },
      ],
      connectTitle: 'خلنا نبقى على تواصل',
      connectBody: 'تابعنا للتحديثات والنصائح وأفكار تطوير حضورك الرقمي.',
    },
  },
};

export const serviceDetails = {
  en: [
    {
      id: 'web-dev',
      title: 'Web Development',
      outcome: 'Launch a clear, conversion-focused website for your business',
      suggestedPricing: '$2,999 - $9,999',
      turnaround: '2-4 weeks',
      sellScript: 'We deliver a production-ready website for your business - fast, SEO-ready, and optimized for conversions.',
      mockPreview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'Landing Page (Conversion-First)', description: 'Pixel-perfect landing page with hero, social proof, and CTA. Delivered as a ready-to-deploy HTML/Next.js page.', thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop' },
        { title: 'Brandable Admin Dashboard', description: 'Lightweight dashboard UI with sample analytics and brand colors for demos and screenshots.', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop' },
        { title: 'Performance & SEO Starter Pack', description: 'Preconfigured meta, sitemap, and performance optimizations for quick rankings.', thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop' },
      ],
    },
    {
      id: 'branding',
      title: 'Branding & Design',
      outcome: 'Create a brand-ready identity system your team can use immediately',
      suggestedPricing: '$1,499 - $7,499',
      turnaround: '1-3 weeks',
      sellScript: 'You get a full brand identity - logo, typography, and templates that make your business look premium.',
      mockPreview: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'Logo & Wordmark (Multiple Files)', description: 'Primary, secondary, and monochrome logo files in vector and PNG formats for immediate use.', thumbnail: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop' },
        { title: 'Brand Kit (Colors & Fonts)', description: 'Color palette, typography scale, and usage guidelines that keep designs consistent across channels.', thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop' },
        { title: 'Social & Marketing Templates', description: 'Editable post templates for social and an email header your team can reuse.', thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop' },
      ],
    },
    {
      id: 'automation',
      title: 'Automation Systems',
      outcome: 'Automate business workflows to save hours weekly and reduce manual follow-up',
      suggestedPricing: '$999 - $6,999',
      turnaround: '1-6 weeks',
      sellScript: 'We connect your tools and automate repeatable tasks so you can focus on growth.',
      mockPreview: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'Onboarding Workflow', description: 'Automated onboarding sequence from forms to CRM to email follow-up with branded emails.', thumbnail: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&auto=format&fit=crop' },
        { title: 'Lead Routing & Alerts', description: 'Smart routing rules and email alerts so leads never slip through the cracks.', thumbnail: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop' },
        { title: 'Integration Diagram', description: 'Visual flow diagram showing how data moves between systems for clarity and trust.', thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop' },
      ],
    },
    {
      id: 'growth-marketing',
      title: 'SEO & Growth Marketing',
      outcome: 'Consistent traffic, qualified leads, and scalable acquisition',
      turnaround: '2-4 weeks',
      sellScript: 'We help businesses grow through search visibility, paid acquisition, and conversion-focused content.',
      mockPreview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'SEO Optimization', description: 'On-page SEO, technical fixes, and keyword targeting.', thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop' },
        { title: 'Ad Campaign Setup', description: 'Google and Meta ads structured for conversions.', thumbnail: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop' },
        { title: 'Content Creation', description: 'High-converting landing pages and marketing content.', thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop' },
      ],
    },
  ],
  ar: [
    {
      id: 'web-dev',
      title: 'تصميم وتطوير المواقع',
      outcome: 'موقع احترافي يشرح شغلك ويحوّل الزوار إلى عملاء',
      suggestedPricing: '$2,999 - $9,999',
      turnaround: 'من أسبوعين إلى 4 أسابيع',
      sellScript: 'نصمم لك موقع احترافي باسم علامتك، سريع، واضح، ويساعد يحول الزوار إلى عملاء.',
      mockPreview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'صفحة هبوط واضحة', description: 'صفحة تشرح العرض بسرعة، تعرض الثقة، وتدفع الزائر للتواصل أو الحجز.', thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop' },
        { title: 'موقع متعدد الصفحات', description: 'صفحات مرتبة للخدمات، من نحن، التواصل، وأي محتوى يحتاجه مشروعك.', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop' },
        { title: 'تهيئة أساسية للظهور', description: 'عناوين ووصف وسرعة وخريطة موقع تساعد محركات البحث تفهم موقعك.', thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop' },
      ],
    },
    {
      id: 'branding',
      title: 'الهوية والتصميم',
      outcome: 'شكل احترافي يخلي علامتك أوضح وأسهل في التذكر',
      suggestedPricing: '$1,499 - $7,499',
      turnaround: 'من أسبوع إلى 3 أسابيع',
      sellScript: 'نجهز لك هوية مرتبة: شعار، ألوان، خطوط، وقوالب تساعد علامتك تظهر بثقة في كل مكان.',
      mockPreview: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'شعار ونسخ متعددة', description: 'ملفات جاهزة للاستخدام في الموقع، السوشيال، العروض، والطباعة.', thumbnail: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop' },
        { title: 'ألوان وخطوط الهوية', description: 'نظام بسيط يوضح كيف تستخدم ألوانك وخطوطك بدون اختلافات مزعجة.', thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop' },
        { title: 'قوالب جاهزة', description: 'قوالب للسوشيال أو العروض تساعد فريقك ينتج محتوى بشكل أسرع.', thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop' },
      ],
    },
    {
      id: 'automation',
      title: 'الأتمتة وربط الأدوات',
      outcome: 'شغل أقل يدوي، متابعة أوضح، وفرص ما تضيع',
      suggestedPricing: '$999 - $6,999',
      turnaround: 'من أسبوع إلى 6 أسابيع',
      sellScript: 'نربط أدواتك ونرتب خطوات المتابعة، عشان الطلبات والعملاء المحتملين يوصلون للمكان الصحيح بدون متابعة يدوية مزعجة.',
      mockPreview: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'استقبال العملاء آليا', description: 'النموذج يرسل البيانات للمكان المناسب، ويبدأ التواصل بدون تدخل يدوي.', thumbnail: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&auto=format&fit=crop' },
        { title: 'تنبيهات وتوزيع طلبات', description: 'كل طلب يوصل للشخص أو القناة المناسبة بسرعة، بدل ما يضيع بين الرسائل.', thumbnail: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop' },
        { title: 'خريطة ربط بسيطة', description: 'نوضح لك كيف تتحرك البيانات بين أدواتك عشان يكون النظام مفهوم وسهل التطوير.', thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop' },
      ],
    },
    {
      id: 'growth-marketing',
      title: 'SEO وتسويق النمو',
      outcome: 'ظهور أفضل وطلبات أكثر من قنوات قابلة للقياس',
      turnaround: '2-4 أسابيع',
      sellScript: 'نساعدك ترتب ظهورك في البحث وتجهز صفحات ومحتوى وحملات هدفها واضح: تجيب اهتمام وطلبات أكثر.',
      mockPreview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      deliverables: [
        { title: 'تحسين SEO الأساسي', description: 'نراجع الصفحات والكلمات والعناوين ونصلح الأشياء اللي تمنع ظهورك.', thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop' },
        { title: 'تجهيز الحملات', description: 'نرتب بنية حملات Google أو Meta بطريقة تساعدك تقيس النتائج بوضوح.', thumbnail: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop' },
        { title: 'صفحات ومحتوى للتحويل', description: 'نكتب ونصمم محتوى يشرح العرض بسرعة ويدفع العميل للخطوة التالية.', thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop' },
      ],
    },
  ],
};
