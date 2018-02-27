var contentCommon = require('./content.common.js');

exports.transform = function (model) {
	model._op_contentTemplate = 'RESTOperation';

	buildUriParameters(model);
	buildRequestBody(model);
	buildDefinitions(model);
	buildExamples(model);

	//avoid loop dup
	initializeCommon(model.uriParameters, true, true, false, false, false);
	initializeCommon(model.requestHeader, false, true, true, false, false);
	initializeRequestBody(model.requestBody);
	initializeResponse(model.responses);
	initializeExamples(model.examples);
	initializeDefinitions(model.definitions);
	initializeSecurity(model.security);
	setConsumesMediaType(model);
	setProducesMediaType(model);

	buildTypeList(model.uriParameters, model, false);
	buildTypeList(model.requestHeader, model, false);
	buildRequestBodyTypeList(model.requestBody, model);
	buildTypeList(model.responses, model, false);
	buildDefinitionsTypeList(model);

	return model;
};

function buildUriParameters(model) {
	if (model.uriParameters === undefined || model.uriParameters === null) {
		return;
	}

	for (var i = 0; i < model.uriParameters.length; i++) {
		var item = model.uriParameters[i];
		if (item.in) {
			switch (item.in) {
				case 'path':
					item.sortID = -1;
					break;
				case 'query':
					item.sortID = 0;
					break;
				case 'header':
					item.sortID = 1;
					parameterType = parameterTypes.header;
					break;
				case 'body':
					item.sortID = 2;
					parameterType = parameterTypes.body;
					addToBreadcrumb = false;
					break;
				default:
					item.sortID = -2;
					break;
			}
		} else {
			item.sortID = -2;
		}
	}

	model.uriParameters.sort(sortByCustomID);
}

function buildRequestBody(model) {
	if (model.requestBody === undefined || model.requestBody === null) {
		return;
	}

	if (model.requestBody.length > 1) {
		model.showRequestBodiesTable = true;
	} else {
		model.showRequestBodiesTable = false;
	}

	buildSummaryTable(model.requestBody);
}

function buildDefinitions(model) {
	if (model.definitions === undefined || model.definitions === null) {
		return;
	}

	if (model.definitions.length > 1) {
		model.showDefinitionsTable = true;
	} else {
		model.showDefinitionsTable = false;
	}

	for (var i = 0; i < model.definitions.length; i++) {
		if (model.definitions[i].kind === 'enum') {
			model.definitions[i].hasType = false;
		}
		else {
			model.definitions[i].hasType = true;
		}

		if (model.definitions[i].properties !== undefined && model.definitions[i].properties !== null) {
			for (var j = 0; j < model.definitions[i].properties.length; j++) {
				var prop = model.definitions[i].properties[j];
				if (prop.description === undefined) {
					prop.description = null;
				}
			}
		}
	}
	
	buildSummaryTable(model.definitions);
}

function buildExamples(model) {
	if (model.examples === undefined || model.examples === null) {
		return;
	}

	if (model.examples.length > 1) {
		model.showExamplesTable = true;
	} else {
		model.showExamplesTable = false;
	}

	for (var i = 0; i < model.examples.length; i++) {
		if (model.examples[i].responses !== null) {
			for (var j = 0; j < model.examples[i].responses.length; j++) {
				var resp = model.examples[i].responses[j];
				if (model.examples[i].responses.length > 0 && j > 0) {
					resp.className = ' stack';
				}
				else {
					resp.className = '';
				}
			}
		}
	}

	buildSummaryTable(model.examples);
}

function buildSummaryTable(obj) {
	if (obj === undefined || obj === null || obj.length === 1 ) {
		return;
	}

	for (var i = 0; i < obj.length; i++) {
		var htmlID = contentCommon.formatAsBookmark(obj[i].name);
		var	html = '<a href="#' + htmlID + '">' + contentCommon.breakText(obj[i].name) + '</a>';

		obj[i].tableNameHTML = html;
		obj[i].htmlID = htmlID;
	}

	obj.sort(function (a, b) {
		return a.htmlID === b.htmlID ? 0 : (a.htmlID < b.htmlID ? -1 : 1);
	});
}

