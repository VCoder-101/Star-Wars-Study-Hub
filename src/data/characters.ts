export interface Character {
  id: number;
  name: string;
  role: "Jedi" | "Sith" | "Droid" | "Rebel";
  image: string;
  description: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Luke Skywalker",
    role: "Jedi",
    image: "/src/assets/characters/luke.png",
    description: "Легендарный рыцарь-джедай, сын Энакина Скайуокера."
  },
  {
    id: 2,
    name: "Darth Vader",
    role: "Sith",
    image: "/src/assets/characters/vader.png",
    description: "Ситх-лорд, бывший джедай Энакин Скайуокер."
  },
  {
    id: 3,
    name: "Obi-Wan Kenobi",
    role: "Jedi",
    image: "/src/assets/characters/obiwan.png",
    description: "Мастер-джедай, наставник Энакина и Люка."
  },
  {
    id: 4,
    name: "Yoda",
    role: "Jedi",
    image: "/src/assets/characters/yoda.png",
    description: "Великий мастер-джедай, один из сильнейших."
  },
  {
    id: 5,
    name: "Darth Maul",
    role: "Sith",
    image: "/src/assets/characters/maul.png",
    description: "Ученик Дарта Сидиуса, мастер боя на световых мечах."
  },
  {
    id: 6,
    name: "R2-D2",
    role: "Droid",
    image: "/src/assets/characters/r2d2.png",
    description: "Астромеханический дроид, верный помощник Скайуокеров."
  },
  {
    id: 7,
    name: "Han Solo",
    role: "Rebel",
    image: "/src/assets/characters/hansolo.png",
    description: "Контрабандист, капитан «Тысячелетнего сокола»."
  },
  {
    id: 8,
    name: "Princess Leia",
    role: "Rebel",
    image: "/src/assets/characters/leia.png",
    description: "Лидер повстанцев, сестра Люка Скайуокера."
  },
  {
    id: 9,
    name: "Asoka Tano",
    role: "Jedi",
    image: "/src/assets/characters/asoka.png",
    description: "Ученица Энакина Скайуокера, позже ставшая независимым джедаем."
  },
  {
    id: 10,
    name: "C-3PO",
    role: "Droid",
    image: "/src/assets/characters/c3po.png",
    description: "Протокольный дроид, владеющий 6 миллионами языков."
  }
];
