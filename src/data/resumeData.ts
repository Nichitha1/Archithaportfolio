export interface DeliverableItem {
  id: number;
  code: string;
  title: string;
  category: 'Role Engineering' | 'Access & FFID' | 'GRC & Audit' | 'Operations & Automation';
  summary: string;
  tcodes: string[];
  landscape: string;
}

export interface ArchitectureDomain {
  id: string;
  index: string;
  name: string;
  shortLabel: string;
  headline: string;
  overview: string;
  tcodes: { code: string; purpose: string }[];
  workflowSteps: { step: string; detail: string }[];
  auditOutcome: string;
  environments: string[];
  relatedDeliverables: string[];
}

export interface TraceRow {
  authObject: string;
  field: string;
  value: string;
  rc: 'RC=0' | 'RC=4';
  status: 'Validated' | 'Remediated';
  note: string;
}

export interface CertificationItem {
  code: string;
  title: string;
  issuer: string;
  focus: string;
}

export const RESUME_PDF_PATH = '/assets/aistudio/Architha_Dameruppula_Resume__1__33420739.pdf';

export const PROFILE = {
  name: 'Architha Dameruppula',
  role: 'SAP GRC Consultant',
  company: 'Accenture',
  designation: 'Associate Software Engineer - SAP',
  tenure: 'Aug 2023 – Present',
  experienceYears: '3+ Years',
  location: 'Hyderabad, India',
  phone: '+91 9014088195',
  email: 'darchitha123ss@gmail.com',
  about:
    'SAP Security & GRC Consultant with 3+ years of hands-on experience specializing in user access management, role engineering, and risk mitigation across complex SAP landscapes. Proven expertise in managing the full user lifecycle—including user creation, access removals, and Firefighter ID (FFID) creation and assignment. Proficient in designing and modifying Master, Derived, and Single roles, incorporating SAP Fiori apps and OData services, driving end-to-end role deployment from Dev to Prod, managing cutover IDs, handling OSS connections, and resolving ServiceNow tickets within strict SLA parameters.',
};

export const KEY_METRICS = [
  {
    value: '3+ Years',
    label: 'SAP Security & GRC Experience',
    detail: 'Accenture · Aug 2023 to Present',
  },
  {
    value: '250+ Roles',
    label: 'SAP Roles Designed & Modified',
    detail: 'Master, Derived, Single, Fiori & OData',
  },
  {
    value: 'DEV · QAS · PRD',
    label: 'Full-Landscape Governance',
    detail: 'Transports, Cutover IDs & OSS Connections',
  },
  {
    value: 'C_SEC_2405 · C_AIG_2604',
    label: 'Dual SAP Certifications',
    detail: 'Security Administrator & Generative AI Developer',
  },
];

