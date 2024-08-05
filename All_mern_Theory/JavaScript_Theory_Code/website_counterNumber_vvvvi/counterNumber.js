const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    console.log(entry);
    // if(entry.isIntersecting == false)
    if (!entry.isIntersecting) return;
    const counterNum = document.querySelectorAll(".counter-numbers");
    let speed = 200;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        //console.log(targetNumber);
        const initalNum = parseInt(curElem.innerText);
        //console.log(initalNum);
        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);
        if (initalNum < targetNumber) {
          curElem.innerText = `${initalNum + incrementNumber}+`;

          setTimeout(updateNumber, 10);
        }
      };
      updateNumber();
    });
    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);
workObserver.observe(workSection);
