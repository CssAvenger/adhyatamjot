$('#theme-change').click(function () {
            if ($(this).text() == 'dark_mode') {
                $('div.container-id').removeClass('text-gray-800');
                $('div.container-id').removeClass('bg-white');
                $('div.container-id').addClass('text-white');
                $('div.container-id').addClass('bg-gray-900');
                $(this).text('light_mode');
            }
            else {
                $('div.container-id').addClass('bg-white');
                $('div.container-id').addClass('text-gray-800');
                $('div.container-id').removeClass('bg-gray-900');
                $('div.container-id').removeClass('text-white');
                $(this).text('dark_mode');

            }

        });
        document.getElementById('my-img').addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        let btn = document.getElementById('menu-trigger');
        btn.addEventListener('click', function () {
            $('div#hid-menu').slideToggle();
            if($(this).children('.material-icons').text() =='drag_handle'){
                $(this).children('.material-icons').text('close');
            }
            else{
                $(this).children('.material-icons').text('drag_handle');
            }
        });
        $('#bhangra-menu').hover(function(){
            $('#bhangra').children('path').attr('stroke','#3b82f6');
        },function(){
            $('#bhangra').children('path').attr('stroke','#4E5563');

        });