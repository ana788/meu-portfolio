import cardTop from "../assets/card-top.jpg"

export const projetos = [
    {
        titulo: "Sistema de Gestão Empresarial",
        descricao: "Sistema web voltado à gestão operacional de empresas, permitindo o gerenciamento de produtos, clientes, fornecedores, tributações e demais processos internos.",
        imagem: cardTop,
        tags: ["Java", "Spring", "Angular", "Postgres"],
        detalhesTecnicos: [
            "Controle de acesso granular por perfis e permissões",
            "Arquitetura multi-tenant",
            "Sincronização entre servidores locais e servidor central",
            "Comunicação entre aplicações via APIs HTTP",
            "Auditoria"
        ]
    },

    {
        titulo: "Sistema de Ponto de Venda (POS)",
        descricao: "Sistema desktop responsável pelo processo de vendas, integrando produtos, clientes, formas de pagamento e atualização automática de estoque.",
        imagem: cardTop,
        tags: ["Java", "Spring", "Angular + Electron", "Redis"],
        detalhesTecnicos: [
            "Implementação de UUID para evitar conflitos entre bases distintas",
            "Soft delete para preservação de histórico de dados",
            "Persistência de vendas em múltiplas tabelas relacionadas",
            "Aplicação de regras de negócio no fechamento de vendas"
        ]
    },

    {
        titulo: "Sistema de Gestão de Finanças Pessoais",
        descricao: "Sistema para gerenciar gastos mensais. Mostra onde o dinheiro foi gasto com dados e gráficos. Ajuda a entender hábitos financeiros. Permite definir limites por categoria.",
        imagem: cardTop,
        tags: ["React", "Tailwind", "Node"],
        detalhesTecnicos: [
            "Desenvolvimento das telas de login e configurações do usuário",
            "Integração entre frontend e APIs",
            "Interface responsiva e moderna",
            "Estrutura baseada em microsserviços"
        ]
    },

    {
        titulo: "Aplicação de Portfólio Pessoal",
        descricao: "Portfólio web desenvolvido para apresentar projetos, experiências e habilidades profissionais de forma prática e visual, destacando o valor das soluções.",
        imagem: "src/assets/card-top.jpg",
        tags: ["React", "Tailwind"],
        detalhesTecnicos: [
            "Componentização",
            "Responsividade",
            "Interface interativa com animações suaves"
        ]
    }
]