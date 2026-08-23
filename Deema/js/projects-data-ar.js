const projects = [
    // 🔘⚪️🟢🟡⚫️🟣🟠🔴🔵🟤★🔻🔸🔳🔷🔶🌸🔲▪️▫️◾️🟥◻️◼️◽️🟧🟨🟩🟦🟫⬜️🟪🟪♦️💬

    // Tourism Project
    {
        id: "Tourism-project",
        title: "نظام توصية سياحي بالذكاء الاصطناعي🎓✈️",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/UiUx_Tourism.png",
        shortDescription: "",
        fullDescription:
            `
            نظام توصية سفر عبر الويب يقدّم اقتراحات وجهات مخصصة باستخدام الذكاء الاصطناعي، تناسب تفضيلات المستخدم مثل شخصية السفر، المواضيع المفضلة، الكلمات المفتاحية، والميزانية.
            
             🌐 <a href="https://deemaessam.github.io/Deema/project-ar.html?id=tourism-dataset" target="_blank" style="color:#4CAF50;font-weight:bold;">تفاصيل بناء وتنظيف الداتاسيت</a>
             
            🌸المميزات الرئيسية:
            ★إدارة المستخدمين: التسجيل، تسجيل الدخول، وتتبع الجلسات لتجربة مخصصة.
            ★توصيات قائمة على الشخصية: بناءً على إجابات المستخدمين (الموضوع، أسلوب السفر، الميزانية، والكلمات المفتاحية)، يحدد النظام شخصية سفر
                  (مثل باحث المغامرة، مستكشف الثقافة) ويقترح وجهات تناسب تلك الشخصية.
            ★مطابقة مدعومة بالذكاء الاصطناعي: يُحسب التشابه الجيبي (Cosine similarity) بين كلمات المستخدم المفتاحية وأعمدة مجموعة البيانات (الوصف + المراجعات) لتصفية وترتيب الوجهات ذات الصلة بشخصية المستخدم.
            ★واجهة تفاعلية: تصميم ويب نظيف مع بطاقات وجهات ديناميكية لسهولة الاستكشاف.
            ★تكامل قاعدة البيانات: يخزّن MySQL معلومات المستخدم وبيانات الشخصية، مما يتيح التحديثات والتوصيات المخصصة الدائمة.

            🌸التقنيات المستخدمة:
            ★Python (Flask) للواجهة الخلفية ومنطق الذكاء الاصطناعي
            ★Pandas لمعالجة مجموعة البيانات وحسابات التشابه
            ★MySQL لتخزين البيانات
            ★HTML وCSS وBootstrap وJinja2 للواجهة الأمامية والقوالب

            يُظهر هذا المشروع تطبيقاً متكاملاً يجمع بين رؤى مدعومة بالذكاء الاصطناعي والتخصيص القائم على الشخصية، مقدماً للمستخدمين توصيات سفر مخصصة وواجهة جذابة.
        
        `,
        date: "Jun 4, 2025",
        github: "https://github.com/DeemaEssam/Travel-Persona-Based-Destinations-Recommendation"
    },

    
    {
        id: "education-platform",
        title: "منصة التعليم الإلكتروني",
        category: "web",
        tools: ["Python", "Flask", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/education%20platform.png",
        shortDescription:
            "منصة تعليم إلكتروني لإدارة الدورات والمحتوى التعليمي والاختبارات، مع نظام صلاحيات متكامل للمستخدمين.",
        fullDescription:
            `
            منصة تعليم إلكتروني متكاملة تم تطويرها لإدارة الدورات التعليمية والمحتوى والاختبارات من خلال نظام موحد للمعلمين والطلاب.
    
            يركز المشروع على توفير بيئة منظمة لإدارة المحتوى التعليمي، مع ربط الواجهة الأمامية بالخادم وقاعدة البيانات لتوفير تجربة متكاملة لإدارة وعرض الدورات.
    
            أبرز المساهمات في المشروع:
    
            🌸 تطوير تطبيق ويب باستخدام Python وFlask يربط بين واجهة المستخدم والخادم وقاعدة البيانات.
    
            🌸 تصميم وإدارة قاعدة بيانات MySQL لتخزين بيانات المستخدمين والدورات والأقسام والمحتوى والاختبارات والأسئلة والخيارات.
    
            🌸 تطوير نظام لإدارة الدورات التعليمية يتيح إضافة الدورات والأقسام وتنظيم المحتوى داخل كل دورة.
    
            🌸 تطوير وظائف لإضافة وتعديل وحذف المحتوى التعليمي، بما في ذلك محتوى الفيديو والمواد التعليمية.
    
            🌸 بناء نظام اختبارات يتيح إنشاء الاختبارات وإضافة الأسئلة والخيارات وإدارتها ضمن الدورات التعليمية.
    
            🌸 تطبيق نظام تسجيل الدخول والصلاحيات للتحكم في الوظائف والصفحات المتاحة لكل نوع من المستخدمين.
    
            🌸 ربط عمليات إدارة المحتوى مباشرة بقاعدة البيانات لضمان حفظ البيانات وتحديثها بشكل منظم.
    
            🌸 تطوير واجهة مستخدم باستخدام HTML وCSS وBootstrap وJavaScript لتوفير تجربة استخدام واضحة ومتجاوبة.
    
            🌸 تطبيق ممارسات أمنية تشمل تشفير كلمات المرور، إدارة الجلسات، حماية النماذج، والتحقق من الملفات والبيانات المدخلة.
    
            🌸 إضافة آلية لتسجيل العمليات والأنشطة المهمة داخل النظام بهدف تحسين المتابعة والأمان.
    
            ساهم المشروع في بناء نظام متكامل يجمع بين إدارة المحتوى التعليمي، الاختبارات، المستخدمين، وقاعدة البيانات ضمن منصة واحدة قابلة للتوسع.
            `,
        date: "Jul 2026",
        github: "YOUR_GITHUB_LINK"
    },

    {
        id: "ataa-kpi-dashboard",
        title: "منصة إدارة بيانات المستفيدين وتحليلات مؤشرات الأداء",
        category: "web",
        tools: ["Python", "Flask", "MySQL", "Pandas", "HTML", "CSS", "JavaScript"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/AtaaPdashboard.jpeg",
        shortDescription:
            "منصة متكاملة لإدارة بيانات المستفيدين، التحليلات، ومراقبة مؤشرات الأداء في الوقت الفعلي.",
        fullDescription:
            `
        كجزء من عملي التطوعي كمحللة تقارير ومؤشرات أداء في جمعية عطاء ♿،

        صممت وطوّرت منصة متكاملة لإدارة البيانات والتحليلات لدعم خدمات المستفيدين وعمليات التقارير في الجمعية.

        غطّى المشروع دورة حياة البيانات بالكامل، من جمع البيانات ومعالجتها إلى التخزين والتحليل والتصور.

        شملت المساهمات الرئيسية:

        🌸 تنفيذ معالجة أولية شاملة للبيانات، تشمل تنظيف مجموعات البيانات، معالجة القيم المفقودة، التحقق من صحة السجلات، وتوحيد صيغ البيانات لضمان الجودة والاتساق.

        🌸 بناء خطوط أنابيب ETL آلية باستخدام Python (Pandas) لاستخراج بيانات المستفيدين وتحويلها وتحميلها بكفاءة.

        🌸 تطوير تطبيق ويب متكامل باستخدام Flask يتيح للمستخدمين رفع ملفات CSV وإكسل، ومعالجة البيانات آلياً، وتخزينها بصيغة منظمة.
        🌐 <a href="https://deemaessam.github.io/projects/Ataa/index.html" target="_blank" style="color:#4CAF50;font-weight:bold;">معاينة حية للوحة المعلومات</a>

        🌸 تصميم وتنفيذ نظام قاعدة بيانات MySQL لإدارة سجلات المستفيدين ودعم الاستعلام والتقارير بكفاءة.

         إنشاء لوحات معلومات تفاعلية لتصور مؤشرات الأداء الرئيسية (KPIs)، وإحصائيات المستفيدين، والتوزيعات الديموغرافية، ومقاييس العمليات.

        🌸 تنفيذ مزامنة آنية بين قاعدة البيانات ولوحة المعلومات لضمان انعكاس البيانات والتحديثات الجديدة فوراً في التقارير والتصورات.

        🌸 دمج مكونات الواجهة الأمامية والخلفية لتوفير سير عمل سلس لرفع البيانات ومعالجتها وتخزينها وتحليلها.

        🌸 دعم اتخاذ القرار المبني على البيانات من خلال تقديم رؤى أداء دقيقة، وقدرات تقارير آلية، ووصول مركزي لبيانات المؤسسة.

        حسّنت هذه المنصة كفاءة التقارير بشكل كبير، وقلّلت جهود المعالجة اليدوية، ومكّنت أصحاب المصلحة من مراقبة أداء المؤسسة عبر التحليلات الآنية وتتبع مؤشرات الأداء.
        `,
        date: "May 2026 - Present",
        github: "YOUR_GITHUB_LINK"
    },

    // customer-sales-analysis
    {
        id: "https://github.com/DeemaEssam/Customer-Sales-Analysis-for-an-Online-Store",
        title: "تحليل العملاء والمبيعات لمتجر إلكتروني",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/Customer%20%26%20Sales%20Analysis%20for%20an%20Online%20Store.png",
        shortDescription: "لوحات تفاعلية لتحليل العملاء وأداء المبيعات واتجاهات السلاسل الزمنية.",
        fullDescription: `
            بنيت تقريراً تحليلياً يتضمن عدة لوحات معلومات، صُممت كل منها للإجابة على أسئلة عمل مختلفة ودعم اتخاذ القرار المبني على البيانات.

            🌸 اللوحة 1 – تحليل العملاء: تحلل سلوك العملاء، والتوزيع حسب الجنس والموقع، وقيمة إنفاق العملاء.

            🌸 اللوحة 2 – تحليل المبيعات: تدرس أداء المبيعات الإجمالي، والفئات والمنتجات الأعلى أداءً، وأثر الخصومات على المبيعات.

            🌸 اللوحة 3 – تحليل السلاسل الزمنية: تستكشف اتجاهات المبيعات عبر الزمن وتحدد الأنماط الموسمية لدعم التنبؤ المستقبلي بالمبيعات.

            🔍 عوامل تصفية تفاعلية: التاريخ · الموقع · الجنس

             تمكّن عوامل التصفية هذه المستخدمين من تحليل البيانات من زوايا متعددة ومقارنة الأداء بسهولة عبر الفترات والمناطق وشرائح العملاء.
    `,
        date: "Jan 4, 2026",
        github: "https://github.com/DeemaEssam/Customer-Sales-Analysis-for-an-Online-Store"
    },
    // tourism dataset
    {
        id: "tourism-dataset",
        title: "بناء مجموعة بيانات عالية الجودة لتحليلات السياحة",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/tourism.png?raw=true",
        shortDescription:
            "أنشأت مجموعة بيانات نظيفة ومنظمة لتحليلات السياحة.",
        fullDescription:
            `
            هدف هذا المشروع إلى إنشاء مجموعة بيانات شاملة وعالية الجودة لدعم أي مشروع متعلق بالسياحة، وليس فقط أنظمة التوصية.

            خارطة طريق المشروع والمساهمات:

            🌸 البحث واختيار الميزات: راجعت الأبحاث الأكاديمية لتحديد الميزات الرئيسية لتحليلات السياحة.

            🌸 جمع البيانات: استخرجت وجمعت البيانات من مصادر موثوقة، منها TripAdvisor وGoogle Maps ومجموعتي بيانات من Kaggle
            (وجهات الترفيه في السعودية ومقاهي الرياض).

            🌸 دمج مجموعات البيانات: دمجت مصادر متعددة لتجميع معلومات تفصيلية عن أكثر من 20,000 وجهة سياحية، تشمل:
            ★ الأسماء والأوصاف والتقييمات والمراجعات
            ★ الإحداثيات الجغرافية والعناوين
            ★ روابط الويب والمواقع الرسمية
            ★ مشاعر الزوار عبر تقييمات نصية وتحليل المشاعر
            ★ خصائص مثل أنماط السفر (عائلي، فردي) والمدينة/المنطقة

            🌸 المعالجة الأولية للبيانات:
            ★ إزالة التكرار: أزلت الإدخالات المكررة لنفس الوجهات عبر مصادر مختلفة.
            ★ التوحيد القياسي: وحّدت تسميات الأسماء وفئات المواضيع وصيغ المواقع للحفاظ على الاتساق.
            ★ إزالة الضوضاء: أزلت البيانات غير ذات الصلة والرموز الخاصة والعناصر النائبة من الحقول النصية.
            ★ معالجة القيم المفقودة: أكملت أو أزلت الإدخالات غير المكتملة لضمان مجموعة بيانات كاملة وموثوقة.
            ★ الترجمة: حوّلت الإدخالات غير الإنجليزية إلى الإنجليزية لتوحيدها.
            ★ هندسة الميزات: أضفت ميزات مشتقة مثل درجات المشاعر من مراجعات المستخدمين، ومؤشرات نمط السفر، والترميز الرقمي للبيانات الفئوية لتسهيل التحليل.

            🌸 التصور والرؤى: قلّلت المواضيع، أزلت التكرار، وصوّرت البيانات لاكتشاف الأنماط والاتجاهات والرؤى القابلة للتنفيذ لأصحاب المصلحة في السياحة.

            توفر مجموعة البيانات هذه أساساً موثوقاً لمشاريع تحليلات السياحة، وتوصية الوجهات، وتحليل المشاعر، والتخطيط الاستراتيجي.
            `,
        date: "Jun 2, 2025",
        github: "https://github.com/DeemaEssam/DataSciences_Project"
    },
    // Khayrkom
    {
        id: "Khayrkom",
        title: "تحليل بيانات تعليم القرآن – جمعية خيركم",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/خيركم.png?raw=true",
        shortDescription:
            "لوحات Power BI تحلل بيانات برنامج تعليم القرآن.",
        fullDescription:
            "صممت لوحات معلومات تفاعلية باستخدام Power BI لتحليل بيانات برنامج تعليم القرآن وتحديد نقاط القوة وفرص التحسين لجمعية خيركم.",
        date: "Dec 2025",
        github: "https://github.com/DeemaEssam/Quran-Education-Data-Analysis_Khayrkom-Association"
    },
    // YUSUR
    {
        id: "Yusur",
        title: "تحليل بيانات المستفيدين – جمعية يسر",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/تحليل%20بيانات%20مستفيدين%20مركز%20الحياة%20المطمئنة%202025م.jpg?raw=tru",
        shortDescription:
            "لوحات تفاعلية لتحليل بيانات المستفيدين.",
        fullDescription:
            `
            كجزء من عملي التطوعي كمساعدة إدارية ومحللة بيانات في جمعية يسر لتنمية الأسرة – مركز الحياة المطمئنة 🤍،

            طوّرت لوحة معلومات تفاعلية باستخدام Power BI كجزء من المهام التشغيلية، بهدف تحويل البيانات الخام إلى مؤشرات واضحة تدعم التخطيط الإداري والمتابعة.

        تتيح لوحة المعلومات:

        🌸 تحليل التغيرات الشهرية في عدد المستفيدين وطلبات الاستشارات الأسرية

        🌸 فهم توزيع المستفيدين حسب الجنس (ذكور / إناث)

        🌸 تحليل أكثر أنواع الاستشارات الأسرية طلباً
        
        🌸 قياس أثر المبادرات من خلال عدد المستفيدين لكل مبادرة

        ساهمت هذه الأداة في تسهيل اتخاذ القرار، وتحسين المتابعة، وتحديد الاحتياج الفعلي للخدمات بناءً على البيانات.
            
            `,
        date: "Dec 2025",
        github: "https://github.com/DeemaEssam/Beneficiary-Data-Analysis-Yusr-Association"
    },
    // Sakhaa 
    {
        id: "sakhaa-performance",
        title: "جمعية سخاء – تحليل الأداء السنوي",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/Sakhaa_2.jpeg",
        shortDescription:
            "لوحة أداء سنوية لجمعية سخاء.",
        fullDescription:
            `
            تطوعت مع جمعية سخاء عبر المنصة الوطنية للعمل التطوعي في فرصة تحليل بيانات ضمن قسم التسويق.

            خلال هذه التجربة، عملت على:

            🌸 استلام بيانات أعمال وإنجازات الجمعية السنوية.

            🌸 تنظيم وتحليل البيانات لتصبح جاهزة للعرض.

            🌸 تصميم لوحة معلومات تفاعلية باستخدام إكسل لإبراز جهود الجمعية ومؤشرات الأداء الرئيسية بصرياً.

            كانت هذه تجربة قيّمة عززت مهاراتي في تحويل البيانات إلى رؤى قابلة للتنفيذ ودعم اتخاذ القرار بطريقة بسيطة وفعالة.
`,
        date: "Sep 2025",
        github: "https://github.com/DeemaEssam/Data-Analysis-of-Sakha-Association-Dashboard-Using-Excel"
    },
    // Real estate
    {
        id: "real-estate-riyadh",
        title: "العقارات في الرياض",
        category: "powerbi python web",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/Riyadh_Realestate.png?raw=true",
        shortDescription:
            "تحليل وتصور بيانات العقارات لسوق الرياض.",
        fullDescription:
            "مشروع تحليل عقاري يركز على اتجاهات السوق والتسعير والرؤى في الرياض باستخدام Python للتحليل وPower BI للتصور.",
        date: "Apr 27, 2024",
        github: ""
    },
    // sales-data-analysis
    {
        id: "sales-data-analysis",
        title: "تحليل بيانات المبيعات",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/sales.png?raw=true",
        shortDescription:
            "تصور أداء المبيعات باستخدام Power BI.",
        fullDescription:
            "لوحة Power BI تصور أداء المبيعات وسلوك العملاء واتجاهات المنتجات لدعم قرارات الأعمال المبنية على البيانات.",
        date: "Apr 27, 2024",
        github: "https://github.com/DeemaEssam/Sales-Data-Analysis"
    },
    // IMDB-EDA
    {
        id: "imdb-eda",
        title: "تحليل استكشافي لتقييمات أفلام IMDb",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/movies.png?raw=true",
        shortDescription:
            "تحليل بيانات استكشافي لتقييمات أفلام IMDb.",
        fullDescription:
            `
            أجريت تحليلاً استكشافياً للبيانات (EDA) على تقييمات أفلام IMDb لفهم تفضيلات المستخدمين. 
            ★شمل المشروع تنظيف ومعالجة البيانات باستخدام Python، تلاه تصور البيانات في Power BI لعرض الرؤى بفعالية.
            `,
        date: "Aug 28, 2025",
        github: "https://github.com/DeemaEssam/Data-Analysis_IMDb-Movie-Ratings-EDA"
    },
    // thyroid-disease
    {
        id: "thyroid-disease",
        title: "تصنيف أمراض الغدة الدرقية باستخدام الشبكات العصبية",
        category: "python ml",
        tools: ["Python"],
        image: "https://deemaessam.github.io/pics/thyroid.png",
        shortDescription:
            "نموذج تعلّم آلة لتصنيف أمراض الغدة الدرقية.",
        fullDescription:
            "بنيت وقيّمت نماذج شبكات عصبية لتصنيف أمراض الغدة الدرقية بناءً على البيانات السريرية باستخدام Python.",
        date: "Apr 28, 2024",
        github: "https://github.com/DeemaEssam/ThyroidDisease"
    },
    // MENU web
    {
        id: "menu-website",
        title: "موقع قائمة الطعام",
        category: "web",
        tools: ["HTML", "CSS", "JavaScript", "PHP"],
        image: "https://deemaessam.github.io/pics/pizza.gif",
        shortDescription:
            "موقع قائمة مطعم مع خاصية التقييم.",
        fullDescription:
            `
            ★صممت وطوّرت الموقع مع قاعدة بيانات تحتوي على جداول للمستخدمين والرسائل.
            ★نفّذت وظائف CRUD (إنشاء، قراءة، تحديث، حذف) لإدارة بيانات العملاء والرسائل.
            ★أدرت صلاحيات المستخدمين، بحيث يُسمح فقط للمسؤولين بحذف البيانات.
            `,
        date: "Dec 18, 2022",
        github: "https://github.com/DeemaEssam/Pizza-Restaurant-System"
    },
    // Numbers Game
    {
        id: "numbers-game",
        title: "لعبة الأرقام",
        category: "web",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "https://deemaessam.github.io/pics/game.gif",
        shortDescription:
            "لعبة أرقام تعليمية لتعلّم الألمانية.",
        fullDescription:
            `لعبة تعليمية تم تطويرها لمساعدة المتعلمين على ممارسة الأرقام كجزء من دورة تعلم اللغة الألمانية.
    
    🌐 <a href="https://gger.netlify.app/index.html" target="_blank" style="color:#4CAF50;font-weight:bold;">جرب اللعبة</a>
    `,
        date: "Apr 19, 2023",
        github: "https://github.com/DeemaEssam/German-Numbers-Learning-Game"
    },
    // Book Club
    {
        id: "book-club",
        title: "نادي الكتاب",
        category: "cpp",
        tools: ["C++"],
        image: "https://deemaessam.github.io/pics/book.png",
        shortDescription:
            "برنامج إدارة نادي الكتاب.",
        fullDescription:
            "برنامج بلغة ++C مصمم لإدارة أعضاء نادي الكتاب والكتب وأنشطة الاستعارة.",
        date: "May 16, 2022",
        github: "https://github.com/DeemaEssam/bookClub"
    },
    // STORE SYSTEM
    {
        id: "store-system",
        title: "نظام إدارة المتجر",
        category: "python",
        tools: ["Python"],
        image: "https://deemaessam.github.io/pics/storee.png",
        shortDescription:
            "نظام بسيط لإدارة المتجر.",
        fullDescription:
            "برنامج بلغة Python لإدارة مخزون المتجر بعمليات CRUD أساسية.",
        date: "Apr 1, 2021",
        github: "https://github.com/DeemaEssam/Store"
    },
    // Research tracker
    {
        id: "research-tracker",
        title: "متتبع الأبحاث",
        category: "python web",
        tools: ["Python"],
        image: "https://deemaessam.github.io/pics/presentation.gif",
        shortDescription:
            "موقع للبحث عن نتائج الأبحاث وتصديرها.",
        fullDescription:
            `
            ★طوّرت أداة بلغة Python لتتبع الأبحاث العلمية وتحليل منشورات الباحثين على Google Scholar.
            ★بنيت واجهة ويب سهلة الاستخدام باستخدام Flask، تتيح للمستخدمين استكشاف أعمال باحث ما وتحميل النتائج كملف إكسل.
            ★نفّذت منطق الواجهة الخلفية لجلب البيانات وتنظيمها وتصديرها بكفاءة، لضمان تجربة مستخدم سلسة.
            ★دمجت نصوص Python البرمجية مع واجهات Flask للاسترجاع والمعالجة الآنية للبيانات.
            
            `,
        date: "May 16, 2022",
        github: "https://github.com/DeemaEssam/ResearchTracker"
    },
    // Blood donation
    {
        id: "blood-donation",
        title: "نظام التبرع بالدم",
        category: "sql",
        tools: ["SQL"],
        image: "https://deemaessam.github.io/pics/mainform1.jpeg",
        shortDescription:
            "نظام قاعدة بيانات للتبرع بالدم.",
        fullDescription:
            "صممت نظام قاعدة بيانات لإدارة عمليات التبرع بالدم مع ميزات تسجيل الدخول والتسجيل.",
        date: "May 16, 2022",
        github: ""
    },

    // Numerical-Methods-Equation-Solvers-MATLAB
    {
        id: "Numerical-Methods-Equation",
        title: "حل المعادلات بالطرق العددية",
        category: "matlab",
        tools: ["MATLAB"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/matlab.png",
        shortDescription:
            "تطبيق ومقارنة ثلاث طرق عددية لحل المعادلات في MATLAB: طريقة أويلر، وطريقة تايلور، وطريقة رانج-كوتا",
        fullDescription:
            `
            ركّز المشروع على تطبيق ومقارنة ثلاث طرق عددية لحل المعادلات في MATLAB: طريقة أويلر، وطريقة تايلور، وطريقة رانج-كوتا. تُستخدم هذه الطرق بشكل شائع في تطبيقات علمية وهندسية مختلفة عندما لا تكون الحلول التحليلية متاحة بسهولة. من خلال استخدام هذه التقنيات العددية، نهدف إلى تقريب حلول المعادلات وتحليل دقة وكفاءة كل طريقة.
            `,
        date: "May, 2023",
        github: "https://github.com/DeemaEssam/Numerical-Methods-Equation-Solvers-MATLAB"
    },

    // ai-chatvoice
    {
        id: "ai-chatvoice",
        title: "محادثة صوتية بالذكاء الاصطناعي",
        category: "python flask",
        tools: ["PYTHON"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/AiChatVoice.png",
        shortDescription:
            "تطبيق روبوت محادثة يدمج التعرف على الصوت والتحويل إلى كلام مع واجهة ويب.",
        fullDescription:
            `
            AIChatVoice هو تطبيق روبوت محادثة يدمج التعرف على الصوت وتحويل النص إلى كلام مع واجهة ويب. بُني باستخدام Node.js وExpress وواجهة برمجة OpenAI، يوفر هذا المشروع تجربة تفاعلية عبر تحويل الكلام إلى نص وتقديم ردود صوتية. يشمل التطبيق ميزة اختيار اللغة بين الإنجليزية والعربية، ويسجل نصوص المستخدمين وردود الذكاء الاصطناعي في قاعدة بيانات MySQL عبر نص PHP برمجي.

            المميزات
            🌸التعرف على الصوت: يحوّل الإدخال الصوتي إلى نص.
            🌸تحويل النص إلى كلام: يقرأ ردود الذكاء الاصطناعي باللغة المختارة.
            🌸اختيار اللغة: يتيح للمستخدمين الاختيار بين الإنجليزية والعربية.
            🌸تكامل قاعدة البيانات: يحفظ نصوص المستخدمين وردود الذكاء الاصطناعي في قاعدة بيانات MySQL.
            🌸واجهة ويب: توفر واجهة مستخدم بديهية للتفاعل مع الروبوت.
            `,
        date: "Jul, 2024",
        github: "https://github.com/DeemaEssam/AIChatVoice"
    }
];

