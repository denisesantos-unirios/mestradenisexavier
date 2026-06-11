export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      equipes: {
        Row: {
          alunos: Json
          created_at: string
          created_by: string
          descricao: string | null
          id: string
          nome: string
          periodo: string | null
          semestre: string | null
          updated_at: string
        }
        Insert: {
          alunos?: Json
          created_at?: string
          created_by: string
          descricao?: string | null
          id?: string
          nome: string
          periodo?: string | null
          semestre?: string | null
          updated_at?: string
        }
        Update: {
          alunos?: Json
          created_at?: string
          created_by?: string
          descricao?: string | null
          id?: string
          nome?: string
          periodo?: string | null
          semestre?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      exams: {
        Row: {
          created_at: string
          created_by: string
          discipline: Database["public"]["Enums"]["discipline"]
          id: string
          question_ids: string[]
          title: string
        }
        Insert: {
          created_at?: string
          created_by: string
          discipline: Database["public"]["Enums"]["discipline"]
          id?: string
          question_ids: string[]
          title: string
        }
        Update: {
          created_at?: string
          created_by?: string
          discipline?: Database["public"]["Enums"]["discipline"]
          id?: string
          question_ids?: string[]
          title?: string
        }
        Relationships: []
      }
      experimentos: {
        Row: {
          created_at: string
          created_by: string
          data_aplicacao: string | null
          fatores: Json
          hipoteses: Json
          id: string
          metricas: Json
          objetivo: string | null
          personas: Json
          projeto_id: string
          questoes: Json
          resultados: Json
          tarefas: Json
          tcle: Json
          tecnicas: Json
          titulo: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          data_aplicacao?: string | null
          fatores?: Json
          hipoteses?: Json
          id?: string
          metricas?: Json
          objetivo?: string | null
          personas?: Json
          projeto_id: string
          questoes?: Json
          resultados?: Json
          tarefas?: Json
          tcle?: Json
          tecnicas?: Json
          titulo: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          data_aplicacao?: string | null
          fatores?: Json
          hipoteses?: Json
          id?: string
          metricas?: Json
          objetivo?: string | null
          personas?: Json
          projeto_id?: string
          questoes?: Json
          resultados?: Json
          tarefas?: Json
          tcle?: Json
          tecnicas?: Json
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "experimentos_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projetos"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      projetos: {
        Row: {
          created_at: string
          created_by: string
          descricao: string | null
          equipe_id: string
          id: string
          nome: string
          software_avaliado: string | null
          updated_at: string
          url: string | null
        }
        Insert: {
          created_at?: string
          created_by: string
          descricao?: string | null
          equipe_id: string
          id?: string
          nome: string
          software_avaliado?: string | null
          updated_at?: string
          url?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          descricao?: string | null
          equipe_id?: string
          id?: string
          nome?: string
          software_avaliado?: string | null
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projetos_equipe_id_fkey"
            columns: ["equipe_id"]
            isOneToOne: false
            referencedRelation: "equipes"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          answer_explanation: string | null
          context_text: string | null
          correct_answer: string | null
          created_at: string
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          discipline: Database["public"]["Enums"]["discipline"]
          discursive_answer: string | null
          id: string
          image_url: string | null
          option_a: string | null
          option_b: string | null
          option_c: string | null
          option_d: string | null
          option_e: string | null
          question_type: Database["public"]["Enums"]["question_type"]
          statement: string
          topic: string
          updated_at: string
        }
        Insert: {
          answer_explanation?: string | null
          context_text?: string | null
          correct_answer?: string | null
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          discipline: Database["public"]["Enums"]["discipline"]
          discursive_answer?: string | null
          id?: string
          image_url?: string | null
          option_a?: string | null
          option_b?: string | null
          option_c?: string | null
          option_d?: string | null
          option_e?: string | null
          question_type?: Database["public"]["Enums"]["question_type"]
          statement: string
          topic: string
          updated_at?: string
        }
        Update: {
          answer_explanation?: string | null
          context_text?: string | null
          correct_answer?: string | null
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          discipline?: Database["public"]["Enums"]["discipline"]
          discursive_answer?: string | null
          id?: string
          image_url?: string | null
          option_a?: string | null
          option_b?: string | null
          option_c?: string | null
          option_d?: string | null
          option_e?: string | null
          question_type?: Database["public"]["Enums"]["question_type"]
          statement?: string
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "professor" | "gestor"
      difficulty_level: "easy" | "medium" | "hard"
      discipline:
        | "engenharia-software-1"
        | "engenharia-software-2"
        | "projetos-interface"
        | "engenharia-software-ead"
      question_type: "multiple_choice" | "discursive"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "professor", "gestor"],
      difficulty_level: ["easy", "medium", "hard"],
      discipline: [
        "engenharia-software-1",
        "engenharia-software-2",
        "projetos-interface",
        "engenharia-software-ead",
      ],
      question_type: ["multiple_choice", "discursive"],
    },
  },
} as const
