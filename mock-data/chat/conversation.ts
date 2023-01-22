import { IConversation } from "../../models/chat/conversation";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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

export default function generateRandomData(amount: number = 15) {
  const data: IConversation[] = [];
  for (let i = 0; i < amount; i++) {
    const randomLength = Math.floor(Math.random() * 25)+5;
    const randomContent = content.slice(
      Math.floor(Math.random() * 15),
      randomLength
    );
    const randomName = name[Math.floor(Math.random() * (name.length - 1))];
    data.push({
      id: i+1,
      from: {
        userName: randomName,
        avatarSrc: "https://i.pravatar.cc/"
      },
      unseen: Math.floor(Math.random() * 100),
      lastMessage: randomContent
    })
  }
  return data
}
