"use client";

import Logo from "../ui/logo";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { Box, Card } from "@radix-ui/themes";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="flex h-screen bg-white dark:bg-black">
      <div className="absolute top-6 left-6"></div>
      <div className="w-[50%] z-50 flex flex-col items-center my-20 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex max-w-2xl items-baseline gap-2">
          <div className="h-20 w-20">
            <Logo
              width={80}
              height={100}
              className="text-black dark:text-white"
            />
          </div>
          <h1 className="text-4xl font-bold">RodoApp</h1>
        </div>

        <div className="flex h-screen flex-col w-full items-center justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="playfair text-8xl font-bold tracking-tight">
              Login
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Box maxWidth="240px">
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="user"
                      className="block text-sm font-medium leading-6"
                    >
                      Login Protheus
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="user"
                        name="user"
                        type="user"
                        required
                        autoComplete="user-new"
                        onChange={(event) => setUser(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6"
                    >
                      Senha
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        onChange={(event) => setPassword(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <Button
                    variant="default"
                    className="w-full hover:bg-blue-400"
                    type="submit"
                    value="submit"
                  >
                    Entrar
                  </Button>
                </form>
              </Card>
            </Box>
          </div>
        </div>
        <div className="">Rodoparaná Implementos Rodoviários LTDA.</div>
      </div>
      <div className="absolute top-0 right-0 ">
        <img
          src="src/assets/bg.png"
          className="h-screen w-[80vw] object-cover"
        />
      </div>
    </main>
  );
}
