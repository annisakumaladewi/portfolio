const tagline = document.getElementById("tagline");
const taglineText = "Turning data into stories that actually matter.";
let i = 0;

const typing = setInterval(function () {
  tagline.innerHTML = taglineText.substring(0, i);
  i++;
  if (i > taglineText.length) {
    clearInterval(typing);
  }
}, 100);

const heading = document.getElementById("about-heading");
const headingText = "Hi, I'm Annisa!";
let j = 0;

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        j = 0;
        const typing2 = setInterval(function () {
          heading.innerHTML = headingText.substring(0, j);
          j++;
          if (j > headingText.length) {
            clearInterval(typing2);
          }
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

observer.observe(document.getElementById("about-heading"));
