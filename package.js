Package.describe({
    'summary': 'BouncyFlip effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '1.1.2',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-bouncyflip.git',
    'name': 'juliancwirko:s-alert-bouncyflip'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@2.3.3', ['client']);
    api.imply('juliancwirko:s-alert@2.3.3', ['client']);
    api.addFiles([
        's-alert-bouncyflip.css'
    ], 'client');
});
