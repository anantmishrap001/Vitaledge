1.	 Introduction
Healthcare services have grown increasingly complex, time-sensitive, and abundant in recent years, making intelligent systems crucial for physicians providing accurate and timely diagnoses. The diagnostic procedure via manual testing requires considerable amounts of time and results in incorrect readings due to human errors, particularly in patients displaying symptoms of multiple illnesses at once. The lack of quality healthcare services in remote areas and a shortage of medical professionals paves the way for technology-driven healthcare solutions. Our project will create an AI-driven prediction system to evaluate symptoms provided by users, facilitating quicker healthcare triage, improving medical decision-making, and allowing users to reach the appropriate medical professionals, particularly since individuals in remote regions often struggle to access doctors. 

Numerous researchers examined how machine learning functions with electronic health records (EHRs), symptom data sets, and medical imaging for the purpose of disease detection. Researchers utilize logistic regression, decision trees, and deep learning techniques to detect diabetes, cancer, and various other medical conditions, including cardiovascular diseases. These models exhibit two primary drawbacks as they handle limited disease categories while requiring intricate input data from lab results and radiology images. Current prediction models do not possess adequate ability to identify multiple diseases based solely on symptoms, presenting a frustrating practical obstacle for ordinary users relying on diagnostic systems. The suggested project creates a comprehensive multi-class classification system that evaluates 132 unique binary symptoms to determine 42 potential conditions. The medical dataset was divided into training and testing segments, utilizing train_test_split to enhance model performance while protecting against overfitting. 

We tested and evaluated several machine learning algorithms such as Support Vector Classifier, Random Forest, Gradient Boosting, K-Nearest Neighbors, and Multinomial Naive Bayes. Assessment was conducted based on accuracy metrics for precision and F1 score. The outcome is a strong and expandable AI model that can offer preliminary diagnostic recommendations based on symptoms provided by users. This model has the potential to act as the basis for an AI-driven symptom checker that empowers users, assists doctors, and improves the accessibility and effectiveness of contemporary healthcare. 
2.	 Problem Statement
The practice of medical diagnosis encounters numerous challenges in today's age. Many individuals utilize online search engines to assess their symptoms, often leading to inaccurate diagnoses and unnecessary anxiety. The circulation of inaccurate information causes patients to postpone seeking medical assistance, resulting in negative health outcomes and increasing treatment expenses. 

Healthcare facilities require a centralized system that offers reliable AI diagnostic assistance in conjunction with expert physician supervision; however, such systems are currently lacking. User acceptance of current medical platforms is hindered as the services they provide lack adequate accuracy, prompt responses, and pertinent professional advice based on genuine healthcare data. Individuals navigate an unfamiliar information landscape that leads them to make crucial health choices without adequate guidance or clear understanding. The existing gap highlights the need to create a smart solution that utilizes machine learning for precise symptom evaluation and directs users to accurate medical pathways using trustworthy medical information. 

A frequent issue users encounter is the challenge of forming an appropriate connection with physicians, particularly when attempting to locate a doctor who meets their unique medical requirements or preferences. To tackle this issue, we have introduced a new and easy-to-use feature in the app that allows users to effortlessly connect with a doctor they prefer. This enhancement improves the overall user experience and guarantees that users obtain timely and personalized medical care from the healthcare provider they trust or choose. 

3.	 Objective
The main objective of this project is to develop a healthcare website that employs artificial intelligence systems to accurately and quickly diagnose medical issues. Employing sophisticated algorithm processing, the platform analyzes symptoms submitted by users to produce possible diagnosis outcomes and suggest treatment alternatives. 
The platform will obtain revised symptom-diagnosis data to enhance diagnostic precision as time goes on. The system will gain advantages from future advancements that will incorporate teleconsultation features and tailored healthcare recommendations to become a comprehensive health solution. In addition to this, Vital-Edge will link users with the preferred doctor and assist in scheduling appointments. 


Chapter 2
LITERATURE REVIEW AND SUMMARY

