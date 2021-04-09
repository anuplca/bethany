// owl-carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:200,  
        responsive:{
            0:{
                items:1,
                nav: false

            },
            600:{
                items:1,
                nav: false
            },
            1000:{
                items:2,
                nav: false
            }
        }
    });
})

// onscroll
 window.onscroll = function() {
        myFunction()
    };

    var header = document.getElementById("myHeader");

    var sticky = header.offsetTop;
    console.log(sticky);
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

// count
$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// click
$(document).ready(function() {
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        } 
    });
});

// filterSelection
filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("box");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }
    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }
    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
    var btnContainer = document.getElementById("btn-container");
    var btns = btnContainer.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            for (let j = 0; j < btns.length; j++) {
                btns[j].classList.remove("active");
            }
            btns[i].classList.add("active");
        });
    }
