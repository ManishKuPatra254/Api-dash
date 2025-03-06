import { Fragment } from "react";
import { Card, Button, Text, Title } from "@tremor/react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7fa] p-4">
        <Card className="w-full max-w-[400px] p-8">
          {/* Logo and Header */}
          <div className="mb-6 flex items-center">
            <Text className="text-purple-500 text-2xl font-bold">Kaie</Text>
          </div>

          <div className="mb-8">
            <Title className="text-xl text-[#32325d] font-semibold mb-1">
              Welcome to Kaie! 👋
            </Title>
            <Text className="text-[#6e6b7b] text-sm">
              Please sign-in to your account and start the adventure
            </Text>
          </div>

          {/* Login Form */}
          <form>
            <div className="mb-4 space-y-2">
              <Label className="text-sm text-[#5e5873]">Email</Label>
              <Input
                placeholder="Enter your email or username"
                className="w-full [&::placeholder]:text-xs"
              />
            </div>

            <div className="mb-4 space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-[#5e5873]">Password</Label>
                <a
                  href="/forgot-password"
                  className="text-xs text-[#7367f0] hover:text-[#5e50ee] transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="············"
                  className="w-full"
                  icon={showPassword ? <EyeOff /> : <Eye />}
                  onIconClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-[#d8d6de] rounded focus:ring-[#7367f0] text-[#7367f0]"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-[#6e6b7b]">
                Remember Me
              </label>
            </div>

            <Link to="/dashboard">
              <Button className="w-full text-sm bg-purple-500 text-white rounded-md">
                Sign in
              </Button>
            </Link>
          </form>
        </Card>
      </div>
    </Fragment>
  );
}
