// Project4.jsx

import { useEffect, useState } from "@importReacts";
import { useResponsive, useStoreLoading } from "@importHooks";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Div, Img, Hr, Br } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Project4 = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { setLOADING } = useStoreLoading();
  const { xxs, xs, sm, md, lg, xl, xxl, paperClass } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>([
    {
      title: "Information",
      section: [
        {
          title: "Name",
          value: "JLINT",
        },
        {
          title: "Detail",
          value: "NodeJs & TypeScript를 활용한 Vscode 린팅 확장프로그램",
        },
        {
          title: "Period",
          value: "2023.05.05 - 2023.06.05",
        },
        {
          title: "Role",
          value: "총 1명 (개인)",
        },
        {
          title: "Git",
          value: "www.github.com/JUNGHO-GIT/JLINT.git",
        },
        {
          title: "Url",
          value: "marketplace.visualstudio.com/items?itemName=JUNGHO.JLINT"
        }
      ],
    },
    {
      title: "Features",
      section: [
        {
          title: "NodeJs & TypeScript",
          value: "NodeJs(v16)를 통한 프로젝트 생성 및 빌드, 주 언어로 Typescript 사용",
        },
        {
          title: "Npm Package",
          value: "Npm을 이용해 'prettier, lodash, cheerio, mocha, ts-node' 등의 패키지를 활용하여  개발 확장성 및 효율성 확보",
        },
        {
          title: "Linting",
          value: "10가지 이상의 다양한 언어를 지원하며, 각 언어별로 린팅, 코딩 스타일 설정, Indent 최적화, 코드 자동 정렬 등의 기능을 제공하여 코드의 일관성 유지 및 코드 품질 향상",
        },
        {
          title: "Vscode Api",
          value: "Vscode Api를 통해 제작 및 빌드한 확장 프로그램을 Marketplace에 배포하여 제공함으로써 실제 프로젝트에 적용 가능한 실용적인 프로그램 제작",
        },
      ],
    },
    {
      title: "Frontend",
      section: [
        {
          title: "Language",
          value: [
            { icon: "html", value: "Html" },
            { icon: "css", value: "Css" },
            { icon: "markdown", value: "Markdown" },
          ],
        }
      ],
    },
    {
      title: "Backend",
      section: [
        {
          title: "Language",
          value: [
            { icon: "nodejs", value: "Nodejs" },
            { icon: "js", value: "Js" },
            { icon: "ts", value: "Ts" },
          ],
        },
        {
          title: "Package, Build, Scm",
          value: [
            { icon: "npm", value: "Npm" },
            { icon: "json", value: "Json" },
            { icon: "github", value: "Git" },
          ],
        },
      ],
    },
    {
      title: "Api",
      section: [
        {
          title: "Api",
          value: [
            { icon: "vscode", value: "Vscode" },
          ],
        },
      ],
    },
  ]);
  const [images, _setImages] = useState<string[]>([
    "project4_1",
    "project4_2",
    "project4_3",
    "project4_4",
    "project4_5",
  ]);

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    setLOADING(true);
    setTimeout(() => {
      setLOADING(false);
    }, 500);
  }, []);

  // 7. project ------------------------------------------------------------------------------------
  const projectNode = () => (
    <Paper className={`detail-wrapper ${paperClass} border-0 radius-0 shadow-0`}>
      {/** images **/}
      <Grid container={true} spacing={0} className={"w-100p d-center"}>
        <Grid size={12} className={"d-col-center"}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              enabled: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              enabled: true,
              clickable: true,
              el: ".image-pagination",
            }}
            modules={[
              Pagination, Navigation,
            ]}
          >
            {images.map((image: string, i: number) => (
              <SwiperSlide className={"w-100p p-relative"} key={i}>
                <Div className={"p-5px"}>
                  <Img
                    max={1000}
                    hover={false}
                    shadow={true}
                    radius={true}
                    border={true}
                    src={`${image}.webp`}
                    group={"projects"}
                  />
                </Div>
              </SwiperSlide>
            ))}
            <Div className={"swiper-button-prev"} />
            <Div className={"swiper-button-next"} />
          </Swiper>
        </Grid>
        <Grid size={12} className={"d-row-center"}>
          <Div className={"image-pagination transform-none"} />
        </Grid>
      </Grid>
      <Br m={40} />
      <Grid container={true} spacing={2} columnSpacing={10}
      className={"h-100p d-top border-light-3 radius-2 px-4vw py-4vh"}>
        {/** info, features **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f < 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20px"}>
                  {item.title}
                  <Hr className={"w-100px bg-primary h-3px"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"w-100p d-col-left mb-30px"} key={j}>
                    <Div className={"d-row-center mb-10px"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy mr-5px"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ml-10px"}>
                      {["Git", "Url"].includes(section.title) ? (
                        <Div className={"d-row-left mr-0px"}>
                          <Div
                            className={"fs-1-0rem fw-400 blue hover lh-2-0"}
                            onClick={() => {
                              window.open(`https://${section.value}`, "_blank");
                            }}
                          >
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      ) : (
                        <Div className={"d-row-left mr-0px"}>
                          <Div
                            className={"fs-1-0rem fw-400 light-black lh-2-0"}
                            onClick={() => {
                            }}
                          >
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      )}
                    </Div>
                  </Div>
                ))}
                {i !== 1 && <Hr className={"bg-light h-3px"} />}
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/** frontend, backend, server **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f >= 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20px"}>
                  {item.title}
                  <Hr className={"w-100px bg-primary h-3px"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"w-100p d-col-left mb-30px"} key={j}>
                    <Div className={"d-row-center mb-10px"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy mr-5px"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ml-10px"}>
                      {section.value.map((value: any, k: number) => (
                        <Div className={`d-row-center mr-20px`} key={k}>
                          <Img
                            max={20}
                            hover={true}
                            shadow={false}
                            border={false}
                            radius={false}
                            group={"icons"}
                            src={`${value.icon}.webp`}
                            className={"mr-5px"}
                          />
                          <Div className={"fs-1-0rem fw-400 light-black lh-2-0"}>
                            {value.value}
                          </Div>
                        </Div>
                      ))}
                    </Div>
                  </Div>
                ))}
                {i !== 3 && <Hr className={"bg-light h-3px"} />}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {projectNode()}
    </>
  );
};