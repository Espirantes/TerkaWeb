export interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  published_at: string | null;
  is_published: boolean;
  created_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  created_at: string;
}

export interface PageSection {
  id: string;
  title: string | null;
  subtitle: string | null;
  content: unknown;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: Article;
        Insert: Omit<Article, "id" | "created_at">;
        Update: Partial<Omit<Article, "id" | "created_at">>;
      };
      leads: {
        Row: Lead;
        Insert: Omit<Lead, "id" | "created_at">;
        Update: Partial<Omit<Lead, "id" | "created_at">>;
      };
      page_sections: {
        Row: PageSection;
        Insert: Omit<PageSection, "updated_at">;
        Update: Partial<Omit<PageSection, "id">>;
      };
    };
  };
}
