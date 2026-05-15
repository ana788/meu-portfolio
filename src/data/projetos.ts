import imagemCoinc2 from "../assets/prints-coinc.png"
import imagemPdv from "../assets/prints-pdv2.png"
import imagemWeb from "../assets/prints-web.png"
import imagemPortfolio4 from "../assets/prints-portfolio4.png"

export const projetos = [
    {
        titulo: "Sistema de Gestão Empresarial",
        descricao: "Sistema web para gestão empresarial com controle de produtos, clientes, fornecedores e processos internos.",
        imagem: imagemWeb,
        tags: ["Java", "Spring", "Angular"],
        detalhesTecnicos: [
            "Controle de acesso granular por perfis e permissões",
            "Arquitetura multi-tenant",
            "Sincronização entre servidores locais e servidor central",
            "Comunicação entre aplicações via APIs HTTP",
            "Auditoria",
            "Postgres"
        ]
    },

    {
        titulo: "Sistema de Ponto de Venda (POS)",
        descricao: "Sistema desktop de vendas com integração de produtos, pagamentos e atualização automática de estoque.",
        imagem: imagemPdv,
        tags: ["Java", "Spring", "Angular + Electron"],
        detalhesTecnicos: [
            "Implementação de UUID para evitar conflitos entre bases distintas",
            "Soft delete para preservação de histórico de dados",
            "Persistência de vendas em múltiplas tabelas relacionadas",
            "Aplicação de regras de negócio no fechamento de vendas",
            "Redis"
        ]
    },

    {
        titulo: "Sistema de Gestão de Finanças Pessoais",
        descricao: "Sistema financeiro para controle de gastos mensais com gráficos, categorias e análise de hábitos financeiros.",
        imagem: imagemCoinc2,
        tags: ["React", "Tailwind", "Node"],
        detalhesTecnicos: [
            "Desenvolvimento front end",
            "Interface responsiva e moderna",
            "Estrutura baseada em microsserviços"
        ]
    },

    {
        titulo: "Aplicação de Portfólio Pessoal",
        descricao: "Portfólio web criado para apresentar projetos, experiências e habilidades de forma moderna e visual.",
        imagem: imagemPortfolio4,
        tags: ["React", "Tailwind"],
        detalhesTecnicos: [
            "Componentização",
            "Responsividade",
            "Interface interativa com animações suaves"
        ]
    }
]