function initializeCommon(obj, initIn, initIsRequired, initConsumes, initProduces, sort) {
	if (obj === undefined || obj === null) {
		return;
	}

	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		item.hasType = true;

		if (item.description === undefined)	{
			item.description = '';
		}
	
		if (item.name === undefined) {
			item.name = '';
		}
	
		if (item.types === undefined) {
			item.types = [];
		}
	
		if (item.typesTitle === undefined) {
			item.typesTitle = '';
		}
	
		if (item.format === undefined) {
			item.format = '';
		}
	
		if (item.pattern === undefined)	{
			item.pattern = '';
		}

		if (initIn && item.in === undefined) {
			item.in = '';
		}

		if (initIsRequired && item.isRequired === undefined) {
			item.isRequired = false;
		}
	}

	if (sort) {
		obj.sort(sortByName);
	}
}

function initializeRequestBody(obj) {
	if (obj === undefined || obj === null) {
		return;
	}

	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		if (item.description === undefined) {
			item.description = '';
		}
	
		if (item.name === undefined) {
			item.name = '';
		}

		if (item.parameters === undefined) {
			item.parameters = null;
		}
		else if (item.parameters !== null) {
			initializeCommon(item.parameters, false, true, true, false, true);
		}
	}
}

function initializeResponse(obj) {
	if (obj === undefined || obj === null) {
		return;
	}

	initializeCommon(obj, false, false, false, true, true);

	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		if (item.headers === undefined)	{
			item.headers = null;
		}
	}
}

function initializeExamples(obj) {
	if (obj === undefined || obj === null) {
		return;
	}
			
	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		if (item.name === undefined) {
			item.name = '';
		}

		if (item.request === undefined)	{
			item.request = '';
		}
		else if (item.request !== null) {
			if (item.request.uri === undefined) {
				item.request.uri = '';
			}
			else if (item.request.uri !== null) {
				item.request.headerStr = item.request.uri;
			}

			if (item.request.headers === undefined) {
				item.request.headers = '';

				if (item.request.headerStr === undefined) {
					item.request.headerStr = '';
				}
			}
			else if (item.request.headers !== null) {
				if (item.request.headerStr === undefined) {
					item.request.headerStr = '';
				}

				for (var k = 0; k < item.request.headers.length; k++) {
					if (item.request.headerStr.length > 0) {
						item.request.headerStr += '\r';
					}

					if (item.request.headers[k].name && item.request.headers[k].value) {
						item.request.headerStr += item.request.headers[k].name + ': ' + item.request.headers[k].value;
					}
				}
			}

			if (item.request.body === undefined) {
				item.request.body = '';
			}
		}

		if (item.responses === undefined) {
			item.responses = null;
		}
		else if (item.responses !== null) {
			for (var j = 0; j < item.responses.length; j++) {
				var resp = item.responses[j];
				if (resp.statusCode === undefined) {
					resp.statusCode = '';
				}
		
				if (resp.headers === undefined) {
					resp.headers = '';
					resp.headerStr = '';
				}
				else if (resp.headers !== null) {
					resp.headerStr = '';
					for (var k = 0; k < resp.headers.length; k++) {
						if (resp.headerStr.length > 0) {
							resp.headerStr += '\r';
						}

						if (resp.headers[k].name && resp.headers[k].value) {
							resp.headerStr += resp.headers[k].name + ': ' + resp.headers[k].value;
						}
					}
				}

				if (resp.body === undefined) {
					resp.body = '';
				}
			}
		}
	}
}

function initializeDefinitions(obj) {
	if (obj === undefined || obj === null) {
		return;
	}
			
	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		if (item.name === undefined)	{
			item.name = '';
		}

		if (item.kind === undefined)	{
			item.kind = '';
		}

		if (item.properties === undefined)	{
			item.properties = null;
		}
		else if (item.properties !== null) {
			initializeCommon(item.properties, false, false, false, true, true);
		}
	}
}

