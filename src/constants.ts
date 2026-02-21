export type Language = 'pt' | 'en' | 'es' | 'zh';

export interface Translation {
  nav: {
    about: string;
    products: string;
    logistics: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
    mission: string;
    missionText: string;
    values: string;
    valuesText: string;
  };
  products: {
    title: string;
    coffee: string;
    coffeeDesc: string;
    corn: string;
    cornDesc: string;
    soy: string;
    soyDesc: string;
    grains: string;
    grainsDesc: string;
  };
  logistics: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    address: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  pt: {
    nav: { about: 'Quem Somos', products: 'Produtos', logistics: 'Logística', contact: 'Contato' },
    hero: {
      title: 'Conectando o Campo ao Mercado Global',
      subtitle: 'Excelência na exportação de commodities agrícolas com solidez e confiança.',
      cta: 'Nossos Produtos'
    },
    about: {
      title: 'Sobre a Comercial Estrela São João',
      content: 'Com sede em São João do Ivaí, Paraná, a Comercial Estrela São João Ltda. é uma trading company dedicada a levar o melhor da produção agrícola brasileira para o mundo. Atuamos com transparência e eficiência em toda a cadeia de exportação.',
      mission: 'Missão',
      missionText: 'Prover soluções logísticas e comerciais de excelência para o agronegócio, conectando produtores brasileiros a mercados internacionais.',
      values: 'Valores',
      valuesText: 'Integridade, Compromisso, Sustentabilidade e Foco no Cliente.'
    },
    products: {
      title: 'Nossas Commodities',
      coffee: 'Café',
      coffeeDesc: 'Grãos selecionados das melhores regiões produtoras do Brasil.',
      corn: 'Milho',
      cornDesc: 'Milho de alta qualidade para consumo humano e animal.',
      soy: 'Soja',
      soyDesc: 'Líder mundial em produção, entregamos soja com padrão internacional.',
      grains: 'Grãos em Geral',
      grainsDesc: 'Diversidade de grãos com rigoroso controle de qualidade.'
    },
    logistics: {
      title: 'Logística e Exportação',
      content: 'Nossa expertise logística garante que os produtos cheguem ao destino final com agilidade e segurança. Operamos nos principais portos do Brasil, cuidando de toda a documentação e trâmite aduaneiro.'
    },
    contact: {
      title: 'Fale Conosco',
      name: 'Nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso!'
    },
    footer: {
      address: 'Rua Dr. José Alves Costa, 698, Centro, São João do Ivaí, PR',
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: { about: 'About Us', products: 'Products', logistics: 'Logistics', contact: 'Contact' },
    hero: {
      title: 'Connecting the Field to the Global Market',
      subtitle: 'Excellence in agricultural commodity exports with solidity and trust.',
      cta: 'Our Products'
    },
    about: {
      title: 'About Comercial Estrela São João',
      content: 'Based in São João do Ivaí, Paraná, Comercial Estrela São João Ltda. is a trading company dedicated to bringing the best of Brazilian agricultural production to the world. We operate with transparency and efficiency throughout the export chain.',
      mission: 'Mission',
      missionText: 'To provide excellence in logistical and commercial solutions for agribusiness, connecting Brazilian producers to international markets.',
      values: 'Values',
      valuesText: 'Integrity, Commitment, Sustainability, and Customer Focus.'
    },
    products: {
      title: 'Our Commodities',
      coffee: 'Coffee',
      coffeeDesc: 'Selected beans from the best producing regions in Brazil.',
      corn: 'Corn',
      cornDesc: 'High-quality corn for human and animal consumption.',
      soy: 'Soy',
      soyDesc: 'World leader in production, we deliver soy with international standards.',
      grains: 'General Grains',
      grainsDesc: 'Diversity of grains with rigorous quality control.'
    },
    logistics: {
      title: 'Logistics and Export',
      content: 'Our logistical expertise ensures that products reach their final destination quickly and safely. We operate in the main ports of Brazil, taking care of all documentation and customs procedures.'
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!'
    },
    footer: {
      address: 'Rua Dr. José Alves Costa, 698, Centro, São João do Ivaí, PR',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: { about: 'Quiénes Somos', products: 'Productos', logistics: 'Logística', contact: 'Contacto' },
    hero: {
      title: 'Conectando el Campo al Mercado Global',
      subtitle: 'Excelencia en la exportación de commodities agrícolas con solidez y confianza.',
      cta: 'Nuestros Productos'
    },
    about: {
      title: 'Sobre Comercial Estrela São João',
      content: 'Con sede en São João do Ivaí, Paraná, Comercial Estrela São João Ltda. es una empresa comercial dedicada a llevar lo mejor de la producción agrícola brasileña al mundo. Operamos con transparencia y eficiencia en toda la cadena de exportación.',
      mission: 'Misión',
      missionText: 'Proveer soluciones logísticas y comerciales de excelencia para el agronegocio, conectando a los productores brasileños con los mercados internacionales.',
      values: 'Valores',
      valuesText: 'Integridad, Compromiso, Sostenibilidad y Enfoque en el Cliente.'
    },
    products: {
      title: 'Nuestras Commodities',
      coffee: 'Café',
      coffeeDesc: 'Granos seleccionados de las mejores regiones productoras de Brasil.',
      corn: 'Maíz',
      cornDesc: 'Maíz de alta calidad para consumo humano y animal.',
      soy: 'Soja',
      soyDesc: 'Líder mundial en producción, entregamos soja con estándares internacionales.',
      grains: 'Granos en General',
      grainsDesc: 'Diversidad de granos con riguroso control de calidad.'
    },
    logistics: {
      title: 'Logística y Exportación',
      content: 'Nuestra experiencia logística garantiza que los productos lleguen a su destino final con agilidad y seguridad. Operamos en los principales puertos de Brasil, encargándonos de toda la documentación y trámites aduaneros.'
    },
    contact: {
      title: 'Contáctenos',
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado con éxito!'
    },
    footer: {
      address: 'Rua Dr. José Alves Costa, 698, Centro, São João do Ivaí, PR',
      rights: 'Todos los derechos reservados.'
    }
  },
  zh: {
    nav: { about: '关于我们', products: '产品', logistics: '物流', contact: '联系我们' },
    hero: {
      title: '连接田野与全球市场',
      subtitle: '以稳固和信任，卓越地出口农产品。',
      cta: '我们的产品'
    },
    about: {
      title: '关于 Comercial Estrela São João',
      content: 'Comercial Estrela São João Ltda. 总部位于巴拉那州圣若昂杜伊瓦伊，是一家致力于将巴西最好的农业生产带向世界的贸易公司。我们在整个出口链中透明高效地运作。',
      mission: '使命',
      missionText: '为农业综合企业提供卓越的物流和商业解决方案，将巴西生产商与国际市场联系起来。',
      values: '价值观',
      valuesText: '诚信、承诺、可持续发展和以客户为中心。'
    },
    products: {
      title: '我们的商品',
      coffee: '咖啡',
      coffeeDesc: '选自巴西最佳产区的咖啡豆。',
      corn: '玉米',
      cornDesc: '用于人类和动物消费的高质量玉米。',
      soy: '大豆',
      soyDesc: '全球生产领导者，我们提供符合国际标准的大豆。',
      grains: '各类谷物',
      grainsDesc: '谷物多样性，严格质量控制。'
    },
    logistics: {
      title: '物流与出口',
      content: '我们的物流专业知识确保产品快速安全地到达最终目的地。我们在巴西的主要港口运营，负责所有文件和海关手续。',
    },
    contact: {
      title: '联系我们',
      name: '姓名',
      email: '电子邮件',
      subject: '主题',
      message: '信息',
      send: '发送信息',
      success: '信息发送成功！'
    },
    footer: {
      address: 'Rua Dr. José Alves Costa, 698, Centro, São João do Ivaí, PR',
      rights: '版权所有。'
    }
  }
};
