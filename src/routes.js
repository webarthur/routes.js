
// Class routes
var routes = (function(history) {
	
	// trigger routes.check when history.pushState
	var pushState = history.pushState;
	history.pushState = function(state) {
		typeof(history.onpushstate) == "function" && history.onpushstate({state: state});
		setTimeout(routes.check, 10);
		return pushState.apply(history, arguments);
	};
	
	// will return this
	var routes = {
		
		root: '/',
		routes: [],
		
		// do something when the routes are checked
		alwaysFunc:function(){},
		
		// setup
		config: function(options) {
			for(option in options)
				this[option] = options[option];
			return this;
		},
		
		// configure a route
		on: function(re, handler) {
			this.routes.push({ re: re, handler: handler});
			return this;
		},
		
		// configure default route
		default: function(handler) {
			this.routes.push({ re: '', handler: handler});
			return this;
		},
		
		// check routes on state change
		check: function(f) {
			var root = routes.clean(routes.root);
			var	path = decodeURI(location.pathname);
			path = routes.clean(path);
			path = routes.clean(path.replace(new RegExp("^"+root), ''));
			for(var i=0; i<routes.routes.length; i++) {
				var match = path.match(routes.routes[i].re);
				if(match) {
					match.shift();
					routes.routes[i].handler.apply({}, [match]);
					break;
				}
			}
			routes.alwaysFunc(path);
			return routes;
		},
		
		// cleanup url slashes
		clean: function(path) {
			return path.replace(/\/$/, '').replace(/^\//, '');
		},
		
		// configure "always" function
		always: function(func){ this.alwaysFunc = func; }
	};
	
	// execute state changes
	window.addEventListener('popstate', routes.check);
	
	// starts on document load
	window.addEventListener('DOMContentLoaded', routes.check);
	
	// return class
	return routes;
	
})(window.history);
