function start () {
    //creating fragments to append elements to the html page only twice for better performance

    const navFragment = document.createDocumentFragment();
    const secFragment = document.createDocumentFragment();
    
    const numberOfSections = 5; /*on changing this number the number of sections and navbar anchor links 
    to choose from changes respectively*/
    
    //loop to create our section elements, their navbar anchors and insert them in our html
    for (i=1; i<=numberOfSections; i++) {
        
        //creating navbar elements
        const navElm = document.createElement('li');
        navElm.innerHTML = `<a class="menu__link section${i}" data-nav="#section${i}">Section ${i}</a>`;
        navFragment.appendChild(navElm);
        
        //creating the sections
        const newSection = document.createElement('section');
        newSection.setAttribute('id',`section${i}`);
        newSection.setAttribute('data-nav',`section${i}`);
        newSection.innerHTML = `<div class="landing__container">
        <h2>Section ${i}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>`;
        secFragment.appendChild(newSection);
    }
    
    document.querySelector('.navbar__list').appendChild(navFragment);
    document.querySelector('main').appendChild(secFragment);

    //active styling on sections and navs
    const links = document.querySelectorAll('.menu__link');
    const sections = document.querySelectorAll('section');

    window.onscroll= function() {
        
        sections.forEach(function(section) {
            
            if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 200){
                let currentId = section.getAttribute('id');
                document.getElementById(currentId).classList.add('your-active-class');
                
                links.forEach( function(link) {
                    link.classList.remove('active-nav');
                    document.querySelector("."+currentId).classList.add('active-nav');
                });
            } else {
                section.classList.remove('your-active-class');
            }

        });
        
    };

    /*scroll on click animation, I already had it in css with scroll-behaviour: smooth and
    had an href attribute in each anchor which points to section id but I found out this css
    property wasnt supported by all browsers so I made it with js*/ 
    links.forEach ( link => {
        link.addEventListener('click', () => {
            let sec = document.querySelector(link.getAttribute('data-nav'));
            sec.scrollIntoView({behavior:'smooth',block:'start'});
            
        });
    });
    
    
    
    

    

}
//waiting for content to load in the DOM then starting our start function where all our code is written
document.addEventListener('DOMContentLoaded', start);

