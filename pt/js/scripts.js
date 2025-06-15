

// logo
const logo = document.querySelector('.cover .logo');
const logoSymbol = document.querySelector('.logo .symbol');
function hideLogo (){
  logo.classList.toggle('active');
}
['mouseenter','mouseleave'].forEach( evt => 
    logoSymbol.addEventListener(evt, hideLogo, false)
);


// lang
const langPT = document.querySelector('.lang-pt');
const langEN = document.querySelector('.lang-en');

if (window.location.href.indexOf("/pt") > -1) {
  langPT.classList.add('active');
  langEN.classList.remove('active');
} else {
  langEN.classList.add('active');
  langPT.classList.remove('active');
  document.body.classList.add("en");
}


// tippy
tippy('.bitcoin', {
  content: 'Bitcoin',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.ethereum', {
  content: 'Ethereum',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.binance', {
  content: 'Binance',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.cardano', {
  content: 'Cardano',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.dogecoin', {
  content: 'Dogecoin',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.litecoin', {
  content: 'Litecoin',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.polkadot', {
  content: 'Polkadot',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.tron', {
  content: 'Tron',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.solana', {
  content: 'Solana',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.tether', {
  content: 'Tether',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.usdcoin', {
  content: 'USD coin',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.terra_classic', {
  content: 'Terra Classic',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.xrp', {
  content: 'XRP',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});
tippy('.avalanche', {
  content: 'Avalanche',
  placement: 'top',
  arrow: true,
  duration: [500, 0],
  delay: 100,
  followCursor: true,
});




// Coins
(function () {

  const link = document.querySelectorAll('.coin');

  const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 20,
    xMove = x / width * (move * 3) - move,
    yMove = y / height * (move * 3) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));

})();

// Advantages
(function () {

  const adv = document.querySelectorAll('.adv');

  const animateit = function (e) {
    const header = this.querySelector('header');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 10,
    xMove = x / width * (move * 3) - move,
    yMove = y / height * (move * 3) - move;

    header.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') header.style.transform = '';
  };

  adv.forEach(b => b.addEventListener('mousemove', animateit));
  adv.forEach(b => b.addEventListener('mouseleave', animateit));

})();



