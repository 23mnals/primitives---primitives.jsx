import { ChevronDownIcon, TerminalIcon, XIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Switch } from "../../components/ui/switch";

export const Primitives = () => {
  // Data for repository cards
  const repoData = [
    "@radix-ui/primitives",
    "@radix-ui/colors",
    "@radix-ui/react",
  ];

  // Data for notification cards
  const notificationData = {
    title: "Scheduled: Catch up",
    date: "Friday, February 10, 2023 at 5:57 PM",
  };

  return (
    <div className="bg-[#dfe5f2] flex flex-row justify-center w-full">
      <div className="bg-app-background w-full max-w-[1405px] min-h-[1242px] relative p-8">
        <header className="mb-16">
          <h1 className="font-heading-4xl font-[number:var(--heading-4xl-font-weight)] text-slate-900 text-[length:var(--heading-4xl-font-size)] tracking-[var(--heading-4xl-letter-spacing)] leading-[var(--heading-4xl-line-height)] [font-style:var(--heading-4xl-font-style)]">
            Primitives
          </h1>
          <p className="font-base font-[number:var(--base-font-weight)] text-text text-[length:var(--base-font-size)] tracking-[var(--base-letter-spacing)] leading-[var(--base-line-height)] [font-style:var(--base-font-style)]">
            Those are the atomic parts that make your components, do NOT edit
            unless you strictly want to.
          </p>
        </header>

        {/* Accordion Section */}
        <section className="w-[540px] h-56 absolute top-[134px] left-[30px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <Accordion type="single" collapsible className="w-[500px] mx-auto">
            <AccordionItem
              value="item-1"
              className="border-2 border-solid border-black shadow-box-shadow rounded-[5px] overflow-hidden bg-main"
            >
              <AccordionTrigger className="p-4 font-heading-base font-[number:var(--heading-base-font-weight)] text-text text-[length:var(--heading-base-font-size)] tracking-[var(--heading-base-letter-spacing)] leading-[var(--heading-base-line-height)] [font-style:var(--heading-base-font-style)]">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white">
                <span className="font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 w-[500px] mx-auto">
            <div className="flex w-full items-start rounded-[5px] overflow-hidden border-2 border-solid border-black shadow-box-shadow">
              <div className="justify-between p-4 w-full flex items-center bg-main">
                <div className="font-heading-base font-[number:var(--heading-base-font-weight)] text-text text-[length:var(--heading-base-font-size)] tracking-[var(--heading-base-letter-spacing)] leading-[var(--heading-base-line-height)] [font-style:var(--heading-base-font-style)]">
                  Is it accessible?
                </div>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
        </section>

        {/* Alert Section */}
        <section className="w-[564px] h-56 absolute top-[134px] left-[590px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <Alert className="w-[524px] mx-auto bg-main shadow-box-shadow rounded-[5px] overflow-hidden border-2 border-solid border-black p-4">
            <TerminalIcon className="h-4 w-4" />
            <AlertTitle className="font-heading-base-16 font-[number:var(--heading-base-16-font-weight)] text-text text-[length:var(--heading-base-16-font-size)] tracking-[var(--heading-base-16-letter-spacing)] leading-[var(--heading-base-16-line-height)] [font-style:var(--heading-base-16-font-style)]">
              Alert
            </AlertTitle>
            <AlertDescription className="pl-7 font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>

          <Alert className="w-[524px] mx-auto mt-8 bg-black rounded-[5px] overflow-hidden border-2 border-solid border-black p-4">
            <TerminalIcon className="h-4 w-4 text-white" />
            <AlertTitle className="font-heading-base-16 font-[number:var(--heading-base-16-font-weight)] text-white text-[length:var(--heading-base-16-font-size)] tracking-[var(--heading-base-16-letter-spacing)] leading-[var(--heading-base-16-line-height)] [font-style:var(--heading-base-16-font-style)]">
              Alert
            </AlertTitle>
            <AlertDescription className="pl-7 font-sm font-[number:var(--sm-font-weight)] text-white text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        </section>

        {/* Avatar Section */}
        <section className="w-20 h-[139px] absolute top-[134px] left-[1174px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <Avatar className="w-10 h-10 mx-auto mt-5 border-2 border-solid border-black">
            <AvatarImage
              src="https://c.animaapp.com/pXslWEem/img/bobby@2x.png"
              alt="Bobby"
            />
          </Avatar>

          <Avatar className="w-10 h-10 mx-auto mt-5 bg-white border-2 border-solid border-black">
            <AvatarFallback className="font-base font-[number:var(--base-font-weight)] text-text text-[length:var(--base-font-size)] tracking-[var(--base-letter-spacing)] leading-[var(--base-line-height)] [font-style:var(--base-font-style)]">
              BF
            </AvatarFallback>
          </Avatar>
        </section>

        {/* Badge Section */}
        <section className="w-[101px] h-[100px] absolute top-[134px] left-[1274px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <Badge className="absolute top-5 left-5 bg-main rounded-[5px] border-2 border-solid border-black px-2.5 py-0.5 font-xs font-[number:var(--xs-font-weight)] text-text text-[length:var(--xs-font-size)] tracking-[var(--xs-letter-spacing)] leading-[var(--xs-line-height)] [font-style:var(--xs-font-style)]">
            badge
          </Badge>

          <Badge className="absolute top-[60px] left-5 bg-white rounded-[5px] border-2 border-solid border-black px-2.5 py-0.5 font-xs font-[number:var(--xs-font-weight)] text-text text-[length:var(--xs-font-size)] tracking-[var(--xs-letter-spacing)] leading-[var(--xs-line-height)] [font-style:var(--xs-font-style)]">
            badge
          </Badge>
        </section>

        {/* Button Section */}
        <section className="flex flex-col w-[149px] items-start justify-center gap-4 p-5 absolute top-[398px] left-[30px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <Button className="h-10 bg-main border-2 border-solid border-black shadow-box-shadow font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <Button className="h-9 bg-main border-2 border-solid border-black shadow-box-shadow font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <Button className="h-11 w-full bg-main border-2 border-solid border-black shadow-box-shadow font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <img
            className="w-11 h-11"
            alt="Size icon variant"
            src="https://c.animaapp.com/pXslWEem/img/size-icon--variant-default.svg"
          />

          <Button className="h-10 bg-main border-2 border-solid border-black font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <Button className="h-9 bg-main border-2 border-solid border-black font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <Button className="h-11 bg-main border-2 border-solid border-black font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <img
            className="w-10 h-10"
            alt="Size icon variant no"
            src="https://c.animaapp.com/pXslWEem/img/size-icon--variant-no-shadow.svg"
          />

          <Button className="h-10 bg-white border-2 border-solid border-black shadow-box-shadow font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <Button className="h-9 bg-white border-2 border-solid border-black shadow-box-shadow font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <Button className="h-11 bg-white border-2 border-solid border-black shadow-box-shadow font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
            Button
          </Button>

          <img
            className="mb-[-4.00px] w-11 h-11"
            alt="Size icon variant"
            src="https://c.animaapp.com/pXslWEem/img/size-icon--variant-neutral.svg"
          />
        </section>

        {/* Checkbox Section */}
        <section className="w-14 h-[92px] absolute top-[398px] left-[509px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <div className="w-5 h-5 top-[18px] left-[18px] absolute border-2 border-solid border-black">
            <Checkbox className="opacity-0" />
          </div>

          <div className="w-5 h-5 top-[54px] left-[18px] absolute">
            <img
              className="w-5 h-5"
              alt="State true"
              src="https://c.animaapp.com/pXslWEem/img/state-true.svg"
            />
          </div>
        </section>

        {/* Input Section - Small */}
        <section className="w-[272px] h-[200px] absolute top-[398px] left-[219px] border border-dashed border-[#9747ff] rounded-[5px] overflow-hidden">
          <Input
            className="w-56 h-10 absolute top-5 left-5 bg-white rounded-[5px] border-2 border-solid border-black px-3 py-2 font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]"
            defaultValue="John Doe"
          />

          <Input
            className="w-56 h-10 absolute top-20 left-5 bg-white rounded-[5px] border-2 border-solid border-black px-3 py-2 font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)] opacity-50"
            defaultValue="John Doe"
          />

          <div className="w-[232px] h-12 absolute top-[140px] left-5 flex items-center justify-around p-1 rounded-[5px] border-2 border-solid border-black">
            <Input
              className="w-56 h-10 bg-white rounded-[5px] border-2 border-solid border-black px-3 py-2 font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]"
              defaultValue="John Doe"
            />
          </div>
        </section>

        {/* Repository Cards Section */}
        <section className="w-[780px] h-[226px] absolute top-[398px] left-[590px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <div className="inline-flex items-center gap-2 flex-col absolute top-5 left-5">
            <Card className="w-[350px] bg-main rounded-[5px] border-2 border-solid border-black">
              <CardContent className="flex items-center gap-2 px-4 py-2">
                <div className="flex-1 grow h-5">
                  <div className="font-heading-sm font-[number:var(--heading-sm-font-weight)] text-text text-[length:var(--heading-sm-font-size)] tracking-[var(--heading-sm-letter-spacing)] leading-[var(--heading-sm-line-height)] [font-style:var(--heading-sm-font-style)]">
                    @peduarte stared 3 repositories
                  </div>
                </div>
                <img
                  className="w-8 h-8"
                  alt="Button"
                  src="https://c.animaapp.com/pXslWEem/img/button-1.svg"
                />
              </CardContent>
            </Card>

            <Card className="w-full bg-main rounded-[5px] border-2 border-solid border-black">
              <CardContent className="flex items-center pl-3 pr-14 py-2">
                <div className="font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
                  @radix-ui/primitives
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="inline-flex items-center gap-2 flex-col absolute top-5 left-[410px]">
            <Card className="w-[350px] bg-main rounded-[5px] border-2 border-solid border-black">
              <CardContent className="flex items-center gap-2 px-4 py-2">
                <div className="flex-1 grow h-5">
                  <div className="font-heading-sm font-[number:var(--heading-sm-font-weight)] text-text text-[length:var(--heading-sm-font-size)] tracking-[var(--heading-sm-letter-spacing)] leading-[var(--heading-sm-line-height)] [font-style:var(--heading-sm-font-style)]">
                    @peduarte stared 3 repositories
                  </div>
                </div>
                <img
                  className="w-8 h-8"
                  alt="Button"
                  src="https://c.animaapp.com/pXslWEem/img/button.svg"
                />
              </CardContent>
            </Card>

            {repoData.map((repo, index) => (
              <Card
                key={index}
                className="w-full bg-main rounded-[5px] border-2 border-solid border-black"
              >
                <CardContent className="flex items-center pl-3 pr-14 py-2">
                  <div className="font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
                    {repo}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Switch Section */}
        <section className="w-[88px] h-[108px] absolute top-[616px] left-[219px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <div className="w-12 h-6 top-5 left-5 bg-white rounded-3xl overflow-hidden absolute border-2 border-solid border-black">
            <Switch className="opacity-0" />
            <div className="left-1.5 relative w-4 h-4 top-1 bg-white rounded-3xl border-2 border-solid border-black" />
          </div>

          <div className="w-12 h-6 top-16 left-5 bg-main rounded-3xl overflow-hidden absolute border-2 border-solid border-black">
            <Switch className="opacity-0" />
            <div className="left-[26px] relative w-4 h-4 top-1 bg-white rounded-3xl border-2 border-solid border-black" />
          </div>
        </section>

        {/* Input Section - Large */}
        <section className="flex flex-col w-[455px] h-[321px] items-start justify-center gap-5 p-5 absolute top-[653px] left-[355px] rounded-[5px] overflow-hidden border border-dashed border-text">
          <Input
            className="h-20 px-3 py-2 w-full bg-white rounded-[5px] border-2 border-solid border-black font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]"
            defaultValue="John Doe"
          />

          <Input
            className="h-20 px-3 py-2 w-full bg-white rounded-[5px] border-2 border-solid border-black font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)] opacity-50"
            defaultValue="John Doe"
          />

          <div className="w-full h-20 flex items-center justify-around p-1 rounded-[5px] border-2 border-solid border-black">
            <Input
              className="flex-1 h-full bg-white rounded-[5px] border-2 border-solid border-black px-3 py-2 font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]"
              defaultValue="John Doe"
            />
          </div>
        </section>

        {/* Notification Cards Section */}
        <section className="w-[428px] h-[252px] absolute top-[653px] left-[836px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
          <Card className="w-[388px] h-24 absolute top-5 left-5 bg-main shadow-box-shadow rounded-[5px] border-2 border-solid border-black">
            <CardContent className="p-0">
              <div className="relative h-24">
                <div className="flex w-full h-24 items-center justify-between pl-6 pr-8 py-6">
                  <div className="inline-flex flex-col items-start justify-center gap-1">
                    <div className="font-heading-sm font-[number:var(--heading-sm-font-weight)] text-text text-[length:var(--heading-sm-font-size)] tracking-[var(--heading-sm-letter-spacing)] leading-[var(--heading-sm-line-height)] [font-style:var(--heading-sm-font-style)]">
                      {notificationData.title}
                    </div>
                    <div className="font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
                      {notificationData.date}
                    </div>
                  </div>
                  <Button className="h-9 bg-white rounded-[5px] border-2 border-solid border-black font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
                    Undo
                  </Button>
                </div>
                <XIcon className="absolute w-4 h-4 top-2 right-4" />
              </div>
            </CardContent>
          </Card>

          <Card className="w-[388px] h-24 absolute top-[136px] left-5 bg-black rounded-[5px] border-2 border-solid border-black shadow-box-shadow">
            <CardContent className="p-0">
              <div className="relative h-24">
                <div className="flex w-full h-24 items-center justify-between pl-6 pr-8 py-6">
                  <div className="inline-flex flex-col items-start justify-center gap-1">
                    <div className="font-heading-sm font-[number:var(--heading-sm-font-weight)] text-white text-[length:var(--heading-sm-font-size)] tracking-[var(--heading-sm-letter-spacing)] leading-[var(--heading-sm-line-height)] [font-style:var(--heading-sm-font-style)]">
                      {notificationData.title}
                    </div>
                    <div className="font-sm font-[number:var(--sm-font-weight)] text-white text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
                      {notificationData.date}
                    </div>
                  </div>
                  <Button className="h-9 bg-white rounded-[5px] border-2 border-solid border-black font-sm font-[number:var(--sm-font-weight)] text-text text-[length:var(--sm-font-size)] tracking-[var(--sm-letter-spacing)] leading-[var(--sm-line-height)] [font-style:var(--sm-font-style)]">
                    Undo
                  </Button>
                </div>
                <XIcon className="absolute w-4 h-4 top-2 right-4 text-white" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
