# Nexus BI — Consultor Empresarial Inteligente

Diagnóstico empresarial com IA. Analisa planilhas (CSV ou Excel) e gera insights estratégicos personalizados por setor.

---

## Arquivos do projeto

```
nexus-bi/
├── nexus-bi-celular.html     → Versão de venda (abre no Chrome, celular e PC)
├── nexus-bi-demo.html        → Versão de teste sem API (só para você)
├── teste-dados-empresa.csv   → CSV de exemplo para testes
├── electron/main.js          → Configuração do app desktop
├── .github/workflows/build.yml → GitHub Actions (gera .exe + link mobile)
├── package.json
└── vite.config.js
```

---

## Como subir no GitHub (passo a passo)

### 1. Criar repositório
- github.com → New repository
- Nome: `nexus-bi`
- Visibilidade: **Private**
- Criar sem README

### 2. Fazer push
```bash
git init
git add .
git commit -m "Nexus BI v1"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/nexus-bi.git
git push -u origin main
```

### 3. Ativar GitHub Pages
- Repositório → Settings → Pages
- Source: **GitHub Actions**

### 4. Aguardar o build
- Vá em **Actions** no GitHub
- Aguarde ~5 minutos
- O `.exe` aparece em **Releases**
- O link mobile fica em: `https://SEU_USUARIO.github.io/nexus-bi/`

---

## Como o cliente usa

### Desktop (Windows)
1. Baixa o `.exe` na aba Releases do GitHub
2. Instala e abre
3. Coloca a API key dele, nome da empresa, setor e planilha
4. Clica em Gerar Análise

### Celular / Tablet
1. Acessa o link do GitHub Pages no Chrome
2. Preenche os campos e envia a planilha
3. Recebe a análise completa

---

## Quem paga pela API?

**O próprio cliente.** Cada um usa a sua chave de API do Claude (anthropic.com).
Você não paga nada pela análise — o custo é do cliente.

---

## Formatos de planilha aceitos
- `.xlsx` — Excel (recomendado)
- `.csv` — valores separados por vírgula
- `.tsv` — separados por tab
- `.txt` — qualquer separador

---

## Setores disponíveis
Varejo, Alimentação/Restaurantes, Indústria, Serviços Profissionais, Tecnologia, Saúde/Clínicas, Construção Civil, Agronegócio, Educação, Logística, E-commerce, Outro.
