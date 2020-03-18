I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"carts":{"cart":{"checkout":"Checkout","empty":"Empty cart","title":"Your Cart"}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","blank":"can't be blank","confirmation":"doesn't match %{attribute}","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"layouts":{"application":{"contact":"Contact","home":"Home","news":"News","questions":"Questions","title":"The Pragmatic Bookshelf"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"orders":{"form":{"address_html":"Address","check_pay_type":{"account_number":"Account #","routing_number":"Routing #"},"credit_card_pay_type":{"cc_number":"CC #","expiration_date":"Expiry"},"email":"E-mail","name":"Name","pay_prompt_html":"Select a payment method","pay_type":"Pay with","pay_types":{"check":"Check","credit_card":"Credit Card","purchase_order":"Purchase Order"},"purchase_order_pay_type":{"po_number":"PO #"},"submit":"Place Order"},"new":{"legend":"Please Enter Your Details"}},"store":{"index":{"add_html":"Add to Cart","title_html":"Your Pragmatic Catalog"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"thanks":"Thank you for your order","time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"}});
I18n.translations["es"] = I18n.extend((I18n.translations["es"] || {}), {"activerecord":{"errors":{"messages":{"blank":"no puede quedar en blanco","inclusion":"no est\u0026aacute; incluido en la lista"}}},"carts":{"cart":{"checkout":"Comprar","empty":"Vaciar Carrito","title":"Carrito de la Compra"}},"errors":{"template":{"body":"Hay problemas con los siguientes campos:","header":{"one":"1 error ha impedido que este %{model} se guarde","other":"%{count} errores han impedido que este %{model} se guarde"}}},"layouts":{"application":{"contact":"Contacto","home":"Inicio","news":"Noticias","questions":"Preguntas","title":"Biblioteca de Pragmatic"}},"number":{"currency":{"format":{"delimiter":".","format":"%n\u0026nbsp;%u","precision":2,"separator":",","unit":"$US"}}},"orders":{"form":{"address_html":"Direcci\u0026oacute;n","check_pay_type":{"account_number":"# de Cuenta","routing_number":"# de Enrutamiento"},"credit_card_pay_type":{"cc_number":"NÃºmero","expiration_date":"ExpiraciÃ³n"},"email":"E-mail","name":"Nombre","pay_prompt_html":"Seleccione un mÃ©todo de pago","pay_type":"Forma de pago","pay_types":{"check":"Cheque","credit_card":"Tarjeta de CrÃ©dito","purchase_order":"Orden de Compra"},"purchase_order_pay_type":{"po_number":"NÃºmero"},"submit":"Realizar Pedido"},"new":{"legend":"Por favor, introduzca sus datos"}},"store":{"index":{"add_html":"A\u0026ntilde;adir al Carrito","title_html":"Su Cat\u0026aacute;logo de Pragmatic"}},"thanks":"Gracias por su pedido"});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {"carts":{"cart":{"checkout":"Checkout","empty":"Empty cart","title":"Your Cart"}},"errors":{"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}}},"layouts":{"application":{"contact":"Контакты","home":"На главную","news":"Новости","questions":"Вопросы","title":"Прагматичная книжная полка"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","unit":"$"}}},"orders":{"form":{"address_html":"Address","check_pay_type":{"account_number":"Account #","routing_number":"Routing #"},"credit_card_pay_type":{"cc_number":"CC #","expiration_date":"Expiry"},"email":"E-mail","name":"Name","pay_prompt_html":"Select a payment method","pay_type":"Pay with","pay_types":{"check":"Check","credit_card":"Credit Card","purchase_order":"Purchase Order"},"purchase_order_pay_type":{"po_number":"PO #"},"submit":"Place Order"},"new":{"legend":"Please Enter Your Details"}},"store":{"index":{"add_html":"Добавить в корзину","title_html":"Прагматичный книжный каталог"}},"thanks":"Thank you for your order"});
I18n.translations["ua"] = I18n.extend((I18n.translations["ua"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Возникли ошибки: %{errors}","restrict_dependent_destroy":{"has_many":"Невозможно удалить запись, так как существуют зависимости: %{record}","has_one":"Невозможно удалить запись, так как существует зависимость: %{record}"}}}},"carts":{"cart":{"checkout":"Замовити","empty":"Очистити","title":"Ваш кошик","total":"Всього :"}},"date":{"abbr_day_names":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],"abbr_month_names":[null,"янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],"day_names":["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],"formats":{"default":"%d.%m.%Y","long":"%-d %B %Y","short":"%-d %b"},"month_names":[null,"января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"few":"около %{count} часов","many":"около %{count} часов","one":"около %{count} часа","other":"около %{count} часа"},"about_x_months":{"few":"около %{count} месяцев","many":"около %{count} месяцев","one":"около %{count} месяца","other":"около %{count} месяца"},"about_x_years":{"few":"около %{count} лет","many":"около %{count} лет","one":"около %{count} года","other":"около %{count} лет"},"almost_x_years":{"few":"почти %{count} года","many":"почти %{count} лет","one":"почти 1 год","other":"почти %{count} лет"},"half_a_minute":"полминуты","less_than_x_minutes":{"few":"меньше %{count} минут","many":"меньше %{count} минут","one":"меньше %{count} минуты","other":"меньше %{count} минуты"},"less_than_x_seconds":{"few":"меньше %{count} секунд","many":"меньше %{count} секунд","one":"меньше %{count} секунды","other":"меньше %{count} секунды"},"over_x_years":{"few":"больше %{count} лет","many":"больше %{count} лет","one":"больше %{count} года","other":"больше %{count} лет"},"x_days":{"few":"%{count} дня","many":"%{count} дней","one":"%{count} день","other":"%{count} дня"},"x_minutes":{"few":"%{count} минуты","many":"%{count} минут","one":"%{count} минуту","other":"%{count} минуты"},"x_months":{"few":"%{count} месяца","many":"%{count} месяцев","one":"%{count} месяц","other":"%{count} месяца"},"x_seconds":{"few":"%{count} секунды","many":"%{count} секунд","one":"%{count} секунду","other":"%{count} секунды"},"x_years":{"few":"%{count} года","many":"%{count} лет","one":"%{count} год","other":"%{count} года"}},"prompts":{"day":"День","hour":"Часов","minute":"Минут","month":"Месяц","second":"Секунд","year":"Год"}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"нужно подтвердить","blank":"не может быть пустым","confirmation":"не совпадает со значением поля %{attribute}","empty":"не может быть пустым","equal_to":"может иметь лишь значение, равное %{count}","even":"может иметь лишь четное значение","exclusion":"имеет зарезервированное значение","greater_than":"может иметь значение большее %{count}","greater_than_or_equal_to":"может иметь значение большее или равное %{count}","inclusion":"имеет непредусмотренное значение","invalid":"имеет неверное значение","less_than":"может иметь значение меньшее чем %{count}","less_than_or_equal_to":"может иметь значение меньшее или равное %{count}","model_invalid":"Возникли ошибки: %{errors}","not_a_number":"не является числом","not_an_integer":"не является целым числом","odd":"может иметь лишь нечетное значение","other_than":"должно отличаться от %{count}","present":"нужно оставить пустым","required":"не может отсутствовать","taken":"уже существует","too_long":{"few":"слишком большой длины (не может быть больше чем %{count} символа)","many":"слишком большой длины (не может быть больше чем %{count} символов)","one":"слишком большой длины (не может быть больше чем %{count} символ)","other":"слишком большой длины (не может быть больше чем %{count} символа)"},"too_short":{"few":"недостаточной длины (не может быть меньше %{count} символов)","many":"недостаточной длины (не может быть меньше %{count} символов)","one":"недостаточной длины (не может быть меньше %{count} символа)","other":"недостаточной длины (не может быть меньше %{count} символа)"},"wrong_length":{"few":"неверной длины (может быть длиной ровно %{count} символа)","many":"неверной длины (может быть длиной ровно %{count} символов)","one":"неверной длины (может быть длиной ровно %{count} символ)","other":"неверной длины (может быть длиной ровно %{count} символа)"}},"template":{"body":"Проблемы возникли со следующими полями:","header":{"few":"%{model}: сохранение не удалось из-за %{count} ошибок","many":"%{model}: сохранение не удалось из-за %{count} ошибок","one":"%{model}: сохранение не удалось из-за %{count} ошибки","other":"%{model}: сохранение не удалось из-за %{count} ошибки"}}},"helpers":{"format":{"delimiter":" ","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"few":"миллиардов","many":"миллиардов","one":"миллиард","other":"миллиардов"},"million":{"few":"миллионов","many":"миллионов","one":"миллион","other":"миллионов"},"quadrillion":{"few":"квадриллионов","many":"квадриллионов","one":"квадриллион","other":"квадриллионов"},"thousand":{"few":"тысяч","many":"тысяч","one":"тысяча","other":"тысяч"},"trillion":{"few":"триллионов","many":"триллионов","one":"триллион","other":"триллионов"},"unit":""}},"format":{"delimiter":"","precision":1,"significant":false,"strip_insignificant_zeros":false},"storage_units":{"format":"%n %u","units":{"byte":{"few":"байта","many":"байт","one":"байт","other":"байта"},"eb":"ЭБ","gb":"ГБ","kb":"КБ","mb":"МБ","pb":"ПБ","tb":"ТБ"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"select":{"prompt":"Выберите: "},"submit":{"create":"Создать %{model}","submit":"Сохранить %{model}","update":"Сохранить %{model}"}},"layouts":{"application":{"contact":"Контакти","home":"На головну","news":"Новини","questions":"Питання","title":"Прагматична книжкова полиця"}},"number":{"currency":{"format":{"delimiter":" ","format":"%n\u0026nbsp;%u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"грн"}}},"orders":{"form":{"address_html":"Адресса","check_pay_type":{"account_number":"Account #","routing_number":"Routing #"},"credit_card_pay_type":{"cc_number":"CC #","expiration_date":"Expiry"},"email":"E-mail","name":"Ім'я","pay_prompt_html":"Виберіть тип платежу","pay_type":"Спопіб оплати","pay_types":{"check":"Чек","credit_card":"Кредитка","purchase_order":"Касовий ордер"},"purchase_order_pay_type":{"po_number":"PO #"},"submit":"Place Order"},"new":{"legend":"Будь-ласка введіть свої дані"}},"store":{"index":{"add_html":"Додати до кошика","title_html":"Прагматичный книжковий каталог"}},"support":{"array":{"last_word_connector":" и ","two_words_connector":" и ","words_connector":", "}},"thanks":"Дякую за ваше замовлення","time":{"am":"утра","formats":{"default":"%a, %d %b %Y, %H:%M:%S %z","long":"%d %B %Y, %H:%M","short":"%d %b, %H:%M"},"pm":"вечера"}});
