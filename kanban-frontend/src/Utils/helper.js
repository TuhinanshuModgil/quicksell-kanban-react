export const pastelColors = [
    "#FFB3BA", // Light Pink
    "#FFDFBA", // Light Orange
    "#FFFFBA", // Light Yellow
    "#BAFFC9", // Light Green
    "#BAE1FF", // Light Blue
    "#D4A5A5", // Soft Red
    "#F0A5A5", // Soft Salmon
    "#FFC8A2", // Soft Peach
    "#FFE3E3", // Pale Pink
    "#E2F0CB", // Pale Green
    "#B5EAD7", // Mint Green
    "#C7CEEA", // Lavender
    "#FFDAC1", // Peach
    "#FF9AA2", // Soft Pink
    "#E6A5C5", // Light Mauve
    "#FFB7B2", // Coral
    "#FFDAC1", // Light Apricot
    "#E4FFFE", // Pale Aqua
    "#B8E986", // Light Lime
    "#F9F2EE", // Cream
    "#C1E1C5", // Pale Mint
    "#A0CED9", // Soft Cyan
    "#FCE2DB", // Pale Coral
    "#F9C6C9", // Soft Rose
    "#F1E0E5", // Pale Mauve
    "#D1C7C9"  // Soft Lavender
];

export function charToNumber(char) {
    // Ensure the character is a valid alphabet letter
    if (char.length === 1 && /^[a-zA-Z]$/.test(char)) {
        // Convert to lowercase and get the ASCII code for the character
        const charCode = char.toLowerCase().charCodeAt(0);
        
        // Calculate the number between 0 and 25 based on the position in the alphabet
        return charCode - 97; // ASCII 'a' is 97, so 'a' becomes 0, 'b' becomes 1, etc.
    } else {
        throw new Error("Input must be a single alphabet character.");
    }
}