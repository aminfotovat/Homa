
$(document).ready(function(){
    // owl carousel
    $(".owl-carousel").owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
// pie chart
    $('.chart').pieChart({
        barColor: '#68B833',
        // background color
        trackColor: '#bbbbbb',
    });
// road map

    let events = [
        {
            date: 'مرحله هفتم',
            content: 'اگر در ویرایشگر کدنویسی پلاگین ایمت (emmet) نصب شده است می‌توانید از آن برای تولید خودکار لورم ایپسوم برای پر کردن فضای متنی استفاده کنید.'
        },
        {
            date: 'مرحله ششم',
            content: 'اگر در ویرایشگر کدنویسی پلاگین ایمت (emmet) نصب شده است می‌توانید از آن برای تولید خودکار لورم ایپسوم برای پر کردن فضای متنی استفاده کنید.'
        },
        {
            date: 'مرحله پنجم',
            content: 'اگر در ویرایشگر کدنویسی پلاگین ایمت (emmet) نصب شده است می‌توانید از آن برای تولید خودکار لورم ایپسوم برای پر کردن فضای متنی استفاده کنید.'
        },
        {
            date: 'مرحله چهارم',
            content: 'اگر در ویرایشگر کدنویسی پلاگین ایمت (emmet) نصب شده است می‌توانید از آن برای تولید خودکار لورم ایپسوم برای پر کردن فضای متنی استفاده کنید.'
        },
        {
            date: 'مرحله سوم',
            content: 'اگر در ویرایشگر کدنویسی پلاگین ایمت (emmet) نصب شده است می‌توانید از آن برای تولید خودکار لورم ایپسوم برای پر کردن فضای متنی استفاده کنید.'
        },
        {
            date: 'مرحله دوم',
            content: 'اگر در ویرایشگر کدنویسی پلاگین ایمت (emmet) نصب شده است می‌توانید از آن برای تولید خودکار لورم ایپسوم برای پر کردن فضای متنی استفاده کنید.'
        },
        {
            date: 'مرحله اول',
            content: 'اگر در ویرایشگر کدنویسی پلاگین ایمت (emmet) نصب شده است می‌توانید از آن برای تولید خودکار لورم ایپسوم برای پر کردن فضای متنی استفاده کنید.'
        },

    ];
    $('#my-timeline').roadmap(events, {
        eventsPerSlide:7,
        slide: 1,
        prevArrow: '<i class="angle-left "></i>',
        nextArrow: '<i class="angle-right "></i>'
    });
    // call window
    $('.call').click(function (){
        $('.window').slideDown(200)
    })
    $('.close-glassy').click(function (){
        $('.window').fadeOut(300)
    })
//   go up btn
    let height = $(window).scrollTop()
    if(height >500){
        $('.go-up').fadeIn(0)
    }
    $(document).scroll(function (){
        let heightnow = $(window).scrollTop()
        if(heightnow > 500){
            $('.go-up').fadeIn(0)
        }else {
            $('.go-up').fadeOut(0)
        }
    })
    $('.go-up').click(function (){
        window.scrollTo({top: 0, behavior: 'smooth'});
    })

// header position
    $(document).scroll(function (){
        let heightnow = $(window).scrollTop()
        if (heightnow > 100){
            $('.bar').addClass('header-2')
        }else {
            $('.bar').removeClass('header-2')
        }
    })


//     header button
    let btn= document.querySelectorAll('.btnscroll')
        btn.forEach(function (element){
            element.addEventListener('click',function (tag){
                $('a').removeClass('btn-active')
                let value= element.getAttribute('data-id')
                let x = $('#'+value).position()
                    window.scrollTo({top: x.top -80, behavior: 'smooth'})
                    element.classList.add('btn-active')
            })

        })








});
