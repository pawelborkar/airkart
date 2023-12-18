'use client';
import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

const Auth = () => {
  const { register, handleSubmit } = useForm();
  const [isSignIn, setIsSignIn] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center">
      <Card
        className={`max-w-full h-[480px] backdrop-blur-md bg-white/10 w-96 p-4`}
      >
        <CardHeader className="h-10 flex justify-center items-center">
          <p className="text-2xl font-bold">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </p>
        </CardHeader>
        <CardBody className="overflow-hidden h-4/5">
          <form
            className="w-full h-full flex flex-col justify-around"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              isRequired
              type="email"
              {...register('email')}
              label="Email"
              labelPlacement="outside"
              variant="bordered"
              placeholder="Enter your email"
              className="max-w-xs outline-none focus-visible:outline-none"
            />
            <Input
              label="Password"
              {...register('password')}
              isRequired
              labelPlacement="outside"
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <Eye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isPasswordVisible ? 'text' : 'password'}
              className="max-w-xs outline-none focus-visible:outline-none focus:border-sky-400"
            />

            {!isSignIn && (
              <Input
                label="Confirm password"
                {...register('confirm-password')}
                isRequired
                labelPlacement="outside"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {isConfirmPasswordVisible ? (
                      <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <Eye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isConfirmPasswordVisible ? 'text' : 'password'}
                className="max-w-xs outline-none focus-visible:outline-none focus:border-sky-400"
              />
            )}
            <Button
              fullWidth
              variant="shadow"
              className="bg-gradient-to-tr from-pink-500 to-orange-500 text-white"
              type="submit"
            >
              <p>{isSignIn ? 'Sign In' : 'Sign Up'}</p>
            </Button>
          </form>
        </CardBody>
        <CardFooter className="flex flex-col h-1/5 justify-around">
          <div className="text-slate-500 dark:text-white/50">
            <p>{isSignIn ? "Didn't have an account?" : 'Have an account?'}</p>
          </div>
          <Button variant="shadow" fullWidth color="primary">
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
