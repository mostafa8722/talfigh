interface Category {
  category_id: string
}

interface Data {
  id?: number;
  title1?: string;
  title2?: string;
  title3?: string;
  description3?: string;
  button_text1?: string;
  button_link1?: string;
  button_text2?: string;
  button_link2?: string;
  footer_logo?: string;
  category: Category[];
  created_at?: string;
  updated_at?: string;
}


export interface Footer {
  success: boolean;
  data: Data;
  message: string;
}

