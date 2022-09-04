window.addEventListener('load',()=>{
    let mt = gsap.matchMedia()
gsap.registerPlugin(ScrollTrigger);

    mt.add('(max-width:1199px)',()=>{
        // hero intro animation : 
        const timeline = gsap.timeline({defaults:{duration:2}})
        timeline
            .from('.background-image',{left:'-100%',ease:'power2'})
            .from('.hero-image span',{duration:1,width:'0'},2)
            .from('.hero-title h4',{duration:1, y:'50px',opacity:'0',ease:'circ'},1)
            .from('.hero-title h1',{duration:1, y:'50px',opacity:'0',ease:'circ'},1.5)
            .to('.hero-title p',{duration:1, y:'0',opacity:'1',ease:'circ'},2)
            .from('.pseudo',{duration:1, x:'50px',opacity:'0',ease:'circ'},1.5)
            .from('#hero .nav-icon',{x:'100vw',opacity:'0',ease:'circ'},1)
            .from('.socials',{y:'-100vw',opacity:'0',ease:'circ'},2)
        // About animation
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
            duration:.5,
            delay:.5,
            ease:'circ'
        }) 
        // portfolio animation
        gsap.from('#myGallery',{scrollTrigger:{trigger:'#portfolio .gallery-image',toggleActions:"restart none none none"},y:'10vh',opacity:'0',duration:1,})
        
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
        gsap.from('#services .cards .service-card:nth-child(1)',{
            scrollTrigger:{trigger:".service-card:nth-child(1)",toggleActions:'restart none none none'},
            opacity:0,
            duration:1,
            x:'-100vw',
            delay:.3
        })
        gsap.from('#services .cards .service-card:nth-child(2)',{
            scrollTrigger:{trigger:".service-card:nth-child(2)",toggleActions:'restart none none none'},
            opacity:0,
            duration:1,
            x:'100vw',
            delay:.3
        })
        gsap.from('#services .cards .service-card:nth-child(3)',{
            scrollTrigger:{trigger:".service-card:nth-child(3)",toggleActions:'restart none none none'},
            opacity:0,
            duration:1,
            x:'-100vw',
            delay:.3
        })
        
            // contact animation
            gsap.from('#contact .content .section-title,#contact .content .contact-form',{
                scrollTrigger:{trigger:'#contact .content',toggleActions:'restart none none none'},
                opacity:0,
                duration:1,
                delay:.5
            })
        })
        
})
