/* ============================================================
   PAINEL DO CONSELHO DE CLASSE PARTICIPATIVO — 2ª ETAPA
   ============================================================
   Arquivo único: dados reais das respostas + renderização dos
   gráficos + animações de entrada. Não faz nenhuma chamada de
   rede — os dados abaixo são um retrato fixo das respostas
   coletadas no Microsoft Forms.

   Pra atualizar os números no futuro, basta substituir o array
   RESPONSES abaixo por uma nova exportação do Forms.
   ============================================================ */

const RESPONSES = [
  {
    q1: `IA`,
    q2: `Está presente em tudo.`,
    q3: `No trabalho`,
    q4: `O papel é melhorar a qualidade da vida humana.`,
    q5: `Ativo`,
    q6: `Raramente`,
    q7: `Uso para escola, principalmente pesquisar, ler livros on-line e etc.`,
    q8: `Pesquisas`,
    q9: `Para gerenciar notas, pesquisas e falar com os pais.`,
    q10: `A tecnologia ajuda a comunicar as pessoas, e através da cultura elas divulgam suas artes e seus significados.`,
    q11: `Sim`,
    q12: `Jogos`,
    q13: `Verifico quem publicou`,
    q14: `Raramente`,
    q15: `Usar a tecnologia com equilíbrio`,
    q16: `Bom`,
    q17: `Internet`,
    q18: `Ainda não sei ao certo qual competência gostaria de desenvolver.`,
    q19: `No momento não tenho nenhuma sugestão para isso.`,
  },
  {
    q1: `Praticidade`,
    q2: `Está sempre presente no dia a dia`,
    q3: `Em casa`,
    q4: `Facilitar atividades onde exige pesquisas, situações que podem ser resolvidas em casa sem precisar sair e pegar filas, mas sim fazer algo mais rápido e fácil, lazer.`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Para pesquisas de trabalhos, estudar com vídeo aula e tirar dúvidas`,
    q8: `Pesquisas`,
    q9: `Ajuda a compartilhar informações e comunicação entre a escola e familiares sem precisar necessariamente ir a escola`,
    q10: `Ampliou através de músicas, modinhas, informações, me deixando antenada sobre tudo de vários locais`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Raramente`,
    q15: `Proteger dados pessoas`,
    q16: `Bom`,
    q17: `Melhorar os notebooks que o SESI oferece para utilizarmos em sala de aula, eles travam demais, todos estão danificados e lentos.`,
    q18: `Ainda não parei para pensar em uma competência específica.`,
    q19: `Não tenho outra sugestão além do que já foi dito.`,
  },
  {
    q1: `Computador`,
    q2: `No meu dia a dia inteiramente`,
    q3: `Em casa`,
    q4: `Facilitadora de processos e entretenimento`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Sim, no Senai usamos muito a tecnologia, além de cursos online que faço`,
    q8: `Pesquisas`,
    q9: `Em diversas situações em que se precisa pesquisar e entender mais sobre um assunto, por exemplo, em pesquisas escolares é ótimo`,
    q10: `A tecnologia ampliou meu acesso a partir de pesquisas, vídeos educativos e culturais do Brasil`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Não espalhar informações falsas`,
    q16: `Bom`,
    q17: `Notebooks melhores (os pretos estão péssimos)`,
    q18: `Excel`,
    q19: `Um curso voltado para essa área.`,
  },
  {
    q1: `Inovação`,
    q2: `Está presente em outras situações. Tudo aquilo que facilita o nosso cotidiano.`,
    q3: `Em outras situações`,
    q4: `Facilitar o dia a dia.`,
    q5: `Um pouco dos dois`,
    q6: `Nunca`,
    q7: `Principalmente como auxílio nos estudos, como: retirar dúvidas, realizar exercícios, etc.`,
    q8: `Comunicação`,
    q9: `Na execução de tarefas e organização de uma equipe, como separar as funções/tópicos a serem abordados.`,
    q10: `Apesar de algumas incoerências, a tecnologia permite o acesso ao conhecimento. Caso você precise de uma informação de forma resumida ou didática, essas ferramentas podem nos auxiliar.`,
    q11: `Não`,
    q12: `Outro`,
    q13: `Pergunto para alguém`,
    q14: `Sempre`,
    q15: `Todos os anteriores`,
    q16: `Regular`,
    q17: `A escola já apresenta diversas tecnologias, principalmente através do SENAI.`,
    q18: `Gerenciar melhor o tempo de uso da tecnologia.`,
    q19: `Não sei responder com certeza, ainda não pensei sobre isso.`,
  },
  {
    q1: `Futuro`,
    q2: `Para mim a tecnologia não tem limites para resolver problemas diários.`,
    q3: `Na comunicação`,
    q4: `Ajudar e facilitar a resolução de problemas no dia a dia.`,
    q5: `Passivo`,
    q6: `Raramente`,
    q7: `Uso a tecnologia para realizar um plano de estudos mais focado em uma área do conteúdo e também para realizar testes de conhecimento a respeito do conteúdo ensinado.`,
    q8: `Pesquisas`,
    q9: `Ele me ajuda a realizar um pensamento lógico e definir tarefas, como por exemplo no SENAI, a partir da tecnologia conseguimos controlar as atividades de cada membro do grupo para realizar o projeto e juntar as tarefas de cada um.`,
    q10: `Ela trouxe maior acesso de forma rápida, tanto para informações quanto à própria cultura.`,
    q11: `Sim`,
    q12: `Uso excessivo do celular`,
    q13: `Comparo com sites confiáveis`,
    q14: `Às vezes`,
    q15: `Todos os anteriores`,
    q16: `Bom`,
    q17: `Trazer maior estrutura (temos 32 computadores no LIM que demoram uma aula inteira só para ligar, o que gera uma demora para realizar uma simples pesquisa) e uma fundamentação maior por trás disso, como por exemplo um curso básico sobre ética dentro da tecnologia e proteção de dados.`,
    q18: `Novas formas de aplicar a tecnologia no meu cotidiano.`,
    q19: `A escola poderia trazer mais oportunidades relacionadas à tecnologia, mostrando para os alunos que a partir de um pouco de conhecimento dentro do mundo tech é possível realizar diversas coisas e abrir muitas oportunidades, independente do emprego ou do cargo que o estudante queira estabelecer para sua carreira.`,
  },
  {
    q1: `Futuro`,
    q2: `Acredito que esteja presente em tudo, a maioria das coisas do dia a dia foram avançando graças à tecnologia.`,
    q3: `Na escola`,
    q4: `Ser o principal meio de comunicação e conexão na sociedade moderna.`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Às vezes possuo dúvidas, então peço ajuda da tecnologia.`,
    q8: `Pesquisas`,
    q9: `Comunicação em longa distância, um exemplo é conseguirmos fazer um trabalho sem precisar estar juntos.`,
    q10: `Temos acesso a diferentes informações e culturas todos os dias, através de redes sociais, séries, filmes, pesquisas, sites e blogs.`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Não espalhar informações falsas`,
    q16: `Excelente`,
    q17: `Gostaria de ver mais projetos de tecnologia na escola.`,
    q18: `Um site para a escola.`,
    q19: `Concordar com a ideia e ajudar a aplicar.`,
  },
  {
    q1: `Vida`,
    q2: `Está presente também em outras situações do dia a dia.`,
    q3: `Na escola`,
    q4: `Desenvolver a sociedade.`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Sim, pois ela irá fazer parte de qualquer trabalho, vida e até mesmo do desenvolvimento pessoal.`,
    q8: `Pesquisas`,
    q9: `Ajuda no desenvolvimento de opiniões a partir de pesquisas.`,
    q10: `Ela ampliou, pois posso ter informações e ver novas culturas quando eu quiser.`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Respeitar outras pessoas`,
    q16: `Excelente`,
    q17: `O uso dele como dinâmica`,
    q18: `No momento não sei dizer qual competência gostaria de desenvolver.`,
    q19: `Não tenho nenhuma sugestão a acrescentar.`,
  },
  {
    q1: `IA`,
    q2: `Está presente em outras situações do dia a dia`,
    q3: `Em casa`,
    q4: `Ajudar a evoluir a nossa sociedade e facilitar/melhorar nosso dia a dia.`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Eu utilizo a tecnologia para melhorar meus conhecimentos, trazer novos conceitos, tirar dúvidas que não compreendo e me ajudar em ideias.`,
    q8: `Pesquisas`,
    q9: `Ajuda para que nós alunos criarmos, a debatermos e organizar projetos.`,
    q10: `Eu posso acessar, conhecer e ver diferentes culturas de longe, sem precisar me locomover.`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Não espalhar informações falsas`,
    q16: `Bom`,
    q17: `Não vejo nada que precise mudar no momento.`,
    q18: `Criação, organização.`,
    q19: `Não tenho nenhuma sugestão a acrescentar no momento.`,
  },
  {
    q1: `Avanço`,
    q2: `Em quase tudo se a tecnologia`,
    q3: `Em casa`,
    q4: `A tecnologia tem a função de facilitar as funções do dia a dia e ajudar a sociedade em todos os aspectos`,
    q5: `Ativo`,
    q6: `Raramente`,
    q7: `Sim, utilizei a tecnologia para a minha formação, principalmente no SENAI, pois é um curso de ADS que utiliza a tecnologia para os trabalhos.`,
    q8: `Pesquisas`,
    q9: `Ela ajuda na produção do trabalho, por exemplo no SENAI os alunos são responsáveis por desenvolver sistemas e a tecnologia é a principal ferramenta para tal`,
    q10: `Ela ampliou o meu acesso a cultura principalmente na internet`,
    q11: `Sim`,
    q12: `Notificações/mensagens`,
    q13: `Verifico quem publicou`,
    q14: `Raramente`,
    q15: `Usar a tecnologia com equilíbrio`,
    q16: `Bom`,
    q17: `Não vejo necessidade de mudanças, as tecnologias que já usamos são úteis.`,
    q18: `Aprender a desenvolver sistemas de forma completa.`,
    q19: `A escola já está me ensinando a isso`,
  },
  {
    q1: `Internet`,
    q2: `Presente em outras situações do nosso dia a dia. Em praticamente tudo, na verdade.`,
    q3: `Em outras situações`,
    q4: `Proporcional automatização, facilidade e agilidade nas coisas.`,
    q5: `Um pouco dos dois`,
    q6: `Nunca`,
    q7: `Eu a utilizo para agilizar o meu trabalho, buscando em diversificadas fontes e a vídeos no YouTube.`,
    q8: `Vídeos`,
    q9: `A tecnologia possibilita que todos pesquisem ao mesmo tempo em diferentes fontes ou na mesma, e possibilita a continuação do trabalho estando cada um em sua casa.`,
    q10: `A tecnologia conecta tudo e todos, independente do país.`,
    q11: `Sim`,
    q12: `Uso excessivo do celular`,
    q13: `Comparo com sites confiáveis`,
    q14: `Às vezes`,
    q15: `Todos os anteriores`,
    q16: `Regular`,
    q17: `Concentrar mais ao utilizar.`,
    q18: `Eu não sei. Acho que a de saber diferenciar diferentes softwares, sabendo analisar qual é bom/ruim para compra.`,
    q19: `Fornecer estudos e pesquisas relacionados a isso, ou cursos, como o que aconteceu esse ano de IA Generativa.`,
  },
  {
    q1: `Ajuda`,
    q2: `Tudo que facilita nosso processo/vida`,
    q3: `Em casa`,
    q4: `Progresso da humanidade e facilitar nossas vidas`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Estudo, apresentação, aulas, cursos, revisão`,
    q8: `Pesquisas`,
    q9: `Possibilita trabalhos em grupo fora da escola sem precisar se encontrar`,
    q10: `100% pois mídias físicas estão caindo cada vez mais no esquecimento`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Raramente`,
    q15: `Proteger dados pessoas`,
    q16: `Bom`,
    q17: `Usar para estudar, não ela pensar por nós`,
    q18: `Cyber segurança`,
    q19: `Curso, palestra, aula.`,
  },
  {
    q1: `Globalização`,
    q2: `Em quaisquer situações, como nas cidades, medicina, educação, em todas as áreas.`,
    q3: `Na comunicação`,
    q4: `Conseguir fazer com que o mundo seja avançado e combata todos os problemas sociais`,
    q5: `Passivo`,
    q6: `Raramente`,
    q7: `Utilizo para conseguir aprender conteúdos novos`,
    q8: `Pesquisas`,
    q9: `Facilita a comunicação e permite que várias pessoas trabalhem juntas mesmo à distância. Por exemplo, um grupo pode usar o Google Docs para fazer um trabalho ao mesmo tempo.`,
    q10: `Permitiu acesso rápido a livros, vídeos, notícias, cursos, músicas e conteúdos culturais de diferentes lugares do mundo.`,
    q11: `Sim`,
    q12: `Uso excessivo do celular`,
    q13: `Verifico quem publicou`,
    q14: `Às vezes`,
    q15: `Usar a tecnologia com equilíbrio`,
    q16: `Bom`,
    q17: `Mais atividades práticas e oportunidades para aplicar a tecnologia em projetos reais.`,
    q18: `Programação e desenvolvimento de projetos tecnológicos, além do uso de ferramentas de inteligência artificial.`,
    q19: `Oferecer mais aulas práticas, projetos de tecnologia, oficinas e acesso a ferramentas e equipamentos para colocar os conhecimentos em prática.`,
  },
  {
    q1: `Conexão`,
    q2: `Em outras situações do dia a dia também.`,
    q3: `Na escola`,
    q4: `Facilitar a vida das pessoas, tanto na comunicação como na escola, trabalho...`,
    q5: `Ativo`,
    q6: `Sim, frequentemente`,
    q7: `Pesquisando, assistindo vídeos.`,
    q8: `Pesquisas`,
    q9: `Da o poder de trabalhar tudo junto em um único projeto. Como por exemplo no canva, vc pode montar um trabalho em conjunto.`,
    q10: `Através de música, filmes, notícias.`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Respeitar outras pessoas`,
    q16: `Excelente`,
    q17: `Os computadores que são disponibilizados para as aulas nas salas`,
    q18: `Ainda não sei qual competência gostaria de desenvolver.`,
    q19: `Não tenho nenhuma sugestão específica no momento.`,
  },
  {
    q1: `Inovação`,
    q2: `Outras situações`,
    q3: `Em casa`,
    q4: `O papel da tecnologia é fundamental para que a sociedade evolua.`,
    q5: `Ativo`,
    q6: `Raramente`,
    q7: `Em pesquisas, vídeo aulas, exercícios on-line, etc.`,
    q8: `Pesquisas`,
    q9: `Muitas escolas têm aplicativos ou sites onde os pais têm maior acesso ao cronograma escolar.`,
    q10: `As pesquisas e notícias ajudam a fazer com que grande parte da população tenha acesso a informação e cultura.`,
    q11: `Sim`,
    q12: `Notificações/mensagens`,
    q13: `Procuro em outras fontes`,
    q14: `Raramente`,
    q15: `Usar a tecnologia com equilíbrio`,
    q16: `Bom`,
    q17: `Acho que a tecnologia está muito presente na nossa escola, porém nem sempre os computadores e a internet está ok para que possamos fazer pesquisas ou slides.`,
    q18: `Acho que não há nenhuma competência específica que eu queira destacar.`,
    q19: `Não tenho nenhuma sugestão a acrescentar no momento.`,
  },
  {
    q1: `Comunicação`,
    q2: `Em tudo hoje em dia`,
    q3: `Em outras situações`,
    q4: `Facilitar a vida e o trabalho`,
    q5: `Um pouco dos dois`,
    q6: `Nunca`,
    q7: `Fazendo pesquisas`,
    q8: `Vídeos`,
    q9: `Com a facilidade da comunicação e de buscar informações`,
    q10: `Garantindo que a parte da comunicação funcionasse`,
    q11: `Não`,
    q12: `Outro`,
    q13: `Comparo com sites confiáveis`,
    q14: `Sempre`,
    q15: `Todos os anteriores`,
    q16: `Regular`,
    q17: `Internet e aparelhos eletrônicos (lmt)`,
    q18: `Criação de conteúdo`,
    q19: `Acho que não muita coisa a não ser dar base para uma boa convivência no meio digital.`,
  },
  {
    q1: `SENAI`,
    q2: `Em outras situações do dia a dia também.`,
    q3: `Em casa`,
    q4: `Principalmente facilitar a vida cotidiana.`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Sim, uso bastante no dia a dia.`,
    q8: `Pesquisas`,
    q9: `Ajuda a nós conectarmos com as pessoas da escola mais facilmente.`,
    q10: `Atualmente é muito acessível vermos conteúdos vindos de outros países.`,
    q11: `Sim`,
    q12: `Notificações/mensagens`,
    q13: `Procuro em outras fontes`,
    q14: `Raramente`,
    q15: `Usar a tecnologia com equilíbrio`,
    q16: `Bom`,
    q17: `a conexão com a internet e os notebooks do LIM`,
    q18: `proteção de dados`,
    q19: `palestra com especialista`,
  },
  {
    q1: `Novidade`,
    q2: `Em vários momentos do dia.`,
    q3: `Na escola`,
    q4: `Ajudar as pessoas no dia a dia.`,
    q5: `Ativo`,
    q6: `Sim, frequentemente`,
    q7: `Isso para me ajudar nas matérias.`,
    q8: `Pesquisas`,
    q9: `Facilita a comunicação entre os colegas.`,
    q10: `Sim, muito, principalmente por meio das redes sociais.`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Respeitar outras pessoas`,
    q16: `Excelente`,
    q17: `O laboratório de informática.`,
    q18: `Saber fazer vídeos.`,
    q19: `Trabalhos em grupo`,
  },
  {
    q1: `Inovações.`,
    q2: `Não, a tecnologia está presente em muitas ações do cotidiano, como nos estudos, comunicação, trabalho e etc.`,
    q3: `Na comunicação`,
    q4: `Facilitar a comunicação, o acesso a trabalho e estudos`,
    q5: `Ativo`,
    q6: `Raramente`,
    q7: `Para fazer pesquisar, realizar trabalhos e estudar.`,
    q8: `Pesquisas`,
    q9: `Compartilhar pesquisas e informações que colaboram para a organização do trabalho.`,
    q10: `Na praticidade e na rapidez em pesquisas, notícias, livros e etc.`,
    q11: `Sim`,
    q12: `Jogos`,
    q13: `Verifico quem publicou`,
    q14: `Às vezes`,
    q15: `Usar a tecnologia com equilíbrio`,
    q16: `Bom`,
    q17: `Não sei`,
    q18: `Pesquisar de forma criativa.`,
    q19: `Poderiam ajudar/ensinar os alunos a verificar se um site é seguro ou não.`,
  },
  {
    q1: `Rapidez`,
    q2: `Tecnologia é tudo o que simplifica o cotidiano das pessoas.`,
    q3: `Em outras situações`,
    q4: `O papel da tecnologia atualmente é ajudar a sociedade a evoluir.`,
    q5: `Um pouco dos dois`,
    q6: `Nunca`,
    q7: `Utilizo para me ajudar e guiar nos estudos.`,
    q8: `Vídeos`,
    q9: `Ela ajuda a compartilhar e criar projetos em conjunto.`,
    q10: `Ela apresenta diversos conteúdos que me permitem ter mais conhecimento sobre.`,
    q11: `Não`,
    q12: `Outro`,
    q13: `Comparo com sites confiáveis`,
    q14: `Sempre`,
    q15: `Todos os anteriores`,
    q16: `Regular`,
    q17: `Poderia ser oferecidos mais recursos e estabilidade.`,
    q18: `Automação com IA`,
    q19: `Oferecer mais recursos`,
  },
  {
    q1: `Futuro`,
    q2: `Em todas as situações`,
    q3: `Na escola`,
    q4: `Aprimorar o desenvolvimento humano`,
    q5: `Ativo`,
    q6: `Sim, frequentemente`,
    q7: `De modo guiado ao aprendizado de conteúdos complicados`,
    q8: `Pesquisas`,
    q9: `Na organização das funções e qualidade acadêmica`,
    q10: `Por meio de sites com ebooks e notícias`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Respeitar outras pessoas`,
    q16: `Excelente`,
    q17: `A maneira como a tecnologia é abordada nas escolas`,
    q18: `Programação de IA`,
    q19: `Não tenho nenhuma sugestão no momento.`,
  },
  {
    q1: `Avanço`,
    q2: `Está presente em praticamente tudo`,
    q3: `Em outras situações`,
    q4: `Ajuda e auxiliar com determinadas coisas, além de promover maior informações`,
    q5: `Um pouco dos dois`,
    q6: `Raramente`,
    q7: `Pesquisando o que me causa dúvidas`,
    q8: `Vídeos`,
    q9: `Ajuda na separação de funções de forma organizada`,
    q10: `Ao passar do tempo e de sua evolução ela se tornou potente`,
    q11: `Sim`,
    q12: `Uso excessivo do celular`,
    q13: `Comparo com sites confiáveis`,
    q14: `Às vezes`,
    q15: `Todos os anteriores`,
    q16: `Regular`,
    q17: `Não sei dizer o que poderia melhorar.`,
    q18: `Não sei ao certo qual competência gostaria de desenvolver.`,
    q19: `Avançar cada vez mais na tecnologia de maneira consciente`,
  },
  {
    q1: `Inovação`,
    q2: `Não. A tecnologia também está presente em situações como comunicação, estudos, trabalho, transporte e até tarefas de casa.`,
    q3: `Na escola`,
    q4: `A tecnologia ajuda a facilitar a vida das pessoas, melhorar a comunicação e aumentar o acesso à informação`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Uso a tecnologia para pesquisar conteúdos, assistir a videoaulas, fazer trabalhos e estudar para as provas.`,
    q8: `Pesquisas`,
    q9: `Ajuda a compartilhar ideias, fazer trabalhos juntos e se comunicar com os colegas de forma mais rápida`,
    q10: `Ela facilita o acesso a notícias, livros, vídeos, músicas, filmes e diferentes culturas`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Não espalhar informações falsas`,
    q16: `Excelente`,
    q17: `Acho que poderia ter mais atividades usando a tecnologia e mais orientação sobre como usar a internet de forma segura e responsável`,
    q18: `Gostaria de melhorar minha capacidade de pesquisar e identificar informações confiáveis na internet`,
    q19: `A escola pode oferecer atividades, projetos e aulas que ensinem a usar melhor as ferramentas digitais e a verificar informações`,
  },
  {
    q1: `Avanço e retrocesso`,
    q2: `Está presente no nosso dia a dia.`,
    q3: `Em casa`,
    q4: `Ajudar e ensinar como forma de apoio.`,
    q5: `Ativo`,
    q6: `Às vezes`,
    q7: `Na área do estudo.`,
    q8: `Pesquisas`,
    q9: `Ajuda a compreender melhor o conteúdo e aprender.`,
    q10: `Mostrando outras visões do mundo e diferentes pontos de vista.`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Não espalhar informações falsas`,
    q16: `Bom`,
    q17: `No momento não vejo nada que precise mudar.`,
    q18: `Linguagens de programação.`,
    q19: `Ensinar o equilíbrio no uso da tecnologia.`,
  },
  {
    q1: `Inovação`,
    q2: `Está presente em outras situações, como livros sendo uma tecnologia arcaica porém funcional`,
    q3: `Na escola`,
    q4: `Auxílio de atividades diárias`,
    q5: `Ativo`,
    q6: `Sim, frequentemente`,
    q7: `De maneira moderada e regulada, fazendo breves pesquisas para aplicação`,
    q8: `Pesquisas`,
    q9: `Auxilia pro processo didático, com uma variedade explicativa de conceitos e de técnicas de ensino`,
    q10: `Facilitou por meio de imagens, vídeos e até mesmo áudios`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Respeitar outras pessoas`,
    q16: `Excelente`,
    q17: `Comprar novos aparelhos como os computadores móveis que podem ser utilizados nas salas de aula`,
    q18: `Gostaria de desenvolver várias competências digitais, como programação e design.`,
    q19: `Melhorar o artifícios utilizados na escola para a área da tecnologia (como por exemplo os computadores móveis)`,
  },
  {
    q1: `Celular`,
    q2: `Está presente em outras situações do cotidiano, nas indústrias etc`,
    q3: `Na escola`,
    q4: `Auxiliar o desenvolvimento social e econômicos das pessoas`,
    q5: `Ativo`,
    q6: `Sim, frequentemente`,
    q7: `Sim, faço SENAI`,
    q8: `Pesquisas`,
    q9: `Ajuda estabelecer a comunicação mútua das equipes`,
    q10: `Através de vídeos e sites culturais`,
    q11: `Sim`,
    q12: `Redes sociais`,
    q13: `Procuro em outras fontes`,
    q14: `Nunca`,
    q15: `Respeitar outras pessoas`,
    q16: `Excelente`,
    q17: `Uma rede wi-fi mais estável`,
    q18: `Gerenciamento de dados e informações`,
    q19: `Palestras e cursos`,
  },
  {
    q1: `Celular`,
    q2: `Está presente em outras situações do cotidiano.`,
    q3: `Na comunicação`,
    q4: `Ajudar as pessoas no dia a dia.`,
    q5: `Um pouco dos dois`,
    q6: `Raramente`,
    q7: `Uso para pesquisar e estudar.`,
    q8: `Vídeos`,
    q9: `Facilita a comunicação entre os grupos.`,
    q10: `Trouxe acesso mais rápido a notícias e cultura.`,
    q11: `Sim`,
    q12: `Uso excessivo do celular`,
    q13: `Comparo com sites confiáveis`,
    q14: `Às vezes`,
    q15: `Todos os anteriores`,
    q16: `Regular`,
    q17: `Melhorar a internet da escola.`,
    q18: `Inteligência artificial.`,
    q19: `Oferecer mais cursos práticos.`,
  },];

