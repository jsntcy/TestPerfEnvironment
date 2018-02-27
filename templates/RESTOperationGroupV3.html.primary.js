var contentCommon = require('./content.common.js');

exports.transform = function (model) {
	model._op_contentTemplate = 'RESTOperationGroup';

	return model;
};