export interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  published_at: string | null;
  is_published: boolean;
  created_at: string;
}

export type LeadStatus =
  | "nove"
  | "v_reseni"
  | "podpis_smlouvy"
  | "dokonceno"
  | "zruseno";

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  nove: "Nové",
  v_reseni: "V řešení",
  podpis_smlouvy: "Podpis smlouvy",
  dokonceno: "Dokončeno",
  zruseno: "Zrušeno",
};

export const LEAD_STATUS_COLORS: Record<LeadStatus, string> = {
  nove: "bg-blue-100 text-blue-700",
  v_reseni: "bg-yellow-100 text-yellow-700",
  podpis_smlouvy: "bg-purple-100 text-purple-700",
  dokonceno: "bg-green-100 text-green-700",
  zruseno: "bg-red-100 text-red-700",
};

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  status: LeadStatus;
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
