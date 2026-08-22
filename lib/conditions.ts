export type ConditionGuide = {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  overview: string[];
  symptoms: string[];
  contributors: string[];
  evaluation: string[];
  careApproach: string[];
  urgentSigns: string[];
  relatedService: { label: string; href: string };
  faqs: { question: string; answer: string }[];
};

export const conditionGuides: ConditionGuide[] = [
  {
    slug: 'low-back-pain',
    name: 'Low Back Pain',
    shortName: 'Low back pain',
    seoTitle: 'Low Back Pain Chiropractor in Lake City, SC',
    metaDescription:
      'Evaluation and conservative chiropractic care for low back pain, stiffness, and related mobility problems at BioSpine in Lake City, SC.',
    summary:
      'Low back pain can make lifting, sitting, sleeping, and ordinary movement difficult. A focused examination helps identify whether conservative chiropractic care is appropriate.',
    overview: [
      'Low back pain is a symptom with many possible contributors. Irritated spinal joints, muscle strain, changes in activity, prolonged sitting, and previous injuries can all affect how the lower back moves and feels.',
      'Dr. Jordan begins with your history and an examination instead of assuming every episode has the same cause. The goal is to understand what increases or eases your symptoms, how your movement is affected, and whether any findings call for imaging or referral.',
    ],
    symptoms: [
      'A dull ache or sharper pain in the lower back',
      'Stiffness after sleep, sitting, or driving',
      'Pain with bending, lifting, or changing position',
      'Discomfort extending into the buttock or hip',
      'Reduced confidence with work or daily activity',
    ],
    contributors: [
      'A recent lift, twist, fall, or change in activity',
      'Long periods of sitting or repetitive work',
      'Reduced hip or spinal mobility',
      'Deconditioning after inactivity',
      'Previous episodes that never fully settled',
    ],
    evaluation: [
      'Review of the symptom pattern and relevant health history',
      'Movement, strength, reflex, and sensation checks when indicated',
      'Orthopedic tests selected for your presentation',
      'A clear explanation of findings and reasonable next steps',
    ],
    careApproach: [
      'Joint mobilization or chiropractic adjustments when appropriate',
      'Soft-tissue care for related muscle tension',
      'Practical movement and home-exercise guidance',
      'Reassessment based on measurable changes in comfort and function',
    ],
    urgentSigns: [
      'New loss of bowel or bladder control',
      'Numbness in the groin or saddle area',
      'Rapidly increasing leg weakness',
      'Severe pain after major trauma, or pain with fever or unexplained weight loss',
    ],
    relatedService: {
      label: 'Back and neck pain care',
      href: '/services/back-neck-pain',
    },
    faqs: [
      {
        question: 'Do I need an X-ray or MRI before the first visit?',
        answer:
          'Not routinely. Dr. Jordan first reviews your history and examination findings. Imaging is considered when it may change the diagnosis or care plan, or when a referral is indicated.',
      },
      {
        question: 'Can I be seen for a new low back pain flare-up?',
        answer:
          'Yes, provided you are not experiencing emergency warning signs. The examination determines whether conservative care is appropriate and what level of activity makes sense.',
      },
      {
        question: 'How many visits will I need?',
        answer:
          'That depends on the cause, duration, examination findings, and your response. Dr. Jordan will discuss a starting plan and reassess it rather than promise a fixed result or timeline.',
      },
    ],
  },
  {
    slug: 'neck-pain',
    name: 'Neck Pain',
    shortName: 'Neck pain',
    seoTitle: 'Neck Pain Chiropractor in Lake City, SC',
    metaDescription:
      'Conservative chiropractic evaluation for neck pain, stiffness, restricted motion, and related tension at BioSpine in Lake City, SC.',
    summary:
      'Neck pain may follow an injury, build gradually with work or screen habits, or appear with no obvious trigger. The pattern and examination findings guide care.',
    overview: [
      'The neck has to support the head while allowing movement in several directions. Joint irritation, muscle guarding, prolonged positions, and previous injuries can produce similar symptoms even though they do not require the same treatment.',
      'A BioSpine visit looks at movement, strength, sensation, symptom behavior, and relevant orthopedic or neurological findings. Dr. Jordan explains what appears suitable for conservative care and what should be evaluated elsewhere.',
    ],
    symptoms: [
      'Pain or stiffness when turning the head',
      'Discomfort into the shoulder blade or upper back',
      'Tightness that builds during computer or phone use',
      'Headache associated with neck movement or tension',
      'Reduced motion while driving or sleeping',
    ],
    contributors: [
      'Prolonged desk, phone, or driving positions',
      'A sudden turn, impact, or lifting strain',
      'Sleeping-position changes',
      'Upper-back or shoulder mobility limitations',
      'Previous whiplash or recurring episodes',
    ],
    evaluation: [
      'History of onset, triggers, and any arm symptoms',
      'Neck and upper-back range-of-motion assessment',
      'Strength, reflex, and sensation checks when indicated',
      'Screening for signs that require medical referral',
    ],
    careApproach: [
      'Gentle mobilization or adjustment selected for the patient',
      'Soft-tissue treatment for related muscle guarding',
      'Ergonomic and activity guidance that fits daily routines',
      'Home movement with progress reviewed over time',
    ],
    urgentSigns: [
      'Neck pain with chest pain, trouble breathing, fainting, or severe dizziness',
      'New facial droop, speech difficulty, confusion, or one-sided weakness',
      'Progressive arm or hand weakness',
      'Severe pain after a major fall or collision',
    ],
    relatedService: {
      label: 'Back and neck pain care',
      href: '/services/back-neck-pain',
    },
    faqs: [
      {
        question: 'Will my neck be adjusted on the first visit?',
        answer:
          'Only if the examination indicates that it is appropriate and you consent. Dr. Jordan can discuss technique options and alternatives before treatment.',
      },
      {
        question: 'Can neck pain cause a headache?',
        answer:
          'Some headaches are associated with joints and muscles in the neck, but headache causes vary. New, severe, or unusual headaches need appropriate medical evaluation.',
      },
      {
        question: 'What if the pain travels into my arm?',
        answer:
          'Tell the office when scheduling and describe any numbness, tingling, or weakness. Those details help determine how promptly you should be evaluated and whether another provider is needed.',
      },
    ],
  },
  {
    slug: 'sciatica',
    name: 'Sciatica & Leg Pain',
    shortName: 'Sciatica',
    seoTitle: 'Sciatica Chiropractor in Lake City, SC',
    metaDescription:
      'Evaluation for sciatic-type leg pain, numbness, tingling, and low back symptoms at BioSpine Health and Wellness in Lake City, SC.',
    summary:
      'Sciatica describes pain or other symptoms along the sciatic nerve pathway. Because several conditions can mimic it, an examination matters before treatment begins.',
    overview: [
      'Sciatic-type symptoms may include pain, tingling, numbness, or weakness traveling from the lower back or buttock into the leg. Disc irritation is one possible source, but joints, muscles, and other conditions can create a similar pattern.',
      'The purpose of the first visit is to clarify the pattern, check neurological function when indicated, and decide whether a trial of conservative care is reasonable. Findings that suggest a more serious or progressive problem are referred promptly.',
    ],
    symptoms: [
      'Burning, aching, or sharp pain into one leg',
      'Tingling or numbness in the leg or foot',
      'Symptoms that change with sitting, bending, coughing, or walking',
      'Low back or buttock pain with leg symptoms',
      'A sense of weakness or reduced control in the foot or leg',
    ],
    contributors: [
      'Irritation of a lumbar nerve root',
      'Disc, joint, or age-related spinal changes',
      'Muscle or soft-tissue irritation that mimics nerve pain',
      'Recent lifting, prolonged sitting, or an activity change',
      'A previous low back injury or recurring flare-up',
    ],
    evaluation: [
      'Mapping where symptoms travel and what changes them',
      'Strength, reflex, and sensation testing when indicated',
      'Movement and orthopedic examination',
      'Referral or imaging recommendation when findings warrant it',
    ],
    careApproach: [
      'Conservative joint care selected for the examination findings',
      'Positions and movements intended to reduce irritation',
      'Graded return to normal activity',
      'Ongoing neurological checks when symptoms require them',
    ],
    urgentSigns: [
      'Loss of bowel or bladder control',
      'Numbness around the groin or saddle area',
      'Rapid or progressive leg weakness',
      'Symptoms in both legs with major balance or walking changes',
    ],
    relatedService: {
      label: 'Back and neck pain care',
      href: '/services/back-neck-pain',
    },
    faqs: [
      {
        question: 'Is every pain down the leg sciatica?',
        answer:
          'No. Hip, joint, muscle, vascular, and other problems can create leg pain. The symptom pattern and examination help narrow the possibilities.',
      },
      {
        question: 'Can chiropractic care help sciatic-type symptoms?',
        answer:
          'Some presentations respond to conservative care, while others require imaging, medication management, or referral. BioSpine first determines whether chiropractic care is a reasonable option for your findings.',
      },
      {
        question: 'Should I rest until the symptoms disappear?',
        answer:
          'Prolonged bed rest is usually not the goal, but the right amount and type of activity depends on the cause and severity. Your visit can provide more specific guidance.',
      },
    ],
  },
  {
    slug: 'headaches-and-migraines',
    name: 'Headaches & Migraines',
    shortName: 'Headaches and migraines',
    seoTitle: 'Headache & Migraine Condition Guide | Lake City, SC',
    metaDescription:
      'Evaluation of neck-related and tension-type headache contributors, with conservative chiropractic care when appropriate, at BioSpine in Lake City, SC.',
    summary:
      'Some headaches are influenced by neck joints, muscles, posture, or sustained positions. Migraines and other headache disorders may also require medical management.',
    overview: [
      'Headache is a broad symptom rather than one diagnosis. Tension-type and cervicogenic headaches can involve the neck and surrounding muscles, while migraine is a neurological disorder with different features and triggers.',
      'BioSpine evaluates musculoskeletal contributors and screens for warning signs. Conservative neck care may be part of a broader plan, but it is not presented as a cure for every headache or a replacement for necessary medical care.',
    ],
    symptoms: [
      'Pain beginning near the base of the skull or upper neck',
      'Headache that changes with neck movement or prolonged posture',
      'Tightness across the forehead, temples, neck, or shoulders',
      'Recurring headache with screen or desk work',
      'Migraine symptoms already diagnosed by a medical provider',
    ],
    contributors: [
      'Neck joint or muscle irritation',
      'Sustained screen, desk, or driving positions',
      'Stress, sleep disruption, hydration, or skipped meals',
      'A previous neck injury',
      'Neurological migraine triggers outside chiropractic scope',
    ],
    evaluation: [
      'Review of headache pattern, frequency, triggers, and associated symptoms',
      'Neck, upper-back, and shoulder movement assessment',
      'Screening for urgent or non-musculoskeletal causes',
      'Coordination or referral when another provider should be involved',
    ],
    careApproach: [
      'Conservative neck care when examination findings support it',
      'Soft-tissue treatment for associated tension',
      'Posture, workstation, and movement guidance',
      'Tracking frequency and function to judge whether care is helping',
    ],
    urgentSigns: [
      'A sudden, severe headache unlike your usual pattern',
      'Headache with confusion, fainting, seizure, fever, or stiff neck',
      'New weakness, numbness, speech trouble, or vision loss',
      'Headache after a significant head injury',
    ],
    relatedService: {
      label: 'Headache and migraine care',
      href: '/services/headache-migraine-care',
    },
    faqs: [
      {
        question: 'Does BioSpine treat every type of headache?',
        answer:
          'No. BioSpine addresses appropriate musculoskeletal contributors and refers or co-manages when the pattern suggests a different cause or requires medical treatment.',
      },
      {
        question: 'Can I continue migraine medication?',
        answer:
          'Do not stop or change prescribed medication without the clinician who manages it. Tell Dr. Jordan what you take so care can be coordinated safely.',
      },
      {
        question: 'How will we know whether neck care is helping?',
        answer:
          'Frequency, intensity, medication use, and the effect on work or daily activity can be tracked. If there is no meaningful change, the plan should be reconsidered.',
      },
    ],
  },
  {
    slug: 'sports-injuries',
    name: 'Sports Injuries',
    shortName: 'Sports injuries',
    seoTitle: 'Sports Injury Evaluation Guide | Lake City, SC',
    metaDescription:
      'Assessment and conservative care for sports-related joint, muscle, and overuse injuries at BioSpine Health and Wellness in Lake City, SC.',
    summary:
      'Sports injuries range from simple soreness to problems that need imaging or specialist care. A structured assessment helps determine a safe next step.',
    overview: [
      'An athletic injury can follow one clear event or develop gradually as training load outpaces recovery. Pain alone does not show which tissue is involved or whether it is safe to keep participating.',
      'BioSpine evaluates movement, strength, joint function, and the demands of your activity. Care is kept within chiropractic scope, with referral when fracture, major ligament injury, concussion, or another condition is suspected.',
    ],
    symptoms: [
      'Pain with running, lifting, throwing, or changing direction',
      'Joint stiffness that limits technique or range',
      'Recurring muscle tightness or overuse discomfort',
      'Back or neck pain associated with training',
      'Difficulty returning to normal activity after an injury',
    ],
    contributors: [
      'A sudden impact, twist, sprint, or lift',
      'A rapid change in training volume or intensity',
      'Limited joint motion or movement control',
      'Inadequate recovery between sessions',
      'Returning before an earlier injury has regained capacity',
    ],
    evaluation: [
      'History of the injury and sport-specific demands',
      'Movement, strength, balance, and joint assessment as appropriate',
      'Screening for injuries that require imaging or specialist referral',
      'A practical plan for activity modification and progression',
    ],
    careApproach: [
      'Joint and soft-tissue care for appropriate musculoskeletal findings',
      'Home movement or exercise guidance',
      'Graduated exposure to the activity that caused symptoms',
      'Referral when diagnosis or rehabilitation needs fall outside scope',
    ],
    urgentSigns: [
      'Suspected concussion, loss of consciousness, or worsening confusion',
      'Obvious deformity or inability to bear weight after trauma',
      'Rapid swelling, loss of sensation, or a cold/pale limb',
      'Severe neck or back pain with neurological symptoms',
    ],
    relatedService: {
      label: 'Sports injury care',
      href: '/services/sports-injury-care',
    },
    faqs: [
      {
        question: 'Do you only treat competitive athletes?',
        answer:
          'No. BioSpine sees student athletes, recreational athletes, active adults, and people returning to exercise after time away.',
      },
      {
        question: 'Can you clear an athlete to return to play?',
        answer:
          'Return-to-play requirements depend on the injury, sport, school, and governing rules. BioSpine can assess musculoskeletal progress and coordinate referral when formal clearance requires another clinician.',
      },
      {
        question: 'Should I train through pain?',
        answer:
          'That depends on the injury and symptom behavior. Stop and seek prompt evaluation for significant trauma, neurological symptoms, or worsening loss of function.',
      },
    ],
  },
  {
    slug: 'arthritis-joint-pain',
    name: 'Arthritis & Joint Pain',
    shortName: 'Arthritis and joint pain',
    seoTitle: 'Arthritis & Joint Pain Guide | Lake City, SC',
    metaDescription:
      'Gentle, conservative chiropractic care intended to support mobility and manage arthritis-related stiffness and joint pain in Lake City, SC.',
    summary:
      'Arthritis changes are common and do not always match symptom severity. Care focuses on comfort, mobility, and function rather than claiming to reverse arthritis.',
    overview: [
      'Osteoarthritis can affect the spine and other joints as cartilage and surrounding tissues change over time. Symptoms may vary from day to day and can be influenced by activity, sleep, strength, and other health conditions.',
      'BioSpine adapts examination and technique to the individual. The aim is to support useful movement and daily function while recognizing when medical evaluation, physical therapy, medication management, or another service should be part of the plan.',
    ],
    symptoms: [
      'Stiffness after rest or in the morning',
      'Joint discomfort with certain activities',
      'Reduced range of motion',
      'Muscle guarding around an affected area',
      'Difficulty with walking, reaching, or routine tasks',
    ],
    contributors: [
      'Age-related joint changes',
      'Previous injury or surgery',
      'Periods of reduced activity',
      'Repetitive physical demands',
      'Inflammatory or other medical conditions requiring co-management',
    ],
    evaluation: [
      'Review of diagnoses, medications, imaging, and health history',
      'Comfortable movement and functional assessment',
      'Screening for active inflammation or findings that change care',
      'Selection of technique based on tolerance and goals',
    ],
    careApproach: [
      'Gentle mobilization or low-force chiropractic techniques when appropriate',
      'Movement strategies for everyday stiffness',
      'Activity pacing and home guidance',
      'Coordination with medical care rather than replacement of it',
    ],
    urgentSigns: [
      'A hot, red, rapidly swollen joint',
      'Joint pain with fever or sudden illness',
      'Inability to bear weight after a fall',
      'New neurological symptoms or sudden loss of function',
    ],
    relatedService: {
      label: 'Arthritis relief service',
      href: '/services/arthritis-relief',
    },
    faqs: [
      {
        question: 'Can chiropractic care remove arthritis?',
        answer:
          'No. Arthritis-related structural changes are not reversed by an adjustment. Conservative care may help some people manage stiffness, movement, and related muscle tension.',
      },
      {
        question: 'Are adjustments too forceful for older adults?',
        answer:
          'Technique can be modified. Dr. Jordan considers bone health, medications, previous surgery, comfort, and examination findings before recommending any treatment.',
      },
      {
        question: 'Should I stop arthritis medication before care?',
        answer:
          'No. Do not stop or change prescribed medication without the clinician who manages it. Bring an up-to-date medication list to your visit.',
      },
    ],
  },
  {
    slug: 'whiplash',
    name: 'Whiplash & Auto Injuries',
    shortName: 'Whiplash',
    seoTitle: 'Whiplash Chiropractor in Lake City, SC',
    metaDescription:
      'Evaluation and conservative care for whiplash, neck stiffness, headaches, and back pain after a collision at BioSpine in Lake City, SC.',
    summary:
      'Whiplash describes an acceleration-deceleration injury that may affect the neck and nearby tissues. Symptoms can evolve during the first days after a collision.',
    overview: [
      'A collision can produce neck pain, back pain, headache, shoulder discomfort, or reduced movement even when there is no visible injury. The severity of vehicle damage does not reliably determine the severity of symptoms.',
      'BioSpine documents the history and examination findings, screens for signs that need emergency or medical evaluation, and provides conservative care when appropriate. Clinical documentation describes care; it does not promise an insurance or legal outcome.',
    ],
    symptoms: [
      'Neck stiffness or pain after a collision',
      'Headache beginning after the event',
      'Upper-back, shoulder, or low-back discomfort',
      'Pain with turning, driving, or sleeping',
      'Symptoms that appear or change over the next few days',
    ],
    contributors: [
      'Rapid movement of the head and trunk during impact',
      'Muscle and ligament strain',
      'Irritated spinal joints',
      'Bracing during the collision',
      'Aggravation of a previous condition',
    ],
    evaluation: [
      'Collision and symptom timeline',
      'Movement, orthopedic, and neurological examination',
      'Review of emergency records or imaging already obtained',
      'Referral for imaging or another provider when indicated',
    ],
    careApproach: [
      'Gentle, progressive care based on irritability and findings',
      'Movement guidance for daily activity',
      'Regular reassessment of comfort and function',
      'Clear clinical notes and referral coordination when needed',
    ],
    urgentSigns: [
      'Loss of consciousness, worsening confusion, or repeated vomiting',
      'New weakness, numbness, trouble speaking, or severe dizziness',
      'Severe midline neck pain after significant trauma',
      'Chest pain, trouble breathing, or other emergency symptoms',
    ],
    relatedService: {
      label: 'Auto accident injury care',
      href: '/services/auto-accident-injury',
    },
    faqs: [
      {
        question: 'How soon should I be evaluated after a collision?',
        answer:
          'Emergency symptoms require immediate care. For non-emergency pain, stiffness, or reduced movement, contact the office promptly so the timeline and findings can be documented.',
      },
      {
        question: 'Do I need an attorney before I make an appointment?',
        answer:
          'No. Health care and legal representation are separate decisions. BioSpine provides clinical care and documentation, not legal advice.',
      },
      {
        question: 'What should I bring?',
        answer:
          'Bring identification, insurance information, relevant claim details, and any discharge instructions or imaging reports you already have.',
      },
    ],
  },
  {
    slug: 'postural-problems',
    name: 'Posture & Mobility Problems',
    shortName: 'Posture and mobility problems',
    seoTitle: 'Posture & Mobility Care in Lake City, SC',
    metaDescription:
      'Evaluation and conservative care for posture-related neck, back, and mobility concerns at BioSpine Health and Wellness in Lake City, SC.',
    summary:
      'Posture is variable, and no single position is automatically harmful. Symptoms often relate to how long a position is held, movement options, and overall capacity.',
    overview: [
      'People often notice neck, shoulder, or back tension after long periods at a desk, in a vehicle, or using a phone. The issue is not always a “bad” posture; limited movement variety, workstation demands, stress, and reduced conditioning can all contribute.',
      'BioSpine looks at the positions and tasks that matter to you. The plan may include joint care, movement practice, and realistic changes to the workday rather than trying to hold one rigid “perfect” posture.',
    ],
    symptoms: [
      'Neck or upper-back tension that builds during the day',
      'Stiffness after desk work, driving, or phone use',
      'Discomfort between the shoulder blades',
      'Frequent need to stretch or change position',
      'Reduced comfort with reaching, turning, or prolonged sitting',
    ],
    contributors: [
      'Long periods without changing position',
      'Workstation or task demands',
      'Limited thoracic, shoulder, or hip mobility',
      'Reduced strength or endurance for repeated tasks',
      'Stress, sleep, and workload factors',
    ],
    evaluation: [
      'Discussion of work, driving, sleep, and activity demands',
      'Observation of comfortable movement rather than appearance alone',
      'Joint mobility and relevant strength assessment',
      'Identification of small changes that are realistic to maintain',
    ],
    careApproach: [
      'Joint care when restricted movement is relevant',
      'Short movement breaks and position changes',
      'Home exercises selected for specific limitations',
      'Workstation suggestions based on the task and available equipment',
    ],
    urgentSigns: [
      'New weakness, numbness, or loss of coordination',
      'Severe or rapidly worsening pain',
      'Symptoms with chest pain, shortness of breath, or fainting',
      'Pain after significant trauma',
    ],
    relatedService: {
      label: 'Chiropractic adjustments',
      href: '/services/chiropractic-adjustments',
    },
    faqs: [
      {
        question: 'Is there one correct posture?',
        answer:
          'No single position is ideal for every body or task. Comfort usually improves by having several usable positions and changing them before symptoms build.',
      },
      {
        question: 'Do I need a standing desk?',
        answer:
          'Not necessarily. A standing desk can add variety, but setup, task demands, and how often you change positions matter more than one piece of equipment.',
      },
      {
        question: 'Can an adjustment fix posture permanently?',
        answer:
          'An adjustment may improve comfort or motion for some people, but lasting change usually also involves movement habits, strength, task setup, and regular activity.',
      },
    ],
  },
];

export function getConditionGuide(slug: string) {
  return conditionGuides.find((condition) => condition.slug === slug);
}

export const conditionLinkMap: Record<string, string> = {
  'Low back pain': '/conditions/low-back-pain',
  'Neck pain': '/conditions/neck-pain',
  Sciatica: '/conditions/sciatica',
  Headaches: '/conditions/headaches-and-migraines',
  Migraines: '/conditions/headaches-and-migraines',
  'Sports injuries': '/conditions/sports-injuries',
  Arthritis: '/conditions/arthritis-joint-pain',
  'Joint pain': '/conditions/arthritis-joint-pain',
  Whiplash: '/conditions/whiplash',
  'Plantar fasciitis': '/services/shockwave-therapy',
  'Tennis elbow': '/services/shockwave-therapy',
  'Rotator cuff pain': '/services/shockwave-therapy',
  'Achilles tendinitis': '/services/shockwave-therapy',
  'Postural problems': '/conditions/postural-problems',
  'Muscle tension': '/services/back-neck-pain',
  'Work-related injuries': '/services/back-neck-pain',
};
