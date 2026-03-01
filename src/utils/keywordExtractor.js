exports.extractKeywords = (text) => {

    // Convert to lowercase
    const cleanText = text
        .toLowerCase()
        .replace(/[^a-zA-Z\s]/g, "")  // remove numbers & symbols
        .split(/\s+/);

    // Common English stopwords
    const stopWords = new Set([
        "the", "and", "is", "in", "to", "of", "for", "on",
        "with", "as", "by", "an", "be", "are", "this",
        "that", "from", "at", "or", "it", "a", "was",
        "i", "have", "has", "had", "will", "their",
        "my", "we", "they", "our"
    ]);

    const wordFrequency = {};

    for (let word of cleanText) {
        if (word.length > 3 && !stopWords.has(word)) {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        }
    }

    // Sort by frequency
    const sortedWords = Object.entries(wordFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(entry => entry[0]);

    return sortedWords;
};