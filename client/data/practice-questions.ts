import type { PracticeQuestion } from "@/types/practice-question";


export const practiceQuestions: PracticeQuestion[] = [
  /* =========================================================
     NCLEX-RN COMPLETE COURSE
  ========================================================= */

  {
    id: "nclex-complete-q1",
    courseId: "nclex-complete",
    question:
      "A nurse is caring for a client who has difficulty breathing. Which action should the nurse take first?",
    options: [
      {
        id: "A",
        text: "Document the client's respiratory status.",
      },
      {
        id: "B",
        text: "Assess the client's airway.",
      },
      {
        id: "C",
        text: "Notify the healthcare provider.",
      },
      {
        id: "D",
        text: "Administer prescribed medication.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Airway assessment is the first priority when a client has difficulty breathing because airway compromise can rapidly become life-threatening.",
    difficulty: "easy",
    category: "Fundamentals",
  },

  {
    id: "nclex-complete-q2",
    courseId: "nclex-complete",
    question:
      "Which finding should the nurse recognize as a possible sign of hypoglycemia?",
    options: [
      {
        id: "A",
        text: "Warm, dry skin",
      },
      {
        id: "B",
        text: "Increased thirst",
      },
      {
        id: "C",
        text: "Diaphoresis and tremors",
      },
      {
        id: "D",
        text: "Deep, rapid respirations",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Diaphoresis, tremors, and other sympathetic nervous system responses are common early manifestations of hypoglycemia.",
    difficulty: "easy",
    category: "Diabetes",
  },

  {
    id: "nclex-complete-q3",
    courseId: "nclex-complete",
    question:
      "A nurse is preparing to administer medication to a client. Which action is most important before administration?",
    options: [
      {
        id: "A",
        text: "Check the client's room number.",
      },
      {
        id: "B",
        text: "Verify the medication against the prescription.",
      },
      {
        id: "C",
        text: "Ask another client for confirmation.",
      },
      {
        id: "D",
        text: "Document the medication before giving it.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "The nurse should verify the medication against the prescription and follow medication safety checks before administration.",
    difficulty: "easy",
    category: "Medication Safety",
  },

  {
    id: "nclex-complete-q4",
    courseId: "nclex-complete",
    question:
      "Which client should the nurse assess first?",
    options: [
      {
        id: "A",
        text: "A client requesting assistance with bathing",
      },
      {
        id: "B",
        text: "A client reporting sudden shortness of breath",
      },
      {
        id: "C",
        text: "A client requesting a snack",
      },
      {
        id: "D",
        text: "A client waiting for discharge instructions",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Sudden shortness of breath may indicate an acute airway or breathing problem and therefore takes priority.",
    difficulty: "easy",
    category: "Prioritization",
  },

  {
    id: "nclex-complete-q5",
    courseId: "nclex-complete",
    question:
      "Which nursing action is appropriate when caring for a client at risk for falls?",
    options: [
      {
        id: "A",
        text: "Keep the bed in the highest position.",
      },
      {
        id: "B",
        text: "Place frequently used items within reach.",
      },
      {
        id: "C",
        text: "Keep the room completely dark.",
      },
      {
        id: "D",
        text: "Encourage the client to walk without assistance.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Keeping frequently used items within reach reduces unnecessary movement and helps decrease fall risk.",
    difficulty: "easy",
    category: "Safety",
  },

  {
    id: "nclex-complete-q6",
    courseId: "nclex-complete",
    question:
      "Which assessment finding is most concerning in a postoperative client?",
    options: [
      {
        id: "A",
        text: "Mild incisional discomfort",
      },
      {
        id: "B",
        text: "Small amount of expected drainage",
      },
      {
        id: "C",
        text: "Sudden decrease in level of consciousness",
      },
      {
        id: "D",
        text: "Mild fatigue",
      },
    ],
    correctAnswer: "C",
    explanation:
      "A sudden change in level of consciousness can indicate a serious neurological or systemic complication and requires immediate assessment.",
    difficulty: "medium",
    category: "Postoperative Care",
  },

  {
    id: "nclex-complete-q7",
    courseId: "nclex-complete",
    question:
      "A client reports severe chest pressure. Which action should the nurse take first?",
    options: [
      {
        id: "A",
        text: "Ask the client to describe the pain.",
      },
      {
        id: "B",
        text: "Leave the client alone to rest.",
      },
      {
        id: "C",
        text: "Begin a routine discharge assessment.",
      },
      {
        id: "D",
        text: "Tell the client the discomfort is expected.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "The nurse should rapidly assess the client's symptoms and obtain relevant information while initiating appropriate emergency assessment.",
    difficulty: "medium",
    category: "Cardiovascular",
  },

  {
    id: "nclex-complete-q8",
    courseId: "nclex-complete",
    question:
      "Which intervention helps prevent pressure injuries in an immobile client?",
    options: [
      {
        id: "A",
        text: "Reposition the client regularly.",
      },
      {
        id: "B",
        text: "Keep the skin moist at all times.",
      },
      {
        id: "C",
        text: "Avoid inspecting the skin.",
      },
      {
        id: "D",
        text: "Massage reddened areas vigorously.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Regular repositioning reduces prolonged pressure over bony prominences and helps prevent pressure injuries.",
    difficulty: "easy",
    category: "Fundamentals",
  },

  {
    id: "nclex-complete-q9",
    courseId: "nclex-complete",
    question:
      "Which statement by a client demonstrates correct understanding of hand hygiene?",
    options: [
      {
        id: "A",
        text: "I only need to clean my hands when they look dirty.",
      },
      {
        id: "B",
        text: "Hand hygiene helps reduce transmission of microorganisms.",
      },
      {
        id: "C",
        text: "Gloves completely replace hand hygiene.",
      },
      {
        id: "D",
        text: "Hand hygiene is unnecessary after removing gloves.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Hand hygiene is one of the most important measures for reducing transmission of microorganisms in healthcare settings.",
    difficulty: "easy",
    category: "Infection Control",
  },

  {
    id: "nclex-complete-q10",
    courseId: "nclex-complete",
    question:
      "Which nursing principle should guide care when prioritizing multiple clients?",
    options: [
      {
        id: "A",
        text: "See the client who arrived first.",
      },
      {
        id: "B",
        text: "Address life-threatening problems first.",
      },
      {
        id: "C",
        text: "Always see the easiest client first.",
      },
      {
        id: "D",
        text: "Prioritize clients based only on age.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "When prioritizing care, immediate threats to airway, breathing, circulation, and other life-threatening conditions take priority.",
    difficulty: "easy",
    category: "Prioritization",
  },

  /* =========================================================
     NCLEX PRACTICE QUESTIONS
  ========================================================= */

  {
    id: "practice-questions-q1",
    courseId: "practice-questions",
    question:
      "A nurse is assessing a client with a fever. Which finding requires the most immediate attention?",
    options: [
      {
        id: "A",
        text: "Temperature of 38°C (100.4°F)",
      },
      {
        id: "B",
        text: "Heart rate of 88/min",
      },
      {
        id: "C",
        text: "New confusion and decreased responsiveness",
      },
      {
        id: "D",
        text: "Mild headache",
      },
    ],
    correctAnswer: "C",
    explanation:
      "New confusion and decreased responsiveness can indicate significant deterioration and require immediate assessment.",
    difficulty: "medium",
    category: "Prioritization",
  },

  {
    id: "practice-questions-q2",
    courseId: "practice-questions",
    question:
      "Which client statement indicates a need for further teaching about infection prevention?",
    options: [
      {
        id: "A",
        text: "I will wash my hands before preparing food.",
      },
      {
        id: "B",
        text: "I will avoid sharing personal items.",
      },
      {
        id: "C",
        text: "I can stop antibiotics once I feel better.",
      },
      {
        id: "D",
        text: "I will follow the prescribed treatment plan.",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Clients should follow the prescribed antibiotic regimen unless instructed otherwise by their healthcare provider.",
    difficulty: "easy",
    category: "Infection Control",
  },

  {
    id: "practice-questions-q3",
    courseId: "practice-questions",
    question:
      "Which finding is most consistent with dehydration?",
    options: [
      {
        id: "A",
        text: "Moist mucous membranes",
      },
      {
        id: "B",
        text: "Clear urine with frequent output",
      },
      {
        id: "C",
        text: "Dry mucous membranes and decreased urine output",
      },
      {
        id: "D",
        text: "Weight gain",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Dry mucous membranes and decreased urine output are common findings associated with fluid volume deficit.",
    difficulty: "easy",
    category: "Fluid Balance",
  },

  {
    id: "practice-questions-q4",
    courseId: "practice-questions",
    question:
      "Which nursing action best promotes effective communication with a client?",
    options: [
      {
        id: "A",
        text: "Change the subject when the client becomes emotional.",
      },
      {
        id: "B",
        text: "Use active listening.",
      },
      {
        id: "C",
        text: "Give advice immediately.",
      },
      {
        id: "D",
        text: "Interrupt frequently.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Active listening allows the nurse to understand the client's concerns and promotes therapeutic communication.",
    difficulty: "easy",
    category: "Communication",
  },

  {
    id: "practice-questions-q5",
    courseId: "practice-questions",
    question:
      "Which assessment finding should the nurse report immediately?",
    options: [
      {
        id: "A",
        text: "Respiratory rate of 8/min",
      },
      {
        id: "B",
        text: "Temperature of 37°C",
      },
      {
        id: "C",
        text: "Pulse of 78/min",
      },
      {
        id: "D",
        text: "Blood pressure of 118/72 mmHg",
      },
    ],
    correctAnswer: "A",
    explanation:
      "A respiratory rate of 8/min indicates significant respiratory depression and requires immediate assessment.",
    difficulty: "medium",
    category: "Respiratory",
  },

  {
    id: "practice-questions-q6",
    courseId: "practice-questions",
    question:
      "Which position is commonly used to promote lung expansion in a client experiencing respiratory difficulty?",
    options: [
      {
        id: "A",
        text: "High-Fowler position",
      },
      {
        id: "B",
        text: "Flat supine position",
      },
      {
        id: "C",
        text: "Prone with no support",
      },
      {
        id: "D",
        text: "Trendelenburg position",
      },
    ],
    correctAnswer: "A",
    explanation:
      "High-Fowler positioning can improve lung expansion and facilitate breathing in many clients with respiratory difficulty.",
    difficulty: "easy",
    category: "Respiratory",
  },

  {
    id: "practice-questions-q7",
    courseId: "practice-questions",
    question:
      "Which finding suggests that a client may be experiencing an allergic reaction?",
    options: [
      {
        id: "A",
        text: "Mild hunger",
      },
      {
        id: "B",
        text: "Difficulty breathing and facial swelling",
      },
      {
        id: "C",
        text: "Normal skin color",
      },
      {
        id: "D",
        text: "Increased appetite",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Difficulty breathing and facial swelling may indicate a serious allergic reaction and require immediate intervention.",
    difficulty: "medium",
    category: "Emergency Care",
  },

  {
    id: "practice-questions-q8",
    courseId: "practice-questions",
    question:
      "Which intervention is appropriate for a client with impaired mobility?",
    options: [
      {
        id: "A",
        text: "Encourage appropriate activity as tolerated.",
      },
      {
        id: "B",
        text: "Keep the client on bed rest indefinitely.",
      },
      {
        id: "C",
        text: "Avoid range-of-motion exercises.",
      },
      {
        id: "D",
        text: "Discourage repositioning.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Appropriate activity and mobility help maintain strength, circulation, and functional ability when medically appropriate.",
    difficulty: "easy",
    category: "Mobility",
  },

  {
    id: "practice-questions-q9",
    courseId: "practice-questions",
    question:
      "Which action is appropriate when obtaining a medication history?",
    options: [
      {
        id: "A",
        text: "Ask only about prescription medications.",
      },
      {
        id: "B",
        text: "Ask about prescription, over-the-counter, and herbal products.",
      },
      {
        id: "C",
        text: "Ignore medications taken occasionally.",
      },
      {
        id: "D",
        text: "Ask only about medications taken in the hospital.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "A complete medication history should include prescription medications, over-the-counter products, supplements, and herbal preparations.",
    difficulty: "easy",
    category: "Medication Safety",
  },

  {
    id: "practice-questions-q10",
    courseId: "practice-questions",
    question:
      "Which client should the nurse prioritize?",
    options: [
      {
        id: "A",
        text: "A client requesting a blanket",
      },
      {
        id: "B",
        text: "A client with new onset difficulty breathing",
      },
      {
        id: "C",
        text: "A client waiting for routine medication",
      },
      {
        id: "D",
        text: "A client requesting assistance with television controls",
      },
    ],
    correctAnswer: "B",
    explanation:
      "New onset difficulty breathing may indicate an immediate threat to airway or breathing and takes priority.",
    difficulty: "easy",
    category: "Prioritization",
  },

  /* =========================================================
     PHARMACOLOGY
  ========================================================= */

  {
    id: "pharmacology-q1",
    courseId: "pharmacology",
    question:
      "Which assessment is most important before administering a medication that can lower blood pressure?",
    options: [
      {
        id: "A",
        text: "Blood pressure",
      },
      {
        id: "B",
        text: "Hair color",
      },
      {
        id: "C",
        text: "Visual acuity",
      },
      {
        id: "D",
        text: "Height",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Blood pressure should be assessed before administering medications that can significantly lower blood pressure.",
    difficulty: "easy",
    category: "Medication Safety",
  },

  {
    id: "pharmacology-q2",
    courseId: "pharmacology",
    question:
      "Which finding may indicate an adverse effect of a medication?",
    options: [
      {
        id: "A",
        text: "A new rash after medication administration",
      },
      {
        id: "B",
        text: "Expected therapeutic response",
      },
      {
        id: "C",
        text: "Improvement in symptoms",
      },
      {
        id: "D",
        text: "Normal vital signs",
      },
    ],
    correctAnswer: "A",
    explanation:
      "A new rash following medication administration may indicate an adverse or allergic reaction and should be evaluated.",
    difficulty: "easy",
    category: "Adverse Effects",
  },

  {
    id: "pharmacology-q3",
    courseId: "pharmacology",
    question:
      "Which instruction is appropriate when teaching a client about medication adherence?",
    options: [
      {
        id: "A",
        text: "Take the medication only when symptoms occur.",
      },
      {
        id: "B",
        text: "Take the medication exactly as prescribed.",
      },
      {
        id: "C",
        text: "Double the next dose if one is missed without checking instructions.",
      },
      {
        id: "D",
        text: "Stop the medication whenever you feel better.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Medication adherence means taking medications according to the prescribed dose, schedule, and instructions.",
    difficulty: "easy",
    category: "Patient Education",
  },

  {
    id: "pharmacology-q4",
    courseId: "pharmacology",
    question:
      "Which route of medication administration generally provides the fastest systemic effect?",
    options: [
      {
        id: "A",
        text: "Oral",
      },
      {
        id: "B",
        text: "Intravenous",
      },
      {
        id: "C",
        text: "Topical",
      },
      {
        id: "D",
        text: "Enteral through a feeding tube",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Intravenous administration delivers medication directly into the bloodstream and generally provides a rapid systemic effect.",
    difficulty: "easy",
    category: "Medication Administration",
  },

  {
    id: "pharmacology-q5",
    courseId: "pharmacology",
    question:
      "Which laboratory value is particularly important when monitoring a client receiving medications that affect kidney function?",
    options: [
      {
        id: "A",
        text: "Serum creatinine",
      },
      {
        id: "B",
        text: "Hemoglobin A1c only",
      },
      {
        id: "C",
        text: "Platelet count only",
      },
      {
        id: "D",
        text: "Blood type",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Serum creatinine is commonly used to assess kidney function, which can affect medication clearance.",
    difficulty: "medium",
    category: "Laboratory Monitoring",
  },

  {
    id: "pharmacology-q6",
    courseId: "pharmacology",
    question:
      "A nurse is preparing to administer a medication. Which action best prevents medication errors?",
    options: [
      {
        id: "A",
        text: "Skip identification if the nurse knows the client.",
      },
      {
        id: "B",
        text: "Use appropriate medication verification procedures.",
      },
      {
        id: "C",
        text: "Administer medications from memory.",
      },
      {
        id: "D",
        text: "Ask another client to identify the medication.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Following medication verification and patient-identification procedures helps reduce medication errors.",
    difficulty: "easy",
    category: "Medication Safety",
  },

  {
    id: "pharmacology-q7",
    courseId: "pharmacology",
    question:
      "Which symptom should a client report immediately after taking a new medication?",
    options: [
      {
        id: "A",
        text: "Mild hunger",
      },
      {
        id: "B",
        text: "Difficulty breathing",
      },
      {
        id: "C",
        text: "Normal thirst",
      },
      {
        id: "D",
        text: "Mild boredom",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Difficulty breathing can indicate a serious allergic reaction and requires immediate medical attention.",
    difficulty: "easy",
    category: "Adverse Effects",
  },

  {
    id: "pharmacology-q8",
    courseId: "pharmacology",
    question:
      "Why should nurses assess for medication allergies before administration?",
    options: [
      {
        id: "A",
        text: "To determine the client's preferred pharmacy",
      },
      {
        id: "B",
        text: "To reduce the risk of an allergic reaction",
      },
      {
        id: "C",
        text: "To determine the medication's color",
      },
      {
        id: "D",
        text: "To calculate the client's height",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Checking allergy history helps prevent administration of medications that could cause potentially serious allergic reactions.",
    difficulty: "easy",
    category: "Medication Safety",
  },

  {
    id: "pharmacology-q9",
    courseId: "pharmacology",
    question:
      "Which information should be included when educating a client about a new medication?",
    options: [
      {
        id: "A",
        text: "Only the medication's color",
      },
      {
        id: "B",
        text: "Purpose, administration instructions, and important adverse effects",
      },
      {
        id: "C",
        text: "Only the manufacturer's name",
      },
      {
        id: "D",
        text: "Only the medication's price",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Medication teaching should include the medication's purpose, how to take it, and important adverse effects or precautions.",
    difficulty: "easy",
    category: "Patient Education",
  },

  {
    id: "pharmacology-q10",
    courseId: "pharmacology",
    question:
      "Which action should the nurse take when an ordered medication appears unsafe for the client?",
    options: [
      {
        id: "A",
        text: "Administer it without question.",
      },
      {
        id: "B",
        text: "Hold the medication and clarify the order.",
      },
      {
        id: "C",
        text: "Ask another client what to do.",
      },
      {
        id: "D",
        text: "Change the dose independently.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "When a medication order appears unsafe, the nurse should not administer it without clarification and should follow appropriate safety procedures.",
    difficulty: "medium",
    category: "Medication Safety",
  },

  /* =========================================================
     PRIORITIZATION & TEST STRATEGIES
  ========================================================= */

  {
    id: "test-strategies-q1",
    courseId: "test-strategies",
    question:
      "When answering a prioritization question, which client should generally receive attention first?",
    options: [
      {
        id: "A",
        text: "The client with an immediate life-threatening problem",
      },
      {
        id: "B",
        text: "The client who arrived first",
      },
      {
        id: "C",
        text: "The client with the easiest task",
      },
      {
        id: "D",
        text: "The client requesting a snack",
      },
    ],
    correctAnswer: "A",
    explanation:
      "NCLEX prioritization questions generally require the nurse to identify the client with the most immediate threat to life or safety.",
    difficulty: "easy",
    category: "Prioritization",
  },

  {
    id: "test-strategies-q2",
    courseId: "test-strategies",
    question:
      "Which question should a student ask when deciding whether an option addresses an immediate priority?",
    options: [
      {
        id: "A",
        text: "Is this the easiest intervention?",
      },
      {
        id: "B",
        text: "Does this address an immediate threat to airway, breathing, or circulation?",
      },
      {
        id: "C",
        text: "Does this option sound the longest?",
      },
      {
        id: "D",
        text: "Was this option mentioned first?",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Airway, breathing, and circulation are fundamental priorities when identifying immediate threats.",
    difficulty: "easy",
    category: "ABCs",
  },

  {
    id: "test-strategies-q3",
    courseId: "test-strategies",
    question:
      "A question asks which action the nurse should take first. What should the student focus on?",
    options: [
      {
        id: "A",
        text: "The action that is most convenient",
      },
      {
        id: "B",
        text: "The action that addresses the highest priority problem",
      },
      {
        id: "C",
        text: "The action requiring the least documentation",
      },
      {
        id: "D",
        text: "The longest answer choice",
      },
    ],
    correctAnswer: "B",
    explanation:
      "For 'first' questions, identify the highest-priority problem and choose the intervention that addresses it.",
    difficulty: "easy",
    category: "Test Strategy",
  },

  {
    id: "test-strategies-q4",
    courseId: "test-strategies",
    question:
      "Which finding should usually receive priority because it represents an acute change?",
    options: [
      {
        id: "A",
        text: "A chronic symptom that has remained unchanged",
      },
      {
        id: "B",
        text: "A sudden change in mental status",
      },
      {
        id: "C",
        text: "A routine request for information",
      },
      {
        id: "D",
        text: "A scheduled follow-up appointment",
      },
    ],
    correctAnswer: "B",
    explanation:
      "A sudden change in mental status may indicate acute deterioration and generally requires prompt assessment.",
    difficulty: "medium",
    category: "Prioritization",
  },

  {
    id: "test-strategies-q5",
    courseId: "test-strategies",
    question:
      "Which client is generally the highest priority?",
    options: [
      {
        id: "A",
        text: "A stable client requesting discharge paperwork",
      },
      {
        id: "B",
        text: "A client with new severe respiratory distress",
      },
      {
        id: "C",
        text: "A client asking for a meal",
      },
      {
        id: "D",
        text: "A client waiting for a routine procedure",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Severe respiratory distress represents an immediate threat to breathing and takes priority.",
    difficulty: "easy",
    category: "ABCs",
  },

  {
    id: "test-strategies-q6",
    courseId: "test-strategies",
    question:
      "When two answer choices seem reasonable, what should the student consider first?",
    options: [
      {
        id: "A",
        text: "Which choice is safer and addresses the priority problem?",
      },
      {
        id: "B",
        text: "Which choice contains more words?",
      },
      {
        id: "C",
        text: "Which choice appears first?",
      },
      {
        id: "D",
        text: "Which choice uses more medical terminology?",
      },
    ],
    correctAnswer: "A",
    explanation:
      "When options appear reasonable, prioritize the intervention that is safest and addresses the most urgent client need.",
    difficulty: "medium",
    category: "Test Strategy",
  },

  {
    id: "test-strategies-q7",
    courseId: "test-strategies",
    question:
      "Which approach is most useful when a question contains several distracting details?",
    options: [
      {
        id: "A",
        text: "Ignore the actual question.",
      },
      {
        id: "B",
        text: "Identify the key problem and the question being asked.",
      },
      {
        id: "C",
        text: "Choose the longest answer.",
      },
      {
        id: "D",
        text: "Choose the first option automatically.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Identifying the central problem and exactly what the question asks helps prevent distraction from irrelevant information.",
    difficulty: "easy",
    category: "Test Strategy",
  },

  {
    id: "test-strategies-q8",
    courseId: "test-strategies",
    question:
      "Which situation should generally be prioritized over a routine nursing task?",
    options: [
      {
        id: "A",
        text: "A client with an acute safety threat",
      },
      {
        id: "B",
        text: "A routine supply request",
      },
      {
        id: "C",
        text: "A routine documentation task",
      },
      {
        id: "D",
        text: "A nonurgent room request",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Acute safety threats take priority over routine tasks.",
    difficulty: "easy",
    category: "Prioritization",
  },

  {
    id: "test-strategies-q9",
    courseId: "test-strategies",
    question:
      "A question asks which assessment finding requires immediate intervention. What should the student look for?",
    options: [
      {
        id: "A",
        text: "Expected findings",
      },
      {
        id: "B",
        text: "Unexpected findings that threaten safety or physiologic stability",
      },
      {
        id: "C",
        text: "The most common finding",
      },
      {
        id: "D",
        text: "The least important finding",
      },
    ],
    correctAnswer: "B",
    explanation:
      "The priority is an unexpected finding that indicates a threat to safety or physiologic stability.",
    difficulty: "medium",
    category: "Prioritization",
  },

  {
    id: "test-strategies-q10",
    courseId: "test-strategies",
    question:
      "Which strategy is best when a student is unsure between two answer choices?",
    options: [
      {
        id: "A",
        text: "Select randomly without rereading the question.",
      },
      {
        id: "B",
        text: "Compare both choices against the client's priority need.",
      },
      {
        id: "C",
        text: "Always choose option C.",
      },
      {
        id: "D",
        text: "Choose the option with the most technical words.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Comparing both choices against the client's priority need helps identify the safest and most appropriate answer.",
    difficulty: "easy",
    category: "Test Strategy",
  },
];