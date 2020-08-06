$(document).ready(function () {

    // Navbar related
    $('.nav-link').on('click', function (event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 10);
            }
            return false;
        }
    });
    $('body').scrollspy({ target: ".navbar" });
    if ($(window).scrollTop()) {
        pos = $(window).scrollTop();
        $(window).scrollTop(0);
        $('body').scrollspy('refresh');
        $(window).scrollTop(pos);
    }
    $('html').addClass('scroll');


    // Progress bar related
    var getMax = function () {
        return $(document).height() - $(window).height();
    }

    var getValue = function () {
        return $(window).scrollTop();
    }

    if ('max' in document.createElement('progress')) {
        var progressBar = $('progress');

        progressBar.attr({
            max: getMax()
        });

        $(document).on('scroll', function () {
            progressBar.attr({
                value: getValue()
            });
        });

        $(window).resize(function () {

            progressBar.attr({
                max: getMax(),
                value: getValue()
            });
        });

    } else {

        var progressBar = $('.progress-bar'),
            max = getMax(),
            value, width;

        var getWidth = function () {
            value = getValue();
            width = (value / max) * 100;
            width = width + '%';
            return width;
        }

        var setWidth = function () {
            progressBar.css({
                width: getWidth()
            });
        }

        $(document).on('scroll', setWidth);
        $(window).on('resize', function () {
            max = getMax();
            setWidth();
        });
    }


    var typewriter = new Typewriter(document.getElementById('typewriter'), {
        loop: true
    });

    typewriter.typeString('<strong>STUDENT</strong>')
        .pauseFor(1000)
        .deleteChars(7)
        .typeString('<strong>DEVELOPER</strong>')
        .pauseFor(800)
        .deleteChars(9)
        .typeString('<strong>PROGRAMMER</strong>')
        .pauseFor(1000)
        .start();

    var typewriter2 = new Typewriter(document.getElementById('typewriter2'), {
        loop: true
    });

    typewriter2.typeString('<strong>I THINK</strong>')
        .pauseFor(1000)
        .deleteChars(5)
        .typeString('<strong>CODE</strong>')
        .pauseFor(2200)
        .deleteChars(4)
        .typeString('<strong>MAKE STUFF</strong>')
        .pauseFor(1200)
        .start();

});

const nop = (window.innerWidth + window.innerHeight)

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": nop/6,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#0c53a6", "#000fff"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.9,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 15,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#2e75c8",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 16,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab", "bubble", "repulse"]
            },
            "onclick": {
                "enable": true,
                "mode": "push",
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 100,
                "line_linked": {
                    "opacity": 0.9
                }
            },
            "bubble": {
                "distance": 150,
                "size": 8,
                "duration": 2,
                "opacity": 8,
                "speed": 13
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": false
});

particlesJS("about", {
    "particles": {
        "number": {
            "value": nop/6,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#0c53a6", "#ffffff", "#000fff"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.9,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 15,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#2e75c8",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 16,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
            },
            "onclick": {
                "enable": false,
            },
            "resize": true
        }
    },
    "retina_detect": false
});