function initializeSecurity(obj, sort) {
	if (obj === undefined || obj === null) {
		return;
	}
			
	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		if (item.description === undefined)	{
			item.description = '';
		}

		if (item.type === undefined)	{
			item.type = [];
		}
	
		if (item.name === undefined)	{
			item.name = '';
		}
	
		if (item.in === undefined) {
			item.in = '';
		}

		if (item.flow === undefined)	{
			item.flow = '';
		}
	
		if (item.authorizationUrl === undefined)	{
			item.authorizationUrl = '';
		}
	
		if (item.tokenUrl === undefined)	{
			item.tokenUrl = '';
		}

		if (item.scopes === undefined)	{
			item.scopes = null;
		}
	}

	if (sort) {
		obj.sort(sortByName);
	}
}

function setConsumesMediaType(model) {
	if (model.consumes === undefined || model.consumes === null) {
		return;
	}

	if (model.consumes && model.consumes.length > 0 && (model.consumes[0] !== 'application/json' || model.consumes.length > 1)) {
		model.consumesMediaTypes = 'Media Types: ';
		model.consumes.forEach(function (consume, index) {
			if (index !== 0) {
				model.consumesMediaTypes += ', ';
			}
			model.consumesMediaTypes += '\"' + consume + '\"';
		});
	}
	else {
		model.consumesMediaTypes = '';
	}
}
function setProducesMediaType(model) {
	if (model.responses === undefined || model.responses === null ||
		model.produces === undefined || model.produces === null) {
		return;
	}

	for (var i = 0; i < model.responses.length; i++) {
		model.responses[i].producesMediaTypes = [];
		if (model.produces && model.produces.length > 0 && (model.produces[0] !== 'application/json' || model.produces.length > 1)) {
			model.responses[i].producesMediaTypes = 'Media Types: ';
			model.produces.forEach(function (produce, index) {
				if (index !== 0) {
					model.responses[i].producesMediaTypes += ', ';
				}
				model.responses[i].producesMediaTypes += '\"' + produce + '\"';
			});
		}
	}
}

function buildRequestBodyTypeList(obj, model) {
	if (obj === undefined || obj === null) {
		return;
	}

	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		if (item.parameters !== undefined && item.parameters !== null) {
			buildTypeList(item.parameters, model, false);
		}
	}
}

function buildTypeList(obj, model, sort) {
	if (obj === undefined || obj === null) {
		return;
	}

	for (var i = 0; i < obj.length; i++) {
		var item = obj[i];

		if (item.types !== undefined && item.types !== null)
		{
			if (sort) {
				item.types.sort(function (a, b) {
					return a.uid === b.uid ? 0 : (a.uid < b.uid ? -1 : 1);
				});
			}

			for (var j = 0; j < item.types.length; j++) {
				if (item.types[j].isDictionary) {
					if (item.types[j].uid === 'object' && item.types[j].additionalTypes !== undefined && 
						item.types[j].additionalTypes !== null && item.types[j].additionalTypes.length === 2 && 
						item.types[j].additionalTypes[0].uid !== null && item.types[j].additionalTypes[1].uid !== null) {
						item.types[j].uid = '&lt;' + contentCommon.breakText(item.types[j].additionalTypes[0].uid) + ',&nbsp;' + contentCommon.breakText(item.types[j].additionalTypes[1].uid) + '&gt;';
						item.types[j].typeHref = '';
						
						item.types[j].additionalTypes = null;
					}
				}
				else {
					item.types[j].typeHref = getHRef(item.types[j].uid, model);
					item.types[j].uid = contentCommon.breakText(item.types[j].uid);
				}
			}
		}
	}
}

function buildDefinitionsTypeList(model) {
	if (model.definitions === undefined || model.definitions === null) {
		return;
	}

	for (var i = 0; i < model.definitions.length; i++) {
		buildTypeList(model.definitions[i].properties, model, true);
	}
}

function getHRef(name, model) {
	if (name === undefined || name === null ||
		model.definitions === undefined || model.definitions === null) {
		return '';
	}

	for (var i = 0; i < model.definitions.length; i++) {
		if (model.definitions[i].name === name) 
		{
			return model.definitions[i].htmlID;
		}
	}

	return '';
}

function sortByCustomID(a, b) {
	if (a.sortID === b.sortID) {
		return 0;
	} else if (a.sortID < b.sortID) {
		return -1;
	} else {
		return 1;
	}
}

function sortByName(a, b) {
	return a.name === b.name ? 0 : (a.name < b.name ? -1 : 1);
}

