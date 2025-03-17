const ghpages = require('gh-pages');

// Deploy the "build" folder
ghpages.publish('build', {
    branch: 'gh-pages',
    repo: 'https://github.com/yking-ly/madexp10.git',
    user: {
        name: 'Yash Kotian',
        email: 'yashnkotian3006@gmail.com'
    }
}, (err) => {
    if (err) {
        console.error('Error during deployment:', err);
    } else {
        console.log('Deployment successful!');
    }
});
