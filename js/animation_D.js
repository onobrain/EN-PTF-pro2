window.addEventListener('load',()=>{
    let md = gsap.matchMedia()
    gsap.registerPlugin(ScrollTrigger);
    md.add('(min-width:1200px)',()=>{
    // hero intro animation : 
    const timeline = gsap.timeline({defaults:{duration:2}})
    timeline
        .from('.background-image',{left:'-100%',ease:'power2'})
        .from('.hero-image',{scale:'.5',duration:.5,opacity:'0'},1)
        .from('.hero-image span',{duration:1,width:'0'},2)
        .from('.hero-title h4',{duration:1, y:'50px',opacity:'0',ease:'circ'},1)
        .from('.hero-title h1',{duration:1, y:'50px',opacity:'0',ease:'circ'},1.5)
        .to('.hero-title p',{duration:1, y:'0',opacity:'1',ease:'circ'},2)
        .from('.pseudo',{duration:1, x:'50px',opacity:'0',ease:'circ'},1.5)
        .from('#hero .nav',{x:'-100vw',opacity:'0',ease:'circ'},1)
        .from('.socials',{y:'-100vw',opacity:'0',ease:'circ'},1)
    // About animation.
        gsap.from(".left",{
            scrollTrigger:{
                trigger:'.left',
                toggleActions:'restart none none none'
    
            },
            x:'-100vw',
            duration:1,
            ease:'circ'
        })
        gsap.from('.right .section-title',{
            scrollTrigger:{
                trigger:'.right',
                toggleActions:'restart none none none'
    
            },
            y:'-100px',
            opacity:'0',
            duration:1,
            dealy:1,
            ease:'circ'
        })
        gsap.from('.right p',{
            scrollTrigger:{
                trigger:'.right',
                toggleActions:'restart none none none'
    
            },
            opacity:'0',
            duration:1,
            ease:'circ'
        }) 
        // PORTFOLIO animation
        gsap.from('#myPortfolio',{scrollTrigger:{trigger:"#portfolio",toggleActions:"restart none none none"},x:'-100vw',opacity:'0',duration:1,dealy:.5,})
        // gallery animation
        gsap.from('#myGallery',{scrollTrigger:{trigger:'#portfolio .gallery-image',toggleActions:"restart none none none"},y:'10vh',opacity:'0',duration:1,})
    
        gsap.from('#portfolio .gallery-image .gal1',{
            scrollTrigger:{
                trigger:'#portfolio .gallery-image .gal1',
                toggleActions:'restart none none none'
            },
            x:'-100vw',
            duration:1
        })
        gsap.from('#portfolio .gallery-image .gal2',{
            scrollTrigger:{
                trigger:'#portfolio .gallery-image .gal2',
                toggleActions:'restart none none none'
            },
            x:'100vw',
            duration:1
        })
        gsap.from('#portfolio .gallery-image .gal3',{
            scrollTrigger:{
                trigger:'#portfolio .gallery-image .gal2',
                toggleActions:'restart none none none'
            },
            x:'100vw',
            duration:1,
            delay:.2
        })
        gsap.from('#portfolio .gallery-image .gal4',{
            scrollTrigger:{
                trigger:'#portfolio .gallery-image .gal4',
                toggleActions:'restart none none none'
            },
            width:'0',
            duration:1
        })
        gsap.from('#portfolio .gallery-image .gal4 span',{
            scrollTrigger:{
                trigger:"#portfolio .gallery-image .gal4",
                toggleActions:'restart none none none'
            },
            scale:.5,
            duration:.5,
            delay:.3
        })
        gsap.from('#portfolio .gallery-image .gal5',{
            scrollTrigger:{
                trigger:"#portfolio .gallery-image ",
                toggleActions:'restart none none none',
            },
            y:'50vw',
            duration:1,
            delay:.5
        })
        gsap.from('#portfolio .gallery-image .gal6',{
            scrollTrigger:{
                trigger:"#portfolio .gallery-image",
                toggleActions:'restart none none none',
            },
            y:'50vw',
            duration:1,
            delay:.8
        })
        gsap.from('#portfolio .gallery-image .gal7',{
            scrollTrigger:{
                trigger:"#portfolio .gallery-image",
                toggleActions:'restart none none none',
            },
            y:'50vw',
            duration:1,
            delay:1.1,
        })
        // services animation
        gsap.from('#services .cards .service-card',{
            scrollTrigger:{trigger:"#services",toggleActions:'restart none none none'},
            opacity:0,
            duration:1,
            y:'-200px',
        })
        // contact animation
        gsap.from('#contact .content',{scrollTrigger:{trigger:'#contact .content',toggleActions:'restart none none none'},
        x:'100vw',
        })  
        gsap.from('#contact .content .section-title,#contact .content .contact-form',{
            scrollTrigger:{trigger:'#contact .content',toggleActions:'restart none none none'},
            opacity:0,
            duration:1,
            delay:.5
        })
        gsap.from('#contact .content .contact-info',{
            scrollTrigger:{trigger:'#contact .content',toggleActions:'restart none none none'},
            height:0,
            width:0,
            duration:.5,
            delay:.5
        })
        gsap.from('#contact .content .contact-info .contact-title',{
            scrollTrigger:{trigger:'#contact .content',toggleActions:'restart none none none'},
            x:'50px',
            opacity:'0',
            duration:1,
            delay:1
        })
        gsap.from('#contact .content .contact-info p',{
            scrollTrigger:{trigger:'#contact .content',toggleActions:'restart none none none'},
            opacity:0,
            duration:.5,
            delay:1
        })
    })
    
})