/* ------------------------------------------------------------
   HELPERS DE CONTAGEM
   ------------------------------------------------------------ */

function count(field, options){
  const c = {};
  options.forEach(o => c[o] = 0);
  RESPONSES.forEach(r => { if(r[field] in c) c[r[field]]++; });
  return c;
}

function countFreeform(field, limit=8){
  const c = {};
  RESPONSES.forEach(r => {
    const v = (r[field]||"").trim();
    if(!v) return;
    c[v] = (c[v]||0) + 1;
  });
  return Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,limit);
}

// Categorias definidas manualmente a partir da leitura de todas as 26
// respostas abertas — não é contagem de palavra solta, é a ideia central
// de cada resposta, agrupada por tema.
const THEME_DATA = {
  q7: [
    ["Apoio geral nos estudos", 11],
    ["Pesquisas escolares", 7],
    ["Vídeo-aulas", 4],
    ["Cursos (SENAI/online)", 3],
    ["Trabalhos e apresentações", 1],
  ],
  q9: [
    ["Organização de tarefas", 7],
    ["Comunicação à distância", 4],
    ["Compartilhamento de documentos", 4],
    ["Conexão entre colegas", 4],
    ["Pesquisa em grupo", 4],
    ["Comunicação com escola/pais", 3],
  ],
  q10: [
    ["Culturas de outros lugares", 7],
    ["Pesquisas e conhecimento", 5],
    ["Notícias e atualidades", 5],
    ["Vídeos e conteúdo audiovisual", 4],
    ["Redes sociais e mídia digital", 3],
    ["Música", 2],
  ],
  q17: [
    ["Internet/wifi mais estável", 7],
    ["Equipamentos/notebooks", 6],
    ["Nada a melhorar", 4],
    ["Orientação e uso consciente", 4],
    ["Mais aulas práticas", 3],
    ["Não sei", 2],
  ],
  q19: [
    ["Nada a acrescentar / não sei", 8],
    ["Cursos e palestras", 6],
    ["Orientação sobre uso seguro", 5],
    ["Outro (equipamentos, incentivo)", 4],
    ["Mais aulas práticas", 3],
  ],
};

