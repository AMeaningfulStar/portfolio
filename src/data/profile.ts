export type SocialLink = {
  label: 'GitHub' | 'Blog' | 'Notion' | 'LinkedIn' | 'Email' | 'Resume' | 'Other'
  url: string
}

export type Profile = {
  name: string
  title: string // 예: "Frontend Developer" / "Full-stack Developer"
  tagline: string // 한 줄 소개(헤더에서 바로 보이는 문장)
  intro: string[] // 3~5줄 소개 (문단 대신 줄 배열 추천)
  location?: string
  email?: string

  highlights: Array<{
    title: string // 강점 제목 (짧게)
    description: string // 근거 포함 1~2문장
  }>

  links: SocialLink[]

  // 선택: 대표 키워드(배지 형태로 사용)
  keywords?: string[]
}

export const profile: Profile = {
  name: '김민성',
  title: 'Frontend Developer',
  tagline: '사용자 흐름을 먼저 설계하고, 유지보수 가능한 코드로 빠르게 구현합니다.',
  intro: [
    'Next.js/React/TypeScript 기반으로 사용자 중심의 웹 서비스를 개발했습니다.',
    '기능 구현보다 “왜 이 문제를 어떻게 풀었는지”를 문서화하고 팀과 공유하는 방식을 선호합니다.',
    '데이터 흐름과 상태 관리를 단순하게 유지해, 변경에 강한 UI를 만드는 데 강점이 있습니다.',
  ],
  location: 'Seoul, KR',
  email: 'your.email@example.com',
  highlights: [
    {
      title: '문제 정의부터 시작',
      description: '요구사항을 사용자 흐름으로 재정리하고, UI/데이터 구조를 먼저 고정해 재작업을 줄입니다.',
    },
    {
      title: '협업 친화적인 개발',
      description: 'PR/이슈/문서 템플릿을 정리해 팀이 같은 기준으로 개발하도록 돕습니다.',
    },
    {
      title: '성능·UX 개선 경험',
      description: '입력 오류율 감소, 처리 시간 단축 등 사용성 개선을 수치로 만들었던 경험이 있습니다.',
    },
  ],
  links: [
    { label: 'GitHub', url: 'https://github.com/AMeaningfulStar' },
    { label: 'Blog', url: 'https://velog.io/@ghrlfehd123/posts' },
    { label: 'Email', url: 'ghrlfehd123@gmail.com' },
  ],
  keywords: ['React', 'TypeScript', 'Next.js', 'Firebase', 'REST API'],
}