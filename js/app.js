// This Random Quotes project is fairly simple. It calls for you to access the properties on an object that's embedded inside of an Array. When the “Generate Quote” button is pressed, it triggers a change in quote and the author who said it.

//First of all we create an object and then we declare a variable with the name quotes.Then we add the quotes inside an array

(function () {
  const quotes = [
    {
      quote: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard. … We cannot all succeed when half of us are held back.",
      author: " Malala Yousafzai"
  }, {
      quote: "I'm tough, ambitious, and I know exactly what I want. If that makes me a bitch, okay.",
      author: "Madonna"
  }, {
      quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
      author: "Madeleine Albright "
  }, {
      quote: "Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.",
      author: "Chimamanda Ngozi Adichie"
  }, {
      quote: "You don't have to be pretty. You don't owe prettiness to anyone. Not to your boyfriend/spouse/partner, not to your co-workers, especially not to random men on the street. You don't owe it to your mother, you don't owe it to your children, you don't owe it to civilization in general. Prettiness is not a rent you pay for occupying a space marked 'female.'",
      author: "Erin McKean"
  }, {
      quote: "Feminism isn't about making women stronger. Women are already strong, it's about changing the way the world perceives that strength.",
      author: " G.D. Anderson"
  },
    {
      quote: "Women are always saying, 'We can do anything that men can do.' But men should be saying, 'We can do anything that women can do.'",
      author: "Gloria Steinem"
    },
    {
      quote: "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass.",
      author: "Maya Angelou"
    }
  ];
  const btn = document.getElementById('generate-btn');

  btn.addEventListener('click', function() {
    let random = Math.floor(Math.random()*quotes.length);
    console.log(random);

    document.getElementById('quote').textContent = quotes[random].quote;
    document.querySelector('.author').textContent = quotes[random].author;
  });
})();