const { override, fixBabelImports } = require('customize-cra');


const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};

module.exports = override(
	// 关闭mapSource
	rewiredMap(),
   	fixBabelImports('import', {
     	libraryName: 'antd-mobile',
     	style: "css",
   }),
);
