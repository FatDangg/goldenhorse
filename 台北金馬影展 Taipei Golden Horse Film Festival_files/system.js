

//表單驗證碼
function form_Captcha() {
	$('form').append('<input type="hidden" id="form_Captcha" name="form_Captcha" value="1" />');
}

// 檢查字串是否為指定格式
function check_string(str, type) {
    var pattern;
    str = trim(str);
    switch ( type ) {
        case 'account': // 帳號
            pattern = /^[a-zA-Z0-9_]+$/;
            break;
        case 'phone': // 電話
            pattern = /^[0-9\(\)\-\s\#]+$/;
            break;
        case 'email': // email
            //pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/; //[diane]151027 統一採用前端使用的 jquery.validate.js
			pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            break;
        case 'url': // url
            //pattern = /https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?/; //[diane]151027 統一採用前端使用的 jquery.validate.js
			pattern = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            break;
        case 'nonnegative': // 非負數
            pattern = /^\d+(\.\d+)?$/;
            break;
        case 'number': // 0-9數字組合(非負整數)
            pattern = /^\d+$/;
            break;
        case 'number_with_dash': // 0-9數字組合或減號
            pattern = /^[\d-]+$/;
            break;
        case 'natural': // 正整數
            pattern = /^[1-9]\d*$/;
            break;
        case 'integer': // 整數
            pattern = /^-?[1-9]\d*$/;
            break;
        case 'alnum': // 英數
            pattern = /^[A-Za-z0-9]+$/;
            break;
        case 'english': // 英文
            pattern = /^[A-Za-z]+$/;
            break;
        case 'uppercase': // 大寫英文
            pattern = /^[A-Z]+$/;
            break;
        case 'lowercase': // 小寫英文
            pattern = /^[a-z]+$/;
            break;
        case 'refund_account': // 銀行帳號
            pattern = /^[0-9\-]+$/;
            break;
    }

    if ( str == '' || pattern.test(str) ) {
        return true;
    }
    return false;
}

// 計算 checkbox 被勾選的個數
function get_checked_count(tObj) {
    var counter = 0;
    if ( tObj != undefined ) {
        if ( tObj.checked != undefined ) {
            return tObj.checked;
        }
        else {
            for ( var i=0; i<tObj.length; i++ ) {
                if ( tObj[i].checked == true ) {
                    counter++;
                }
            }
        }
    }
    return counter;
}

// 傳回 checkbox 被勾選的項目
function get_checked_items(tObj) {
    var items = new Array();
    if ( tObj.checked == true ) {
        items[0] = tObj.value;
    }
    else {
        var counter = 0;
        for ( var i=0; i<tObj.length; i++ ) {
            if ( tObj[i].checked == true ) {
                items[counter++] = tObj[i].value;
            }
        }
    }
    return items;
}

// 一次勾選或取消指定名稱checkbox
function select_all_checkbox(fObj, status) {
    if ( fObj.checked != undefined  && !fObj.classList.contains("nothing") ) {
        fObj.checked = ( status == 1 ) ? true : false;
    }
    else {
        for ( var i=0; i<fObj.length; i++ ) {
            if ( fObj[i].type != 'checkbox' || fObj[i].classList.contains("nothing") ) {
                continue;
            }
            fObj[i].checked = ( status == 1 ) ? true : false;
        }
    }
}

// 擷取 radio 選項的值
function get_radio_value(rObj){
    if ( rObj.length == undefined ) {
        if ( rObj.checked ) {
            return rObj.value;
        }
    }
    else {
        for ( var i=0; i<rObj.length; i++) {
            if ( rObj[i].checked ) {
                return rObj[i].value;
            }
        }
    }
    return false;
}

// 可取消之 radio
var tmp_radio = null;
function switch_radio(rObj) {
    if ( tmp_radio == rObj ) {
        rObj.checked = false;
        tmp_radio = null;
    }
    else {
        tmp_radio = rObj;
    }
}

// 從 str 字串中移除 keyword 字串後回傳, 若 str 中不存在 keyword 則回傳 false
function str_remove(str, keyword) {
    if ( str.indexOf(keyword) != -1 ) {
        var new_str = str.substring(0, str.indexOf(keyword))
                    + str.substring(str.indexOf(keyword)+keyword.length, str.length);
        return new_str;
    }
    else {
        return false;
    }
}

// 產生彈跳視窗
function show_popup(class_code, func, formname, parameter, id, keyword, modify,year_id,category_id,album_id,parent_id) {
    if ( id == undefined ) {
        id = '';
    }
    if ( keyword == undefined ) {
        keyword = '';
    }
    if ( modify == undefined ) {
        modify = '';
    }
    if ( year_id == undefined ) {
        year_id = '';
    }
    if ( category_id == undefined ) {
        category_id = '';
    }
    if ( album_id == undefined ) {
        album_id = '';
    }
    if ( parent_id == undefined ) {
        parent_id = '';
    }
    window.open("index.php?act_m=popup&class=" + class_code + "&func=" + func + "&formname=" +formname + "&parameter=" + parameter + "&id=" + id + "&keyword=" + keyword + "&modify=" + modify + "&search_photo_year=" + year_id + "&search_photo_category=" + category_id + "&search_select=" + album_id + "&search_subselect=" + parent_id, formname, "toolbar=0,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=600, height=700");
    //if (navigator.appName == 'Netscape') {
        //popup.focus();
    //}
}

// 產生彈跳視窗2
function show_thickbox(class_code, func, formname, parameter, keyword) {
    if ( keyword == undefined ) {
        keyword = '';
    }
    tb_show("", "index.php?act_m=popup&class="+class_code+"&func="+func+"&formname="+formname+"&parameter="+parameter+"&keyword="+keyword+"&height=320&width=520&TB_iframe=true", this.rel);
    //if (navigator.appName == 'Netscape') {
        //popup.focus();
    //}
}

// 產生彈跳視窗-報名表
function show_sform(class_code, func, work, formname, regist_id) {
    window.open("index.php?act_m=popup&class=" + class_code + "&func=" + func + "&work=" +work + "&formname=" +formname+ "&regist_id=" + regist_id, formname, "toolbar=0,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=780, height=700");
    //if (navigator.appName == 'Netscape') {
        //popup.focus();
    //}
}

// 產生彈跳視窗
function show_sform_new(class_code, formname='', regist_id='') {
	//[diane]210525 調整判斷是否有帶入再串到網址中
    //window.open( class_code +  "?formname=" +formname+ "&regist_id=" + regist_id, formname, "toolbar=0,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=900, height=700");
	var openurl = class_code;
	if( formname != '' || regist_id != '' ){
		openurl += "?";
	}
	if( formname != '' ){
		openurl += "formname=" + formname;
	}
	if( regist_id != '' ){
		if( formname != '' ){
			openurl += "&";
		}
		openurl += "regist_id=" + regist_id;
	}
	window.open( openurl, formname, "toolbar=0,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=900, height=700");
}

// 彈跳視窗將指定變數值帶回原網頁
/*
function sub_set_para(formname, parameter, parameter_value, if_submit) {
    var f = window.opener.document.forms[formname];
    f.elements[parameter].value = parameter_value;
    if ( if_submit == 1 ) {
        f.submit();
    }
    window.close();
}
*/
// 彈跳視窗將指定變數值帶回原網頁
function sub_set_para(formname, parameter, parameter_value, parameter_text, if_submit) {
	var openerObj = window.opener.document,
		fObj = openerObj.forms[formname],
		div = document.createElement("div");

	div.innerHTML = parameter_text;

	switch ( fObj.elements[parameter].type ) {
		case 'select-one':
			fObj.elements[parameter].options[0].text = div.textContent || div.innerText;
			fObj.elements[parameter].options[0].value = parameter_value;
			fObj.elements[parameter].selectedIndex = 0;
			break;
		default:
			fObj.elements[parameter].value = parameter_value;
			break;
	}

	if ( openerObj.getElementById(parameter+'_text') != undefined ) {
		openerObj.getElementById(parameter+'_text').innerHTML = parameter_text;
	}
	if ( openerObj.getElementById(parameter+'_img') != undefined ) {
		if(
            formname=='regist_ghff' || formname=='common_ghff_film'
            || formname=='regist_ghfff' || formname=='common_ghfff_film'
            || formname=='regist_ftpp_completed' || formname=='common_ftpp_film' || formname=='regist_ftpp'  //+230619 regist_ftpp
        ){
			var parameter_text_img = parameter_text.match(/<img src=(.*?)>/);
			var parameter_text_title = parameter_text.replace(/<img src=(.*?)>/,'');
			openerObj.getElementById(parameter+'_img').innerHTML = parameter_text_img[0];
			openerObj.getElementById(parameter+'_title').innerHTML = parameter_text_title;
            if( formname=='regist_ftpp' ){
                var parameter_id = 'regist_photo_select_' + parameter.split('[')[1].replace(']','');
            }
            else{
                var parameter_id = 'photo_select_' + parameter.split('[')[1].replace(']','');
            }
			openerObj.getElementById(parameter_id).style.display = '';
		}
	}
	if ( openerObj.getElementById(parameter+'_search') != undefined ) {
		openerObj.getElementById(parameter+'_search').style.display = 'none';
	}
	if ( openerObj.getElementById(parameter+'_info') != undefined ) {
		openerObj.getElementById(parameter+'_info').style.display = '';
	}
	if ( if_submit == 1 ) {
		fObj.submit();
	}
	setTimeout(function(){
		window.close();
	},500);
}

// 仿 php 同名函數
function number_format(number, decimals, dec_point, thousands_sep) {
    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 0 : decimals;
    var d = dec_point == undefined ? "." : dec_point;
    var t = thousands_sep == undefined ? "," : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

// 仿 php 同名函數
function trim(str) {
    while ( str.substring(0,1) == ' ' ) {
        str = str.substring(1, str.length);
    }
    while ( str.substring(str.length-1, str.length) == ' ' ) {
        str = str.substring(0, str.length-1);
    }
    return str;
}

// 仿 php 同名函數
function in_array(str, array) {
    for ( var i=0; i<array.length; i++ ) {
        this_str = ( array[i] != undefined ) ? array[i].toString() : '';
        if ( this_str == str ) {
            return true;
        }
    }
    return false;
}

// 產生日期選單
function date_select_menu_init(yearObj, monthObj, dateObj, startYear, endYear, curYear, curMonth, curDate) {
    //var yearValue = ( curYear == '' ) ? startYear : curYear;
    //var monthValue = ( curMonth == '' ) ? 0 : curMonth;
    var dateValue = ( curDate == '' ) ? 0 : curDate;

	//if( yearObj.options.length > 0 && yearObj.options[0].text == '' )
		//yearObj.length = 0;
	if( yearObj.options.length > 0 )
		yearObj.length = ( yearObj.options[0].value == '' ) ? 1 : 0;
	//desc
	for ( i = endYear; i >= startYear; i--) {
		// 如果啟始與結束相同就跳過
		//if( yearObj.length != 0 && startYear == endYear )
			//continue;
		var nObj = new Option();
		nObj.text = i;
		nObj.value = i;
		yearObj.options[yearObj.length] = nObj;

		if ( curYear == i ) {
		//if ( yearValue == i ) {
			yearObj.selectedIndex = yearObj.length-1;
		}
	}
/*
	//asc
	for ( i = startYear; i <= endYear; i++) {
		// 如果啟始與結束相同就跳過
		//if( yearObj.length != 0 && startYear == endYear )
			//continue;
		var nObj = new Option();
		nObj.text = i;
		nObj.value = i;
		yearObj.options[yearObj.length] = nObj;

		if ( curYear == i ) {
		//if ( yearValue == i ) {
			yearObj.selectedIndex = yearObj.length-1;
		}
	}
*/
    var month_str;
    for ( i = 1; i <= 12; i++) {
        month_str = i;
        if ( i <= 9 ) {
            month_str = '0'+i;
        }
        var nObj = new Option();
        nObj.text = month_str;
        nObj.value = month_str;
        monthObj.options[monthObj.length] = nObj;

        if ( curMonth == i ) {
        //if ( monthValue == i ) {
            monthObj.selectedIndex = monthObj.length-1;
        }
    }

    populate_date(yearObj, monthObj, dateObj);

    dateObj.selectedIndex = dateValue;
}

// 產生日期選單時決定該月有幾天
function populate_date(yearObj, monthObj, dateObj) {
    timeA = new Date(yearObj.options[yearObj.selectedIndex].text, monthObj.options[monthObj.selectedIndex].value,1);
    timeDifference = timeA - 86400000;
    timeB = new Date(timeDifference);
    var daysInMonth = timeB.getDate();
    for ( var i = dateObj.length; i > 0; i-- ) {
        dateObj.remove(i);
    }

    var date_str;
    if ( yearObj.options[yearObj.selectedIndex].text != '' && monthObj.options[monthObj.selectedIndex].text != '' ) {
        /*dateObj.options[0] = new Option(0);
        dateObj.options[0].text = ' ';//請選擇
        dateObj.options[0].value = '';*/
        for ( var i = 1; i <= daysInMonth; i++ ) {
            date_str = i;
            if ( i <= 9 ) {
                date_str = '0'+i;
            }

            dateObj.options[i] = new Option(i);
            dateObj.options[i].text = date_str;
            dateObj.options[i].value = date_str;
        }
    }
}

// 產生時間選單
function time_select_menu_init(hourObj, minuteObj, secondObj, curHour, curMinute, curSecond, gapHour, gapMinute, gapSecond) {
    var hourValue = ( curHour == undefined || curHour == '' ) ? 0 : curHour;
    var minuteValue = ( curMinute == undefined || curMinute == '' ) ? 0 : curMinute;
    var secondValue = ( curSecond == undefined || curSecond == '' ) ? 0 : curSecond;
	var gapHour   = ( gapHour == undefined || gapHour == '' ) ? 0 : gapHour;
	var gapMinute = ( gapMinute == undefined || gapMinute == '' ) ? 0 : gapMinute;
	var gapSecond = ( gapSecond == undefined || gapSecond == '' ) ? 0 : gapSecond;

    var hour_str;
    for ( var i = 0; i < 24; i = i + gapHour) {
        hour_str = i;
        if ( i <= 9 ) {
            hour_str = '0'+i;
        }
        var nObj = new Option();
        nObj.text = hour_str;
        nObj.value = hour_str;
        hourObj.options[hourObj.length] = nObj;

        if ( hourValue == i ) {
            hourObj.selectedIndex = hourObj.length-1;
        }
    }

    var minute_str;
    for ( var i = 0; i < 60; i = i + gapMinute ) {
        minute_str = i;
        if ( i <= 9 ) {
            minute_str = '0'+i;
        }
        var nObj = new Option();
        nObj.text = minute_str;
        nObj.value = minute_str;
        minuteObj.options[minuteObj.length] = nObj;

        if ( minuteValue == i ) {
            minuteObj.selectedIndex = minuteObj.length-1;
        }
    }

    if ( secondObj != undefined && secondObj != '' ) {
        var second_str;
        for ( var i = 0; i < 60; i = i + gapSecond ) {
            month_str = i;
            if ( i <= 9 ) {
                second_str = '0'+i;
            }
            var nObj = new Option();
            nObj.text = second_str;
            nObj.value = second_str;
            secondObj.options[secondObj.length] = nObj;

            if ( secondValue == i ) {
                secondObj.selectedIndex = secondObj.length-1;
            }
        }
    }
}

// 顯示視窗大小
function alertSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  window.alert( 'Width = ' + myWidth );
  window.alert( 'Height = ' + myHeight );
}

//判斷中文字數
function chineseCount(word){
    v=0
    for(cc=0;cc<word.length;cc++){
       c = word.charCodeAt(cc);
      if (!(c>=32&&c<=126)) v++;
    }
    return v
}

// firefox抓上傳檔案資訊
function readFileFirefox(fileBrowser) {
    try {    　　　　　　　
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
    } catch (e) {
        return;  　　　
    }

    var fileName=fileBrowser.value;
    return fileName;
}

// 彈性複選功能增加項目
function add_item_select(item_select_max_count, var_prefix) {
    var item_select_max_idx = -1;
    for ( var i=0; i<item_select_max_count; i++ ) {

        if ( document.getElementById(var_prefix+'_'+i).style.display != 'none' ) {
            item_select_max_idx = i;
        }
    }

    var add_idx = item_select_max_idx + 1;
    if ( add_idx >= item_select_max_count ) {
        return false;
    }

    document.getElementById(var_prefix+'_'+add_idx).style.display = '';

    return add_idx;
}


// 彈性複選功能刪除項目
function delete_item_select(item_select_count, var_prefix, idx, required) {
    if (typeof required == 'undefined') {
        required = true;
    }

    var item_select_display_count = 0;
    for ( var i=0; i<item_select_count; i++ ) {
        if ( document.getElementById(var_prefix+'_'+i).style.display != 'none' ) {
            item_select_display_count++;
        }
    }
    if ( item_select_display_count == 1 && required) {
        alert('欄位不得為空白');
        return false;
    }

    document.getElementById(var_prefix+'_'+idx).style.display = 'none';
    return true;
}