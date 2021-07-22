
const emojis = ["😀", "😁", "😃", "😇", "😈", "😎", "😙"];
const arrayLength = emojis.length;
export const genereteEmoji = () => {
    const index = Math.floor(Math.random() * arrayLength);
    return emojis[index];
};
