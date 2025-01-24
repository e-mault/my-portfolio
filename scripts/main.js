document.addEventListener('DOMContentLoaded', function() {
    var emailLink = document.getElementById('emailLink');

    var user = '&#101;&#114;&#121;&#110;&#046;&#109;&#097;&#117;&#108;&#116;';
    var domain = '&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;';
    
    function decodeHtmlEntities(str) {
        var doc = new DOMParser().parseFromString(str, 'text/html');
        return doc.documentElement.textContent;
    }

    var decodedUser = decodeHtmlEntities(user);
    var decodedDomain = decodeHtmlEntities(domain);
    
    var email = decodedUser + '@' + decodedDomain;

    emailLink.href = 'mailto:' + email;
});