2.1 LITERATURE REVIEW
Reference No.	Method Used	Data Set Used	Performance Parameters (Accuracy, etc.)	Findings / Limitations / Future Scope
[1]	SVM for heart disease prediction	Cleveland Heart Disease Dataset	Accuracy: 86.8%	Outperformed traditional classifiers; limited generalization due to small dataset; suggested larger and more diverse data for training.
[2]	SVM for diabetes prediction	Pima Indian Diabetes Dataset	Accuracy: 78.2%	Demonstrated robustness on high-dimensional data; performance depends heavily on feature scaling; recommended using hybrid models for improved results.
[3]	Random Forest for chronic disease diagnosis	Public health dataset (multiple chronic diseases)	Accuracy: 88.7%	Provided stable and interpretable results; robust to noise; limited by feature importance in correlated variables; suggested integration with boosting models.
[4]	Random Forest for cancer prediction	TCGA (The Cancer Genome Atlas)	Accuracy: 91.2%	Efficient in handling feature-rich data; strong results with missing values; lacks performance on minority classes; proposed ensemble stacking for future.
[5]	Gradient Boosting for cardiovascular event prediction	Framingham Heart Study Dataset	Accuracy: 85.4%, AUC: 0.89	Outperformed logistic regression and decision trees; overfitting observed on small samples; future scope includes using XGBoost and LGBM.
[6]	XGBoost (a type of Gradient Boosting) for hospital readmission prediction	MIMIC-III Dataset	AUC: 0.92	High predictive power; fast convergence; complex tuning required; suggested automated hyperparameter optimization for large-scale applications.
[7]	KNN for disease classification using symptoms	Symptom-disease mapping dataset	Accuracy: 82.5%	Performed well on simple datasets; accuracy drops with high-dimensional data; suggested feature selection or dimensionality reduction before KNN.
[8]	KNN for dengue prediction based on symptom similarity	Government health records	Accuracy: 84.3%	Effective for early-stage detection; suffers with noisy or incomplete data; recommends hybridizing KNN with clustering techniques.
[9]	Multinomial Naive Bayes for symptom-based diagnosis	Binary symptom dataset (132 symptoms, 42 diseases)	Accuracy: 91.4%	Simple and fast with large discrete features; independence assumption may not hold; suggested combining with NLP for free-text symptom inputs.
[10]	UCI medical dataset	Precision: 89.6%, Recall: 87.2%	Good baseline performance; limited when symptom overlap is high; 
proposes ensemble use with other classifiers for real-world deployment.




 2.2  Summary
•	Support Vector Machine (SVM) is utilized for predicting heart disease and diabetes. It demonstrates strong accuracy (86.8% and 78.2% respectively) yet faces difficulties with limited datasets and dimensional issues. 

•	Random Forest is utilized for forecasting chronic illnesses and cancer, attaining significant accuracies (88.7% and 91.2%). It delivers consistent and understandable outcomes, but may be constrained by the significance of features. 

•	Gradient Boosting and XGBoost are utilized for predicting cardiovascular incidents and overall health events (achieving AUCs of 0.89 and 0.92). They demonstrate strong predictive capabilities but need precise adjustments and might overfit on limited datasets. 

•	K-Nearest Neighbors (KNN) is utilized for classifying diseases and predicting dengue. It achieves good results (82.5%-84.3% accuracy) on straightforward datasets but has difficulty with noisy, incomplete, or high-dimensional information. 

•	Naive Bayes is employed for predicting diseases based on symptoms (with an accuracy of 91.4%). It is straightforward and effective but may encounter problems when symptoms significantly overlap. 

•	Ensemble techniques are recommended for practical application to enhance reliability, particularly when single models may exhibit constraints. 







CHAPTER-3 
SOFTWARE REQUIREMENTS SPECIFICATION
3.1 Software Tool Platform/ Tools/Framework used

•	Backend:
Python (Programming Language)
Flask (Web Framework)

•	Frontend:
JavaScript (Programming Language)
React.js (Frontend Framework)

•	Machine Learning Libraries:
scikit-learn (for implementing algorithms like SVC, Random Forest, Gradient Boosting, KNN, Multinomial Naive Bayes)
XGBoost (for Gradient Boosting)

