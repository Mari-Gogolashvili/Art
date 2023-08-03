export interface Data {
  id: number;
  image_url(image_url: any): unknown;
  compressedImageUrl: string;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: string;
  thumbnail: {};
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: string;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number;
  artist_display: string;
  place_of_origin: string;
  dimensions: string;
  dimensions_detail: string[];
  medium_display: string;
  inscriptions: string;
  credit_line: string;
  catalogue_display: string;
  publication_history: string;
  exhibition_history: string;
  provenance_text: string;
  edition: string;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: number;
  fiscal_year_deaccession: number;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: object;
  latitude: string;
  longitude: string;
  latlon: string;
  is_on_view: boolean;
  on_loan_display: string;
  gallery_title: string;
  gallery_id: string;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: number[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: string;
  style_title: string;
  alt_style_ids: number[];
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: number;
  alt_technique_ids: [];
  technique_ids: [];
  technique_titles: [];
  theme_titles: [];
  image_id: string;
  alt_image_ids: [];
  document_ids: [];
  sound_ids: [];
  video_ids: [];
  text_ids: [];
  section_ids: [];
  section_titles: [];
  site_ids: [];
  suggest_autocomplete_all: [];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface getPaintingResponse {
  pagination: object;
  data:Data[];
  info: {};
  config: {};
}

export interface Painting {
  image_id(image_id: any): unknown;
  id: number;
  title: string;
  imageUrl: string;
}


export interface getPaintingDetailResponse {

  data:{};
  info: {};
  config: {};
}