/* ------------------------------------------------------------
   GRÁFICOS (Chart.js)
   ------------------------------------------------------------ */

const CHART_COLORS = ["#6153d3","#0f9c7f","#d64570","#c97a12","#3d7fd6","#8a5cc7","#4a9d5f"];
const charts = {};

function baseBarOptions(horizontal=false){
  const isMobile = window.innerWidth < 640;
  return {
    indexAxis: horizontal ? 'y' : 'x',
    responsive:true, maintainAspectRatio:false,
    layout:{ padding:{ left: horizontal ? 4 : 0 } },
    animation:{ duration:700, easing:'easeOutQuint' },
    plugins:{ legend:{display:false}, tooltip:{
      backgroundColor:"#16160f", titleColor:"#fff", bodyColor:"#fff",
      padding:10, titleFont:{family:"Poppins"}, bodyFont:{family:"Poppins"}, cornerRadius:8
    }},
    scales:{
      x:{ grid:{color:"rgba(20,20,15,.06)"}, ticks:{color:"#77756a", font:{family:"Poppins", size:isMobile?9:11}} },
      y:{
        grid:{display:!horizontal, color:"rgba(20,20,15,.06)"},
        ticks:{
          color:"#77756a", font:{family:"Poppins", size:isMobile?9:11},
          autoSkip:false,
          crossAlign: horizontal ? "far" : "center"
        },
        afterFit: (scale) => {
          if(horizontal) scale.width = isMobile ? 108 : 150;
        }
      }
    }
  };
}