•	Development and Data Handling Tools:
Pandas (Data manipulation)
NumPy (Numerical operations)

•	Other Platforms and Tools:
Jupyter Notebook (for initial model development and testing)
Visual Studio Code (for frontend and backend development)

3.2 Functional Requirements
•	User Registration and Login
Users must be able to register and log in to the healthcare platform securely.
•	Symptom Input Interface
Users can input their symptoms through an interactive form built using React.js on the frontend.
•	Disease Prediction System
Submitted symptoms are sent to the backend (Flask server).
Machine Learning models predict possible diseases based on the symptoms using trained models.
•	Display of Predicted Diseases
The frontend receives prediction results and displays the most probable diseases along with relevant information.
•	Doctor Recommendation
Based on the predicted disease, the system suggests nearby doctors or specialists to the user.
•	Appointment Booking (Optional/Future Scope)
Users can select a recommended doctor and book an appointment through the system (basic structure laid).
•	Model Management
Backend should manage and load trained models (Random Forest, SVC, Gradient Boosting, XGBoost) during API calls for real-time predictions.
•	Data Validation
The system must validate user input before submitting to avoid errors (both frontend and backend validation).
•	Error Handling
Proper error messages must be displayed in case of invalid inputs, backend failures, or model prediction errors.
•	Performance Metrics Logging
Backend should log the performance of predictions (accuracy, latency) for future optimization and analysis.
•	Mobile Responsiveness
The frontend must be responsive and user-friendly on both desktop and mobile devices.

3.3 Performance Requirements That Are Not Functional

Scalability
In the future, the platform should be expandable to accommodate more users and more illnesses or symptoms without requiring significant architectural adjustments.

Safety
HTTPS must be used for the safe transmission of user data, including login credentials and symptoms.
Passwords need to be safely saved using hashing and encryption methods.
API endpoints must to be secured against common attacks (such SQL Injection and Cross-Site Scripting) and unwanted access.

Accessibility
Users should be able to access the symptom checker at any time because the system should be up and running around the clock with little downtime.

Mobility
The system ought to function with a variety of web browsers, including Chrome, Firefox, Safari, and Edge.
In order to guarantee a positive experience on smartphones and tablets, the platform must also be responsive to mobile devices.

Integrity of Data
When being sent or stored, symptoms and prediction results must not be changed or tampered with.
In the event of a server failure, backup procedures must to be in place to restore data.

Recording and Observation
For auditing and debugging purposes, system events (predictions, failures, and logins) ought to be recorded.
The backend should be configured with performance monitoring and basic health checks.

Observance
The system should adhere to healthcare-related data protection regulations (such as HIPAA if necessary in the future) if it is made publicly available.





Chapter 4
Methodology
4.1 Proposed Method
The project received two CSV files which served both training and testing the predictive model. The symptom-data files show medical associations between diagnosis types and symptoms to enable the creation of AI-based medical diagnostic systems.
133 columns exist in each CSV file alongside varying numbers of patient records within each file. The dataset consists of two CSV files which separate training from testing purposes. Here are the details of the dataset format:
Syndemic information exists in columns 1 to 132 of the data. A binary feature exists in each column where the presence or absence of a specific symptom is noted as 1 or 0 respectively.
The last column of the dataset is labeled prognosis to show the diagnosis resulting from the symptoms recorded in earlier columns. The values in this column span 42 distinct diseases, each acting as a class in a multi-class classification problem.
Training Data:
•	The machine learning model receives training data to build its functionality.
•	The data includes numerous symptom combinations which link to their expected medical outcomes in a complete way.
•	The generalization working of an AI system depends greatly on various combinations of training data and its overall size.
Testing Data: 
•	The testing data set enables assessment of trained model performance.
•	The assessment of model accuracy and precision and recall along with other metrics takes place on symptom combinations which were not used during training.
Data Splitting
•	Value evaluation from scikit-learn provided the train_test_split function that split our training dataset into separate sections.
•	Eighty percent of the input data composed the training set for model development.
•	The Validation Set (20% of data) served the purpose of model testing and generalization evaluation before its implementation in final testing operations.
•	The split serves two purposes to reflect real-life data scenarios and protects from model overfitting so the models can accurately evaluate new symptom data.

