"use client";

import { Heading, Box, Flex, Avatar, Button, Link } from "@radix-ui/themes";
import Select from "react-select";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ({ params }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = (e) => {
    const { id: selected } = e.target;
    router.push(`/Gabow/${params.place}/${selected}`);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-gray-800 h-screen">
      <div className="flex justify-start">
        <div className="elemento">
          <Link href="/Gabow">
            <Heading size="8" className="ml-6 md:mt-4" color="cyan">
              GABOW
            </Heading>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="buscador relative md:mt-4">
          <Select
            placeholder={`Buscar en ${decodeURIComponent(params.place)}`}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <div className="elemento">
          {session ? (
            <div className="mr-6 md:mt-4 rounded-lg">
              <Flex gap="3" align="center">
                <Link href={`/Gabow/Profile/${session.user.name}`}>
                  <Avatar
                    size="3"
                    src={session.user.image}
                    radius="full"
                    fallback="T"
                  />
                </Link>
                <Box>
                  <Button onClick={() => signOut()}>Log out</Button>
                </Box>
              </Flex>
            </div>
          ) : (
            <Box maxWidth="240px" className="mr-6 md:mt-4 rounded-lg">
              <Flex gap="3" align="center">
                <Avatar size="3" src="user.png" fallback="u" />
                <Box>
                  <Button onClick={() => signIn()}>Log in</Button>
                </Box>
              </Flex>
            </Box>
          )}
        </div>
      </div>

      <div className="pt-18 flex justify-center items-center">
        <svg
          width="1280"
          height="720"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient
              x1="338.549"
              y1="274.354"
              x2="278.451"
              y2="52.6455"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill0"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="309.38"
              y1="504.014"
              x2="219.62"
              y2="215.986"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill1"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="734.276"
              y1="484.222"
              x2="604.724"
              y2="235.778"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill2"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="797.99"
              y1="274.389"
              x2="738.01"
              y2="52.611"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill3"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="338.549"
              y1="667.354"
              x2="278.451"
              y2="445.646"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill4"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="797.99"
              y1="667.389"
              x2="738.01"
              y2="445.611"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill5"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="934.952"
              y1="385.824"
              x2="1159.05"
              y2="334.176"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill6"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="1304.36"
              y1="443.52"
              x2="1081.64"
              y2="276.48"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill7"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="556.27"
              y1="196.122"
              x2="519.73"
              y2="184.878"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill8"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="556.27"
              y1="535.122"
              x2="519.73"
              y2="523.878"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill9"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="563.587"
              y1="485.419"
              x2="510.413"
              y2="450.581"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill10"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="563.587"
              y1="269.419"
              x2="510.413"
              y2="234.581"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill11"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="770.587"
              y1="485.419"
              x2="717.413"
              y2="450.581"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill12"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              x1="770.587"
              y1="269.419"
              x2="717.413"
              y2="234.581"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="fill13"
            >
              <stop offset="0" stop-color="#7D7D7D" />
              <stop offset="0.5" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#D8D8D8" />
            </linearGradient>
            <linearGradient
              id="sky-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#0ea5e9", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0369a1", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <g>
            <rect
              x="89"
              y="104"
              width="439"
              height="119"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              id="edif1"
              onClick={handleClick}
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill0)"
            />
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(258.612 172)"
            >
              Edificio 3
            </text>
            <rect
              x="11"
              y="281"
              width="507"
              height="158"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              id="edif5"
              onClick={handleClick}
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill1)"
            />
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(214.345 369)"
            >
              Edificio 5
            </text>
            <rect
              x="518"
              y="281"
              width="303"
              height="158"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              id="edif6"
              onClick={handleClick}
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill2)"
            />
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(600.553 369)"
            >
              Edificio Labs
            </text>
            <rect
              x="548"
              y="104"
              width="440"
              height="119"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              id="edif2"
              onClick={handleClick}
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill3)"
            />
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(717.906 172)"
            >
              Edificio
            </text>
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(804.239 172)"
            >
              1
            </text>
            <rect
              x="89"
              y="497"
              width="439"
              height="119"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              id="edif3"
              onClick={handleClick}
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill4)"
            />
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(258.612 565)"
            >
              Edificio 4
            </text>
            <rect
              x="548"
              y="497"
              width="440"
              height="119"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              id="edif4"
              onClick={handleClick}
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill5)"
            />
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(717.906 565)"
            >
              Edificio 2
            </text>
            <rect
              x="988"
              y="104"
              width="118"
              height="512"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill6)"
            />
            <rect
              x="1106"
              y="244"
              width="174"
              height="232"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              id="edifGob"
              onClick={handleClick}
              className="transition-colors duration-300 hover:fill-[url(#sky-gradient)]"
              fill="url(#fill7)"
            />
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(1153.05 354)"
            >
              Edificio
            </text>
            <text
              font-family="Open Sans,Open Sans_MSFontService,sans-serif"
              font-weight="400"
              font-size="24"
              transform="translate(1140.55 382)"
            >
              Gobierno
            </text>
            <rect
              x="528"
              y="158"
              width="20"
              height="65"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              fill="url(#fill8)"
            />
            <rect
              x="528"
              y="497"
              width="20"
              height="65"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              fill="url(#fill9)"
            />
            <rect
              x="518"
              y="439"
              width="38"
              height="58"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              fill="url(#fill10)"
            />
            <rect
              x="518"
              y="223"
              width="38"
              height="58"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              fill="url(#fill11)"
            />
            <rect
              x="725"
              y="439"
              width="38"
              height="58"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              fill="url(#fill12)"
            />
            <rect
              x="725"
              y="223"
              width="38"
              height="58"
              stroke="#042433"
              stroke-width="2"
              stroke-miterlimit="8"
              fill="url(#fill13)"
            />
          </g>
        </svg>
      </div>

      <footer className="fixed bottom-0 w-full bg-gradient-to-r from-black via-gray-800 to-gray-800">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Gabow: Developed by QuEx
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            © Copyright 2024. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              <svg
                className="w-5 h-5 fill-current"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
              </svg>
            </a>

            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Github"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
