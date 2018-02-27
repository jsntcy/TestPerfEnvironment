var opCommon = require('./op.common.js');
var chromeCommon = require('./chrome.common.js');

exports.transform = function (model) {
	chromeCommon.preProcessSDPMetadata(model);

	model.layout = model.layout || "Reference";
	model._op_layout = model.layout;
	model.pagetype = "Reference";

	if (model.name) {
		model.title = model.name;
	}

	chromeCommon.makeTitle(model);
	if (model.summary) {
		model.description = chromeCommon.removeTags(model.summary);
	}

	var canonicalUrl;
	if (model._op_canonicalUrlPrefix && model._path) {
		canonicalUrl = opCommon.getCanonicalUrl(model._op_canonicalUrlPrefix, model._path, model.layout, model._versionPath);
		canonicalUrl = canonicalUrl.replace('.experimental', '');
	}
	model.canonical_url = canonicalUrl;

	model.toc_asset_id = model.toc_asset_id || model._tocPath;
	model.toc_rel = model.toc_rel || model._tocRel;
	if (typeof templateUtility !== 'undefined' && model.breadcrumb_path && model._path) {
		model.breadcrumb_path = templateUtility.resolveSourceRelativePath(model.breadcrumb_path, model._path);
	}

	// Clean up unused predefined properties
	var resetKeys = [
		"apiVersion",
		"name",
		"operations",
		"service",
		"summary",
		"uid"
	];

	model = opCommon.resetKeysAndSystemAttributes(model, resetKeys, true);
	opCommon.resolvePdfUrlTemplate(model);
	chromeCommon.processMetadata(model, canonicalUrl);

	return {
		content: JSON.stringify(model)
	};
}