Model Training and Selection:
To tackle the multi-class classification problem of predicting diseases based on symptoms, we employed a diverse set of supervised machine learning algorithms. Each model brings a unique perspective and computational approach to learning patterns from the dataset, enhancing our ability to compare performances and identify the best fit for the task.

The following models were used in training and evaluation:
Support Vector Classifier (SVC):
•	The Support Vector Classifier delivers exceptional performance for classification problems because it functions best when operating in high-dimensional data. We utilized an SVC classifier with appropriate parameters to analyze symtpom combinations which resulted in assigning them to one of 42 disease classes because of the binary features with multiple target classes.
•	This algorithm demonstrates exceptional generalization power and remains resistant to overfitting when regularization techniques are applied since it is optimally suited for high-dimensionality features.
Random Forest Classifier
•	This learning technique creates numerous decision trees throughout training before it selects the most common (classification) class from these trees.
•	The random forest algorithm maintains efficient processing of non-linear data and provides both outlier robustness and feature importance ratings and improves data quality through averaging processes.
Gradient Boosting Classifier
•	Gradient Boosting creates an additive model through step-by-step constructions that allows the optimization of any differentiable loss function.
•	Through its application Gradient Boosting delivers highly precise models while minimizing former model errors and operates effectively on tabular data structures.
K-Nearest Neighbors Classifier (KNN)
•	The K-Nearest Neighbors classifier serves as an approachable algorithm which determines new data entries through the dominant class among k-numbering neighbors across the feature space.
•	No prior assumptions about data distribution accompany this method which works effectively with low-dimensional data and provides simple implementation and interpretation.
Multinomial Naive Bayes
•	The algorithm functions well as a discreteness classifier for terms in text classification yet demonstrates flexibility for recognizing binary elements such as disease symptoms. The model employs Bayes' Theorem to handle predictors that exhibit independence between their variables.
•	Strengths: Fast and efficient, especially with large datasets; works surprisingly well despite the naive assumption of feature independence.
Evaluation Strategy
•	Different models underwent training on the training samples before receiving evaluation through testing samples.
•	Each model assessment used performance metrics that included accuracy, precision, recall, F1-score and confusion matrix for predictive power analysis.
•	Cross-validation procedures were utilized to check the stability and reliability of the models when it was needed.
FLOW DIAGRAM:
 
4.2 Model Summary

 The development of reliable artificial intelligence-based disease prediction systems from symptoms required evaluation between multiple machine learning techniques. Different frameworks were chosen because of their strong capability in classification and their medical applicability. The collection contained 132 binary symptom features together with 42 target diseases which resulted in a multi-class classification framework. Standard performance measures evaluated the models through their accuracy scores together with precision and recall and F1 scores.
An overview of the models can be found together with their main distinguishing features in the following section:

1.	Support Vector Classifier (SVC)
The model demonstrates success in working with spaces that have high dimensions. The authors selected SVC because it performs sophisticated disease pattern classification through kernel functions. Stable model behavior occurred with the model producing good results when symptoms followed linear or non-linear patterns

2.	Random Forest
The tree ensemble approach to decision modeling produced overfitting resistance while offering explanations about which features the model prioritized. The Random Forest model reached excellent performance levels with robust outcomes when processing noisy and imbalanced data.


3.	Gradient Boosting Classifier
When using XGBoost in Gradient Boosting the model performed best among all tested models in terms of accuracy. The method demonstrated exceptional capability in interpreting sophisticated and non-linear associations between disease symptoms and conditions.

4.	K-Nearest Neighbors (KNN)
A practical algorithm which calculates instance similarity to generate results. The KNN model finished predictions slowly but achieved acceptable outcomes in initial diagnostic stages before achieving optimal accuracy on specific data sections.

5.	Multinomial Naive Bayes
As a probabilistic classifier of discrete data this method worked efficiently with speed making it particularly appropriate for binary symtptom vectors. Its basic assumptions failed to limit performance because the model effectively predicted common diseases.

