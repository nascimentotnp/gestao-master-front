export interface FooterItem {
  name?: string;
  icon: string;
  link: string;
  category: 'social' | 'internal';
}

export const footer_items: FooterItem[] = [
  {
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/gestao.master?igsh=MWM1Zjh4eDQxaHdicw==",
    category: 'social',
  },
  {
    name: "Sobre",
    icon: "fas fa-address-card",
    link: "/sobre",
    category: 'internal',
  },
  {
    name: "Contato",
    icon: "fas fa-phone-alt",
    link: "/contato",
    category: 'internal',
  },
];
