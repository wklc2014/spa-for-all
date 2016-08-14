import routeJS from "../../route.js";
export default{
	methods: {
		handleroute: function (text) {
			console.log(text);
			routeJS.go(text)
		}
	}
}