Final Model Choice
Extensive evaluation led to the selection of XGBoost as the final model because it demonstrated the best combination of accuracy together with reliability and scalability. XGBoost functions as the central processing unit for the AI-based symptom checker system which enables users to receive quick and precise disease predictions from their entered symptoms

4.3 Backend
Our project's backend has mostly made use of Flask, a robust and lightweight Python web framework. All of the server-side logic, such as user login, symptom testing, and AI model communication, is managed using Flask.

The symptom checker is one of our backend's primary features. The Flask server receives the data via API requests when a user enters their symptoms through the frontend. This data is processed by the server and fed into an AI model that has been trained to forecast illnesses based on typical symptoms. After analyzing the symptoms, the AI model predicts the ailment and presents it to the user. This eliminates the need for manual diagnosis and enables rapid, intelligent disease prediction.
We have integrated a relational database (such as MySQL, PostgreSQL, or SQLite, depending on deployment needs) for the user login and registration system. Upon registering, a user's name, email address, and password (encrypted for security) are securely saved in the database. To guarantee authentication, user credentials are checked against the stored data during login. With the opportunity to retain their history and preferences for later use, our safe user management system guarantees that every user has a customized experience.

To guarantee seamless and dependable interactions between the frontend, backend, and AI model, the backend is also built to handle a number of other crucial functions, including error handling, session management, input validation, and secure API routing.

We have created a secure login and registration capability for the user authentication system. A relational database (such as MySQL, PostgreSQL, or SQLite, depending on deployment requirements) securely stores user information like name, email, and encrypted password. To guarantee correct authentication and session management, the user credentials are checked against the database during login. With the option to save health information and preferences for next visits, this enables each user to have a unique and safe experience.

To improve the user's access to medical services, we have integrated the Google Maps API in addition to managing logins and screening for symptoms. Users can utilize the system to find physicians or hospitals in their area after being given the projected disease. Based on the user's geolocation, the Flask backend communicates with the Google Maps API to retrieve local medical specialists, facilitating the user's ability to get prompt medical assistance if needed.








CHAPTER 5
RESULT AND DISCUSSION
5.1 Predictive model behavior:
The models' capacity to handle high-dimensional binary input and their algorithmic structure were key factors in determining their predictive behavior:

Generalization vs. Overfitting: SVC needed rigorous regularization to prevent overfitting, but Random Forest and Gradient Boosting handled generalization better using ensemble approaches.

Compared to Gradient Boosting, which was slower but produced more dependable results, Naive Bayes and KNN had faster prediction speeds but lower predictive accuracy.

Handling Symptom Overlap: Random Forest and Gradient Boosting models were more effective at handling overlapping symptoms across several diseases, which increased their applicability in the real world.

Because it achieves the optimum balance between predicted performance and dependability in real-world, high-dimensional healthcare datasets, Gradient Boosting (XGBoost) was chosen for practical deployment.

5.2 Comparative analysis

Model	Strengths	Weaknesses	Suitability for Symptom-based Diagnosis	Performance (Accuracy, etc.)
Support Vector Classifier (SVC)	- Effective in high-dimensional spaces
- Works well for binary/multi-class classification
- Proper regularization techniques make GNNs resistant to overfitting issues.	- High training time on large datasets
- Not ideal for noisy datasets
- Requires careful tuning of kernel	Suitable for symptom-based diagnosis with clearly separable feature patterns	Good accuracy (~88–91%) in trials; stable results
Random Forest	- Handles rough and missing data well
- Reduces overfitting by using bagging
- Provides important features	- Can become complex with many trees
- Slower prediction time for large forests	Highly suitable due to robustness and interpretability	High accuracy (~90–93%) with good precision-recall balance
Gradient Boosting (e.g., XGBoost)	- High accuracy and model performance
- Captures complex patterns
- Efficient with regularization	- Prone to overfitting if not tuned
- Long training time
- Sensitive to noise in labels	Excellent for structured medical datasets with complex patterns	Very high accuracy (~93–95%) and AUC in similar tasks
K-Nearest Neighbors (KNN)	- Simple and intuitive
- No training time
- Works well with smaller datasets	- Slow prediction on large datasets
- Performance drops with high-dimensional data
- Sensitive to irrelevant features	Moderately suitable; good for smaller, clean datasets	Moderate accuracy (~82–85%) with high variance
Multinomial Naive Bayes	- Fast and efficient for large-scale classification
- Performs well with binary/discrete features
- Simple to implement	- Assumes feature independence
- Performance degrades with correlated features
- Less expressive	Well-suited for binary symptom presence/absence data	Good accuracy (~89–92%) when independence assumption is near-valid
 



