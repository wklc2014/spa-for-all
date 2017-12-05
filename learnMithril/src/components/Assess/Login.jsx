import m from 'mithril';
import Auth from './utils/Auth.js';

const Login = {
    view: function() {
        const style = {
            padding: '20px',
        }
        return (
            <form style={style}>
                <div class="form-group">
                    <label for="exampleInputEmail1">UserName</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="请输入用户名"
                        value={Auth.username}
                        oninput={m.withAttr("value", Auth.setUsername)}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="请输入密码"
                        value={Auth.password}
                        oninput={m.withAttr("value", Auth.setPassword)}
                    />
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                    onclick={Auth.login}
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default Login;
