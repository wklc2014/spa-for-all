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
  login: function(e) {
    e.preventDefault();
    m.request({
      url: "http://localhost:18888/api/login.json",
      data: {username: Auth.username, password: Auth.password}
    }).then(function(data) {
      sessionStorage.setItem("auth-token", data.token);
      Auth.setUsername('');
      Auth.setPassword('');
      m.route.set("/secret");
    })
  }
}

export default Auth;
