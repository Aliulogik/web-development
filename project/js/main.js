let quote = document.querySelector('.quote')
let speaker = document.querySelector('.speaker')
let btn = document.querySelector('.btn')

const quotes=[
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fal",
        speaker:"Nelson Mandela",
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        speaker:"Walt Disney",
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        speaker:"Steve Jobs",
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        speaker:"Eleanor Roosevelt",
    },
    {
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
        speaker:"Oprah Winfrey",
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
        speaker:"James Cameron",
    },
    {
        quote:"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        speaker:"John Lennon",
    },
    {
        quote:"You must be the change you wish to see in the world",
        speaker:"Mahatma Gandhi",
    },
    {
        quote:"Do one thing every day that scares you.",
        speaker:"Eleanor Roosevelt",
    },
    {
        quote:"Well done is better than well said.",
        speaker:"Benjamin Franklin",
    },
    {
        quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
        speaker:"Helen Keller",
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light. ",
        speaker:"Aristotle",
    },

] 

btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[random].quote;
    speaker.innerHTML = quotes[random].speaker
})