import m from 'mithril';

var Auth = {
    username: "",
    password: "",
    setUsername: function(value) {
        Auth.username = value;
    },
    setPassword: function(value) {
        Auth.password = value;
    },
    login: function() {
        m.request({
            url: "http://localhost:15001/api/login.json",
            data: {username: Auth.username, password: Auth.password}
        }).then(function(data) {
            localStorage.setItem("auth-token": data.token)
            m.route.set("/secret")
        })
    }
}

export default Auth;
