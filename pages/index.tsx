import { Text, Grid, Image, Button } from "@nextui-org/react";
import { CSSProperties } from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import useMedia from "../repositories/useMedia";
import { useDispatch } from "react-redux";
import { switchMenuAction } from "../store/controlSlice";
import "animate.css";

const line1 = "Hi, adventurer.",
  line2 =
    "This is place where I study UI/UX, design system and implement what I have learned.",
  line3 = "Ready ?",
  line4 = "Let's start !!!";
export default function Home() {
  const dispatch = useDispatch();
  const pageStyle: CSSProperties = {
    background: "url('/glassmorphism-background.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "5%",
  };
  const isMobile = useMedia("(max-width: 400px)");
  const onViewSource = function () {
    window.open("https://github.com/duccanhole/ui-ux-collection", "_blank");
  };
  const onExplore = () => {
    dispatch(switchMenuAction(true));
  };
  return (
    <>
      <main>
        <div
          className="h-screen flex flex-col justify-center"
          style={pageStyle}
        >
          <Grid.Container
            gap={5}
            className="bg-white/50 m-50 rounded-lg shadow-2xl"
          >
            <Grid md={7} sm={10} className="flex flex-col">
              <div>
                <Text h1 size={isMobile ? 35 : 60} weight="bold">
                  UI/UX
                  <br />
                  COLLECTION
                </Text>
              </div>
              <div className="mt-2 text-xl">
                <Typewriter
                  options={{
                    cursor: "",
                    delay: 50,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`<div>${line1}</div>`)
                      .typeString(`<div>${line2}</div>`)
                      .pauseFor(1500)
                      .typeString(`<div>${line3}</div>`)
                      .pauseFor(800)
                      .typeString(`<div>${line4}</div>`)
                      .start();
                  }}
                />
              </div>
              <div className="flex flex-wrap">
                <Button
                  className="mt-2 bg-orange-700 animate__animated animate__infinite animate__pulse"
                  onPress={onExplore}
                >
                  <BsBoxArrowUpRight className="mr-2" />
                  Explore now
                </Button>
                <span className="mx-5"></span>
                <Button
                  className="mt-2 bg-gray-400/30 text-orange-600"
                  style={{ border: "2px solid #ea580c" }}
                  onPress={onViewSource}
                >
                  <BsGithub className="mr-2" color="black" />
                  View source
                </Button>
              </div>
            </Grid>
            <Grid md={5} sm={10}>
              <Image src="/image-cover.png" />
            </Grid>
          </Grid.Container>
        </div>
      </main>
    </>
  );
}
