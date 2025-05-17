export const SpeechFn = (content, lang = 'zh-TW', rate = 1, pitch = 1, volume = 1) => {
    const utterance = new SpeechSynthesisUtterance(content)
    utterance.lang = lang;
    // 可選：語速、音高、音量
    utterance.rate = rate; // 0.1 - 10
    utterance.pitch = pitch; // 0 - 2
    utterance.volume = volume; // 0 - 1
    speechSynthesis.speak(utterance);
}