function renderBar(canvasId, labels, data, horizontal=false){
  const ctx = document.getElementById(canvasId);
  if(charts[canvasId]) charts[canvasId].destroy();
  charts[canvasId] = new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets:[{ data, backgroundColor: labels.map((_,i)=>CHART_COLORS[i%CHART_COLORS.length]), borderRadius:6, maxBarThickness: horizontal?22:34 }] },
    options: baseBarOptions(horizontal)
  });
}

function renderDonut(canvasId, labels, data){
  const ctx = document.getElementById(canvasId);
  if(charts[canvasId]) charts[canvasId].destroy();
  charts[canvasId] = new Chart(ctx, {
    type:'doughnut',
    data:{ labels, datasets:[{ data, backgroundColor: labels.map((_,i)=>CHART_COLORS[i%CHART_COLORS.length]), borderColor:"#ffffff", borderWidth:3 }] },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:"68%",
      animation:{ duration:700, easing:'easeOutQuint' },
      plugins:{ legend:{display:false} }
    }
  });
}

function buildLegend(containerId, labels, data){
  const total = data.reduce((a,b)=>a+b,0) || 1;
  const el = document.getElementById(containerId);
  el.innerHTML = labels.map((l,i)=>{
    const pct = Math.round((data[i]/total)*100);
    return `<span><i style="background:${CHART_COLORS[i%CHART_COLORS.length]}"></i>${l} — ${pct}%</span>`;
  }).join("");
}

