
var QkApp = function () {

    $.fn.QkFieldAlert = this.QkFieldAlert;
    return this;
}

QkApp.prototype = {

    constructor: QkApp,

    QkFormAlert: function () {
        var this_ = this;

        function CreateAlertElt(sMsg, cssClass) {
            var jqEl = $('<div class="alert alert-dismissable">\
                            <span class="close" data-dismiss="alert" aria-label="close">&times;</span>\
                        </div>');
            jqEl.addClass(cssClass);
            jqEl.append(sMsg);
            return jqEl;
        }

        this_.show_alert = function (sMsg, cssClass, secTimeout) {
            var jqAlertContent = CreateAlertElt(sMsg, cssClass),
                jqAlertContainer = $('*[data-qkapp-role="alert-container"]')
                    .first()
                    .append(jqAlertContent)
                    .alert();

            setTimeout(function () {
                jqAlertContent.toggle("fold", function () { jqAlertContent.detach(); });
            }, secTimeout * 1000);
        }

        return this_.show_alert;
    },

    QkFieldAlert: function (sMsg, cssClass, secTimeout) {
        var this_ = this;

        this_.closest('fieldset')
            .append('<small class="alert-danger">' + sMsg + '</small>');

        setTimeout(function () {
            this_.closest('fieldset')
                 .find('small').remove();
        }, 4 * 1000);
    }
}