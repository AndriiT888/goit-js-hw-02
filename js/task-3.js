function checkForSpam(message) {
    const spamWord1 = message.toLowerCase().includes(`spam`);
    const spamWord2 = message.toLowerCase().includes(`sale`);
    if (spamWord1 || spamWord2) {
        return "Warning: This message contains forbidden words.";
    } else {
        return "You can safely open this message.";
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
