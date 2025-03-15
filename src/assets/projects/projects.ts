import CorDePinkProject from './CorDePinkProject.png'
import FeedProject from './FeedProject.png'
import TodoListProject from './TodoListProject.png'

export const projects = [
    {
        print: TodoListProject,
        link: "https://ignite-todo-list-rho.vercel.app/",
        title: "Todo List",
        description: "Aplicação de lista de tarefas com funcionalidades de adicionar, marcar como concluído e excluir tarefas. Desenvolvida durante o bootcamp Ignite da Rocketseat.",
        technologies: ["React", "TypeScript", "CSS Modules", "Vite"]
    },
    {
        print: FeedProject,
        link: "https://ignite-feed-pearl.vercel.app/#",
        title: "Ignite Feed",
        description: "Plataforma de feed social com funcionalidades de posts, comentários e interações. Projeto desenvolvido com foco em componentes React e estilização moderna.",
        technologies: ["React", "TypeScript", "CSS Modules", "Vite"]
    },
    {
        print: CorDePinkProject,
        link: "https://atelie-cor-de-pink.vercel.app/",
        title: "Ateliê Cor de Pink",
        description: "Site para um ateliê de artesanato com catálogo de produtos, informações sobre o ateliê e formulário de contato. Design responsivo para todas as telas.",
        technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"]
    },
]