document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother, SplitText);

  let smoother = ScrollSmoother.create({
    wrapper: '.app',
    content: '.content',
    smooth: 3,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
    smoothTouch: 0.01
    // allowNativeTouchScrolling: false,
    // dragClickables: true,
    // onPress: function(e) {
    //   if (e.cancelable) e.preventDefault();
    // }
  });

  let mm = gsap.matchMedia();

  // normalize scroll for touch media
  // mm.add("(max-width: 1024)", () => {
  //   if (ScrollTrigger.isTouch === 1) {
  //     ScrollSmoother.smoothTouch(0.1);
  //     ScrollTrigger.normalizeScroll(true);
  //   }
  // });


  // smooth link to same page 
  gsap.utils.toArray(".menu a").forEach(function (button, i) {
    button.addEventListener("click", (e) => {
      // addEventListener('touchmove', e, { passive: false });
      var id = e.target.getAttribute("href");
      console.log(id);
      smoother.scrollTo(id, true, "top top");
      if (e.cancelable) {
        e.preventDefault();
      }
    });
  });


  // menu
  // const showAnim = gsap.from('.menu', { 
  //   yPercent: -200,
  //   paused: true,
  //   duration: 0.2
  // }).progress(1);
  // ScrollTrigger.create({
  //   start: `${window.innerHeight} top`,
  //   end: "+=99999",
  //   onUpdate: (self) => {
  //     self.direction === -1 ? showAnim.play() : showAnim.reverse()
  //   },
  //   markers: false
  // });
  gsap.to(".menu", {
    scrollTrigger: {
      trigger: ".cover",
      start: "bottom 50%",
      end: "+=99999",
      toggleClass: {targets: ".menu", className: "expanded"},
      markers: false
    }
  });



  // coins
  const coins = gsap.utils.toArray('.coin');
  coins.forEach(coin => {
    gsap.to(coin, { 
      opacity: 1,
      marginTop: 0,
      duration: 0.6,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: coin,
        start: "top 90%",
        toggleActions: "play none none reverse",
        scrub: false
      }
    })
  });

  const split = new SplitText(".text", { type: "lines" });
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        markers: false,
        scrub: 1,
        start: "top bottom",
        end: "bottom 60%"
      }
    });
  });

  gsap.to(".about div:first-of-type", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: 'power4',
    scrollTrigger: {
      trigger: ".about div:first-of-type",
      start: "top 90%",
      // end: ScrollTrigger.maxScroll(window),
      toggleActions: "play none none reverse",
      markers: false
    }
  });
  gsap.to(".about div:last-of-type", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: 'power4',
    scrollTrigger: {
      trigger: ".about div:first-of-type",
      start: "top 50%",
      // end: ScrollTrigger.maxScroll(window),
      toggleActions: "play none none reverse",
      markers: false
    }
  });


  gsap.to(".about-star", {
    rotation: 200,
    ease:"linear",
    scrollTrigger: {
      // scroller: ".content",
      trigger: ".about div:first-of-type",
      start: "top 80%",
      // end: "bottom 40%",
      scrub: 1,//true,
      markers: false
    }
  });

  gsap.to(".about-btc", {
    y: 300,
    scrollTrigger: {
      trigger: ".about-btc",
      start: "top 60%",
      end: "bottom 20%",
      scrub: 1,//true,
      markers: false
    }
  });



  gsap.to(".about-coin1", {
    y: 300,
    rotation: 50,
    scrollTrigger: {
      trigger: ".about-coin1",
      start: "top 60%",
      end: "bottom 10%",
      scrub: 1,//true,
      markers: false
    }
  });
  gsap.to(".about-coin2", {
    y: 320,
    rotation: 20,
    scrollTrigger: {
      trigger: ".about-coin2",
      start: "top 50%",
      end: "bottom 8%",
      scrub: 1,//true,
      markers: false
    }
  });
  gsap.to(".about-coin3", {
    y: 420,
    rotation: 20,
    scrollTrigger: {
      trigger: ".about-coin3",
      start: "top 35%",
      end: "bottom 0",
      scrub: 1,//true,
      markers: false
    }
  });
  gsap.to(".about-coin4", {
    y: 500,
    rotation: -150,
    scrollTrigger: {
      trigger: ".about-coin4",
      start: "top 35%",
      end: "bottom -30%",
      scrub: 1,//true,
      markers: false
    }
  });
  gsap.to(".about-coin5", {
    y: 550,
    rotation: 80,
    duration: 50,
    scrollTrigger: {
      trigger: ".about-coin5",
      start: "top 35%",
      end: "bottom -50%",
      scrub: 1,//true,
      markers: false
    }
  });
  gsap.to(".about-coin6", {
    y: 500,
    rotation: -80,
    duration: 30,
    scrollTrigger: {
      trigger: ".about-coin6",
      start: "top 25%",
      end: "bottom -40%",
      scrub: 1,//true,
      markers: false
    }
  });
  gsap.to(".about-coin7", {
    y: 550,
    rotation: -80,
    scrollTrigger: {
      trigger: ".about-coin7",
      start: "top 25%",
      end: "bottom -40%",
      scrub: 1,//true,
      markers: false
    }
  });





  // crypto cards

    // desk
  mm.add("(min-width: 64.1rem)", () => {

    gsap.to(".benefits", {
      scrollTrigger: {
        trigger: ".benefits",
        pin: ".benefits",
        pinSpacing: true,
        start: "top 0",
        end: "top -400%",
        markers: false
      }
    });

    gsap.to(".benefits .ben1", {
      y: 80,
      opacity: 1,
      scrollTrigger: {
        trigger: ".benefits",
        start: "top bottom",
        end: "top 30%",
        scrub: 1,
        markers: false
      }
    });
    gsap.to(".benefits .ben1 h2", {
      y: -300,
      height: 0,
      marginBottom: '1rem',
      opacity: 0,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: ".benefits",
        start: "top 10%",
        end: "top -40%",
        scrub: 1,
        markers: false
      }
    });

    gsap.to(".benefits .ben2", {
      y: 80,
      opacity: 1,
      scrollTrigger: {
        trigger: ".benefits",
        start: "top 10%",
        end: "top -15%",
        scrub: 1,
        markers: false
      }
    });
    gsap.to(".benefits .ben2 h2", {
      y: -300,
      height: 0,
      marginBottom: '1rem',
      opacity: 0,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: ".benefits .ben1 h2",
        start: "bottom -20%",
        end: "bottom -90%",
        scrub: 1,
        markers: false
      }
    });

    gsap.to(".benefits .ben3", {
      y: 80,
      opacity: 1,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: ".benefits",
        start: "top 0%",
        // end: "top -80%",
        scrub: false,
        markers: false
      }
    });
    gsap.to(".benefits .ben4", {
      y: 80,
      opacity: 1,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: ".benefits .ben1 h2",
        start: "bottom -20%",
        end: "bottom -95%",
        scrub: 1,
        markers: false
      }
    });

    gsap.to(".benefits aside", {
      y: -450,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: ".benefits aside",
        start: "220% center",
        end: "250% top",
        scrub: 1,
        markers: false
      }
    });

    gsap.to(".benefits .ben5", {
      y: 80,
      opacity: 1,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: ".benefits aside",
        start: "220% center",
        end: "250% top",
        scrub: 1,
        markers: false
      }
    });
    gsap.to(".benefits .ben6", {
      y: 80,
      opacity: 1,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: ".benefits aside",
        start: "220% 10%",
        end: "250% -40%",
        scrub: 1,
        markers: false
      }
    });


    gsap.to(".benefits .col-1", {
      y: '-250%',
      ease: "none",
      scrollTrigger: {
        trigger: ".benefits",
        start: "top 120%",
        end: "top -500%",
        scrub: 1,
        markers: false
      }
    });
    gsap.to(".benefits .col-2 > div", {
      y: '80%',
      ease: "none",
      scrollTrigger: {
        trigger: ".benefits .col-2",
        start: "top 0",
        end: "top -450%",
        scrub: 1,
        markers: false
      }
    });
  });

    // tablet & phone
  mm.add("(max-width: 64rem)", () => {
    gsap.to(".benefits .col-1", {
      x: '-110%',
      ease: "none",
      scrollTrigger: {
        trigger: ".benefits .col-1",
        start: "top 90%",
        end: "top -50%",
        scrub: 1,
        markers: false
      }
    });
    gsap.to(".benefits .col-2 > div", {
      x: '110%',
      ease: "none",
      scrollTrigger: {
        trigger: ".benefits .col-2",
        start: "top 80%",
        end: "top -50%",
        scrub: 1,
        markers: false
      }
    });

    const benefits = gsap.utils.toArray('.benefits aside > div');
    benefits.forEach(ben => {
      gsap.to(ben, { 
        opacity: 1,
        marginTop: 0,
        duration: 0.6,
        ease: 'expo.inOut',
        scrollTrigger: {
          trigger: ben,
          start: "top 90%",
          toggleActions: "play none none reverse",
          scrub: false
        }
      })
    });

  });
  // mm.revert();



  gsap.to(".advantages > div:first-of-type", {
    marginTop: '-7rem',
    ease: "none",
    scrollTrigger: {
      trigger: ".advantages",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      markers: false
    }
  });
  gsap.to(".advantages > div:nth-of-type(2)", {
    marginTop: '7rem',
    ease: "none",
    scrollTrigger: {
      trigger: ".advantages",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      markers: false
    }
  });
  gsap.to(".advantages > div:nth-of-type(3)", {
    marginTop: '2rem',
    ease: "none",
    scrollTrigger: {
      trigger: ".advantages",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      markers: false
    }
  });

});
