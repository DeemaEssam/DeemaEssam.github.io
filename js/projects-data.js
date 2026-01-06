const projects = [
    {
        id: "customer-sales-analysis",
        title: "Customer & Sales Analysis for an Online Store",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/Customer%20%26%20Sales%20Analysis%20for%20an%20Online%20Store.png",
        shortDescription:
            "Interactive dashboards to analyze customers, sales performance, and time series trends.",
        fullDescription:
            "An analytical project focused on customer behavior, sales performance, and time-series trends. Data was cleaned and analyzed using Python, then visualized using interactive Power BI dashboards to support data-driven decision-making.",
        date: "Jan 4, 2026",
        github:
            ""
    },

    {
        id: "ai-tourism-recommendation",
        title: "AI-based Tourism Recommendation System",
        category: "python ai web",
        tools: ["Python", "SQL", "HTML", "CSS", "PHP"],
        image: "pics/AI Tourism Recommendation System.png",
        shortDescription:
            "AI-powered web system that recommends tourism destinations based on user preferences.",
        fullDescription:
            "A web-based tourism recommendation system that uses artificial intelligence techniques to suggest personalized destinations based on user preferences and inputs.",
        date: "Jun 2, 2025",
        github: "https://github.com/DeemaEssam"
    },

    {
        id: "tourism-dataset",
        title: "Building a High-Quality Dataset for Tourism Analytics",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/tourism.png?raw=true",
        shortDescription:
            "Created a clean and structured dataset for tourism analytics.",
        fullDescription:
            "Built a custom tourism dataset by scraping TripAdvisor reviews, cleaning and structuring the data using Python, and preparing it for analysis and visualization in Power BI.",
        date: "Dec 20, 2024",
        github: "https://github.com/DeemaEssam"
    },

    {
        id: "Khayrkom",
        title: "Quran Education Data Analysis – Khayrkom Association",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/خيركم.png?raw=true",
        shortDescription:
            "Power BI dashboards analyzing Quran education program data.",
        fullDescription:
            "Designed interactive Power BI dashboards to analyze Quran education program data and identify strengths and improvement opportunities for Khayrkom Association.",
        date: "Dec 2025",
        github: ""
    },

    {
        id: "Yusur",
        title: "Beneficiary Data Analysis – Yusr Association",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/تحليل%20بيانات%20مستفيدين%20مركز%20الحياة%20المطمئنة%202025م.jpg?raw=tru",
        shortDescription:
            "Interactive dashboards for beneficiary data analysis.",
        fullDescription:
            "Analyzed beneficiary data using Power BI to track trends and support strategic planning for Yusr Association.",
        date: "Dec 2025",
        github: ""
    },

    {
        id: "sakhaa-performance",
        title: "Sakhaa Association – Annual Performance Analysis",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/%D8%B3%D8%AE%D8%A7.png?raw=true",
        shortDescription:
            "Annual performance dashboard for Sakhaa Association.",
        fullDescription:
            "Developed a Power BI dashboard summarizing annual performance metrics to support management decision-making.",
        date: "Sep 2025",
        github: ""
    },

    {
        id: "real-estate-riyadh",
        title: "Real Estate in Riyadh",
        category: "powerbi python web",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/Riyadh_Realestate.png?raw=true",
        shortDescription:
            "Real estate analysis and visualization for the Riyadh market.",
        fullDescription:
            "A real estate analysis project focusing on market trends, pricing, and insights in Riyadh using Python for analysis and Power BI for visualization.",
        date: "Apr 27, 2024",
        github: ""
    },

    {
        id: "sales-data-analysis",
        title: "Sales Data Analysis",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/sales.png?raw=true",
        shortDescription:
            "Sales performance visualization using Power BI.",
        fullDescription:
            "Power BI dashboard visualizing sales performance, customer behavior, and product trends to support data-driven business decisions.",
        date: "Apr 27, 2024",
        github: ""
    },

    {
        id: "imdb-eda",
        title: "IMDb Movie Ratings EDA",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/movies.png?raw=true",
        shortDescription:
            "Exploratory data analysis on IMDb movie ratings.",
        fullDescription:
            "Performed data cleaning and exploratory data analysis on IMDb movie ratings dataset using Python, then visualized insights using Power BI dashboards.",
        date: "Aug 28, 2025",
        github: "https://github.com/DeemaEssam"
    },

    {
        id: "thyroid-disease",
        title: "Neural Network-based Thyroid Disease Classification",
        category: "python ml",
        tools: ["Python"],
        image: "https://deemaessam.github.io/pics/thyroid.png",
        shortDescription:
            "Machine learning model for thyroid disease classification.",
        fullDescription:
            "Built and evaluated neural network models to classify thyroid diseases based on clinical data using Python.",
        date: "Apr 28, 2024",
        github: ""
    },

    {
        id: "menu-website",
        title: "Menu Website",
        category: "web",
        tools: ["HTML", "CSS", "JavaScript", "PHP"],
        image: "https://deemaessam.github.io/pics/pizza.gif",
        shortDescription:
            "Restaurant menu website with evaluation features.",
        fullDescription:
            "Developed a restaurant menu website allowing users to browse menus, submit evaluations, and receive recommendations.",
        date: "Dec 18, 2022",
        github: ""
    },

    {
        id: "numbers-game",
        title: "Numbers Game",
        category: "web",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "https://deemaessam.github.io/pics/game.gif",
        shortDescription:
            "Educational numbers game for learning German.",
        fullDescription:
            "An educational game developed to help learners practice numbers as part of a German language course.",
        date: "Apr 19, 2023",
        github: ""
    },

    {
        id: "book-club",
        title: "Book Club",
        category: "cpp",
        tools: ["C++"],
        image: "https://deemaessam.github.io/pics/book.png",
        shortDescription:
            "Book club management program.",
        fullDescription:
            "A C++ program designed to manage book club members, books, and borrowing activities.",
        date: "May 16, 2022",
        github: ""
    },

    {
        id: "store-system",
        title: "Store Management System",
        category: "python",
        tools: ["Python"],
        image: "https://deemaessam.github.io/pics/storee.png",
        shortDescription:
            "Simple store management system.",
        fullDescription:
            "A Python-based program to manage store inventory with basic CRUD operations.",
        date: "Apr 1, 2021",
        github: ""
    },

    {
        id: "research-tracker",
        title: "Research Tracker",
        category: "python web",
        tools: ["Python"],
        image: "https://deemaessam.github.io/pics/presentation.gif",
        shortDescription:
            "Website for searching and exporting research results.",
        fullDescription:
            "A web application that allows users to search academic research results and export them into Excel files.",
        date: "May 16, 2022",
        github: ""
    },

    {
        id: "blood-donation",
        title: "Blood Donation System",
        category: "sql",
        tools: ["SQL"],
        image: "https://deemaessam.github.io/pics/mainform1.jpeg",
        shortDescription:
            "Blood donation database system.",
        fullDescription:
            "Designed a database system for managing blood donations with login and registration features.",
        date: "May 16, 2022",
        github: ""
    }
];