/* ------------------------------------------------------------
   DEFINIÇÃO DAS PERGUNTAS / CARDS
   ------------------------------------------------------------ */

const QUESTION_CARDS = [
  {grid:"grid-1", type:"chart", horizontal:false, num:"Pergunta 3", text:"Em quais situações do dia a dia você percebe mais a tecnologia?",
    field:"q3", options:["Na escola","Em casa","No trabalho","Na comunicação","No transporte","Em outras situações"]},
  {grid:"grid-1", type:"donut", num:"Pergunta 5", text:"Você se considera um(a) usuário(a) ativo(a) ou passivo(a)?",
    field:"q5", options:["Ativo","Passivo","Um pouco dos dois","Não sei"]},
  {grid:"grid-1", type:"chart", horizontal:false, num:"Pergunta 6", text:"Você costuma produzir conteúdos, opiniões ou criações digitais?",
    field:"q6", options:["Sim, frequentemente","Às vezes","Raramente","Nunca"]},
  {grid:"grid-1", type:"words", num:"Pergunta 1", text:"Quando pensa em tecnologia, o que vem à sua mente?", field:"q1"},

  {grid:"grid-2", type:"chart", horizontal:true, num:"Pergunta 8", text:"Como a tecnologia contribui para a sua aprendizagem?",
    field:"q8", options:["Pesquisas","Vídeos","Aplicativos","Jogos educativos","Comunicação"]},
  {grid:"grid-2", type:"text", num:"Pergunta 9", text:"Como a tecnologia ajuda no trabalho em equipe e na colaboração na escola?", field:"q9"},
  {grid:"grid-2", type:"text", num:"Pergunta 10", text:"Como a tecnologia ampliou seu acesso à informação e à cultura?", field:"q10"},
  {grid:"grid-2", type:"text", num:"Pergunta 7", text:"Como você utiliza a tecnologia para sua formação e aprendizado?", field:"q7"},

  {grid:"grid-3", type:"donut", num:"Pergunta 11", text:"A tecnologia já atrapalhou sua concentração ou aprendizagem?",
    field:"q11", options:["Sim","Não"]},
  {grid:"grid-3", type:"chart", horizontal:true, num:"Pergunta 12", text:"Se sim, como isso aconteceu?",
    field:"q12", options:["Redes sociais","Notificações/mensagens","Jogos","Vídeos","Uso excessivo do celular","Outro"]},
  {grid:"grid-3", type:"chart", horizontal:true, num:"Pergunta 13", text:"Como você verifica se uma informação da internet é confiável?",
    field:"q13", options:["Procuro em outras fontes","Verifico quem publicou","Comparo com sites confiáveis","Pergunto para alguém","Normalmente não verifico"]},
  {grid:"grid-3", type:"chart", horizontal:false, num:"Pergunta 14", text:"A tecnologia já causou dificuldade nas suas relações com outras pessoas?",
    field:"q14", options:["Nunca","Raramente","Às vezes","Frequentemente","Sempre"]},
  {grid:"grid-3", type:"chart", horizontal:true, wide:true, num:"Pergunta 15", text:"O que você considera mais importante para usar a tecnologia de forma ética e responsável?",
    field:"q15", options:["Respeitar outras pessoas","Não espalhar informações falsas","Proteger dados pessoas","Respeitar a privacidade","Usar a tecnologia com equilíbrio","Todos os anteriores"]},

  {grid:"grid-4", type:"donut", num:"Pergunta 16", text:"Como você avalia o uso da tecnologia na escola?",
    field:"q16", options:["Excelente","Bom","Regular","Ruim","Muito ruim"]},
  {grid:"grid-4", type:"words", num:"Pergunta 18", text:"Qual competência digital você gostaria de desenvolver?", field:"q18"},
  {grid:"grid-4", type:"text", num:"Pergunta 17", text:"O que poderia melhorar no uso da tecnologia na escola?", field:"q17"},
  {grid:"grid-4", type:"text", num:"Pergunta 19", text:"O que a escola pode fazer para apoiar esse desenvolvimento?", field:"q19"},
];

