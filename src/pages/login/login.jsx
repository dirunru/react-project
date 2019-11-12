import React, { Component } from "react";
import { Form, Icon, Input, Button,Checkbox } from "antd";
import styles from "./login.module.less";
const Item = Form.Item; //不能写在import的上面

/* 
    登陆的路由组
*/
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // this.props.form 获取form对象
    // this.get
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);//获取的是校验完成之后的表单的值
        // this.getFieldsValue = this.props.form.getFieldsValue;//获得表单所有控件的值
        // this.props.form.getFieldsValue（“username”）//获得指定控件的值
        this.props.history.push("/");//react的页面跳转
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.login}>
        <header className={styles.login_header}>
          <h1>react项目学习</h1>
        </header>
        <section className={styles.login_content}>
          <h2>登陆</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                  autoComplete="current-username"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="/">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                style={{width:"100%"}}>
                Log in
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}
Login = Form.create()(Login)

export default Login