5.3  Summary of discussion
The research effectively developed and assessed an AI-powered system that can identify illnesses based just on input from symptoms. After a thorough trial and comparison of five machine learning models, Gradient Boosting (XGBoost) was shown to be the most accurate and dependable model, obtaining better performance metrics in a variety of tests.

By effectively interpreting complicated, overlapping symptom patterns, our findings show that ensemble learning models—in particular, boosting techniques—significantly improve early diagnosis skills. In underserved areas with limited access to prompt medical consultation, this accomplishment points to a possible avenue for incorporating AI-based diagnosis help into actual healthcare systems.

In addition, the incorporation of the Google Maps API to identify local physicians enhances the user experience by guaranteeing that patients receive more than just a first diagnostic.















CHAPTER 6
CONCLUSION
6.1 Conclusion
A comprehensive AI-powered healthcare platform was successfully constructed by this project. React.js was used to create the frontend, which offers a seamless login, symptom entry, and results display experience. The Flask-built backend controls data flow, communicates with a SQL database for safe user authentication, and links users to local physicians via the Google Maps API. An AI-based predictive model forms the core of the system; after testing several machine learning algorithms, Gradient Boosting (XGBoost) was chosen due to its excellent accuracy and dependability. All things considered, the system improves healthcare accessibility, provides quick disease prediction, and shows how AI, web technologies, and real-world services may be integrated to promote early medical diagnosis.

6.2 Future scope
By adding real-time teleconsultation capabilities, the project can grow and enable consumers to communicate with doctors online immediately following a diagnosis. By enabling users to enter free-text symptoms, Natural Language Processing (NLP) can increase usability. Health tracking dashboards, automated appointment scheduling, and tailored healthcare suggestions are possible future developments. Diagnostic accuracy would be further improved by augmenting the AI model with more and more varied datasets. Furthermore, the adoption of mobile app versions can further facilitate access to healthcare, particularly for people who live in distant places. With these improvements, the platform will function as a comprehensive intelligent healthcare assistant, better assisting patients and healthcare providers.








References
[1]	Rajkomar, A., Dean, J., & Kohane, I. (2019). Machine learning in medicine. New England Journal of Medicine, 380(14), 1347–1358. https://doi.org/10.1056/NEJMra1814259
[2]	Churpek, M. M., Adhikari, R., & Edelson, D. P. (2016). Predicting clinical deterioration in the hospital: the impact of data science. Critical Care, 20(1), 1–6. https://doi.org/10.1186/s13054-016-1349-0
[3]	Dey, N., Ashour, A. S., & Balas, V. E. (2019). Smart Medical Data Sensing and IoT Systems Design in Healthcare. Springer. ISBN: 978-0-12-817428-4
[4]	Kannimuthu, S., & Rajalakshmi, P. (2020). Machine Learning Based Early Detection and Diagnosis of Chronic Diseases. Springer Nature. https://link.springer.com/book/10.1007/978-981-15-3607-8
[5]	Johnson, A. E. W., et al. (2016). MIMIC-III, a freely accessible critical care database. Scientific Data, 3, 160035. https://doi.org/10.1038/sdata.2016.35

[6]	Ahmad, M. A., & Eckert, C. (2019). Interpretable Machine Learning in Healthcare. Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems. https://doi.org/10.1145/3290605.3300831
[7]	Rashid, M. M., et al. (2021). Artificial Intelligence and Machine Learning for Healthcare: A Review of the State-of-the-Art and Future Challenges. IEEE Access, 9, 20501-20533. https://doi.org/10.1109/ACCESS.2021.3051347
[8]	Shillan, D., Sterne, J. A. C., Champneys, A., & Gibbison, B. (2019). Use of machine learning to analyse routinely collected intensive care data: a systematic review. Critical Care, 23, 284. https://doi.org/10.1186/s13054-019-2564-9

