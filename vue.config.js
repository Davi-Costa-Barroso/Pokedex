const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/styles/functions";
					@import "@/styles/colors";
					@import "@/styles/variables";
				`,
			},
		},
	},
})
