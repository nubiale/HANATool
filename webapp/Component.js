sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/ui/hanatool/model/models",
	"./model/errorHandling"	
], function (UIComponent, Device, models, errorHandling) {
		"use strict";
		
	var navigationWithContext = {

	};		
		
	return UIComponent.extend("com.sap.ui.hanatool.Component", {
		
		metadata : {
			manifest: "json"
		},
		
		init : function () {
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			//call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			//additional initialization can be done here
	
			// delegate error handling
			errorHandling.register(this);
	
			// create the views based on the url/hash
			this.getRouter().initialize();
		
		}
		
		/*
		createContent: function () {
			var app = new sap.m.App({
				id: "app"
			});
			var appType = "app";
			var appBackgroundColor = "#FFFFFF";
			if (appType === "app" && appBackgroundColor) {
				app.setBackgroundColor(appBackgroundColor);
			}

			return app;
		},		

		getNavigationPropertyForNavigationWithContext: function (sEntityNameSet, targetPageName) {
			var entityNavigations = navigationWithContext[sEntityNameSet];
			return entityNavigations == null ? null : entityNavigations[targetPageName];
		}	*/	
	});
});