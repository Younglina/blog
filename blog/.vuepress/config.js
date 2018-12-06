module.exports = {
	contentLoading: true,
	dest: 'dist',
	theme: 'theme/index.js',
	themeConfig: {
		nav: [
			{text: '小结', link: '/posts/Tips/'},
			{text: '我的项目', link: '/posts/Project/'}
		],
		sidebar: {
			'/posts/Tips/': getSidebar(),
			'/posts/Project/': getProjectSidebar()
		}
	}
};
function getSidebar() {
	return [
		{
			title: '小结',
			collapsable: false,
			children: [
				'',
				'http',
				'some-tips'
			]
		}
	];
}

function getProjectSidebar() {
	return [
		{
			title: '我的项目',
			collapsable: false,
			children: [
				'',
				'electron-cloud-music',
				'my-trao',
				'wx-cloud-music',
				'wx-gitinfo'
			]
		}
	];
}
