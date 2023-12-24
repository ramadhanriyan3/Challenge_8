"use client";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  function setCookie(name: string, value: string, days: number) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  const handlerSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const formData = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const response = await axios.post(
        "http://localhost:2700/login",
        formData
      );
      const jwtToken = response.data.token;
      localStorage.setItem("token", jwtToken);
      setCookie("token", jwtToken, 1);
      setCookie("userName", response.data.name, 1);
      setCookie("role", response.data.role, 1);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("loginerror", error.response || error);
    }
  };

  return (
    <div>
      <p className="heading-bold"> Welcome, Admin BCR </p>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          type="submit"
          style={{ width: "250px", backgroundColor: "blue" }}
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default Login;
