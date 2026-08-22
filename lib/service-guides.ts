export type ServiceGuide = {
  slug: string;
  name: string;
  eyebrow: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  introduction: string[];
  commonReasons: string[];
  visitSteps: { title: string; text: string }[];
  careMayInclude: string[];
  importantNotes: string[];
  indications: string[];
  relatedConditions: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
};

export const serviceGuides: ServiceGuide[] = [
  {
    slug: 'chiropractic-adjustments',
    name: 'Chiropractic Adjustments',
    eyebrow: 'Chiropractic care',
    seoTitle: 'Chiropractic Adjustments in Lake City, SC',
    metaDescription:
      'Hands-on and lower-force chiropractic adjustments selected after an examination by Dr. Chucky S. Jordan at BioSpine in Lake City, SC.',
    headline: 'Chiropractic adjustments selected for you—not a routine applied to everyone',
    introduction: [
      'A chiropractic adjustment is a hands-on technique intended to improve motion in a joint that is not moving comfortably or normally. Technique, position, and force should vary with the patient, the examination findings, and personal preference.',
      'At BioSpine, Dr. Jordan first listens to what is limiting you, performs an examination, and explains whether an adjustment is a reasonable part of care. Treatment is not performed simply because you booked a chiropractic visit.',
    ],
    commonReasons: [
      'Back or neck stiffness',
      'Restricted movement during work or daily activity',
      'Joint discomfort after an uncomplicated strain',
      'Muscle tension associated with limited joint motion',
      'A desire for conservative musculoskeletal care',
      'Recurring symptoms that need a fresh assessment',
    ],
    visitSteps: [
      {
        title: 'History and examination',
        text: 'Your symptoms, goals, health history, movement, and relevant orthopedic or neurological findings guide the decision.',
      },
      {
        title: 'Explanation and consent',
        text: 'Dr. Jordan explains the findings, expected benefits, reasonable alternatives, and relevant risks before treatment.',
      },
      {
        title: 'Measured follow-through',
        text: 'Comfort, motion, and function are reassessed. A plan is changed or referral is considered when progress is not meaningful.',
      },
    ],
    careMayInclude: [
      'Manual or lower-force adjustment techniques',
      'Joint mobilization',
      'Soft-tissue work for associated muscle tension',
      'Home movement or exercise guidance',
      'Workstation and activity suggestions',
      'Referral for imaging or another provider when indicated',
    ],
    importantNotes: [
      'All health care has potential benefits and risks; appropriateness is determined individually.',
      'An adjustment does not replace emergency, medical, or surgical care when those are needed.',
      'Results and timelines vary with the condition, duration, health history, and response to care.',
    ],
    indications: ['Back stiffness', 'Neck stiffness', 'Restricted joint motion', 'Musculoskeletal pain'],
    relatedConditions: [
      { label: 'Low back pain', href: '/conditions/low-back-pain' },
      { label: 'Neck pain', href: '/conditions/neck-pain' },
      { label: 'Posture and mobility', href: '/conditions/postural-problems' },
    ],
    faqs: [
      {
        question: 'Will I be adjusted at the first appointment?',
        answer:
          'Treatment may begin at the first visit when the examination shows it is appropriate and you consent. If more evaluation or referral is needed, Dr. Jordan will explain why.',
      },
      {
        question: 'Do chiropractic adjustments have to make a popping sound?',
        answer:
          'No. The sound sometimes heard during an adjustment is not the goal and does not determine whether treatment was effective. Lower-force options are also available.',
      },
      {
        question: 'How often will I need care?',
        answer:
          'Frequency depends on your findings, goals, and response. BioSpine discusses a starting plan and reassesses it rather than promising a preset number of visits.',
      },
      {
        question: 'Can I ask for a gentler technique?',
        answer:
          'Yes. Tell Dr. Jordan about prior experiences, concerns, and preferences. Technique should be selected with your comfort and clinical needs in mind.',
      },
    ],
  },
  {
    slug: 'headache-migraine-care',
    name: 'Headache & Migraine Care',
    eyebrow: 'Headache care',
    seoTitle: 'Headache & Migraine Care in Lake City, SC',
    metaDescription:
      'Conservative care for appropriate neck-related and tension-type headache contributors at BioSpine Health and Wellness in Lake City, SC.',
    headline: 'When a headache travels with neck pain or stiffness',
    introduction: [
      'Some recurring headaches are influenced by the joints and muscles of the neck, sustained positions, or movement. Migraine is a neurological disorder and may require care from a primary-care clinician or specialist, even when neck symptoms occur at the same time.',
      'BioSpine evaluates musculoskeletal contributors, checks for patterns that need medical attention, and explains where conservative chiropractic care may fit. The goal is appropriate co-management—not a claim that every headache has a spinal cause.',
    ],
    commonReasons: [
      'Headache beginning near the base of the skull',
      'Headache associated with neck stiffness',
      'Tension that builds during screen or desk work',
      'Reduced neck motion with headache',
      'A diagnosed migraine disorder with an additional neck-pain component',
      'A need for conservative care alongside medical management',
    ],
    visitSteps: [
      {
        title: 'Clarify the pattern',
        text: 'Frequency, location, triggers, associated symptoms, medication use, and changes from your usual pattern are reviewed.',
      },
      {
        title: 'Screen and examine',
        text: 'Dr. Jordan evaluates relevant neck and upper-back findings and looks for reasons to refer or coordinate medical care.',
      },
      {
        title: 'Track meaningful change',
        text: 'Headache days, intensity, medication use, and effect on daily activity can help show whether the plan is useful.',
      },
    ],
    careMayInclude: [
      'Conservative neck and upper-back joint care when appropriate',
      'Soft-tissue treatment for associated muscle tension',
      'Posture and workstation guidance',
      'Simple movement and recovery strategies',
      'A headache log to track patterns and response',
      'Referral or coordination with a medical clinician',
    ],
    importantNotes: [
      'A sudden, severe, or unusual headache can require emergency evaluation.',
      'Do not stop prescribed migraine or headache medication without the clinician who manages it.',
      'Chiropractic care may address appropriate musculoskeletal contributors; it is not a universal headache cure.',
    ],
    indications: ['Cervicogenic headache', 'Tension-type headache', 'Neck pain associated with headache'],
    relatedConditions: [
      { label: 'Headaches and migraines', href: '/conditions/headaches-and-migraines' },
      { label: 'Neck pain', href: '/conditions/neck-pain' },
      { label: 'Posture and mobility', href: '/conditions/postural-problems' },
    ],
    faqs: [
      {
        question: 'Can chiropractic care cure migraine?',
        answer:
          'BioSpine does not promise a cure for migraine. Conservative care may be considered for relevant neck and muscle findings while migraine itself is appropriately managed with a medical clinician.',
      },
      {
        question: 'Which headaches are more likely to involve the neck?',
        answer:
          'Headaches linked to neck movement, sustained posture, restricted motion, or pain beginning near the upper neck may have a musculoskeletal component. An examination is still needed.',
      },
      {
        question: 'When is a headache an emergency?',
        answer:
          'Seek urgent help for a sudden severe headache, or headache with weakness, confusion, fainting, seizure, fever and stiff neck, major trauma, or new speech or vision problems.',
      },
      {
        question: 'Can BioSpine work alongside my doctor?',
        answer:
          'Yes. Bring relevant diagnoses, imaging, and an up-to-date medication list. BioSpine can keep care focused on appropriate musculoskeletal findings.',
      },
    ],
  },
  {
    slug: 'sports-injury-care',
    name: 'Sports Injury Care',
    eyebrow: 'Active patient care',
    seoTitle: 'Sports Injury Chiropractor in Lake City, SC',
    metaDescription:
      'Evaluation and conservative chiropractic care for sports-related joint, muscle, and overuse injuries in Lake City and the Pee Dee region.',
    headline: 'Find out what you can keep doing—and what needs time off',
    introduction: [
      'Sports-related pain may follow one event or develop as training load, technique, equipment, or recovery changes. The first priority is identifying whether the problem is suitable for conservative care or needs imaging, formal rehabilitation, or specialist evaluation.',
      'BioSpine works with student athletes, recreational athletes, active adults, and people returning to exercise. Care is matched to the examination findings and the real demands of the activity you want to resume.',
    ],
    commonReasons: [
      'Back or neck pain during training',
      'Joint stiffness that changes movement or technique',
      'Uncomplicated muscle or tendon overuse symptoms',
      'Pain during running, lifting, throwing, or field sports',
      'Difficulty rebuilding activity after an injury',
      'A recurring issue that returns when training increases',
    ],
    visitSteps: [
      {
        title: 'Understand the demand',
        text: 'The visit begins with the injury timeline, training changes, position or event, and the movement you need to regain.',
      },
      {
        title: 'Assess and triage',
        text: 'Movement, strength, joint function, and relevant orthopedic findings help determine care, activity modification, or referral.',
      },
      {
        title: 'Progress deliberately',
        text: 'Care and activity are advanced according to symptoms and function instead of relying only on a date or temporary pain relief.',
      },
    ],
    careMayInclude: [
      'Joint mobilization or chiropractic adjustments',
      'Soft-tissue care for appropriate muscle or tendon findings',
      'Home movement and exercise guidance',
      'Practical training-load or activity modifications',
      'Shockwave therapy for selected chronic tendon conditions',
      'Referral for imaging, formal rehabilitation, or specialist care',
    ],
    importantNotes: [
      'Suspected concussion, fracture, major ligament injury, or neurological change requires appropriate referral.',
      'Pain relief alone does not always mean an athlete is ready for full competition.',
      'Return-to-play rules can vary by injury, school, league, and required clinician credentials.',
    ],
    indications: ['Sports-related back pain', 'Joint stiffness', 'Overuse injury', 'Musculoskeletal sports injury'],
    relatedConditions: [
      { label: 'Sports injuries', href: '/conditions/sports-injuries' },
      { label: 'Low back pain', href: '/conditions/low-back-pain' },
      { label: 'Shockwave therapy', href: '/services/shockwave-therapy' },
    ],
    faqs: [
      {
        question: 'Do you treat high school athletes?',
        answer:
          'BioSpine sees active patients of different ages. A parent or legal guardian should contact the office about consent and appointment requirements for a minor.',
      },
      {
        question: 'Can I keep training during care?',
        answer:
          'That depends on the injury, examination, and how symptoms respond. Some people can train with modifications; others need a temporary pause or referral.',
      },
      {
        question: 'Is shockwave therapy used for sports injuries?',
        answer:
          'It may be considered for selected chronic tendon problems such as plantar fasciitis, Achilles tendinopathy, or tennis elbow after screening for contraindications.',
      },
      {
        question: 'What should I bring to the first visit?',
        answer:
          'Bring relevant imaging or reports, a medication list, and information about when symptoms occur. Athletic shoes or clothing that allows comfortable movement can be useful.',
      },
    ],
  },
  {
    slug: 'arthritis-relief',
    name: 'Arthritis Relief',
    eyebrow: 'Mobility-focused care',
    seoTitle: 'Arthritis & Joint Pain Care in Lake City, SC',
    metaDescription:
      'Gentle chiropractic care for arthritis-related stiffness, selected with bone health, medications, and previous procedures in mind.',
    headline: 'Arthritis cannot be adjusted away. Stiff joints can still be worked with.',
    introduction: [
      'Arthritis is a group of conditions, not one uniform problem. Osteoarthritis, inflammatory arthritis, previous injuries, bone health, medications, and overall health can all affect which techniques are suitable.',
      'BioSpine does not claim to reverse arthritis. The purpose of conservative care is to support useful movement, reduce related muscle guarding for some patients, and help people stay as active as their condition safely allows.',
    ],
    commonReasons: [
      'Stiffness after rest or in the morning',
      'Spinal or joint discomfort with ordinary activity',
      'Reduced range of motion',
      'Muscle tension around a stiff area',
      'Difficulty keeping up with walking or household tasks',
      'A desire for gentle conservative options alongside medical care',
    ],
    visitSteps: [
      {
        title: 'Review the whole picture',
        text: 'Diagnoses, imaging, medications, bone health, previous procedures, and current medical care are considered before treatment.',
      },
      {
        title: 'Choose a tolerable approach',
        text: 'Movement and function are assessed, and technique is adapted to the patient rather than using the same force for everyone.',
      },
      {
        title: 'Focus on daily function',
        text: 'Progress is judged by useful changes—such as walking, reaching, sleeping, or completing daily tasks—not by promises to alter imaging findings.',
      },
    ],
    careMayInclude: [
      'Gentle joint mobilization',
      'Lower-force chiropractic techniques when appropriate',
      'Soft-tissue care for related muscle tension',
      'Simple mobility and home-movement guidance',
      'Activity pacing suggestions',
      'Coordination with medical or rehabilitation providers',
    ],
    importantNotes: [
      'A hot, red, rapidly swollen joint or joint pain with fever needs prompt medical evaluation.',
      'Prescribed arthritis medication should not be stopped or changed without the clinician who manages it.',
      'Technique may need to change with osteoporosis, inflammatory disease, anticoagulant use, or previous surgery.',
    ],
    indications: ['Osteoarthritis-related stiffness', 'Joint stiffness', 'Reduced mobility', 'Muscle tension around arthritic joints'],
    relatedConditions: [
      { label: 'Arthritis and joint pain', href: '/conditions/arthritis-joint-pain' },
      { label: 'Low back pain', href: '/conditions/low-back-pain' },
      { label: 'Neck pain', href: '/conditions/neck-pain' },
    ],
    faqs: [
      {
        question: 'Can an adjustment reverse arthritis?',
        answer:
          'No. Chiropractic care does not reverse arthritis-related structural changes. It may help some people manage stiffness, movement, and related muscle tension.',
      },
      {
        question: 'Is chiropractic care appropriate with osteoporosis?',
        answer:
          'Bone health changes treatment decisions. Tell Dr. Jordan about osteoporosis, fractures, and medications. Lower-force care or referral may be more appropriate.',
      },
      {
        question: 'Can I receive care during an inflammatory flare?',
        answer:
          'Active inflammation may change or postpone manual care. Contact the clinician managing the condition and tell BioSpine about current swelling, warmth, fever, or medication changes.',
      },
      {
        question: 'Is arthritis care covered by insurance?',
        answer:
          'Coverage depends on the plan, diagnosis, and service. Call the office before the visit so staff can help you confirm benefits and expected payment.',
      },
    ],
  },
];

export function getServiceGuide(slug: string) {
  return serviceGuides.find((service) => service.slug === slug);
}
