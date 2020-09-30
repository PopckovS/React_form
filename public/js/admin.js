$(document).ready(function () {
    InitTimePicker();
    InitVlink();
    var startDateTextBox = $("#dayStart");
    var endDateTextBox = $("#dayEnd");
    startDateTextBox.datetimepicker(
        {
            dateFormat: "yy-mm-dd",
            timeFormat: 'HH:mm',
            onClose: function (dateText, inst) {
                if (endDateTextBox.val() != '') {
                    var testStartDate = startDateTextBox.datetimepicker('getDate');
                    var testEndDate = endDateTextBox.datetimepicker('getDate');
                    if (testStartDate > testEndDate)
                        endDateTextBox.datetimepicker('setDate', testStartDate);
                } else {
                    endDateTextBox.val(dateText);
                }
            },
            onSelect: function (selectedDateTime) {
                endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
            }
        }
    );
    endDateTextBox.datetimepicker({
        dateFormat: "yy-mm-dd",
        timeFormat: 'HH:mm',
        onClose: function (dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datetimepicker('setDate', testEndDate);
            } else {
                startDateTextBox.val(dateText);
            }
        },
        onSelect: function (selectedDateTime) {
            startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
        }
    });
    $('a.delete-confirm').on('click', function (e) {
        return (window.confirm('Вы действительно хотите удалить запись?'));
    });

    // asyncForm($('#edit-user, #add-report, #edit-report'));
    // asyncForm($('#edit-user'));

    $('#answer').on('keyup', function (e) {
        $('#sendEmail:not([checked])').attr('checked', true);
    });

    $('input.current').on('change', function (e) {
        var id = $(this).val();
        $.ajax('?r=admin/days/change', {
            type: 'post',
            data: {dayID: id, isCurrent: 1},
            dataType: 'json',
            success: function (data) {
                    console.log(data);
                if (typeof data.error !== 'undefined') {
                    $.jGrowl(data.error);
                    return;
                }
                if (typeof data.errFields != 'undefined') {
                    var fldMsgs = [];
                    for (var fld in data.errFields) {
                        fldMsgs.push(data.errFields[fld]);
                    }
                    $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
                    return;
                }
            }
        });

    });
    // ****** Локальное редактирование дней ******
    $('.day-list .local-edit').on('click', function (e) {
        var $link = $(this);
        var $row = $link.parent().parent();
        var $cells = $row.find('td');
        var $delLink = $($cells.get(6)).children();
        var $nameInput = $('<input/>').attr({type: 'text', name: 'dayName'}).val($($cells.get(1)).text());
        var name = $($cells.get(1)).text();
        $($cells.get(1)).empty();
        $nameInput.appendTo($cells.get(1));

        var startDate = $($cells.get(2)).text();
        var $sdInput = $('<input/>').attr({type: 'text', name: 'dayStart'}).val(startDate);
        $($cells.get(2)).empty();
        $sdInput.appendTo($cells.get(2));
        var endDate = $($cells.get(3)).text();
        var $edInput = $('<input/>').attr({type: 'text', name: 'dayEnd'}).val(endDate);
        $($cells.get(3)).empty();
        $edInput.appendTo($cells.get(3));
        var id = $($cells.get(4)).find("input").val();
        console.log(id);

        var closeForm = function () {
            $($cells.get(1)).empty().text(name);
            $($cells.get(2)).empty().text(startDate);
            $($cells.get(3)).empty().text(endDate);
            $($cells.get(5)).empty().append($link);
            $($cells.get(6)).empty().append($delLink);
        };

        var $cancelLink = $('<a/>').attr({
            href: '#',
            title: 'Отмена'
        }).append($('<img/>').attr('src', $imagesPath + 'cancel.png')).on('click', function (e) {
            closeForm();

            return false;
        });
        $link.detach();
        $cancelLink.appendTo($cells.get(5));
        var $saveLink = $('<a/>').attr({
            href: '#',
            title: 'Сохранить'
        }).append($('<img/>').attr('src', $imagesPath + 'save.png')).on('click', function (e) {
            $.ajax('?r=admin/days/edit&id=' + id, {
                type: 'post',
                data: {dayName: $nameInput.val(), dayStart: $sdInput.val(), dayEnd: $edInput.val(), dayID: id},
                dataType: 'json',
                success: function (data) {
//                    console.log(data);
                    if (typeof data.error !== 'undefined') {
                        $.jGrowl(data.error);
                        return;
                    }
                    if (typeof data.errFields != 'undefined') {
                        var fldMsgs = [];
                        for (var fld in data.errFields) {
                            fldMsgs.push(data.errFields[fld]);
                        }
                        $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
                        return;
                    }
                    name = $nameInput.val();
                    startDate = $sdInput.val();
                    endDate = $edInput.val();
                    closeForm();
                }
            });
            return false;

        });

        $delLink.detach();
        $saveLink.appendTo($cells.get(6));

    });

    // ****** Локальное редактирование тем ******
    $('.subjects-list .local-edit').on('click', function (e) {
        var $link = $(this);
        var $row = $link.parent().parent();
        var $cells = $row.find('td');

        var $delLink = $($cells.get(4)).children();

        // поле имени
        var $nameInput = $('<input/>').attr({type: 'text', name: 'name'}).val($($cells.get(1)).text());
        var name = $($cells.get(1)).text();
        $($cells.get(1)).empty();
        $nameInput.appendTo($cells.get(1));

        var id = $($cells.get(0)).text();

        // select пользователя
        var $usersSelect = $('<select>/').attr('name', 'assignedUserID');
        $usersSelect.append($('<option/>').text('<нет>').val(null));
        var userName = $($cells.get(2)).text();
        $.each(users, function () {
            var $option = $('<option/>').text(this.name).val(this.userID);
            if (this.name == userName)
                $option.attr('selected', 'selected');
            $usersSelect.append($option);
        });
        $($cells.get(2)).empty();
        $usersSelect.appendTo($cells.get(2));

        var closeForm = function () {
            $($cells.get(1)).empty().text(name);
            $($cells.get(2)).empty().text(userName);
            $($cells.get(3)).empty().append($link);
            $($cells.get(4)).empty().append($delLink);
        };

        // ссылка редактирования - на отмену
        var $cancelLink = $('<a/>').attr({
            href: '#',
            title: 'Отмена'
        }).append($('<img/>').attr('src', $imagesPath + 'cancel.png')).on('click', function (e) {
            closeForm();

            return false;
        });
        $link.detach();
        $cancelLink.appendTo($cells.get(3));

        // ссылка сохранения
        var $saveLink = $('<a/>').attr({
            href: '#',
            title: 'Сохранить'
        }).append($('<img/>').attr('src', $imagesPath + 'save.png')).on('click', function (e) {
            //console.log({id: id, name: name, assignedUserID: $usersSelect.val()});
            $.ajax('?r=admin/subjects/edit&id=' + id, {
                type: 'post',
                data: {name: $nameInput.val(), assignedUserID: $usersSelect.val()},
                dataType: 'json',
                success: function (data) {
//                    console.log(data);
                    if (typeof data.error !== 'undefined') {
                        $.jGrowl(data.error);
                        return;
                    }
                    if (typeof data.errFields != 'undefined') {
                        var fldMsgs = [];
                        for (var fld in data.errFields) {
                            fldMsgs.push(data.errFields[fld]);
                        }
                        $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
                        return;
                    }
                    name = $nameInput.val();
                    userName = $usersSelect.find('option:selected').text();
                    closeForm();
                }
            });
            return false;
        });
        $delLink.detach();
        $saveLink.appendTo($cells.get(4));
//        console.log(users);
//        console.log($cells.get(2));
        // обработчик нажатий Esc и Ctrl+Enter
        $($nameInput).add($usersSelect).on('keyup', function (e) {
//            console.log(e.keyCode, e.ctrlKey);
            if (27 == e.keyCode)
                $cancelLink.trigger('click');
            else if (13 == e.keyCode && e.ctrlKey)
                $saveLink.trigger('click');
        });


        return false;
    });


    // ****** Локальное редактирование статусов ******
    $('.statuses-list .local-edit').on('click', function (e) {
        var $link = $(this);
        var $row = $link.parent().parent();
        var $cells = $row.find('td');

        var $delLink = $($cells.get(3)).children();

        var id = $($cells.get(0)).text();

        // поле имени
        var $nameInput = $('<input/>').attr({type: 'text', name: 'name'}).val($($cells.get(1)).text());
        var name = $($cells.get(1)).text();
        $($cells.get(1)).empty();
        $nameInput.appendTo($cells.get(1));

        var closeForm = function () {
            $($cells.get(1)).empty().text(name);
            $($cells.get(2)).empty().append($link);
            $($cells.get(3)).empty().append($delLink);
        };

        // ссылка редактирования - на отмену
        var $cancelLink = $('<a/>').attr({
            href: '#',
            title: 'Отмена'
        }).append($('<img/>').attr('src', $imagesPath + 'cancel.png')).on('click', function (e) {
            closeForm();

            return false;
        });
        $link.detach();
        $cancelLink.appendTo($cells.get(2));

        // ссылка сохранения
        var $saveLink = $('<a/>').attr({
            href: '#',
            title: 'Сохранить'
        }).append($('<img/>').attr('src', $imagesPath + 'save.png')).on('click', function (e) {
            //console.log({id: id, name: name, assignedUserID: $usersSelect.val()});
            $.ajax('?r=admin/statuses/edit&id=' + id, {
                type: 'post',
                data: {name: $nameInput.val()},
                dataType: 'json',
                success: function (data) {
//                    console.log(data);
                    if (typeof data.error !== 'undefined') {
                        $.jGrowl(data.error);
                        return;
                    }
                    if (typeof data.errFields != 'undefined') {
                        var fldMsgs = [];
                        for (var fld in data.errFields) {
                            fldMsgs.push(data.errFields[fld]);
                        }
                        $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
                        return;
                    }
                    name = $nameInput.val();

                    closeForm();
                }
            });
            return false;
        });
        $delLink.detach();
        $saveLink.appendTo($cells.get(3));

        // обработчик нажатий Esc и Ctrl+Enter
        $($nameInput).on('keyup', function (e) {
            if (27 == e.keyCode)
                $cancelLink.trigger('click');
            else if (13 == e.keyCode && e.ctrlKey)
                $saveLink.trigger('click');
        });


        return false;
    });


    var params = urlParams(window.location.search);
//    if (typeof params.order == 'undefined')
//        params.order = 'desc';
    $('[data-sortable]').each(function () {
        var $hold = $(this);
        $hold.css({'cursor': 'pointer'});

        var sort = $hold.attr('data-sortable');

        if (params.sort == sort) {
            var imgSrc = ('asc' == params.order) ? '/images/admin/arrow_down.gif' : '/images/admin/arrow_up.gif';
//            console.log(params.order);
            var $img = $('<img>').attr('src', imgSrc).appendTo($hold);

            $hold.addClass('current');
            $hold.append();

        }

        $hold.on('click', function (e) {
            if (params.sort == sort) {
                if (params.order == 'asc')
                    params.order = 'desc';
                else
                    params.order = 'asc';
            } else
                params.order = 'asc';
            params.sort = sort;

            window.location.search = urlConstruct(params);
        });
    });


    $('#dell .cancel-delete').on('click', function (e) {
        $('#dell a.close').trigger('click');
        return false;
    });
    $('.del-link').on('click', function () {
        var link = $(this).attr('data-href');
        $('#dell .confirm-delete').attr("data-href", link);
        return false;
    });
    $('#dell .confirm-delete').on('click', function (e) {
        $.ajax($(this).attr('data-href'), {
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if (typeof data.error !== 'undefined') {
                    $.jGrowl(data.error);
                    return;
                }
                $("#id_" + data.id).parent().parent().remove();

                window.location.reload();
            }
        });
    });

    $('.day-del-link').on('click', function () {
        var link = $(this).attr('data-href');
        $('#day-dell .confirm-delete').attr("data-href", link);
        return false;
    });
    $('#day-dell .cancel-delete').on('click', function (e) {
        $('#day-dell a.close').trigger('click');
        return false;
    });
    $('#day-dell .confirm-delete').on('click', function (e) {
        var button = $(this);
        $.ajax(button.attr('data-href'), {
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if (typeof data.error !== 'undefined') {
                    $.jGrowl(data.error);
                    return;
                }
                button.parents("tr").remove();
//                $("#id_" + data.id).parent().parent().remove();

                window.location.reload();
            }
        });
    });


    $('.faq-change').on('change', function (e) {
        var faqID = $(this).attr('data-id');
        var data = $(this).serialize();
        $.ajax({
            url: '?r=admin/faqs/change',
            dataType: 'text',
            type: 'post',
            data: data + '&faqID=' + faqID,
            success: function () {
            }
        });
    });

    $('select.faq-filter').on('change', function () {
        var $select = $(this);
        if (!$select.val())
            delete params['filter[' + $select.attr('name') + ']'];
        else
            params['filter[' + $select.attr('name') + ']'] = $select.val();
//        console.log(params);

        window.location.search = urlConstruct(params);
//        console.log($select);
    });


    $('form.new-faq').on('submit', function (e) {
        var $form = $(this);
        var url = $form.attr('action');

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: $form.serialize(),
            success: function (data, jqXHR) {
                if (typeof data.errFields != 'undefined') {
                    var fldMsgs = [];
                    for (var fld in data.errFields) {
                        $form.find('[name="' + fld + '"]').addClass('error');
                        fldMsgs.push(data.errFields[fld]);
                    }
                    $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
                }
                if (typeof data.error != 'undefined') {
                    $.jGrowl(data.error);
                } else if (data == 'ok' || (data.msg == 'ok')) {
                    $.jGrowl('Успешно сохранено');
                    $form.parent().find('a.close').trigger('click');
                    window.setTimeout(function () {
                        $form[0].reset();
                    }, 500);

                }
            }
        });

        return false;
    });

    $('form.answer-faq').on('submit', function () {
        var $form = $(this);
        var url = $form.attr('action');

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: $form.serialize(),
            success: function (data, jqXHR) {
                if (typeof data.error != 'undefined') {
                    $.jGrowl(data.error);
                } else if (data == 'ok' || (data.msg == 'ok')) {
                    $.jGrowl('Сохранено');
                    $form.parent().find('a.close').trigger('click');
                    window.location.reload();

                }
            }
        });

        return false;
    });

    $('.addRecord').click(function () {
//        if (typeof index == "undefined") {
//            var index = 0;
//        }
        var time = '<input type="text" name="schedule[' + index + '][scheduleTime]" class="timepicker" value="00:00"/>';
        var artist = '<input type="text" name="schedule[' + index + '][artist]" class="artist" value=""/><input class="alias" type="hidden" value="" name="schedule[' + index + '][alias]"><div class="tooltip" style="display:none;"><ul class="list"></ul></div>';

        $("tbody").append("<tr><td>" + (index + 1) + "</td><td>" + time + "</td><td>" + artist + '</td><td>не обновлено</td><td><a class="close delnewrow" href="#">close</a></td>');
        InitDelRow();
        InitTimePicker();
        index++;
        return false;
    });

    $('.updateRecords').click(function () {
        $.ajax('?r=admin/schedule/edit', {
            type: 'post',
            data: $("form.schedule").serialize(),
            dataType: 'json',
            success: function (data) {
                console.log(data);
                if (typeof data.error !== 'undefined') {
                    $.jGrowl(data.error);
                    return;
                }
                if (typeof data.errFields != 'undefined') {
                    var fldMsgs = [];
                    for (var fld in data.errFields) {
                        fldMsgs.push(data.errFields[fld]);
                    }
                    $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
                    return;
                }
                window.location.reload();
            }
        });

        return false;
    });
    $('#roleID').on("change", function () {
        var $select = $(this);
        var $roleID = $select.val();
        if ($roleID == 1) {
            $('div.sceneID').hide();
            $('#scene_null').show();
            $("#sceneID").find('option:eq(0)').prop('selected', true);
        } else {
            $('div.sceneID').show();
            $('#scene_null').hide();
        }

    });
    $(".day-list a.isEnable").on('click', function () {
        var id = $(this).parent().next("td").find('input').val();
        var img = $(this).find("img");
        var that = $(this);
        $.ajax('/?r=admin/days/enable', {
            type: 'post',
            data: {dayID: id},
            dataType: 'json',
            success: function (data) {
//                    console.log(data);
                if (typeof data.error !== 'undefined') {
                    $.jGrowl(data.error);
                    return;
                }
                img.attr("src", data.src);
                that.attr('title', data.msg);
                return;
            }
        });
    });
    $(".schedule").on('click', "a.artLink", function (event) {
        event.preventDefault();
        console.log($(this).attr("href"));
        var box = $(this).parents("td");
        console.log(box);
        box.find('.alias').val($(this).attr('href'));
        console.log(box.find('.alias'));
        box.find('.artist').val($(this).text());
        $(this).parents(".tooltip").hide();
        return false;
    });
    $(".schedule").on("change", "input.artist", function () {
        var t = $(this).parent().find(".tooltip");
        setTimeout(function () {
            t.hide();
        }, 300);

    });
    $(".schedule").on("input", "input.artist", function () {
        var valu = $(this).val();
        var alias = $(this).parent().find('.alias');
        var div = $(this).parent().find(".tooltip");
        var xhr;
        alias.val("");
        if (valu.length >= 3) {
            if (xhr && xhr.readyState != 0) {
                xhr.abort();
            }
            xhr = $.ajax('http://2017.solarsysto.ru/searchartist/', {
                type: 'get',
                data: {mus: valu},
                dataType: 'json',
                success: function (data) {
                    if (typeof data.error !== 'undefined') {
                        $.jGrowl(data.error);
                        return;
                    }
                    if (data.art == '') {
                        div.hide();
                        return;
                    }
                    var list = '';
                    $.each(data.art, function (key, value) {
                        list += "<li><a href='" + key + "' class='artLink'>" + value + "</a></li>";
                    });
                    div.find(".list").html(list)
                    div.show();
                    return;
                }
            });

        } else {
            div.hide();
        }
    });
});

