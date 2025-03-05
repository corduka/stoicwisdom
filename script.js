const quotes = [
    "Waste no more time arguing what a good man should be. Be one. - Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius",
    "We suffer more often in imagination than in reality. - Seneca",
    "Difficulties strengthen the mind, as labor does the body. - Seneca",
    "It does not matter what you bear, but how you bear it. - Seneca",
    "The best revenge is to be unlike him who performed the injury. - Marcus Aurelius",
    "The obstacle is the way. - Marcus Aurelius",
    "First say to yourself what you would be; and then do what you have to do. - Epictetus",
    "Man conquers the world by conquering himself. - Zeno of Citium",
    "To be even-minded is the greatest virtue. - Heraclitus",
    "If you want something good, get it from yourself. - Epictetus",
    "No man is free who is not master of himself. - Epictetus",
    "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control. - Epictetus",
    "It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius",
    "A gem cannot be polished without friction, nor a man perfected without trials. - Seneca",
    "Do what you will. Even if you tear yourself apart, most people will continue doing the same things. - Marcus Aurelius",
    "No great thing is created suddenly. - Epictetus",
    "Associate with people who are likely to improve you. - Seneca",
    "What upsets people is not things themselves, but their judgments about these things. - Epictetus"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generateBtn").addEventListener("click", generateQuote);
});