export const TRACE_PREVIEW_ROWS: TraceRow[] = [
  {
    authObject: 'S_TCODE',
    field: 'TCD',
    value: 'PFCG / SU01',
    rc: 'RC=0',
    status: 'Validated',
    note: 'Transaction execution verified in QAS UAT',
  },
  {
    authObject: 'S_TABU_DIS',
    field: 'ACTVT / DICBERCLS',
    value: '03 / SS',
    rc: 'RC=4',
    status: 'Remediated',
    note: 'Missing table auth identified via SU53 & STAUTHTRACE',
  },
  {
    authObject: 'S_SERVICE',
    field: 'SRV_NAME',
    value: 'ZFIORI_ODATA_SRV',
    rc: 'RC=0',
    status: 'Validated',
    note: 'SAP Fiori tile & OData hash mapped in role menu',
  },
  {
    authObject: 'S_USER_GRP',
    field: 'CLASS / ACTVT',
    value: 'SUPER / 01, 02',
    rc: 'RC=0',
    status: 'Validated',
    note: 'Org-level restriction & user group control enforced',
  },
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    id: 1,
    code: 'OPS-01',
    title: 'Multi-Landscape SAP Security Support',
    category: 'Operations & Automation',
    summary:
      'Provided SAP Security support across Development, Quality, and Production environments handling end-to-end user access and authorization requirements.',
    tcodes: ['DEV', 'QAS', 'PRD', 'SU01'],
    landscape: 'DEV / QAS / PRD',
  },
  {
    id: 2,
    code: 'IAM-02',
    title: 'Full-Lifecycle User Access Operations',
    category: 'Access & FFID',
    summary:
      'Executed user creations, precise access removals, password resets, account lock/unlocking, role/profile assignments, mass user administration, user/role-level analysis, and change documents.',
    tcodes: ['SU01', 'SU10', 'SUIM', 'PFCG'],
    landscape: 'Enterprise User Lifecycle',
  },
  {
    id: 3,
    code: 'TRC-03',
    title: 'Authorization Troubleshooting & Trace Analysis',
    category: 'Role Engineering',
    summary:
      'Troubleshot user and role-level authorization issues using SU53, ST01, and STAUTHTRACE to identify missing authorization objects and validate access.',
    tcodes: ['SU53', 'ST01', 'STAUTHTRACE'],
    landscape: 'Diagnostics & Trace',
  },
  {
    id: 4,
    code: 'ROL-04',
    title: 'Complex SAP Role Engineering (250+ Roles)',
    category: 'Role Engineering',
    summary:
      'Designed, built, and modified 250+ SAP roles including Master, Derived, and Single roles by integrating custom T-Codes, SAP Fiori applications, and OData services with org-level restrictions.',
    tcodes: ['PFCG', 'Fiori', 'OData', 'Org Levels'],
    landscape: 'Master / Derived / Single',
  },
  {
    id: 5,
    code: 'DEP-05',
    title: 'End-to-End Role Deployments & Cutover',
    category: 'Role Engineering',
    summary:
      'Led the technical lifecycle of role deployment, orchestrating secure transport migrations from Development to Production while managing cutover IDs and client test IDs.',
    tcodes: ['STMS', 'SE09', 'Cutover IDs', 'OSS'],
    landscape: 'DEV to PRD Migration',
  },
  {
    id: 6,
    code: 'PAM-06',
    title: 'Firefighter ID (FFID) & PAM Log Governance',
    category: 'Access & FFID',
    summary:
      'Performed FFID access assignments and maintenance based on approved requests, maintained FFID owners and controllers in backend, and extracted/reviewed PAM logs for audit compliance.',
    tcodes: ['FFID', 'PAM Logs', 'GRC EAM'],
    landscape: 'Emergency Access',
  },
  {
    id: 7,
    code: 'SU24-07',
    title: 'SU24 Authorization Check Maintenance',
    category: 'Role Engineering',
    summary:
      'Analyzed requirements, reviewed authorization objects, and maintained appropriate check indicators for SAP transaction codes to support accurate role generation and authorization control.',
    tcodes: ['SU24', 'SU25', 'PFCG'],
    landscape: 'Check Indicator Control',
  },
  {
    id: 8,
    code: 'UAT-08',
    title: 'Cross-Functional Collaboration & UAT',
    category: 'Operations & Automation',
    summary:
      'Partnered closely with technical and functional teams to capture granular role prerequisites and streamline collaborative User Acceptance Testing (UAT).',
    tcodes: ['UAT', 'Test IDs', 'Functional Specs'],
    landscape: 'QAS / Client Sign-Off',
  },
  {
    id: 9,
    code: 'SLA-09',
    title: 'ServiceNow SLA & Ticket Resolution',
    category: 'Operations & Automation',
    summary:
      'Maintained high performance metrics utilizing ServiceNow for everyday ticket workflows, troubleshooting access anomalies, and resolving security bottlenecks within strict SLA deadlines.',
    tcodes: ['ServiceNow', 'SLA', 'Incident Ops'],
    landscape: 'ITSM Security Queue',
  },
  {
    id: 10,
    code: 'IAG-10',
    title: 'SOD Access Risk Validation in SAP IAG',
    category: 'GRC & Audit',
    summary:
      'Performed SoD access risk validation in SAP IAG by running Repository synchronization and user access analysis before access assignments/role modifications; executed governance jobs for risk reviews.',
    tcodes: ['SAP IAG', 'SoD Risk', 'Repo Sync'],
    landscape: 'Cloud Access Governance',
  },
  {
    id: 11,
    code: 'SYS-11',
    title: 'SAP Printer Configuration & SNOTE Implementation',
    category: 'Operations & Automation',
    summary:
      'Handled SAP Printer configuration and SAP Note (SNOTE) implementation to support system administration and resolve technical issues across landscapes.',
    tcodes: ['SNOTE', 'SPAD', 'OSS'],
    landscape: 'System Administration',
  },
  {
    id: 12,
    code: 'BOT-12',
    title: 'BOT Automation for Access Deprovisioning',
    category: 'Access & FFID',
    summary:
      'Provided SAP Security process knowledge and functional requirements to BOT Automation teams for developing automated workflows for SAP access removals and inactive user deprovisioning.',
    tcodes: ['BOT Workflows', 'SU01', 'SU10'],
    landscape: 'Automated Lifecycle',
  },
  {
    id: 13,
    code: 'AUD-13',
    title: 'Periodic Master Data & Ownership Reviews',
    category: 'GRC & Audit',
    summary:
      'Performed periodic master data reviews of SAP role owners and PAM approvers to validate ownership and approval details in support of audit requirements.',
    tcodes: ['Role Owners', 'PAM Approvers', 'Audit'],
    landscape: 'Compliance & Audit',
  },
];

