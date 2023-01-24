import { IConversation } from "../../models/chat/conversation";

export const contents: string[] = [
  "Hi",
  "Hello",
  "How are you today?",
  "What a good day to go outside !",
  "Let's start",
  "How the weather today?",
  "Random message ...",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Vivamus a arcu auctor, lobortis nisl ut, fringilla odio.",
  "Duis id orci consectetur, placerat urna id, dapibus tellus.",
  "Maecenas sit amet augue ut odio rutrum pellentesque.",
  "Sed non diam semper, pulvinar metus at, rutrum elit.",
  "Pellentesque ut ex porta, mattis tellus id, aliquam ligula.",
  "In lacinia erat ac varius dapibus.",
  "Proin id lorem at mi tristique pharetra.",
  "Sed tempor nibh id erat ultricies, ut finibus lorem condimentum.",
  "Cras eu massa vel lectus gravida faucibus at mollis nisl.",
  "Nulla eget neque ullamcorper, ultrices est in, bibendum nibh.",
  "Curabitur porttitor lorem at vulputate accumsan.",
  "Nullam id dui quis ex sodales faucibus.",
  "Fusce vulputate neque id elit hendrerit, nec fermentum lectus iaculis.",
  "Aliquam venenatis ante non leo convallis vestibulum.",
  "Morbi euismod neque eu libero feugiat, sodales accumsan mi condimentum.",
  "Aliquam vel tellus ut metus aliquam cursus.",
  "In vel enim cursus, vehicula ligula vitae, bibendum ipsum.",
  "Curabitur congue justo at lobortis dapibus.",
  "Quisque efficitur quam ut elit porttitor eleifend.",
  "In congue leo a felis aliquet mattis.",
  "Vestibulum accumsan dui nec massa blandit fermentum.",
  "Nunc non tellus ac velit rhoncus efficitur at ut ex.",
  "Maecenas mollis nisl vel ligula porttitor, quis tempor metus pharetra.",
  "Maecenas ac orci ut nisl efficitur molestie vitae vitae eros.",
  "ok",
  "yup",
  "Sure",
  "Have a good day",
  "Good morning",
  "Good afternoon",
  "Good evening",
  "Bye",
  "see you soon",
  "see you later",
  "see you tomorrow",
  "bruh lfmao",
  "cak cak",
  "meo~",
  "oh no...",
  "im so sorry",
  "hm, i need more time",
  "Etiam sagittis eros ac vulputate commodo.",
  "Fusce et justo eu ipsum porttitor consectetur.",
  "Morbi eget risus in arcu lobortis mattis.",
  "Etiam vitae odio vel dui pellentesque gravida.",
  "Integer posuere odio nec pharetra faucibus.",
  "Mauris sit amet dui id ligula ornare placerat cursus vitae quam.",
];
const name = [
  "Ariana Wattson",
  "Jane Fisher",
  "William Howard",
  "Kristen Copper",
  "Tony Reichert",
  "Tabitha Chen",
  "Alyssia Reese",
  "Chaim Hampton",
  "Aishah Rivera",
  "Irene Jordan",
  "Marie Clements",
  "Stephanie Hanson",
  "Neo Castillo",
  "Julian Andersen",
  "Leona Hartman",
];
const status = ["online", "offline"];

export function generateRandomData(amount: number = 15) {
  const data: IConversation[] = [];
  for (let i = 0; i < amount; i++) {
    const randomContent = contents[Math.floor(Math.random() * contents.length)];
    const randomName = name[Math.floor(Math.random() * name.length)];
    const randomStatus = status[Math.floor(Math.random() * status.length)];
    data.push({
      id: i + 1,
      from: {
        userName: randomName,
        avatarSrc:
          Math.floor(Math.random() * 2) === 1
            ? "https://i.pravatar.cc/?u=" + i
            : "",
      },
      unseen: Math.floor(Math.random() * 10),
      lastMessage: randomContent,
      status: randomStatus,
    });
  }
  return data;
}
