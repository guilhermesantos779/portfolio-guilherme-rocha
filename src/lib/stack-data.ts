// Logos via Simple Icons CDN (gratuito): https://cdn.simpleicons.org/{slug}/{hex}

export interface Technology {
  name: string
  category: string
  logo: string
  color: string
  level: 'expert' | 'advanced' | 'intermediate'
  url?: string
}

const SI = (slug: string, color = 'ffffff') => `https://cdn.simpleicons.org/${slug}/${color}`

export const technologies: Technology[] = [
  // Frontend
  { name: 'Next.js', category: 'Frontend', logo: SI('nextdotjs'), color: '#ffffff', level: 'expert' },
  { name: 'React', category: 'Frontend', logo: SI('react', '61DAFB'), color: '#61DAFB', level: 'expert' },
  { name: 'TypeScript', category: 'Frontend', logo: SI('typescript', '3178C6'), color: '#3178C6', level: 'advanced' },
  { name: 'Tailwind', category: 'Frontend', logo: SI('tailwindcss', '06B6D4'), color: '#06B6D4', level: 'advanced' },
  { name: 'HTML5', category: 'Frontend', logo: SI('html5', 'E34F26'), color: '#E34F26', level: 'expert' },
  { name: 'CSS3', category: 'Frontend', logo: SI('css3', '1572B6'), color: '#1572B6', level: 'expert' },
  { name: 'Framer', category: 'Frontend', logo: SI('framer'), color: '#ffffff', level: 'advanced' },

  // Backend & Infra
  { name: 'Supabase', category: 'Backend', logo: SI('supabase', '3ECF8E'), color: '#3ECF8E', level: 'advanced' },
  { name: 'Node.js', category: 'Backend', logo: SI('nodedotjs', '339933'), color: '#339933', level: 'advanced' },
  { name: 'PostgreSQL', category: 'Backend', logo: SI('postgresql', '4169E1'), color: '#4169E1', level: 'intermediate' },
  { name: 'Stripe', category: 'Backend', logo: SI('stripe', '635BFF'), color: '#635BFF', level: 'advanced' },
  { name: 'Vercel', category: 'Infra', logo: SI('vercel'), color: '#ffffff', level: 'expert' },
  { name: 'GitHub', category: 'Infra', logo: SI('github'), color: '#ffffff', level: 'advanced' },

  // IA & Automação
  { name: 'Claude AI', category: 'IA', logo: SI('anthropic', 'c9a84c'), color: '#c9a84c', level: 'expert' },
  { name: 'Grok', category: 'IA', logo: SI('x', 'ffffff'), color: '#ffffff', level: 'advanced' },
  { name: 'Gemini', category: 'IA', logo: SI('googlegemini', '8E75B2'), color: '#8E75B2', level: 'advanced' },
  { name: 'OpenAI', category: 'IA', logo: SI('openai'), color: '#ffffff', level: 'intermediate' },

  // Ferramentas
  { name: 'VS Code', category: 'Tools', logo: SI('visualstudiocode', '007ACC'), color: '#007ACC', level: 'expert' },
  { name: 'Figma', category: 'Tools', logo: SI('figma', 'F24E1E'), color: '#F24E1E', level: 'intermediate' },
  { name: 'Discord', category: 'Tools', logo: SI('discord', '5865F2'), color: '#5865F2', level: 'advanced' },
  { name: 'Notion', category: 'Tools', logo: SI('notion'), color: '#ffffff', level: 'advanced' },
]

export const categories = ['Todos', 'Frontend', 'Backend', 'Infra', 'IA', 'Tools']