function cardHTML(q, idx){
  const canvasId = `c-${idx}`;
  const wideClass = q.wide ? " wide" : "";
  if(q.type === "chart" || q.type === "donut"){
    return `
    <div class="q-card${wideClass}" data-type="closed">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="chart-holder ${q.type==='donut' ? 'short' : ''}">
        <canvas id="${canvasId}" role="img" aria-label="${q.text}"></canvas>
      </div>
      ${q.type==='donut' ? `<div class="legend-row" id="legend-${idx}"></div>` : ""}
    </div>`;
  }
  if(q.type === "words"){
    return `
    <div class="q-card" data-type="open">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="word-answers" id="words-${idx}"></div>
    </div>`;
  }
  return `
    <div class="q-card" data-type="open">
      <div class="q-card-head">
        <div>
          <div class="q-num">${q.num}</div>
          <div class="q-text">${q.text}</div>
        </div>
        <button class="view-toggle" data-idx="${idx}" data-view="list" aria-label="Alternar entre lista e gráfico">
          <svg viewBox="0 0 16 16" fill="none"><path d="M2 13V7M6.5 13V3M11 13V9M15 13V5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Ver como gráfico</span>
        </button>
      </div>
      <div class="text-answers" id="text-${idx}"></div>
      <div class="chart-holder" id="chart-wrap-${idx}" hidden>
        <canvas id="c-${idx}" role="img" aria-label="Temas mais citados — ${q.text}"></canvas>
      </div>
    </div>`;
}