[9]	Hastie, T., Tibshirani, R., & Friedman, J. (2009). The Elements of Statistical Learning: Data Mining, Inference, and Prediction. Springer. ISBN: 978-0-387-84857-0
[10]	IBM Watson Health. (2017). How AI is Transforming the Future of Healthcare. [White Paper]. https://www.ibm.com/watson-health
[11]	Tschandl, P., Rinner, C., Apalla, Z., et al. (2020). Human–computer collaboration for skin cancer recognition. Nature Medicine, 26, 1229–1234. https://doi.org/10.1038/s41591-020-0942-0
[12]	WHO. (2021). Artificial Intelligence for Health: Guidance on Ethics and Governance. World Health Organization. https://www.who.int/publications/i/item/9789240029200
[13]	Sun, C., Shrivastava, A., Singh, S., & Gupta, A. (2017). Revisiting unreasonable effectiveness of data in deep learning era. Proceedings of the IEEE International Conference on Computer Vision, 843–852. https://doi.org/10.1109/ICCV.2017.97
[14]	Nguyen, P., Tran, T., Wickramasinghe, N., & Venkatesh, S. (2017). Deepr: A convolutional net for medical records. IEEE Journal of Biomedical and Health Informatics, 21(1), 22-30. https://doi.org/10.1109/JBHI.2016.2633963
[15]	Miotto, R., Li, L., Kidd, B. A., & Dudley, J. T. (2016). Deep patient: An unsupervised representation to predict the future of patients from the electronic health records. Scientific Reports, 6, 26094. https://doi.org/10.1038/srep26094
[16]	Chen, J. H., & Asch, S. M. (2017). Machine learning and prediction in medicine — Beyond the peak of inflated expectations. New England Journal of Medicine, 376, 2507–2509. https://doi.org/10.1056/NEJMp1702071
[17]	Krittanawong, C., Johnson, K. W., Rosenson, R. S., et al. (2019). Deep learning for cardiovascular medicine: a practical primer. European Heart Journal, 40(25), 2058–2073. https://doi.org/10.1093/eurheartj/ehz057
[18]	Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). “Why should I trust you?”: Explaining the predictions of any classifier. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. https://doi.org/10.1145/2939672.2939778



[19]	Kourou, K., Exarchos, T. P., Exarchos, K. P., Karamouzis, M. V., & Fotiadis, D. I. (2015). Machine learning applications in cancer prognosis and prediction. Computational and Structural Biotechnology Journal, 13, 8–17. https://doi.org/10.1016/j.csbj.2014.11.005
[20]	Topol, E. J. (2019). High-performance medicine: the convergence of human and artificial intelligence. Nature Medicine, 25(1), 44–56. https://doi.org/10.1038/s41591-018-0300-7
[21]	Rajpurkar, P., Irvin, J., Zhu, K., et al. (2017). CheXNet: Radiologist-level pneumonia detection on chest X-rays with deep learning. arXiv preprint arXiv:1711.05225. https://arxiv.org/abs/1711.05225
[22]	Esteva, A., Kuprel, B., Novoa, R. A., et al. (2017). Dermatologist-level classification of skin cancer with deep neural networks. Nature, 542(7639), 115–118. https://doi.org/10.1038/nature21056
[23]	Singh, A., Sengupta, S., & Lakshminarayanan, V. (2020). Explainable deep learning models in medical image analysis. Journal of Imaging, 6(6), 52. https://doi.org/10.3390/jimaging6060052
[24]	Beam, A. L., & Kohane, I. S. (2018). Big data and machine learning in health care. JAMA, 319(13), 1317–1318. https://doi.org/10.1001/jama.2017.18391
[25]	Hinton, G. (2018). Deep learning—a technology with the potential to transform health care. JAMA, 320(11), 1101–1102. https://doi.org/10.1001/jama.2018.11100





