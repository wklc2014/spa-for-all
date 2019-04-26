import m from 'mithril';
import Auth from './utils/Auth.js';

const Login = {
  oncreate: () => {
    var form = layui.form;
    form.on('submit(formDemo)', function(data){
      layer.msg(JSON.stringify(data.field));
      Auth.login();
      return false;
    });
    form.render();
  },
  view: function() {
    const style = {
      padding: '20px',
    }
    return (
      <form class="layui-form">
        <div class="layui-form-item">
          <label class="layui-form-label">UserName</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
              value={Auth.username}
              oninput={m.withAttr("value", Auth.setUsername)}
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">Password</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
              placeholder="请输入密码"
              value={Auth.password}
              oninput={m.withAttr("value", Auth.setPassword)}
            />
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button
              class="layui-btn"
              lay-submit
              lay-filter="formDemo"
            >
              Submit
            </button>
            <button
              type="reset"
              class="layui-btn layui-btn-primary"
            >
              重置
            </button>
          </div>
        </div>

      </form>
    );
  }
}

export default Login;
