const projects = [
    // 🔘⚪️🟢🟡⚫️🟣🟠🔴🔵🟤🔺🔻🔸🔳🔷🔶🔹🔲▪️▫️◾️🟥◻️◼️◽️🟧🟨🟩🟦🟫⬜️🟪🟪♦️💬

    // Tourism Project
    {
        id: "Tourism-project",
        title: "AI-based Tourism Recommendation System🎓✈️",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/UiUx_Tourism.png",
        shortDescription: "",
        fullDescription: 
        `
            A web-based travel recommendation system that provides personalized destination suggestions using AI, tailored to user preferences such as travel persona, favorite themes, keywords, and budget.
            🔹Key Features:
            🔺User Management: Registration, login, and session tracking for a personalized experience.
            🔺Persona-Based Recommendations: Based on users’ answers (theme, travel style, budget, and keywords), the system assigns a travel persona 
                  (e.g., Adventure Seeker, Cultural Explorer) and suggests destinations matching that persona.
            🔺AI-Powered Matching: Cosine similarity is calculated between user keywords and dataset columns (description + reviews) to filter and rank destinations relevant to the user’s persona.
            🔺Interactive Interface: Clean web design with dynamic destination cards for easy exploration.
            🔺Database Integration: MySQL stores user info and persona data, allowing updates and persistent personalized recommendations.

            🔹Technologies Used:
            🔺Python (Flask) for backend and AI logic
            🔺Pandas for dataset processing and similarity calculations
            🔺MySQL for data storage
            🔺HTML, CSS, Bootstrap, and Jinja2 for frontend and templating

            This project demonstrates a full-stack application that combines AI-driven insights with persona-based personalization, offering users tailored travel recommendations and an engaging interface.
        
        `,
        date: "Jun 4, 2025",
        github: ""
    },

// customer-sales-analysis
    {
        id: "customer-sales-analysis",
        title: "Customer & Sales Analysis for an Online Store",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/Customer%20%26%20Sales%20Analysis%20for%20an%20Online%20Store.png",
        shortDescription: "Interactive dashboards to analyze customers, sales performance, and time series trends.",
        fullDescription: `
            I built an analytical report that includes several dashboards, each designed to answer different business questions and support data-driven decision-making.

            🔹 Dashboard 1 – Customer Analysis: Analyzes customer behavior, distribution by gender and location, and customer spending value.

            🔹 Dashboard 2 – Sales Analysis: Examines overall sales performance, top-performing categories and products, and the impact of discounts on sales.

            🔹 Dashboard 3 – Time Series Analysis: Explores sales trends over time and identifies seasonal patterns to support future sales forecasting.

            🔍 Interactive Slicers: Date · Location · Gender

             These slicers enable users to analyze data from multiple perspectives and easily compare performance across periods, regions, and customer segments.
    `,
        date: "Jan 4, 2026",
        github: ""
    },
// tourism dataset
    {
        id: "tourism-dataset",
        title: "Building a High-Quality Dataset for Tourism Analytics",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/tourism.png?raw=true",
        shortDescription:
            "Created a clean and structured dataset for tourism analytics.",
        fullDescription:
            `
            This project aimed to create a comprehensive, high-quality dataset to support any tourism-related project, beyond just recommendation systems.

            Project Roadmap & Contributions:

            🔹 Research & Feature Selection: Reviewed academic papers to identify key features for tourism analytics.

            🔹 Data Collection: Web-scraped and gathered data from trusted sources, including TripAdvisor, Google Maps, and two Kaggle datasets 
            (Entertainment Destinations in KSA & Cafe Shops in Riyadh).

            🔹 Dataset Integration: Merged multiple sources to compile detailed information on 20,000+ tourist destinations, including:
            🔺 Names, descriptions, ratings, and reviews
            🔺 Geographical coordinates and addresses
            🔺 Web URLs and official websites
            🔺 Visitor sentiment via text ratings and sentiment analysis
            🔺 Attributes like travel modes (family, solo) and city/region

            🔹 Data Preprocessing:
            🔺 Deduplication: Removed repeated entries for the same destinations across different sources.
            🔺 Standardization: Unified naming conventions, theme categories, and location formats to maintain consistency.
            🔺 Noise Removal: Eliminated irrelevant data, special characters, and placeholders from text fields.
            🔺 Handling Missing Values: Filled or removed incomplete entries to ensure a complete and reliable dataset.
            🔺 Translation: Converted non-English entries to English for uniformity.
            🔺 Feature Engineering: Added derived features such as sentiment scores from user reviews, travel mode indicators, and numeric encodings for categorical data to facilitate analysis.

            🔹 Visualization & Insights: Reduced themes, removed duplicates, and visualized data to uncover patterns, trends, and actionable insights for tourism stakeholders.

            This dataset provides a reliable foundation for projects in tourism analytics, destination recommendation, sentiment analysis, and strategic planning.
            `,
        date: "Jun 2, 2025",
        github: "https://github.com/DeemaEssam"
    },
// Khayrkom
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
// YUSUR
    {
        id: "Yusur",
        title: "Beneficiary Data Analysis – Yusr Association",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/تحليل%20بيانات%20مستفيدين%20مركز%20الحياة%20المطمئنة%202025م.jpg?raw=tru",
        shortDescription:
            "Interactive dashboards for beneficiary data analysis.",
        fullDescription:
            `
            As part of my volunteer work as an Administrative Assistant and Data Analyst at Yusr Association for Family Development – Al- Hayat Al - Mutma’inah Center 🤍,

            I developed an interactive dashboard using Power BI as part of operational tasks, aiming to transform raw data into clear indicators that support administrative planning and monitoring.

        The dashboard enables:

        🔹 Analyzing monthly changes in the number of beneficiaries and family consultation requests

        🔹 Understanding the distribution of beneficiaries by gender(male / female)

        🔹 Analyzing the most requested types of family consultations
        
        🔹 Measuring the impact of initiatives through the number of beneficiaries per initiative

        This tool contributed to facilitating decision - making, improving monitoring, and identifying the actual need for services based on data.
            
            
            `,
        date: "Dec 2025",
        github: ""
    },
// Sakhaa 
    {
        id: "sakhaa-performance",
        title: "Sakhaa Association – Annual Performance Analysis",
        category: "powerbi",
        tools: ["Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/%D8%B3%D8%AE%D8%A7.png?raw=true",
        shortDescription:
            "Annual performance dashboard for Sakhaa Association.",
        fullDescription:
            `
            I volunteered with Sakhaa Association through the National Volunteer Platform in a data analysis opportunity within the Marketing Department.

            During this experience, I worked on:

            🔹 Receiving the association’s annual work and achievement data.

            🔹 Organizing and analyzing the data to make it presentation-ready.

            🔹 Designing an interactive dashboard using Excel to visually highlight the association’s efforts and key performance indicators.

            This was a valuable experience that enhanced my skills in transforming data into actionable insights and supporting decision-making in a simple and effective way.
`,
        date: "Sep 2025",
        github: ""
    },
// Real estate
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
// sales-data-analysis
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
// IMDB-EDA
    {
        id: "imdb-eda",
        title: "IMDb Movie Ratings EDA",
        category: "powerbi python",
        tools: ["Python", "Power BI"],
        image: "https://github.com/DeemaEssam/DeemaEssam.github.io/blob/main/pics/movies.png?raw=true",
        shortDescription:
            "Exploratory data analysis on IMDb movie ratings.",
        fullDescription:
            `
            Conducted Exploratory Data Analysis (EDA) on IMDb movie ratings to understand user preferences. 
            🔺The project involved data cleaning, and preprocessing using Python, followed by data visualization in Power BI to present insights effectively.
            `,
        date: "Aug 28, 2025",
        github: "https://github.com/DeemaEssam"
    },
// thyroid-disease
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
// MENU web
    {
        id: "menu-website",
        title: "Menu Website",
        category: "web",
        tools: ["HTML", "CSS", "JavaScript", "PHP"],
        image: "https://deemaessam.github.io/pics/pizza.gif",
        shortDescription:
            "Restaurant menu website with evaluation features.",
        fullDescription:
            `
            🔺Designed and developed the website along with a database containing tables for users and messages.
            🔺Implemented CRUD functionalities(Create, Read, Update, Delete) for managing customer and message data.
            🔺Managed user permissions, allowing only administrators to delete data.
            `,
        date: "Dec 18, 2022",
        github: ""
    },
// Numbers Game
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
// Book Club
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
// STORE SYSTEM
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
// Research tracker
    {
        id: "research-tracker",
        title: "Research Tracker",
        category: "python web",
        tools: ["Python"],
        image: "https://deemaessam.github.io/pics/presentation.gif",
        shortDescription:
            "Website for searching and exporting research results.",
        fullDescription:
            `
            🔺Developed a Python-based tool to track scholarly research and analyze authors’ publications on Google Scholar.
            🔺Built a user-friendly web interface using Flask, allowing users to explore a scholar’s work and download results as an Excel file.
            🔺Implemented backend logic to fetch, organize, and export data efficiently, ensuring a seamless user experience.
            🔺Integrated Python scripts with Flask APIs for real-time data retrieval and processing.
            
            `,
        date: "May 16, 2022",
        github: ""
    },
// Blood donation
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
    },

// AI chatvoice
    {
        id: "ai-chatvoice",
        title: "AI ChatVoice",
        category: "html sql php python flask",
        tools: ["HTML/ SQL/ PHP/ PYTHON"],
        image: "https://raw.githubusercontent.com/DeemaEssam/DeemaEssam.github.io/refs/heads/main/pics/AiChatVoice.png",
        // video: "https://private-user-images.githubusercontent.com/106381596/352356818-bbbad12f-2184-4fd5-becb-8aa6fae97876.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njc4ODEzNzksIm5iZiI6MTc2Nzg4MTA3OSwicGF0aCI6Ii8xMDYzODE1OTYvMzUyMzU2ODE4LWJiYmFkMTJmLTIxODQtNGZkNS1iZWNiLThhYTZmYWU5Nzg3Ni5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDEwOFQxNDA0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNGI5N2MzYmRkMGZiMWQ3Y2QyZDBiMzNlNTJmYTZjZDE2NTE3YTRiZDAzNWI5OGE1OGJhMTgxZjBhMjAzZjVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Iabnnnqzrwp_RvXjd522GwmYlmZ8G_b9gPQyTFeQWtM",
        
        shortDescription:
            "chatbot application that integrates speech recognition and synthesis with a web-based interface.",
        fullDescription:
            `
            AIChatVoice is a chatbot application that integrates speech recognition and synthesis with a web-based interface. Built with Node.js, Express, and the OpenAI API, this project provides an interactive experience by converting spoken language into text and delivering vocal responses. The application includes a feature to choose between English and Arabic languages and records user transcripts and AI responses in a MySQL database through a PHP script.

            Features:
            🔺Speech Recognition: Converts spoken input into text.
            🔺Speech Synthesis: Reads out AI responses in the chosen language.
            🔺Language Selection: Allows users to choose between English and Arabic.
            🔺Database Integration: Saves user transcripts and AI responses in a MySQL database.
            🔺Web Interface: Provides an intuitive user interface for chatbot interaction.
            `,
        date: "Jul 26, 2024",
        github: ""
    }
];