function buildCards(){
  QUESTION_CARDS.forEach((q, idx) => {
    document.getElementById(q.grid).insertAdjacentHTML("beforeend", cardHTML(q, idx));
  });
}

/* ------------------------------------------------------------
   KPIs
   ------------------------------------------------------------ */

function updateKPIs(){
  document.getElementById("kpi-total").textContent = RESPONSES.length;
  document.getElementById("trend-total").textContent = `${RESPONSES.length} no total`;

  const active = RESPONSES.filter(r => r.q5 === "Ativo").length;
  document.getElementById("kpi-active").textContent = RESPONSES.length ? Math.round((active/RESPONSES.length)*100)+"%" : "0%";

  const distracted = RESPONSES.filter(r => r.q11 === "Sim").length;
  document.getElementById("kpi-distraction").textContent = RESPONSES.length ? Math.round((distracted/RESPONSES.length)*100)+"%" : "0%";

  const rank = {"Excelente":5,"Bom":4,"Regular":3,"Ruim":2,"Muito ruim":1};
  const vals = RESPONSES.map(r => rank[r.q16]).filter(Boolean);
  const avg = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
  const labelByAvg = avg>=4.5?"Excelente":avg>=3.5?"Bom":avg>=2.5?"Regular":avg>=1.5?"Ruim":avg>0?"Muito ruim":"—";
  document.getElementById("kpi-school").textContent = labelByAvg;
}

