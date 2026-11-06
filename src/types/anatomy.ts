export type AnatomyCategory = 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'endocrine';

export type BodySystem =
  | 'all'
  | 'skeletal'
  | 'muscular'
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'urinary'
  | 'nervous'
  | 'endocrine'
  | 'reproductive'
  | 'reproductive_male'
  | 'reproductive_female'
  | 'lymphatic'
  | 'integumentary';

export type BodyView = 'front' | 'back';

export type LayerMode = 'all' | 'organs' | 'bones' | 'muscles';

export type Gender = 'male' | 'female';

export interface DiseaseInfo {
  name: string;
  description: string;
  severity?: 'eng_kop' | 'ortacha' | 'jiddiy';
}

export interface StatisticsInfo {
  percentage: number;
  label: string;
  source: string;
  year: number | string;
  details?: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface AnatomyItem {
  id: string;
  nameUz: string;
  nameLatin: string;
  category: AnatomyCategory;
  system: BodySystem;
  systemNameUz: string;
  systemColor: string; // Tailwind color class or hex
  views: BodyView[]; // which views this item appears in
  location: string; // Qayerda joylashgani (oddiy tilda)
  function: string; // Vazifasi (2-3 oddiy gap)
  diseases: DiseaseInfo[]; // Keng tarqalgan kasalliklar (3-5 ta)
  causes: string[]; // Kasallik sabablari
  statistics: StatisticsInfo; // JSST / WHO statistikasi
  prevention: string; // Profilaktika maslahati (1-2 gap)
  funFact: string; // Qiziqarli fakt (1 ta)
  glossary?: GlossaryItem[]; // Murakkab atamalar izohi
  boneDetails?: {
    count: number;
    boneGroup: 'bosh' | 'umurtqa' | 'kokrak' | 'qol' | 'oyoq';
    paired: boolean;
  };
  genderSpecific?: Gender | null;
  importance?: 'primary' | 'secondary';
}

export interface BoneCatalogItem {
  id: string;
  nameUz: string;
  nameLatin: string;
  count: number;
  region: 'bosh' | 'umurtqa' | 'kokrak' | 'qol' | 'oyoq';
  regionUz: string;
  description: string;
  isPaired: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedOrganId?: string;
}
