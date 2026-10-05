// Comprehensive All-India Scholarship Database
const scholarshipDatabase = [
    {
        id: 1,
        title: "National Means-cum-Merit Scholarship (NMMSS)",
        provider: "Central Government",
        category: "General",
        maxIncome: 350000,
        eligibleCourses: ["Class 9", "Class 10"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "30 Oct 2026",
        documents: ["Income Certificate", "Class 8 Marksheet", "Bank Passbook (Aadhaar Seeded)", "Caste Certificate (if applicable)"],
        guide: [
            "Step 1: Visit the National Scholarship Portal (NSP) official website.",
            "Step 2: Register under 'Fresh Application' for NMMSS.",
            "Step 3: Fill in school details, DISE code, and personal credentials.",
            "Step 4: Upload scanned income proof and bank passbook.",
            "Step 5: Submit the form and get it verified by your school principal."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 2,
        title: "Pre-Matric Scholarship for Minorities",
        provider: "Central Government",
        category: "Minority",
        maxIncome: 100000,
        eligibleCourses: ["Class 9", "Class 10"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "15 Nov 2026",
        documents: ["Income Certificate", "Previous Class Marksheet", "Fee Receipt", "Bank Account Details"],
        guide: [
            "Step 1: Go to the National Scholarship Portal (NSP).",
            "Step 2: Complete student registration with valid mobile and Aadhaar details.",
            "Step 3: Select Pre-Matric Scholarship scheme for Minorities.",
            "Step 4: Enter institute code and upload required certificates.",
            "Step 5: Final submit and print the application copy."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 3,
        title: "Post Matric Scholarship for Minorities",
        provider: "Central Government",
        category: "Minority",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "31 Oct 2026",
        documents: ["Income Certificate", "Aadhaar Card", "Previous Marksheet", "Bank Passbook", "Fee Receipt"],
        guide: [
            "Step 1: Visit NSP Portal and log in as a renewal/fresh applicant.",
            "Step 2: Fill course details for college or higher secondary education.",
            "Step 3: Upload income and fee receipts issued by the institute.",
            "Step 4: Submit application online before the deadline."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 4,
        title: "AICTE Pragati Scholarship for Girls (Technical Degree/Diploma)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Admission Letter (CET/JEE/Direct)", "Tuition Fee Receipt", "Category Certificate", "Bank Passbook in Student's Name"],
        guide: [
            "Step 1: Visit the official AICTE India website or National AICTE Scholarship portal.",
            "Step 2: Register with student credentials and select Pragati Scheme.",
            "Step 3: Upload college admission proof and tuition fee receipt signed by the director/principal.",
            "Step 4: Submit and save the acknowledgment."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 5,
        title: "INSPIRE Scholarship for Higher Education (SHE)",
        provider: "Central Government",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["BSc", "BTech"],
        minPercentage: 85.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Class 12 Marksheet (Top 1% in Board)", "Enrolment Certificate from College/University", "Bank Details"],
        guide: [
            "Step 1: Visit the Department of Science and Technology (DST) INSPIRE web portal.",
            "Step 2: Check eligibility via board cut-off lists published online.",
            "Step 3: Create an account and submit online application with class 12 marksheet.",
            "Step 4: Upload college endorsement form signed by the Registrar/Principal."
        ],
        officialLink: "https://online-inspire.gov.in"
    },
    {
        id: 6,
        title: "Uttar Pradesh Post Matric Scholarship (SC/ST/OBC/General)",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "Uttar Pradesh",
        deadline: "10 Nov 2026",
        documents: ["UP Domicile Certificate", "Caste Certificate", "Income Certificate with Serial Number", "Aadhaar Card linked to Bank"],
        guide: [
            "Step 1: Visit the UP Scholarship official portal (Scholarship UP).",
            "Step 2: Register under 'Student' section and choose your category & course level.",
            "Step 3: Fill out the detailed form using Aadhaar authentication.",
            "Step 4: Take a draft printout, verify details from college, and final submit."
        ],
        officialLink: "https://scholarship.up.gov.in"
    },
    {
        id: 7,
        title: "Uttarakhand State Merit Scholarship",
        provider: "State Government",
        category: "General",
        maxIncome: 300000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Class 12"],
        minPercentage: 70.0,
        state: "Uttarakhand",
        deadline: "15 Nov 2026",
        documents: ["Uttarakhand Domicile Certificate", "Latest Marksheet", "College Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Go to the Uttarakhand State Scholarship Portal.",
            "Step 2: Register as a new student using mobile verification.",
            "Step 3: Select State Merit Scholarship Scheme and fill academic data.",
            "Step 4: Attach domicile certificate and fee receipt, then submit."
        ],
        officialLink: "https://scholarship.uk.gov.in"
    },
    {
        id: 8,
        title: "Sitaram Jindal Foundation Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 400000,
        eligibleCourses: ["Class 11", "Class 12", "ITI", "Diploma", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Marksheet of Last Exam Passed", "Fee Receipt", "Income Certificate", "Certificate of Disability/Widow (if applicable)"],
        guide: [
            "Step 1: Download the application form from the Sitaram Jindal Foundation official website.",
            "Step 2: Fill out the physical or online application form carefully.",
            "Step 3: Attach attested copies of marksheets, income proof, and fee structure.",
            "Step 4: Post or submit the application to the designated foundation address."
        ],
        officialLink: "https://www.sitaramjindalfoundation.org"
    },
    {
        id: 9,
        title: "Tata Capital Pankh Scholarship Programme",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "BCA", "BTech"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "15 Dec 2026",
        documents: ["Previous Year Marksheet", "Identity Proof (Aadhaar/School ID)", "Income Proof", "Current Year Fee Receipt"],
        guide: [
            "Step 1: Visit BuddyStudy or Tata Capital Pankh portal partner page.",
            "Step 2: Click on 'Apply Now' button and log in with email/mobile.",
            "Step 3: Fill in personal, academic, and family income details.",
            "Step 4: Upload necessary documents and submit the application."
        ],
        officialLink: "https://www.tatacapital.com"
    },
    {
        id: 10,
        title: "LIC HFL Vidyadhan Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 360000,
        eligibleCourses: ["Class 11", "Graduation (BCA/BTech/BSc)"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Class 10/12 Marksheet", "Family Income Proof", "Admission Proof for current year", "Bank Passbook"],
        guide: [
            "Step 1: Go to the official LIC HFL Vidyadhan scholarship portal.",
            "Step 2: Register and review eligibility criteria for school or college category.",
            "Step 3: Complete application form with accurate marks and family details.",
            "Step 4: Upload scanned documents and submit."
        ],
        officialLink: "https://www.lichousing.com"
    },
    {
        id: 11,
        title: "Prime Minister's Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
        provider: "Central Government",
        category: "General",
        maxIncome: 600000,
        eligibleCourses: ["BTech", "BCA", "BSc", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Service Certificate issued by HOO", "PPO/Discharge Certificate (for Ex-Personnel)", "Previous Marksheet", "Bank Passbook"],
        guide: [
            "Step 1: Open the National Scholarship Portal (NSP).",
            "Step 2: Register/Login under Central Schemes managed by Ministry of Home Affairs.",
            "Step 3: Select PMSS for CAPF and Assam Rifles.",
            "Step 4: Upload service verification certificate and academic marksheets.",
            "Step 5: Submit the form online."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 12,
        title: "Central Sector Scheme of Scholarship for College and University Students (CSSS)",
        provider: "Central Government",
        category: "General",
        maxIncome: 450000,
        eligibleCourses: ["Class 12", "BCA", "BTech", "BSc"],
        minPercentage: 80.0,
        state: "All-India",
        deadline: "31 Oct 2026",
        documents: ["Class 12 Marksheet (Above 80th Percentile)", "Income Certificate", "Aadhaar Card", "Bank Account Details"],
        guide: [
            "Step 1: Check your board's top 20 percentile cutoff list.",
            "Step 2: Visit NSP portal and select Department of Higher Education scheme.",
            "Step 3: Fill personal and educational details accurately.",
            "Step 4: Upload verified documents and lock your application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 13,
        title: "Post-Matric Scholarship for SC Students",
        provider: "Central Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 45.0,
        state: "All-India",
        deadline: "15 Nov 2026",
        documents: ["Caste Certificate (SC)", "Income Certificate", "Fee Receipt", "Bank Passbook linked with Aadhaar"],
        guide: [
            "Step 1: Go to NSP Portal under Ministry of Social Justice and Empowerment.",
            "Step 2: Select Post-Matric Scholarship for SC Students.",
            "Step 3: Enter institute and fee details.",
            "Step 4: Attach valid caste and income certificates and submit."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 14,
        title: "Post-Matric Scholarship for ST Students",
        provider: "Central Government",
        category: "ST",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 45.0,
        state: "All-India",
        deadline: "15 Nov 2026",
        documents: ["Caste Certificate (ST)", "Income Certificate", "Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Visit National Scholarship Portal.",
            "Step 2: Register under Ministry of Tribal Affairs schemes.",
            "Step 3: Fill up course and institution credentials.",
            "Step 4: Upload scanned documents and complete final submission."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 15,
        title: "AICTE Saksham Scholarship Scheme for Specially Abled Students (Degree)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Disability Certificate (minimum 40%)", "Admission Letter", "Tuition Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Visit AICTE official portal.",
            "Step 2: Navigate to Saksham scholarship section.",
            "Step 3: Upload UDID / Medical Board disability certificate.",
            "Step 4: Submit application before deadline."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 16,
        title: "UGC PG Indira Gandhi Scholarship for Single Girl Child",
        provider: "Central Government",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Affidavit proving Single Girl Child status", "PG Admission Proof", "Graduation Marksheet", "Bank Passbook"],
        guide: [
            "Step 1: Open National Scholarship Portal (NSP) under UGC schemes.",
            "Step 2: Select Indira Gandhi Scholarship for Single Girl Child.",
            "Step 3: Upload mandatory affidavit and university admission certificate.",
            "Step 4: Submit and verify through institution."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 17,
        title: "MahaDBT Post-Matric Scholarship for OBC Students",
        provider: "State Government",
        category: "OBC",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "Maharashtra",
        deadline: "30 Nov 2026",
        documents: ["Maharashtra Domicile Certificate", "OBC Caste Certificate", "Non-Creamy Layer Certificate", "Income Certificate"],
        guide: [
            "Step 1: Visit MahaDBT official portal.",
            "Step 2: Create profile and verify Aadhaar linkage.",
            "Step 3: Search for OBC Post-Matric Scholarship under Department of Social Justice.",
            "Step 4: Fill form and attach caste validity/non-creamy layer documents."
        ],
        officialLink: "https://mahadbt.maharashtra.gov.in"
    },
    {
        id: 18,
        title: "Bihar Post-Matric Scholarship for BC and EBC Students",
        provider: "State Government",
        category: "OBC",
        maxIncome: 300000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "Bihar",
        deadline: "15 Dec 2026",
        documents: ["Bihar Residential Certificate", "BC/EBC Caste Certificate", "Income Certificate", "Fee Receipt"],
        guide: [
            "Step 1: Go to Bihar PMS Online portal.",
            "Step 2: Register using student registration credentials.",
            "Step 3: Enter institution details and upload scanned certificates.",
            "Step 4: Finalize and submit application online."
        ],
        officialLink: "https://pmsonline.bih.nic.in"
    },
    {
        id: 19,
        title: "Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 60.0,
        state: "West Bengal",
        deadline: "30 Nov 2026",
        documents: ["West Bengal Domicile Proof", "Marksheet of last qualifying exam", "Income Certificate", "Admission Receipt"],
        guide: [
            "Step 1: Visit SVMCM official West Bengal portal.",
            "Step 2: Register as a fresh applicant.",
            "Step 3: Fill up academic and family income details.",
            "Step 4: Upload marksheets and submit online."
        ],
        officialLink: "https://svmcm.wbhed.gov.in"
    },
    {
        id: 20,
        title: "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY)",
        provider: "State Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BTech", "BSc", "BCA", "Post Graduation"],
        minPercentage: 70.0,
        state: "Madhya Pradesh",
        deadline: "15 Dec 2026",
        documents: ["MP Domicile Certificate", "Class 12 Marksheet (70%+ in MP Board or 85%+ in CBSE)", "Aadhaar Card", "Fee Structure from College"],
        guide: [
            "Step 1: Visit MP Scholarship Portal (MMVY section).",
            "Step 2: Register with Samagra ID and Aadhaar.",
            "Step 3: Enter college admission and fee details.",
            "Step 4: Submit application for tuition fee waiver."
        ],
        officialLink: "http://scholarshipportal.mp.nic.in"
    },
    {
        id: 21,
        title: "MahaDBT Rajarshi Chhatrapati Shahu Maharaj Fee Reimbursement",
        provider: "State Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma", "Post Graduation"],
        minPercentage: 50.0,
        state: "Maharashtra",
        deadline: "30 Nov 2026",
        documents: ["Maharashtra Domicile", "Income Certificate", "College Fee Receipt", "Previous Marksheet"],
        guide: [
            "Step 1: Visit MahaDBT Portal.",
            "Step 2: Login or register under 'Applicant Login'.",
            "Step 3: Select Higher Education / Technical Education department.",
            "Step 4: Apply for Shahu Maharaj Fee Reimbursement scheme and submit."
        ],
        officialLink: "https://mahadbt.maharashtra.gov.in"
    },
    {
        id: 22,
        title: "MahaDBT Dr. Panjabrao Deshmukh Hostel Allowance Scheme",
        provider: "State Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma"],
        minPercentage: 50.0,
        state: "Maharashtra",
        deadline: "15 Dec 2026",
        documents: ["Hostel Admission Proof / Rent Agreement", "Domicile Certificate", "Income Proof", "College Fee Receipt"],
        guide: [
            "Step 1: Go to MahaDBT portal and log into your account.",
            "Step 2: Navigate to Panjabrao Deshmukh Hostel Allowance scheme.",
            "Step 3: Upload certified hostel or room rent documents.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://mahadbt.maharashtra.gov.in"
    },
    {
        id: 23,
        title: "Bihar Post-Matric Scholarship for SC and ST Students",
        provider: "State Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 45.0,
        state: "Bihar",
        deadline: "30 Nov 2026",
        documents: ["Caste Certificate (SC/ST)", "Residential Certificate", "Income Certificate", "Bank Passbook"],
        guide: [
            "Step 1: Visit Bihar PMS Online portal.",
            "Step 2: Choose SC/ST registration link.",
            "Step 3: Provide institute and bank details securely.",
            "Step 4: Complete final form submission."
        ],
        officialLink: "https://pmsonline.bih.nic.in"
    },
    {
        id: 24,
        title: "West Bengal Oasis Post-Matric Scholarship for SC/ST/OBC",
        provider: "State Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "West Bengal",
        deadline: "15 Dec 2026",
        documents: ["Caste Certificate issued by WB authority", "Income Certificate", "Marksheet", "Bank Account Details"],
        guide: [
            "Step 1: Open Oasis West Bengal Portal.",
            "Step 2: Register as a new student.",
            "Step 3: Fill out the Post-Matric Scholarship application form.",
            "Step 4: Print hardcopy and submit it along with documents to your institution."
        ],
        officialLink: "https://oasis.gov.in"
    },
    {
        id: 25,
        title: "Kanyashree Prakalpa Scheme (West Bengal)",
        provider: "State Government",
        category: "General",
        maxIncome: 120000,
        eligibleCourses: ["Class 9", "Class 10", "Class 11", "Class 12", "BCA", "BTech", "BSc"],
        minPercentage: 45.0,
        state: "West Bengal",
        deadline: "31 Dec 2026",
        documents: ["Unmarried Status Declaration", "School/College Admission Certificate", "Bank Account in Student's Name", "Identity Proof"],
        guide: [
            "Step 1: Contact your school or college head/institution authority for Kanyashree ID.",
            "Step 2: Fill out the physical application form verified by the institution.",
            "Step 3: Submit documents to the DWO through your school/college."
        ],
        officialLink: "https://www.wbkanyashree.gov.in"
    },
    {
        id: 26,
        title: "Madhya Pradesh MPTAAS Post-Matric Scholarship for SC/ST",
        provider: "State Government",
        category: "SC",
        maxIncome: 600000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma", "Post Graduation"],
        minPercentage: 50.0,
        state: "Madhya Pradesh",
        deadline: "30 Nov 2026",
        documents: ["MPTAAS Profile ID", "Caste Certificate", "Income Certificate", "Samagra ID", "Fee Receipt"],
        guide: [
            "Step 1: Visit the MPTAAS tribal welfare portal of Madhya Pradesh.",
            "Step 2: Create or update your beneficiary profile using Aadhaar.",
            "Step 3: Apply for Post-Matric scholarship under your registered profile.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://www.tribal.mp.gov.in/MPTAAS"
    },
    {
        id: 27,
        title: "Digital Gujarat Post-Matric Scholarship for SC/ST/SEBC",
        provider: "State Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma", "Post Graduation"],
        minPercentage: 50.0,
        state: "Gujarat",
        deadline: "30 Nov 2026",
        documents: ["Gujarat Domicile", "Caste Certificate", "Income Certificate", "Fees Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Go to Digital Gujarat portal.",
            "Step 2: Register with mobile number and email ID.",
            "Step 3: Choose Scholarship services and select Post-Matric category.",
            "Step 4: Save and submit application."
        ],
        officialLink: "https://www.digitalgov.gujarat.gov.in"
    },
    {
        id: 28,
        title: "Mukhyamantri Yuva Swavalamban Yojana (MYSY Gujarat)",
        provider: "State Government",
        category: "General",
        maxIncome: 600000,
        eligibleCourses: ["BTech", "BCA", "Diploma"],
        minPercentage: 80.0,
        state: "Gujarat",
        deadline: "15 Dec 2026",
        documents: ["Class 10/12 Marksheet (80+ percentile)", "Income Certificate", "Admission Letter", "Bank Details"],
        guide: [
            "Step 1: Visit MYSY Gujarat official portal.",
            "Step 2: Register as a fresh student with board details.",
            "Step 3: Upload fee receipt and merit/marks verification documents.",
            "Step 4: Submit the form at the nearest Help Center."
        ],
        officialLink: "https://mysy.gujarat.gov.in"
    },
    {
        id: 29,
        title: "Rajasthan Uttar Matric Scholarship",
        provider: "State Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Post Graduation", "Diploma"],
        minPercentage: 45.0,
        state: "Rajasthan",
        deadline: "30 Nov 2026",
        documents: ["Jan Aadhaar Card / SSO ID", "Bonafide Residential Certificate of Rajasthan", "Caste Certificate", "Income Certificate"],
        guide: [
            "Step 1: Log in to Rajasthan SSO portal.",
            "Step 2: Select 'SJE Scholar' app icon.",
            "Step 3: Fill out Uttar Matric Scholarship application form with Jan Aadhaar.",
            "Step 4: Attach required documents and submit."
        ],
        officialLink: "https://sje.rajasthan.gov.in"
    },
    {
        id: 30,
        title: "Karnataka State Scholarship Portal (SSP) Post-Matric",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "Karnataka",
        deadline: "15 Dec 2026",
        documents: ["Karnataka Student ID (SATS/College ID)", "Aadhaar Card linked to bank", "Income and Caste Certificate", "Fee Receipt"],
        guide: [
            "Step 1: Visit Karnataka SSP official website.",
            "Step 2: Create a student account using e-Attestation ID.",
            "Step 3: Fill post-matric scholarship details.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://ssp.karnataka.gov.in"
    },
    {
        id: 31,
        title: "Mukhyamantri Jan Kalyan Shiksha Protsahan Yojana (MMJKSY MP)",
        provider: "State Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BTech", "BCA", "BSc", "Diploma"],
        minPercentage: 60.0,
        state: "Madhya Pradesh",
        deadline: "15 Dec 2026",
        documents: ["MP Domicile Certificate", "Labor Card / Construction Worker Registration Proof", "Admission Letter", "Fee Details"],
        guide: [
            "Step 1: Visit the MP Scholarship Portal.",
            "Step 2: Check eligibility under Jan Kalyan (Shramik) scheme.",
            "Step 3: Submit labor registration card details along with academic records.",
            "Step 4: Finalize online submission."
        ],
        officialLink: "http://scholarshipportal.mp.nic.in"
    },
    {
        id: 32,
        title: "Chief Minister's Higher Education Scholarship Scheme (Rajasthan)",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 12", "BCA", "BTech", "BSc"],
        minPercentage: 60.0,
        state: "Rajasthan",
        deadline: "30 Nov 2026",
        documents: ["Rajasthan Bonafide Certificate", "Class 12 Marksheet", "Jan Aadhaar Card", "Fee Receipt"],
        guide: [
            "Step 1: Access Rajasthan SSO portal.",
            "Step 2: Open SJE portal application section.",
            "Step 3: Select Chief Minister Higher Education Scholarship Scheme.",
            "Step 4: Upload required proofs and submit."
        ],
        officialLink: "https://sje.rajasthan.gov.in"
    },
    {
        id: 33,
        title: "Prerana Post-Matric Scholarship for SC/ST/OBC (Odisha)",
        provider: "State Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "Odisha",
        deadline: "15 Dec 2026",
        documents: ["Odisha State Residential Certificate", "Caste Certificate", "Income Certificate", "Bank Passbook"],
        guide: [
            "Step 1: Go to Odisha State Scholarship Portal (Prerana).",
            "Step 2: Register with student Aadhaar and personal details.",
            "Step 3: Select corresponding category and course level.",
            "Step 4: Lock and submit application online."
        ],
        officialLink: "https://scholarship.odisha.gov.in"
    },
    {
        id: 34,
        title: "e-Kalyan Jharkhand Post-Matric Scholarship",
        provider: "State Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "Jharkhand",
        deadline: "30 Nov 2026",
        documents: ["Jharkhand Residential Certificate", "Valid Caste Certificate", "Income Certificate", "Bonafide Certificate from Institute"],
        guide: [
            "Step 1: Visit e-Kalyan Jharkhand portal.",
            "Step 2: Register as a new user.",
            "Step 3: Fill out the Post-Matric scholarship form and upload scanned documents.",
            "Step 4: Submit application before the due date."
        ],
        officialLink: "https://ekalyan.cgg.gov.in"
    },
    {
        id: 35,
        title: "Telangana ePass Post-Matric Scholarship",
        provider: "State Government",
        category: "SC",
        maxIncome: 200000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma", "Post Graduation"],
        minPercentage: 50.0,
        state: "Telangana",
        deadline: "15 Dec 2026",
        documents: ["Telangana Nativity & Residence Certificate", "Caste Certificate", "Income Certificate", "College Admission Details"],
        guide: [
            "Step 1: Go to Telangana ePass official website.",
            "Step 2: Select Post-Matric Scholarship option.",
            "Step 3: Enter SSC hall ticket number and college registration code.",
            "Step 4: Complete submission and print acknowledgment."
        ],
        officialLink: "https://telanganaepass.cgg.gov.in"
    },
    {
        id: 36,
        title: "Andhra Pradesh Jagananna Vidya Deevena (Fee Reimbursement)",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma", "Post Graduation"],
        minPercentage: 50.0,
        state: "Andhra Pradesh",
        deadline: "30 Nov 2026",
        documents: ["AP White Ration Card / Income Certificate", "Aadhaar Card of Student and Mother", "College Fee Structure", "Bank Account Details"],
        guide: [
            "Step 1: Visit AP JnanaBhumi portal.",
            "Step 2: Verify details through college principal.",
            "Step 3: Register for Vidya Deevena fee reimbursement scheme.",
            "Step 4: Submit application for direct bank transfer."
        ],
        officialLink: "https://jnanabhumi.ap.gov.in"
    },
    {
        id: 37,
        title: "Andhra Pradesh Jagananna Vasathi Deevena",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma"],
        minPercentage: 50.0,
        state: "Andhra Pradesh",
        deadline: "15 Dec 2026",
        documents: ["Hostel / Mess / Accommodation Proof", "Income Certificate", "JnanaBhumi Application ID", "Mother's Bank Account Linked to Aadhaar"],
        guide: [
            "Step 1: Access JnanaBhumi portal.",
            "Step 2: Check student details mapped with college authentication.",
            "Step 3: Apply for Vasathi Deevena food and hostel allowance.",
            "Step 4: Submit online."
        ],
        officialLink: "https://jnanabhumi.ap.gov.in"
    },
    {
        id: 38,
        title: "Haryana Post-Matric Scholarship for SC/OBC Students",
        provider: "State Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "Haryana",
        deadline: "30 Nov 2026",
        documents: ["Haryana Resident Certificate (Parivar Pehchan Patra / PPP)", "Caste Certificate", "Income Certificate", "Fee Receipt"],
        guide: [
            "Step 1: Visit Har-Chhatravriti Haryana Portal.",
            "Step 2: Login using Family ID (PPP).",
            "Step 3: Fill out Post-Matric Scholarship form for your respective category.",
            "Step 4: Upload verified documents and submit."
        ],
        officialLink: "https://harchhatravriti.highereduhry.ac.in"
    },
    {
        id: 39,
        title: "Punjab Ambedkar Post-Matric Scholarship Portal",
        provider: "State Government",
        category: "SC",
        maxIncome: 400000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 45.0,
        state: "Punjab",
        deadline: "15 Dec 2026",
        documents: ["Punjab Residence Proof", "SC Caste Certificate", "Income Certificate", "Bank Passbook"],
        guide: [
            "Step 1: Go to Dr. B.R. Ambedkar Punjab Scholarship Portal.",
            "Step 2: Register as a new student.",
            "Step 3: Complete academic and financial details.",
            "Step 4: Print submission copy and give it to institute."
        ],
        officialLink: "https://punjabscholarships.gov.in"
    },
    {
        id: 40,
        title: "Mukhyamantri Balak/Balika Protsahan Yojana (Bihar 10th Pass)",
        provider: "State Government",
        category: "General",
        maxIncome: 500000,
        eligibleCourses: ["Class 10"],
        minPercentage: 60.0,
        state: "Bihar",
        deadline: "31 Dec 2026",
        documents: ["Class 10 Marksheet & Roll Code/Number", "Aadhaar Card", "Bank Passbook in Student's Name", "Residential Certificate"],
        guide: [
            "Step 1: Visit Medhasoft Bihar portal.",
            "Step 2: Check your name in the eligible list using 10th registration details.",
            "Step 3: Register online with bank account and Aadhaar authentication.",
            "Step 4: Submit final application for direct cash incentive."
        ],
        officialLink: "https://medhasoft.bih.nic.in"
    },
    {
        id: 41,
        title: "Uttar Pradesh Pre-Matric Scholarship",
        provider: "State Government",
        category: "General",
        maxIncome: 100000,
        eligibleCourses: ["Class 9", "Class 10"],
        minPercentage: 50.0,
        state: "Uttar Pradesh",
        deadline: "15 Oct 2026",
        documents: ["UP Domicile Certificate", "Income Certificate", "Caste Certificate", "Bank Passbook Seeded with Aadhaar"],
        guide: [
            "Step 1: Visit the official UP Scholarship portal.",
            "Step 2: Register under the Pre-Matric student section.",
            "Step 3: Fill in school enrollment and personal details.",
            "Step 4: Take a printout and submit it to your school."
        ],
        officialLink: "https://scholarship.up.gov.in"
    },
    {
        id: 42,
        title: "Uttar Pradesh Post-Matric Intermediate (Class 11-12) Scholarship",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12"],
        minPercentage: 50.0,
        state: "Uttar Pradesh",
        deadline: "31 Oct 2026",
        documents: ["UP Domicile", "Income Certificate with Barcode/Serial Number", "Class 10 Marksheet", "Fee Receipt"],
        guide: [
            "Step 1: Go to the UP Scholarship portal.",
            "Step 2: Select 'Post-Matric Intermediate Fresh' registration.",
            "Step 3: Fill out the application form using Aadhaar authentication.",
            "Step 4: Lock and submit final copy to the college/school office."
        ],
        officialLink: "https://scholarship.up.gov.in"
    },
    {
        id: 43,
        title: "Uttar Pradesh Post-Matric Dashmattar (UG/PG/Diploma) Scholarship",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma", "Post Graduation"],
        minPercentage: 50.0,
        state: "Uttar Pradesh",
        deadline: "30 Nov 2026",
        documents: ["UP Domicile Certificate", "Caste & Income Certificates", "Enrolment / Roll Number", "Bank Account linked with Aadhaar"],
        guide: [
            "Step 1: Visit the UP Scholarship website.",
            "Step 2: Choose 'Post-Matric Dashmattar' student login/registration.",
            "Step 3: Enter university enrollment number and institute code.",
            "Step 4: Submit online application and verify with college."
        ],
        officialLink: "https://scholarship.up.gov.in"
    },
    {
        id: 44,
        title: "AICTE Pragati Scholarship Scheme for Girl Students (Diploma)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Admission Proof for Diploma Course", "Tuition Fee Receipt", "Category Certificate", "Bank Passbook"],
        guide: [
            "Step 1: Visit AICTE portal scholarship section.",
            "Step 2: Register under Pragati Scheme for Diploma students.",
            "Step 3: Upload admission documents and principal-signed fee receipt.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 45,
        title: "AICTE Saksham Scholarship Scheme for Specially Abled Students (Diploma)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Disability Certificate (40%+)", "Diploma Admission Letter", "Fee Receipt", "Bank Details"],
        guide: [
            "Step 1: Go to AICTE official portal.",
            "Step 2: Select Saksham scheme for Diploma students.",
            "Step 3: Upload valid medical board disability certificate.",
            "Step 4: Complete final submission."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 46,
        title: "AICTE Swanath Scholarship Scheme",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Death Certificate of Parents (for Orphans) or Martyr Certificate (for Armed Forces Wards)", "Admission Proof", "Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Open AICTE portal.",
            "Step 2: Choose Swanath scholarship category.",
            "Step 3: Upload orphanage / ward-of-martyr supporting documents.",
            "Step 4: Submit online application."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 47,
        title: "AICTE PG Scholarship (GATE/GPAT Qualified)",
        provider: "Central Government",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Valid GATE/GPAT Score Card", "Institutional Admission Letter", "Aadhaar Card", "Bank Account Details in Student's Name"],
        guide: [
            "Step 1: Visit AICTE PG scholarship portal.",
            "Step 2: Enter GATE/GPAT ID and institute details.",
            "Step 3: Generate unique ID and upload academic documents.",
            "Step 4: Get verification done by institute coordinator and submit."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 48,
        title: "UGC Ishan Uday Special Scholarship Scheme for North Eastern Region",
        provider: "Central Government",
        category: "General",
        maxIncome: 450000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["North-East Domicile Certificate", "Class 12 Marksheet", "College Admission Proof", "Bank Details"],
        guide: [
            "Step 1: Log in to National Scholarship Portal (NSP).",
            "Step 2: Select UGC Ishan Uday scheme.",
            "Step 3: Provide regional domicile and academic details.",
            "Step 4: Lock and submit application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 49,
        title: "UGC PG Scholarship for University Rank Holders",
        provider: "Central Government",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["University Rank Certificate / Gold Medal Proof", "Undergraduate Degree Marksheet", "PG Admission Letter", "Bank Details"],
        guide: [
            "Step 1: Visit NSP portal under UGC schemes.",
            "Step 2: Select University Rank Holder PG scholarship.",
            "Step 3: Attach official rank certificate verified by university registrar.",
            "Step 4: Submit application before deadline."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 50,
        title: "Prime Minister's Research Fellowship (PMRF)",
        provider: "Central Government",
        category: "General",
        maxIncome: 1500000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 80.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["BTech/MTech Degree Proof", "GATE Score / Research Proposal", "Institute Nomination Letter", "Bank Account Details"],
        guide: [
            "Step 1: Secure admission to PhD/Integrated PhD in eligible IISc/IIT institutes.",
            "Step 2: Apply through the official PMRF portal during direct or channel admission cycles.",
            "Step 3: Upload research background and academic credentials.",
            "Step 4: Complete application submission."
        ],
        officialLink: "https://pmrf.in"
    },
    {
        id: 41,
        title: "Uttar Pradesh Pre-Matric Scholarship",
        provider: "State Government",
        category: "General",
        maxIncome: 100000,
        eligibleCourses: ["Class 9", "Class 10"],
        minPercentage: 50.0,
        state: "Uttar Pradesh",
        deadline: "15 Oct 2026",
        documents: ["UP Domicile Certificate", "Income Certificate", "Caste Certificate", "Bank Passbook Seeded with Aadhaar"],
        guide: [
            "Step 1: Visit the official UP Scholarship portal.",
            "Step 2: Register under the Pre-Matric student section.",
            "Step 3: Fill in school enrollment and personal details.",
            "Step 4: Take a printout and submit it to your school."
        ],
        officialLink: "https://scholarship.up.gov.in"
    },
    {
        id: 42,
        title: "Uttar Pradesh Post-Matric Intermediate (Class 11-12) Scholarship",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12"],
        minPercentage: 50.0,
        state: "Uttar Pradesh",
        deadline: "31 Oct 2026",
        documents: ["UP Domicile", "Income Certificate with Barcode/Serial Number", "Class 10 Marksheet", "Fee Receipt"],
        guide: [
            "Step 1: Go to the UP Scholarship portal.",
            "Step 2: Select 'Post-Matric Intermediate Fresh' registration.",
            "Step 3: Fill out the application form using Aadhaar authentication.",
            "Step 4: Lock and submit final copy to the college/school office."
        ],
        officialLink: "https://scholarship.up.gov.in"
    },
    {
        id: 43,
        title: "Uttar Pradesh Post-Matric Dashmattar (UG/PG/Diploma) Scholarship",
        provider: "State Government",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Diploma", "Post Graduation"],
        minPercentage: 50.0,
        state: "Uttar Pradesh",
        deadline: "30 Nov 2026",
        documents: ["UP Domicile Certificate", "Caste & Income Certificates", "Enrolment / Roll Number", "Bank Account linked with Aadhaar"],
        guide: [
            "Step 1: Visit the UP Scholarship website.",
            "Step 2: Choose 'Post-Matric Dashmattar' student login/registration.",
            "Step 3: Enter university enrollment number and institute code.",
            "Step 4: Submit online application and verify with college."
        ],
        officialLink: "https://scholarship.up.gov.in"
    },
    {
        id: 44,
        title: "AICTE Pragati Scholarship Scheme for Girl Students (Diploma)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Admission Proof for Diploma Course", "Tuition Fee Receipt", "Category Certificate", "Bank Passbook"],
        guide: [
            "Step 1: Visit AICTE portal scholarship section.",
            "Step 2: Register under Pragati Scheme for Diploma students.",
            "Step 3: Upload admission documents and principal-signed fee receipt.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 45,
        title: "AICTE Saksham Scholarship Scheme for Specially Abled Students (Diploma)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Disability Certificate (40%+)", "Diploma Admission Letter", "Fee Receipt", "Bank Details"],
        guide: [
            "Step 1: Go to AICTE official portal.",
            "Step 2: Select Saksham scheme for Diploma students.",
            "Step 3: Upload valid medical board disability certificate.",
            "Step 4: Complete final submission."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 46,
        title: "AICTE Swanath Scholarship Scheme",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Death Certificate of Parents (for Orphans) or Martyr Certificate (for Armed Forces Wards)", "Admission Proof", "Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Open AICTE portal.",
            "Step 2: Choose Swanath scholarship category.",
            "Step 3: Upload orphanage / ward-of-martyr supporting documents.",
            "Step 4: Submit online application."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 47,
        title: "AICTE PG Scholarship (GATE/GPAT Qualified)",
        provider: "Central Government",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Valid GATE/GPAT Score Card", "Institutional Admission Letter", "Aadhaar Card", "Bank Account Details in Student's Name"],
        guide: [
            "Step 1: Visit AICTE PG scholarship portal.",
            "Step 2: Enter GATE/GPAT ID and institute details.",
            "Step 3: Generate unique ID and upload academic documents.",
            "Step 4: Get verification done by institute coordinator and submit."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 48,
        title: "UGC Ishan Uday Special Scholarship Scheme for North Eastern Region",
        provider: "Central Government",
        category: "General",
        maxIncome: 450000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["North-East Domicile Certificate", "Class 12 Marksheet", "College Admission Proof", "Bank Details"],
        guide: [
            "Step 1: Log in to National Scholarship Portal (NSP).",
            "Step 2: Select UGC Ishan Uday scheme.",
            "Step 3: Provide regional domicile and academic details.",
            "Step 4: Lock and submit application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 49,
        title: "UGC PG Scholarship for University Rank Holders",
        provider: "Central Government",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["University Rank Certificate / Gold Medal Proof", "Undergraduate Degree Marksheet", "PG Admission Letter", "Bank Details"],
        guide: [
            "Step 1: Visit NSP portal under UGC schemes.",
            "Step 2: Select University Rank Holder PG scholarship.",
            "Step 3: Attach official rank certificate verified by university registrar.",
            "Step 4: Submit application before deadline."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 50,
        title: "Prime Minister's Research Fellowship (PMRF)",
        provider: "Central Government",
        category: "General",
        maxIncome: 1500000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 80.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["BTech/MTech Degree Proof", "GATE Score / Research Proposal", "Institute Nomination Letter", "Bank Account Details"],
        guide: [
            "Step 1: Secure admission to PhD/Integrated PhD in eligible IISc/IIT institutes.",
            "Step 2: Apply through the official PMRF portal during direct or channel admission cycles.",
            "Step 3: Upload research background and academic credentials.",
            "Step 4: Complete application submission."
        ],
        officialLink: "https://pmrf.in"
    },
    {
        id: 61,
        title: "PM YASASVI Central Sector Scheme of Top Class Education in College for OBC, EBC and DNT",
        provider: "Central Government",
        category: "OBC",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["OBC / EBC / DNT Caste Certificate", "Income Certificate", "Admission in Notified Top Class Institution", "Bank Details"],
        guide: [
            "Step 1: Verify that your college is listed under the notified top-class institutions list.",
            "Step 2: Register on NSP portal under Ministry of Social Justice and Empowerment.",
            "Step 3: Upload tuition fee receipts and caste credentials.",
            "Step 4: Submit online application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 62,
        title: "Pre-Matric Scholarship for SC Students (Class 9 & 10)",
        provider: "Central Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 9", "Class 10"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["SC Caste Certificate", "Income Certificate", "School Enrollment Proof", "Bank Passbook"],
        guide: [
            "Step 1: Visit National Scholarship Portal (NSP).",
            "Step 2: Select Pre-Matric Scholarship for SC Students.",
            "Step 3: Fill in school code and personal details.",
            "Step 4: Submit application and get it verified by school authorities."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 63,
        title: "National Fellowship for SC Students (NFSC)",
        provider: "Central Government",
        category: "SC",
        maxIncome: 1000000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["SC Caste Certificate", "Master's Degree Marksheet", "PhD/MPhil Enrolment Certificate", "Bank Account Details"],
        guide: [
            "Step 1: Visit the official UGC / NSP portal for fellowship schemes.",
            "Step 2: Register under NFSC portal section.",
            "Step 3: Upload research admission proof and supervisor endorsement.",
            "Step 4: Complete online submission."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 64,
        title: "National Overseas Scholarship for SC Students",
        provider: "Central Government",
        category: "SC",
        maxIncome: 800000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Valid Passport", "Admission Letter from Foreign University", "SC Caste Certificate", "Income Certificate"],
        guide: [
            "Step 1: Visit Ministry of Social Justice and Empowerment overseas scholarship portal.",
            "Step 2: Register with foreign university admission details.",
            "Step 3: Upload passport and financial eligibility proofs.",
            "Step 4: Submit online before the final deadline."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 65,
        title: "Pre-Matric Scholarship for ST Students (Class 9 & 10)",
        provider: "Central Government",
        category: "ST",
        maxIncome: 250000,
        eligibleCourses: ["Class 9", "Class 10"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["ST Caste Certificate", "Income Certificate", "Previous Marksheet", "Bank Passbook"],
        guide: [
            "Step 1: Open NSP portal under Ministry of Tribal Affairs.",
            "Step 2: Choose Pre-Matric Scholarship for ST Students.",
            "Step 3: Enter student and school particulars.",
            "Step 4: Submit form online."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 66,
        title: "National Fellowship for ST Students",
        provider: "Central Government",
        category: "ST",
        maxIncome: 1000000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["ST Caste Certificate", "Postgraduate Marksheet", "University Enrolment Proof for MPhil/PhD", "Bank Details"],
        guide: [
            "Step 1: Visit Ministry of Tribal Affairs fellowship portal or NSP.",
            "Step 2: Register as a research fellow applicant.",
            "Step 3: Upload university verification forms and marksheets.",
            "Step 4: Finalize online submission."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 67,
        title: "National Overseas Scholarship for ST Students",
        provider: "Central Government",
        category: "ST",
        maxIncome: 600000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["ST Caste Certificate", "Foreign University Offer Letter", "Passport Details", "Income Proof"],
        guide: [
            "Step 1: Access Tribal Affairs overseas scholarship page.",
            "Step 2: Fill out application with international course details.",
            "Step 3: Attach verified passport and admission proof.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 68,
        title: "AICTE Pragati Scholarship Scheme for Girl Students (Degree - Renewal/Additional)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Previous Year Promotion Proof", "Current Year Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Go to AICTE portal.",
            "Step 2: Select Pragati renewal or fresh technical degree section.",
            "Step 3: Upload current year college promotion certificate.",
            "Step 4: Submit online."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 69,
        title: "AICTE Saksham Scholarship Scheme for Specially Abled Students (Degree - Additional)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Disability Certificate", "Current Semester Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Visit AICTE portal.",
            "Step 2: Navigate to Saksham degree scheme.",
            "Step 3: Upload updated fee structure and progress report.",
            "Step 4: Submit application."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 70,
        title: "DST INSPIRE Scholarship for Higher Education (SHE)",
        provider: "Central Government",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["BSc", "BTech"],
        minPercentage: 85.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Class 12 Board Marksheet (Top 1% Cutoff)", "Endorsement Form signed by Principal/Registrar", "BSc/BTech Admission Proof", "Bank Details"],
        guide: [
            "Step 1: Visit DST INSPIRE web portal.",
            "Step 2: Register and check board-wise cutoff eligibility.",
            "Step 3: Upload class 12 marksheet and college endorsement form.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://online-inspire.gov.in"
    },
    {
        id: 71,
        title: "Post-Matric Scholarship for SC Students",
        provider: "Central Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 45.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["SC Caste Certificate", "Income Certificate", "Fee Receipt", "Bank Account linked with Aadhaar"],
        guide: [
            "Step 1: Open National Scholarship Portal under Ministry of Social Justice.",
            "Step 2: Select Post-Matric Scholarship for SC Students.",
            "Step 3: Fill course fee and admission details.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 72,
        title: "Post-Matric Scholarship for ST Students",
        provider: "Central Government",
        category: "ST",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 45.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["ST Caste Certificate", "Income Certificate", "Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Go to NSP portal under Ministry of Tribal Affairs.",
            "Step 2: Choose Post-Matric Scholarship for ST Students.",
            "Step 3: Upload signed fee receipts and academic marksheets.",
            "Step 4: Finalize online submission."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 73,
        title: "Top Class Education Scheme for SC Students",
        provider: "Central Government",
        category: "SC",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Admission Proof in Top Class Notified Institute (IIT/IIM/NIT)", "SC Caste Certificate", "Income Certificate", "Fee Details"],
        guide: [
            "Step 1: Ensure enrollment in a recognized Top Class institution.",
            "Step 2: Register on NSP portal under Social Justice schemes.",
            "Step 3: Upload full tuition fee and academic expense receipts.",
            "Step 4: Submit application before deadline."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 74,
        title: "Top Class Education Scheme for ST Students",
        provider: "Central Government",
        category: "ST",
        maxIncome: 600000,
        eligibleCourses: ["BCA", "BTech", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Admission in Premier Institute (IIT/IIM/Medical)", "ST Caste Certificate", "Income Proof", "Fee Receipt"],
        guide: [
            "Step 1: Visit NSP portal under Ministry of Tribal Affairs.",
            "Step 2: Select Top Class Education for ST students.",
            "Step 3: Attach admission and tuition fee documentation.",
            "Step 4: Complete online submission."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 75,
        title: "Post-Matric Scholarship for OBC Students (Central Scheme)",
        provider: "Central Government",
        category: "OBC",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 45.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["OBC Caste Certificate", "Income Certificate", "Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Open NSP portal under Social Justice and Empowerment.",
            "Step 2: Select Post-Matric OBC scholarship scheme.",
            "Step 3: Enter institutional course and fee data.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 76,
        title: "Upgradation of Merit of SC/ST Students",
        provider: "Central Government",
        category: "SC",
        maxIncome: 250000,
        eligibleCourses: ["Class 9", "Class 10", "Class 11", "Class 12"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["SC/ST Caste Certificate", "School Performance Records", "Income Certificate", "Bank Details"],
        guide: [
            "Step 1: Check school nomination eligibility for merit upgradation program.",
            "Step 2: Submit application through school authority on NSP portal.",
            "Step 3: Attach coaching or academic support performance proofs.",
            "Step 4: Submit application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 77,
        title: "Merit-cum-Means Scholarship for Professional and Technical Courses (Renewal)",
        provider: "Central Government",
        category: "Minority",
        maxIncome: 250000,
        eligibleCourses: ["BCA", "BTech", "Post Graduation"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Previous Year Semester Marksheet", "Current Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Log in to NSP portal as a renewal applicant.",
            "Step 2: Update current semester marks and course fees.",
            "Step 3: Upload recent fee receipt.",
            "Step 4: Lock and submit renewal application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 78,
        title: "Post-Matric Scholarship for Minorities (Renewal)",
        provider: "Central Government",
        category: "Minority",
        maxIncome: 250000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Previous Class Marksheet", "Current Admission Fee Receipt", "Bank Account Details"],
        guide: [
            "Step 1: Visit National Scholarship Portal and login using renewal credentials.",
            "Step 2: Verify academic details of previous year.",
            "Step 3: Upload new fee receipt issued by college.",
            "Step 4: Submit renewal application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 79,
        title: "National Means-cum-Merit Scholarship (NMMSS - Renewal)",
        provider: "Central Government",
        category: "General",
        maxIncome: 350000,
        eligibleCourses: ["Class 10"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "30 Oct 2026",
        documents: ["Class 9 Marksheet (min 55%)", "School Principal Verification Form", "Bank Passbook"],
        guide: [
            "Step 1: Open NSP portal and select renewal application option.",
            "Step 2: Enter class 9 passing marks and school DISE code.",
            "Step 3: Attach principal verification document.",
            "Step 4: Submit online."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 80,
        title: "Central Sector Scheme of Scholarship for College and University Students (CSSS - Renewal)",
        provider: "Central Government",
        category: "General",
        maxIncome: 450000,
        eligibleCourses: ["BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 50.0,
        state: "All-India",
        deadline: "31 Oct 2026",
        documents: ["College Semester Marksheet", "Current Year Fee Receipt", "Bank Details"],
        guide: [
            "Step 1: Access NSP portal using CSSS renewal login.",
            "Step 2: Update college graduation or post-graduation semester performance.",
            "Step 3: Upload institution certified marksheets.",
            "Step 4: Submit renewal application."
        ],
        officialLink: "https://scholarships.gov.in"
    },
    {
        id: 81,
        title: "AICTE Pragati Scholarship for Girls (Degree - Renewal)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["BCA", "BTech"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Previous Year Promotion Certificate", "Tuition Fee Receipt", "Bank Details"],
        guide: [
            "Step 1: Visit official AICTE portal.",
            "Step 2: Access Pragati renewal dashboard.",
            "Step 3: Upload semester marksheets and institutional fee verification.",
            "Step 4: Submit renewal form."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 82,
        title: "AICTE Pragati Scholarship for Girls (Diploma - Renewal)",
        provider: "Central Government",
        category: "General",
        maxIncome: 800000,
        eligibleCourses: ["Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Diploma Year Marksheet", "Current Fee Receipt", "Bank Passbook"],
        guide: [
            "Step 1: Go to AICTE portal.",
            "Step 2: Log in with diploma renewal credentials.",
            "Step 3: Upload passing marksheets and submit online."
        ],
        officialLink: "https://www.aicte-india.org"
    },
    {
        id: 83,
        title: "HDFC Bank Parivartan ECSS Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 250000,
        eligibleCourses: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "BCA", "BTech", "BSc"],
        minPercentage: 55.0,
        state: "All-India",
        deadline: "15 Dec 2026",
        documents: ["Previous Marksheet", "Identity Proof", "Family Income Proof", "Current Fee Receipt"],
        guide: [
            "Step 1: Visit BuddyStudy or HDFC Parivartan ECSS portal page.",
            "Step 2: Register and create user profile.",
            "Step 3: Fill up personal and educational details.",
            "Step 4: Attach marksheets and fee receipts, then submit."
        ],
        officialLink: "https://www.buddy4study.com"
    },
    {
        id: 84,
        title: "Reliance Foundation Undergraduate Scholarships",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 1500000,
        eligibleCourses: ["BCA", "BTech", "BSc"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Class 12 Marksheet", "First Year College Admission Proof", "Aadhaar Card", "Income Proof"],
        guide: [
            "Step 1: Visit official Reliance Foundation Scholarships portal.",
            "Step 2: Complete registration and aptitude test process.",
            "Step 3: Upload class 12 and college admission records.",
            "Step 4: Submit application online."
        ],
        officialLink: "https://scholarships.reliancefoundation.org"
    },
    {
        id: 85,
        title: "Reliance Foundation Postgraduate Scholarships",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 1500000,
        eligibleCourses: ["Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Undergraduate Degree Marksheet", "GATE/CAT Score (if applicable)", "PG Admission Proof", "Statement of Purpose (SOP)"],
        guide: [
            "Step 1: Open Reliance Foundation PG scholarship portal.",
            "Step 2: Fill out application with research/study objectives.",
            "Step 3: Attach undergraduate transcripts and letters of recommendation.",
            "Step 4: Submit application."
        ],
        officialLink: "https://scholarships.reliancefoundation.org"
    },
    {
        id: 86,
        title: "Kotak Kanya Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 600000,
        eligibleCourses: ["BTech", "BCA", "BSc"],
        minPercentage: 85.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Class 12 Marksheet (85%+)", "Professional Degree Admission Letter", "Income Proof", "Bank Passbook"],
        guide: [
            "Step 1: Visit Kotak Education Trust scholarship page.",
            "Step 2: Register as a female candidate pursuing professional graduation.",
            "Step 3: Upload academic records and college fee structure.",
            "Step 4: Submit application."
        ],
        officialLink: "https://kotakeducation.org"
    },
    {
        id: 87,
        title: "SBI Platinum Jubilee Asha Scholarship Program",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 300000,
        eligibleCourses: ["Class 9", "Class 10", "Class 11", "Class 12", "BCA", "BTech"],
        minPercentage: 75.0,
        state: "All-India",
        deadline: "15 Dec 2026",
        documents: ["Previous Year Marksheet (75%+)", "Identity Proof", "Income Certificate", "Admission Fee Receipt"],
        guide: [
            "Step 1: Access SBI Asha Scholarship partner portal.",
            "Step 2: Select school or undergraduate scholarship track.",
            "Step 3: Provide income and academic details.",
            "Step 4: Submit online."
        ],
        officialLink: "https://www.sbifoundation.in"
    },
    {
        id: 88,
        title: "DXC Progressing Minds Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 400000,
        eligibleCourses: ["BCA", "BTech", "BSc"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["STEM Course Admission Proof", "Previous Marksheet", "Income Certificate", "Bank Details"],
        guide: [
            "Step 1: Go to BuddyStudy DXC scholarship page.",
            "Step 2: Register under STEM degree category for women/underprivileged.",
            "Step 3: Upload fee receipts and marksheets.",
            "Step 4: Submit online."
        ],
        officialLink: "https://www.buddy4study.com"
    },
    {
        id: 89,
        title: "Fair & Lovely (Glow & Lovely) Career Foundation Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 600000,
        eligibleCourses: ["Class 12", "BCA", "BTech", "Diploma", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Class 12 Marksheet", "Higher Education Enrolment Letter", "Identity Proof", "Bank Passbook"],
        guide: [
            "Step 1: Visit Glow & Lovely Career Foundation official portal.",
            "Step 2: Register as a female student seeking career-oriented education.",
            "Step 3: Fill course and coaching/college details.",
            "Step 4: Submit application."
        ],
        officialLink: "https://www.glowandlovelycareers.in"
    },
    {
        id: 90,
        title: "L'Oréal India For Young Women in Science Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 600000,
        eligibleCourses: ["BSc", "BTech"],
        minPercentage: 85.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Class 12 Science Marksheet (85%+)", "Science Degree Admission Proof", "Income Certificate", "Essay / Statement"],
        guide: [
            "Step 1: Visit L'Oréal India science scholarship portal.",
            "Step 2: Register profile for young women in science.",
            "Step 3: Submit academic transcripts and recommendation letters.",
            "Step 4: Complete online submission."
        ],
        officialLink: "https://www.loreal.com"
    },
    {
        id: 91,
        title: "Adobe India Women-in-Technology Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["BCA", "BTech", "Post Graduation"],
        minPercentage: 75.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Computer Science / Engineering Transcripts", "Resume / CV", "Letters of Recommendation", "College Enrollment Proof"],
        guide: [
            "Step 1: Open Adobe Research scholarship announcement page.",
            "Step 2: Check eligibility for female students in computer science/engineering.",
            "Step 3: Upload resume, transcripts, and faculty recommendation letters.",
            "Step 4: Submit application."
        ],
        officialLink: "https://www.adobe.com"
    },
    {
        id: 92,
        title: "Google Generation Google Scholarship (APAC)",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 1000000,
        eligibleCourses: ["BCA", "BTech", "Post Graduation"],
        minPercentage: 75.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Computer Science Degree Transcripts", "Resume", "Short Essay Questions Response", "University Enrollment Proof"],
        guide: [
            "Step 1: Visit Google Students scholarship portal.",
            "Step 2: Select Generation Google Scholarship for APAC region.",
            "Step 3: Complete online essays and upload academic transcripts.",
            "Step 4: Submit application."
        ],
        officialLink: "https://buildyourfuture.withgoogle.com"
    },
    {
        id: 93,
        title: "Keep India Smiling Foundational Scholarship (Colgate)",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 500000,
        eligibleCourses: ["Class 11", "Class 12", "BCA", "BTech", "BSc"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Previous Academic Marksheet", "Fee Receipt", "Income Proof", "Identity Proof"],
        guide: [
            "Step 1: Visit Colgate Keep India Smiling portal on BuddyStudy.",
            "Step 2: Choose relevant category (student, sports person, or vocational training).",
            "Step 3: Upload supporting proofs and statement of purpose.",
            "Step 4: Submit online."
        ],
        officialLink: "https://www.colgatepalmolive.co.in"
    },
    {
        id: 94,
        title: "Aditya Birla Capital Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 600000,
        eligibleCourses: ["Class 9", "Class 10", "Class 11", "Class 12", "BCA", "BTech"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "15 Dec 2026",
        documents: ["Previous Academic Marksheet", "Income Proof", "Fee Receipt", "Bank Details"],
        guide: [
            "Step 1: Go to Aditya Birla Capital scholarship portal page.",
            "Step 2: Register as school or college student applicant.",
            "Step 3: Fill family income and course records.",
            "Step 4: Submit application."
        ],
        officialLink: "https://www.adityabirlacapital.com"
    },
    {
        id: 95,
        title: "Rolls-Royce Unnati Scholarships for Women Engineering Students",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 400000,
        eligibleCourses: ["BTech", "Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Engineering Admission Letter", "Semester Marksheets", "Income Certificate", "Bank Details"],
        guide: [
            "Step 1: Visit Rolls-Royce Unnati portal page on BuddyStudy.",
            "Step 2: Register as female engineering student.",
            "Step 3: Upload college fee receipt and marks proofs.",
            "Step 4: Submit online."
        ],
        officialLink: "https://www.rolls-royce.com"
    },
    {
        id: 96,
        title: "Sitaram Jindal Foundation Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 400000,
        eligibleCourses: ["Class 11", "Class 12", "ITI", "Diploma", "BCA", "BTech", "BSc", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Marksheet of Last Exam Passed", "Fee Receipt", "Income Certificate"],
        guide: [
            "Step 1: Download application form from Sitaram Jindal Foundation website.",
            "Step 2: Fill out physical application form.",
            "Step 3: Attach attested marksheets and income certificate, then post to foundation address."
        ],
        officialLink: "https://www.sitaramjindalfoundation.org"
    },
    {
        id: 97,
        title: "Dr. Reddy's Foundation Sashakt Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 500000,
        eligibleCourses: ["BSc"],
        minPercentage: 80.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Class 12 Science Marksheet", "BSc Admission Proof", "Income Certificate", "Statement of Purpose"],
        guide: [
            "Step 1: Visit Sashakt Scholarship portal.",
            "Step 2: Register for young women pursuing natural/basic sciences.",
            "Step 3: Upload class 12 transcripts and science college admission proof.",
            "Step 4: Submit application."
        ],
        officialLink: "https://www.sashaktscholarship.org"
    },
    {
        id: 98,
        title: "Mahindra All India Talent Scholarship (MAITS)",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 300000,
        eligibleCourses: ["Diploma"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["Diploma / Polytechnic Admission Letter", "Marksheet", "Income Proof", "Bank Passbook"],
        guide: [
            "Step 1: Access K.C. Mahindra Education Trust MAITS portal.",
            "Step 2: Fill out scholarship form for diploma or polytechnic courses.",
            "Step 3: Attach institute admission proof and income certificate.",
            "Step 4: Submit application."
        ],
        officialLink: "https://www.kcmet.org"
    },
    {
        id: 99,
        title: "Muthoot M George Higher Education Scholarship",
        provider: "Private / Corporate",
        category: "General",
        maxIncome: 300000,
        eligibleCourses: ["BTech", "Post Graduation"],
        minPercentage: 80.0,
        state: "All-India",
        deadline: "30 Nov 2026",
        documents: ["Professional Course Admission Proof (MBBS/BTech/Nursing)", "Class 12 Marksheet", "Income Proof", "Bank Details"],
        guide: [
            "Step 1: Visit Muthoot M George Foundation portal.",
            "Step 2: Check professional course eligibility criteria.",
            "Step 3: Upload marksheets and entrance rank/admission documents.",
            "Step 4: Submit application."
        ],
        officialLink: "https://www.muthootgroup.com"
    },
    {
        id: 100,
        title: "ONGC Scholarship Scheme for SC/ST Categories",
        provider: "Central Government",
        category: "SC",
        maxIncome: 450000,
        eligibleCourses: ["BTech", "BSc", "Post Graduation"],
        minPercentage: 60.0,
        state: "All-India",
        deadline: "31 Dec 2026",
        documents: ["SC/ST Caste Certificate", "Engineering/Geology/MBA Degree Admission Proof", "Income Certificate", "Bank Passbook in Student's Name"],
        guide: [
            "Step 1: Visit official ONGC India website scholarship section.",
            "Step 2: Download application form for SC/ST students.",
            "Step 3: Attach verified marksheets, caste certificate, and bank details.",
            "Step 4: Post or email application as per regional instructions."
        ],
        officialLink: "https://www.ongcindia.com"
    }
];
// Ensure every scholarship has a unique, sequential ID (prevents wrong details opening)
scholarshipDatabase.forEach((s, i) => { s.id = i + 1; });
/* ==========================================================
   VIDYASETU - script.js (logic part)
   Isse database array ke NEECHE paste karo
   ========================================================== */

// ---------- 0. DATABASE CLEANUP ----------
// Pehle purane jaise IDs assign (taaki saved bookmarks na bigdein), phir duplicate titles hata do
(function cleanDatabase() {
    scholarshipDatabase.forEach((s, i) => { s.id = i + 1; });
    const seen = new Set();
    for (let i = 0; i < scholarshipDatabase.length; i++) {
        const key = scholarshipDatabase[i].title.trim().toLowerCase();
        if (seen.has(key)) {
            scholarshipDatabase.splice(i, 1);
            i--;
        } else {
            seen.add(key);
        }
    }
})();

// ---------- 1. GLOBAL STATE + HELPERS ----------
let activeCourse = "";   // sidebar se selected course filter

function safeParse(value, fallback) {
    try {
        const parsed = JSON.parse(value);
        return parsed === null || parsed === undefined ? fallback : parsed;
    } catch (e) {
        return fallback;
    }
}

function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

function getProfile() {
    return safeParse(localStorage.getItem("vidyasetu_profile"), null);
}

// Toast (element na ho to khud bana leta hai, isliye har page par kaam karega)
function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// Deadline helpers ("30 Oct 2026" -> days left)
const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };

function parseDeadline(str) {
    const m = String(str).match(/(\d{1,2})\s+([A-Za-z]{3})[a-z]*\s+(\d{4})/);
    if (!m) return null;
    return new Date(+m[3], MONTHS[m[2].toLowerCase()], +m[1]);
}

function getDeadlineInfo(str) {
    const d = parseDeadline(str);
    if (!d) return { text: "", color: "inherit" };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.round((d - today) / 86400000);
    if (diff < 0) return { text: "Closed", color: "#94a3b8" };
    if (diff === 0) return { text: "Last day today!", color: "#dc2626" };
    if (diff <= 7) return { text: `${diff} days left`, color: "#dc2626" };
    if (diff <= 30) return { text: `${diff} days left`, color: "#f59e0b" };
    return { text: `${diff} days left`, color: "#16a34a" };
}

function deadlineHTML(sch) {
    const info = getDeadlineInfo(sch.deadline);
    const extra = info.text
        ? ` <span style="color:${info.color}; font-weight:700;">&middot; ${info.text}</span>`
        : "";
    return `<p class="deadline">⏳ Deadline: ${sch.deadline}${extra}</p>`;
}

// ---------- 2. THEME (Light / Dark) ----------
function updateThemeToggleIcon() {
    const btn = document.getElementById("themeToggleBtn");
    if (btn) btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

function initTheme() {
    const saved = localStorage.getItem("vidyasetu_theme") || "light";
    document.body.classList.toggle("dark-mode", saved === "dark");
    updateThemeToggleIcon();

    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("vidyasetu_theme", isDark ? "dark" : "light");
            updateThemeToggleIcon();
            showToast(isDark ? "Dark mode on 🌙" : "Light mode on ☀️");
        });
    }
}

// ---------- 3. NAVBAR AUTH + PROFILE DROPDOWN ----------
function updateNavbarAuth() {
    const authContainer = document.getElementById("authLinkContainer");
    const profile = getProfile();
    const heroBtn = document.getElementById("setupProfileHeroBtn");

    // Profile bana hua hai to hero button dashboard par le jayega
    if (profile && heroBtn) {
        heroBtn.textContent = "Go to My Dashboard →";
        heroBtn.setAttribute("href", "dashboard.html");
    }

    if (!authContainer) return;

    if (!profile) {
        authContainer.innerHTML = `<a href="profile.html" style="color: var(--primary-color); font-weight: 600; text-decoration: none;">Register</a>`;
        return;
    }

    authContainer.innerHTML = `
        <div style="position: relative; display: inline-block;">
            <button id="profileSymbolBtn" title="Profile Menu"
                style="background: var(--primary-color); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;">
                👤
            </button>
            <div id="profileDropdownMenu"
                style="display: none; position: absolute; right: 0; top: 50px; background: var(--card-bg); backdrop-filter: blur(12px); border: 1px solid var(--border-color); border-radius: 10px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2); width: 220px; padding: 1rem; z-index: 1000; text-align: left;">
                <p style="margin: 0 0 0.75rem 0; font-weight: 600; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">${escapeHTML(profile.name)}</p>
                <a href="profile.html" style="display: block; color: var(--text-color); text-decoration: none; padding: 0.5rem 0; font-size: 0.95rem;">✏️ Edit Profile</a>
                <button id="dropdownLogoutBtn"
                    style="width: 100%; text-align: left; background: none; border: none; border-top: 1px solid var(--border-color); color: #ef4444; cursor: pointer; padding: 0.5rem 0; margin-top: 0.25rem; font-size: 0.95rem; font-weight: 500;">
                    🚪 Logout
                </button>
            </div>
        </div>
    `;

    const profileBtn = document.getElementById("profileSymbolBtn");
    const dropdown = document.getElementById("profileDropdownMenu");

    profileBtn.addEventListener("click", e => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", () => { dropdown.style.display = "none"; });

    document.getElementById("dropdownLogoutBtn").addEventListener("click", () => {
        localStorage.removeItem("vidyasetu_profile");
        showToast("Logged out successfully!");
        setTimeout(() => { window.location.href = "index.html"; }, 700);
    });
}

// ---------- 4. PROFILE WIZARD ----------
function showStep(stepNum) {
    [1, 2, 3].forEach(n => {
        const step = document.getElementById(`step-${n}`);
        const ind = document.getElementById(`ind-${n}`);
        if (step) step.style.display = n === stepNum ? "block" : "none";
        if (ind) ind.classList.toggle("active", n === stepNum);
    });
}

window.nextStep = function (stepNum) {
    if (stepNum === 2) {
        const name = document.getElementById("name").value.trim();
        const state = document.getElementById("state").value;
        const category = document.getElementById("category").value;
        if (!name || !state || !category) {
            showToast("⚠️ Pehle saari details bharo");
            return;
        }
    } else if (stepNum === 3) {
        const course = document.getElementById("course").value;
        const percentage = document.getElementById("percentage").value;
        if (!course || !percentage) {
            showToast("⚠️ Apni academic details bharo");
            return;
        }
    }
    showStep(stepNum);
};

window.prevStep = function (stepNum) {
    showStep(stepNum);
};

function initProfileForm() {
    const form = document.getElementById("profileForm");
    if (!form) return;

    const existing = getProfile();
    if (existing) {
        document.getElementById("name").value = existing.name || "";
        document.getElementById("state").value = existing.state || "";
        document.getElementById("category").value = existing.category || "";
        document.getElementById("course").value = existing.course || "";
        document.getElementById("percentage").value = existing.percentage || "";
        document.getElementById("income").value = existing.income || "";
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        const percentage = parseFloat(document.getElementById("percentage").value);
        const income = parseFloat(document.getElementById("income").value);

        if (isNaN(percentage) || percentage < 0 || percentage > 100) {
            showToast("⚠️ Percentage 0 se 100 ke beech hona chahiye");
            return;
        }
        if (isNaN(income) || income < 0) {
            showToast("⚠️ Sahi family income daalo");
            return;
        }

        const userProfile = {
            name: document.getElementById("name").value.trim(),
            state: document.getElementById("state").value,
            category: document.getElementById("category").value,
            course: document.getElementById("course").value,
            percentage: percentage,
            income: income
        };

        localStorage.setItem("vidyasetu_profile", JSON.stringify(userProfile));
        showToast("Profile saved successfully! ✅");
        setTimeout(() => { window.location.href = "dashboard.html"; }, 800);
    });
}

// ---------- 5. BOOKMARKS (ek hi storage key) ----------
function getSavedBookmarks() {
    const current = safeParse(localStorage.getItem("vidyasetu_bookmarks"), []);
    // Purani key ('savedScholarships') ko merge karke hata do
    const legacy = safeParse(localStorage.getItem("savedScholarships"), []);
    if (legacy.length) {
        const merged = [...new Set([...current, ...legacy])];
        localStorage.setItem("vidyasetu_bookmarks", JSON.stringify(merged));
        localStorage.removeItem("savedScholarships");
        return merged;
    }
    return current;
}

function refreshAfterBookmarkChange() {
    if (document.getElementById("allScholarshipsContainer")) applyDirectoryFilters();
    const profile = getProfile();
    if (profile && document.getElementById("scholarshipsContainer")) runMatchingEngine(profile);
    loadSavedScholarships();
}

window.toggleBookmark = function (id, event) {
    if (event) event.stopPropagation();
    let bookmarks = getSavedBookmarks();
    if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter(b => b !== id);
        showToast("Removed from saved ☆");
    } else {
        bookmarks.push(id);
        showToast("Scholarship saved! ⭐");
    }
    localStorage.setItem("vidyasetu_bookmarks", JSON.stringify(bookmarks));
    refreshAfterBookmarkChange();
};

// Purane HTML ke liye alias
window.toggleSave = function (id) { window.toggleBookmark(id); };

function loadSavedScholarships() {
    const container = document.getElementById("savedScholarshipsContainer");
    if (!container) return;

    const saved = getSavedBookmarks()
        .map(id => scholarshipDatabase.find(s => s.id === id))
        .filter(Boolean);

    if (saved.length === 0) {
        container.innerHTML = `
            <div class="no-match" style="grid-column: 1 / -1;">
                <p style="margin-bottom: 1rem;">Aapne abhi tak koi scholarship save nahi ki hai.</p>
                <a href="index.html" class="btn-primary">Browse Scholarships &rarr;</a>
            </div>`;
        return;
    }

    container.innerHTML = saved.map((sch, i) => `
        <div class="scholarship-card" style="animation: popIn 0.4s ease both; animation-delay: ${Math.min(i, 12) * 40}ms;" onclick="openDetailsModal(${sch.id})">
            <div>
                <span class="badge">${sch.provider}</span>
                <h3>${sch.title}</h3>
                ${deadlineHTML(sch)}
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn-apply" style="flex: 1;" onclick="event.stopPropagation(); openDetailsModal(${sch.id})">View Details</button>
                <button class="btn-secondary-small" style="width: auto; padding: 0.5rem 0.9rem;" title="Remove" onclick="toggleBookmark(${sch.id}, event)">🗑️</button>
            </div>
        </div>
    `).join("");
}

// ---------- 6. RENDER CARDS ----------
function bookmarkButton(id, isSaved) {
    return `<button onclick="toggleBookmark(${id}, event)" style="background:none; border:none; cursor:pointer; font-size:1.3rem; color: inherit;" title="${isSaved ? "Remove from saved" : "Save scholarship"}">${isSaved ? "⭐" : "☆"}</button>`;
}

function renderScholarshipGrid(list, container) {
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = `<p class="no-match">No scholarships found.</p>`;
        return;
    }
    const bookmarks = getSavedBookmarks();
    container.innerHTML = list.map((sch, i) => `
        <div class="scholarship-card" style="animation: popIn 0.4s ease both; animation-delay: ${Math.min(i, 12) * 40}ms;" onclick="openDetailsModal(${sch.id})">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span class="badge" style="margin-bottom: 0;">${sch.provider}</span>
                    ${bookmarkButton(sch.id, bookmarks.includes(sch.id))}
                </div>
                <h3>${sch.title}</h3>
                ${deadlineHTML(sch)}
            </div>
            <button class="btn-apply" onclick="event.stopPropagation(); openDetailsModal(${sch.id})">View Details &amp; How to Apply &rarr;</button>
        </div>
    `).join("");
}

function renderMatchedCards(list, container) {
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = `<p class="no-match">No 100% eligible scholarships found matching your search criteria.</p>`;
        return;
    }
    const bookmarks = getSavedBookmarks();
    container.innerHTML = list.map((sch, i) => `
        <div class="scholarship-card eligible-card" style="animation: popIn 0.4s ease both; animation-delay: ${Math.min(i, 12) * 40}ms;" onclick="openDetailsModal(${sch.id})">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span class="badge" style="margin-bottom: 0;">100% Eligible</span>
                    ${bookmarkButton(sch.id, bookmarks.includes(sch.id))}
                </div>
                <h3>${sch.title}</h3>
                ${deadlineHTML(sch)}
                <div class="docs-box">
                    <strong>Required Documents:</strong>
                    <ul>${sch.documents.map(d => `<li>✓ ${d}</li>`).join("")}</ul>
                </div>
            </div>
            <button class="btn-apply" onclick="event.stopPropagation(); openDetailsModal(${sch.id})">View Details &amp; How to Apply &rarr;</button>
        </div>
    `).join("");
}

// ---------- 7. HOME DIRECTORY (search + provider + sidebar course filter) ----------
function applyDirectoryFilters() {
    const container = document.getElementById("allScholarshipsContainer");
    if (!container) return;

    const searchInput = document.getElementById("globalSearch");
    const providerFilter = document.getElementById("filterProvider");
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const provider = providerFilter ? providerFilter.value : "";

    const filtered = scholarshipDatabase.filter(s => {
        const matchesQuery = !query ||
            s.title.toLowerCase().includes(query) ||
            s.provider.toLowerCase().includes(query);
        const matchesProvider = !provider || s.provider === provider;
        const matchesCourse = !activeCourse ||
            s.eligibleCourses.some(c => c.toLowerCase() === activeCourse.toLowerCase());
        return matchesQuery && matchesProvider && matchesCourse;
    });

    renderScholarshipGrid(filtered, container);
    updateFilterBar(container, filtered.length);
}

// "Course: BCA | 12 scholarships | Clear" wali chhoti bar
function updateFilterBar(container, count) {
    let bar = document.getElementById("activeFilterBar");
    if (!activeCourse) {
        if (bar) bar.remove();
        return;
    }
    if (!bar) {
        bar = document.createElement("div");
        bar.id = "activeFilterBar";
        bar.style.cssText = "display:flex; align-items:center; gap:0.8rem; flex-wrap:wrap; margin-bottom:1rem;";
        container.parentNode.insertBefore(bar, container);
    }
    bar.innerHTML = `
        <span class="badge" style="margin:0;">Course: ${escapeHTML(activeCourse)}</span>
        <span>${count} scholarship${count === 1 ? "" : "s"}</span>
        <button class="btn-secondary" onclick="clearCourseFilter()">✕ Clear filter</button>
    `;
}

window.clearCourseFilter = function () {
    activeCourse = "";
    if (document.getElementById("allScholarshipsContainer")) {
        applyDirectoryFilters();
    } else {
        const profile = getProfile();
        if (profile) runMatchingEngine(profile);
    }
};

// Sidebar: course filter
window.filterByCourse = function (courseName) {
    activeCourse = courseName;
    if (document.getElementById("allScholarshipsContainer")) {
        applyDirectoryFilters();
        const section = document.getElementById("explore");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        const profile = getProfile();
        if (profile) runMatchingEngine(profile);
    }
    showToast(`Showing: ${courseName}`);
};

// Sidebar: provider / category filter
window.filterByCategory = function (categoryName) {
    const providerFilter = document.getElementById("filterProvider");
    if (providerFilter) providerFilter.value = categoryName;
    activeCourse = "";

    if (document.getElementById("allScholarshipsContainer")) {
        applyDirectoryFilters();
        const section = document.getElementById("explore");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        const profile = getProfile();
        if (profile) runMatchingEngine(profile);
    }
    showToast(`Showing: ${categoryName}`);
};

function initDirectory() {
    const container = document.getElementById("allScholarshipsContainer");
    if (!container) return;

    const searchInput = document.getElementById("globalSearch");
    const providerFilter = document.getElementById("filterProvider");
    if (searchInput) searchInput.addEventListener("input", applyDirectoryFilters);
    if (providerFilter) providerFilter.addEventListener("change", applyDirectoryFilters);

    applyDirectoryFilters();
}

// ---------- 8. DASHBOARD MATCHING ENGINE ----------
function runMatchingEngine(profile) {
    const queryEl = document.getElementById("dashSearch");
    const catEl = document.getElementById("dashCategoryFilter");
    const query = queryEl ? queryEl.value.trim().toLowerCase() : "";
    const provider = catEl ? catEl.value : "";

    const eligibleList = scholarshipDatabase.filter(sch => {
        const incomeMatch = profile.income <= sch.maxIncome;
        const percentageMatch = profile.percentage >= sch.minPercentage;
        const courseMatch = sch.eligibleCourses.includes(profile.course);
        const stateMatch = sch.state === "All-India" ||
            sch.state.toLowerCase() === String(profile.state).toLowerCase();
        const categoryMatch = sch.category === "General" ||
            sch.category.toLowerCase() === String(profile.category).toLowerCase();

        const matchesQuery = !query ||
            sch.title.toLowerCase().includes(query) ||
            sch.provider.toLowerCase().includes(query);
        const matchesProvider = !provider || sch.provider === provider;
        const matchesSidebar = !activeCourse ||
            sch.eligibleCourses.some(c => c.toLowerCase() === activeCourse.toLowerCase());

        return incomeMatch && percentageMatch && courseMatch && stateMatch &&
            categoryMatch && matchesQuery && matchesProvider && matchesSidebar;
    });

    const container = document.getElementById("scholarshipsContainer");
    renderMatchedCards(eligibleList, container);
    if (container) updateFilterBar(container, eligibleList.length);

    const countEl = document.getElementById("matchCount");
    if (countEl) countEl.textContent = eligibleList.length;
}

function initDashboard() {
    const container = document.getElementById("scholarshipsContainer");
    if (!container) return;

    const profile = getProfile();
    if (!profile) {
        window.location.href = "profile.html";
        return;
    }

    const welcomeText = document.getElementById("welcomeText");
    const summary = document.getElementById("profileSummaryText");
    if (welcomeText) welcomeText.innerText = `Welcome, ${profile.name}!`;
    if (summary) {
        summary.innerText = `Course: ${profile.course} | Category: ${profile.category} | Income: ₹${profile.income} | State: ${profile.state}`;
    }

    runMatchingEngine(profile);

    const dashSearch = document.getElementById("dashSearch");
    const dashCategoryFilter = document.getElementById("dashCategoryFilter");
    if (dashSearch) dashSearch.addEventListener("input", () => runMatchingEngine(profile));
    if (dashCategoryFilter) dashCategoryFilter.addEventListener("change", () => runMatchingEngine(profile));
}

// ---------- 9. MODAL (details + guide) ----------
function closeModal() {
    const modal = document.getElementById("scholarshipModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
}

window.openDetailsModal = function (id) {
    const modal = document.getElementById("scholarshipModal");
    const modalBody = document.getElementById("modalBody");
    const sch = scholarshipDatabase.find(item => item.id === id);
    if (!sch || !modal || !modalBody) return;

    const info = getDeadlineInfo(sch.deadline);
    const deadlineBadge = info.text
        ? ` <span style="color:${info.color}; font-weight:700;">(${info.text})</span>`
        : "";

    modalBody.innerHTML = `
        <h2>${sch.title}</h2>
        <p><strong>Provider:</strong> ${sch.provider} | <strong>Deadline:</strong> ${sch.deadline}${deadlineBadge}</p>
        <hr style="margin: 1rem 0; border: 0; border-top: 1px solid var(--border-color);">

        <h3>📋 Eligibility &amp; Criteria</h3>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: var(--text-secondary);">
            <li>Allowed Categories: ${sch.category}</li>
            <li>Max Family Income: ₹${Number(sch.maxIncome).toLocaleString("en-IN")}</li>
            <li>Minimum Percentage: ${sch.minPercentage}%</li>
            <li>Eligible Courses/Classes: ${sch.eligibleCourses.join(", ")}</li>
            <li>State Domicile: ${sch.state}</li>
        </ul>

        <h3>📁 Required Documents Checklist</h3>
        <ul style="margin: 0.5rem 0 0.8rem 1.2rem; color: #16a34a;">
            ${sch.documents.map(d => `<li>${d}</li>`).join("")}
        </ul>
        <button class="btn-secondary" style="margin-bottom: 1.2rem;" onclick="copyChecklist(${sch.id})">📋 Copy checklist</button>

        <h3>📝 Step-by-Step Application Guide</h3>
        <ol style="margin: 0.5rem 0 1.5rem 1.2rem; line-height: 1.7;">
            ${sch.guide.map(g => `<li>${g}</li>`).join("")}
        </ol>

        <a href="${sch.officialLink}" target="_blank" rel="noopener" class="btn-primary full-width" style="text-align:center; display:block;">Proceed to Official Portal &rarr;</a>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

// Purane HTML ke liye alias
window.openScholarshipModal = function (id) { window.openDetailsModal(id); };

window.copyChecklist = function (id) {
    const sch = scholarshipDatabase.find(item => item.id === id);
    if (!sch) return;
    const text = `${sch.title}\nRequired Documents:\n` + sch.documents.map(d => `- ${d}`).join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showToast("Checklist copied ✅"))
            .catch(() => showToast("Copy nahi ho paya"));
    } else {
        showToast("Copy is browser mein supported nahi hai");
    }
};

function initModal() {
    // Ek hi listener: cross button ya bahar click
    document.addEventListener("click", e => {
        const modal = document.getElementById("scholarshipModal");
        if (!modal) return;
        if (e.target.classList.contains("close-btn") || e.target === modal) closeModal();
    });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });
}

// ---------- 10. HERO SLIDER ----------
function initSlider() {
    const slides = document.querySelectorAll(".slide");
    const dotsBox = document.querySelector(".slider-dots");
    if (!slides.length || !dotsBox) return;

    let current = 0;
    let timer;

    const showSlide = n => {
        current = (n + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle("active", i === current));
        dotsBox.querySelectorAll("span").forEach((d, i) => d.classList.toggle("active", i === current));
    };
    const restart = () => {
        clearInterval(timer);
        timer = setInterval(() => showSlide(current + 1), 4500);
    };

    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => { showSlide(i); restart(); });
        dotsBox.appendChild(dot);
    });

    const prev = document.querySelector(".slider-arrow.prev");
    const next = document.querySelector(".slider-arrow.next");
    if (prev) prev.addEventListener("click", () => { showSlide(current - 1); restart(); });
    if (next) next.addEventListener("click", () => { showSlide(current + 1); restart(); });

    const banner = document.querySelector(".hero-banner");
    if (banner) {
        banner.addEventListener("mouseenter", () => clearInterval(timer));
        banner.addEventListener("mouseleave", restart);
    }

    showSlide(0);
    restart();
}

// ---------- 11. SCROLL EFFECTS (reveal, counters, progress, back-to-top) ----------
function animateCount(el) {
    const target = +el.dataset.count;
    const step = Math.max(1, Math.ceil(target / 60));
    let n = 0;
    const t = setInterval(() => {
        n += step;
        if (n >= target) { n = target; clearInterval(t); }
        el.textContent = n.toLocaleString("en-IN") + "+";
    }, 25);
}

function initScrollEffects() {
    // Scholarships counter ko real database count se sync karo
    const firstStat = document.querySelector(".stats-grid .stat-number");
    if (firstStat) firstStat.dataset.count = scholarshipDatabase.length;

    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.querySelectorAll("[data-count]").forEach(animateCount);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(el => observer.observe(el));
    } else {
        revealEls.forEach(el => {
            el.classList.add("visible");
            el.querySelectorAll("[data-count]").forEach(animateCount);
        });
    }

    const progress = document.getElementById("scrollProgress");
    const topBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        if (progress && max > 0) progress.style.width = (h.scrollTop / max) * 100 + "%";
        if (topBtn) topBtn.classList.toggle("show", h.scrollTop > 400);
    }, { passive: true });

    if (topBtn) topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ---------- 12. SIDEBAR CLICK TOGGLE (touch devices ke liye) ----------
function initSidebar() {
    document.querySelectorAll(".menu-title").forEach(title => {
        title.addEventListener("click", () => title.parentElement.classList.toggle("open"));
    });
    document.querySelectorAll(".sub-dropdown > a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            link.parentElement.classList.toggle("open");
        });
    });
}

// ---------- 13. INIT ----------
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    updateNavbarAuth();
    initProfileForm();
    initDirectory();
    initDashboard();
    loadSavedScholarships();
    initModal();
    initSlider();
    initScrollEffects();
    initSidebar();
});


/* ==========================================================
   VIDYASETU MOBILE NAVIGATION + SIDEBAR
   Add this block at the VERY END of script.js
   ========================================================== */

(function initVidyasetuMobileNavigation() {
    function setupMobileNavigation() {

        /* -------------------------------
           MOBILE TOP NAVIGATION
        -------------------------------- */

        const mobileMenuBtn = document.getElementById("mobileMenuBtn");

        // Works with both:
        // <nav class="nav-links">
        // and
        // <nav id="profileNav">
        const mobileNav =
            document.querySelector(".navbar .nav-links") ||
            document.querySelector(".navbar nav");

        if (mobileMenuBtn && mobileNav) {

            // Prevent duplicate listeners
            if (!mobileMenuBtn.dataset.mobileNavReady) {

                mobileMenuBtn.dataset.mobileNavReady = "true";

                mobileMenuBtn.addEventListener("click", function (event) {
                    event.stopPropagation();

                    const isOpen =
                        mobileNav.classList.toggle("active-mobile-menu");

                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                    // Change hamburger icon
                    if (isOpen) {
                        mobileMenuBtn.textContent = "✕";
                    } else {
                        mobileMenuBtn.textContent = "☰";
                    }
                });

                // Close menu when a navigation link is clicked
                mobileNav.querySelectorAll("a").forEach(function (link) {
                    link.addEventListener("click", function () {
                        closeMobileNav();
                    });
                });
            }
        }

        function closeMobileNav() {
            if (!mobileNav) return;

            mobileNav.classList.remove("active-mobile-menu");

            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute("aria-expanded", "false");
                mobileMenuBtn.textContent = "☰";
            }
        }

        /* -------------------------------
           CLOSE NAV WHEN CLICKING OUTSIDE
        -------------------------------- */

        document.addEventListener("click", function (event) {

            if (!mobileNav || !mobileMenuBtn) return;

            if (
                mobileNav.classList.contains("active-mobile-menu") &&
                !mobileNav.contains(event.target) &&
                !mobileMenuBtn.contains(event.target)
            ) {
                closeMobileNav();
            }
        });


        /* -------------------------------
           MOBILE SIDEBAR
        -------------------------------- */

        const sidebar =
            document.querySelector(".sidebar");

        if (!sidebar) return;


        /*
         * Create mobile sidebar button if it
         * does not already exist.
         */
        let sidebarToggle =
            document.querySelector(".sidebar-toggle");

        if (!sidebarToggle) {

            sidebarToggle = document.createElement("button");

            sidebarToggle.className = "sidebar-toggle";
            sidebarToggle.type = "button";

            sidebarToggle.innerHTML =
                "☰ <span>Explore Filters</span>";

            sidebar.parentElement.insertBefore(
                sidebarToggle,
                sidebar
            );
        }


        /*
         * Create overlay
         */
        let sidebarOverlay =
            document.querySelector(".sidebar-overlay");

        if (!sidebarOverlay) {

            sidebarOverlay =
                document.createElement("div");

            sidebarOverlay.className =
                "sidebar-overlay";

            document.body.appendChild(
                sidebarOverlay
            );
        }


        /*
         * Create mobile sidebar header
         */
        let sidebarHeader =
            sidebar.querySelector(".sidebar-mobile-header");

        if (!sidebarHeader) {

            sidebarHeader =
                document.createElement("div");

            sidebarHeader.className =
                "sidebar-mobile-header";

            sidebarHeader.innerHTML = `
                <h3>📂 Quick Browse</h3>

                <button
                    type="button"
                    class="sidebar-close"
                    aria-label="Close filters"
                >
                    ×
                </button>
            `;

            sidebar.insertBefore(
                sidebarHeader,
                sidebar.firstChild
            );
        }


        const sidebarClose =
            sidebar.querySelector(".sidebar-close");


        /* -------------------------------
           OPEN SIDEBAR
        -------------------------------- */

        function openSidebar() {

            sidebar.classList.add(
                "sidebar-open"
            );

            sidebarOverlay.classList.add(
                "sidebar-overlay-visible"
            );

            document.body.classList.add(
                "sidebar-lock"
            );

            if (sidebarToggle) {
                sidebarToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }
        }


        /* -------------------------------
           CLOSE SIDEBAR
        -------------------------------- */

        function closeSidebar() {

            sidebar.classList.remove(
                "sidebar-open"
            );

            sidebarOverlay.classList.remove(
                "sidebar-overlay-visible"
            );

            document.body.classList.remove(
                "sidebar-lock"
            );

            if (sidebarToggle) {
                sidebarToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }


        /* -------------------------------
           SIDEBAR EVENTS
        -------------------------------- */

        if (
            sidebarToggle &&
            !sidebarToggle.dataset.sidebarReady
        ) {

            sidebarToggle.dataset.sidebarReady =
                "true";

            sidebarToggle.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    if (
                        sidebar.classList.contains(
                            "sidebar-open"
                        )
                    ) {
                        closeSidebar();
                    } else {
                        openSidebar();
                    }
                }
            );
        }


        if (
            sidebarClose &&
            !sidebarClose.dataset.closeReady
        ) {

            sidebarClose.dataset.closeReady =
                "true";

            sidebarClose.addEventListener(
                "click",
                function () {
                    closeSidebar();
                }
            );
        }


        /*
         * Clicking dark background closes sidebar
         */
        if (
            sidebarOverlay &&
            !sidebarOverlay.dataset.overlayReady
        ) {

            sidebarOverlay.dataset.overlayReady =
                "true";

            sidebarOverlay.addEventListener(
                "click",
                function () {
                    closeSidebar();
                }
            );
        }


        /* -------------------------------
           SIDEBAR FILTER BUTTONS
        -------------------------------- */

        sidebar
            .querySelectorAll(
                ".sub-filter-btn"
            )
            .forEach(function (button) {

                if (
                    button.dataset.mobileFilterReady
                ) {
                    return;
                }

                button.dataset.mobileFilterReady =
                    "true";

                button.addEventListener(
                    "click",
                    function () {

                        // Small delay so the existing
                        // filterByCourse/filterByCategory
                        // function can run first.
                        setTimeout(
                            function () {
                                if (
                                    window.innerWidth <=
                                    900
                                ) {
                                    closeSidebar();
                                }
                            },
                            80
                        );
                    }
                );
            });


        /* -------------------------------
           ESC KEY
        -------------------------------- */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key !== "Escape") {
                    return;
                }

                closeMobileNav();
                closeSidebar();
            }
        );


        /* -------------------------------
           RESIZE HANDLING
        -------------------------------- */

        let lastWidth =
            window.innerWidth;

        window.addEventListener(
            "resize",
            function () {

                const currentWidth =
                    window.innerWidth;

                /*
                 * When switching back to desktop,
                 * reset mobile states.
                 */
                if (
                    currentWidth > 900 &&
                    lastWidth <= 900
                ) {
                    closeMobileNav();
                    closeSidebar();
                }

                /*
                 * When switching from desktop
                 * to mobile, also reset states.
                 */
                if (
                    currentWidth <= 900 &&
                    lastWidth > 900
                ) {
                    closeMobileNav();
                    closeSidebar();
                }

                lastWidth =
                    currentWidth;
            }
        );


        /* -------------------------------
           PREVENT SIDEBAR FROM STAYING
           OPEN AFTER PAGE RESTORE
        -------------------------------- */

        window.addEventListener(
            "pageshow",
            function () {
                closeSidebar();
                closeMobileNav();
            }
        );
    }


    /* -----------------------------------
       INITIALIZE AFTER DOM IS READY
    ----------------------------------- */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            setupMobileNavigation
        );

    } else {

        setupMobileNavigation();
    }

})();