function InitDelRow() {
    $('a.delnewrow').click(function () {
        $(this).parent().parent().remove();
    });
}

function urlParams(url) {

    var ret = {},
        seg = url.replace(/^\?/, '').split('&'),
        len = seg.length, i = 0, s;
    for (; i < len; i++) {
        if (!seg[i]) {
            continue;
        }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
    }
    return ret;
}

function urlConstruct(obj) {
    var arr = [];
    for (var prop in obj) {
        arr.push(prop + '=' + obj[prop]);
    }

    return arr.join('&');
}

function asyncForm($forms) {
    $forms.on('submit', function (e) {
        var $form = $(this);
        var url = $form.attr('action');
        $form.find('.error').removeClass('error');
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: $form.serialize(),
            success: function (data, jqXHR) {
                console.log(data);
                if (typeof data.errFields != 'undefined') {
                    var fldMsgs = [];
                    for (var fld in data.errFields) {
                        $form.find('[name="' + fld + '"]').addClass('error');
                        fldMsgs.push(data.errFields[fld]);
                    }
                    $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
                }
                if (typeof data.error != 'undefined' && data.error !== '') {
                    $.jGrowl(data.error);
                } else if (data == 'ok' || (data.msg == 'ok')) {
                    $.jGrowl('Успешно сохранено');
                }

                if (typeof data.redirect != 'undefined') {
                    window.location.href = data.redirect;
                }
                if (typeof data.reload != 'undefined') {
                    window.location.reload();
                }
                // console.log(data);
            }
        });

        return false;
    });
}

function InitColorFields() {
    $(".color").spectrum({
        //color: $(this).val(), //"#f00",
        showInput: true,
        change: function (color) {
            $("input.color").val(color.toHexString());
        }
    });
}

function InitTimePicker() {
    $(".timepicker").timepicker();
}

function InitVlink() {
    $('a.vlink').on('click', function (e) {
        if (!window.confirm($(this).data('msg')))
            return false;
        var url = $(this).attr('href');

        $.get(url, function (data) {
            if (typeof data.error !== 'undefined') {
                $.jGrowl(data.error);
                return;
            }
            if (typeof data.message !== "undefined") {
                $.jGrowl(data.message);
            }
            if (typeof data.redirect !== "undefined") {
                setTimeout(function () {
                    window.location.href = data.redirect;
                }, 500);
                return false;
            }
            window.location.reload();
        }, 'json');

        return false;
    });

}