export const ARCHITECTURE_DOMAINS: ArchitectureDomain[] = [
  {
    id: 'role-engineering',
    index: '01',
    name: 'Role Design, Fiori & OData',
    shortLabel: 'Role Design',
    headline: 'Master, Derived & Single Role Architecture (250+ Roles)',
    overview:
      'Architected scalable SAP role hierarchies uniting classic ABAP transactions with SAP Fiori launchpad catalogs, groups, and OData services while enforcing organizational-level restrictions and SU24 check indicators.',
    tcodes: [
      { code: 'PFCG', purpose: 'Role maintenance, menu integration, profile generation' },
      { code: 'SU24', purpose: 'Check indicator & authorization object proposal maintenance' },
      { code: 'Fiori / OData', purpose: 'Catalog/service authorization binding via S_SERVICE' },
      { code: 'STMS', purpose: 'Controlled transport migration from DEV to QAS and PRD' },
    ],
    workflowSteps: [
      {
        step: 'Requirement Capture & SU24 Alignment',
        detail: 'Partner with functional teams to map custom T-Codes, Fiori apps, and OData services; validate SU24 check indicators prior to build.',
      },
      {
        step: 'Master & Derived Org-Level Build',
        detail: 'Construct Master roles with clean authorization values and derive company-code/plant variants with strict org-level restrictions.',
      },
      {
        step: 'UAT Validation & Cutover Deployment',
        detail: 'Provision dedicated test IDs for UAT sign-off, manage cutover IDs, and orchestrate transport movement from DEV to PRD.',
      },
    ],
    auditOutcome: 'Eliminates over-privileged authorizations and ensures consistent role behavior across DEV, QAS, and PRD.',
    environments: ['DEV', 'QAS', 'PRD'],
    relatedDeliverables: ['ROL-04', 'DEP-05', 'SU24-07', 'UAT-08'],
  },
  {
    id: 'auth-diagnostics',
    index: '02',
    name: 'Authorization Trace & Diagnostics',
    shortLabel: 'Trace & SU53',
    headline: 'Rapid Access Anomaly Diagnosis with SU53, ST01 & STAUTHTRACE',
    overview:
      'Isolates missing authorization objects, field values, and OData service failures without granting broad wildcard access—maintaining least-privilege integrity under ServiceNow SLA timelines.',
    tcodes: [
      { code: 'SU53', purpose: 'Immediate last-failed authorization check buffer inspection' },
      { code: 'ST01', purpose: 'Kernel-level system trace for complex multi-step failures' },
      { code: 'STAUTHTRACE', purpose: 'Cross-server distributed authorization trace evaluation' },
      { code: 'SUIM', purpose: 'User/role comparison and change document forensics' },
    ],
    workflowSteps: [
      {
        step: 'Capture Failed Authorization Buffer',
        detail: 'Analyze SU53 dumps or activate targeted ST01 / STAUTHTRACE sessions during user reproduction.',
      },
      {
        step: 'Object & Field Root-Cause Isolation',
        detail: 'Identify exact missing authorization objects and field values while checking against SoD risk boundaries.',
      },
      {
        step: 'Controlled Role Remediation',
        detail: 'Update role authorizations cleanly via PFCG and SU24, verify in QAS UAT, and close the ServiceNow incident within SLA.',
      },
    ],
    auditOutcome: 'Prevents SAP_ALL or wildcard remediation shortcuts and maintains a verifiable change-document trail.',
    environments: ['QAS', 'PRD'],
    relatedDeliverables: ['TRC-03', 'SLA-09', 'SU24-07'],
  },
  {
    id: 'sap-iag-sod',
    index: '03',
    name: 'SAP IAG & SoD Risk Governance',
    shortLabel: 'SAP IAG & SoD',
    headline: 'Preventative Segregation of Duties Analysis in SAP IAG',
    overview:
      'Embeds proactive Segregation of Duties (SoD) validation directly ahead of every access assignment or role modification—synchronizing landscape repositories and executing SAP IAG governance jobs.',
    tcodes: [
      { code: 'SAP IAG', purpose: 'Cloud identity access governance and SoD rule validation' },
      { code: 'Repo Sync', purpose: 'Synchronizes user, role, and authorization metadata to IAG' },
      { code: 'Access Analysis', purpose: 'Pre-assignment simulation to detect critical conflicts' },
      { code: 'Governance Jobs', purpose: 'Scheduled risk review and audit validation pipelines' },
    ],
    workflowSteps: [
      {
        step: 'Repository Synchronization',
        detail: 'Execute SAP IAG repository sync jobs to guarantee role and user states reflect live backend definitions.',
      },
      {
        step: 'Pre-Change User Access Analysis',
        detail: 'Simulate requested role assignments or modifications against active SoD rulesets before provisioning.',
      },
      {
        step: 'Master Data & Approver Validation',
        detail: 'Conduct periodic reviews of SAP role owners and PAM approvers to keep governance workflows audit-ready.',
      },
    ],
    auditOutcome: 'Stops toxic SoD conflicts prior to production assignment and satisfies periodic compliance audits.',
    environments: ['SAP IAG', 'PRD'],
    relatedDeliverables: ['IAG-10', 'AUD-13'],
  },
  {
    id: 'ffid-pam',
    index: '04',
    name: 'Firefighter ID (FFID) & PAM Logs',
    shortLabel: 'FFID & PAM',
    headline: 'Privileged Emergency Access Governance & Audit Log Review',
    overview:
      'Manages time-bound Firefighter ID provisioning from approved ServiceNow requests, maintains backend FFID owner/controller mappings, and extracts Privileged Access Management (PAM) logs for compliance verification.',
    tcodes: [
      { code: 'FFID', purpose: 'Emergency privileged account assignment & validity control' },
      { code: 'PAM Logs', purpose: 'Extraction and forensic review of firefighter session activity' },
      { code: 'Owners / Controllers', purpose: 'Backend governance assignment for review sign-offs' },
    ],
    workflowSteps: [
      {
        step: 'Approved Request Verification',
        detail: 'Validate ticket approval, business justification, and time window before assigning FFID access.',
      },
      {
        step: 'Backend Owner & Controller Maintenance',
        detail: 'Maintain accurate FFID owner and controller master data so every session routes to an independent reviewer.',
      },
      {
        step: 'PAM Log Extraction & Compliance Audit',
        detail: 'Extract, inspect, and archive PAM session logs to demonstrate controlled emergency execution to auditors.',
      },
    ],
    auditOutcome: 'Full accountability for every privileged emergency session with verified owner/controller sign-off.',
    environments: ['PRD', 'GRC EAM'],
    relatedDeliverables: ['PAM-06', 'AUD-13'],
  },
  {
    id: 'iam-automation',
    index: '05',
    name: 'User Lifecycle & BOT Automation',
    shortLabel: 'IAM & BOTs',
    headline: 'Mass User Administration & Automated Inactive Deprovisioning',
    overview:
      'Pairs hands-on SAP user lifecycle execution (creations, removals, lock/unlock, mass admin) with functional enablement for BOT Automation teams to automate deprovisioning and eliminate stale access.',
    tcodes: [
      { code: 'SU01 / SU10', purpose: 'Single and mass user creation, modification, lock/unlock' },
      { code: 'BOT Workflows', purpose: 'Automated access removal and inactive user deprovisioning' },
      { code: 'ServiceNow', purpose: 'End-to-end SLA-tracked request and incident orchestration' },
    ],
    workflowSteps: [
      {
        step: 'Standardized Lifecycle Operations',
        detail: 'Execute user creations, role/profile updates, password resets, and verified access removals across DEV/QAS/PRD.',
      },
      {
        step: 'BOT Functional Specification',
        detail: 'Translate SAP Security rules, lock criteria, and validity-date logic into actionable specifications for BOT Automation.',
      },
      {
        step: 'Continuous Queue & SLA Execution',
        detail: 'Resolve escalated anomalies and access bottlenecks in ServiceNow while tracking SLA adherence.',
      },
    ],
    auditOutcome: 'Reduces manual deprovisioning latency and eliminates orphaned or inactive user accounts.',
    environments: ['DEV', 'QAS', 'PRD'],
    relatedDeliverables: ['IAM-02', 'BOT-12', 'SLA-09'],
  },
  {
    id: 'sysadmin-snote',
    index: '06',
    name: 'OSS, SNOTE & Printer Config',
    shortLabel: 'OSS & SNOTE',
    headline: 'Technical Landscape Readiness, SNOTE Patching & Print Config',
    overview:
      'Supports broader SAP system stability by managing OSS connections during critical project phases, implementing SAP Notes via SNOTE, and configuring enterprise SAP output devices.',
    tcodes: [
      { code: 'SNOTE', purpose: 'SAP Note download, validation, and technical implementation' },
      { code: 'OSS', purpose: 'Secure SAP support connection opening and lifecycle control' },
      { code: 'SPAD', purpose: 'SAP Printer and output device configuration' },
    ],
    workflowSteps: [
      {
        step: 'SAP Note Evaluation & Implementation',
        detail: 'Implement required SAP Notes via SNOTE to resolve security or technical system anomalies.',
      },
      {
        step: 'OSS & Cutover Coordination',
        detail: 'Manage OSS connections securely and coordinate cutover IDs during deployment windows.',
      },
      {
        step: 'Printer & Output Administration',
        detail: 'Configure SAP printers and verify output device authorizations across business units.',
      },
    ],
    auditOutcome: 'Maintains technical landscape stability and secure vendor support connectivity.',
    environments: ['DEV', 'QAS', 'PRD'],
    relatedDeliverables: ['DEP-05', 'SYS-11'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    code: 'C_SEC_2405',
    title: 'SAP Certified Associate – Security Administrator',
    issuer: 'SAP Global Certification',
    focus: 'User administration, PFCG role engineering, authorization concepts & landscape security',
  },
  {
    code: 'C_AIG_2604',
    title: 'SAP Certified – SAP Generative AI Developer',
    issuer: 'SAP Global Certification',
    focus: 'Enterprise SAP AI capabilities, prompt engineering & intelligent workflow integration',
  },
  {
    code: 'PY-EDYST',
    title: 'Python Programming',
    issuer: 'EDYST',
    focus: 'Algorithmic problem solving, scripting & automation foundations',
  },
  {
    code: 'MATLAB',
    title: 'MATLAB Certification',
    issuer: 'Technical Certification',
    focus: 'Analytical modeling, numerical computation & engineering simulation',
  },
];

export const EDUCATION = {
  degree: 'B.Tech in Electrical and Electronics Engineering',
  institution: 'G. Narayanamma Institute of Technology and Science',
  location: 'Hyderabad, India',
};

export const KEY_SKILLS = [
  'SAP GRC Security & Authorizations',
  'Strong analytical & problem-solving skills',
  'Proficient in MS Office',
  'Pro-active, self-motivated and team player',
  'Quick Learner, keen to work and improve skills',
];

export const LANGUAGES = [
  { name: 'English', proficiency: 'Read / Write / Speak' },
  { name: 'Hindi', proficiency: 'Read / Write / Speak' },
  { name: 'Telugu', proficiency: 'Read / Write / Speak' },
];

export const HOBBIES = ['Cooking', 'Travelling', 'Playing Badminton'];
