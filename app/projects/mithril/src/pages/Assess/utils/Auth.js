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
    m.request({
      url: "/user",
      method: 'post',
      data: {username: Auth.username, password: Auth.password}
    }).then(function(data) {
      console.log('data>>>', data);
      sessionStorage.setItem("auth-token", data.token);
      Auth.setUsername('');
      Auth.setPassword('');
      m.route.set("/secret");
    })
  }
}

export default Auth;
