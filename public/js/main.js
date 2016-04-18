'use strict';

$(document).ready(function(){
    App.init();
})


var App = {
    submitXHR: null,
    init: function(){
        var self = this;
        self.initBinds();
    },
    initBinds: function(){
        var self = this;    
        
        self.$inputs = {
            email:      $('input[name="email"]'),
            name:       $('input[name="name"]'),
            company:    $('input[name="company"]'),
            message:    $('textarea[name="message"]')
        };
        self.$submit            = $('.btn-contact-submit');
        self.$overlay           = $('.form__overlay');
        self.$overlay_status    = $('.form__overlay .form__overlay__status');
        self.$overlay_icon      = $('.form__overlay .form__overlay__icon');
        self.$form = $('.contact__form');
        self.$form.on('submit', function(e){
            e.preventDefault();
        });
        self.$submit.on('click', self.send);
        $('.asttbc').tooltip({
            trigger: 'hover',
            title: 'Applied Science Technologists & Technicians of BC'
        });  
        $('.nav-item').on('click', function(e,target){
            self.scrollTo(e, 0);
        });    
    },
    _getFormData: function(){
        var self = this;
        return {
            email:      self.$inputs.email.val(),
            name:       self.$inputs.name.val(),
            company:    self.$inputs.company.val(),
            message:    self.$inputs.message.val(),
        }
    },
    _showError: function(field, msg){
        var self = this;
        self.$inputs[field].tooltip({
            title: msg,
            trigger: 'manual',
            placement: 'left',
            template: '<div class="tooltip tooltip--error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        })
        .attr('data-original-title', msg)
        .tooltip('show');        
    },
    _validateForm: function(){
        var self = this;
        validate.validators.presence.message = "is required";
        
        var constraints = {
            name: {
                presence: {message: '^ Name is required'}
            },
            company: {
                presence: {message : "^Company is required"}
            },
            email: {
                email: true,
                presence: true
            },
            message: {
                presence: {message: '^ Please provide a message'}
            }
        };   
        // Validate required fields
        var validation = validate(self._getFormData(), constraints);

        if(validation){
            $.each(validation, function(field, errors){
                self._showError(field, errors[0]);
            });

            $.each(self.$inputs, function(field, $input){
                $input.off().on('input', function(){
                    try{
                        $(this).tooltip('destroy');
                    }catch(e){}
                })
            });
        }
        return validation;        
    },
    scrollTo: function(event, amount){
        var _this = this;
        var scrollAmount = amount || 0;
        // target element id
        var id = $(event.target).attr('href');
        
        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        // prevent standard hash navigation (avoid blinking in IE)
        event.preventDefault();
        
        // top position relative to the document
        var pos = $(id).offset().top - scrollAmount;
        
        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    },
    send: function(){
        var self = App;
        if(self.$submit.hasClass('btn-primary--success') || self.submitXHR){
            return;
        }
        if(self._validateForm()){
            return;
        }
        
        self.submitXHR = $.ajax({
            method: 'POST',
            url: '/contact-submit',
            data: App._getFormData()
        });
        self.$overlay.fadeIn('fast');
        
        self.submitXHR
            .success(function(res){
                self.$overlay_status.html('Thanks for reaching out!');
                self.$overlay_icon.removeClass('fa-spin fa-spinner').addClass('fa-check');
                self.$overlay.css('background', '#49b050');
            })
            .error(function(err){
                self.$overlay_status.html('Oops. Something went wrong. <br/> Please refresh the page and try again.');
                self.$overlay_icon.removeClass('fa-spin fa-spinner').addClass('fa-meh-o');
                self.$overlay.css('background', '#ed6a43');
            });
        
    }
    
};

