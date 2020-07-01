/**
 * Click to Chat
 */

var url = window.location.href;

// desktop > 1024 
// is_mobile yes/no

var is_mobile = 'yes';
if (typeof screen.width !== "undefined" ) {
    is_mobile = ( screen.width > 1024 ) ? "no" : "yes";
} 

// post title
var post_title = (typeof ht_ctc_var !== "undefined" ) ? ht_ctc_var.post_title : document.title;

// shortcode link
function ht_ctc_shortcode_click(values) {
    
    data_link = values.getAttribute("data-ctc-link");
    window.open(data_link, '_blank', 'noopener');

    ht_ctc_analytics(values);
}

// floating style - click
function ht_ctc_click(values) {

    // link
    ht_ctc_link(values);

    // analytics
    ht_ctc_analytics(values);

}

// link - chat, share, group
function ht_ctc_link(values) {

    var return_type = values.getAttribute('data-return_type');

    if(return_type == 'group') {
        // group
        var base_link = 'https://chat.whatsapp.com/';

        // var group_id = ht_ctc_var_group.group_id;
        var group_id = values.getAttribute('data-group_id');

        window.open(base_link + group_id, '_blank', 'noopener');

    } else if (return_type == 'share') {
        // share
        // var share_text = ht_ctc_var_share.share_text;
        var share_text = values.getAttribute('data-share_text');

        if (is_mobile == 'yes') {
            var base_link = 'https://api.whatsapp.com/send';
        } else {
            var base_link = 'https://web.whatsapp.com/send';
        }
        window.open(base_link + '?text=' + share_text, '_blank', 'noopener');

    } else {
        // chat
        var number = values.getAttribute('data-number');
        number = number.replace(/\+/g, '');
        var pre_filled = values.getAttribute('data-pre_filled');
        var webandapi = values.getAttribute('data-webandapi');
        
        // if detect decive using user agent
        var detectdevice = values.getAttribute('data-detectdevice');
        if ( 'http' == detectdevice ) {
            var wpdevice = values.getAttribute('data-wpdevice');
            is_mobile = ( 'mobile' == wpdevice ) ? 'yes' : 'no';
        }

        // web/api.whatsapp or wa.me 
        if ( 'webapi' == webandapi ) {
            if (is_mobile == 'yes') {
                var base_link = 'https://api.whatsapp.com/send';
            } else {
                var base_link = 'https://web.whatsapp.com/send';
            }
            window.open(base_link + '?phone=' + number + '&text=' + pre_filled, '_blank', 'noopener');
        } else {
            // wa.me
            var base_link = 'https://wa.me/';
            window.open(base_link + number + '?text=' + pre_filled, '_blank', 'noopener');
        }

    }

}

// Analytics
function ht_ctc_analytics(values) {
    
    var return_type = values.getAttribute('data-return_type');
    
    // Google Analytics
    var is_ga_enable = values.getAttribute('data-is_ga_enable');
    if ( 'yes' == is_ga_enable ) {
        ht_ctc_ga( return_type );
    }

    // FB Analytics
    var is_fb_an_enable = values.getAttribute('data-is_fb_an_enable');
    if ( 'yes' == is_fb_an_enable ) {
        ht_ctc_fb_an( return_type );
    }
    
}

// Google Analytics
function ht_ctc_ga( return_type ) {

    var ga_category = 'Click to Chat for WhatsApp';
    var ga_action = 'return type: ' + return_type ;
    var ga_label = post_title + ', ' + url ;

    // // ga('send', 'event', 'Contact', 'Call Now Button', 'Phone');

    if ("ga" in window) {
    // if ( ga.window && ga.create) {
        tracker = ga.getAll()[0];
        if (tracker) tracker.send("event", ga_category, ga_action, ga_label );
    } else if ("gtag" in window) {
        gtag('event', ga_action, {
            'event_category': ga_category,
            'event_label': ga_label,
        });
    }

}

// FB Analytics
function ht_ctc_fb_an( return_type ) {
    
    var fb_event_name = 'Click to Chat for WhatsApp';

    var params = {};
    params['Category'] = 'Click to Chat for WhatsApp';
    params['Action'] = 'return type: ' + return_type;
    params['Label'] = post_title + ', ' + url ;

    // if fb analytics is not installed, then uncheck fb analytics option from main plugin settings
    FB.AppEvents.logEvent( fb_event_name, null, params);
}