/* ------------------------------------------------------------
   RENDER GERAL
   ------------------------------------------------------------ */

function renderAll(){
  QUESTION_CARDS.forEach((q, idx) => {
    if(q.type === "chart"){
      const c = count(q.field, q.options);
      renderBar(`c-${idx}`, q.options, q.options.map(o=>c[o]), q.horizontal);
    } else if(q.type === "donut"){
      const c = count(q.field, q.options);
      const data = q.options.map(o=>c[o]);
      renderDonut(`c-${idx}`, q.options, data);
      buildLegend(`legend-${idx}`, q.options, data);
    } else if(q.type === "words"){
      const top = countFreeform(q.field, 8);
      const el = document.getElementById(`words-${idx}`);
      el.innerHTML = top.length
        ? top.map(([w,n],i) => `<span class="word-pill" style="animation-delay:${i*45}ms"><em>${n}</em>${w}</span>`).join("")
        : `<span class="word-pill">Sem respostas ainda</span>`;
    } else if(q.type === "text"){
      const el = document.getElementById(`text-${idx}`);
      const answers = RESPONSES.slice().reverse().filter(r => r[q.field]);
      el.innerHTML = answers.length
        ? answers.map(r => `<div class="text-answer-row"><span>${r[q.field]}</span></div>`).join("")
        : `<div class="text-answer-row">Sem respostas ainda.</div>`;

      const top = THEME_DATA[q.field] || [];
      if(top.length){
        renderBar(`c-${idx}`, top.map(([w])=>w), top.map(([,n])=>n), true);
      }
    }
  });
  updateKPIs();
}

/* ------------------------------------------------------------
   ANIMAÇÕES DE ENTRADA (reveal on scroll, estilo motion.dev)
   ------------------------------------------------------------ */

function initReveal(){
  const items = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || "0", 10);
        setTimeout(() => el.classList.add('in'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach(el => io.observe(el));
}

function revealCards(){
  const cards = document.querySelectorAll('.q-card:not(.in)');
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('in'), i * 45);
  });
}

/* ------------------------------------------------------------
   BOOT
   ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("status-label").textContent = `${RESPONSES.length} respostas carregadas`;

  buildCards();
  renderAll();
  initReveal();
  revealCards();

  document.getElementById("refresh-btn").addEventListener("click", (e) => {
    e.currentTarget.classList.add("spinning");
    renderAll();
    setTimeout(() => e.currentTarget.classList.remove("spinning"), 500);
  });

  document.querySelectorAll(".view-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.idx;
      const listEl = document.getElementById(`text-${idx}`);
      const chartEl = document.getElementById(`chart-wrap-${idx}`);
      const showingList = btn.dataset.view === "list";

      if(showingList){
        listEl.hidden = true;
        chartEl.hidden = false;
        btn.dataset.view = "chart";
        btn.classList.add("active");
        btn.querySelector("span").textContent = "Ver respostas";
      } else {
        listEl.hidden = false;
        chartEl.hidden = true;
        btn.dataset.view = "list";
        btn.classList.remove("active");
        btn.querySelector("span").textContent = "Ver como gráfico";
      }
    });
  });

  document.querySelectorAll(".f-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".f-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".q-card").forEach(card => {
        const type = card.dataset.type;
        card.style.display = (filter === "all" || filter === type) ? "" : "none";
      });
    });
  });
});